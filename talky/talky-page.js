(function(){
var here=(function(){try{var s=document.currentScript;if(s&&s.src)return s.src.replace(/[^\/]*$/,'')}catch(e){}return ''})();
function view(){try{return (new URLSearchParams(location.search).get('p')||'').toLowerCase()}catch(e){return ''}}
var p=view();
function load(src){var s=document.createElement('script');s.src=src;s.async=true;document.head.appendChild(s)}
setInterval(function(){if(view()!==p)location.reload()},500);
document.addEventListener('click',function(e){if(!p)return;var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;var u;try{u=new URL(a.getAttribute('href'),location.href)}catch(x){return}
var same=function(t){return t.replace(/\/+$/,'')};
if(u.origin===location.origin&&same(u.pathname)===same(location.pathname)&&!u.searchParams.get('p')&&!u.hash){e.preventDefault();e.stopPropagation();location.assign(u.pathname)}},true);
if(p==='talky'){load(here+'talky-element.js');return}
var V=p==='hearby'?{tag:'hearby-page',src:here+'../hearby/hearby-page.js',title:'Hearby　開會前按一下，結束就有一份紀錄'}:p==='fully'?{tag:'fully-page',src:here+'../fully/fully-page.js',title:'Fully　貼上網址，存下原尺寸'}:{tag:'made-index',src:here+'../made/made-index.js',title:'INTENTION Made'};
window.MADE_LINKS={talky:'/made?p=talky',hearby:'/made?p=hearby',fully:'/made?p=fully'};
function mount(host){if(host.__routed)return;host.__routed=1;host.style.display='block';host.style.width='100%';
host.appendChild(document.createElement(V.tag));
host.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="?p="]');if(a){e.preventDefault();location.assign(a.getAttribute('href'))}})}
if(window.customElements&&!customElements.get('talky-page')){customElements.define('talky-page',class extends HTMLElement{connectedCallback(){mount(this)}})}
else{Array.prototype.forEach.call(document.querySelectorAll('talky-page'),mount)}
load(V.src);
try{document.title=V.title+' | INTENTION'}catch(e){}
})();
