import React from "react";
import ReactDOM from "react-dom/client"; // React 18부터 ReactDOM의 import 방식이 변경되었습니다.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router import
import App from "./App.js"; // 메인 페이지
import Top from "./pages/top.js";
import Bottom from "./pages/bottom.js";
import Bag from "./pages/bag.js";
import Hat from "./pages/hat.js";
import Shoes from "./pages/shoes.js";
const root = ReactDOM.createRoot(document.getElementById("root")); // root 생성
root.render(
  <Router>
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<App />} />
      {/* /top 페이지 */}
      <Route path="/top" element={<Top />} />
      {/* /bottom 페이지 */}
      <Route path="/bottom" element={<Bottom />} />
      {/* /bottom 페이지 */}
      <Route path="/bag" element={<Bag />} />
      {/* /bottom 페이지 */}
      <Route path="/hat" element={<Hat />} />
      {/* /bottom 페이지 */}
      <Route path="/shoes" element={<Shoes />} />
      {/* 그 외 경로에 대한 404 페이지 처리 */}
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  </Router>
);
