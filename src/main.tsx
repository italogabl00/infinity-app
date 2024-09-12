import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.js";
import Home from "./Pages/Home";
import Professores from "./Pages/Professores";
import Certificado from "./Pages/Certificado";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="professores" element={<Professores />} />
        <Route path="certificado" element={<Certificado />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
