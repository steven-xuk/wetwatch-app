import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import Landing from './Landing';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false) // placeholder for signing in functionality

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ isSignedIn === true ? <Home/> : <Landing/>}/>
  ))
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
