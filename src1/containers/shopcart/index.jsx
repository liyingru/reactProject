import React from 'react'
import { connect } from 'react-redux'
class Shopcart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sum:0,
            total:0
        }
    }
    componentDidMount() {
        this.computed()
    }
    plus(index) {
        const { shopcartList, plus } = this.props;
        shopcartList[index].count++
        this.computed()
        plus(shopcartList)
    }
    minus(index) {
        const { shopcartList, minus } = this.props;
        if (shopcartList[index].count < 1) {
            return
        }
        this.computed()
        shopcartList[index].count--
        minus(shopcartList)
    }
    computed() {
        let { shopcartList } = this.props;
        let sum = 0;
        let total = 0;
        shopcartList.forEach(item=>{
           if(item.isCheck){
            sum+=item.price*item.count;
            total+=item.count
           }
        })
        this.setState({
            sum:sum,
            total:total
        })
    }
    render() {
        const { shopcartList } = this.props;
        return <div className="cart_wrap">
            <div className="cart_maintit" style={{ "border": "1px solid #ccc" }}>
                <h3>选择的商品</h3>
                <label htmlFor="">
                    <input type="checkbox" id="checkall" onChange={(e)=>{
                       const check=e.target.checked;
                       shopcartList.forEach(item=>{
                           item.isCheck=check;
                       })
                       this.computed()
                       this.props.checkAll(shopcartList)
                    }}/>全选/反选
                </label>
            </div>
            <ol className="cart_list">
                {
                    shopcartList.map((item, index) => {
                        return <li key={item.id}>
                            <input type="checkbox" checked={item.isCheck} onChange={(e) => {
                                // console.log(e.target.checked)
                                shopcartList[index].isCheck = e.target.checked
                                this.computed()
                                this.props.checkItem(shopcartList)
                            }} />
                            <dl>
                                <dt>
                                    <img src={item.imgurl} alt="" className="cart_img" />
                                </dt>
                                <dd>
                                    <h4>{item.name}</h4>
                                    <div className="cart_handle">
                                        <div>
                                            <p>价格：<span className="cart_price">{item.price}元</span></p>
                                            <p>产地：{item.add}</p>
                                        </div>
                                        <p className="sub">
                                            <span onClick={() => this.minus(index)}>-</span>
                                            <b>{item.count}</b>
                                            <span onClick={() => this.plus(index)}>+</span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    })
                }
            </ol>
            <div className="cart_bottom">
                <span className="sum">总价:{this.state.sum}</span>
                <span className="total">总数:{this.state.total}</span>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.ShopcartReducer;
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkAll(payload) {
            dispatch({ type: 'CHECK_ALL', payload })
        },
        checkItem(payload) {
            dispatch({ type: 'CHECK_ITEM', payload })
        },
        plus(payload) {
            dispatch({ type: 'PLUS', payload })
        },
        minus(payload) {
            dispatch({ type: 'MINUS', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);