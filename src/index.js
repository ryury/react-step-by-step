import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
    reducer,
    window.__NAV_STATE__
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
