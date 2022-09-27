import { useState } from "react"
import {auth} from "../firebase"
import {createUserWithEmailAndPassword } from "firebase/auth"

function Signup(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState("");
    const [user,setUser] = useState("");

    async function processSignup() {
        try{
           setLoader(true);
           let userCred =await createUserWithEmailAndPassword(auth,email,password);
        //    console.log(userCred.user);
            setUser(userCred.user);
        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                setError("");
            },3000)
        }
           setLoader(false);

    }
 
    return (
        <>{
        error != "" ? <h1>Error is {error}</h1> :
         (loader == true) ? <h1>..Loading</h1> :
         user != "" ? <h1>Sign up user is {user.uid} </h1> :
        <>
        <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input> <br></br>
        <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} value ={password} ></input><br></br>
        <input type="text" placeholder="Full name" onChange={(e)=>{setName(e.target.value)}} value ={name} ></input><br></br>
        <button type="click" onClick={processSignup} >Sign up</button>
        </>

        }</>
    )
}

export default Signup