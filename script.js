const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const answers = {
  courses: "Sample courses: Classes 6–10 foundation and Classes 11–12 subject support. These are fictional demo details—replace them with a real client's approved information.",
  timings: "Sample timings: Monday to Saturday, 4:00 PM–7:00 PM. This is placeholder information only.",
  fees: "Sample fee range: ₹1,500–₹3,000 per month depending on class and subject. This is not a real institute's pricing.",
  demo: "Sample next step: request a demo class by contacting the institute. No booking is actually created by this demo."
};
const chatBody = document.getElementById("chatBody");
chatBody.querySelectorAll("button[data-answer]").forEach(button => {
  button.addEventListener("click", () => {
    const oldReply = chatBody.querySelector(".reply");
    if (oldReply) oldReply.remove();
    const reply = document.createElement("div");
    reply.className = "bubble bot reply";
    reply.style.marginTop = "12px";
    reply.textContent = answers[button.dataset.answer];
    chatBody.appendChild(reply);
  });
});
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formStatus").textContent =
    "Demo only: your information has NOT been sent or saved. Configure a real form service or backend before using this on a live client site.";
});
