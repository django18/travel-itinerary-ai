import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./container/Hero";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Hero />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
