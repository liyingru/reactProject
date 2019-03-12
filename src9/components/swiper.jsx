import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class Banner extends React.Component{
    state={
        swiper:[{
            img:'https://fuss10.elemecdn.com/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
        },{
            img:'https://fuss10.elemecdn.com/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
        },{
            img:'https://fuss10.elemecdn.com/9/0f/404be61063535e641bf726585d3c7jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
        },{
            img:'https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
        }]
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
    render (){
        let {swiper}=this.state;
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    swiper&&swiper.map((item,index)=>{
                        return <div className="swiper-slide" key={index}>
                            <img src={item.img} alt=""/>
                        </div>
                    })
                }
            </div>
            <div className="swiper-pagination">
            </div>
        </div>
    }
}

export default Banner;