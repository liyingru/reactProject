import React, { Component } from 'react';
class C extends Component {
    constructor(){
        super()
        this.state={
            isChoice:false
        }
    }
    render(){
        const {city,choiceCity,callback}=this.props;
        return (
            <li className={choiceCity.indexOf(city)===-1?'':'active'}
                onClick={()=>{
                    this.setState({
                        isChoice:!this.state.isChoice
                    },()=>{
                        callback(city,this.state.isChoice)
                    })
                }}>
                {city.name}
            </li>
        )
    }
}
class City extends Component {
    render() {
        const {city,choiceCity,callback}=this.props;
        return (
           <div className="city">
                <h3>{city.letter}</h3>
                <ul>
                    {city.province.map((file,index)=>{
                        return <C key={file.id} 
                                    city={file}
                                    choiceCity={choiceCity}
                                    callback={callback}/>
                    })}
                </ul>
                {/* <span className={choiceCity.indexOf(city)===-1?'':'active'}
                        onClick={()=>{
                            this.setState({
                                isChoice:!this.state.isChoice
                            },()=>{
                                callback(city,this.state.isChoice)
                            })
                        }}>
                    {city.name}
                </span> */}
            </div>
        );
    }
}

export default City;