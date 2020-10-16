import React from 'react';
import coverImage from "../../assets/images/cover-image/cover-photo.jpg";

const About = () => {
    return (
        <div className='container'>
            
            <section id='about' className='about'>
                <h1 className='title' style={{ color: 'blueviolet' }}>Heather Graham</h1>
                <img src={coverImage} className='cover-image' style={{  width: '100%', height: '100%' }} alt='coding imagery'/>
                <p className='about-para'>Hi this is my about me section</p>
            </section>
            
            
        </div>
    );
}

export default About;