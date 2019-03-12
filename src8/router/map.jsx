import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
class RouterMap extends Component {
  render() {
    const {routers}=this.props;
    const defaultRouters=<Route path='/'component={()=>{
        return <Redirect to="/cowdao/homepage" />
    }} key={1} exact/>
    return <Switch>
                {
                    routers.map((item,index)=>{
                        const Comp=item.component;
                        return <Route path={item.path} component={(apiRouter)=>{
                            return <Comp routers={item.children} {...apiRouter}></Comp>
                        }} key={index}></Route>
                    }).concat(defaultRouters)
                }
        </Switch>
  }
}

export default RouterMap;
