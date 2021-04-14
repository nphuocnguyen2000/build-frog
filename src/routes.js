import React from 'react'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import SubCategoryShop from './components/shop/SubCategoryShop'
import Carts from './components/carts/Carts'
import DetailProduct from './components/shop/DetailProduct'
import NotFound from './components/notFound/NotFound'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Blogs from './components/blogs/Blogs'
import Map from './components/Map'
import About from './components/about/About'
import Checkout from './components/checkout/Checkout'
import FileUpload from './components/FileUpload';
import NewFileUpload from './components/NewFileUpload';
const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <NewFileUpload/>
        // main: ()=> <Home/>
    },
    
    {
        path: '/shops',
        exact: true,
        main: () => <Shop/>
    },
    {
        path: '/shops/:category',
        exact: true,
        main: ()=> <SubCategoryShop/>
    },
    {
        path: '/carts',
        exact: true,
        main: ()=> <Carts/>
    },
    {
        path: '/account',
        exact: true,
        main: ()=> <Login/>
    },
    {
        path: '/account/register',
        exact: true,
        main: ()=> <Register/>
    },
    {
        path: '/blogs',
        exact: true,
        main: ()=> <Blogs/>
    },
    {
        path: '/about',
        exact: true,
        main: ()=> <About/>
    },
    {
        path: '/checkout',
        exact: true,
        main: ()=> <Checkout />
    },
    {
        path: '/map',
        exact: true,
        main: ()=> <Map />
    },
   
    {
        path: '/:id',
        exact: true,
        main: ()=> <DetailProduct/>
    },
    {
        path: '',
        exact: true,
        main: ()=> <NotFound/>
    },
    
]
export default routes