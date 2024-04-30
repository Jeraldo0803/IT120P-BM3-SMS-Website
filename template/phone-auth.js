const button = document.getElementById('phone-login-btn');
const recaptchaContainer = document.getElementById('recaptcha-container'); // Optional

button.addEventListener('click', () => {
  // (Optional) Initialize reCAPTCHA (improves security)
  const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer);

  // Replace with a function to get the user's phone number (e.g., prompt or form)
  const phoneNumber = getPhoneNumberFromUser();

  /*
  firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
    .then(confirmationResult => {
      // SMS sent to user's phone
      console.log("Verification code sent!");
      // Handle next steps (e.g., prompt for verification code)
    })
    .catch(error => {
      console.error("Error starting verification:", error);
    });*/
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
    .then(confirmationResult => {
      // SMS sent to user's phone
      console.log("Verification code sent!");
      document.getElementById('statusMessage').textContent = "Verification code sent!";

      const verificationCodeInput = document.getElementById('verification-code');

      // Button or action to trigger verification after user enters code
      verificationCodeInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') { // Handle Enter key press for verification
          const verificationCode = verificationCodeInput.value;
          confirmationResult.confirm(verificationCode).then(result => {
            // User phone number is verified!
            console.log("Phone number verified!");
            document.getElementById('statusMessage').textContent = "Phone number verified!";

            // Proceed with your application logic
          }).catch(error => {
            // Handle verification code error
            console.error("Error verifying code:", error);
            document.getElementById('errorMessage').textContent = "Error verifying code: " + error.message;
          });
        }
      });
    })
    .catch(error => {
      console.error("Error starting verification:", error);
    });

});

// Replace this function with your method to get the user's phone number
function getPhoneNumberFromUser() {
  return prompt("Enter your phone number:");
}
