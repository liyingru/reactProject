import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
        return <footer>
            <dl>
                <NavLink to="/cateye/movie" activeClassName="cateye-active">
                    <dt className="iconfont icon-homepage_fill"></dt>
                    <dd>电影</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/cateye/cinema" activeClassName="cateye-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>影院</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/cateye/mine" activeClassName="cateye-active">
                    <dt className="iconfont icon-mine"></dt>
                    <dd>我的</dd>
                </NavLink>
            </dl>
        </footer>
    }
}
export default Footer;