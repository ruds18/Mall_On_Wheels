import React from 'react'
import { AppBar, Toolbar, Badge, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dropdown.css'

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
                    <Navbar bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                ><Nav.Link href="/sccount">Hey!, User Dummy</Nav.Link>
                                    <Nav.Link href="/orders">Orders</Nav.Link>
                                    <Nav.Link href="/return">Returns</Nav.Link>
                                    <Nav.Link href="/complain">Complains</Nav.Link>
                                    <Nav.Link href="/wishlist">Your Wishlist</Nav.Link>
                                    <Nav.Link href="/sale">Current Sale</Nav.Link>
                                    <NavDropdown title="Malls Near You" class="dropdown-menu" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.4">Andhra Pradesh</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Arunachal Pradesh</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Assam</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Bihar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Chhattisgarh</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Goa</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Gujarat</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Haryana</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Himachal Pradesh</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Jharkhand</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Karnataka</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Kerala</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Madhya Pradesh</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Kolkata</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Maharashtra</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Manipur</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Meghalaya</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Mizoram</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Nagaland</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Odisha</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Punjab</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Rajasthan</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Sikkim</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Tamil Nadu</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Telangana</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Tripura</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Uttar Pradesh</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">Uttarakhand</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.4">West Bengal</NavDropdown.Item>



                                    </NavDropdown>
                                    {/* <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#" disabled>
                                        Link
                                    </Nav.Link> */}
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* <Navbar bg="white" variant="light">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >

                                    
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

                            </Navbar.Collapse>
                        </Container>
                    </Navbar> */}
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
