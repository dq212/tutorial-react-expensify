import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type:'LOGIN', 
    uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
    // firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     // ...
    //   }).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
  };
};

export const logout =()=>({
    type:'LOGOUT'
})

export const startLogout = () =>{
    return () => {
        return firebase.auth().signOut();
    }
}