const express = require("express");
const path = require("path");
const app = express();

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, "../client/public"))); 

// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client/views")); 

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.render("main"); // client/views/main.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
