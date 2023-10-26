import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element = {< Home/>}/>
      <Route path='/login' element = {< Login/>}/>
      <Route path='/register' element = {< Register/>}/>
      <Route path='/dashboard' element = {< Dashboard/>}/>
      <Route path='/projects' element = {<Project/>}/>


      
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
