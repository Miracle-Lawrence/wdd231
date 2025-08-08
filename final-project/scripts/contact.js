
// For thankyou.html
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("thank-you-container");
  const urlParams = new URLSearchParams(window.location.search);

  const name = urlParams.get("name") || "N/A";
  const email = urlParams.get("email") || "N/A";
  const phone = urlParams.get("phone") || "N/A";
  const subject = urlParams.get("subject") || "N/A";
  const message = urlParams.get("message") || "N/A";

  container.innerHTML = `
    <section class="thank-you-card">
      <h1>Thank You!</h1>
      <p>We appreciate you reaching out to De-Bubbles Eatery. Here’s what you submitted:</p>
      <ul>
        <li><strong>Full Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phone}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>We will respond to your inquiry as soon as possible.</p>
      <a href="index.html" class="cta-button">Back to Home</a>
      
    </section>
  `;
});

