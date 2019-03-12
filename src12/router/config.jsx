import Cateye from 'view/cateye';
import Movie from 'view/cateye/movie';
import Cinema from 'view/cateye/cinema';
import Mine from 'view/cateye/mine';
import Hot from 'view/cateye/hot';
import Wait from 'view/cateye/wait';
import Search from 'view/cateye/search';
import Detail from 'view/cateye/detail';

const routers=[{
    path:'/cateye',
    component:Cateye,
    children:[
        {
            path:'/cateye/movie',
            component:Movie,
            children:[{
                path:'/cateye/movie/hot',
                component:Hot
            },{
                path:'/cateye/movie/wait',
                component: Wait
            }]
        },{
            path:'/cateye/cinema',
            component:Cinema
        },{
            path:'/cateye/mine',
            component:Mine
        }
    ]
},{
    path:'/search',
    component:Search
},{
    path:'/detail',
    component:Detail
}]

export default routers;