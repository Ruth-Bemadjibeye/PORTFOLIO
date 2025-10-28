// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = navToggle.querySelectorAll('span');
  spans[0].classList.toggle('rotate-45');
  spans[1].classList.toggle('opacity-0');
  spans[2].classList.toggle('rotate--45');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href === "#") return;
    
    const target = document.querySelector(href);
    const offsetTop = target.offsetTop - 70; // Adjust for fixed header

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar');
function animateSkillBars() {
  skillBars.forEach(bar => {
    const progress = bar.querySelector('.progress');
    const level = bar.dataset.level;
    progress.style.width = `${level}%`;
  });
}

// Scroll animations
const faders = document.querySelectorAll('.card, .about p, .contact__form, .skill-category');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    entry.target.classList.add('show');
    
    // Animate skill bars when skills section becomes visible
    if (entry.target.classList.contains('skill-category')) {
      animateSkillBars();
    }
    
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add('fade-in');
  appearOnScroll.observe(fader);
});

// Form submission handling
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Animate button
  const button = form.querySelector('button');
  button.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Envoi...';
  button.disabled = true;
  
  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
    form.reset();
    
    setTimeout(() => {
      button.innerHTML = 'Envoyer';
      button.disabled = false;
    }, 3000);
  }, 1500);
});
