import {headerAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";
import {autorizationThunk} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';
const SET_ = 'SET_USER_PHOTOS';

let initialState = {
    initialized: false,

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedAC = () => ({type: SET_INITIALIZED})


export const initializedAppThunk=()=>{
    return(dispatch)=>{
       let promise =  dispatch(autorizationThunk())

        Promise.all([promise]).then(()=>{
            dispatch(initializedAC())
        })


    }
}



export default appReducer;