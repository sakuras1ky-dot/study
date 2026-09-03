// 자료형
// 1. number 숫자
const a = 19;
console.log(a);
const b = "19"; // 19=문자열
console.log(typeof b);
const c = 5.7;
console.log(typeof c);

// 2. string 문자열
const str1 = "안녕하세요";
console.log (str1);
const str2 = "반갑습니다";
const spc = " ";
console.log(str1 + spc + str2); // 여기서 +는 연결 연산자

// 템플릿 문자열
const strsum = '$(str1) $(str2)';
console.log(strsum);

// 3. booleam 참/거짓, true/false
const t = true;
const f = false;

const r = 19 <= 20;
console.log(r); // true

// 4. undefined
let und;
console.log(und); // undefined

// 5. null
// 유효하지 않은 값

// 6. object 객체
//객체는 프로퍼티(속성)와 메소드(기능)으로 구성되어 있다
// {키: 값, 키: 값, 키:값,...}
const member = {
    userid: "kdhong",
    username: "홍길동",
    age: 28,
    // 6.1 메서드란??
    // 프로퍼티는 객체에 소속된 변수, 객체의 상태를 의미
    // 메서드는 객체에 소속된 함수, 객체의 동작을 정의
    // intro: function (){
    //     return "나의 이름은 " + this.username + "입니다";
    // },
    intro () {
        return "나의 이름은 " + this.username + "입니다";
    },
};
console.log (member.age); //28
console.log (member.username); //홍길동
console.log (member.userid); //kdhong
const introtxt = member.intro()
console.log(introtxt);

// 7. array 배열
const menulist = ["홈", "문화관광축제", "전국축제", "축제달력", "테마"];
// console.log(menulist);
// console.log(menulist[0]);
// console.log(menulist[1]);
// console.log(menulist[2]);
// console.log(menulist[3]);
// console.log(menulist[4]);
// console.log(menulist.length);
