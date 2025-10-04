import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    nextCurrenPage,
    setCurrentPage, setFollowingInProgress, setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow
} from "../../redux/users-reducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";

import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCountButtonPages,
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersReselector,

} from "../../redux/users-selector";







class UsersContainer extends React.Component{

    constructor(props) {
        super(props);

    }
    //Зачем тут он нужен? если его убрать то ничего не ломается , конструктор пустой по ссути , просто вызывает супер которые вызывает родительский конструктор и передает в него пропсы



    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }



    onPageChange = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);

    }

    nextPage = () => {
        this.onPageChange(this.props.currentPage + 1)
    }
    backPage = () => {
        if(this.props.currentPage !== 1){
            this.onPageChange(this.props.currentPage - 1)
        }

    }


    render(){
        console.log("render")
        return <>
            {this.props.isFetching ? <Preloader/>:
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChange={this.onPageChange}
                       nextPage={this.nextPage}
                       backPage={this.backPage}
                       setFollowingInProgress={this.props.setFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}/>}

        </>
    }
}

// let mapStateToProps = (state)=>{
//     return {
//         users: state.usersPage.users,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         countButtonPages: state.usersPage.countButtonPages,
//
//         isFetching: state.usersPage.isFetching,
//
//         followingInProgress: state.usersPage.followingInProgress,
//
//     }
// }


let mapStateToProps = (state)=>{
    console.log("mapStateToProps")
    return {

        users: getUsersReselector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        countButtonPages: getCountButtonPages(state),

        isFetching: getIsFetching(state),

        followingInProgress: getFollowingInProgress(state),

    }
}


// let mapDispatchToProps=(dispatch)=>{
//     return{
//         follow:(userId)=>{
//             dispatch(followAC(userId));
//         },
//         unFollow:(userId)=>{
//             dispatch(unFollowAC(userId));
//         },
//         setUser:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(page)=>{
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUserCount:(userCount)=>{
//             dispatch(setTotalUserCountAC(userCount))
//         },
//
//         nextCurrenPage:(newPage)=>{
//             dispatch(nextCurrenPageAC((newPage)))
//         },
//
//         toggleIsFetching:(isFetching)=>{
//             dispatch(setIsFetchingAC(isFetching));
//         }
//
//
//
//     }
// }





 // connect(mapStateToProps, {
 //    follow,
 //    unFollow,
 //    setUsers,
 //    setCurrentPage,
 //    setTotalUserCount,
 //    nextCurrenPage,
 //    setIsFetching,
 //    setFollowingInProgress,
 //    getUsers:getUsersThunkCreator})(UsersContainer)


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    nextCurrenPage,
    setIsFetching,
    setFollowingInProgress,
    getUsers:getUsersThunkCreator},))
    (UsersContainer)