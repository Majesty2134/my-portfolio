document.addEventListener('DOMContentLoaded', function () {

  // Nav fires immediately on load
  const nav = document.querySelector('nav');
  if (nav) {
    setTimeout(function () {
      nav.classList.add('landed');
    }, 0);
  }

  // Everything else uses the observer
  const items = document.querySelectorAll('.drop-item:not(nav)');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(function () {
          el.classList.add('landed');
        }, Number(delay));
      } else {
        entry.target.classList.remove('landed');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  items.forEach(function (el) {
    observer.observe(el);
  });
});

setTimeout(function () {
    el.classList.add('landed');
}, Number(delay) + 2000);