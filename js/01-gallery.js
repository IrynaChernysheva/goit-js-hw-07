//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Реализация делегирования на div.gallery и получение url большого изображения.
//Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
//Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemsEl = images => {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
      <img class= "gallery__image"
      src="${preview}" 
      data-source =${original} 
      alt="${description}"/>
      </a>
      </div>`;
    })
    .join('');
};

const cardImagesMarkup = galleryItemsEl(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', cardImagesMarkup);

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(evn) {
  evn.preventDefault();
  if (evn.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evn.target.dataset.source}" width="800" height="600">`,
  );
  instance.show();

  const onKeydownEsc = evn => {
    console.log(evn.code);
    if (evn.code === 'Escape') {
      instance.close();
    }
  };

  window.addEventListener('keydown', onKeydownEsc);
}
