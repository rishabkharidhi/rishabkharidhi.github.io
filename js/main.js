(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- typing effect for roles ---
  var roles = window.__ROLES__ || ['security engineer'];
  var el = document.getElementById('role');
  if (el) {
    if (reduce) {
      el.textContent = roles.join(' / ');
    } else {
      var ri = 0, ci = 0, deleting = false;
      function tick() {
        var word = roles[ri];
        if (!deleting) {
          el.textContent = word.slice(0, ++ci);
          if (ci === word.length) { deleting = true; return setTimeout(tick, 1400); }
        } else {
          el.textContent = word.slice(0, --ci);
          if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
        }
        setTimeout(tick, deleting ? 45 : 90);
      }
      setTimeout(tick, 600);
    }
  }

  // --- scroll reveal ---
  var sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    sections.forEach(function (s) { io.observe(s); });
  } else {
    sections.forEach(function (s) { s.classList.add('in'); });
  }

  // --- mobile nav ---
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
})();
