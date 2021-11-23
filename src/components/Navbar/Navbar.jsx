import React from 'react'
import {AppBar, Toolbar,  Badge, Typography, IconButton} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';



const Navbar = ({totalItems}) => {
    const classes= useStyles();
    const location= useLocation();



    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color='inherit'>
                       <img src='https://i.ibb.co/Qp1SXBw/commerce.png' alt="Malls on Wheels" height='45px' className={classes.image}></img>
                       Mall on Wheels
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (  <div className={classes.button}>
                   
                    <IconButton component={Link} to="/cart" aria-label="show cart items" color='inherit'>
                          <Badge badgeContent={totalItems} color='secondary'>
                              <ShoppingCart></ShoppingCart>
                          </Badge>
                      </IconButton>
              
                      
                    </div>)}
                  
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
