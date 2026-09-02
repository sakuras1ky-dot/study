// 스코프: 범위
// 변수에 접근할 수 있는 유효 범위를 위미

// 1. 전역스코프(global scope)
//전역 스코프애서 선언된 전역 변수는 프로그램 내 어디서든 접근 가능
// let num = 19;

// function fnc() {
//     console.log(num);
// }
// fnc();

// 2. 함수 스코프
// 함수 스코프에서 선언된 변수를 지역변수
//변수가 선언된 해당 함수 스코프에서만 접근 가능
// function fnc1() {
//     let num1 = 10;
//     console.log(num1);
// }

// console.log(num1)
// fnc(num1);

// 3. 블록 스코프(Block scope)
if (true) {
    let num2 = 9;
}

console.log(num2);