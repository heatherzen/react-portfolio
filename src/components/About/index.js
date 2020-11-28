import React from 'react';
import coverImage from "../../assets/images/cover-image/cover-photo.jpg";
import headShot from "../../assets/images/headshot/profile-pic3.jpg";

const About = () => {
    return (
        <div className='container-1'>
            
            <section id='about' className='about'>
                
                
                <img src={headShot} className='head-shot' style={{ width: '30%', height: '30%' }} alt='profile picture'/>
                {/* <img src={coverImage} className='cover-image' style={{  width: '100%', height: '100%' }} alt='coding imagery'/> */}
                <p className='about-para'>I am Heather Graham.  A new, up and coming developer with Full-Stack skills.  I aspire to get into the fields of App development for both IOS and Android.  In my spare time, I enjoy doing henna art and playing guitar.</p>
            </section>
            
            
        </div>
    );
}

export default About;