import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialog/Dialogs";


const App = () => {
  return (
    <div className='app-wrapper'>

        <Header/>

        <Navbar/>

        <div className='app-wrapper-content'>
            <Dialogs/>
            {/*<Profile/>*/}
        </div>

    </div>

  );
}





export default App;
