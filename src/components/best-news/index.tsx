import React from 'react';

import './style.css'

function BestNews (){
    return(
        <div id="page-best-news">
            <div id="best-news-content" className="container">
                <div className="card-news"><a href="/"><span>React.js</span>Lorem ipsum dolor sit amet</a></div>
                <div className="card-news"><a href="/"><span>Node.js</span>Lorem ipsum dolor sit amet</a></div>
                <div className="card-news"><a href="/"><span>Html</span>Lorem ipsum dolor sit amet</a></div>
            </div>
        </div>
    )
}

export default BestNews