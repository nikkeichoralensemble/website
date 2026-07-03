document.addEventListener('DOMContentLoaded', function () {
  const photos = document.querySelectorAll('.memberphoto[data-src]');

  function loadImage(el) {
    const src = el.dataset.src;
    if (!src) return;

    // set the background image
    el.style.backgroundImage = `url('${src}')`;
    el.classList.add('loaded');

    // handle hover image swap if provided
    if (el.dataset.hover) {
      const hover = el.dataset.hover;
      el.addEventListener('mouseenter', () => { el.style.backgroundImage = `url('${hover}')`; });
      el.addEventListener('mouseleave', () => { el.style.backgroundImage = `url('${src}')`; });
    }
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '200px 0px', // start loading a bit before the element is visible
      threshold: 0.1
    });

    photos.forEach(el => observer.observe(el));
  } else {
    // Fallback: load all immediately if IntersectionObserver not supported
    photos.forEach(loadImage);
  }
});
