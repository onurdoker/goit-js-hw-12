var w=t=>{throw TypeError(t)};var b=(t,e,s)=>e.has(t)||w("Cannot "+s);var a=(t,e,s)=>(b(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s,i)=>(b(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);import{S,i as v,a as B}from"./assets/vendor-O3R4wHAc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();var m,f,y,L,l;class E{constructor(e=".gallery",s=".loader-section",i='button[type="button"]'){g(this,m);g(this,f);g(this,y);g(this,L);g(this,l);h(this,y,s),h(this,f,new S(`${h(this,m,e)} a`)),h(this,L,i),h(this,l,"visually-hidden")}showGalery(e,s,i){const r=document.querySelector(a(this,m)),o=document.querySelector(a(this,L));if(s===1&&(r.innerHTML=""),!e||!e.total){this.showErrorMsg(),o.classList.add(a(this,l));return}r.innerHTML+=e.hits.reduce((u,d)=>u+`<li>
              <a href="${d.largeImageURL}">
                <img src="${d.webformatURL}" alt="${d.tags}"/>
                </a>
              <ul class="img-description">
              <li>
                <span data-header>
                  Likes
                </span>
                <span data-count>
                  ${d.likes}
                  </span>
              </li>
              <li>
                <span data-header>
                Views
                </span>
                <span data-count>
                ${d.views}
                </span>
                </li>
                <li>
                <span data-header>
                Comments
                </span>
                <span data-count>
                ${d.comments}
                </span>
                </li>
                <li>
                <span data-header>
                Downloads
                </span>
                <span data-count>
                  ${d.downloads}
                </span>
              </li>
            </ul>
          </li>`,""),o.classList.remove(a(this,l)),a(this,f).refresh(),e.total-(s-1)*i<=i&&(this.showErrorMsg("We're sorry, but you've reached the end of search results."),o.classList.add(a(this,l)))}scrollGallery(){const s=document.querySelector("li>a>img").getBoundingClientRect();scrollBy({top:s.height*2,behavior:"smooth"})}toggleLoadingMsg(){document.querySelector(a(this,y)).classList.toggle(a(this,l))}showErrorMsg(e="Sorry, there are no images matching your search query. Please, try again!"){v.show({class:"error-msg",message:e,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e3,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}m=new WeakMap,f=new WeakMap,y=new WeakMap,L=new WeakMap,l=new WeakMap;var n;class I{constructor(){g(this,n);h(this,n,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:0})}get page(){return a(this,n).page}get per_page(){return a(this,n).per_page}async searchImg(e=""){return e&&(a(this,n).q=e,a(this,n).page=0),a(this,n).page+=1,await B.get("https://pixabay.com/api/",{params:a(this,n)})}}n=new WeakMap;const c=new E,p=new I,M=document.querySelector(".form-search");M.addEventListener("submit",t=>{t.preventDefault();const e=M.elements.search_string.value.trim();if(!e){c.showErrorMsg("Empty field!");return}c.toggleLoadingMsg(),p.searchImg(e).then(s=>{c.toggleLoadingMsg(),c.showGalery(s.data,p.page,p.per_page)})});const x=document.querySelector('button[type="button"]');x.addEventListener("click",q);function q(){c.toggleLoadingMsg(),p.searchImg().then(t=>{c.toggleLoadingMsg(),c.showGalery(t.data,p.page,p.per_page),c.scrollGallery()})}
//# sourceMappingURL=index.js.map
