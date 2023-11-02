function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
    
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
    
    // Toggle body class to prevent background scrolling when menu is open
    document.body.classList.toggle('overflow-hidden');
    
    // Toggle the 'hidden' class on the main-body div
    var mainBody = document.querySelector('.main-body');
    mainBody.classList.toggle('hidden');
  }
  