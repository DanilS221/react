import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";

it('add new post should', () => {
    //1 Тестовые значения , создал экшен использовава addPostActionCreator и создал state
    let action = addPostActionCreator("Test text")
    let state = {
        postsItem:[
            {id:1, text:'Привет , это  тоестовый пост', like:55},
            {id:2, text:'Меня зовут Данил', like:33},
        ],
    };
    //2 action - действие которое будет проверяться
    let newState=profileReducer(state, action)

    //3 expectation - сама проверка
    // expect(newState.postsItem.length)---что проверяем .toBe(3)--- какой результат ожидаем;
    expect(newState.postsItem.length).toBe(3);

    expect(newState.postsItem[2].text).toBe("Test text");
});


it('add new post should text', () => {
    let action = addPostActionCreator("Test text")
    let state = {
        postsItem:[
            {id:1, text:'Привет , это  тоестовый пост', like:55},
            {id:2, text:'Меня зовут Данил', like:33},
        ],
    };

    let newState=profileReducer(state, action)


    expect(newState.postsItem[2].text).toBe("Test text");
});


it('delete post should', () => {

    let action = deletePostAC(1)
    let state = {
        postsItem:[
            {id:1, text:'Привет , это  тоестовый пост', like:55},
            {id:2, text:'Меня зовут Данил', like:33},
        ],
    };

    let newState=profileReducer(state, action)


    expect(newState.postsItem.length).toBe(1);

});

