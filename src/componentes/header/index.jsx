import React, { useState, useEffect } from 'react'
import './style.css'

function Header(){
        $(function(){
            $('.fundoMenu').css('height',$(document).height()+'px')
        });

        const moverArrow = (e) => {
            $('li span').removeClass('arrow');
            e.target.offsetParent.children[0].classList.add('arrow')
        }

        const [toggle, setToggle] = useState(false);
        const [displayMenu, setDisplayMenu] = useState('none');
        const [displayFundo, setDisplayFundo] = useState('none');
        const [bgBtn, setBgBtn] = useState('#ffffff')

        function handleClick(){
            setToggle(state => !state);
        }

        useEffect(() => {
            if(window.innerWidth <= 768){
                setDisplayMenu(() => toggle ? 'flex' : 'none')
                setDisplayFundo(() => toggle ? 'block' : 'none');
                setBgBtn(() => toggle ? '#cf2929' : '#ffffff');
                $('body').css('overflowY', toggle ? 'hidden' : 'auto');
            }
        }, [toggle]);

    return(
        <header>
            <div className='logo'></div>
            <div style={{display: displayFundo}} className='fundoMenu'></div>
            <div style ={{backgroundColor: bgBtn}} onClick={() => handleClick()} className='btn'></div>
            <nav>
                <ul className='m-desktop'>
                    <li><span className='arrow'></span><a onMouseEnter={moverArrow} href="#">Home</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Sobre</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Contatos</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Agendar</a></li>
                </ul>

                <ul className='m-mobile' style={{display: displayMenu}}>
                    <li><span className='arrow'></span><a onMouseEnter={moverArrow} href="#">Home</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Sobre</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Contatos</a></li>
                    <li><span></span><a onMouseEnter={moverArrow} href="#">Agendar</a></li>
                </ul>
            </nav>
            
            <div className='clean'></div>
        </header>
    )
}

export default Header;