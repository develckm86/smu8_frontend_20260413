// get /emp/api/ -> 사원리스트 json
// get /emp/api/:id -> 사원상세 json
// post /emp/api/ -> 사원등록 (성공,500)
// put /emp/api/ -> 사원수정 (성공,500)
// delete /emp/api/ -> 사원삭제 (성공,500)
let url="/emp/api"
const root=document.querySelector("#root");
const empsBtn=document.querySelector("#empsBtn");
const loadEms=async ()=>{
    const res=await fetch(url);
    const emps=await res.json();
    let html=`<table>`;
    html+=`<tr><th>사번</th><th>이름</th><th>부서</th><th>상세</th></tr>`;
    for(e of emps){
        html += `<tr>
                    <td>${e.EMPNO}</td>
                    <td>${e.ENAME}</td>
                    <td>${e.DEPTNO}</td>
                    <td><button onclick="loadEmpHandler(${e.EMPNO})">상세</button></td></tr>`;
    }
    html+=`</table>`;
    root.innerHTML=html;
}
const loadEmpHandler=async (empno)=>{
    const emp=await loadEmp(empno);
    const empDiv=await renderEmp(emp);
    root.innerHTML="";
    root.append(empDiv);
}
const loadEmp=async (empno)=>{
    //"/emp/api/ 7934"
    const res=await fetch(url+"/"+empno)
    const emp=await res.json();
    console.log(emp);
    return emp;
}
const renderEmp=async (emp)=>{
    const div=document.createElement("div");
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    p1.innerText="사번(empno) :"+emp.EMPNO;
    p2.innerText="이름(ename) :"+emp.ENAME;
    p3.innerText="직책(job) :"+emp.JOB;
    div.append(p1,p2,p3);
    return div;
}


empsBtn.addEventListener("click",loadEms);