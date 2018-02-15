import { combineReducers } from 'redux';
import data from './data';
import hienThiCuaSo from './hienThiCuaSo';
import itemEditing from './itemEditing';

const myReducer = combineReducers({
    data,
    hienThiCuaSo,
    itemEditing
})

export default myReducer;
