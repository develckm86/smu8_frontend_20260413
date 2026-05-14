//l05_module_import
import {sum, username, User} from "./l04_module_export.js"

console.log(sum(11,22,33));
console.log(username)
console.log(new User("sum8",20))
//nodejs는 전역에서 await 사용가능
//브라우저에서도 모듈로 사용되는 js의 전역은 await 사용가능 => 모듈이 비동기로 호출되기때문
const module=await import("./l04_module_export.js");
console.log(module.username)
console.log(module.sum(111,222,333))
