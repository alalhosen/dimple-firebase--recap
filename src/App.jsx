import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase.init";
import { useState } from "react";

function App() {
  const [user, seruser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        seruser(result.user);
      })
      .catch((error) => console.log("ERROR", error));
  };

  return (
    <>
      <h1>Simple Dimple Trimple Firebase</h1>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
          <p>Last Login: {user.metadata.lastSignInTime}</p>
        </div>
      )}
    </>
  );
}

export default App;
