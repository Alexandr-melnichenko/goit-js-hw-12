import{S as u,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const d="https://pixabay.com/",m="46035162-73af77dc9f391d36c3be30780";function p(a){const e={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},o=new URLSearchParams(e);return fetch(`${d}api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=a=>a.map(e=>`<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          title="${e.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${e.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${e.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${e.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${e.downloads}</p></div>
      </div>
      </li>`).join(""),g=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery"),y=new u(".img-box a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function h(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}function v(a){a.preventDefault(),h();const e=a.currentTarget,{searchValue:{value:o}}=e.elements;if(console.log(o),o===""){l.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),c();return}n.innerHTML="",p(o).then(t=>{if(!t.hits||t.hits.length===0){l.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}console.log(t),n.insertAdjacentHTML("beforeend",f(t.hits)),y.refresh()}).catch(t=>console.log(t)).finally(()=>{c()})}g.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
