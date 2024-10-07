const express = require("express");
const path = require("path");
const app = express();

// 정적 파일 서빙 (React 앱 빌드 후)
app.use(express.static(path.join(__dirname, "../client/build")));

// API 엔드포인트 (백엔드에서 처리할 API)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// React 앱 서빙 (모든 다른 요청을 React로 보냄)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// 서버 실행
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
