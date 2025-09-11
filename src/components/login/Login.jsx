import React from "react";


const LoginForm = (props) =>{
    return (
            <form>
                <div>
                    <input placeholder={"login"}/>
                </div>
                <div>
                    <input placeholder={"Password"}/>
                </div>
                <div><input type={"checkbox"}/>Remember me</div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
    )

}

const Login =(props)=>{
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>

    )
}

export default Login;