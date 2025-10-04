import React from "react";


import {Field,reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../helpers/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"




const LoginForm = (props) =>{

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} component={Input} validate={[requiredField]} name={"email"} />
                </div>
                <div>
                    <Field placeholder={"Password"} component={Input} validate={[requiredField]} name={"password"} type={"password"}/>
                </div>

                <div>
                    <Field component={Input} type={"checkbox"} name={"rememberMe"}/>Remember me
                </div>


                {props.error&&<div className={s.formError}>{props.error}</div>}


                <div>
                    <button>Log in</button>
                </div>
            </form>
    )

}

const ReduxLoginForm = reduxForm(
    {form: 'login'
    //уникальное название для формы логинизации, что бы redux-form мог понять какой стейт в его стейте принадлежит конкретно этой форме
     })(LoginForm)



const Login =(props)=>{

    const onSubmit = (formData)=>{
      props.loginThunk(formData.email, formData.password, formData.rememberMe)
    };
    if(props.isAuth){
        return(
            <Navigate to={"/profile"}/>
        )
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>

    )
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk})(Login);