const express = require("express");
const path = require("path");
const app = express();

// 정적 파일 경로 설정 (React 빌드 파일 제공)
app.use(express.static(path.join(__dirname, "../client/build")));

// 뷰 엔진 설정 (만약 EJS도 같이 사용하려면 유지)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client/views"));

// API 또는 기타 서버 사이드 라우트
app.get("/api/some-endpoint", (req, res) => {
  res.json({ message: "This is an API response" });
});

// React 앱을 서빙하는 기본 라우트 (모든 경로가 index.html로 리다이렉트됨)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
