
import Navbar from "./Navbar";
import {connect} from "react-redux";


// const NavbarContainer = () =>{
//
//
//
//     return(
//
//         <StoreContext.Consumer>
//             {(store)=>{
//                 let state = store.getState().friends;
//                 let friendsElement = state.friend.map(d=>{return (<Friends avatar={d.avatar} name={d.name}/>)})
//
//                 return (
//                     <Navbar friendsElement={friendsElement}></Navbar>
//                 )
//
//             }}
//
//         </StoreContext.Consumer>
//
//
//     );
// }



let mapStateToProps =(state)=>{
    return {
        friends: state.friends


    }
}

let mapDispatchToProps =(dispatch)=>{
    return {

    }
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;