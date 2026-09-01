// 반복문
// 특정 코드를 반복해서 실행 for, while, do while
// 1. for
// for (초기값; 조건식; 증가 또는 감소){
//     문장;
// }
for (let i=0; i<=3; i++){
    console.log(i);
}

// 2. for in
// 객체의 요소들을 반복해서 읽어줄 때
// for (변수 in 객체){
//     문장;
// }
const member = {
    userid: "kdhong",
    username: "홍길동",
    age: 30
};

for(let prop in member) {
    console.log(member [prop]);
}
// 3. for of
//배열이나 문자열 같이 반복 가능한 자료창에 있는 요소들을 읽어줄 때
const scores = [88,75,95,78,90];

for(let el of scores) {
    console.log(el)
}

const str1 = "javascript";

for (let str of str1) {
    console.log(str);
}
