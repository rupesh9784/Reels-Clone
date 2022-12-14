import { useState } from "react"
import {auth} from "../firebase"
import {signInWithEmailAndPassword , signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";

function Login(){
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const [user,setUser] = useState(null);
  const [loader,setLoader] = useState(false);
  const [mainloader,setMainLoader] = useState(true);
  const [error,setError] = useState("");

 
   const trackEmail = function(e){
     setEmail(e.target.value);
   }
   const trackPassword = function(e){
     setpassword(e.target.value);
   }

   const printDetails = async function(){
    try {
    setLoader(true);
    let userCred = await signInWithEmailAndPassword(auth,email,password)
    setUser(userCred.user);
    } catch(err){
      setError(err.message);
      setTimeout(()=>{
        setError("");
      },3000)
    }
    setLoader(false);
  }
   const logout =async function(){
     await signOut(auth)
     setUser(null);
   }
  
  //for run first time only like didmount
   useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
      setMainLoader(false);
    });
    
   },[])
    return(
      <>
      {
        mainloader == true ? <h1>Page is Loading..</h1> :
        error != "" ? <h1>Errpr is {error}</h1> :
        loader == true ? <h1>...Loading</h1> :
        user != null ? <><h1>User is {user.uid}</h1><button onClick={logout}>Log out</button></> :     
        <><input type="email" onChange={trackEmail} placeholder="email" />
        <br></br>
        <input type="password" onChange={trackPassword} placeholder="password"/>
        <br></br>
        <button type="click" onClick={printDetails}>login</button></>
      }
      </>
    ) 
}

export default Login