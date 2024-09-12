import React, { useState } from "react";
import MenuItem from "./MenuItem.js";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [clickedLink, setClickedLink] = useState<string>("Salvador");

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-inblack md:bg-inred md:min-w-[100vw] flex items-center z-30 justify-between fixed top-0 w-full shadow-md h-12">
      <button className="md:hidden" onClick={handleToggleMenu}>
        <img
          className="h-4"
          src="/public/imagens/icons8-menu-500.svg"
          alt="Menu"
        />
      </button>
      <nav
        className={`flex md:flex-row items-center md:justify-evenly font-extrabold uppercase min-w-fvw text-2xl ${
          menuOpen ? "flex" : "hidden"
        }  absolute md:relative top-12 md:top-0 left-0 md:left-auto md:ml-auto md:mr-4 w-full md:w-auto bg-inblack md:bg-transparent md:min-w-0 md:h-auto md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-evenly w-full md:w-auto gap-y-3.5">
          <MenuItem
            onClick={() => setClickedLink("Salvador")}
            text="Salvador"
            isActive={clickedLink === "Salvador"}
          />
          <MenuItem
            onClick={() => setClickedLink("Fortaleza")}
            text="Fortaleza"
            isActive={clickedLink === "Fortaleza"}
          />
          <MenuItem
            onClick={() => setClickedLink("Belo Horizonte")}
            text="Belo Horizonte"
            isActive={clickedLink === "Belo Horizonte"}
          />
          <MenuItem
            onClick={() => setClickedLink("Recife")}
            text="Recife"
            isActive={clickedLink === "Recife"}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
