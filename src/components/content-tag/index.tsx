import React from 'react';
import Ads from '../ADS';
import MainFooter from '../main-footer';
import MainHeader from '../main-header';
import PostPreview from '../post-preview';

import './style.css'
interface ContentTagProps{
    title:string;
    category:string;
}

const ContentTag: React.FC<ContentTagProps> = (props) =>{
    return(
        <div id="page-tag">
        <MainHeader/>
        <main id="page-tag-content" className="container">
            <div className="content-tag">
                <h1>{props.title}</h1>
                <PostPreview category={props.category}/>
                <PostPreview category={props.category}/>
                <PostPreview category={props.category}/>
                <PostPreview category={props.category}/>
            </div>
            <Ads/>
        </main>
        <MainFooter/>
        </div>
        
    )
}

export default ContentTag;