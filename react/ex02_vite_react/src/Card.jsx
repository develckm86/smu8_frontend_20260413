function Card({children,name="무명",age=0}){
    return (
        <>
            <h2>User 카드</h2>
            {children}
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
        </>
    );
}
export default Card;