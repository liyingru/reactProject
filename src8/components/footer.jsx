import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
        return <footer>
            <dl>
                <NavLink to="/cowdao/homepage" activeClassName="cowdao-active">
                    <dt className="iconfont icon-homepage_fill"></dt>
                    <dd>首页</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/cowdao/post" activeClassName="cowdao-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>发帖</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/cowdao/mine" activeClassName="cowdao-active">
                    <dt className="iconfont icon-publishgoods_fill"></dt>
                    <dd>我的</dd>
                </NavLink>
            </dl>
        </footer>
    }
}
export default Footer;