import React from 'react';
import './App.css';


import {Route, Routes} from "react-router-dom";

import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialog/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";



const  App = (props) => {


    return (



          <div className='app-wrapper'>
              <HeaderContainer />
              <NavbarContainer/>

              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                      <Route path='/dialogs/*' element={<DialogsContainer   />}/>
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
export default App;
