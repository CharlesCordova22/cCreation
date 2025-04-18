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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwy3I0f_-9GnuuVvvJZy4nQr8C0MJL6benVn2xpFWoM0l94Qc4lPuJs3ArdapHOnswx/exec';

  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
  });