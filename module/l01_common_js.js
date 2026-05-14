//l01_common_js.js
//모듈 == 라이브러리 (프로그램시 사용되는 도구)
//패키지
// import { Temporal } from 'temporal-polyfill' ////es module (브라우저+최근문법들)

const {Temporal} = require( 'temporal-polyfill') //common js (nodejs에서 라이브러리 사용하는 방법)
console.log(Temporal.Now.zonedDateTimeISO().toString())
