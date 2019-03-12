import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
        return <footer>
            <dl>
                <NavLink to="/hungry/takeout" activeClassName="hungry-active">
                    <dt className="iconfont icon-homepage_fill"></dt>
                    <dd>外卖</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/hungry/indent" activeClassName="hungry-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>订单</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/hungry/find" activeClassName="hungry-active">
                    <dt className="iconfont icon-publishgoods_fill"></dt>
                    <dd>发现</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/hungry/mine" activeClassName="hungry-active">
                    <dt className="iconfont icon-mine_fill"></dt>
                    <dd>我的</dd>
                </NavLink>
            </dl>
        </footer>
    }
}
export default Footer;