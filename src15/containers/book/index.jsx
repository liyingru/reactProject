import React, { Component} from 'react';
import RouterView from 'router';
import Left from 'comp/left'
import {Layout,Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const {Content} = Layout;
class Index extends Component {
  render() {
    const {routers}=this.props;
    return <div className="wrap">
      <Left />
      <div className="right">
      <Layout>
        <Content>
          <RouterView routers={routers}></RouterView>
        </Content>
      </Layout>
      </div>
    </div>
  }
}

export default Index;

