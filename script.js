document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset old errors
  document.querySelectorAll(".error-message").forEach(el => el.remove());

  const fullName = document.getElementById("fullName").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  // Function to show error below input
  function showError(inputId, message) {
    const inputBox = document.getElementById(inputId).parentElement;
    const error = document.createElement("p");
    error.className = "error-message";
    error.innerText = message;
    inputBox.appendChild(error);
    isValid = false;
  }

  // Full name validation
  if (!/^[A-Za-z\s]+$/.test(fullName)) {
    showError("fullName", "Full Name should only contain letters (no numbers).");
  }

  // Username validation → no emails allowed, only letters/numbers/underscore
  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    showError("username", "Username should only contain letters, numbers, and underscores.");
  }
  if (username.includes("@")) {
    showError("username", "Username cannot be an email address.");
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Enter a valid email address.");
  }

  // Phone number validation
  if (!/^\d{10}$/.test(phone)) {
    showError("phone", "Phone number must be exactly 10 digits.");
  }

  // Password match check
  if (password !== confirmPassword) {
    showError("confirmPassword", "Passwords do not match.");
  }

  if (isValid) {
    successMessage.style.display = "block";
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  } else {
    successMessage.style.display = "none";
  }
});