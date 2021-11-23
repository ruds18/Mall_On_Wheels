import React from 'react'
import {  Typography, Button, Grid, Container} from '@material-ui/core';
import useStyles from './styles'
import CardItem from './CardItem/CardItem';
import { Link, useHistory } from 'react-router-dom';


const Cart = ({ cart, HandelUpdateCartQty, HandelEmptyCart, HandelRemoveFromCart } ) => {
   
 
    const history = useHistory();
    const redirect = () => {
        history.push('/checkout')
      }
    const classes = useStyles();

    const EmptyCart = ()=>(
        <Typography variant="subtitle1">Shopping Cart in Empty 😕 
        <Typography variant="subtitle1"> click on the logo to start shopping 🥰 😀</Typography>
        
        </Typography>
     
    );

    const FilledCart = ()=>(
        <>
             <Grid container spacing={3}>
                 {cart.line_items.map((item)=>(
                     <Grid item xs={12} sm={4} key={item.id}> 
                      <CardItem item= {item} onUpdateCartQty = {HandelUpdateCartQty} onRemoveFromCart = {HandelRemoveFromCart} />
                     </Grid>
                 ))}
             </Grid>
             <div className={classes.cardDetails}>
                 <Typography variant="h5" >Subtotal:-<Typography variant="h4">{cart.subtotal.formatted_with_symbol}</Typography></Typography>
                 <div>
                     <Button className={classes.emptyButton} size='large' type="button" variant="contained" color="secondary" onClick={HandelEmptyCart} >Empty Cart</Button>
                     <Link to="/checkout">
                     <Button component={Link} to="/checkout"  className={classes.checkoutButton} size='large' type="button" variant="contained" color="primary" >Checkout</Button>
                     </Link>
                 </div>
             </div>
         </>
    );
    if(!cart.line_items)
        return 'Loading...'


    
   
    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
