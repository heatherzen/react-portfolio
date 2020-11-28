import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1 text-color">
      <h1>Heather Graham</h1>
      {props.children}
    </header>
  );
}

export default Header;