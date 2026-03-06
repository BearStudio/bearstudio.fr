import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';

const wrapImage = (img: HTMLImageElement) => {
  const a = document.createElement('a');
  a.href = img.src;
  a.dataset.pswpWidth = String(img.naturalWidth);
  a.dataset.pswpHeight = String(img.naturalHeight);
  img.parentNode?.insertBefore(a, img);
  a.appendChild(img);
  return a;
};

const init = (img: HTMLImageElement) => {
  const a = wrapImage(img);
  new PhotoSwipeLightbox({
    gallery: a,
    pswpModule: () => import('photoswipe'),
  }).init();
};

export const initImageLightbox = (img: HTMLImageElement) => {
  if (img.closest('a')) return;

  if (img.complete && img.naturalWidth > 0) {
    init(img);
  } else {
    img.addEventListener('load', () => init(img), { once: true });
  }
};
