import './Skills.css'

import frontEnd from '../../assets/images/frontEnd.png'
import backEnd from '../../assets/images/backEnd.png'
import tools from '../../assets/images/tools.png'

export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2 className='title'> 
                Minhas principais <span className='highlight'> Habilidades </span> 
            </h2>

            <div className='skills-container'>
                <div className='skills-left-column'>
                    <div className='skills-title-row'>
                        <img src={frontEnd} alt='FrontEnd' className='title-img'/>

                        <h3 className='subtitle margin-10'> FrontEnd </h3>
                        <p className='skills-description'> 
                            Busco desenvolver telas com design elegante, intuitivo e interativo. 
                        </p>
                    </div>
                    
                    <div className='skills-lenguages-row'>
                        <h3 className='highlight margin-20'> Linguagens </h3>

                        <p> HTML - CSS - Javascript </p>
                    </div>

                    <div className='skills-frameworks-row'>
                        <h3 className='highlight margin-20'> Frameworks e Bibliotecas </h3>
                        <span className='margin-10'> React </span>
                        <span className='margin-10'> Bootstrap </span>
                        <span className='margin-10 hidden-content'> - </span>
                    </div>
                </div>

                <div className='skills-center-column'>
                    <div className='skills-title-row'>
                        <img src={backEnd} alt='BackEnd' className='title-img'/>

                        <h3 className='subtitle margin-10'> BackEnd </h3>
                        <p className='skills-description'> 
                            Gosto de criar meus projetos visando um codigo limpo e organizado. 
                        </p>
                    </div>
                        
                    <div className='skills-lenguages-row'>
                        <h3 className='highlight margin-20'> Linguagens </h3>
                        <p> Java - Node.js - PHP </p>
                    </div>

                    <div className='skills-frameworks-row'>
                        <h3 className='highlight semi-bold margin-20'> Frameworks e Bibliotecas </h3>

                        <span className='margin-10'> Spring Framework </span>
                        <span className='margin-10'> Spring Boot </span>
                        <span className='margin-10'> Spring Security </span>
                    </div>
                </div>

                <div className='skills-right-column'>
                    <div className='skills-title-row'>
                        <img src={tools} alt='Tools' className='title-img'/>

                        <h3 className='subtitle margin-10'> Ferramentas </h3>
                        <p className='skills-description'> 
                            Acredito que devemos buscar a ferramenta correta para cada contexto especifico. 
                        </p>
                    </div>
                        
                    <div className='skills-lenguages-row'>
                        <h3 className='highlight margin-20'> SGBD </h3>

                        <p> MySQL - PostgreSQL - MongoDB </p>
                    </div>

                    <div className='skills-frameworks-row'>
                        <h3 className='highlight margin-20'> Outros </h3>

                        <span className='margin-10'> Linux (Debian Base) e Bash </span>
                        <span className='margin-10'> Git e Github </span>
                        <span className='margin-10'> Figma </span>                            
                    </div>
                </div>
            </div>
        </div>
    )
}
