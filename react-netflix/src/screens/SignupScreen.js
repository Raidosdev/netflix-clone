import React, { useState } from 'react';
import './SignupScreen.css'
import firebase from '../firebase';
//import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
window.addEventListener("load", function(){
  this.document.getElementById('viewAlerta').addEventListener('click', function(){
    alert('invente un email y password')
  })
})
function SignupScreen(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const register = async(e) => {
      e.preventDefault()
      try{
        const user = await firebase.auth().createUserWithEmailAndPassword(
          email,
          pass
        )
        if(user){
          alert("Account created successfully")
        }
      }catch(error){
        alert(error)
      }
    };
    const signIn = async(e) => {
      e.preventDefault()
      try{
        const user = await firebase.auth().signInWithEmailAndPassword(
          email,
          pass
        )
        if(user){
          alert("Account created successfully")
        }
      }catch(error){
        alert(error)
      }
    }
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button type="submit" onClick={signIn} >
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

// function SignupScreen() {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const register = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(
//       auth,
//       emailRef.current.value,
//       passwordRef.current.value
//     )
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const signIn = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(
//       emailRef.current.value,
//       passwordRef.current.value
//     )
//     .then((userCredential) => {
//       console.log(userCredential);
//     })
//     .catch((error) => alert(error.message));
//   };

//   return (
//     <div className="signupScreen">
//       <form>
//         <h1>Sign In</h1>
//         <input ref={emailRef} type="email" placeholder="Email" />
//         <input ref={passwordRef} type="password" placeholder="Password" />
//         <button type="submit" onClick={signIn}>
//           Sign In
//         </button>
//         <h4>
//           <span className="signupScreen_gray">New to Netflix? </span>
//           <span className="signupScreen_link" onClick={register}>
//             Sign Up now.
//           </span>
//         </h4>
//       </form>
//     </div>
//   );
// }

export default SignupScreen;
// import React, { useRef } from 'react'
// import './SignupScreen.css'
// import { auth } from '../firebase';

// function SignupScreen() {
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

//     const register  = (e) => {
//         e.preventDefault();

//         auth.createUserWithEmailAndPassword(
//             emailRef.current.value,
//             passwordRef.current.value
//         ).then((authUser) => {
//             console.log(authUser);
//         }).catch((error) => {
//             alert(error.message);
//         });
//     };

//     const signIn = (e) => {
//        e.preventDefault(); 
//     };

//   return (
//     <div className='signupScreen'>
//         <form>
//             <h1>Sign In</h1>
//             <input ref={emailRef} placeholder='Email' type='email'></input>
//             <input ref={passwordRef} placeholder='Password' type='password'></input>
//             <button type='submit' onClick={signIn}>Sign In</button>

//             <h4>
//                 <span className='signupScreen__gray'>New to Netflix? </span>
//                 <span className='signupScreen__link' onClick={register}>
//                     Sign Up now.
//                 </span> 
//             </h4>
//         </form>
//     </div>
//   )
// }

// export default SignupScreen