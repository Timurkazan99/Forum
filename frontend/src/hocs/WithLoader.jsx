import React from 'react';
import {Spinner} from "react-bootstrap";

const mapLoader = {
  spinner: Spinner,
  'null': () => null
}

const WithLoader = (Component) => (props) => {

  if (props.status !== 'fulfilled') {
    const Loader =  mapLoader[props.loader]
    return <Loader />
  }

  if ( props.placeholder && (!props.items || props.items.length <= 0)) {
    return <p>{props.placeholder}</p>
  }

  return (
    <Component {...props}/>
  );
};

export default WithLoader;