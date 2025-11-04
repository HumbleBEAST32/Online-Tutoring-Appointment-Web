document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.getElementById("signUpBtn");
  const dialog = document.getElementById("privacyDialog");
  const closeBtn = document.getElementById("closeDialog");
  const agreeBtn = document.getElementById("agreeDialog");
  const form = document.getElementById("signupForm");

  const verifyDialog = document.getElementById("verifyDialog");
  const closeVerify = document.getElementById("closeVerify");

  // Show Privacy Policy
  signUpBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  // Close Privacy Dialog
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  // Agree and show verification dialog
  agreeBtn.addEventListener("click", () => {
    dialog.close();

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match!");
      return;
    }

    if (form.checkValidity()) {
      // Simulate email verification notice
      verifyDialog.showModal();
    } else {
      form.reportValidity();
    }
  });

  // Close verify dialog and redirect to home
  closeVerify.addEventListener("click", () => {
    verifyDialog.close();
    window.location.href = "Home.html";
  });
});
