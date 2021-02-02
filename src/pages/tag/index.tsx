import React from 'react';
import { Link } from 'react-router-dom';
import Ads from '../../components/ADS';
import MainFooter from '../../components/main-footer';
import MainHeader from '../../components/main-header';

import './styles.css'
const Tag =()=>{
    return(
        <div id="page-conteudos">
            <MainHeader/>
                <main id="content-conteudos"className="container">
                    <div className='container-tag-conteudo'>
                        <h1>Conteúdos</h1>
                        <div className="cards-container">
                            <div className="card-content">
                               <Link to="/tag/javascript">JavaScript</Link> 
                            </div>
                            <div className="card-content">
                                <Link to="/tag/reactjs">react.js</Link> 
                            </div>
                            <div className="card-content">
                                <Link to="/tag/html">HTML</Link> 
                            </div>
                        </div>
                    </div>
                    <Ads/>
                </main>
            <MainFooter/>
        </div>
    )
}

export default Tag;