import "./Proyects.css"
import eccomerce from "../../assets/proyectoE-commerce.png"
import crud from "../../assets/crud.png"
import consola from "../../assets/proyectoConsola.png"
import Proyect from "../Proyect/Proyect";
import crudTypeScript from "../../assets/CrudTypeSript.png"

interface Proyect {
    url:string;
    title:string;
    description:string;
    img:string;
}

export default function Proyects(){
    

    

    return(
        <>
            <div className="proyects">
            <h2>PROYECTOS</h2>
            
            <Proyect 
                url= "https://samuelvillalba7.github.io/Portfolio/"
                title= "E-commerce"
                description="Este proyecto es una aplicación práctica de los conocimientos adquiridos en el curso de Desarrollo Web, aplicando el preprocesador SASS para optimizar la escritura de estilos. Seguí la metodología BEM para mantener el código limpio y escalable. Actualmente, estoy en proceso de integrar funcionalidades con JavaScript para añadir interactividad y mejorar la experiencia del usuario."
                img= {eccomerce}
            />

            <Proyect 
                url= "https://github.com/SamuelVillalba7/GestorDeArchivos"
                title= "Proyecto en consola"
                description="Proyecto grupal realizado en la materia Laboratorio de Programación 2, utilizando C++. La aplicación permite gestionar las ventas y el inventario de un supermercado, implementando POO y un sistema de usuarios con diferentes roles. Cada funcionalidad clave, como la administración de productos y el control de stock, fue desarrollada pensando en la eficiencia y la modularidad del código." 
                img= {consola}
            />

            <Proyect 
                url= "https://github.com/SamuelVillalba7/tp-winform-equipo-18B"
                title= "Sistema de stocks"
                description="Proyecto grupal desarrollado en la asignatura Programación 3, utilizando C# en el framework .NET. La aplicación está conectada a una base de datos relacional, permitiendo la gestión eficiente de la información. Trabajamos en equipo para implementar funcionalidades clave como la manipulación de datos y la persistencia en la base de datos, asegurando un flujo de trabajo ágil y estructurado."
                img= {crud}
            /><Proyect 
                url= "https://github.com/SamuelVillalba7/tp-winform-equipo-18B"
                title= "Sistema de stocks"
                description="Proyecto grupal desarrollado en la asignatura Programación 3, utilizando C# en el framework .NET. La aplicación está conectada a una base de datos relacional, permitiendo la gestión eficiente de la información. Trabajamos en equipo para implementar funcionalidades clave como la manipulación de datos y la persistencia en la base de datos, asegurando un flujo de trabajo ágil y estructurado."
                img= {crudTypeScript}
            />
     
        </div>
        
        
        </>
    )
    
}
