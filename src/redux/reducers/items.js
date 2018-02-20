import {
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM
} from '../actions/items';
import getInitialItems from '../../utils/getInitialItems';
import getDate from '../../utils/getDate'

const initialState = getInitialItems();


export default (state = initialState, action) => {
    let ret = state;

    switch ( action.type ) {
        case ADD_ITEM:
            const id = state[state.length - 1].id + 1;
            const { title, description } = action.payload;
            const created_at = getDate();
            ret = [
                ...state,
                { id, title, description, created_at }
            ];
            break;

        case EDIT_ITEM:
            const newItem = action.payload;
            const newId = newItem.id;
            ret = ret.map( item => (item.id === newId ? newItem : item));
            break;

        case DELETE_ITEM:
            ret = ret.filter( item => item.id !== action.payload);
            break;
        default:
            break;
    }
    return ret;
}
