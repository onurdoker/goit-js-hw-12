import{a as g,i as u,S as h}from"./assets/vendor-ZyNgbvOy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v="51289001-701d2fcdb5357aeffdf8b918c",b=15;async function w(e,o){const s=`\`https://pixabay.com/api/?key=${v}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${b}`;try{const a=await g.get(s),{hits:t,totalHits:r}=a.data;return{hits:t,total:r}}catch(a){throw console.error("Error",a),a}}function L(e){const o=document.querySelector(".gallery"),s=`
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
  `;o.insertAdjacentHTML("beforeend",s)}const S=document.querySelector(".loader"),$=document.getElementById("searchForm"),i=document.querySelector(".gallery"),q=document.querySelector(".loadMore"),E="We're sorry, but you've reached the end of search results.";let n=1,f="",p=0,c=0,d;function m(e){S.style.display="block"}$.addEventListener("submit",async e=>{if(e.preventDefault(),f=document.getElementById("searchInput").value.trim(),f===""){u.warning({title:"Caution",message:"Please enter a search query."});return}n=1,m(),await y()});q.addEventListener("click",async()=>{n++,m(),await y(),x()});async function y(){try{const{hits:e,total:o}=await w(f,n);e.length===0?(u.warning({title:"Caution",message:"Sorry, there are no more images matching your search query."}),i.innerHTML="",moreButton(!1)):(n===1&&(i.innerHTML="",p=o,moreButton(!1)),e.forEach(s=>{L(s)}),i.querySelectorAll(".gallery-item").length<p?moreButton(!0):(moreButton(!1),u.info({message:E})),d?d.refresh():d=new h(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}))}catch(e){console.error("Error",e)}finally{toggleLoader(!1)}}function x(){n>1&&(c===0&&(c=document.querySelector(".gallery-item").getBoundingClientRect().height),window.scrollBy({top:c*4,behavior:"smooth"}))}
//# sourceMappingURL=index.js.map
