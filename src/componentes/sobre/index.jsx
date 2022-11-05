import './style.css'
import Carro1 from './assets/carro1.jpg'
import Carro2 from './assets/carro2.jpg'
import Carro3 from './assets/carro3.jpeg'
import Carro4 from './assets/carro4.jpg'
import Icone1 from './assets/facebook.png'
import Icone2 from './assets/instagram.png'
import Icone3 from './assets/whatsapp.png'

function Sobre(){
    return(
        <div className='sobre'>
            <h1>Sobre nós</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <div className='galeria-redes'>
                <div className='box-galeria'>
                    <div style={{backgroundImage: `url(${Carro1})`}}></div>
                    <div style={{backgroundImage: `url(${Carro2})`}}></div>
                    <div style={{backgroundImage: `url(${Carro3})`}}></div>
                    <div style={{backgroundImage: `url(${Carro4})`}}></div>
                </div>
                <h2>Serviço garantido</h2>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div className='box-redes'>
                    <div style={{backgroundImage: `url(${Icone1})`}}></div>
                    <div style={{backgroundImage: `url(${Icone2})`}}></div>
                    <div style={{backgroundImage: `url(${Icone3})`}}></div>
                </div>
            </div>
        </div>
    );
}
export default Sobre