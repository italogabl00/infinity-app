import Logo from "../components/Logo.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative sm:bg-gradient-to-b from-inred via-20% via-[#e5402e78] to-70%">
        <div className="bg-inblack text-white min-h-[56rem] bg-[url('../../public/imagens/fundo2.jpg')] bg-cover bg-no-repeat bg-opacity-10 items-start justify-start pl-4">
          <div className="relative sm:flex sm:flex-col sm:justify-center sm:items-start sm:px-1 2xl:px-16 4xl:px-28 py-6">
            <Logo />
          </div>

          <div className="sm:mt-0 mt-6 sm:ml-0 ml-44 max-w-lg sm:flex sm:flex-col sm:justify-start sm:items-start sm:max-w-4/5 flex flex-col gap-7 ">
            
            <h3 className="text-5xl tracking-widest sm:tracking-wide sm:text-4xl sml:text-3xl 4xl:mb-[-3vw] lg:mb-[-6vw]">
              CONHEÇA <span className="text-inred">NOSSA</span>
            </h3>

            <h1 className="z-10 font-bold sm:text-[120px] text-[150px] sml:text-[127px] font-bebas 4xl:mb-[-3.5vw] lg:mb-[-7vw]">
              EQUIPE
            </h1>
            
            <p className="mt-4 font-sans sml:text-sm text-[19px]">
              Nossa equipe de professores é apaixonada por orientar os alunos em
              seu desenvolvimento criativo.
            </p>

            <p className=" sml:text-sm text-[19px]">
              Combinando experiência e dedicação, estamos aqui para inspirar,
              apoiar e capacitar cada aluno em sua jornada de aprendizagem.
              Juntos, cultivamos talentos e preparamos os alunos para alcançarem
              seu máximo potencial.
            </p>

            <div className="w-full">
              <div className="mt-12   flex flex-row justify-start gap-x-4">
                <Link
                  to="/professores"
                  className="w-3/5 h-10 bg-inred transition hover:bg-indred rounded-3xl flex justify-center items-center text-sm"
                >
                  <button className="uppercase">Professores</button>
                </Link>

                <Link
                  className="w-3/5 h-10 bg-inblack hover:bg-inallblack border-solid border-2 rounded-3xl border-inred hover:border-indred transition text-sm flex justify-center items-center"
                  to="/certificado"
                >
                  <button className="uppercase">Certificados</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
