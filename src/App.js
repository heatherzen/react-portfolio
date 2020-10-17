import React, { useState } from 'react';
// import About from './components/About';
import Nav from './components/Nav';
// import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Page from './components/Page';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "about"
    },
    {
      name: "projects",
      description: "projects"
    },
    {
      name: "contact"
    },
    {
      name: "resume",
      description: "my resume"
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Page currentCategory={currentCategory}></Page>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
