import { FILTER_BY_DATE, FILTER_BY_TITLE } from '../actions/filters';

const initialState = {
    date : '',
    title : ''
}


export default (state = initialState, action) => {
    let ret = state;
    switch ( action.type ) {
        case FILTER_BY_DATE:
            ret = {
                ...state,
                date : action.payload
            };
            break;

        case FILTER_BY_TITLE:
            ret = {
                ...state,
                title : action.payload
            };
            break;
        default:
            break;
    }
    return ret;
}
