import React ,{Component,Fragment}from 'react'

class Detail extends Component{
    render (){
        let {detailCon}=this.props.location.state;
        return <Fragment>
            <div className="wrapper">
                <header>
                    <span onClick={()=>{this.props.history.push('/cateye/movie/hot')}}><i className="iconfont icon-return"></i></span>
                    <span>{detailCon.nm}</span>
                </header>
                <section>
                    <div className="contentlist">
                        <dl>
                            <dt><img src={detailCon.img} alt=""/></dt>
                            <dd>
                                <h2>{detailCon.nm}</h2>
                                <p>观众评<b>{detailCon.sc}</b></p>
                                <p>主演:{detailCon.star}</p>
                                <p>{detailCon.showInfo}</p>
                                <p>{detailCon.rt}</p>
                            </dd>
                        </dl>
                    </div>
                </section>
            </div>
        </Fragment>
    }
}

export default Detail;