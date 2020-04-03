export const addNewTask = itemToDo => {
    return {
        type: 'ADDTASK',
        text: itemToDo
    };
};