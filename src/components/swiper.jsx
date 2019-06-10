import React ,{Component,Fragment}from 'react'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class Banner extends Component{
    state={
        img:[
            {"imgsrc":"/img/1.jpg"},
            {"imgsrc":"/img/0101.jpg"},
            {"imgsrc":"/img/f2.jpg"},
        ]
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            }
        })
    }
    render (){
        const {img}=this.state;
        return <Fragment>
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {
                        img&&img.map((item,index)=>{
                            return <li key={index} className="swiper-slide">
                                <img src={item.imgsrc} alt=""/>
                            </li>
                        })
                    }
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        </Fragment>
    }
}

export default Banner;