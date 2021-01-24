import React from 'react'
import { Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.scss';

class NavSection extends React.Component{

    render(){
        return(
            <div className="navwrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="nav-container">
                            <Navbar variant="dark" expand="lg" className="navwrapper__custom-nav justify-content evenly" >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                                    <Nav className="mx-auto w-75">
                                    <Nav.Link href="/" active>Home</Nav.Link>
                                    <Nav.Link href="/pharmacy" active>Pharmacy</Nav.Link>
                                    <Nav.Link href="/products" active>Products</Nav.Link>
                                    <Nav.Link href="/account" active>Account</Nav.Link>
                                    <Nav.Link href="/about" active>About Us</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                                    <Button variant="outline-info">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default NavSection;