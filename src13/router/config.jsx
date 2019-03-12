import Love from 'view/love';
import Homepage from 'view/love/homepage';
import Classify  from 'view/love/classify';
import Mine from 'view/love/mine';
import Shopcart from 'view/love/shopcart';
import Detail from 'view/love/detail';

const routers=[{
    path:'/love',
    component:Love,
    children:[
        {
            path:'/love/homepage',
            component:Homepage
        },{
            path:'/love/classify ',
            component:Classify 
        },{
            path:'/love/shopcart',
            component:Shopcart
        },{
            path:'/love/mine',
            component:Mine
        }
    ]
},{
    path:'/detail',
    component:Detail
}]

export default routers;