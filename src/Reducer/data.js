import * as types from '../Constant/index';

const findIndex = (data, id) => {
    let result = -1
    data.forEach((item, index) => {
        if (item.id === id) {
            result = index
        }
    });
    return result;
}
let id = '';
let index = -1;
const data = JSON.parse(localStorage.getItem('data'));
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.LIST_ALL:
        //     console.log('action', action)
        //     return state;
        case types.ADD_DATA:
            const today = new Date();
            const newData = {
                id: action.data.id,
                name: action.data.name,
                status: action.data.status
            };
            if(!newData.id){
                console.log('z la k vo day', state)
                newData.id = today.getTime();
                state.push(newData);
            }else{
                index = findIndex(state,action.data.id);
                state[index] = newData
            }
            localStorage.setItem('data', JSON.stringify(state));
            return [...state]
        case types.UPDATE_STATUS:
            console.log('update ne', action);
            id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('data', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM:
            console.log('delete ne', action);
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(state));
            return [...state]
        default:
            console.log('vo mac dinh')
            return state;
    }
}
export default myReducer;