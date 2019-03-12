import React from 'react'
import Header from 'comp/header'
import Tab from 'comp/tab'
import RouterView from "router"

class Music extends React.Component {
    render() {
        const {routes}=this.props;
        return <div className="home">
            <Header />
            <Tab />
            <RouterView routes={routes}/>
        </div>
    }
}

export default Music;