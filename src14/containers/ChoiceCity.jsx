import React, { Component } from 'react';

class ChoiceCity extends Component {
    render() {
        const {choice,choiceCallback}=this.props;
        console.log(choiceCallback)
        return (
            <ul>
              {/* {choice.map((file,index)=>{
                return <li key={file.id} onClick={()=>{
                        choiceCallback(file,index)
                    }}>{file.name}</li>
              })} */}
            </ul>
        );
    }
}

export default ChoiceCity;