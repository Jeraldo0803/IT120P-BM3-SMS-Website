// Listen for authentication state changes
firebase.auth().onAuthStateChanged(function(user) {
  const googleLoginBtn = document.getElementById('google-login-btn');
  const phoneLoginBtn = document.getElementById('phone-login-btn');
  const welcomeMessage = document.getElementById('welcome-message');
  const userNameSpan = document.getElementById('user-name');
  const logoutBtn = document.getElementById('logout-btn');

  if (user) {
    // User is signed in, hide the login buttons
    if (googleLoginBtn) googleLoginBtn.style.display = 'none';
    if (phoneLoginBtn) phoneLoginBtn.style.display = 'none';
    document.getElementById('verification-code').style.display = 'none';
    document.getElementById('recaptcha-container').style.display = 'none';

    // Check the provider the user logged in with
    const provider = user.providerData[0].providerId;

    if (provider === 'google.com') {
        // Display welcome message with Google user's name
        userNameSpan.textContent = user.displayName || 'User';
    } else if (provider === 'phone') {
        // Display welcome message with user's phone number
        userNameSpan.textContent = user.phoneNumber || 'Unknown Number';
    }

    // Display the welcome message
    welcomeMessage.style.display = 'block';
    logoutBtn.style.display = 'block';

} else {
        // Optional: log a message or handle the login view
        console.log('User is not logged in');
    // User is not signed in, show the login buttons
    if (googleLoginBtn) googleLoginBtn.style.display = 'block';
    if (phoneLoginBtn) phoneLoginBtn.style.display = 'block';

    document.getElementById('verification-code').style.display = 'block';
    welcomeMessage.style.display = 'none';
    logoutBtn.style.display = 'none';

  }



});
    // Add event listener for logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log('User logged out successfully.');
            }).catch(function(error) {
                // An error happened.
                console.error('Error logging out:', error);
            });
        });
    }

// Function to handle Google Login
function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
  }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.error('Login Failed: ', error);
  });
}
