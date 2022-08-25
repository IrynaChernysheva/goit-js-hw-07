//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
//Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
//Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsEl = document.querySelector('.gallery')

function galleryEl(galleryItems) {
  
  const galleryElCard = galleryItems.map(({preview,original,description}) => 
    `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  ).join('')

  return galleryElCard
}

galleryItemsEl.insertAdjacentHTML('beforeend',galleryEl(galleryItems))


let gallery = new SimpleLightbox('.gallery a');
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;
