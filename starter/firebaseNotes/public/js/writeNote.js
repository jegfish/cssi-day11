window.onload = (event) => {
  console.log("window loaded");
  firebase.auth().onAuthStateChange((user) => {
    if (user) {
      console.log(user);
    } else {
      window.location = "index.html"
    }
  });
};
