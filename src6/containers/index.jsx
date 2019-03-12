import React,{Component,createContext} from 'react';
import {Input,Icon} from 'antd';
import {pageData} from './pageData.js';
import '../index.css';
const {Provider,Consumer} =createContext();
class Index extends Component{
    state={
        pageData
    }
    updateView =(newPageData)=>{
        this.setState({
            pageData:newPageData
        })
    }
    render(){
        let {pageData}=this.state;
        let store={
            pageData,
            updateView:this.updateView
        }
        return <Provider value={store}>
            <ul className="ul">
            {
                pageData&&pageData.map((item,key)=>{
                    return <SinglePage key={key} index={key} parentArr={pageData} pageSingle={item}/>
                })
            }
        </ul>
        </Provider>
    }
}
class SinglePage extends Component{
    changeTitle=(ev,store)=>{
        this.props.pageSingle.title=ev.target.value;
        store.updateView(store.pageData)
    }
    doubleClick=(store)=>{
        this.resetEdit(store);
        // console.log(store)
        this.props.pageSingle.isEdit=true;
        store.updateView(store.pageData)
    }
    keyDown=(ev,store)=>{
        let keyCode=ev.keyCode;
        if(keyCode!==13){
            return;
        }
        this.props.pageSingle.isEdit=false;
        store.updateView(store.pageData)
    }
    //接受单一的
    resetEditObj=obj=>{
        obj.isEdit=false;
        obj.child&&obj.child.forEach(item=>{
            this.resetEditObj (item)
        })
    }
    resetEdit=store=>{
        store.pageData.forEach(item=>{
            this.resetEditObj(item)
        })
    }
    add=(store)=>{
        let obj={
            title:'子页面',
            isOpen:true,
            isEdit:false
        }
        this.resetEdit(store);
        if(!(this.props.pageSingle.child instanceof Array)){
            this.props.pageSingle.child=[]
        }
        // this.props.pageSingle.child.forEach(item=>{
        //     item.isEdit=false
        // })
        this.props.pageSingle.child.push(obj);
        store.updateView(store.pageData);
    }
    del=(store)=>{
        let {index,parentArr}=this.props;
        //console.log(index,parentArr)
        if(this.props.pageSingle.child&&this.props.pageSingle.child.length>0){
            let result =window.confirm('点击确定删除该页面及其子页面，点击取消仅删去该页面')
            if(result){
                parentArr.splice(index,1);
            }else{
                let child=this.props.pageSingle.child;
                parentArr.splice(index,1,...child)
            }
        }else{
            parentArr.splice(index,1);
        }
        store.updateView(store.pageData);
    }
    renderTitle=(title,isEdit,store)=>{
        if(isEdit){
            return <div className="inputWrap">
                <Input 
                value={title}  
                onChange={(ev)=>this.changeTitle(ev,store)}
                onKeyDown={ev=>this.keyDown(ev,store)}
                />
            </div>
        }else{
            return <span onDoubleClick={()=>this.doubleClick(store)}>{title}</span>
        }
    }
    render(){
        // console.log(this.props)
        let {title,isEdit}=this.props.pageSingle;
        return <Consumer>
            {
                store=>{
                    return <li className="page">
                    <div className="title">
                       {this.renderTitle(title,isEdit,store)}
                       <div className="btn">
                            <Icon type="plus-circle" theme="filled" 
                            onClick={()=>this.add(store)} />               
                            <Icon type="delete" theme="filled" 
                            onClick={()=>this.del(store)}/>
                        </div>
                    </div>
                    <ChildPage {...this.props}/>
                </li>
                }
            }
        </Consumer>
    }
}
class ChildPage extends Component{
    render(){
        let {isOpen,child}=this.props.pageSingle;
        if(!child || child.length === 0){
            return null
        }
        if(isOpen){
            return <ul>
                {
                    child.map((item,key)=>{
                        return <SinglePage index={key} parentArr={child} key={key} pageSingle={item} />
                    })
                }
            </ul>
        }else{
            return null
        }
    }
}

export default Index;