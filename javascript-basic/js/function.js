//함수: 기능
// 1. 함수 정의와 호출

// 1-1함수(를) 정의(한다)
// function 함수명() {
//     console.log("안녕하세요!");
// }

// 1-2매개변수 parameter
// function hello (str) {
//     // console.log(str);
//     return str;
// }

// function hello (str1, str2){
//     const result = str1 + str2;

//     return result;
// }

// 1.3함수 호출
// 함수명();
// hello();

// console.log("안녕하세요!");

//함수 값 반환
// const result = hello ("메롱!!");
// console.log(result);
// const juice = hello ("딸기", "바나나");
// console.log(juice)

// 2. 익명 함수
// const sum = function (a, b) {
//     return a + b;
// };

// const sumresult = sum(5, 8)
// console.log(sumresult);

//3. 화살표 함수
const sum = (a, b) => {
    return a + b;
};

const sumresult = sum(7 + 9);
console.log(sumresult);