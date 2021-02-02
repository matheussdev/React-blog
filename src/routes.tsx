import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import PostPage from './pages/post-page';
import Register from './pages/register';
import Tag from './pages/tag';
import Css from './pages/tag/css';
import Html from './pages/tag/html';
import Javascript from './pages/tag/javascript';
import Reactjs from './pages/tag/reactjs';

function Routes (){
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/admin" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/tag/" component={Tag} exact/>
            <Route path="/tag/css" component={Css}/>
            <Route path="/tag/html" component={Html}/>
            <Route path="/tag/javascript" component={Javascript}/>
            <Route path="/tag/reactjs" component={Reactjs} exact/>
            <Route path="/tag/reactjs/post1" component={PostPage}/>  

        </BrowserRouter>
    )

}

export default Routes;