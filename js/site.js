(function () {
  'use strict';

  /* Mobile contact panel toggle */
  var openBtn = document.getElementById('open');
  var closeBtn = document.getElementById('close');
  var panel = document.getElementById('panel');

  if (openBtn && closeBtn && panel) {
    openBtn.addEventListener('click', function () {
      panel.classList.add('is-open');
      openBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
    });

    closeBtn.addEventListener('click', function () {
      panel.classList.remove('is-open');
      closeBtn.style.display = 'none';
      openBtn.style.display = 'inline-block';
    });
  }

  /* Highlight current page in navigation */
  var currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    var navLinks = document.querySelectorAll(
      '.main-nav a[data-page="' +
        currentPage +
        '"], .footer-nav a[data-page="' +
        currentPage +
        '"]',
    );
    navLinks.forEach(function (link) {
      link.classList.add('is-current');
    });
  }
})();
