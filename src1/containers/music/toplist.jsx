import React from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import {getTopList} from 'api/rank'
import SongList from 'comp/songlist'
class TopList extends React.Component {
    componentDidMount() {
        this._getTopList()
    }
    _getTopList() {
        // const url = "http://localhost:3000/getTopList";
        // axios.get(url).then(res => {
        //     console.log(res.data.datalist.songlist)
        // })
        const {update}=this.props;
        // console.log(this.props)
        getTopList().then(res => {
            //console.log(dispatch)  //undefined
            //console.log(res.data.datalist.songlist)
            let payload=res.data.datalist.songlist;
            // dispatch({
            //     type:"UPDATE",
            //     payload:res.data.datalist.songlist
            // })
            update(payload)
        })
    }
    render() {
        const {topList}=this.props;
        return <div className="toplist-wrap">
            <SongList toplist={topList}></SongList>
        </div>
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return state.TopReducer;
}

const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({type:"UPDATE",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopList);