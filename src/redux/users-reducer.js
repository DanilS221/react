import {usersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_USERS = 'SET_CURRENT_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const SET_BACK_PAGE = 'SET_BACK_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FEATCHING';
const TOGGLE_IS_PROGRESS = 'TOGGLE_IS_PROGRESS';


let initialState = {
    users: [],
    pageSize:25,
    totalUsersCount:0,
    currentPage: 1,
    countButtonPages:5,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer=(state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.userId){
                        return {
                            ...user,
                            followed:true
                        };
                    }
                    else return user;
                })
            }

        }

        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.userId){
                        return{
                            ...user,
                            followed: false,
                        }
                    }
                    else return user;
                })
            }

        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }

        case SET_CURRENT_USERS: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case SET_TOTAL_USER_COUNT:{
            return {
                ...state,
                totalUsersCount: action.userCount,
            }
        }


        case SET_NEXT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case TOGGLE_IS_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.status?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id!= action.userId),
            }
        }

        default:
            return state;
    }

}

export const followSuccsess = (userId) =>{
    return{ type: FOLLOW, userId: userId };
}
export const unFollowSuccsess = (userId) =>{
    return{ type: UNFOLLOW, userId: userId };
}

export const setUsers = (users) =>{
    return{type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) =>{
    return{type: SET_CURRENT_USERS, currentPage}
}

export const setTotalUserCount = (userCount) =>{
    return{type: SET_TOTAL_USER_COUNT, userCount}
}
export const nextCurrenPage = (newCurrentPage) =>{
    return{type: SET_NEXT_PAGE, newCurrentPage }
}
// export const backCurrenPage = (newCurrentPage) =>{
//     return{type: SET_BACK_PAGE, newCurrentPage}
// }

export const setIsFetching = (isFetching) =>{
    return{type: TOGGLE_IS_FETCHING, isFetching}
}

export const setFollowingInProgress = (status,userId) =>{
    return{type: TOGGLE_IS_PROGRESS, status,userId}
}





export const getUsersThunkCreator = (currentPage,pageSize) =>{
   return async (dispatch) =>{
        dispatch(setIsFetching(true))

        let data = await usersAPI.getUsers(currentPage , pageSize);
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
    }
}

export const unFollow = (userID) =>{
    return async (dispatch) =>{
        dispatch(setFollowingInProgress(true,userID))

        let data = await usersAPI.unFollow(userID)

        if(data.resultCode === 0){
            dispatch(unFollowSuccsess(userID));
        }
        dispatch(setFollowingInProgress(false,userID))
    }
}


export const follow = (userID) =>{
    return (dispatch) =>{
        dispatch(setFollowingInProgress(true,userID))

        usersAPI.follow(userID)
            .then((data) => {
                if(data.resultCode === 0){
                    dispatch(followSuccsess(userID));
                }

                dispatch(setFollowingInProgress(false,userID))

            });
    }
}


export default usersReducer;