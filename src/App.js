import React from 'react';
import './App.css';


import {Route, Routes} from "react-router-dom";

import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



import NavbarContainer from "./components/Navbar/NavbarContainer";

import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";

import {compose} from "redux";
import {withRouter} from "./saveDate(hardCode)/router";
import {initializedAppThunk} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";


// import DialogsContainer from "./components/Dialog/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialog/DialogsContainer'));

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializedAppThunk()
    }


    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (


            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId?' element={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs/*' element={ <React.Suspense fallback={<div>Loading...</div>}> <DialogsContainer/> </React.Suspense>}/>
                        <Route path='/users' element={<UsersContainer/>}/>


                        <Route path='/news' element={<NewsContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                        <Route path='/login' element={<Login/>}/>

                    </Routes>
                </div>
            </div>


        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        initializedAppThunk:()=>{
            dispatch(initializedAppThunk())
        },
    }
}

export default compose (
    withRouter,
    connect (mapStateToProps,mapDispatchToProps))
    (App);
