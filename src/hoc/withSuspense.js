import React, {Component} from "react";

import {Navigate} from "react-router-dom";
import {connect} from "react-redux";



export const withSuspense = (Component) =>{
    return (props) =>{
        return <React.Suspense fallback={<div>Loading...</div>}><Component{...props}/></React.Suspense>;
    }

}