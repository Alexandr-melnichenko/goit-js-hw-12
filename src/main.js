import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { perPage, queryFunction } from "./js/pixabay-api";
import { createGalleryMarkup } from "./js/render-functions";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

const form = document.querySelector('form.js-search-form');
const gallery = document.querySelector('.gallery');
const btnMore = document.querySelector('button.btn-more');
let query = null;
let pageNumber = 1;

const showBox = new SimpleLightbox('.img-box a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
    className: 'lightbox',
   });

 function showLoader() {
    document.getElementById('loader').style.display = 'block';
    }
    
 function hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }

 async function onButtonSubmit (event) {
        event.preventDefault();
        pageNumber = 1;
        showLoader();
    
    const forma = event.currentTarget;
    const {
        searchValue: { value},
      } = forma.elements;
      query = value;
    console.log(query);
   
    if (query === "") {
        iziToast.show({
            message: `⚠️ Please fill search input`,
            position: 'topRight',
            color: 'yellow',
        })
         hideLoader();
    return
    }
     
    gallery.innerHTML = "";  
    
    await queryFunction(query)
      .then((photos) => {
        if(!photos.hits || photos.hits.length === 0) {
            iziToast.show({
                title: "❌",
                message: `"Sorry, there are no images matching your search query. Please try again!"`,
                position: 'topRight',
                color: 'red',
            })
            return
        }
        console.log(photos);
        gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(photos.hits));
        showBox.refresh();
        btnMore.style.display = "block";
        return query;
    })
          
      .catch((error) => console.log(error))
      .finally(() => {hideLoader()}); 
    }


    
    async function btnMoreClick () {
      
      try {
        showLoader();
        pageNumber += 1;
    const photos = await queryFunction(query, pageNumber);
      console.log(pageNumber);
      let totalPages = Math.ceil(photos.totalHits / perPage)
      console.log(totalPages);

      if (pageNumber >= totalPages) {
        btnMore.style.display = "none";
        iziToast.show({
          title: "❌",
          message: `"We're sorry, but you've reached the end of search results."`,
          position: 'bottomCenter',
          color: 'blue',
      })
      }
      gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(photos.hits));
      handleScrollView();
      showBox.refresh();
          } catch (error) {
            console.log(error);
          } finally { hideLoader();
          }     
    }

    function handleScrollView () {
      const lastArticle = gallery.lastElementChild;
      const articleHeight = lastArticle.getBoundingClientRect().height;
      const scrollHeight = articleHeight * 2;
      
      window.scrollBy({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      })
    }

btnMore.addEventListener('click', btnMoreClick)
form.addEventListener('submit', onButtonSubmit);

