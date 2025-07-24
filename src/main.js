import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImages } from "./js/pixabay-api.js";
import { addImage } from "./js/getImage-api.js";

const loader = document.querySelector(".loader");
const form = document.getElementById("searchForm");
const galleryElement = document.querySelector(".gallery");
const loadMoreButton = document.querySelector(".load-more");
const endMessage = "We're sorry, but you've reached the end of search results";

let currentPage = 1;
let searchQuery = "";
let totalHits = 0;
let cardHeight = 0;
let lightbox;


function toggleLoader(show) {
  loader.style.display = show ? "block" : "none";
}

function moreButton(show) {
  loadMoreButton.style.display = show ? "block" : "none";
}

form.addEventListener("submit", async e => {
  e.preventDefault();

  searchQuery = document.getElementById("searchInput").value.trim();

  if (searchQuery === "") {
    iziToast.warning({
      title: "Caution",
      message: "Please enter a search query.",
    });
    return;
  }

  currentPage = 1;
  toggleLoader(true);
  await performSearch();
});

loadMoreButton.addEventListener("click", async () => {
  currentPage++;
  toggleLoader(true);
  await performSearch();
  smoothScroll();
});

async function performSearch() {
  try {
    const { hits, total } = await searchImages(searchQuery, currentPage);
    if (hits.length === 0) {
      iziToast.warning({
        title: "Caution",
        message: "Sorry, there are no more images matching your search query.",
      });

      galleryElement.innerHTML = "";

      moreButton(false);
    } else {
      if (currentPage === 1) {
        galleryElement.innerHTML = "";
        totalHits = total;

        moreButton(false);
      }
      hits.forEach(image => {
        addImage(image);
      });

      if (galleryElement.querySelectorAll(".gallery-item").length < totalHits) {

        moreButton(true);
      } else {

        moreButton(false);
        iziToast.info({ message: endMessage });
      }
      if (!lightbox) {
        lightbox = new SimpleLightbox(".gallery-link", {
          captions: true,
          captionsData: "alt",
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
    }
  } catch (error) {
    console.error("Error", error);
  } finally {
    toggleLoader(false);
  }
}

function smoothScroll() {
  if (currentPage > 1) {
    if (cardHeight === 0) {
      const firstCard = document.querySelector(".gallery-item");
      const rect = firstCard.getBoundingClientRect();
      cardHeight = rect.height;
    }
    window.scrollBy({
      top: cardHeight * 4,
      behavior: "smooth",
    });
  }
}