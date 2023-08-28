import React, { useEffect } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTopProducts } from '../store/actions/productActions';
import Loader from './Loader';
import Message from './Message';

const ProductCarousel = () => {
  // const dispatch = useDispatch();

  const { loading, error } = useSelector(
    (state) => state.productTopRated
  );

  // useEffect(() => {
  //   dispatch(listTopProducts());
  // }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container>
      <Carousel pause="hover" className='bg-dark'>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/assets/fumi20_snusme.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/assets/apres50summer_snusme.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/assets/zyn13pack_snusme.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </Container>
    
    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} (${product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
  );
};

export default ProductCarousel;
