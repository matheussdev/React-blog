import React from 'react';

//components
import MainHeader from '../../components/main-header'
import MainFooter from '../../components/main-footer'
import coverImg from '../../assets/images/post1.jpg'


import './style.css'
import Ads from '../../components/ADS';
function PostPage(){
    return (
        <div id="post-page">
            <MainHeader/>
            <div className="cover">
                <img src={coverImg} alt=""/>
            </div>
            <main id="post-page-container" className="container">
                <div className='post-page-content'>
                    <article>
                    <h1>Como desenvolver um site com react.js</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam voluptatibus fugit quas nulla. Ipsa odit dolorem minima sint ut facilis libero temporibus, animi tempora delectus odio! Mollitia, iste necessitatibus!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vel earum voluptatibus praesentium cum, necessitatibus quod blanditiis voluptate ut explicabo aliquam inventore ducimus eos quas eius itaque accusantium corporis autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore incidunt corporis quibusdam esse aut nemo sint eius quam, quia quidem earum quae dicta quod provident exercitationem illo nesciunt voluptatum?</p>
                        <h2>primeiro você precisa aprender o básico</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur consequatur nostrum harum culpa ex magni facere cum doloribus nam aut eligendi minus sint, provident facilis assumenda rem et. Veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus aperiam nemo quidem similique minus. Adipisci nam aut veritatis rem odit consequatur, perferendis tempore, optio tenetur ratione in voluptate exercitationem!</p>
                  
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem enim fugit animi voluptates aperiam, odit magnam sapiente asperiores ratione aliquid deserunt! Enim porro similique error dolores sapiente accusamus amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, minima harum dicta fugit ab nesciunt ullam voluptatum tempora asperiores incidunt, at consectetur pariatur vel earum dolorum distinctio, porro aut magnam!</p>
                        <h2>depois aprenda um pouco mais</h2>
                        <img src={coverImg} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur consequatur nostrum harum culpa ex magni facere cum doloribus nam aut eligendi minus sint, provident facilis assumenda rem et. Veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusamus aperiam nemo quidem similique minus. Adipisci nam aut veritatis rem odit consequatur, perferendis tempore, optio tenetur ratione in voluptate exercitationem!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem enim fugit animi voluptates aperiam, odit magnam sapiente asperiores ratione aliquid deserunt! Enim porro similique error dolores sapiente accusamus amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, minima harum dicta fugit ab nesciunt ullam voluptatum tempora asperiores incidunt, at consectetur pariatur vel earum dolorum distinctio, porro aut magnam!</p>                    
                    </article>
                </div>
                <Ads/>
            </main>
            <MainFooter/>
        </div>
    )
}

export default PostPage;