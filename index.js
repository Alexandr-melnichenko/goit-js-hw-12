import{a as b,S as v,i as d}from"./assets/vendor-CJCXbx8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w="https://pixabay.com/",L="46035162-73af77dc9f391d36c3be30780";let m=15;async function g(s,t){const a={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:m},o=new URLSearchParams(a);try{const e=await b.get(`${w}api/?${o}`);return console.log(e.data),e.data}catch(e){throw console.error(e),e}}const f=s=>s.map(t=>`<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
          title="${t.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${t.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${t.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${t.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${t.downloads}</p></div>
      </div>
      </li>`).join(""),x=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery"),p=document.querySelector("button.btn-more");let l=null,i=1;const y=new v(".img-box a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function h(){document.getElementById("loader").style.display="block"}function u(){document.getElementById("loader").style.display="none"}async function S(s){s.preventDefault(),i=1,h();const t=s.currentTarget,{searchValue:{value:a}}=t.elements;if(l=a,console.log(l),l===""){d.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),u();return}n.innerHTML="",await g(l).then(o=>{if(!o.hits||o.hits.length===0){d.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}return console.log(o),n.insertAdjacentHTML("beforeend",f(o.hits)),y.refresh(),p.style.display="block",l}).catch(o=>console.log(o)).finally(()=>{u()})}async function P(){try{h(),i+=1;const s=await g(l,i);console.log(i);let t=Math.ceil(s.totalHits/m);console.log(t),i>=t&&(p.style.display="none",d.show({title:"❌",message:`"We're sorry, but you've reached the end of search results."`,position:"bottomCenter",color:"blue"})),n.insertAdjacentHTML("beforeend",f(s.hits)),$(),y.refresh()}catch(s){console.log(s)}finally{u()}}function $(){const a=n.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})}p.addEventListener("click",P);x.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
