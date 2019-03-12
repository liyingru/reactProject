import React, { Component } from 'react'
import Index from './index'
import Edit from './edit'
class Main extends Component{
    render(){
        return (
            <div>
                <Edit />
            <Index /> 
            </div>
           
        )
    }
}
export default Main