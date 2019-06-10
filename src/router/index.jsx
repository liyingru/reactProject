import React,{Component} from 'react';
import RouterMap from './map';
import Routers from './config';
class RouterView extends Component{
    render(){
        const {routers}=this.props;
        return <RouterMap routers={routers===undefined?Routers:routers}></RouterMap>
    }
}

export default RouterView;