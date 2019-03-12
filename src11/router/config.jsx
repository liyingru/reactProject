import Stock from 'view/page';
import Homepage from 'view/page/homepage';
import Market from 'view/page/market';
import Sao from 'view/page/sao';
import Deal from 'view/page/deal';
import Consult from 'view/page/consult';
import Edit from 'view/page/edit';
import Center from 'view/page/center';

const routers = [{
    path: '/stock',
    component: Stock,
    children: [
        {
            path: '/stock/homepage',
            component: Homepage
        }, {
            path: '/stock/market',
            component: Market
        }, {
            path: '/stock/sao',
            component: Sao
        }, {
            path: '/stock/deal',
            component: Deal
        }, {
            path: '/stock/consult',
            component: Consult
        }
    ]
}, {
    path: '/center',
    component: Center
}, {
    path: '/edit',
    component: Edit
}]

export default routers;