import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>NVIDIA Pet Finder</h1>
    </header>
  )
}

const headerStyle = {
  background: '#76b900',
  color: 'black',
  textAlign: 'left',
  padding: '10px',
  fontWeight: 900,
  fontSize: 50
}


export default Header;