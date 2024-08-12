import './index.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './app/App.jsx';
import Home from './Pages/Home.jsx';
import Professores from './Pages/Professores.jsx';
import Certificado from './Pages/Certificado.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="professores" element={<Professores />} />
        <Route path="certificado" element={<Certificado />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
