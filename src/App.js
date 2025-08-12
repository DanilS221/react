import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialog/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";



const  App = (props) => {
  return (


    <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar stateFr = {props.state.friends}/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                      <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage}/>}/>
                      <Route path='/news' element={<News/>}/>
                      <Route path='/music' element={<Music/>}/>
                      <Route path='/settings' element={<Settings/>}/>

                  </Routes>
              </div>
          </div>
    </BrowserRouter>



  );
}





export default App;
