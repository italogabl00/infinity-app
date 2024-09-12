import React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'

function App() {
   return (
      <div className="bg-inblack text-inwhite min-w-screen min-h-screen overflow-hidden">
      <Outlet />
      <Footer />
    </div>
   )
}

export default App;