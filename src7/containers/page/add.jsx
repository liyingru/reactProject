import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import './add.scss';
class Add extends Component {
    state = {
        mont: [{
            title: '送礼'
        }, {
            title: '生日'
        }, {
            title: '结婚'
        }, {
            title: '过节'
        }, {
            title: '请客'
        }],
        data: [{
            title: '礼物'
        }, {
            title: '现金'
        }, {
            title: '微信'
        }, {
            title: '支付宝'
        }, {
            title: 'QQ'
        }],
        ind: '',
        index: '',
        value: '',
        val: ''
    }
    handleClick=(type)=>{
        let {update,list}=this.props;
        const obj={
            money:this.refs.money.value,
            event:this.refs.event.value,
            fa:this.refs.fa.value,
            date:this.refs.date.value,
            type:type
        }
        list.push(obj);
        update(list);
        this.props.history.push('/homepage')
    }
    addClass=(i,title)=>{
        this.setState({
            ind:i,
            value:title
        })
    }
    addClasss=(i,title)=>{
        this.setState({
            index:i,
            val:title
        })
    }
    render() {
        let {ind,index}=this.state;
        return <Fragment>
            <p>金额<input placeholder='请输入金额/估值' ref='money' /></p>
            <p>姓名<input placeholder='请输入姓名' ref="name"/></p>
            <p>事件<input placeholder='请输入事件' ref='event' 
            value={this.state.value} onChange={()=>{}}/></p>
            <ul className='c_list1'>
                {
                    this.state.mont.map((i, k) => {
                        return <li key={k} onClick={()=>this.addClass(k,i.title)}>
                            <span style={{background:k===ind?'red':''}} ref="val">{i.title}</span>
                        </li>
                    })
                }
            </ul>
            <p>方式<input ref="fa" value={this.state.val} onChange={()=>{}}/></p>
            <ul className='c_list1'>
                {
                    this.state.data.map((i, k) => {
                        return <li key={k} onClick={()=>this.addClasss(k,i.title)}>
                            <span style={{background:k===index?'red':''}}>{i.title}</span>
                        </li>
                    })
                }
            </ul>
            <p>日期<input ref='date' /></p>
            <button className='sr' onClick={()=>this.handleClick('收入')}>收入</button>
            <button className='zc' onClick={()=>this.handleClick('支出')}>支出</button>
        </Fragment>
    }
}

const mapStateToProps = (state) => {
    return state.ListReducer
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: "UPDATE", payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);