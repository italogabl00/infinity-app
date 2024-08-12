import { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Switch from '../components/Switch';
import { FaInstagramSquare } from "react-icons/fa";
import { BiInfinite } from "react-icons/bi";

function Professores() {
    const [professores, setProfessores] = useState([]);
    const [clickedLink, setClickedLink] = useState('Salvador');
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('Salvador');
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
            const response = await fetch('https://back-end-portfolio-ten.vercel.app/professores/listar');
            const data = await response.json();
            
            setProfessores(data);
        };

        fetchData();
    }, [isSwitchedOn]);

    const handleToggleSwitch = (newState) => {
        setIsSwitchedOn(newState);
    };
    const filteredProfessoresCourse = professores.filter(professor => {
        const isAreaMatch = isSwitchedOn ? professor.area === 'TECH' : professor.area === 'CRIAT';
        const isPraçaPreenchida = typeof professor.praca === 'string' && professor.praca.trim() !== ''; // Verifica se a praça está preenchida

        const isSquareMatch = (() => {
            switch (clickedLink) {
                case 'Salvador':
                    return professor.praca === 'Salvador';
                case 'Fortaleza':
                    return professor.praca === 'Fortaleza';
                case 'Belo Horizonte':
                    return professor.praca === 'Belo Horizonte';
                case 'Recife':
                    return professor.praca === 'Recife';
                default:
                    return false;
            }
        })();
        return isAreaMatch && isPraçaPreenchida && isSquareMatch;
    });
    console.table()
    console.log("Filtered Professores Course:", filteredProfessoresCourse);

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-inallblack to-inblack text-inwhite">
            <header className="bg-inblack md:bg-inred flex items-center z-30 justify-between fixed top-0 w-[100vw] shadow-md h-16">
                <div className="md:flex items-center justify-center w-full hidden ">
                    <h3 className="uppercase font-extrabold text-2xl">
                        {activeOption}
                    </h3>
                </div>
                <img
                    src="/public/imagens/logoblack.png"
                    className="invisible md:visible absolute top-0 left-0 h-full"
                    alt=""
                />
                 <Link to='/' className='mt-8 ml-5 text-white bg-inred px-6 py-2 rounded-md font-bold mb-8'>
                                    <button className='uppercase'>Home</button>
                                </Link>

                <button
                    className="invisible md:visible absolute top-3 right-4"
                    onClick={toggleMenu}
                >
                    <FiAlignJustify size={40} style={{ color: "#1c1919" }} />
                </button>
                <nav className=" md:hidden flex flex-row items-center justify-evenly font-extrabold uppercase min-w-fvw text-2xl relative">
                    <ul className="flex flex-row items-center justify-evenly min-w-[100vw] ">
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
            <h1 className=" text-[220px] lg:text-[160px] lg:mt-6 md:text-[120px] md:mt-8 sm:text-[75px] sm:mt-12 sml:text-[65px] font-bold tracking-wider text-ingrey drop-shadow-sm mb-5 font-bebas">
                PROFESSORES
            </h1>

           
       
           

            <section className="min-h-[65vh] min-w-[98vw] 4xl:mt-[-5vh] flex justify-center item-center p-12 sm:p-4 relative drop-shadow-xl">
                <Switch
                    className="absolute top-4 left-12"
                    onToggle={handleToggleSwitch}
                />

                <div className=" mt-6 grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 row-auto sm:mt-12">
                    {filteredProfessoresCourse.map((professor) => (
                        <div
                            key={professor.id}
                            className="bg-inblack p-6 flex flex-col items-center justify-center rounded-md h-auto w-full lg:max-w-4xl max-w-card-width"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-lg tracking-widest font-bebas">
                                    {professor.area}
                                </p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <BiInfinite
                                            key={i}
                                            size={20}
                                            style={{ color: "#E53F2E" }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <img className="h-auto w-auto mb-2" src={professor.imgUrl} alt="" />
                            <h4 className="font-extrabold text-xl mb-2 text-inred">
                                {professor.nome}
                            </h4>
                            <p className="text-md font-extralight mb-6">
                                {professor.formacao}
                            </p>
                            <div className="flex items-center gap-3">
                                {professor.rede && professor.rede.split(", ").map((rede, i) => (
                                    <a
                                        key={i}
                                        href={rede}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagramSquare
                                            size={24}
                                            style={{ color: "#292929" }}
                                        />
                                    </a>
                                ))}

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

const NavLink = ({ label, onClick, active }) => (
    <li className='cursor-pointer relative group'>
        <Link
            to="#"
            onClick={() => onClick(label)}
            className={`relative ${active ? 'text-white' : 'text-blue-500'}`}
        >
            {label}
            <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-inred md:bg-inblack transition-all ${active ? 'w-full' : 'group-hover:w-full'}`}></span>
        </Link>
    </li>
);


export default Professores;











































































// import React, { useState } from 'react';
// import { FiAlignJustify, FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
// import Switch from '../components/Switch';
// import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
// import { GiBouncingSword, GiFireShield } from "react-icons/gi";
// import { BiInfinite } from "react-icons/bi";


// function Professores() {
//     const [clickedLink, setClickedLink] = useState('Salvador');
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [activeOption, setActiveOption] = useState('Salvador');

//     const handleLinkClick = (link) => {
//         setClickedLink(link);
//         setActiveOption(link);
//     };


//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const [isSwitchedOn, setIsSwitchedOn] = useState(false);

//     const handleToggleSwitch = (newState) => {
//         setIsSwitchedOn(newState);
//     };

//     return (
//         <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-inallblack to-inblack text-inwhite'>
//             {/* Menu de navegação da página. */}
//             <header className='bg-inblack md:bg-inred flex items-center z-30 justify-between fixed top-0 w-[100vw] shadow-md h-16'>
//                 <div className="md:flex items-center justify-center w-full hidden ">
//                     <h3 className='uppercase font-extrabold text-2xl'>{activeOption}</h3>
//                 </div>

//                 {/* Logo da Infinity */}
//                 <img src="/public/imagens/logoblack.png" className='invisible md:visible absolute top-0 left-0 h-full' alt="" />

//                 {/* Menu Hamburguer - Versão Mobile */}
//                 <button className='invisible md:visible absolute top-3 right-4' onClick={toggleMenu}>
//                     <FiAlignJustify size={40} style={{ color: '#1c1919' }} />
//                 </button>

//                 <nav className=' md:hidden flex flex-row items-center justify-evenly font-extrabold uppercase min-w-fvw text-2xl relative'>
//                     <ul className='flex flex-row items-center justify-evenly min-w-[100vw] '>
//                         <NavLink label="Salvador" onClick={handleLinkClick} active={clickedLink === 'Salvador'} />
//                         <NavLink label="Fortaleza" onClick={handleLinkClick} active={clickedLink === 'Fortaleza'} />
//                         <NavLink label="Belo Horizonte" onClick={handleLinkClick} active={clickedLink === 'Belo Horizonte'} />
//                         <NavLink label="Recife" onClick={handleLinkClick} active={clickedLink === 'Recife'} />
//                     </ul>
//                 </nav>

//             </header>
//             {/* Menu Responsivo */}
//             {menuOpen && (
//                 <div className='invisible md:visible absolute top-12 w-[100vw] bg-inred text-white z-40 h-[100vh] flex justify-center items-center'>

//                     <ul className='flex flex-col items-center justify-center text-2xl gap-10 uppercase font-extrabold'>
//                         <NavLink label="Salvador" onClick={() => {
//                             handleLinkClick('Salvador');
//                             toggleMenu();
//                         }} active={clickedLink === 'Salvador'} />
//                         <NavLink label="Fortaleza" onClick={() => {
//                             handleLinkClick('Fortaleza');
//                             toggleMenu();
//                         }} active={clickedLink === 'Fortaleza'} />
//                         <NavLink label="Belo Horizonte" onClick={() => {
//                             handleLinkClick('Belo Horizonte');
//                             toggleMenu();
//                         }} active={clickedLink === 'Belo Horizonte'} />
//                         <NavLink label="Recife" onClick={() => {
//                             handleLinkClick('Recife');
//                             toggleMenu();
//                         }} active={clickedLink === 'Recife'} />
//                     </ul>
//                 </div>
//             )}

//             <h1 className=' text-[220px] lg:text-[160px] lg:mt-6 md:text-[120px] md:mt-8 sm:text-[75px] sm:mt-12 sml:text-[65px] font-bold tracking-wider text-ingrey drop-shadow-sm mb-5 font-bebas'>PROFESSORES</h1>

//             <section className='min-h-[65vh] 4xl:mt-[-5vh] flex justify-center item-center p-12 sm:p-4 relative drop-shadow-xl'>

//                 {/* Switch para exibir a área do professor */}

//                 <Switch className="absolute top-4 left-16 sm:left-18" onToggle={handleToggleSwitch} />

//                 {/* Área onde as fichas dos professores são exibidas */}

//                 <div className=' mt-6 grid grid-cols-12 xl:grid-cols-9 lg:grid-cols-6 sm:grid-cols-3 gap-4 row-auto sm:mt-12'>

//                     <div className='bg-inblack p-6 flex-col items-center justify-center rounded-md h-[40rem] col-span-3'>
//                         <div className='flex row justify-between items-center mb-6'>
//                             <p className='text-lg tracking-widest font-bebas'>DESIGN</p>
//                             <div className='flex row'>
//                                 <BiInfinite size={20} style={{ color: '#E53F2E' }} />
//                                 <BiInfinite size={20} style={{ color: '#E53F2E' }} />
//                                 <BiInfinite size={20} style={{ color: '#E53F2E' }} />
//                                 <BiInfinite size={20} style={{ color: '#E53F2E' }} />
//                                 <BiInfinite size={20} style={{ color: '#E53F2E' }} />
//                             </div>
//                         </div>

//                         <img className='h-[19rem] mb-6 m-auto p-1' src="/imagens/exemplo3.png" alt="" />

//                         <h4 className='font-extrabold text-xl mb-2 text-inred '>FULANO BELTRANO</h4>

//                         <p className='text-md font-extralight mb-12'>Formada em Lorem ipsum dolor sit amet. Cum expedita doloremque a galisum vitae.</p>

//                         <div className='flex row items-center justify-start gap-6 min-w-[100%]' >
//                             <div className='flex row items-center gap-3'>
//                                 <FaInstagramSquare size={24} style={{ color: '#292929' }} />
//                                 <FaLinkedin size={24} style={{ color: '#292929' }} />
//                                 <FaGithubSquare size={24} style={{ color: '#292929' }} />

//                             </div>
//                             <div className='gap-3 flex row'>
//                                 <div className='ml-16 flex row items-center justify-between gap-1'>
//                                     <p>07</p>
//                                     <GiBouncingSword size={24} style={{ color: '#E53F2E' }} />
//                                 </div>
//                                 <div className='flex row items-center justify-between gap-1'>
//                                     <p>05</p>
//                                     <GiFireShield size={24} style={{ color: '#E53F2E' }} />
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// }

// const NavLink = ({ label, onClick, active }) => (
//     <li className='cursor-pointer relative group'>
//         <Link
//             to="#"
//             onClick={() => onClick(label)}
//             className={`relative ${active ? 'text-white' : 'text-blue-500'}`}
//         >
//             {label}
//             <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-inred md:bg-inblack transition-all ${active ? 'w-full' : 'group-hover:w-full'}`}></span>
//         </Link>
//     </li>
// );

// export default Professores;

