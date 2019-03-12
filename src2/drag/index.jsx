import React, { Component } from 'react'
import {connect} from 'react-redux'
class Index extends Component{
    render(){
        let {height,width,background,position,left,top,marginLeft, marginTop,transform}=this.props;
        return <div className='drags' 
        style={{height:height,width:width,background:background,position:position,top:top,left:left,marginLeft:marginLeft, marginTop: marginTop,transform:transform}}
        onMouseDown={this.fnDowm.bind(this)}
        >
        </div>
    }
    fnDowm(e){
        let event=e||window.event;
        let {left,top}=this.props
       let disX=event.clientX-left;
        let disY=event.clientY-top;
        document.onmousemove=(e)=>{
             let event=e||window.event;
             this.left=event.clientX-disX;
             this.top=event.clientY-disY
             this.props.dispatch({type:'onChangeData',top:this.top,left:this.left})
        };
        document.onmouseup=()=>{
            document.onmousemove = null;
		document.onmuseup = null;
        }
    }
}

let mapState=store=>{
    return {...store.data.info}
}
Index=connect(mapState)(Index)
export default Index

