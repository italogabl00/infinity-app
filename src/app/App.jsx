import React from "react";
import Home from "../Pages/Home";
import Professores from "../Pages/Professores";
import Certificado from "../Pages/Certificado"
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'

function App() {
   return (
      <div className="bg-inblack text-inwhite min-w-[100vw] min-h-[100vh]">
         <Outlet />
         <Footer />
      </div>
   )
}

export default App;