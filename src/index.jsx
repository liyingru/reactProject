import React from 'react';
import ReactDOM from 'react-dom';
import 'common/css/common.scss';
import './iconfont/iconfont.css'
import App from 'view/App';
import Store from 'store';
import {Provider}  from 'react-redux';
import EventBus from 'events';
window.EventsBus =new EventBus();
ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

