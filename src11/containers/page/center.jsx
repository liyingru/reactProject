import React, { Component ,Fragment} from 'react';

class Center extends Component{
    render (){
        const car = JSON.parse(window.localStorage.getItem('car'));
        return <Fragment>
            <h3>我的应用</h3>
                <ul>
                        {car.map((file,index)=>{
                            if(file.isCheck){
                                return <li key={index} className={file.icon}></li>
                            }else{
                                return null;
                            }
                        })}
                    </ul>
                <button onClick={()=>{
                        this.props.history.push('/edit');
                    }}>编辑</button>
        </Fragment>
    }
}

export default Center;