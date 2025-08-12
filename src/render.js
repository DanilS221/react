import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";




let root;

export const rerenderEntireTree = (state) => {
    // Получаем контейнер
    const container = document.getElementById('root');

    // Создаем корневой элемент только если он еще не создан
    if (!root) {
        root = ReactDOM.createRoot(container);
    }

    // Используем существующий корневой элемент для рендеринга
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    );
};

// export let rerenderEntireTree = (state) =>{
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//
//         <React.StrictMode>
//             <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//         </React.StrictMode>
//     );
// }
