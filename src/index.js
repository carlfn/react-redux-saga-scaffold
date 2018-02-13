import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configStore from './state/store';
import registerServiceWorker from './registerServiceWorker';

const store = configStore({});

console.log(store.getState())

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
