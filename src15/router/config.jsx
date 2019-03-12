import Book from 'view/book';
import Dash from 'view/book/dash';
import Formpage from 'view/book/formpage';
import Listpage from 'view/book/listpage';
import Detailpage from 'view/book/detailpage';
import Resultpage from 'view/book/resultpage';
import Errorpage from 'view/book/errorpage';
import Minepage from 'view/book/minepage';
import Bookshop from 'view/book/bookshop';
import People from 'view/book/people';
import Normal from 'view/book/normal';
import Yuang from 'view/book/yuang';


const routers=[{
    path:'/book',
    component:Book,
    children:[{
        path:'/book/dash',
        component:Dash,
    },{
        path:'/book/formpage',
        component:Formpage,
    },{
        path:'/book/listpage',
        component:Listpage,
    },{
        path:'/book/detailpage',
        component:Detailpage,
    },{
        path:'/book/resultpage',
        component:Resultpage,
    },{
        path:'/book/errorpage',
        component:Errorpage,
    },{
        path:'/book/minepage',
        component:Minepage,
    },{
        path:'/book/bookshop',
        component:Bookshop,
    },{
        path:'/book/people',
        component:People,
        children:[]
    },{
        path:'/book/normal',
        component:Normal,
    },{
        path:'/book/yuang',
        component:Yuang,
    }]
}]

export default routers;

