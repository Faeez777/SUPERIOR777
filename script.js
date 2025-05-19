const popupOverlay = document.getElementById("popupOverlay");
const registerButton = document.getElementById("hello");
const form = document.querySelector("form");

registerButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  if (form.checkValidity()) {
    popupOverlay.style.display = "flex"; // Show popup
    form.reset(); // ✅ Reset the form
  } else {
    form.reportValidity(); // Show validation errors
  }
});

function closePopup() {
  popupOverlay.style.display = "none"; // Hide popup
}
