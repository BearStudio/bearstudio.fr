import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';

const wrapImage = (img: HTMLImageElement) => {
  const a = document.createElement('a');
  a.href = img.src;
  a.dataset.pswpWidth = String(img.naturalWidth);
  a.dataset.pswpHeight = String(img.naturalHeight);
  img.parentNode?.insertBefore(a, img);
  a.appendChild(img);
};

const init = (img: HTMLImageElement, gallery: HTMLElement) => {
  wrapImage(img);
  new PhotoSwipeLightbox({
    gallery,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  }).init();
};

export const initImageLightbox = (
  img: HTMLImageElement,
  gallery: HTMLElement
) => {
  if (img.closest('a')) return;

  if (img.complete && img.naturalWidth > 0) {
    init(img, gallery);
  } else {
    img.addEventListener('load', () => init(img, gallery), { once: true });
  }
};
