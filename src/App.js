import React, { useState } from 'react';
// import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';


function App() {
  const [categories] = useState([
    {
        name: "contact",
        description: "form fields for contacting me"
    },
    {
        name: "portfolio",
        description: "projects"
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
        >
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
