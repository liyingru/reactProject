import React, { Component} from 'react';
import Comp from 'comp/comp'
import { connect } from 'react-redux';
class Edit extends Component{
    render (){
        const car = JSON.parse(window.localStorage.getItem('car'));
        return <div className="compile">
            <h4 onClick={()=>{
                        this.props.history.push('/stock/homepage')
                    }}>完成</h4>
            <h3>我的应用</h3>
            <ul>
                {car&&car.map((file,index)=>{
                        return file.isCheck?
                        <Comp key={index} file={file} index={index}/>
                        :null
                    })}
            </ul>
            <h3>机动车业务</h3>
            <ul>
                    {car&&car.map((file,index)=>{
                        return <Comp key={index} file={file} index={index}/>
                    })}
                </ul>
        </div>
    }
}

const mapStateToProps = (state) =>{
    return state.ListReducer;
}

const mapDispatchToProps = (dispatch) =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);