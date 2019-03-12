import React from 'react'
import Footer from 'comp/footer';
import Header from 'comp/header';
import RouterView from 'router';

class Index extends React.Component{
    
    render (){
        const {routers}=this.props;
        return <div className="wrap">
            <Header />
            <div className="home_content">
                <RouterView routers={routers}></RouterView>
            </div>
            <Footer />
        </div>
    }
}

export default Index;