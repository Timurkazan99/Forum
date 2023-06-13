import React from 'react';

const WithErrors = (Component) => (props) => {

  if (props.error) {
    return <div className='error'>{props.error}</div>
  }

  return (<Component {...props} />);
};

export default WithErrors;