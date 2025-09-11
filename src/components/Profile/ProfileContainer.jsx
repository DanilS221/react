import React from 'react';

import Profile from "./Profile";

import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setStatusAC,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "../../saveDate(hardCode)/router";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";






class ProfileContainer extends React.Component{



    componentDidMount(){


        let userId= this.props.router.params.userId
        if(!userId){
            userId =32578
        }
        this.props.getUserProfileThunkCreator(userId)

        this.props.getStatusThunkCreator(userId)
        //TODO: Узнать как зарефакторить это , тут я делаю проверку на статус , если его нет то автоматически добавлятся хардкод


    }

    render(){

        return(
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunkCreator={this.props.updateStatusThunkCreator} />

        );
    }
}





// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//     //Перенаправление , если пользователь не авторизирован




let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    status : state.profilePage.status

})
let mapDispatchToProps = (dispatch) => {
    return {

        getUserProfileThunkCreator:(userId)=>{
            dispatch(getUserProfileThunkCreator(userId))
        },
        getStatusThunkCreator:(userId)=>{
            dispatch(getStatusThunkCreator(userId))
        },
        updateStatusThunkCreator:(status)=>{
            dispatch(updateStatusThunkCreator(status))
        }


    }

}




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

 // connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthRedirectComponent));
// TODO: разобрать функцию withRouter после урока по хукам