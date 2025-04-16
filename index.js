window.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");

    setTimeout(() => {
      loader.classList.add("fade-out");
      content.style.display = "block";
    }, 3750); // 3750 = 5 seconds
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}