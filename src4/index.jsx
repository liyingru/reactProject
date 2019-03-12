import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/common.css';
import './iconfont/iconfont.css';
import Index from './containers/index';
import {Provider} from 'react-redux';
import Store from 'store';
ReactDOM.render( 
    <Provider store={Store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);
