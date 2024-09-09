//-----------------------------------------------menu nav bar-------------------------------------------------------//
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//---------------------------------------------scroll btn main----------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".header__btn .btn");

  scrollButton.addEventListener("click", function() {
    const sectionAbout = document.querySelector("#about");
    sectionAbout.scrollIntoView({ behavior: "smooth" });
  });
});
//------------------------------------------------zoom images-------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".explore__images img");

  images.forEach(image => {
    image.addEventListener("click", () => {
      image.classList.toggle("zoomed");
    });
  });
});
//------------------------------------------menu navbar----------------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-nav button');
  const cards = document.querySelectorAll('.special__card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      filterCards(category);
    });
  });

  function filterCards(category) {
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
});

//-------------------------------------------alerts for reservation---------------------------------------------------------------//
  document.getElementById('bookNowBtn').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var people = document.getElementById('people').value;

    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    if (!date) {
      alert('Please select a date.');
      return;
    }

    if (!people) {
      alert('Please select the number of people.');
      return;
    }

    alert('Thank you for your reservation, ' + name + '! We look forward to seeing you on ' + date + '.');
  });
//-------------------------------------animations----------------------------------------------------------------------//
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});