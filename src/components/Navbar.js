import React,{useState} from 'react'
import '../styling/Navbar.css' 
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../features/userSlice'
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
const Navbar=()=> {
    const isSignedIn= useSelector(selectSignedIn);
    const [inputValue, setInputValue]= useState("tech");
    const userData = useSelector(selectUserData);
    const  dispatch = useDispatch();
    
    const logout = (response)=>{
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
    };

  const handleClick= (e)=>{
    e.preventDefault();
      dispatch(setInput(inputValue));
  };
    return (
        <div className="navbar">
            <h1 className="navbar__header">BlogMania</h1>
            {isSignedIn &&(
             <div className = "blog__search">
         <input className="search"
          placeholder="Search for a blog "
           value= {inputValue} onChange={(e)=> setInputValue(e.target.value)}>       
               </input>
                <button  className="submit" 
               onClick={handleClick}>Search</button>
                </div>) }
                {isSignedIn?
                (
                <div className="navbar__user__data">
                 <Avatar className = "user" src= {userData?.imageUrl} alt={userData?.name} />
                 <h1 className = "signedIn" >{userData?.givenName} </h1>
                <GoogleLogout
                 clientId="423922393720-dh1rblj580e1mfpduvsmrgoj0af2hv08.apps.googleusercontent.com"
                 render = {(renderProps)=>(
                     <button 
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className="logout__button"
                     >
                         Logout
                     </button>
                 )}
                 onLogoutSuccess={logout}
                 />
                </div>):<h1 className = "notSignedIn"> user Not Available</h1>}
      
        </div>
    )
}

export default Navbar
