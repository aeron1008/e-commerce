import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="searchPanel"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className=""
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
