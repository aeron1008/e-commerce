import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';

import FormContainer from '../components/FormContainer';
import { createProduct } from '../store/actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import { PRODUCT_UPDATE_RESET } from '../store/actions/actionTypes';

const ProductAddScreen = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    price: '0',
    image: '',
    brand: '',
    category: '',
    countInStock: '0',
    description: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error } = useSelector(
    (state) => state.productDetail
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
  } = useSelector((state) => state.productUpdate);


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function handleChange(e) {
      console.log(e.target.files);
      setFormData({ ...formData, image: "/assets/products/" + (e.target.files[0]).name });
      
      // setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData));
    history.push('/admin/productlist');
  };

  return (
    <Container>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error} </Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                value={formData.image}
                onChange={(e) => onChange(e)}
              ></Form.Control>
              <input type="file" id="myfile" name="myfile" onChange={handleChange} />                
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                name="brand"
                value={formData.brand}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter count in stock"
                name="countInStock"
                value={formData.countInStock}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={formData.category}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
                Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default ProductAddScreen;
