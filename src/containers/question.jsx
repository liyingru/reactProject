import React, { Component } from 'react';
import './css/question.css'
const questionData = [{
    id: 1,
    title: "福",
    question: "1.以下不属于我国年画重要产地的是？",
    options: [
        "A:苏州桃花坞",
        "B:天津杨清流",
        "C:四川攀枝花",
        "D:山东淮坊"
    ],
    right: 2,
    choose: -1
}, {
    id: 2,
    title: "禄",
    question: "2.春节贴福字有什么习俗？",
    options: [
        "A:斜着贴",
        "B:倒着贴",
        "C:竖着贴",
        "D:正着贴"
    ],
    right: 1,
    choose: -1
}, {
    id: 3,
    title: "寿",
    question: "3.一下那个是春节正月初二的习俗",
    options: [
        "A:逛庙会",
        "B:回娘家",
        "C:大扫除",
        "D:讨欠款"
    ],
    right: 1,
    choose: -1
}, {
    id: 4,
    title: "喜",
    question: "4.小年这一天，用来祭祀灶王爷的食物是",
    options: [
        "A:元宵",
        "B:麦芽糖",
        "C:腊八粥",
        "D:饺子"
    ],
    right: 2,
    choose: -1
}, {
    id: 5,
    title: "财",
    question: "5.春联有很多别称，一下那个不是它的别称",
    options: [
        "A:对联",
        "B:春贴",
        "C:门对",
        "D:喜联"
    ],
    right: 3,
    choose: -1
}]
class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionData,
            num:[]
        }
    }
    liClick=(key,right)=>{
        console.log(key,right)
        if(key===right){
            this.state.num.push(1)
        }else{

        }
        let sort=this.props.match.params.sort*1+1;
        if(sort>4){
            //答题得分页
            console.log(this.state.num);
            let {num}=this.state;
            const length=num.length;
            this.props.history.push(`/end/${length}`)
        }else{
            this.props.history.push(`/question/${sort}`)
        }
        
    }
    render() {
        let { sort } = this.props.match.params;
        let { questionData } = this.state;
        return <div className="question">
            <img className="question_h" src={require('../../src/assert/images/2.png')} alt=""/>
            <ul className="question_list">
                {
                    questionData && questionData.map((item, index) => {
                        return <li key={index}><span style={{backgroundColor:index<=sort?'#cd141c':'#d3d2d2'}}>{item.title}</span></li>
                    })
                } 
            </ul>
            <img className="question_b" src={require('../../src/assert/images/9.png')} alt=""/>
            <div className="question_c">
                <h1>{questionData[sort].question}</h1>
                <ol>
                    {
                       questionData[sort].options.map((item,index)=>{
                           return <li key={index} onClick={()=>this.liClick(index,questionData[sort].right)}>{item}</li>
                       })
                    }
                </ol>
            </div>
            <img className="question_f" src={require('../../src/assert/images/1.png')} alt=""/>
        </div>
    }
}

export default Question