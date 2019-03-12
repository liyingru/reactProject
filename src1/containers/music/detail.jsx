import React from 'react'

class Detail extends React.Component{
    render (){
        console.log(this.props)
        return <div className="wrap">
       
        {/* this is Detail page{this.props.location.params.id} */}
        this is Detail page{this.props.location.state.id}
        </div>
    }
}

export default Detail; 