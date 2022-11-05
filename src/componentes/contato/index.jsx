import './style.css'

function Contato(){
    return(
        <div id='session-contato'>
            <h1>Contate-nos</h1>
            <div className='box-contato'>
                <div className='agenda'>
                    <h3>Agende uma visita</h3>
                    <input type="text" placeholder='Nome'></input>
                    <p>Data:</p>
                    <input type="date"></input>
                    <textarea placeholder='Escreva uma mensagem'></textarea>
                    <button>Enviar</button>
                </div>
                <div className='contatos'>
                    <p><span>Telefone:</span><br/>(47) 99234-7623<br/>(47) 93308-5671</p>
                    <p><span>E-mail</span><br/>DT.auto@gmail.com</p>
                </div>
                <div className='local'>
                    <h2>Encontre-nos</h2>
                    <div className='localizacao'>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contato;