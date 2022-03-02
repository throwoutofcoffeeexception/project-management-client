import { useEffect, useState } from "react"
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import axios from "axios";
import ProjectsList from "./components/ProjectsList";
import CreateProject from "./components/CreateProject";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";


function App() {

  const [projectsArr, setProjectsArr] = useState([]);

  useEffect( () => {
    fetchProjects();
  }, []);


  const fetchProjects = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
      .then(response => {
        setProjectsArr(response.data);
      })
      .catch(e => console.log("error getting list of projects...", e));
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={ <ProjectsList projects={projectsArr} /> } />
        <Route path="/projects/create" element={ <CreateProject updateProjects={fetchProjects} />} />
        
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        
      </Routes>

      
    </div>
  );
}

export default App;
