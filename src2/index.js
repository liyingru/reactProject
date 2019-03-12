import React from 'react';
import ReactDOM from 'react-dom';
import Index from './drag/main'
import {Provider} from 'react-redux'
import store from './store/index'
ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));