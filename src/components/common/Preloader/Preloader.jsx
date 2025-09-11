import React from "react";
import s from "../../Users/Users.module.css";
import preloader from "../../../saveDate(hardCode)/images/infinite-spinner.svg";


let Preloader=(props)=>{
    return (
        <img className={s.preloader} src={preloader}/>
    )

}

export default Preloader;