import Render from './js/render-functions';
import PixabayAPI from './js/pixabay-api';

const renderInst = new Render();
const pixabayInst = new PixabayAPI();

const searchImg = document.querySelector('.form-search');

searchImg.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchImg.elements['search_string'].value.trim();
  if (!searchTerm) {
    renderInst.showErrorMsg('Empty field!');
    return;
  }

  renderInst.toggleLoadingMsg();
  pixabayInst.searchImg(searchTerm).then(responce => {
    renderInst.toggleLoadingMsg();
    renderInst.showGalery(responce.data, pixabayInst.page,  pixabayInst.per_page);
  });
});

const loadButton = document.querySelector('button[type="button"]');
loadButton.addEventListener('click', renderNextPage); 

function renderNextPage() {
  renderInst.toggleLoadingMsg();
  pixabayInst.searchImg().then(responce => {
    renderInst.toggleLoadingMsg();
    renderInst.showGalery(responce.data, pixabayInst.page, pixabayInst.per_page)
    renderInst.scrollGallery();
  })
}