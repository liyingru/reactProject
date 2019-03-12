import Cowdao from 'view/cowdao';
import Homepage from 'view/cowdao/homepage';
import Post from 'view/cowdao/post';
import Mine from 'view/cowdao/mine';
import Detail from 'view/cowdao/detail';

const routers=[{
    path:'/cowdao',
    component:Cowdao,
    children:[
        {
            path:'/cowdao/homepage',
            component:Homepage
        },{
            path:'/cowdao/post',
            component:Post
        },{
            path:'/cowdao/mine',
            component:Mine
        },{
            path:'/cowdao/detail',
            component:Detail
        }
    ]
}]

export default routers;