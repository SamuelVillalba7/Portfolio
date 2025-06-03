import "./About.css"
import foto from '../../assets/fotoPersonal.jpg';
import Technologies from "../Technologies/Technologies";

export default function About(){
    return(
        <>
        <div className="about-container">
            <div className="about-section">
                <div className="about-image">
                    <img src={foto} alt="hola"/>
                </div>
                <div className="about-text">
                    <h2>
                        Hola!
                    </h2>
                    <p>
                        Soy Samuel , estudiante de la Tecnicatura en Programación en la Universidad Tecnologica Nacional (FRGP)
                        Actualmente estoy buscando trabajo en el sector IT , vivo en Bs As Argentina. 
                        En la facultad adquiri conocimientos de C++ , C# y SQL . Y por medio de cursos Html , Css y Js.
                        Actualmente estoy en cursos de Java y React. 
                    </p>
                    <div className="logos">
                       <a href="https://github.com/SamuelVillalba7" target="_blank"><img src="./img/github.png" alt=""/></a>
                       <a href="https://www.linkedin.com/in/samuel-villalba/" target="_blank"><img src="./img/linkedin.jpg" alt=""/></a>
                    </div>

                    
                           
                    </div>
            </div>
                    <Technologies/>
            
           
            
        </div>
        
        </>
    )
}