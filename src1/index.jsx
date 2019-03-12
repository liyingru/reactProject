import React from 'react';
import ReactDOM from 'react-dom';
import App from 'view/app';
import Store from 'store'
import { Provider } from 'react-redux'
import 'common/css/common.css';


ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// const render = () => {
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('root')
//     )
// }

// render();

// Store.subscribe(render)