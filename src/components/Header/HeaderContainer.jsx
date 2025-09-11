import React from 'react';

import Header from "./Header";

import {connect} from "react-redux";
import {autorizationThunk } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component  {

    componentDidMount() {
        this.props.autorizationThunk()
    }

    render(){
        return(
            <Header {...this.props}/>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photos,


    }
}
const mapDispatchToProps = (dispatch) => {
    return {


        autorizationThunk:()=>{
            dispatch(autorizationThunk())
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);