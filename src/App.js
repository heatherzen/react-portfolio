import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Page from './components/Page';
import Footer from './components/Footer';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "about me"
    },
    {
      name: "portfolio",
      
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
      <Header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
        {!contactSelected ? (
          <>
            <Page currentCategory={currentCategory}></Page>
          </>
          ) : (
            <ContactForm></ContactForm>
          )
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
