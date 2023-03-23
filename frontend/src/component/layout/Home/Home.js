import React, { Fragment, useEffect } from 'react'
import './Home.css'
import {CgMouse} from 'react-icons/cg'
import ProductCard from './ProductCard.js'
import MetaData from '../MetaData'
import {useDispatch,useSelector} from 'react-redux'
import { clearErrors, getProduct } from '../../../actions/productAction'
import Loader from '../Loader/Loader'
import { useAlert } from 'react-alert'



const Home = () => {
    const alert = useAlert() 
    const dispatch = useDispatch()
    const {loading,error,products} = useSelector(state => state.products)
    
    useEffect(()=>{
      if(error)
      { alert.error(error)
        dispatch(clearErrors)
      }

            dispatch(getProduct())
    },[dispatch,error,alert])

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
    <MetaData title='ECOMMERCE' />
        <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCT BELOW</h1>
        <a href='#container'><button>
            Scroll <CgMouse />
        </button></a>

        </div>
      <h2 className='homeHeading'>Featured Products</h2>
      <div className='container' id='container'>
     {
     products && products.map(product => ( <ProductCard product={product} key={product._id} /> ))
     }
      </div>
    </Fragment>
      )}
    </Fragment>
    
  )
}

export default Home
