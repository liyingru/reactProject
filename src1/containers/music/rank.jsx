import React from 'react'
import Swiper from 'comp/swiper'
import {connect} from 'react-redux'

class Rank extends React.Component {
    render() {
        console.log(this.props)
        return <div className="rank-wrap" >
            <Swiper />
        
        </div>
    }
}

export default connect((state)=>{
    return state;
})(Rank);