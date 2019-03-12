import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
           isCare:false,
           ispraise: false,
           iptValue:'',
           sum:2
        }
    }
    changePraise(list){
        let {ispraise}=this.state;
        this.setState({
            ispraise:!ispraise
        });
        ispraise?--list.praise:++list.praise;
       
    }
    changePraises(key){
        let {list,update}=this.props;
        if(list.replyCons[key].ispraise){
            list.replyCons[key].ispraise=false;
            list.replyCons[key].praise--;
        }else{
            list.replyCons[key].ispraise=true;
            list.replyCons[key].praise++;
        }
        update(list)
    }
    changeInput=(e)=>{
        this.setState({
            iptValue:e.target.value
        })
    }
    addList(){
        let {iptValue,sum}=this.state;
        let {list,update}=this.props;
        let newList=[...list.replyCons,{
            name: "古人说",
            cons: iptValue,
            reply: 54,
            praise: 32,
            ispraise: false
        }]
        list.replyCons=newList;
        update(list);
        this.setState({
            iptValue:'',
            sum:list.replyCons.length*1
        })
    }
    delList=(key)=>{
        let {list,update}=this.props;
        let listItems=list.replyCons;
        listItems.splice(key,1);
        update(list);
    }
    componentDidMount() {
        let { update} = this.props;
        axios('/mock/mock.json').then(res => {
            update(res.data)
        })
    }
    render() {
        let {list} = this.props;
        let {isCare,ispraise,iptValue,sum}=this.state;
        
        return <div className="wrap">
            {
                    <div className="member">
                        <div className="head">
                            <span>{list.name}</span>
                            <span className={isCare?'active':''}
                            onClick={()=>{
                                this.setState({
                                    isCare:!this.state.isCare
                                })
                            }}>{isCare?'已关注':'+关注'}</span>
                        </div>
                        <p>{list.cons}</p>
                        <b>回复{list.reply}</b>
                        <p onClick={()=>this.changePraise(list)}><i className={`iconfont icon-praise ${ispraise?'color':''}`}>{list.praise}</i></p>
                        <ul>
                            {
                                list.replyCons&&list.replyCons.map((val, key) => {
                                    return <li key={key}>
                                        <div className="head">
                                            <span>{val.name}</span>
                                        </div>
                                        <p>{val.cons}</p>
                                        <b>回复{val.reply}</b><b onClick={()=>this.delList(key)}>删除</b>
                                        <p onClick={()=>this.changePraises(key)}><i className={`iconfont icon-praise ${val.ispraise?'color':''}`}>{val.praise}</i></p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
               
            }
            <div className="bottom">
                <input type="text" value={iptValue} onChange={this.changeInput}/>
                <span><i className="iconfont icon-message">{sum}</i></span>
                <span onClick={()=>this.addList()}>发表</span>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.ListReducer;
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);