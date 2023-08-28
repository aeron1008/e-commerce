import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown, Dropdown } from 'react-bootstrap';

const Brands = () => {
  return (
    <NavDropdown title="BRANDS" id="Products" className='mr-auto'>        
        <div className='row'>
            <div className='col-md-6'>
                <Dropdown.Header>Category</Dropdown.Header>
            </div>
            <div className='col-md-6'>
                <Dropdown.Header>Best Sellers</Dropdown.Header>
            </div> 
            <Dropdown.Divider />
            <div className='col-md-6 row'>
                <div className='col-md-6'>
                    <LinkContainer to="/">
                        <NavDropdown.Item>Nicotine pouches</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavDropdown.Item>New Arrivals</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavDropdown.Item>Mini Nicotine Pouches</NavDropdown.Item>
                    </LinkContainer>
                </div>         
                <div className='col-md-6'>
                    <LinkContainer to="/">
                        <NavDropdown.Item>Nicotine pouches</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavDropdown.Item>New Arrivals</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavDropdown.Item>Mini Nicotine Pouches</NavDropdown.Item>
                    </LinkContainer>
                </div>       
            </div>            
            <div className='col-md-6'>
                <table className='table table-hover bestseller_tb'>
                    <tr>
                        <td><img src='/assets/klintavalanche_snusme.jpg' alt="brand" width={"50px"} /></td>
                        <td>VELO Ice Cool Mint Strong Slim All White</td>
                        <td>4.99$</td>
                    </tr>
                </table>
            </div>
        </div>
        
        
    </NavDropdown>
  );
};

export default Brands;
