import React ,{Component,Fragment}from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
class Hot extends Component{
    componentDidMount(){
        axios.get('/api/eyecat').then(res=>{
            this.props.update(res.data.cat)
        })
    }
    handleDetail=(v)=>{
        this.props.history.push({
            pathname:'/detail',
            state:{
                detailCon:v
            } 
        })
    }
    render (){
        let {list}=this.props;
        return <Fragment>
            <ul className="dllist">
                {list && list.map((v,i) => 
                 <li key={i}>
                    <dl onClick={()=>this.handleDetail(v)}>
                    <dt><img src={v.img} alt=""/></dt>
                        <dd>
                            <h2>{v.nm}</h2>
                            <p>观众评<b>{v.sc}</b></p>
                            <p>主演:{v.star}</p>
                            <p>{v.showInfo}</p>
                        </dd>
                    </dl>
                    <b>
                        {v.preShow?<span className="buy">预售</span>:<span className="sale">购票</span>}
                    </b>
                 </li>
                )}
            </ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(Hot);