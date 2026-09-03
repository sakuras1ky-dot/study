// 이벤트란??
// 웹 페이지에서 발생하는 사건을 의미
// 이벤트를 처리하는 함수를 이벤트 핸들러 또는 이벤트 리스너

const title = document.querySelector(".title");
// console.log(title);

function changetext() {
    // console.log("클릭했습니다!");
    title.textContent = "반갑습니다!";
};

//이벤트 리스너
// title.addEventListener("이벤트 종류", 콜백 함수());
// title.addEventListener("click", function () => {
//     console.log("클릭했습니다!");
//     title.textContent = "반갑습니다!";
// });
title.addEventListener("click", changetext);
// 마우스 이벤트
//click, mouseover, mouseout, mouseenter, mouseleave