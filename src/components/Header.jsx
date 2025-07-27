import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <img src='https://static.vecteezy.com/system/resources/previews/036/431/225/non_2x/ai-generated-high-quality-logo-style-silhouette-of-a-cherry-blossom-twigs-free-png.png'></img>
            {/* <h1>PopiCon</h1> */}
        </header>
    );
}

export default Header;