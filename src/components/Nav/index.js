import React from 'react';

const Nav = () => {
    const categories = [
        {
            name: "Contact",
            description: "form fields for contacting me"
        }, 
        {
            name: "Portfolio",
            description: "projects"
        },
        {
            name: "Resume",
            description: "my resume"
        }
    ];
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="nav-links">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className="categories" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;