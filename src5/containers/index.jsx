import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom';
import '../css/reset.css';
import '../css/section.css';
import '../js/rem';
import List from 'view/pages/list';
import Add from 'view/pages/add';
import Edit from 'view/pages/edit';

class Index extends Component {
    render() {
        return <Router>
            <Switch> 
                <Redirect from='/' to='/list' exact/>
                <Route path='/list' component={List}/>
                <Route path='/add' component={Add} />
                <Route path='/edit' component={Edit} />
            </Switch>
        </Router>
    }
}


export default Index;