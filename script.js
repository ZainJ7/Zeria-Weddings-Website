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
  
  window.addEventListener('resize', function() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (width > 768) {
      // Check if the menu is open, if so, close it
      var navLinks = document.getElementById('nav-links');
      var hamburger = document.querySelector('.hamburger');
      var mainBody = document.querySelector('.main-body');
      
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
        mainBody.classList.remove('hidden');
      }
    }
  });
  