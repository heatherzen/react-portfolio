import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../Photolist';


function Portfolio({currentCategory}) {
    const { name, description } = currentCategory;
    
    return (
        <section className="container-2">
            {/* <h1>{capitalizeFirstLetter(name)}</h1> */}
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Portfolio;