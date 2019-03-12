import React ,{Component,Fragment}from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
class Add extends Component{
    state={
        value:'',
        data:[]
    }
    searchInput=(ev)=>{
        let val=ev.target.value;
        let {data}=this.state;
        if(val!==''){
            var newList=data.filter((v,i)=>{
                return v.name.match(val)
            })
            this.props.update(newList)
        }
    }
    addList=(item)=>{
        let {select,list}=this.props;
        //模糊搜索的数据   点击 样式的切换 已在改组 添加
        list&&list.forEach((it,key)=>{
            if(it.name===item.name){
                return it.isAdd=true
            }
        })
        this.props.update(list);
        list.isAdd=true;
        //点击添加  的数据
        let newArr=select.filter((v,i)=>{
            return v.name===item.name
        })
        if(newArr.length<1){
            select.push(item)
        }
        this.props.newupdate(select)
    }
    componentDidMount(){
        axios('/mock/stock.json').then(res=>{
            this.setState({
                data:res.data
            });
        })
    }
    
    render(){
        let {list}=this.props;
        return <Fragment>
            <header>
                <span onClick={()=>{this.props.history.push('/stock/optional')}}><i className="iconfont icon-return"></i></span>
                <span>股票添加</span>
                <span></span> 
            </header>
            <div className="search">
                <label htmlFor="">
                    <i className="iconfont icon-search"></i>
                    <input type="text" placeholder="输入你要添加的股票" onChange={(ev)=>this.searchInput(ev)}/>
                    <span>X</span>
                </label>
            </div>
            <ul className="search_list">
                {
                    list&&list.map((item,index)=>{
                        return <li key={index}>
                            <span>{item.name}</span>
                            <span>{item.title}</span>
                            <span className={`haha ${item.isAdd?'search_active':''}`}
                            onClick={()=>this.addList(item)}>{item.isAdd?'已在改组':'添加'}</span>
                        </li>
                    })
                }
            </ul>
        </Fragment>
    }
}

const mapStateToProps=(state)=>{
    return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({type:"UPDATE",payload})
        },
        newupdate(payload){
            dispatch({type:"NEW",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Add);