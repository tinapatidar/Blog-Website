import React from 'react'
import GoogleLogin from 'react-google-login'
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
import { useSelector } from 'react-redux';
import "../styling/home.css"
import { useDispatch } from 'react-redux';

const HomePage=()=> {
const dispatch = useDispatch()
const login = (response)=>{
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
};
const isSignedIn= useSelector(selectSignedIn);

    return (
        <div className= "home__page" style= {{display:isSignedIn?"none":""}}>
            <div className ="login__message">
                <h2></h2>
                <h1>A Readers favorite place</h1>
                <p>We provide high quality online resources for reading blogs . just sign up and start reading some quality blog</p>
            <GoogleLogin
     render= {(renderProps)=>(
               <button
               onClick={renderProps.onClick}
               disabled={renderProps.disabled}
               className="login__button"  
               >
                   Login with Google
               </button>
            )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
            />
            
            </div>
            
        </div>
    )
}

export default HomePage
