const testimonialEl = document.getElementById("testimonial");
let reviews = [];

fetch("data/reviews.json")
  .then((response) => response.json())
  .then((data) => {
    reviews = data.reviews;
    showRandomReview();
    setInterval(showRandomReview, 5000); // change every 5 seconds
  })
  .catch((error) => {
    testimonialEl.textContent = "Unable to load reviews at this time.";
    console.error("Error loading reviews:", error);
  });

function showRandomReview() {
  if (reviews.length > 0) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    testimonialEl.textContent = reviews[randomIndex];
  }
}
