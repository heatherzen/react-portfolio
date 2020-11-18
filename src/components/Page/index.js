import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import capitalizeFirstLetter from '../../utils/helpers';
import Content from '../Content';
import Resume from '../Resume';

function Page({ currentCategory }) {
    const switchPage = () => {
        switch (currentCategory.name) {
            case 'about':
                return <About />;
            case 'portfolio':
                return <Portfolio currentCategory={currentCategory} />;
            case 'contact':
                return <ContactForm />;
            case 'resume':
                return <Resume />
            default:
                return <About />;
        }
    }

    return (
        <div>
            <h2>{capitalizeFirstLetter(currentCategory.name)}</h2>
            <Content>{switchPage()}</Content>
        </div>
    )

}

export default Page;