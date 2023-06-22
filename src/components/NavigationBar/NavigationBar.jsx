import './NavigationBar.css'

export default function NavigationBar() {
  return (
    <div className='nav-card'>
        <nav className='hide'>
            <a href="#about" class="nav-item"> Sobre </a>
            <a href="#projects" class="nav-item"> Projetos </a>
            <a href="#skills" class="nav-item"> Habilidades </a>            
            <a href="#contact" class="nav-item"> Contato </a>
        </nav>
    </div>
  )
}
