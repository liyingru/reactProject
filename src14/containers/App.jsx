import React, { Component } from 'react';
import './style/index.css'
import ChoiceCity from './ChoiceCity'
import City from './City'

// import {province} from '../mock/data.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      city:[],
      choiceCity:[]
    }
    this.callback=this.callback.bind(this)
    this.choiceCallback=this.choiceCallback.bind(this)
  }
  callback(city,isChoicec){
    let newArr=this.state.choiceCity;
    if(isChoicec){//不存在push
        newArr.push(city)
        this.setState({
          choiceCity:newArr
        })
    }else{//存在splice
        newArr.splice(newArr.indexOf(city),1)
        this.setState({
          choiceCity:newArr
        })
    }
  }
  choiceCallback(city,index){
    let newArr=this.state.choiceCity
    newArr.splice(index,1)
        this.setState({
          choiceCity:newArr
        })
  }
  componentDidMount(){
    axios.get('/api/cityList')
    .then((response)=> {
      if(response.data.code===0){
        this.setState({
          city:response.data.provinceArr
        },()=>{
          console.log(this.state.city)
        })
      }
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header>&lt; | 选择城市</header>
        <div className="content">
          <p className="add"><span>您的上牌地址</span><span>北京></span></p>
          <div className="choice-city">
            <h4>您已选择城市</h4>
            <ChoiceCity cyhoice={this.state.choiceCit} choiceCallback={this.choiceCallback}/>
          </div>
          <div>
            {this.state.city.map((file,index)=>{
                  return <City 
                          city={file}
                          choiceCity={this.state.choiceCity}
                          callback={this.callback} 
                          key={index}/>
            })}
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
