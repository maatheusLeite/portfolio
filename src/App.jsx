import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import intersection from './assets/images/intersection.png'

export default function App() {
    return (
        <div>
            <Header /> 
            <div className='main-container'>
                <Home />
                <img src={intersection} alt="" className='intersection-1'/>
                <About />
                <img src={intersection} alt="" className='intersection-2'/>
                <Projects /> 
                <Skills />
                <img src={intersection} alt="" className='intersection-3'/>
                <Contact />
            </div>
            <img src={intersection} alt="" className='intersection-4'/>
            <Footer />
        </div>
    )
}

