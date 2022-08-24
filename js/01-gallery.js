//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Реализация делегирования на div.gallery и получение url большого изображения.
//Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
//Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryItemsEl = document.querySelector(`.gallery`);
const galerryEl = image => {
	return image
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src="${preview}" data-source =${original} alt="${description}"></div>`;
		})
		.join("");
};

galleryItemsEl.insertAdjacentHTML('beforeend', galerryEl(galleryItems));
galleryItemsEl.addEventListener(`click`, onGalleryClick);
function onGalleryClick(even) {
	even.preventDefault();
	if (even.target.nodaName !== `IMG`) {
		return;
	}
	// const instance = basicLightbox.create(
	// 	`<img src="${event.target.dataset.source}" width="800" height="600">`,
	// );
	// instance.show();

	// const onKeydownEsc = event => {
	// 	console.log(event.code);
	// 	if (event.code === "Escape") {
	// 		instance.close();
	// 	}
	// };

	// window.addEventListener("keydown", onKeydownEsc);
}
