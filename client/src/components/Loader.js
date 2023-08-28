import React from 'react';
// import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="loading-container" >
      <img src="/assets/loading.gif" alt="Loading" style={{
        width: '50px',
        height: '50px',
        margin: 'auto',
        display: 'block',
      }} />
    </div>
  );
};

export default Loader;
