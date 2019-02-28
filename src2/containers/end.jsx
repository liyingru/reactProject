import React,{Component} from 'react';
import './css/end.scss';

class End extends Component{
    render(){
        let num=this.props.location.pathname.split('/')[2];
        return <div className="end">
            <img className="end_h" src={require('../assert/images/2.png')} alt=""/>
            <img className="end_b" src={require('../assert/images/9.png')} alt=""/>
            <div className="finsh_c">
                <h1>恭喜你</h1>
                <p>您一共答对了</p>
                <h3>{num}<span>道题</span></h3>
                <em>全部答对</em>
                <em>即可获得一次抽奖机会哦！</em>
                <strong>"继续加油"</strong>
                <button onClick={()=>{
                    this.props.history.push('/start')
                }}>再来一次</button>
            </div>
            <img className="end_f" src={require('../assert/images/1.png')} alt=""/>
        </div>
    }
}

export default End