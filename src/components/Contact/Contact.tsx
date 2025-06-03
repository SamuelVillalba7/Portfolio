import telefono from "../../assets/telefono.png"
import github from "../../assets/github.png"
import gmail from "../../assets/gmail2.webp"
import linkedin from "../../assets/linkedin.jpg"


import Form from "../Form/Form"
import "./Contact.css"
export default function Contact (){
    return(
        <>
        <div className="contact-container">

            <div className="contact">
                <h2>Contacto</h2>
                <p>Si estás interesado en contratarme, llámame, envíame <br/>
                    un email o chatea conmigo a través de Linkedin!  </p>
                <div className="contact-box">
                    <a href="https://api.whatsapp.com/send/?phone=541151017739&text&type=phone_number&app_absent=0" target="_blank"><img src={telefono} alt=""/> 541151017739</a>
                
                    <a href="https://www.linkedin.com/in/samuel-villalba/" target="_blank"> <img src={linkedin} alt=""/>Samuel Villalba</a>
                    <a href="https://github.com/SamuelVillalba7" target="_blank"><img src={github} alt=""/>SamuelVillalba7</a>
                    <a href="mailto:villalbasamuel2004@gmail.com"><img src={gmail} alt=""/>Villalbasamuel2004@gmail.com</a>
                </div>
            </div>
            <Form/>
        </div>
        </>
    )
}