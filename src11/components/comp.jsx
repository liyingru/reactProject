import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comp extends Component {
    minu(index){
        const car = JSON.parse(window.localStorage.getItem('car'));
        car[index].isCheck=false;
        this.props.update(car)
    }
    plus(index){
        const car = JSON.parse(window.localStorage.getItem('car'));
        car[index].isCheck=true;
        this.props.update(car)
    }
    render() {
        const { file,index } =this.props;
        return <li>
                <dl>
                    <dt className={file.icon}></dt>
                    <dd>{file.name}</dd>
                </dl>
                {file.isCheck?<span className="minu" onClick={()=>this.minu(index)}>-</span>:
                        <span className="plus" onClick={()=>this.plus(index)}>+</span>}
            </li>
    }
}
const mapStateToProps = (state) =>{
    return state.ListReducer;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        update(payload){
            window.localStorage.setItem('car',JSON.stringify(payload));
            dispatch({type:'UPDATE',payload})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comp);