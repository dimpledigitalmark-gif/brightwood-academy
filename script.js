// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Demo enquiry: opens an email draft. Replace SCHOOL_EMAIL with the school's real email.
// Until configured, the form gives a clear reminder and does not pretend to send anything.
const SCHOOL_EMAIL = ""; // Example: "admissions@example.com"
const enquiryForm = document.getElementById("enquiryForm");
const formFeedback = document.getElementById("formFeedback");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const name = String(data.get("parentName") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!SCHOOL_EMAIL) {
    formFeedback.textContent = "Demo form: please add the school's official email in script.js before using enquiries.";
    return;
  }

  const subject = encodeURIComponent("Website enquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\nMessage:\n" + message
  );
  window.location.href = "mailto:" + SCHOOL_EMAIL + "?subject=" + subject + "&body=" + body;
});
