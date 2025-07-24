import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/msg-styles.css';

export default class Render {
  #selectorGallery;
  #lightbox;
  #selectorLoadingMsg;
  #selectorLoadButton;
  #HIDDEN_CLASS;

  constructor(
    selectorGallery = '.gallery',
    selectorLoadingMsg = '.loader-section',
    selectorLoadButton = 'button[type="button"]'
  ) {
    this.#selectorLoadingMsg = selectorLoadingMsg;
    this.#lightbox = new SimpleLightbox(
      `${(this.#selectorGallery = selectorGallery)} a`
    );
    this.#selectorLoadButton = selectorLoadButton;
    this.#HIDDEN_CLASS = 'visually-hidden';
  }

  showGalery(objData, page, per_page) {
    const gallery = document.querySelector(this.#selectorGallery);
    const loadButton = document.querySelector(this.#selectorLoadButton);

    if (page === 1) {
      gallery.innerHTML = '';
    }

    if (!objData || !objData.total) {
      this.showErrorMsg();
      loadButton.classList.add(this.#HIDDEN_CLASS);
      return;
    }

    gallery.innerHTML += objData.hits.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        `<li>
              <a href="${currentValue.largeImageURL}">
                <img src="${currentValue.webformatURL}" alt="${currentValue.tags}"/>
                </a>
              <ul class="img-description">
              <li>
                <span data-header>
                  Likes
                </span>
                <span data-count>
                  ${currentValue.likes}
                  </span>
              </li>
              <li>
                <span data-header>
                Views
                </span>
                <span data-count>
                ${currentValue.views}
                </span>
                </li>
                <li>
                <span data-header>
                Comments
                </span>
                <span data-count>
                ${currentValue.comments}
                </span>
                </li>
                <li>
                <span data-header>
                Downloads
                </span>
                <span data-count>
                  ${currentValue.downloads}
                </span>
              </li>
            </ul>
          </li>`
      );
    }, '');
    loadButton.classList.remove(this.#HIDDEN_CLASS);
    this.#lightbox.refresh();

    if (objData.total - (page - 1) * per_page <= per_page) {
      this.showErrorMsg(
        "We're sorry, but you've reached the end of search results."
      );
      loadButton.classList.add(this.#HIDDEN_CLASS);
    }
  }

  scrollGallery() {0
    const img = document.querySelector('li>a>img');
    const rect = img.getBoundingClientRect();
    scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });
  }

  toggleLoadingMsg() {
    document
      .querySelector(this.#selectorLoadingMsg)
      .classList.toggle(this.#HIDDEN_CLASS);
  }

  showErrorMsg(
    msg = 'Sorry, there are no images matching your search query. Please, try again!'
  ) {
    iziToast.show({
      class: 'error-msg',
      message: msg,
      messageColor: '#FAFAFB',
      messageSize: '16',
      messageLineHeight: '24',
      theme: 'dark',
      color: '#EF4040',
      iconText: 'Close',
      iconColor: '#FAFAFB',
      // iconUrl: 'img/button-x.svg',
      maxWidth: '432',
      zindex: 999,
      close: true,
      closeOnEscape: true,
      displayMode: 2,
      position: 'topRight',
      timeout: 5000,
      animateInside: false,
      drag: false,
      progressBarColor: '#B51B1B',
    });
  }
}
