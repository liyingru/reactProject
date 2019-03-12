import React from 'react';
import ReactDOM from 'react-dom';
import 'common/css/common.scss';
import './iconfont/iconfont.css'
import {Provider} from 'react-redux';
import Store from 'store';
import App from 'view/app';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

