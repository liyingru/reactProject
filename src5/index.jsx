import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'view/index';
import {Provider} from 'react-redux';
import Store from 'store';

ReactDOM.render(
    <Provider store={Store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);

