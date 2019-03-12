import React ,{Component,Fragment}from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
class Search extends Component{
    state={
        data:[]
    }
    searchInput=(ev)=>{
        let val=ev.target.value;

        const {data}=this.state;
        var newList=data.filter((v,i)=>{
            return v.nm.match(val)
        });
        this.props.newdate(newList);
        
    }
    handleDetail=(v)=>{
        this.props.history.push({
            pathname:'/detail',
            state:{
                detailCon:v
            } 
        })
    }
    componentDidMount(){
        axios.get('/api/eyecat').then(res=>{
            this.setState({data:res.data.cat})
        })
    }
    render (){
        let {select}=this.props;
        return <Fragment>
            <header>
                <span>搜索</span>
            </header>
            <div className="search">
                <label htmlFor="">
                    <i className="iconfont icon-search"></i>
                    <input type="text" placeholder="输入你要搜索的电影" onChange={(ev)=>this.searchInput(ev)}/>
                    <span style={{color:"red"}}>取消</span>
                </label>
            </div>
            <div className="search_list">
                {select && select.map((v,i) => 
                    <dl key={i} onClick={()=>this.handleDetail(v)}>
                        <dt><img src={v.img} alt=""/></dt>
                        <dd>
                            <h2>{v.nm}</h2>
                            <p>观众评<b>{v.sc}</b></p>
                            <p>主演:{v.star}</p>
                            <p>{v.showInfo}</p>
                        </dd>
                </dl>
                )}
            </div>
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
        newdate(payload){
            dispatch({type:"NEW",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);