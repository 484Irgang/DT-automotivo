import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandshake, faCar, faHandsBubbles } from '@fortawesome/free-solid-svg-icons'

function Session4(){
    const icon = <FontAwesomeIcon icon={faCheck}/>
    const icon2 = <FontAwesomeIcon icon={faHandshake}/>
    const icon3= <FontAwesomeIcon icon={faCar}/>
    const icon4= <FontAwesomeIcon icon={faHandsBubbles}/>
    return(
        <div className='session4'>
            <div className='container'>
                <div className='box-img'>
                    <div className='img-circle'></div>
                    <div className='circle-fundo'></div>
                </div>
                <div className='box-cards'>
                    <h2>Aproveite</h2>
                    <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <div className='cards'>
                        <div>
                            <h4>{icon2}</h4>
                            <ul>
                                <li><span>{icon}</span>Estetica completa</li>
                                <li><span>{icon}</span>Higienização interna</li>
                                <li><span>{icon}</span>Rodas lubrificadas</li>
                                <li><span>{icon}</span>Troca de parabrisas</li>
                                <li><span>{icon}</span>Martelinho de ouro</li>
                                <li><span>{icon}</span>Estofaria</li>
                            </ul>
                        </div>
                        <div>
                            <h4>{icon3}</h4>
                            <ul>
                                <li><span>{icon}</span>Estetica completa</li>
                                <li><span>{icon}</span>Higienização interna</li>
                                <li><span>{icon}</span>Rodas lubrificadas</li>
                                <li><span>{icon}</span>Troca de parabrisas</li>
                                <li><span>{icon}</span>Martelinho de ouro</li>
                                <li><span>{icon}</span>Estofaria</li>
                            </ul>
                        </div>
                        <div>
                            <h4>{icon4}</h4>
                            <ul>
                                <li><span>{icon}</span>Estetica completa</li>
                                <li><span>{icon}</span>Higienização interna</li>
                                <li><span>{icon}</span>Rodas lubrificadas</li>
                                <li><span>{icon}</span>Troca de parabrisas</li>
                                <li><span>{icon}</span>Martelinho de ouro</li>
                                <li><span>{icon}</span>Estofaria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Session4;