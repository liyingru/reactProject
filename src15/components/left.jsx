import React, { Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu,Icon,Button} from 'antd';

const SubMenu = Menu.SubMenu;
class Left extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return <div className="left">
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span><NavLink to="/book/dash" activeClassName="book-active">DashbOARD</NavLink></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span><NavLink to="/book/formpage" activeClassName="book-active">表单页</NavLink></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><NavLink to="/book/detailpage" activeClassName="book-active">详情页</NavLink></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><NavLink to="/book/resultpage" activeClassName="book-active">结果页</NavLink></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><NavLink to="/book/errorpage" activeClassName="book-active">异常页</NavLink></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><NavLink to="/book/minepage" activeClassName="book-active">个人页</NavLink></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><NavLink to="/book/bookshop" activeClassName="book-active">书籍商店</NavLink></span>
          </Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>人员管理</span></span>}>
            <Menu.Item key="9"><NavLink to="/book/normal" activeClassName="book-active">普通用户</NavLink></Menu.Item>
            <Menu.Item key="10"><NavLink to="/book/yuang" activeClassName="book-active">员工</NavLink></Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11"><NavLink to="/book/normal" activeClassName="book-active">普通用户</NavLink></Menu.Item>
              <Menu.Item key="12"><NavLink to="/book/yuang" activeClassName="book-active">员工</NavLink></Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
      {/* <ul>
        <li>
          <NavLink to="/book/dash" activeClassName="book-active">DashbOARD</NavLink>
        </li>
        <li>
          <NavLink to="/book/formpage" activeClassName="book-active">表单页</NavLink>
        </li>
        <li>
          <NavLink to="/book/listpage" activeClassName="book-active">列表页</NavLink>
        </li>
        <li>
          <NavLink to="/book/detailpage" activeClassName="book-active">详情页</NavLink>
        </li>
        <li>
          <NavLink to="/book/resultpage" activeClassName="book-active">结果页</NavLink>
        </li>
        <li>
          <NavLink to="/book/errorpage" activeClassName="book-active">异常页</NavLink>
        </li>
        <li>
          <NavLink to="/book/minepage" activeClassName="book-active">个人页</NavLink>
        </li>
        <li>
          <NavLink to="/book/bookshop" activeClassName="book-active">书籍商店</NavLink>
        </li>
        <li>
          <NavLink to="/book/people" activeClassName="book-active">人员管理</NavLink>
          <ol>
            <li>
            <NavLink to="/book/normal" activeClassName="book-active">普通用户</NavLink>
            </li>
            <li>
            <NavLink to="/book/yuang" activeClassName="book-active">员工</NavLink>
            </li>
          </ol>
        </li>
      </ul> */}
    </div>
  }
}

export default Left;
