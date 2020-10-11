const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please input a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});
