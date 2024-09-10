import { useState, useEffect } from "react";
import { FiXOctagon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Inf from "../components/Inf";

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [alunoEncontrado, setAlunoEncontrado] = useState(null);
  const navigate = useNavigate();

  const studentListFetch = async () => {
    try {
      const dataStudentList = await fetch(
        "https://back-end-portfolio-ten.vercel.app/alunos/listar"
      );
      if (!dataStudentList.ok) return;
      const responseStudentList = await dataStudentList.json();

      setAlunos(responseStudentList);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    studentListFetch();
  }, []);

  const buscarAluno = () => {
    console.log("searchQuery", searchQuery);

    // Tenta buscar pelo token primeiro
    let aluno = alunos.find((aluno) => aluno.token === searchQuery);

    // Se não encontrar pelo token, tenta buscar pelo nome
    if (!aluno) {
      aluno = alunos.find(
        (aluno) => aluno.nome.toLowerCase() === searchQuery.toLowerCase()
      );
    }

    if (!aluno) {
      setError("Erro");
      return;
    }

    console.log("Aluno encontrado:", aluno);
    setAlunoEncontrado(aluno);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-red-600 flex items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg bg-red-600 text-white p-2 rounded">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-blue-lightest">
        <div
          className="bg-grey-lightest border-l-4 border-red p-4 py-6 rounded shadow-lg flex items-center justify-between mb-6"
          role="alert"
        >
          <span className="fa-stack fa-2x sm:mr-2 mb-3">
            <i className="fas fa-circle text-red-dark fa-stack-2x"></i>
            <i className="fas fa-hand-paper fa-stack-1x text-white"></i>
          </span>
          <div className="sm:text-left text-center sm:mb-0 mb-3 w-128">
            <p className="font-bold mb-1 text-lg">Token ou Nome Inválido.</p>
            <p className="text-grey-dark inline-block">
              Seu Token ou Nome não foi encontrado em nosso banco de dados.
              Tente novamente.
            </p>
          </div>
          <i className="fas fa-times mx-4 fa-2x text-grey-darker"></i>
        </div>
        <button
          onClick={() => {
            navigate("/temp");
            setTimeout(() => navigate("/certificado"), 0);
          }}
          className="mt-4 ml-5 text-white bg-inred px-6 py-2 rounded-md font-bold mb-8"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-inblack text-white min-h-[93.9vh] bg-[url('../../public/imagens/fundo.jpg')] bg-cover bg-no-repeat bg-opacity-10 flex flex-col items-center justify-start overflow-hidden">
      <Inf />
      <div className="w-full max-w-[1280px] mx-auto py-16 mt-10 h-full min-h-[11rem]">
        <h2 className="text-2xl font-bold mb-4 text-center uppercase">
          Buscar Aluno
        </h2>
        <div className="flex justify-center mb-4 w-full px-2">
          <input
            type="text"
            placeholder="Digite o token ou nome completo do aluno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                buscarAluno();
              }
            }}
            className="text-[black] w-full max-w-lg h-10 px-4 py-1 mr-2 rounded-md border border-gray-300 placeholder-black tracking-wider"
          />
          <button
            onClick={buscarAluno}
            className="px-4 py-2 bg-indred hover:bg-inred uppercase text-white w-[10rem] rounded-md transition-colors duration-300"
          >
            Buscar
          </button>
        </div>
        {alunoEncontrado && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center overflow-hidden">
            <div className="flex flex-col relative border border-solid border-inred rounded-xl px-8 py-6 gap-6 bg-inallblack w-[60vw] h-[40vh] mt-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold uppercase">
                  Detalhes do Aluno
                </h3>
                <button
                  onClick={() => setAlunoEncontrado(null)}
                  className="p-2 rounded-full hover:bg-inred/20 transition"
                >
                  <FiXOctagon className="w-6 h-6 text-inred" />
                </button>
              </div>
              <div className="flex flex-col justify-around h-full">
                <div className="flex items-center justify-between">
                  <p className="flex-1">
                    <span className="font-bold">Nome:</span>
                    <span className="ml-2">{alunoEncontrado.nome}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex-1">
                    <span className="font-bold">Turma:</span>
                    <span className="ml-2">{alunoEncontrado.turma}</span>
                  </p>
                  <p className="flex-1">
                    <span className="font-bold">Ano:</span>
                    <span className="ml-2">
                      {alunoEncontrado.data.substring(0, 10)}
                    </span>
                  </p>
                  <p className="flex-1">
                    <span className="font-bold">CPF:</span>
                    <span className="ml-2">{alunoEncontrado.cpf}</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="flex-1">
                    <span className="font-bold">Módulos:</span>
                    <span className="ml-2">{alunoEncontrado.modulo}</span>
                  </p>
                </div>
              </div>
              <p className="text-inred absolute font-extralight bottom-4 right-6 text-xs">
                {alunoEncontrado.token}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alunos;
