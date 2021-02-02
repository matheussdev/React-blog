import React from 'react';
import {Link} from 'react-router-dom'

import searchIcon from '../../assets/icons/search.svg'
import menuIcon from '../../assets/icons/menu.svg'

import './style.css'
function MainHeader(){
    return (
        <header id="main-header">
            <div id="main-header-content" className="container">
                < Link to="/" className="logo">Blog Matheuss.dev</ Link>
                <div className="menu">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/tag/html">HTML</Link></li>
                        <li><Link to="/tag/css">CSS</Link></li>
                        <li><Link to="/tag/javascript">JAVASCRIPT</Link></li>
                        <li><Link to="/tag/">VER TODOS</Link></li>
                    </ul>
                    <div className="menuIcon">
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
                <div className="seach-input">
                    <input type="text" name="search" placeholder="buscar"/><button><img src={searchIcon} alt=""/></button>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;