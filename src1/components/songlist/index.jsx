import React from 'react'
import {Link} from 'react-router-dom'

class Songlist extends React.Component{
    render (){
        // console.log(this.props)
        const {toplist}=this.props;
        // console.log(toplist)
        return <ul className="songlists">
            {
                toplist.map(item=>{
                    return <li key={item.data.songid}>
                        <Link to={{
                            pathname:"/music/detail",
                            params:{
                                id:666
                            },
                            state:{
                                id:888
                            },
                            product:item
                            }}>
                        <dl>
                            <dt><img src={`http://y.gtimg.cn/music/photo_new/T002R90x90M000${item.data.albummid}.jpg?max_age=2592000`} alt=""/></dt>
                            <dd>
                                <h4>{item.data.songname}</h4>
                                {
                                    item.data.singer.map(i=>{
                                        return <p key={i.id}>{i.name}</p>
                                    })
                                }
                            </dd>
                        </dl>
                        </Link>
                    </li>
                })
            }
        </ul>
    }
}

export default Songlist;