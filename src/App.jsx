import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/home page/Home";
import Detail from "./pages/detail page/Detail";
import Explore from "./pages/explore/Explore";
import About from "./pages/about page/About";
import _404 from "./pages/404/_404";
import Filter from "./component/filter/Filter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:query" element={<Explore />} />
        <Route path="/:query/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
