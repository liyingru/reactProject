import React from 'react'
import Footer from 'comp/footer';
import RouterView from 'router';

class Index extends React.Component{
    render (){
        const {routers}=this.props;
        return <div className="wrap">
            <header>
                <span>猫眼电影</span>
            </header>
            <div className="content">
                <RouterView routers={routers}></RouterView>
            </div>
            <Footer />
        </div>
    }
}
export default Index;