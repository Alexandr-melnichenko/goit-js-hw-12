import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { queryFunction } from "./js/pixabay-api";
import { createGalleryMarkup } from "./js/render-functions";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

const form = document.querySelector('form.js-search-form');
const gallery = document.querySelector('.gallery');

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

 function onButtonSubmit (event) {
        event.preventDefault();
        showLoader();
    
    const forma = event.currentTarget;
    const {
        searchValue: { value: query },
      } = forma.elements;
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
    
    queryFunction(query)
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
    })
          
      .catch((error) => console.log(error))
      .finally(() => {hideLoader()}); 
    }



form.addEventListener('submit', onButtonSubmit);

