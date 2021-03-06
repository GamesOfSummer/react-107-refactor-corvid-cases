const initialState = {
selectedState : 0,

    states: [

        { index: '0', state: 'State 1', case: 0, death: 0, updated: new Date() },

    ]
};

export const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'ADDTASK':

        if(action.value !== undefined)
        {
            state.states.push({
                index: (((1 + Math.random()) * 0x10000) | 0)
                    .toString(16)
                    .substring(1),
                state: action.value.state,
                case: 0,
                death: 0,
                updated: new Date()

            });

            const holder = {states: action.value};
            return { ...state, ...holder};
        }
        
        return state;
        default:
            return state;
    }
};