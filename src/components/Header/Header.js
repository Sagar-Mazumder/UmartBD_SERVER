import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        // <div className="header">
        //     <img className="logo" src="https://cdn.lovesavingsgroup.com/logos/umart-online.png" alt="" />
        //     <nav>
        //         <NavLink to="/shop">Shop</NavLink>
        //         <NavLink to="/review">Order Review</NavLink>
        //         <NavLink to="/inventory">Manage Inventory</NavLink>
        //         {user.email && <NavLink to="/orders">Orders</NavLink>}
        //         {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
        //         {
        //             user.email ?
        //                 <Button onClick={logOut}>log out</Button>
        //                 :
        //                 <NavLink to="/login">Login</NavLink>}
        //     </nav>
        // </div>
        <div className="mb-2">
            <Navbar style={{ background: "#008000" }} variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/shop">
                        <img className="" style={{ width: '5rem', height: '3rem' }} src="https://cdn.lovesavingsgroup.com/logos/umart-online.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} style={{ color: 'white' }} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={NavLink} style={{ color: 'white' }} to="/review">Order Review</Nav.Link>

                        {user.email ? <Nav.Link as={NavLink} style={{ color: 'white' }} to="/orders">Orders</Nav.Link> : ''}
                        {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                        {
                            user.email ?
                                <Button onClick={logOut}>log out</Button>
                                :
                                <NavLink to="/login"><button className="btn btn-light">Login</button></NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;