const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      let credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = credential.accessToken;
      // The signed-in user info.
      let user = result.user;

      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
      console.log("THINGS BROKE");
      console.log(errorCode);
      console.log(errorMessage);
    });
}

const signInButton = document.querySelector("#signInButton");
signInButton.addEventListener("click", signIn);
