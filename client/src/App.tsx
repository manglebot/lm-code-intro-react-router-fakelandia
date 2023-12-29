import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import NotFound from "./components/not_found/not_found";
import Confession from "./components/confession/confession";
import Misdemeanour from "./components/misdemeanour/misdemeanour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/misdemeanour" element={<Misdemeanour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
