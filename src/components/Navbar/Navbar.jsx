import React from 'react'
import { AppBar, Toolbar, Badge, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Nav_bar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();



    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color='inherit'>
                        <img src='https://i.ibb.co/Qp1SXBw/commerce.png' alt="Malls on Wheels" height='45px' className={classes.image}></img>
                        Mall on Wheels
                    </Typography>
                    <Navbar bg="white" variant="light">
                        <Container>
                            <Nav className="me-auto">
                                
                                <Nav.Link href="#sccount">Account</Nav.Link>
                                <Nav.Link href="#orders">Orders</Nav.Link>
                                <Nav.Link href="#return">Returns</Nav.Link>
                                <Nav.Link href="#complain">Complains</Nav.Link>
                                <Nav.Link href="#wishlist">Your Wishlist</Nav.Link>
                                <Nav.Link href="#sale">Current Sale</Nav.Link>
                                <NavDropdown title="Malls Near You" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4">Selected Kolkata</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.1">DumDum: Diamond Plaza</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shyambazar: Jaharlal Mall</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Howrah: Forum Rangoli Mall</NavDropdown.Item>


                                </NavDropdown>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Find Product"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Nav>
                        </Container>
                    </Navbar>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (<div className={classes.button}>
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

export default Nav_bar
