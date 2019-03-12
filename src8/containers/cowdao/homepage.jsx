import React from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allData: [],
            tabValue:[
                {name:"全部模块"},
                {name:"APP开发"},
                {name:"平台问题"},
                {name:"经验分享"},
                {name:"开发交流"},
                {name:"官方公告"},
                {name:"组件使用"},
                {name:"小程序开发"}
            ]
        }
    }
    handleTab=(tabValue)=>{
        let {update}=this.props;
        let newList=this.state.allData.filter(item=>{
            return item.bankuai===tabValue
        });
        update(newList)   
        
    }
    componentDidMount(){
        axios('/mock/test.json').then(res=>{
            this.setState({
                allData: res.data
            })
            this.props.update(res.data)
        })
    }
    
    render (){
        let {list}=this.props;
        let {tabValue}=this.state;
        return <div className="homepage">
            <ol className="dialog">
                {
                    tabValue.map((item,index)=>{
                         return <li key={index}
                         onClick={()=>this.handleTab(item.name)}>{item.name}</li>
                    })
                }
            </ol>
            <ul>
                {
                    list&&list.map((item,index)=>{
                        return <li key={index}>
                            <Link to={{
                                pathname:'/cowdao/detail',
                                state:{
                                    id:item.id
                                },
                                detailCon:item
                            }}>
                            <dl>
                                <dt>
                                    <img src={require('../../images/1.png')} alt=""/>
                                </dt>
                                <dd>
                                    <p>
                                        <span>{item.nickname}</span>
                                        <span style={{color:"#00C1BE"}}>New</span>
                                    </p>
                                    <p>
                                        <span>{item.address}</span>
                                        <span className="bankuai">{item.bankuai}</span>
                                    </p>
                                </dd>
                            </dl>
                            <b>{item.question}</b>
                            <div className="bottom">
                                <span>{item.ctime}</span>
                                <span><i className="iconfont icon-browse"></i>{item.look}</span>                                
                                <span><i className="iconfont icon-message"></i>{item.message}</span> 
                            </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
             console.log(payload)
            dispatch({type:"UPDATE",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);