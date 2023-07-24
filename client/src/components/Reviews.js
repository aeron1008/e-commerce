import React from 'react';
import { Container } from 'react-bootstrap';

const Products = () => {
  return (
    <Container className='mt-2 p-3'>
        <div className='row'>
            <div className='col-md-4'>
                <img src='/assets/reviews/xr13pack_snusme.jpg' alt='pack1' style={{ width: "100%" }} />
            </div>
            <div className='col-md-4'>
                <img src='/assets/reviews/xqsorangeapple12pack_snusme.jpg' alt='pack2' style={{ width: "100%" }} />
            </div>
            <div className='col-md-4'>
                <img src='/assets/reviews/dopeicemango50_snusme.jpg' alt='pack3' style={{ width: "100%" }} />
            </div>
        </div>
    </Container>    
  );
};

export default Products;
