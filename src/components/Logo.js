import React from 'react';

const Logo = (props) => {
  return (
    <img
      width={40}
      alt="Logo"
      src="/static/logo2.png"
      {...props}
    />
  );
};

export default Logo;
