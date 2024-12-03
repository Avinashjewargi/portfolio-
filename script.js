document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Show a confirmation message
    const confirmation = document.createElement("div");
    confirmation.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    confirmation.style.cssText = `
      margin-top: 1rem;
      padding: 1rem;
      color: white;
      background: #0073e6;
      text-align: center;
      border-radius: 5px;
    `;
    document.getElementById("contact").appendChild(confirmation);
  
    // Clear the form
    document.getElementById("contactForm").reset();
  
    // Remove the confirmation message after 5 seconds
    setTimeout(() => confirmation.remove(), 5000);
  });
  