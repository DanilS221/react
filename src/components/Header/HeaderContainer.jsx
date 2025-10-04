import React from 'react';

import Header from "./Header";

import {connect} from "react-redux";
import { logoutThunk} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component  {



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

        logoutThunk:()=>{
            dispatch(logoutThunk())
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);