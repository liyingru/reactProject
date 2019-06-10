import React, { Component } from 'react'
import { connect } from 'react-redux';
class Shopcart extends Component {
    state={
        total:0,
        summary:0
    }
    plus(index){
        let {list,plus}=this.props;
        list[index].count++;
        this.computed();
        plus(list)
    }
    minus(index){
        let {list,minus}=this.props;
        if(list[index].count<1){
            list.splice(index,1)
        }else{
            list[index].count--;
            if(list[index].count<1){
                list.splice(index,1)
            }
        };
        this.computed();
        minus(list)
    }
    computed(){
        const {list}=this.props;
        let sum=0;
        let num=0;
        list&&list.map((item,index)=>{
            if(item.isCheck){
                sum+=item.price*item.count;
                num+=item.count;
            }
        })
        this.setState({
            total:num,
            summary:sum
        },()=>{
            window.EventsBus.emit('total',this.state.total)
        })
    }
    render() {
        let { list } = this.props;
        return <div className="shopCar">
            <header>
                购物车
            </header>
            <div className="productlist">
                {
                    list && list.map((item, index) => {
                        return <div className="list" key={index}>
                            <input type="checkbox" checked={item.isCheck} onChange={(ev)=>{
                                list[index].isCheck=ev.target.checked;
                                this.computed();
                                this.props.checkItem(list)
                            }}/>
                            <img src={item.img} alt="" />
                            <div className="listContent">
                                <h3>{item.title}</h3>
                                <div className="listFoot">
                                    <span>￥{item.price}</span>
                                    <div className="btns">
                                        <button onClick={()=>this.minus(index)}>-</button>
                                        <span>{item.count}</span>
                                        <button onClick={()=>this.plus(index)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="allCheck">
                <div>
                    <input type="checkbox" onChange={(ev)=>{
                        const check=ev.target.checked;
                        list.forEach(item=>{
                            item.isCheck=check;
                        })
                        this.computed();
                        this.props.checkAll(list)
                    }}/>
                    <label>全选</label>
                    <span>共￥<b>{this.state.summary}</b></span>
                    <span>共{this.state.total}个</span>
                </div>
                <button>选好了</button>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.ListReducer
}
const mapDispatchToProps = (dispatch) => {
    return {
        plus(payload){
            dispatch({type:"PLUS",payload})
        },
        minus(payload){
            dispatch({type:"MINUS",payload})
        },
        checkItem(payload){
            dispatch({type:"CHECKITEM",payload})
        },
        checkAll(payload){
            dispatch({type:"CHECKAll",payload})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);