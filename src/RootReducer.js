const initialState = {
    push : 1,
    pull:0
}
export function RootReducer(state=initialState, action)
{
    switch(action.type)
    {
        case 'PUSH_DATA':
            return {
                ...state,
                push:action.push
            };
        case 'PULL_DATA':
            return {
                ...state,
                pull:action.pull
            }; 
        default:
            return state;    

    }
}