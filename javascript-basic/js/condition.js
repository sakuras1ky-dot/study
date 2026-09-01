// 조건문
// 1. if ~ 구문
// if (조건식){문장;}
// 조건식이 true 면 문장 실행

let entryprice = 10000; // 입장료 10000원
let age = 70;
// age = 30;

// age가 65이상
if (age >= 65) {
    entryprice = 0; // 입장료 0원
}
console.log('입장료: ${entryprice}원');

// 2. if ~ else ~ 구문
// if  (조건식) {
//      문장;
//       KKK
// }
if (age >= 65) {
    console.log("입장료는 무료입니다.");
    } else {
        console.log('입장료눈 $(entryprice}원입니다.');
    }

// 3. if ~ else if ~ else ~ 구문
// if (조건식1) {
//     문장1;
// } else if (조건식2) {
//     문장2;
// }else if (조건식3) {
//     문장3;
// } else if {
//     문장
// }