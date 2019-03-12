import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import RouteView from 'router'

// import Store from 'store'
class App extends React.Component{
    render (){
        return <div className="wrap">
            <Router>
                <RouteView />
            </Router>
        </div>
    }
}

export default App;