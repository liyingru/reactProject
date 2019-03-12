import React from 'react'

class Detail extends React.Component{
    render (){
       let {detailCon}=this.props.location;
        return <div className="detail">
        <dl>
                                <dt>
                                    <img src={require('../../images/1.png')} alt=""/>
                                </dt>
                                <dd>
                                    <p>
                                        <span>{detailCon.nickname}</span>
                                        <span style={{color:"#00C1BE"}}>New</span>
                                    </p>
                                    <p>
                                        <span>{detailCon.address}</span>
                                        <span className="bankuai">{detailCon.bankuai}</span>
                                    </p>
                                </dd>
                            </dl>
                            <b>{detailCon.question}</b>
                            <div className="bottom">
                                <span>{detailCon.ctime}</span>
                                <span><i className="iconfont icon-browse"></i>{detailCon.look}</span>                                
                                <span><i className="iconfont icon-message"></i>{detailCon.message}</span> 
                            </div>
        </div>
    }
}

export default Detail;