import{a as w,i as f,S as L}from"./assets/vendor-O3R4wHAc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const S="51289001-701d2fcdb5357aeffdf8b918c",E=15;async function $(e,s){const o=`https://pixabay.com/api/?key=${S}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${E}`;try{const a=await w.get(o),{hits:t,totalHits:r}=a.data;return{hits:t,total:r}}catch(a){throw console.error("Error",a),a}}function q(e){const s=document.querySelector(".gallery"),o=`
    <li class="gallery-item">
      <div class="place-for-image">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" class="picture"/>
        </a>
      </div>
      <div class="info-text">
        <div class="description">
          <span class="bold-text">Likes</span>
          <span class="info-value">${e.likes}</span>
        </div>
        <div class="description">
          <span class="bold-text">Views</span>
          <span class="info-value">${e.views}</span>
        </div>
        <div class="description">
          <span class="bold-text">Comments</span>
          <span class="info-value">${e.comments}</span>
        </div>
        <div class="description">
          <span class="bold-text">Downloads</span>
          <span class="info-value">${e.downloads}</span>
        </div>
      </div>
    </li>
  `;s.insertAdjacentHTML("beforeend",o)}const g=document.querySelector(".loader"),h=document.getElementById("searchForm"),c=document.querySelector(".gallery"),v=document.querySelector(".load-more"),x="We're sorry, but you've reached the end of search results";let n=1,p="",y=0,d=0,u;function m(e){g.style.display=e}g.style.display="none";h.addEventListener("submit",search);function l(e){v.style.display=e?"block":"none"}h.addEventListener("submit",async e=>{if(e.preventDefault(),p=document.getElementById("searchInput").value.trim(),p===""){f.warning({title:"Caution",message:"Please enter a search query."});return}n=1,m(!0),await b()});v.addEventListener("click",async()=>{n++,m(!0),await b(),I()});function I(){n>1&&(d===0&&(d=document.querySelector(".gallery-item").getBoundingClientRect().height),window.scrollBy({top:d*4,behavior:"smooth"}))}async function b(){try{const{hits:e,total:s}=await $(p,n);e.length===0?(f.warning({title:"Caution",message:"Sorry, there are no more images matching your search query."}),c.innerHTML="",l(!1)):(n===1&&(c.innerHTML="",y=s,l(!1)),e.forEach(o=>{q(o)}),c.querySelectorAll(".gallery-item").length<y?l(!0):(l(!1),f.info({message:x})),u?u.refresh():u=new L(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}))}catch(e){console.error("Error",e)}finally{m(!1)}}
//# sourceMappingURL=index.js.map
