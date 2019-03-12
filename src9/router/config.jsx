import Hungry from 'view/hungry';
import Takeout from 'view/hungry/takeout';
import Indent from 'view/hungry/indent';
import Find from 'view/hungry/find';
import Mine from 'view/hungry/mine';
import Detail from 'view/hungry/detail';

const routers=[{
    path:'/hungry',
    component:Hungry,
    children:[
        {
            path:'/hungry/takeout',
            component:Takeout
        },{
            path:'/hungry/indent',
            component:Indent
        },{
            path:'/hungry/find',
            component:Find
        },{
            path:'/hungry/mine',
            component:Mine
        },{
            path:'/hungry/detail',
            component:Detail
        }
    ]
}]

export default routers;