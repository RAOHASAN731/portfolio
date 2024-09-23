document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message!");
    // Here, you can add functionality to send the form data to a server
    this.reset(); // Reset the form
  });
