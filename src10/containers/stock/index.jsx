import React from 'react'
import Footer from 'comp/footer';
import RouterView from 'router';

class Index extends React.Component{
    render (){
        const {routers}=this.props;
        return <div className="wrap">
            <header>
                <span></span>
                <span>自选</span>
                <span onClick={()=>{this.props.history.push('/add')}}>搜索</span>
            </header>
            <div className="content">
                <RouterView routers={routers}></RouterView>
            </div>
            <Footer />
        </div>
    }
}
export default Index;