// Get elements
const animateBtn = document.getElementById("animateBtn");
const saveColorBtn = document.getElementById("saveColorBtn");
const colorInput = document.getElementById("colorInput");
const message = document.getElementById("message");

// Trigger pulse animation on button click
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");

  // Remove the class after animation ends so it can be triggered again
  animateBtn.addEventListener(
    "animationend",
    () => {
      animateBtn.classList.remove("animate");
    },
    { once: true }
  );
});

// Save favorite color to localStorage
saveColorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();

  if (color) {
    localStorage.setItem("favoriteColor", color);
    message.textContent = `Your favorite color "${color}" has been saved!`;

    // Change button color dynamically
    animateBtn.style.backgroundColor = color;
  } else {
    message.textContent = "Please enter a valid color!";
  }
});

// On page load, load saved color and apply it
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("favoriteColor");
  if (savedColor) {
    animateBtn.style.backgroundColor = savedColor;
    message.textContent = `Welcome back! Your favorite color is "${savedColor}".`;
  }
});
