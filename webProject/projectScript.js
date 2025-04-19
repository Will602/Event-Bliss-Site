document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "Thank you! We'll get back to you soon.";
      form.reset();
    });
  }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const eventType = document.getElementById("eventType").value;
  const message = document.querySelector("textarea").value;

  console.log("Form Data:", {
    name,
    email,
    eventType,
    message
  });

  // You can send this data to your backend here
});
