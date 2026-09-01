// 1. 산수 연산자
// + 덧셈
// - 뺄셈
// * 곱셈
// / 나눗셈
// % 나머지 계산
// ** 거듭제곱
// ++ 1증가
// -- 1감소

// 2. 할당 연산자
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = "안녕";

a += 3; // a = a + 3; 
console.log(a);
b -= 8; // b=b-8;
c *=2 // 60, c = c * 2;
d /= 10; // 4, d = d / 10;
e %= 6; // 2, e = e % 6;
f += "하세요"; // 한녕하세요, f = f + "하세요";
console.log(b, c, d, e, f);

// 3. 비교 연산자
a = 3;
b = "3";
c = 5;
d = 3;

console.log(a == b); // true, 같다
console.log(a === b); // false 값과 데이터 타입이 같다
console.log(a != b); // false, 다르다
console.log(a !== b); // true, 값과 데이터 타입이 다르다
console.log(a < c); // 작다 false
console.log(a > c); // 크다 true
console.log(a <= c); //작거나 같다 true
console.log(a >= c); //크거나 같다 false

// 4. 논리 연산자
// console.log(a === d && a !== b);
// && and 연산자 두 조건
// || or 연산자
// ! not 연산자