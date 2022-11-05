import './style.css'
import Img1 from './assets/img1.jpeg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpeg'
import Img4 from './assets/img4.jpg'
import Img5 from './assets/img5.jpg'

function Sessao3(){
    $(function(){
        const countSlides = $('.box-slide div');
        var i = 1;
        setInterval(function(){
           trocarSlide(countSlides[i-1]);
           i++;
           if(i>countSlides.length)
           i = 1;
        },3000);

        function trocarSlide(el){
            var offsetX = el.offsetLeft - $('.box-slide')[0].offsetLeft;
            $('.slide').animate({scrollLeft: offsetX});
        }
    });

    return(
        <div id='session3'>
            <div className='container'>
                <div className='fundo2'></div>
                <div className='conteudo'>
                    <div className='quality'>
                        <h2>Qualidade</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis dui sem. Aenean ullamcorper ultricies sapien, id mollis mi. Nulla facilisi.</p>
                        <a href='#'>Visualizar<span></span></a>
                    </div>
                    <div className='slide'>
                        <div className='box-slide'>
                            <div style={{backgroundImage: `url(${Img1})`}}></div>
                            <div style={{backgroundImage: `url(${Img2})`}}></div>
                            <div style={{backgroundImage: `url(${Img3})`}}></div>
                            <div style={{backgroundImage: `url(${Img4})`}}></div>
                            <div style={{backgroundImage: `url(${Img5})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sessao3;