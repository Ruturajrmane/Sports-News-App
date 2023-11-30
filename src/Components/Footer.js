// Footer.js

import React, { Component } from 'react';

const Footer = ()=> {

    return (
      <footer style={footerStyle}>
        <p>Made with <span style={{ color: 'red' }}>&#10084;&#65039;</span> by Ruturaj. All rights reserved.</p>
      </footer>
    );
}

const footerStyle = {
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
