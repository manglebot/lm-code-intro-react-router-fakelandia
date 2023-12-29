import { Route, Routes } from "react-router-dom";

import Home from "../home/home";
import NotFound from "../not_found/not_found";
import Confession from "../confession/confession";
import Misdemeanour from "../misdemeanour/misdemeanour";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/confession" element={<Confession />} />
    <Route path="/misdemeanour" element={<Misdemeanour />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
