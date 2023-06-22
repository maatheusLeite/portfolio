import './Projects.css'

import ProjectItem from '../ProjectItem/ProjectItem'

import donFerraro from '../../assets/images/donFerraro.png'
import alugaMais from '../../assets/images/alugaMais.png'
import commingSoon from '../../assets/images/commingSoon.png'
import personalWebSite from '../../assets/images/personalWebSite.png'

export default function Projects() {
    return (
        <div className='projects' id='projects'>
            <h2 className='title'> 
                Meus <span className='highlight'> Projetos </span>
            </h2>

            <ProjectItem 
                imageUrl={donFerraro} 
                subtitle={"Don Ferraro"}
                description="Este projeto consiste em um site para gerenciamento de reservas 
                de horarios feitas em restaurantes, com o cadastro e login de usuarios, por 
                meio do consumo de uma API REST programada em Java."
                goToVideo="https://youtu.be/kKdaFQOpj5E" 
                goToGithub="https://github.com/maatheusLeite/projeto-integrador-spa"
            />

            <ProjectItem 
                imageUrl={alugaMais} 
                subtitle={"Aluga+"}
                description="Este projeto é um site demonstrativo, onde é possivel cadastrar
                usuarios e logar usuarios unicos, fazendo com que os mesmos possam cadastrar,
                compartilhar e consultar as localidades publicadas na plataforma."
                goToVideo="https://youtu.be/ulbscEyk6lM" 
                goToGithub="https://github.com/maatheusLeite/projeto-integrador-aluga_mais"
            />

            <ProjectItem 
                imageUrl={personalWebSite} 
                subtitle={"Meu Site Pessoal"}
                description="Este é o site em que você se encontra agora!"
                goToGithub="https://github.com/maatheusLeite/portfolio"
                disabledVideo={true}
            />  

            <ProjectItem 
                imageUrl={commingSoon} 
                subtitle={"Em Breve"}
                description="Um novo projeto se encontra na fase de desenvolvimento. 
                             Em breve seu acesso ficará disponivel neste espaço. "
                disabledVideo={true}
                disabledGithub={true}
            />
        </div>
    )
}
