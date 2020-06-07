import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {RootReducer} from './RootReducer';
import {pushData, pullData} from './Actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools());

store.dispatch(pushData(10));
store.dispatch(pullData(100));
store.dispatch(pullData(1000));
//store.subscribe(() => console.log("Store is updated: ",store.getState()));
console.log("Store is updated: ",store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();