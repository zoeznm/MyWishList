const express = require("express"); // Express 모듈 불러오기
const path = require("path"); // 경로 모듈 불러오기
const app = express(); // Express 애플리케이션 생성

// 정적 파일 경로 설정 (React 빌드 파일 제공)
app.use(express.static(path.join(__dirname, "../client/build")));

// 뷰 엔진 설정 (만약 EJS도 같이 사용하려면 유지)
app.set("view engine", "ejs"); // 뷰 엔진으로 EJS 사용
app.set("views", path.join(__dirname, "../client/views")); // 뷰 파일 경로 설정

// API 또는 기타 서버 사이드 라우트
app.get("/api/some-endpoint", (req, res) => {
  res.json({ message: "This is an API response" }); // API 응답
});

// React 앱을 서빙하는 기본 라우트 (모든 경로가 index.html로 리다이렉트됨)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html")); // React 앱의 index.html 파일 서빙
});

// 서버 시작
const PORT = process.env.PORT || 3000; // 포트 설정 (환경변수 또는 기본 3000)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // 서버 실행 로그
});
