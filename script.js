// Enable motion styles only when JavaScript is available, so content remains visible without JS.
document.documentElement.classList.add("js-motion");
const menuButton = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
const themeButton = document.querySelector("#theme-toggle");
const copyButton = document.querySelector("#copy-email");
const emailLink = document.querySelector("#email-link");
const copyStatus = document.querySelector("#copy-status");
const yearElement = document.querySelector("#year");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});
themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#181a18" : "#f3f0e8");
});
copyButton.addEventListener("click", async () => {
  const email = emailLink.getAttribute("href").replace(/^mailto:/, "").trim();
  if (!email || email === "ADD_YOUR_EMAIL" || !email.includes("@")) {
    copyStatus.textContent = "Add your real email address in index.html before publishing."; return;
  }
  try { await navigator.clipboard.writeText(email); copyStatus.textContent = "Email address copied."; }
  catch { copyStatus.textContent = `Copy unavailable in this browser. Email: ${email}`; }
});
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach((item, index) => { item.style.transitionDelay = `${Math.min(index % 4, 3) * 75}ms`; observer.observe(item); });
}
yearElement.textContent = new Date().getFullYear();
document.documentElement.classList.add("motion-ready");
