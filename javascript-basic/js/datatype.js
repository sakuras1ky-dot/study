// 자료형
// 1. number 숫자
const a = 19;
console.log(a);
const b = "19"; // 19=문자열
console.log(typeof b);
const c = 5.7;
console.log(typeof c);

// 2. string 문자열
xonst str1 = "안녕하세요";
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

// 6. object