// Burger menu
document.getElementById('burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
  
  // Contact form validation (basique)
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });