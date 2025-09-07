// ==========================
// Part 1: Form Validation
// ==========================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  let message = "";

  // Custom validation logic
  if (name === "") {
    message += "Name is required. ";
  }
  if (email === "") {
    message += "Email is required. ";
  } else if (!validateEmail(email)) {
    message += "Email format is invalid. ";
  }

  if (message) {
    formMessage.textContent = message;
  } else {
    formMessage.textContent = "Form submitted successfully! ✅";
    form.reset();
  }
});

// Helper function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// ==========================
// Part 2: Interactive Feature 1 - Toggle Background
// ==========================

document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f0f0f0" : "lightyellow";
});

// ==========================
// Part 3: Interactive Feature 2 - Dynamic List
// ==========================

document.getElementById("addItemBtn").addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("itemList").children.length + 1);
  document.getElementById("itemList").appendChild(newItem);
});
