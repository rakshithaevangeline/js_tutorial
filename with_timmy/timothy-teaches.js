// Either username or password should be present (not undefined, not an empty string)
// It's ok if both are present
// Error if both aren't present


function accountAccessCheck(username, password) {
  // if (username || password) {
  //   return true;
  // } else {
  //   return false;
  // }

  return username || password;
}


  if (accountAccessCheck("", "")) {
    console.log("Accepted");
  } else {
    console.log("Enter atleast one parameter");
  }
