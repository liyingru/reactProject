import Stock from 'view/stock';
import Homepage from 'view/stock/homepage';
import Market from 'view/stock/market';
import Optional from 'view/stock/optional';
import Deal from 'view/stock/deal';
import Consult from 'view/stock/consult';
import Edit from 'view/stock/edit';
import Add from 'view/stock/add';

const routers=[{
    path:'/stock',
    component:Stock,
    children:[
        {
            path:'/stock/homepage',
            component:Homepage
        },{
            path:'/stock/market',
            component:Market
        },{
            path:'/stock/optional',
            component:Optional
        },{
            path:'/stock/deal',
            component:Deal
        },{
            path:'/stock/consult',
            component:Consult
        }
    ]
},{
    path:'/add',
    component:Add
},{
    path:'/edit',
    component:Edit
}]

export default routers;