import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FormContainer from '../components/FormContainer';
import { login } from '../store/actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';


const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => state.userLogin);

  const redirect = location.search ? location.search.split('=')[1] : '/';
  console.log(location.search);
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <TextField 
          className='mb-3'
          label="Email Address" 
          variant="outlined" 
          type="email"
          placeholder="Enter email"
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}/>
        <TextField 
          className='mb-3'
          label="Enter password" 
          variant="outlined" 
          type="password"
          placeholder="Enter password"
          value={password}
          fullWidth
          onChange={(e) => setPassword(e.target.value)}/>          
        <Button type="submit" variant="contained">Sign In</Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
