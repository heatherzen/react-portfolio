import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/my-schtick-kick.png";

function Projects(props) {
    const currentCategory = {
        name: "projects",
        description:
        "Photos of my different projects"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img 
                src={photo} 
                alt="Project Example" 
                className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Projects;