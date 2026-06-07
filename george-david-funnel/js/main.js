document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  // Sticky nav on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Form handler
  var heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = this.querySelector('.hero-input');
      var btn = this.querySelector('.hero-btn');
      var email = input.value.trim();

      if (email) {
        // Placeholder: wire to MailerLite API here
        // Example:
        // fetch('https://api.mailerlite.com/api/v2/groups/GROUP_ID/subscribers', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json', 'X-MailerLite-ApiKey': 'YOUR_KEY' },
        //   body: JSON.stringify({ email: email, name: '' })
        // });

        btn.textContent = 'Thanks! Check your inbox \u2192';
        btn.style.background = '#1B6B3A';
        input.value = '';

        var selfBtn = btn;
        setTimeout(function() {
          selfBtn.textContent = 'Get My Free Ebook \u2192';
          selfBtn.style.background = '';
        }, 5000);
      }
    });
  }
});
