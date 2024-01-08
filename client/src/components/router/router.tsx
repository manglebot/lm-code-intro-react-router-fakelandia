import { Route, Routes } from "react-router-dom";

import Home from "../home/home";
import NotFound from "../not_found/not_found";
import Confession from "../confession/confession";
import Misdemeanour from "../misdemeanour/misdemeanour";
import MainLayout from "../layouts/main_layouts";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="misdemeanour/:newMisdemeanour" element={<Misdemeanour />} />
      <Route path="confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
