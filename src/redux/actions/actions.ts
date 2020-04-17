export const addNewTask = (itemToDo: any) => {
    return {
        type: 'ADDTASK',
        value: itemToDo
    };
};