import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: []
        }
    }
    componentDidMount() {
        this.getCartList()
    }
    getCartList = () => {
        axios.get('/getCartList').then(res => {
            this.setState({
                cartList: res.data.data
            })
        })
    }
    addToShopcart(product){
        const {shopcartList,update}=this.props;
        // shopcartList.push(item)
        update(product,shopcartList)
        console.log(this.props.shopcartList)
    }
    render() {
        const { cartList } = this.state;
        return <div className="goods-wrap">
            <div className="goods_title">
                <h3>特价促销</h3>
                <button className="watch" onClick={()=>this.props.history.push('/shopcart')}>查看购物车</button>
            </div>
            <ol className="goods_list">
                {
                    cartList.map(item => {
                        return <li key={item.id}>
                            <dl>
                                <dt>
                                    <img src={item.imgurl} alt="" className="goods_img" />
                                </dt>
                                <dd>
                                    <h4>{item.name}</h4>
                                    <div className="goods_handle">
                                        <p>价格：<span className="goods_price">{item.price}元</span></p>
                                        <button onClick={()=>this.addToShopcart(item)}>+</button>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    })
                }
            </ol>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return state.ShopcartReducer;
}

const mapDispatchToProps=(dispatch)=>{
    return {
        update(product,shopcartList){
            let hasItem=shopcartList.filter(item=>{
                return item.id===product.id
            })
            if(hasItem.length<1){
                shopcartList.push({...product,count:1,isCheck:true})
            }else{
                shopcartList.forEach((item,index)=>{
                    if(item.id===product.id){
                        shopcartList[index].count++
                    }
                })
            }
             //console.log(shopcartList)
             dispatch({
                 type:'UPDATE',
                 payload:shopcartList
             })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Goods);