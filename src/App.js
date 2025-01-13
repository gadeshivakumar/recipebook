import "./styles.css";
import Card from "./components/Card";
import Menu from "./components/Menu";
import Description from "./components/Description";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="process" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}
