import React from 'react';


import './style.css'
function Login(){
    return (
        <div id="login-container">
            <div className='content-login'>
                <h1>Login</h1>
                <form action="http://localhost:3333/auth/authenticate" method="POST">
                    <fieldset>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="" placeholder="digite aqui..." autoFocus autoComplete="off" required/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="" placeholder="digite aqui..." required/>
                    </fieldset>
                    <button type='submit' className="sigin-button">Logar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;