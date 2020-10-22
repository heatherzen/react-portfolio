import React, { useState } from 'react';
// import Modal from '../Modal';


function PhotoList({ category }) {
  const [photos] = useState([
    {
      name: 'Git it Done',
      category: 'projects',
      description: 'A git repo search engine',
      image: 'git-it-done',
      url: 'https://heatherzen.github.io/git-it-done/',
      url2: 'https://github.com/heatherzen/git-it-done'
    },
    {
      name: 'Rv Roadtrip',
      category: 'projects',
      description: 'A website for RV camping grounds in national parks',
      image: 'rv-roadtrip',
      url: 'https://heatherzen.github.io/ZitasRv-Roadtrip/',
      url2: 'https://github.com/heatherzen/ZitasRv-Roadtrip'
    },
    {
      name: 'My Schtick Kick',
      category: 'projects',
      description: 'A hobby social media site',
      image: 'my-schtick-kick',
      url: 'https://fathomless-waters-65385.herokuapp.com/',
      url2: 'https://github.com/heatherzen/myschtickkick'
    },
    {
      name: 'My thoughts',
      category: 'projects',
      description: 'a backend social media application',
      image: 'my-thoughts',
      url: 'https://github.com/heatherzen/my-thoughts',
      url2: 'https://github.com/heatherzen/my-thoughts'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'a password generator',
      image: 'password-generator',
      url: 'https://heatherzen.github.io/heatherpwgen/',
      url2: 'https://github.com/heatherzen/heatherpwgen'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
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
            <div className="image-links">
              <h3 className="image-title">{image.name}</h3>
              <img
                src={require(`../../assets/images/${category}/${image.image}.png`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
              <div>
                <a href={image.url}>Click here for to view Website</a>
              </div>
              <div>
                <a href={image.url2}>Click here for Github code</a>
              </div>
            </div>

          )
        })}
      </div>
    </div>

  );
}

export default PhotoList;