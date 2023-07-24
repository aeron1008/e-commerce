import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import Badge from '@mui/material/Badge';

import { Route } from 'react-router-dom';

import { logout } from '../store/actions/userActions';
import SearchBox from './SearchBox';
import Products from './dropdowns/Products';
import Brands from './dropdowns/Brands';
import Vape from './dropdowns/Vape';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar expand="lg" className="custom-navbar" collapseOnSelect>
        <Container>
          <LinkContainer to="/">            
            <Navbar.Brand>                
              <img alt='Logo' src='/assets/logo.svg' className='m-auto block logo' style={{ width: "60px" }} />
            </Navbar.Brand>
          </LinkContainer>

          <Products />
          <Brands />
          <Vape />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">            
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>                  
                  <Badge badgeContent={cartItems.length} color="primary">
                    <i className="fas fa-shopping-cart"></i><span>Cart</span>
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username" className='mr-auto'>
                  <Row>
                    <Col xs={2}>
                      <NavDropdown.Item>
                        <i className="bi bi-person-square"></i>
                      </NavDropdown.Item>
                    </Col>
                    <Col xs={10}>
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> <span>LogIn</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu" className='ml-auto'>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     

      <Navbar className="underNav first-text-block" collapseOnSelect>
        <Container>
            <div className='underNav-item'><i className="bi bi-check-lg"></i> Express shipping</div>
            <div className='underNav-item'><i className="bi bi-check-lg"></i> 300+ varieties of Snus</div>
            <div className='underNav-item'><i className="bi bi-check-lg"></i> Competetive prices</div>
        </Container>
      </Navbar>   
    </header>
  );
};

export default Header;
