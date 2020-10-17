import React, { useState } from 'react';
// import Modal from '../Modal';


function PhotoList({ category }) {
const [photos] = useState([
  {
    name: 'Git it Done',
    category: 'projects',
    description: 'A git repo search engine',
    image: 'git-it-done'
  },
  {
    name: 'Rv Roadtrip',
    category: 'projects',
    description: 'A website for RV camping grounds in national parks',
    image: 'rv-roadtrip'
  },
  {
    name: 'My Schtick Kick',
    category: 'projects',
    description: 'A hobby social media site',
    image: 'my-schtick-kick'
  },
  {
    name: 'My thoughts',
    category: 'projects',
    description: 'a backend social media application',
    image: 'my-thoughts'
  },
  {
    name: 'Password Generator',
    category: 'projects',
    description: 'a password generator',
    image: 'password-generator'
  },
  {
    name: 'Run Buddy',
    category: 'projects', 
    description: 'a fitness website',
    image: 'run-buddy'
  },
]);
const currentPhotos = photos.filter((photo) => photo.category === category);
console.log(category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image) => {
          console.log(image);
          return(
          <img
            src={require(`../../assets/images/${category}/${image.image}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            />
        
        )})}
       </div>
    </div>
  );
}

export default PhotoList;