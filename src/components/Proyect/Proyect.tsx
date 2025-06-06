import "./Proyect.css"
interface Proyect {
    url:string;
    title:string;
    description:string;
    img:string;
}
export default function Proyect({url,title,img,description}:Proyect){
    return (
        <>
         <a href={url} target="_blank">
                <div className="proyect">
                    <div className="proyect-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img src={img} alt=""/>
                </div> 
            </a>
        </>
    )
}