import Logo from '../components/Logo.jsx';
import { Link } from "react-router-dom";


function Home() {

    return (
        <>

            <div className=' relative sm:bg-gradient-to-b from-inred via-20% via-[#e5402e78] to-70% '>

                <div className='visible absolute top-0 right-8 w-1/2 h-[70vh] bg-gradient-to-b from-inred sm:invisible '></div>

                <div className='relative sm:flex sm:flex-col sm:justify-center sm:items-center sm:px-1 2xl:px-16 4xl:px-28 py-6'>
                    <Logo />

                    <div className='mt-60 max-w-lg sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-4/5'>

                        <h3 className='text-5xl tracking-widest sm:tracking-wide sm:text-4xl sml:text-3xl 4xl:mb-[-3vw] lg:mb-[-6vw]'>CONHEÇA <span className='text-inred'>NOSSA</span></h3>

                        <h1 className='z-10 font-bold text-[230px] sm:text-[170px] sml:text-[127px] font-bebas 4xl:mb-[-3.5vw] lg:mb-[-7vw]  '>EQUIPE</h1>

                        <p className='mt-4 font-sans sml:text-sm'>Nossa equipe de professores é apaixonada por orientar os alunos em seu desenvolvimento criativo.</p>

                        <p className='mt-4 sml:text-sm'>Combinando experiência e dedicação, estamos aqui para inspirar, apoiar e capacitar cada aluno em sua jornada de aprendizagem. Juntos, cultivamos talentos e preparamos os alunos para alcançarem seu máximo potencial.</p>

                        <div className='w-full '>
                            <div className='mt-10 flex flex-row justify-between gap-x-4'>
                                <Link to='/Professores' className='w-3/5 h-10 bg-inred transition hover:bg-indred rounded-3xl flex justify-center items-center text-sm'>
                                    <button className='uppercase'>Professores</button>
                                </Link>

                                <Link className='w-3/5 h-10 bg-inblack hover:bg-inallblack border-solid border-2 rounded-3xl border-inred hover:border-indred transition text-sm  flex justify-center items-center' to={'/Certificado'}>
                                    <button className='uppercase'>Certificados</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;