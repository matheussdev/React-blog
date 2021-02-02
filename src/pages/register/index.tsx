import React from 'react';
import api from '../../services/api'




import './style.css'
class Register extends React.Component{
    state: { error: null; isLoaded: boolean; login: any; };
    constructor(props: any){
        super(props);
        this.registerNewUser=this.registerNewUser.bind(this);
        this.state = {
            error:null,
            isLoaded:false,
            login:""
        }
    }

    async registerNewUser(){
        
            const response = await api.post("/auth/register", {
                name:"matheusa",
                username:"mataheussssas@gmail.com",
                password:"eueu1212waw"
            });

            console.log(response.data)
    
            this.setState({login:response.data})  
    }
    
    render(){
        return (
            <div id="login-container">
                <div className='content-login'>
        <h1>register</h1>
                    <form action="http://localhost:3333/auth/register" method="POST">
                        <fieldset>
                            <label htmlFor="name">Nome completo:</label>
                            <input type="text" name="name" id="" placeholder="digite aqui..." autoFocus autoComplete="off" required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="" placeholder="digite aqui..." autoFocus autoComplete="off" required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="" placeholder="digite aqui..." required/>
                        </fieldset>
                        <button type='button' className="sigin-button" onClick={this.registerNewUser}>Registrar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;