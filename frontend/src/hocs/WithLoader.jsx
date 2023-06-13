import React from 'react';
import {Spinner} from "react-bootstrap";

const WithLoader = (Component) => (props) => {

  if (props.status === 'pending') {
    return props.show && <div className='loader'><Spinner /></div>
  }

  if ( props.placeholder && (!props.items || props.items.length <= 0)) {
    return props.show && <p>{props.placeholder}</p>
  }

  return (
    <Component {...props}/>
  );
};

export default WithLoader;