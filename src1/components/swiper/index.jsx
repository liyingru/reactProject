import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
let img1= require("../../img/1.jpg")
let img2= require("../../img/2.jpg")
let img3= require("../../img/3.jpg")

export default class Banner extends React.Component {
    render() {
        return (
            <nav className="swiper-container">
                <ul className="swiper-wrapper">
                    <li className="swiper-slide" >
                        <img src={img1} alt="" className="pic" />
                    </li>
                    <li className="swiper-slide" >
                        <img src={img2} alt="" className="pic" />
                    </li>
                    <li className="swiper-slide" >
                        <img src={img3} alt="" className="pic" />
                    </li>
                </ul>
                <ol className="swiper-pagination"></ol>
            </nav>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: true,
            loop: true
        })
    }
}