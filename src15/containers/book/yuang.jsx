import React, { Component,Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Button,Input,Table,Tag} from 'antd';

class Yuang extends Component {
  state={
    data:[],
  }
  columns=[{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '头像',
    dataIndex: 'tou',
    key: 'tou',
  }, {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: '手机号',
    dataIndex: 'tel',
    key: 'tel',
  },{
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  },{
    title: '用户状态',
    dataIndex: 'status',
    key: 'status',
  },{
    title: '所在城市',
    dataIndex: 'city',
    key: 'city',
  },{
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          // let color = tag.length > 5 ? 'skyblue' : 'green';
          // if (tag === 'loser') {
          //   color = 'volcano';
          // }
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </span>
    ),
  }]
  componentDidMount(){
    axios('/mock/yk.json').then(res=>{
      this.setState({
        data:res.data
      })
      this.props.update(res.data);
    })
  }
  searchInput=(ev)=>{
    let val=ev.target.value;
    let {data}=this.state;
    let newList=data.filter((v,i)=>{
      return v.tel.match(val)
    })
    this.props.update(newList);
  }
  render() {
    let {list}=this.props;
    return <Fragment>
      <div className="search">
        <label htmlFor="">
          <Input type="text" size="small" placeholder="username" id="input"/>
          <Input type="text" size="small" id="input" placeholder="phone" onChange={(ev)=>this.searchInput(ev)}/>
          <Button type="primary">搜索</Button>
        </label>
      </div>
      <div className="content">
      <Table  
            pagination={{
                total:this.state.data.length,
                pageSize:3
            }}
            dataSource={this.props.list} 
            columns={this.columns}></Table>
        {/* <ul>
          <li>
                  <span>ID</span>
                  <span>姓名</span>
                  <span>头像</span>
                  <span>email</span>
                  <span>手机号</span>
                  <span>创建时间</span>
                  <span>用户状态</span>
                  <span>所在城市</span>
                  <span>操作</span>
              </li>
          {
            list&&list.map((item,index)=>{
              return <li key={index}>
                  <span>{item.id}</span>
                  <span>{item.name}</span>
                  <span>
                    <img src={item.imgpic}/>
                  </span>
                  <span>{item.email}</span>
                  <span>{item.tel}</span>
                  <span>{item.time}</span>
                  <span>{item.status}</span>
                  <span>{item.city}</span>
                  <span>
                    <Button type="primary" id="haha">分配</Button>
                    <Button type="primary" id="haha">注销</Button>
                  </span>
              </li>
            })
          }
        </ul> */}
      </div>
    </Fragment>
  }
}

const mapStateToProps=(state)=>{
  return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
  return {
    update(payload){
      dispatch({type:"UPDATE",payload})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Yuang);
