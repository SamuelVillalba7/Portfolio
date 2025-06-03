import "./Form.css"
export default function Form(){
    return(
        <>
             <div className="formulario">
                <form>
                    <div>
                        <label htmlFor="nombre">NOMBRE</label>
                        <input type="text" id="nombre" placeholder="Tu Nombre"/>
                    </div>           
                    <div>
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" id="email" placeholder="Tu email de contacto"/>
                    </div>
                    <div>
                        <label htmlFor="comentario">COMENTARIO</label>
                        <textarea id="comentario"  placeholder="Escribe un mensaje"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="ENVIAR" className="boton-formulario"/>
                    </div>
                    
                </form>
            </div>
        </>
    )
}