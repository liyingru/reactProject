import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Start from './start'
import Question from './question'
import End from './end'

class Index extends Component {
    render() {
        return <Router>
                    <Switch>
                        <Route path='/start' render={props=><Start {...props}/>}/>
                        <Route path='/question/:sort' render={props=><Question {...props}/>} />
                        <Route path='/end' render={props=><End {...props}/>} />
                    </Switch>
            </Router>
    }
}

export default Index;
