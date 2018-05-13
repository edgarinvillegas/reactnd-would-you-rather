import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from "./configureStore";

window.store = configureStore();

ReactDOM.render(
    <Provider store={window.store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
