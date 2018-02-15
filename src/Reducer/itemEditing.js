import * as types from '../Constant/index';

const initialState = {
    id:'',
    name: '',
    status: false
};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
        console.log(' sua ',action.item)
            return action.item;
        default: return state;
    }
}
export default myReducer;