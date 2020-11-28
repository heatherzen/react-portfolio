import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1 bg">
      <h1>Heather Graham</h1>
      {props.children}
    </header>
  );
}

export default Header;