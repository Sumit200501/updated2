function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Scroll-to-top
function scrollTopFunc() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Load achievements
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('achievement-list');
    data.forEach(item => {
      container.innerHTML += `<p>📌 ${item.title} (${item.year})</p>`;
    });
  });

