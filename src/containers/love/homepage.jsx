import React ,{Component,Fragment}from 'react'
import axios from 'axios';
import Swiper from 'comp/swiper'
import {connect} from 'react-redux';
class Homepage extends Component{
    state={
        shop:[],

    }
    getProduct=(item)=>{
        const {list,update}=this.props;
        const newList=list.filter((v=>{
            return v.id===item.id
        }));
        if(newList.length<1){
            list.push(item)
        }else{
            list.map((v,i)=>{
                if(v.id===item.id){
                    return list[i].count++;
                }
            })
        }
        update(list)
        
    }
    componentDidMount(){
        axios.get('/api/shop').then(res=>{
            this.setState({
                shop:res.data.shop
            })
        });
    }
    render (){
        let {shop}=this.state;
        return <Fragment>
            <Swiper />
            <div className="section">
                <h3>本周特价</h3>
                <div className="content">
                    <div>
                        {
                             shop&&shop.map((item,index)=>{
                                return <div className="con" key={index}>
                                <img src={item.img} alt=""/>
                                <h4>{item.title}</h4>
                                <p>{item.constor}</p>
                                <span><strong>￥{item.price}</strong><b className="iconfont icon-publishgoods_fill" onClick={()=>this.getProduct(item)}></b></span>
                              </div>
                             })
                        }
                    </div>
                </div>
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
             console.log(payload)
            dispatch({type:"UPDATE",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);