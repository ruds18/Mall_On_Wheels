import React, { useEffect, useState } from 'react'
import {commerce} from './lib/commerce'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Checkout from './components/CheckoutForm/Checkout/Checkout'

const  App =() => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('');
  const fetchProducts= async()=>{
    const {data} = await commerce.products.list();
     
    setProducts(data);
  }

  
 const fetchCart = async()=>{
      const cart = await commerce.cart.retrieve();

      setCart(cart);
 }

 const HandelAddToCart = async(productId, quantity) =>{
      const {cart} = await commerce.cart.add(productId, quantity)

      setCart(cart)
 }
 const HandelUpdateCartQty = async(productId, quantity) =>{
  const {cart} =  await commerce.cart.update(productId, {quantity})

  setCart(cart);
 }
 const HandelRemoveFromCart = async(productId, quantity) => {
   const{cart} = await commerce.cart.remove(productId)

   setCart(cart);
 }

 const HandelEmptyCart = async() =>{
   const {cart} = await commerce.cart.empty()

   setCart(cart);
 }

useEffect(()=>{
        fetchProducts();
        fetchCart();
  },[])

const refreshCart = async() =>{
  const newCart = await commerce.cart.refresh();

  setCart(newCart)
}

const handelCaptureCheckout = async (checkoutTokenId, newOrder) =>{
  try{
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
    
    setOrder(incomingOrder);
    refreshCart();
  }catch(error){
    console.log(error)
  }
}

  return (
 
     <div>

      <Navbar totalItems={cart.total_items}></Navbar>
      <Switch> 
      <Route exact path="/">

         <Products products={products}  OnAddToCart={HandelAddToCart}></Products>

      </Route>

      <Route exact path="/cart">

            <Cart cart={cart}
           HandelRemoveFromCart = {HandelRemoveFromCart}
            HandelEmptyCart ={HandelEmptyCart}
            HandelUpdateCartQty ={HandelUpdateCartQty}
            ></Cart>
      </Route>
      <Route exact path="/checkout">

      <Checkout cart={cart}
      order = {order}
      OnCaptureCheckout={handelCaptureCheckout}
      ></Checkout>

      </Route>

       </Switch>
      
     </div>

  )
  // return (
  //   <div>
  //     <Navbar totalItems={cart.total_items}></Navbar>
  //     {/* <Products products={products}  OnAddToCart={HandelAddToCart}></Products> */}
  //     <Cart cart={cart}></Cart>
  //   </div>

  // )
}

export default App;
