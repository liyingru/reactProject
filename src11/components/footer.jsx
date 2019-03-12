import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
        return <footer>
            <dl>
                <NavLink to="/stock/homepage" activeClassName="stock-active">
                    <dt className="iconfont icon-homepage_fill"></dt>
                    <dd>首页</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/stock/market" activeClassName="stock-active">
                    <dt className="iconfont icon-manage"></dt>
                    <dd>网办进度</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/stock/sao" activeClassName="stock-active">
                    <dt className="iconfont icon-mine"></dt>
                    <dd>扫一扫</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/stock/deal" activeClassName="stock-active">
                    <dt className="iconfont icon-financial_fill"></dt>
                    <dd>办事网点</dd>
                </NavLink>
            </dl>
            <dl>
                <NavLink to="/stock/consult" activeClassName="stock-active">
                    <dt className="iconfont icon-publishgoods_fill"></dt>
                    <dd>服务中心</dd>
                </NavLink>
            </dl>
        </footer>
    }
}
export default Footer;