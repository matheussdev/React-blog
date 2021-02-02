import React from 'react';

import './style.css'

interface PostPreviewProps{
    category:string;
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
    return(
        <div className="container-preview">
            <div className="post-preview">
                    <div className="container-img">
                        <a href="/"></a>
                        <span>{props.category}</span>
                    </div>
                    
                    <div className="text-container">
                        <h2>
                            <a href="/">titulo do post</a> 
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam inventore libero, voluptatibus totam placeat nemo sit repellendus voluptatem cumque ducimus mollitia hic eos quisquam incidunt eius modi magnam, tempora possimus!
                            Lorem ipsum dolor sit amet consectetur
                        <a href="">ler mais...</a>
                        </p>
                        <span className="date">28/02/2002</span>
                    </div>
                </div>
        </div>
    )
}

export default PostPreview;