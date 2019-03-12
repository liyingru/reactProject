import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import '../../css/header.css';
import '../../css/list.css';
class List extends Component{
    changeEdit=(index)=>{
        this.props.history.push({
            pathname:'/edit',
            id:index
        });
    }
    componentDidMount(){
        let {update,list}=this.props;
        if(list.length===0){
            axios('/mock/list.json').then(res=>{
                update(res.data);
            })
        }
    }
    render(){
        let {list}=this.props;
        console.log(list)
        return <div>
            <header>
                <span>back</span>
                <span>收货地址</span>
                <span><Link to='/add'>新增地址</Link></span>
            </header>
            <section>
                <ul>
                    {
                        list&&list.map((item,index)=>{
                            return <li key={index}>
                            <h3>{item.address}</h3>
                            <p>{item.area}</p>
                            <i className="tel">{item.concats}({item.index === 0 ? '先生' : '女士'}){item.tel}</i>
                            <i className="edit" onClick={()=>this.changeEdit(index)}>编辑</i>
                        </li>
                        })
                    }
                </ul>
            </section>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({type:'UPDATE',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);