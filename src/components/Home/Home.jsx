import './Home.css'

import MainTitle from '../../components/MainTitle/MainTitle'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Home() {
    return (
        <div className='home' id='home'>
            <MainTitle className='main-title-container'
                title='Ola, me chamo' 
                titleHighlight='Matheus Leite'
                subtitle='E sou um desenvolvedor Full-Stack' 
            />
            <NavigationBar className='hide'/>
        </div>
    )
}
