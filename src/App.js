import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import './styling/app.css'
import {useSelector} from 'react-redux';
import { selectSignedIn } from "./features/userSlice";
import Blogs from './components/Blogs';
const App=()=> {
 const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="app">
  

      <Navbar/>
   <HomePage/>
   {isSignedIn && <Blogs/>}
    </div>
  );
}

export default App;
