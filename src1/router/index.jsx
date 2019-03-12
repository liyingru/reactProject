import React from "react"
import Config from "./config"
import RouteMap from "./map"

class RouteView extends React.Component{
    render(){
        const {routes} = this.props
        return <RouteMap routes={routes===undefined?Config:routes} />
    }
}
export default RouteView