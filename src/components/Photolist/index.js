import React, { useState } from 'react';
// import Modal from '../Modal';


function PhotoList({ category }) {
const [photos] = useState([
  {
    name: 'Git it Done',
    category: 'projects',
    description: 'A git repo search engine'
  },
  {
    name: 'Rv Roadtrip',
    category: 'projects',
    description: 'A website for RV camping grounds in national parks'
  },
  {
    name: 'My Schtick Kick',
    category: 'projects',
    description: 'A hobby social media site'
  },
  {
    name: 'My thoughts',
    category: 'projects',
    description: 'a backend social media application'
  },
  {
    name: 'Password Generator',
    category: 'projects',
    description: 'a password generator'
  },
  {
    name: 'Run Buddy',
    category: 'projects', 
    description: 'a fitness website'
  },
]);
const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            />
        ))}
       </div>
    </div>
  );
}

export default PhotoList;