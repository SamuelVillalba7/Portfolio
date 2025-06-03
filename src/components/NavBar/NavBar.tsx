import "./NavBar.css"

export default function NavBar(){
    return(
        <>
            <header>
                <a href="#about">
                <div className="logo">
                    <p>Samu</p>
                </div>
                </a>
                <div className="nav-menu">
                    <a href="#about">Acerca de mi</a>
                    <a href="#proyects">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </div>
            </header>
        </>
    )
}