import React from 'react';

//components
import MainHeader from '../../components/main-header'
import MainFooter from '../../components/main-footer'
import BestNews from '../../components/best-news'
import PostPreview from '../../components/post-preview'


import './style.css'
import Ads from '../../components/ADS';
function Home(){
    return (
        <div id="page-home">
            <MainHeader/>
            <BestNews/>
            <main id="page-home-content" className="container">
                <div className='posts-home'>
                    <PostPreview category="react.js"/>
                    <PostPreview category="javascript"/>
                    <PostPreview category="CSS"/>
                </div>
                <Ads/>
            </main>
            <MainFooter/>
        </div>
    )
}

export default Home;