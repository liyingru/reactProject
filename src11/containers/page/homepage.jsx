import React,{Component,Fragment}from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
class Homepage extends Component{
    componentDidMount(){
        axios.get('/api/car').then(res=>{
            this.props.update(res.data.car)
        })
    }
    render (){
        const car=JSON.parse(window.localStorage.getItem('car'));
        return <Fragment>
            <ul>
                {car&&car.map((item,index)=>{
                    if(item.isCheck){
                        return <li key={index}>
                                <dl>
                                    <dt className={item.icon}></dt>
                                    <dd>{item.name}</dd>
                                </dl>
                            </li>
                    }else{
                        return null;
                    }
                })}
                <li className="more" onClick={()=>{
                    this.props.history.push('/center')
                    }}>
                    <dl>
                        <dt className="iconfont icon-fenlei"></dt>
                        <dd>更多</dd>
                    </dl>
                </li>
            </ul>
        </Fragment>
    }
}

const mapStateToProps = (state) =>{
    return state.ListReducer;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        update(payload){
            if(!window.localStorage.getItem('car')){
                window.localStorage.setItem('car',JSON.stringify(payload))
            }
            dispatch({type:'UPDATE',payload})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);