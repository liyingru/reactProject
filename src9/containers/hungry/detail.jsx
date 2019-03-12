import React ,{Component,Fragment}from 'react'

class Detail extends Component{
    render (){
       let detailCon=this.props.location.state.detailCon;
        return <Fragment>
        {
           detailCon? <ul className='home_c'>
                     <li>
                        <dl>
                            <dt>
                                <img  src={detailCon.img} alt=''/>
                            </dt>
                            <dd>
                            <div className='home_e'>
                                <span>
                                    {
                                        detailCon.indexPremium ? detailCon.indexPremium :null
                                    }
                                </span>
                                <h3>{detailCon.title}</h3>
                            </div>
                                <p>
                                <span>￥{detailCon.price}起送</span>
                                <span>销售:{detailCon.num}个</span>
                                <span>{detailCon.min}km</span>
                                </p>
                            </dd>
                        </dl>
                </li>
            </ul>: null
        }
    </Fragment>
    }
}

export default Detail;