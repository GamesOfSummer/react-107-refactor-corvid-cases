const initialState = {
    todos: [
        { index: 1, text: 'clean room !', finish: false },
        { index: 2, text: 'wash dishes !!', finish: false },
        { index: 3, text: 'do homework !!!', finish: false }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTASK':
            state.todos.push({
                index: (((1 + Math.random()) * 0x10000) | 0)
                    .toString(16)
                    .substring(1),
                text: action.text,
                finish: false
            });
            return { todos: state.todos };
        default:
            return state;
    }
};