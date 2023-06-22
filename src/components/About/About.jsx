import './About.css'

import matheusLeite from '../../assets/images/matheusLeite.jpg'
import degree from '../../assets/images/degree.png'
import computer from '../../assets/images/computer.png'

export default function About() {
  return (
        <div className='about' id='about'>
            <h2 className='title'> Um pouco <span className='highlight'> sobre </span> mim </h2>

            <div className='about-content-1'>
                <div className='about-image-margin'>
                    <img src={matheusLeite} alt='Matheus Leite' className='about-image-card' />
                    <div className='about-image-frame'></div>
                </div>

                <div className='about-text-1'>
                    <p className='about-text-line'> Olá, me chamo Matheus Leite e sou um desenvolvedor de 
                        software brasileiro, morando atualmente em São Paulo. </p>
                    <p className='about-text-line'> Gosto de praticar minhas habilidades desenvolvendo 
                        sistemas que resolvem problemas cotidianos de pessoas e comércios, testando 
                        diversas tecnologias e buscando aplicar codigo limpo e eficiente. </p>                     
                    <p className='about-text-line'> Acredito que para obtermos sucesso em nossa carreira e 
                        vida pessoal, é necessário que tenhamos disciplina e organização em nossas tarefas, para 
                        que as mesmas sejam desenvolvidas de forma eficiente e com alta qualidade. </p>
                </div>
            </div>

            <div className='about-content-container'>
                <div className='about-education-card'>
                    <h3 className='subtitle margin-10'> Formação </h3>
                    
                    <div className='about-content-2'>
                        <img src={degree} alt="" className='about-subtitle-img' />
                        <div className='about-text-2'>
                            <p> Graduado em Analise e Desenvolvimento de Sistemas pela 
                            instituição de ensino Centro Universitário Senac. </p>
                        </div>
                    </div>
                </div>

                <div className='about-carrer-card'>
                    <h3 className='subtitle margin-10'> Carreira </h3>
                    
                    <div className='about-content-2'>
                        <img src={computer} alt='' className='about-subtitle-img' />
                        <div className='about-text-2'>
                            <p> Estou em busca de uma oportunidade para ingressar
                            e obter experiencia profissional na area de Tecnologia. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
