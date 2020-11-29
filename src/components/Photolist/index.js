import React, { useState } from 'react';
// import Modal from '../Modal';


function PhotoList({ category }) {
  const [photos] = useState([
    {
      name: 'Git it Done',
      category: 'portfolio',
      description: 'A git repo search engine',
      image: 'git-it-done',
      url: 'https://heatherzen.github.io/git-it-done/',
      url2: 'https://github.com/heatherzen/git-it-done'
    },
    {
      name: 'Rv Roadtrip',
      category: 'portfolio',
      description: 'A website for RV camping grounds in national parks',
      image: 'rv-roadtrip',
      url: 'https://heatherzen.github.io/ZitasRv-Roadtrip/',
      url2: 'https://github.com/heatherzen/ZitasRv-Roadtrip'
    },
    {
      name: 'My Schtick Kick',
      category: 'portfolio',
      description: 'A hobby social media site',
      image: 'my-schtick-kick',
      url: 'https://fathomless-waters-65385.herokuapp.com/',
      url2: 'https://github.com/heatherzen/myschtickkick'
    },
    {
      name: 'My thoughts',
      category: 'portfolio',
      description: 'a backend social media application',
      image: 'my-thoughts',
      url: 'https://github.com/heatherzen/my-thoughts',
      url2: 'https://github.com/heatherzen/my-thoughts'
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description: 'a password generator',
      image: 'password-generator',
      url: 'https://heatherzen.github.io/heatherpwgen/',
      url2: 'https://github.com/heatherzen/heatherpwgen'
    },
    {
      name: 'Run Buddy',
      category: 'portfolio',
      description: 'a fitness website',
      image: 'run-buddy',
      url: 'https://heatherzen.github.io/run-buddy/',
      url2: 'https://github.com/heatherzen/run-buddy'
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);
  console.log(category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image) => {
          // console.log(image, url);
          return (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require(`../../assets/images/${category}/${image.image}.png`)}
                    alt={image.name}
                    key={image.name}
                    style={{ width: '300px', height: '300px' }}
                  />
                </div>
                <div className="flip-card-back">
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                  <a className="text-color" href={image.url}>Click here to view Website</a>
                  <a className="text-color" href={image.url2}>Click here for Github code</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  );
}

export default PhotoList;