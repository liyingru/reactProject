import React from "react"
import {NavLink} from 'react-router-dom'
class Tab extends React.Component{
    render(){
        return <nav>
            <ul className="tab">
                <li>
                    <NavLink to="/music/rank" activeClassName="rank-active">推荐</NavLink>
                </li>
                <li>
                    <NavLink to="/music/toplist" activeClassName="rank-active">排行榜</NavLink>
                </li>
                <li>
                    <NavLink to="/music/search" activeClassName="rank-active">搜索</NavLink>
                </li>
            </ul>
        </nav>
    }
}
export default Tab