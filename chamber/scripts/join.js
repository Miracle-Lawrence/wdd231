// ==== Timestamp population on join.html ====
document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});

// ==== Modal functionality ====
const openButtons = document.querySelectorAll(".open-btn");
const closeButtons = document.querySelectorAll(".close-btn");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const dialog = button.closest(".card").querySelector("dialog");
    dialog.showModal();
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    dialog.close();
  });
});

// ==== Thank You Page Data Display ====
if (document.querySelector("#results")) {
  const data = new URLSearchParams(window.location.search);

  const getValue = (key) => data.get(key) || "Not provided";

  const firstName = getValue("firstName");
  const lastName = getValue("lastName");
  const orgTitle = getValue("orgTitle");
  const email = getValue("email");
  const phone = getValue("phone");
  const orgName = getValue("organization");
  const membership = getValue("membership");
  const description = getValue("description");
  const timestamp = getValue("timestamp");

  const formattedTime =
    timestamp !== "Not provided"
      ? new Date(timestamp).toLocaleString()
      : "Not available";

  const output = document.querySelector("#results");
  output.innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization Title:</strong> ${orgTitle}</p>
    <p><strong>Organization Name:</strong> ${orgName}</p>
    <p><strong>Membership:</strong> ${membership}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Submitted On:</strong> ${formattedTime}</p>
    <p><strong>Timestamp (raw):</strong> ${timestamp}</p>

  `;
}
