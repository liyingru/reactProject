import React, { Component } from 'react'
import {connect} from 'react-redux'
import './edit.css'
class Edit extends Component{
    state={
        val:''
    }
    render(){
        let {position,top,left}=this.props
        //let {val}=this.state
        return <div className="styles" style={{position:position,top:top,left:left}}
        onMouseDown={this.fnDown.bind(this)}
        >
        <h2>外观设置 <span>X</span></h2>
            <div className="nav">
            <span>左居中</span>
            <span>居中</span>
            <span>右居中</span>
            <span>下居中</span>
            </div>
            <form action="">
            <div><span>图层</span><input type="text" placeholder="矩形" /></div>
            <div className="btns">
                <input type="text" placeholder="x"
                value={this.setValue('left')}
                onChange={(ev)=>this.changeValue('left',ev.target.value)}/>
                <input type="text"placeholder="y"
                  value={this.setValue('top')}
                  onChange={(ev)=>this.changeValue('top',ev.target.value)}
                />
                <input type="text"placeholder="宽"
                  value={this.setValue('width')}
                  onChange={(ev)=>this.changeValue('width',ev.target.value)}
                />
                <input type="text"placeholder="高"
                  value={this.setValue('height')}
                  onChange={(ev)=>this.changeValue('height',ev.target.value)}
                />
                <input type="text"placeholder="角度"
                  value={this.setValue('transform')}
                  onChange={(ev)=>this.changeValue('transform',ev.target.value)}
                />
                <input type="text" placeholder="不透明度"/>
            </div>
            </form>
        </div>
    }
    fnDown(e){
        let event=e||window.event;
        let {left,top}=this.props
       let disX=event.clientX-left;
        let disY=event.clientY-top;
        document.onmousemove=(e)=>{
             let event=e||window.event;
             this.left=event.clientX-disX;
             this.top=event.clientY-disY
             this.props.dispatch({type:'onChangeDatas',top:this.top,left:this.left})
        };
        document.onmouseup=()=>{
            document.onmousemove = null;
		document.onmuseup = null;
        }
    }

    setValue=key=>{
        //console.log(key)
    }
    changeValue=(key,value)=>{
        let {info}=this.props
        info[key]=value*1
        if(key==='transform'){
            info['transform']='rotate('+value+'deg)'
            console.log( info['transform'])
            this.props.dispatch({type:'onChangeData', transform:info['transform']})
           
        }else{
            this.props.dispatch({type:'onChangeData',left:info[key]})
        }
       // console.log(info[key])
     
    }
}
let mapState=store=>{
    return {
        ...store.data.infos,
        ...store.data
    }
}

Edit=connect(mapState)(Edit)
export default Edit