import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/common.scss';
import Index from 'view/index';
import Store from 'store';
import {Provider}  from 'react-redux';
ReactDOM.render(
    <Provider store={Store}>
        <Index />
    </Provider>, 
    document.getElementById('root')
);

