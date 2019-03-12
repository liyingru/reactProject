import React ,{Component,Fragment}from 'react'
import RouterView from 'router';
import { NavLink } from 'react-router-dom'
class Movie extends Component{
    render (){
        const {routers}=this.props;
        return <Fragment>
            <ol className="title">
                <li><NavLink to="/cateye/movie/hot" activeClassName="cateye-active">热映</NavLink></li>
                <li><NavLink to="/cateye/movie/wait" activeClassName="cateye-active">待映</NavLink></li>
                <li onClick={()=>{this.props.history.push('/search')}}><i className="iconfont icon-search"></i></li>
            </ol>
            <div className="movie_content">
                <RouterView routers={routers}></RouterView>
            </div>
        </Fragment>
    }
}

export default Movie;