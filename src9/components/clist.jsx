import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router-dom';
class Clist extends Component {
    handleDetail=(data)=>{
        this.props.history.push({
            pathname:'/hungry/detail',
            state:{
                detailCon:data
            }
        })
    }
    render() {
        let { data } = this.props;
        return <Fragment>
            <li onClick={()=>this.handleDetail(data)}>
                <dl>
                    <dt>
                        <img src={data.img} alt='' />
                    </dt>
                    <dd>
                        <div className='home_e'>
                            <span>
                                {
                                    data.indexPremium ? data.indexPremium : null
                                }
                            </span>
                            <h3>{data.title}</h3>
                        </div>
                        <p>
                            <span>￥{data.price}起送</span>
                            <span>销售:{data.num}个</span>
                            <span>{data.min}km</span>
                        </p>
                    </dd>
                </dl>
            </li>
        </Fragment>
    }
}

export default withRouter(Clist);