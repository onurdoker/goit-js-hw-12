import{a as S,i as f,S as $}from"./assets/vendor-O3R4wHAc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const E="51289001-701d2fcdb5357aeffdf8b918c",q=15;async function x(t,s){const a=`\`https://pixabay.com/api/?key=${E}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${q}`;try{const o=await S.get(a),{hits:e,totalHits:r}=o.data;return{hits:e,total:r}}catch(o){throw console.error("Error",o),o}}function C(t){return t.hits.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:n,comments:w,downloads:L})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${o}">
                    <img src="${a}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${r}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${n}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${w}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${L}</span>
                </div>
            </div>
        </li>`).join("")}const g=document.querySelector(".loader"),h=document.getElementById("searchForm"),l=document.querySelector(".gallery"),v=document.querySelector(".load-more"),I="We're sorry, but you've reached the end of search results";let i=1,p="",y=0,d=0,u;function m(t){g.style.display=t}g.style.display="none";h.addEventListener("submit",search);function c(t){v.style.display=t?"block":"none"}h.addEventListener("submit",async t=>{if(t.preventDefault(),p=document.getElementById("searchInput").value.trim(),p===""){f.warning({title:"Caution",message:"Please enter a search query."});return}i=1,m(!0),await b()});v.addEventListener("click",async()=>{i++,m(!0),await b(),P()});function P(){i>1&&(d===0&&(d=document.querySelector(".gallery-item").getBoundingClientRect().height),window.scrollBy({top:d*4,behavior:"smooth"}))}async function b(){try{const{hits:t,total:s}=await x(p,i);t.length===0?(f.warning({title:"Caution",message:"Sorry, there are no more images matching your search query."}),l.innerHTML="",c(!1)):(i===1&&(l.innerHTML="",y=s,c(!1)),t.forEach(a=>{C(a)}),l.querySelectorAll(".gallery-item").length<y?c(!0):(c(!1),f.info({message:I})),u?u.refresh():u=new $(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}))}catch(t){console.error("Error",t)}finally{m(!1)}}
//# sourceMappingURL=index.js.map
