import React,{Component} from 'react';
import style from './css/start.module.css'
class Start extends Component{
    render(){
      
        return <div className={style.wrapper}>
            <img className={style.tone} src={require('../../src/assert/images/3.png')} alt=""/>
            <img className={style.ttwo} src={require('../../src/assert/images/4.png')} alt=""/>
            <img className={style.pone} src={require('../../src/assert/images/6.png')} alt=""/>
            <img className={style.ptwo} src={require('../../src/assert/images/7.png')} alt=""/>
            <img className={style.btn} src={require('../../src/assert/images/8.png')} alt=""
            onClick={()=>{
                this.props.history.push('/question/0')
            }}/>
        </div>
    }
}

export default Start