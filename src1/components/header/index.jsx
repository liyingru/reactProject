import React from "react"
let img= require("../../img/logo.png")
class Header extends React.Component{
    render(){
        return <header>
            <p><img src={img} alt="" /></p>
            <p className="load">下载APP</p>
        </header>
    }
}
export default Header