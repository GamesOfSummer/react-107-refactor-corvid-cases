export const addNewTask = (itemToDo: any) => {
    return {
        type: 'ADDTASK',
        text: itemToDo
    };
};