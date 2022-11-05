import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Session2(){
    const icon = <FontAwesomeIcon icon={faCheckDouble}/>
    return(
        <div id="session2">
            <div className='container'>
                <div className='images'>
                    <div className='img1'></div>
                    <div className='img2'></div>
                    <div className='img3'></div>
                </div>
                <div className='ofert'>
                    <h1>Sistema de lavagem <span>Diferenciado</span></h1>
                    <p>Equipado com um chassi exclusivo e função de descarga do hub do ventilador.</p>
                    <ul>
                        <li><span>{icon}</span>Sistemas não tripulados inteligentes</li>
                        <li><span>{icon}</span>Tecnologia Smart 360</li>
                        <li><span>{icon}</span>Sistema de mistura química inteligente</li>
                        <li><span>{icon}</span>Sistema de suspensão inovador</li>
                        <li><span>{icon}</span>Secagem de ar rápida incorporada exclusiva</li>
                        <li><span>{icon}</span>Sistema de alarme digital de segurança por voz</li>
                    </ul>
                    <button>Agende uma visita</button>
                </div>
            </div>
        </div>
    )
}

export default Session2;