import React,{Component}from 'react'
import Banner from 'comp/swiper';
import axios from 'axios';
import {connect} from 'react-redux';
import Clist from 'comp/clist';
class Takeout extends Component{
    state={
        ind:0,
        arr:[{
            title:'综合排序'
        },{
            title:'销量最高'
        },{
            title:'距离最近'
        },{
            title:'筛选'
        }],
        content:[{
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title:'美食'
            },{
                img: 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'商超便利'
            },{
                img: 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'水果'
            },{
                img: 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'医药健康'
            },{
                img: 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'浪漫鲜花'
            },{
                img: 'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'跑腿代购'
            },{
                img: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'汉堡披萨'
            },{
                img: 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'厨房生鲜'
            },{
                img: 'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'炸鸡炸串'
            },{
                img: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                title:'地方菜系'
            }]
    }
    handleClick=(index)=>{
        this.setState({
            ind:index
        },()=>{
            let {ind}=this.state;
            let {list,update}=this.props;
            if(ind===1){  //排序 销量最高
                let datas = list.sort((a,b)=>{
                    return b.num-a.num
                });
                update(datas);
            }else if(ind===2){ //排序  距离最短
                let datas = list.sort((a,b)=>{
                    return a.min-b.min
                })
                update(datas);
            }
        });

    }
    componentDidMount(){
        axios('/mock/hungry.json').then(res=>{
            this.props.update(res.data)
        })
    }
    render (){
        let {list}=this.props;
        let {content,arr,ind}=this.state;
        return <div className="content">
            <ul className='home_l'>
                {
                    content &&content.map((item,key)=>{
                    return  <li key={key}>
                                <span><img src={item.img} alt=''/></span>
                                <span>{item.title}</span>
                            </li>
                    })
                }
            </ul>
            <Banner />
            <div className="home_t">
                <ul className="home_title">
                    {
                        arr&&arr.map((item,index)=>{
                            return <li key={index} className={ind===index?'color':''}
                            onClick={()=>this.handleClick(index)}>{item.title}</li>
                        })
                    }
                </ul>
                <ul className='home_c'>
                    {
                        list&&list.map((item,index)=>{
                            return <Clist data={item} key={index}/>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}
const mapStateToProps = (state) => {
    return state.ListReducer;
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Takeout);