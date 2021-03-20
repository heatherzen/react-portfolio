import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/heatherzen/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/heathergraham23/"
    },
  ]

  return (
    <div>
      <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
      </footer>
    </div>
  );
}

export default Footer;