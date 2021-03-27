import React from 'react';

const Logo = (props) => {
  return (
    <img
      width={50}
      alt="Logo"
      src="/static/logo2.svg"
      {...props}
    />
  );
};

export default Logo;
