const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const PAGES_DIR = path.join(__dirname,"pages");
const TEMPLATE_PATH =path.join(PAGES_DIR, "html","tamplate.html");

const app = express();

app.use("/css", express.static(path.join(PAGES_DIR, "css")));
app.use("/js", express.static(path.join(PAGES_DIR, "js")));

// JSON 요청 데이터 읽기
app.use(express.json());
const PORT = 10001;
const HOST = "0.0.0.0";
app.get("/", (req, res) => {
    const pagePath = path.join(PAGES_DIR,"html", "intro.html");

    const result = renderTemplate(pagePath);
    if (!result) return res.status(500).send("템플릿 구성 중 오류");

    res.send(result);
});

app.get("/home", (req, res) => {
    const pagePath = path.join(PAGES_DIR,"html", "main.html");

    const result = renderTemplate(pagePath);
    if (!result) return res.status(500).send("템플릿 구성 중 오류");

    res.send(result);
});
app.get("/maintenance", (req, res) => {
    const pagePath = path.join(PAGES_DIR,"html", "maintenance.html");

    const result = renderTemplate(pagePath);
    if (!result) return res.status(500).send("템플릿 구성 중 오류");

    res.send(result);
});
app.get("/equipment", (req, res) => {
    const pagePath = path.join(PAGES_DIR,"html", "equipment.html");

    const result = renderTemplate(pagePath);
    if (!result) return res.status(500).send("템플릿 구성 중 오류");

    res.send(result);
});



// routes.post("/bill",(req,res)=>{
//     const {} = req.query;
//     const coinrowdata = JSON.parse(fs.readFileSync(path.join(developerdatabase,"bill.json"),"utf-8"));
//     res.json(coinrowdata);
// });
// app.use("/brend",brendroutes);

function renderTemplate(pagePath) {
    const templatePath = path.join(TEMPLATE_PATH);

    try {
        let template = fs.readFileSync(templatePath, "utf-8");
        const pageContent = fs.readFileSync(pagePath, "utf-8");

        return template.replace("<!-- MAIN_CONTENT -->", pageContent);
    } catch (err) {
        console.error("템플릿 렌더링 실패:", err);
        return null;
    }
}

// 서버 실행
app.listen(PORT, HOST, () => {
    console.log(`게임 서버 실행 완료`);
    console.log(`내 컴퓨터: http://localhost:${PORT}`);
    console.log(`내부 네트워크: http://내부IP주소:${PORT}`);
});