import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import filters from './filters';
import items from './items';

export default combineReducers({
    routing : routerReducer,
    form : formReducer,
    items,
    filters
});
