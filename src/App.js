// BrowserRouter : / 다음 원하는 주소명 사용 가능
// HashRouter    : /#/ 다음 원하는 주소명 사용 가능
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter
      basename={process.env.PUBLIC_URL}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h2>hello</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
