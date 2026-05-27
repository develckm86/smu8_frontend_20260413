import {useState} from "react";


/*
  할일 한개 컴포넌트
*/
function TodoItem({todo, deleteTodo, toggleTodo}) {
    return (
        <div>
            {/* 완료 여부 */}
            <input type="checkbox" checked={todo.done}
                   onChange={() => {toggleTodo(todo.id);}}/>

            {/* 할일 내용 */}
            <span style={{textDecoration: todo.done ? "line-through" : "none"}}>
                {todo.text}
            </span>
            {/* 삭제 버튼 */}
            <button onClick={() => {deleteTodo(todo.id);}}>삭제
            </button>

        </div>
    );
}


function App() {

    //할일 목록 state
    const [todos, setTodos] = useState([
        {id: 1,text: "리액트 공부",done: false},
        {id: 2, text: "운동하기", done: true},
        {id: 3,text: "자바 복습",done: false},
        {id: 4,text: "스프링부트 프로젝트",done: false},
        {id: 5,text: "타입스크립트 강의 보기",done: true}, 
        {id: 6,text: "노드 서버 만들기",done: false},
        {id: 7,text: "도커 공부",done: false},
        {id: 8,text: "JWT 로그인 구현",done: true}, 
        {id: 9,text: "깃허브 업로드",done: false},
        {id: 10,text: "리액트 컴포넌트 분리",done: true}
    ]);

    const [inputText, setInputText] = useState(""); //할일 목록 등록

    const [searchText, setSearchText] = useState("" )//할일 목록 검색

    /*할일 등록*/
    function addTodo() {
        if (inputText.trim() === "") {return;} //내용이 없으면 취소
        const newTodo = {
            id: Date.now(),
            text: inputText,
            done: false
        };
        setTodos([...todos, newTodo]);//기존일정+새일정으로 상태변경
        setInputText("");
    }


    /*할일 삭제*/
    function deleteTodo(id) {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }
    
    /*완료 여부 변경*/
    function toggleTodo(id) {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    /*검색된 목록 만들기*/

    const filteredTodos = todos.filter((todo) => {
        //검색어 없으면 전체 출력
        if (searchText.trim() === "") {return true;}

        const regex = new RegExp(searchText, "i");

        return regex.test(todo.text);
    });
    return (
        <div>

            <h1>할일 목록</h1>
            <hr/>
            {/* 등록 영역 */}
            <div>
                <input
                    type="text"
                    value={inputText}
                    placeholder="할일 입력"
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                />
                <button onClick={addTodo}>
                    등록
                </button>
            </div>
            <hr/>
            <div>
                <label htmlFor="search"></label>
                <input id="search" type="text" placeholder="검색할 내역을 입력하세요"
                    onInput={(e)=>{setSearchText(e.target.value)}}
                />
            </div>
            <hr/>
            <div>
                {/* 검색된 목록 출력 */
                    filteredTodos.map((todo) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
}

export default App;