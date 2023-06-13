import React, {useEffect, useState} from 'react';

const WithMobile = (Component) => (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <Component isMobile={width <= 768} {...props} />
  )
}

export default WithMobile;