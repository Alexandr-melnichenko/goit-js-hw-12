export const createGalleryMarkup = photos => 
    photos.map(photo => 
        `<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${photo.largeImageURL}">
        <img
          class="gallery-image"
          src="${photo.webformatURL}"
          alt="${photo.tags}"
          title="${photo.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${photo.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${photo.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${photo.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${photo.downloads}</p></div>
      </div>
      </li>`).join("");
