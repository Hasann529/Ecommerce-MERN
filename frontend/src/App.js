import React, { useEffect, useState } from 'react'
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import webFont from 'webfontloader'
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from './component/layout/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignup from './component/User/LoginSignup';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/Admin/Dashboard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UserList from './component/Admin/UserList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import Contact from './component/layout/Contact/Contact';
import About from './component/layout/About/About';
import NotFound from './component/layout/Not Found/NotFound';

function App() {
   const {isAuthenticated , user} = useSelector(state => state.user )
   const [stripeApiKey, setStripeApiKey] = useState("")
   const dispatch = useDispatch()

   async function getStripeApiKey(){
      const {data} = await axios.get("/api/v1/stripeapikey")
      setStripeApiKey(data.stripeApiKey)
  
   }
    useEffect(()=>{
      webFont.load({
        google:{
          families:["Roboto","Droid Sans","Chilanka"]
        }
      })
      dispatch(loadUser())
      getStripeApiKey()
    },[dispatch])
    window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />  }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/account' element={<ProtectedRoute><Profile /></ProtectedRoute> }/>
        <Route path='/me/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
        <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
     {stripeApiKey && <Route path='/process/payment' element={<Elements stripe={loadStripe(stripeApiKey)} ><ProtectedRoute><Payment /></ProtectedRoute></Elements>} /> } 
        <Route path='/success' element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        <Route path='/orders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path='/order/:id' element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
        <Route path='/admin/dashboard' element={<ProtectedRoute isAdmin={true} ><Dashboard /></ProtectedRoute>} />
        <Route path='/admin/products' element={<ProtectedRoute isAdmin={true} ><ProductList /></ProtectedRoute>} />
        <Route path='/admin/product' element={<ProtectedRoute isAdmin={true} ><NewProduct /></ProtectedRoute>} />
        <Route path='/admin/product/:id' element={<ProtectedRoute isAdmin={true} ><UpdateProduct /></ProtectedRoute>} />
        <Route path='/admin/orders' element={<ProtectedRoute isAdmin={true} ><OrderList /></ProtectedRoute>} />
        <Route path='/admin/order/:id' element={<ProtectedRoute isAdmin={true} ><ProcessOrder /></ProtectedRoute>} />
        <Route path='/admin/users' element={<ProtectedRoute isAdmin={true} ><UserList /></ProtectedRoute>} />
        <Route path='/admin/user/:id' element={<ProtectedRoute isAdmin={true} ><UpdateUser /></ProtectedRoute>} />
        <Route path='/admin/reviews' element={<ProtectedRoute isAdmin={true} ><ProductReviews /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
