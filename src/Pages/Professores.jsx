import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiInfinite } from "react-icons/bi";

function Professores() {
  const [professores, setProfessores] = useState([]);
  const [clickedLink, setClickedLink] = useState("Salvador");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("Salvador");
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);

  const handleLinkClick = (link) => {
    setClickedLink(link);
    setActiveOption(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://back-end-portfolio-ten.vercel.app/professores/listar"
      );
      const data = await response.json();

      setProfessores(data);
    };

    fetchData();
  }, [isSwitchedOn]);

  const handleToggleSwitch = (newState) => {
    setIsSwitchedOn(newState);
  };

  const filteredProfessoresCourse = professores.filter((professor) => {
    const isAreaMatch = isSwitchedOn
      ? professor.area === "TECH"
      : professor.area === "CRIAT";
    const isPraçaPreenchida =
      typeof professor.praca === "string" && professor.praca.trim() !== "";

    const isSquareMatch = (() => {
      switch (clickedLink) {
        case "Salvador":
          return professor.praca === "Salvador";
        case "Fortaleza":
          return professor.praca === "Fortaleza";
        case "Belo Horizonte":
          return professor.praca === "Belo Horizonte";
        case "Recife":
          return professor.praca === "Recife";
        default:
          return false;
      }
    })();
    return isAreaMatch && isPraçaPreenchida && isSquareMatch;
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-inallblack to-inblack text-inwhite overflow-hidden">
      <header className="bg-inblack md:bg-inred flex items-center z-30 justify-between fixed top-0 w-full shadow-md h-16">
        <div className="md:flex items-center justify-center w-full hidden">
          <h3 className="uppercase font-extrabold text-2xl">{activeOption}</h3>
        </div>
        <img
          src="/public/imagens/logoblack.png"
          className="invisible md:visible absolute top-0 left-0 h-full"
          alt="Logo"
        />
        <Link
          to="/"
          className="mt-8 ml-5 text-white bg-inred px-6 py-2 rounded-md font-bold mb-8"
        >
          <button className="uppercase">Home</button>
        </Link>
        <button
          className="invisible md:visible absolute top-3 right-4"
          onClick={toggleMenu}
        >
          <FiAlignJustify size={40} style={{ color: "#1c1919" }} />
        </button>
        <nav className="md:hidden flex flex-row items-center justify-evenly font-extrabold uppercase min-w-fvw text-2xl relative">
          <ul className="flex flex-row items-center justify-evenly min-w-[100vw]">
            <NavLink
              label="Salvador"
              onClick={handleLinkClick}
              active={clickedLink === "Salvador"}
            />
            <NavLink
              label="Fortaleza"
              onClick={handleLinkClick}
              active={clickedLink === "Fortaleza"}
            />
            <NavLink
              label="Belo Horizonte"
              onClick={handleLinkClick}
              active={clickedLink === "Belo Horizonte"}
            />
            <NavLink
              label="Recife"
              onClick={handleLinkClick}
              active={clickedLink === "Recife"}
            />
          </ul>
        </nav>
      </header>
      {menuOpen && (
        <div className="invisible md:visible absolute top-12 w-[100vw] bg-inred text-white z-40 h-[100vh] flex justify-center items-center">
          <ul className="flex flex-col items-center justify-center text-2xl gap-10 uppercase font-extrabold">
            <NavLink
              label="Salvador"
              onClick={() => {
                handleLinkClick("Salvador");
                toggleMenu();
              }}
              active={clickedLink === "Salvador"}
            />
            <NavLink
              label="Fortaleza"
              onClick={() => {
                handleLinkClick("Fortaleza");
                toggleMenu();
              }}
              active={clickedLink === "Fortaleza"}
            />
            <NavLink
              label="Belo Horizonte"
              onClick={() => {
                handleLinkClick("Belo Horizonte");
                toggleMenu();
              }}
              active={clickedLink === "Belo Horizonte"}
            />
            <NavLink
              label="Recife"
              onClick={() => {
                handleLinkClick("Recife");
                toggleMenu();
              }}
              active={clickedLink === "Recife"}
            />
          </ul>
        </div>
      )}

      <h1 className="mt-12 text-[220px] lg:text-[160px] md:text-[120px] sm:text-[75px] sml:text-[65px] font-bold tracking-wider text-ingrey drop-shadow-sm font-bebas leading-none">
        PROFESSORES
      </h1>

      <section className="min-h-[65vh] w-full flex justify-center items-center p-12 sm:p-4 relative drop-shadow-xl">
        <Switch
          className="absolute top-4 left-12 cursor-pointer"
          onToggle={handleToggleSwitch}
        />

        <div className="mt-6 mr-44 grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 row-auto sm:mt-12 justify-items-center">
          {filteredProfessoresCourse.map((professor) => (
            <div
              key={professor.id}
              className={`bg-inblack p-6 flex flex-col items-center justify-center rounded-lg h-auto w-full lg:max-w-4xl max-w-card-width ${
                isSwitchedOn &&
                professor.area !== "TECH" &&
                professor.area !== "CRIAT"
                  ? " opacity-70"
                  : ""
              }`}
              style={{ maxWidth: "300px", width: "100%" }} // Largura fixa para alinhamento consistente
            >
              <div className="flex flex-col items-center justify-between mb-6">
                <p className="text-lg tracking-widest font-bebas">
                  {isSwitchedOn
                    ? professor.area === "TECH"
                      ? "TECH"
                      : "CRIATIVO"
                    : "CRIATIVO"}
                </p>
                <div className="flex">
                  {[...Array(1)].map((_, i) => (
                    <BiInfinite
                      key={i}
                      size={20}
                      style={{ color: "#E53F2E" }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center h-full">
                <img
                  className="h-48 w-48 object-cover rounded-md mb-3"
                  src={professor.imgUrl}
                  alt={professor.nome}
                />
                <h4 className="font-extrabold text-xl mb-2 text-inred">
                  {professor.nome}
                </h4>
                <p className="text-md font-extralight mb-6">
                  {professor.formacao}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {professor.rede &&
                  professor.rede.split(", ").map((rede, i) => {
                    let Icon;
                    if (rede.includes("instagram.com")) {
                      Icon = FaInstagramSquare;
                    } else if (rede.includes("github.com")) {
                      Icon = FaGithubSquare;
                    } else if (rede.includes("linkedin.com")) {
                      Icon = FaLinkedin;
                    }

                    return (
                      <a
                        key={i}
                        href={rede}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={24} style={{ color: "#FF0000" }} />
                      </a>
                    );
                  })}
              </div>

              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <p>07</p>
                  <BiInfinite size={24} style={{ color: "#E53F2E" }} />
                </div>
                <div className="flex items-center gap-1">
                  <p>05</p>
                  <BiInfinite size={24} style={{ color: "#E53F2E" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function NavLink({ label, onClick, active }) {
  return (
    <li
      className={`cursor-pointer ${active ? "text-inred" : "hover:text-inred"}`}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
}

export default Professores;
