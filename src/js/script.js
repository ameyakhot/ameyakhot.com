const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let myDate = document.querySelector("#datee");
  const yes = new Date().getFullYear();
  myDate.innerHTML = yes;
});

// Popup

function openPopup(title, description, githubLink) {
  const popup = document.getElementById("popup");

  // Rest of the blur
  const popupBlur = document.createElement("div");
  popupBlur.className = "popup-blur"; // Add the blurred background
  document.body.appendChild(popupBlur);

  popup.style.display = "block";
  popup.style.position = "fixed"; // This ensures it stays fixed relative to the window
  popup.style.top = "50%"; // Position from the top, vertically centered
  popup.style.left = "50%"; // Position from the left, horizontally centered
  popup.style.transform = "translate(-50%, -50%)"; // Center the popup both vertically and horizontally
  popup.style.width = "auto"; // Auto width
  popup.style.maxWidth = "80%"; // Maximum width to maintain readability
  popup.style.zIndex = "999"; // Ensure it's above other elements
  popup.style.backgroundColor = "transparent";

  popupBlur.addEventListener("click", closePopupOnBlur);

  // Create the card HTML as a string with dynamic content
  const cardHTML = `
    <div class="popup-card-summary">
      <button class= "github-button-popup" onclick="closePopup()">&times;</button>
      <h3 style="font-size: 24px; color: #333; margin-bottom: 10px;">${title}</h3>
      <p id="project-summary" style="text-align: justify; font-size: 16px; color: #666; margin-bottom: 20px;">${description}</p>
      <a href="${githubLink}" target="_blank" style="display: inline-block; text-decoration: none; background-color: black; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: background-color 0.3s ease;">
        <i class="fab fa-github"></i>
      </a>
    </div>
  `;

  // Set the card HTML to the popup's innerHTML
  popup.innerHTML = cardHTML;
}

// Function to close the popup

function closePopup() {
  const popup = document.getElementById("popup");

  // Remove the blurred background
  const popupBlur = document.querySelector(".popup-blur");
  document.body.removeChild(popupBlur);

  // Hide the popup
  popup.style.display = "none";
}

// Function to close the popup when clicking on the blurred area
function closePopupOnBlur() {
  closePopup();
}
