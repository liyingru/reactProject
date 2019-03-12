import Music from 'view/music';
import Rank from 'view/music/rank';
import TopList from 'view/music/toplist';
import Search from 'view/music/search';
import ShopCart from 'view/shopcart'
import Goods from 'view/shopcart/goods'
import Detail from 'view/music/detail'
const routes = [{
    path: '/music',
    component: Music,
    children: [{
        path: '/music/rank',
        component: Rank
    }, {
        path: '/music/toplist',
        component: TopList
    },{
        path:'/music/detail',
        component:Detail
    }, {
        path: '/music/search',
        component: Search
    }]
}, {
    path: '/shopcart',
    component: ShopCart,
}, {
    path: '/goods',
    component: Goods,
}]

export default routes; 