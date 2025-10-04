import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk";
// TODO: как работает этот импорт thunk в чем прикол и что означает это первое словов в {}
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;