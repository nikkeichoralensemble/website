// Swap <img> src on hover/touch when data-hover is present. Images use loading="lazy" so the browser defers download.
document.addEventListener('DOMContentLoaded', function () {
  const imgs = document.querySelectorAll('img.memberphoto[data-hover]');

  imgs.forEach(img => {
    const originalSrc = img.getAttribute('src');
    const hoverSrc = img.dataset.hover;
    if (!hoverSrc) return;

    // mouse hover for desktop
    img.addEventListener('mouseenter', () => {
      img.dataset._original = img.src;
      img.src = hoverSrc;
    });
    img.addEventListener('mouseleave', () => {
      img.src = img.dataset._original || originalSrc;
    });

    // touch devices: toggle on touchstart and restore on touchend
    img.addEventListener('touchstart', () => {
      img.dataset._original = img.src;
      img.src = hoverSrc;
    }, {passive: true});
    img.addEventListener('touchend', () => {
      img.src = img.dataset._original || originalSrc;
    }, {passive: true});
  });
});
