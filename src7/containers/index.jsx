import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Homepage from 'view/page/homepage';
import Add from 'view/page/add';

class Index extends Component{
    render(){
        return <Router>
            <Switch>
                <Redirect from='/' to='/homepage' exact/>
                <Route path='/homepage' component={Homepage}/>
                <Route path='/add' component={Add}/>
            </Switch>
        </Router>
    }
}

export default Index;