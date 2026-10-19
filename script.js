const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const applicationForm = document.getElementById("applicationForm");
const formResult = document.getElementById("formResult");

applicationForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(applicationForm);
  const username = String(data.get("playerName") || "").trim();
  const role = String(data.get("role") || "").trim();
  if (!username || !role) {
    formResult.textContent = "Please enter your Roblox username and choose a role.";
    return;
  }
  formResult.textContent = `Demo application prepared for ${username} (${role}). This form does not send your details. Contact the airline owner to apply.`;
});

document.getElementById("discordLink").addEventListener("click", event => {
  event.preventDefault();
  alert("Website setup reminder: replace this button's # link in index.html with the airline's approved Discord invite.");
});
