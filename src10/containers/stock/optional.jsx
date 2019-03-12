import React ,{Component,Fragment}from 'react'

import {connect} from 'react-redux';
class Optional extends Component{
    state={
        ind:0,
        isHavList:false,
        data:[
            {title:"编辑"},
            {title:'最新'},
            {title:'涨幅'},
            {title:'涨跌'}
        ]
    }
    handleClick=(index)=>{
        this.setState({
            ind:index
        },()=>{
            let {ind}=this.state;
            if(ind===0){
                this.props.history.push('/edit')
            }
        })
    }
    render (){
        let {data,ind}=this.state;
        let {select}=this.props;
        return <Fragment>
            <ol className="optional_title">
                {
                    data&&data.map((item,index)=>{
                        return <li key={index}
                        style={{color:ind===index?'red':''}}
                        onClick={()=>this.handleClick(index)}>{item.title}</li>
                    })
                }
            </ol>
            <ul className="optional_content">
                {
                    select&&select.map((item,index)=>{
                        return <li key={index}>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                            </div>
                            <span>{item.new}</span>
                            <span>{item.high}</span>
                            <span>{item.low}</span>
                        </li>
                    })
                }
            </ul>
            {select.length<1?<div className="btn">
                <p>
                    <span onClick={()=>{
                        this.props.history.push('/add')
                    }}>+</span>
                </p>
                <p>暂无股票 点击添加</p>
            </div>:null}
        </Fragment>
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
export default connect(mapStateToProps,mapDispatchToProps)(Optional);