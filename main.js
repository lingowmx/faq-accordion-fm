import "./styles/main.scss";
//DOM elements

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".faq-button-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //Find the container and the answer
      const iconSpan = button.querySelector(".faq-icons");
      const answer = button.closest(".faq-header").nextElementSibling;
      //Toggle the state
      if (answer.style.display === "block") {
        iconSpan.classList.remove("minus-icon");
        iconSpan.classList.add("plus-icon");
        answer.style.display = "none";
      } else {
        iconSpan.classList.remove("plus-icon");
        iconSpan.classList.add("minus-icon");
        answer.style.display = "block";
      }
    });
  });
});

