import React from 'react';
import ReactDOM from 'react-dom';

import { createHashHistory, createBrowserHistory } from 'history';
import { Route } from 'react-router';

import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Dashboard from './containers/Dashboard';
import './assets/less/styles.less';

const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);

const createStoreWithMW = applyMiddleware(routingMiddleware)(createStore);
const store = createStoreWithMW(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
    <Provider store = { store } >
        <ConnectedRouter history={ history }>
            <Route path='/:page?' component={ Dashboard }/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
