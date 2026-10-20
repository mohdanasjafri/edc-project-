const agenda = [
  { time: "10:00 AM", title: "Welcome to VentureVerse", detail: "Meet the community and set the tone for a day of fresh ideas." },
  { time: "10:20 AM", title: "From Idea to Startup", detail: "Explore how everyday problems can become meaningful opportunities." },
  { time: "11:15 AM", title: "The Founder Story", detail: "A fictional founder shares lessons from the early days of building." },
  { time: "12:00 PM", title: "Campus Idea Sprint", detail: "Work through a quick challenge and shape an idea with your peers." },
  { time: "1:15 PM", title: "Pitching Basics", detail: "Learn to explain the problem, solution, and value in a clear way." },
  { time: "2:15 PM", title: "Networking & Closing", detail: "Share takeaways, make connections, and decide on your next step." }
];

const timeline = document.getElementById("timeline");
agenda.forEach((item, index) => {
  const row = document.createElement("article");
  row.className = "timeline-item";
  row.innerHTML = `
    <div class="timeline-time">${item.time}</div>
    <div><h3>${item.title}</h3><p>${item.detail}</p></div>
    <div class="timeline-index">${String(index + 1).padStart(2, "0")}</div>`;
  timeline.appendChild(row);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const registerForm = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("studentName").value.trim();
  formMessage.textContent = `Thanks, ${name}! This is a demo — your details were not sent or saved.`;
  registerForm.reset();
});
