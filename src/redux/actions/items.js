export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const editItem = payload => ({
    type : EDIT_ITEM,
    payload
});

export const deleteItem = payload => ({
    type : DELETE_ITEM,
    payload
});

export const addItem = payload => ({
    type : ADD_ITEM,
    payload
});
