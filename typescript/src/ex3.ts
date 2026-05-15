//유니언
let id:string|number;
id=13;
id="dd";
//id=[];
//컴퓨티드벨류, 열거형, enum(==java)
type Direct="TOP"|"DOWN"|"RIGHT"|"LEFT";
// let direct:string="TOP"|"DOWN"|"RIGHT"|"LEFT";
function move(dir:Direct){
    console.log(dir+"로 움직인다.")
}
// move("아래");
move("DOWN");

type Name=string; //type 은 단일 변수의 타입을 기본형으로 지정
//let name:string;
type UserType={
    name:string;
}
const u:UserType={name:"경민코딩"}
//type : 범용 (객체,기본형,열거형)
//interface : 객체의 타입지정용으로 생성됨 (상속에 유리)
//interface I=string;
//interface I="A"|"B";

interface MemberType{
    id:string|number
}
interface ChildType extends MemberType{
    name:string
}
interface ChildType{
    age:number
}
const m:MemberType={id:1234}
const c:ChildType={
    name:"smu8",
    id:3456,
    age:39
}

