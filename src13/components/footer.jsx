import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
class Footer extends Component {
    state={
        newtotal:0
    }
    componentDidMount(){
        window.EventsBus.on('total',(total)=>{
            this.setState({
                newtotal:total
            })
        })
    }
    render() {
        return <footer>
            <dl>
                <NavLink to="/love/homepage" activeClassName="love-active">
                    <dt className="iconfont icon-homepage_fill"></dt>
                    <dd>首页</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/love/classify" activeClassName="love-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>分类</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/love/shopcart" activeClassName="love-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>购物车</dd>
                    <b>{this.state.newtotal}</b>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/love/mine" activeClassName="love-active">
                    <dt className="iconfont icon-mine"></dt>
                    <dd>我的</dd>
                </NavLink>
            </dl>
        </footer>
    }
}

const mapStateToProps=(state)=>{
    return state.ListReducer
}
export default connect(mapStateToProps)(Footer);