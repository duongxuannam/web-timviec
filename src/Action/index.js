import * as types from '../Constant/index';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};
export const addData = (data) => {
    return {
        type: types.ADD_DATA,
        data
    }
}
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}
export const deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
}
export const editItem = (item) => {
    return {
        type: types.EDIT_ITEM,
        item
    }
}