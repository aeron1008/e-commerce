import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import { listProducts } from '../store/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Reviews from '../components/Reviews';
import Meta from '../components/Meta';
import Description from '../components/Description';
import { Link } from 'react-router-dom';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const { products, loading, error, pages, page } = useSelector(
    (state) => state.productList
  );
  // const categoryItems = [...new Set(Data.map((Val) => Val.category))];

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <Container>
          <h1>Buy Swedish snus online at SnusMe.com</h1>
          <ProductCarousel />
          <Reviews /> 
        </Container>
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}


      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <FilterRow category={categoryItems} /> */}

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}

      {!keyword ? (<Description />) : <br /> }

    </>
  );
};

export default HomeScreen;
