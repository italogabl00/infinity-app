import { useState, useEffect } from 'react';
import { FiXOctagon } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchToken, setSearchToken] = useState('');
  const [alunoEncontrado, setAlunoEncontrado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://back-end-portfolio-ten.vercel.app/alunos/listar')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter alunos');
        }
        return response.json();
      })
      .then(data => {
        setAlunos(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const buscarAlunoPorToken = () => {
    const aluno = alunos.find(aluno => aluno.token === searchToken);
    setAlunoEncontrado(aluno);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-red-600 flex items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg bg-red-600 text-white p-2 rounded">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-inblack text-white min-h-[100vh] text-blue">
       <button
                onClick={() => navigate('/')}
                className="mt-4 ml-5 text-white bg-inred px-6 py-2 rounded-md font-bold mb-8"
              >
                Home
              </button> 
      
      <div className="container mx-auto py-16">
      
        <h2 className="text-2xl  font-bold mb-4 text-center uppercase">Buscar Aluno</h2>
        <div className="flex justify-center mb-4 px-6">
          <input
            type="text"
            placeholder="Digite o token do aluno..."
            value={searchToken}
            onChange={e => setSearchToken(e.target.value)}
            className="text-[black] w-full max-w-lg h-10 px-4 py-1 mr-2 rounded-md border border-gray-300 placeholder-black tracking-wider"
          />
          <button onClick={buscarAlunoPorToken} className=" px-4 py-2 bg-inred hover:bg-red-700 uppercase text-white w-[10rem] rounded-md  transition-colors duration-300">Buscar</button>
        </div>

        {alunoEncontrado && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
            <div className="flex flex-col relative border border-solid border-inred rounded-xl px-16 py-8 gap-5 bg-inallblack w-[55vw] h-[40vh]">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xl font-bold mb-2 uppercase">Detalhes do Aluno</h3>
                <button onClick={() => setAlunoEncontrado(null)} className='max-w-max'>
                  <FiXOctagon className='h-full w-8' />
                </button>
              </div>
              <div className="flex flex-col justify-evenly h-42 gap-10">
                <div className="flex items-center">
                  <p className="flex justify-between w-52">
                    <span className="font-bold">Nome:</span>
                    <span>{alunoEncontrado.nome}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex justify-between w-28">
                    <span className="font-bold">Turma:</span>
                    <span>{alunoEncontrado.turma}</span>
                  </p>
                  <p className="flex justify-between w-36">
                    <span className="font-bold">Ano:</span>
                    <span>{alunoEncontrado.data.substring(0, 10)}</span>
                  </p>
                  <p className="flex justify-between w-42">
                    <span className="font-bold">CPF:</span>
                    <span>{alunoEncontrado.cpf}</span>
                  </p>
                </div>
                <div className="flex text-left flex-col py-1">
                  <p><span className="font-bold w-[100%] text-left">Módulos:</span> {alunoEncontrado.modulo}</p>
                </div>
              </div>
              <p className='text-inred absolute font-extralight bottom-6 right-8 text-sm'>{alunoEncontrado.token}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alunos;
