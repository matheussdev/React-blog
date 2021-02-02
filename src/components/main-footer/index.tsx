import React from 'react';

import {Link} from 'react-router-dom';

import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import youtubeIcon from '../../assets/icons/youtube.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import gitIcon from '../../assets/icons/github.svg'

import './style.css'
function MainFooter(){
    return (
        <>
        <footer id="main-footer">
            <div id="main-footer-content" className="container">
                <div className="container-left">
                    <Link to="/" className="logo">Blog Matheuss.dev</Link>
                    <div className="social-networks">
                        <a href=""><img src={facebookIcon} alt="incone do facebook"></img></a>
                        <a href=""><img src={instagramIcon} alt="incone do facebook"></img></a>
                        <a href=""><img src={twitterIcon} alt="incone do facebook"></img></a>
                        <a href=""><img src={youtubeIcon} alt="incone do facebook"></img></a>
                        <a href="https://www.linkedin.com/in/matheus-souza-santos-392677195/" target="blank"><img src={linkedinIcon} alt="incone do facebook"></img></a>
                        <a href="https://github.com/Matheusouz1" target="blank"><img src={gitIcon} alt="incone do facebook"></img></a>
                    </div>
                </div>
                <div className="news-letter">
                    <form action="">
                        <p>Entre para minha lista vip e receba sempre as novidades de artigo:</p>
                        <div className="container-input">
                            <label htmlFor="email"></label>
                            <input type="email" name="inputEmail" required placeholder="email@exeple.com"/>
                            <button>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </footer>
        <div id="footer-bottom">
        <div id="main-footer-bottom-content" className="container">
            <div className="footer-menu">
                <ul>
                    <li><Link to="/anuncie">Anuncie</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/privacidade">Privacidade</Link></li>
                    <li><Link to="/sobre-o-autor">Sobre o Autor</Link></li>
                </ul>
            </div>
            <div className="Copyright">© 2020 Matheuss.dev, inc. Todos os direitos reservados.</div>
        </div>
    </div>
    </>
    )
}

export default MainFooter;