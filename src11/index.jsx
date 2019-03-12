import React from 'react';
import ReactDOM from 'react-dom';
import 'common/css/common.scss';
import './icon/iconfont.css'
import App from 'view/App';
import Store from 'store';
import {Provider}  from 'react-redux';
ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

