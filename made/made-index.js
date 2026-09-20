(function(){
var CSS=":where(.mi) :is(h1,h2,h3,h4,p,li,a,summary,button,span,div,section,footer,header){font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;color:inherit;letter-spacing:inherit;text-transform:none;text-decoration:none;text-shadow:none;text-align:inherit}:where(.mi) b{font-family:inherit;color:inherit;text-transform:none;text-decoration:none;text-shadow:none}:where(.mi) :is(img,video){border:0;outline:0;box-shadow:none;border-radius:0;max-height:none}:where(.mi) :is(ul,ol,li){list-style:none}:where(.mi) button{border:0;background:none}.mi{--mat:#EEEFF2;--stage:#E7E8EC;--ink:#282A2F;--mid:#73767E;--soft:#A2A5AD;--blue:#003CFF;--up:-3px -3px 6px rgba(255,255,255,.9),5px 5px 12px rgba(163,166,175,.45);--up2:-10px -10px 22px rgba(255,255,255,.95),16px 18px 34px rgba(163,166,175,.5);--down:inset 3px 3px 8px rgba(163,166,175,.45),inset -3px -3px 8px rgba(255,255,255,.95);--M:clamp(24px,5vw,96px);--G:max(var(--M),calc((100vw - 1480px)/2));--en:\"Helvetica Neue\",Helvetica,Arial,sans-serif;--zh:\"Noto Sans TC\",\"PingFang TC\",sans-serif;background:var(--mat);color:var(--ink);font:500 16px/1.75 var(--zh);-webkit-font-smoothing:antialiased;overflow-x:hidden}.mi *{box-sizing:border-box;margin:0;padding:0}.mi img{display:block;max-width:100%}.mi a{color:inherit;text-decoration:none}.mi button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}.micro{font:700 11.5px/1.4 var(--en);letter-spacing:.05em;text-transform:uppercase;color:var(--mid)}.stagewrap{min-height:100svh;display:flex;flex-direction:column;padding:clamp(92px,7.4vw,128px) var(--G) clamp(24px,2.4vw,40px)}.hd{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap}.lock{display:flex;align-items:center;gap:clamp(18px,2vw,36px)}.mark{flex:0 0 auto;width:clamp(120px,12.4vw,210px);aspect-ratio:1/1;margin:-1vw -.4vw -1vw -1.15vw}.mark video{width:100%;height:100%;display:block;mix-blend-mode:multiply}.hd h1{font:700 clamp(34px,4.6vw,88px)/1 var(--en);letter-spacing:-.035em;margin-top:.24em;white-space:nowrap}.hd h1 .iw{display:inline-block;height:.716em;width:auto;vertical-align:baseline;margin-right:.2em}.hd .zh{font:500 clamp(15px,1.15vw,19px)/1.8 var(--zh);margin-top:.9em;max-width:24em}.seg{position:relative;display:inline-flex;padding:4px;border-radius:999px;box-shadow:var(--down)}.seg .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:0;border-radius:999px;background:var(--mat);box-shadow:var(--up);transition:transform .34s cubic-bezier(.2,.9,.25,1),width .34s cubic-bezier(.2,.9,.25,1)}.seg button{position:relative;z-index:1;padding:10px 24px;font:700 13px var(--en);letter-spacing:.02em;color:var(--mid);border-radius:999px}.seg button[aria-pressed=true]{color:var(--ink)}.seg button[disabled]{color:var(--soft);cursor:default}.seg sup{font:700 8.5px var(--en);letter-spacing:.08em;margin-left:5px}.shelf{flex:1;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:clamp(28px,3.4vw,64px);align-content:center;margin:clamp(36px,3.6vw,64px) 0}@media (min-width:1100px){.shelf{grid-template-columns:repeat(3,minmax(0,1fr))}}.item{display:flex;flex-direction:column;min-width:0}.pad{position:relative;aspect-ratio:5/4;border-radius:18px;box-shadow:var(--down);display:flex;align-items:center;justify-content:center;perspective:1100px;overflow:hidden;transition:box-shadow .34s ease}.pad .n{position:absolute;left:22px;top:20px}.pad .os{position:absolute;right:22px;top:20px}.shadow{position:absolute;left:50%;top:50%;width:calc(var(--s)*.78);height:calc(var(--s)*.2);margin:calc(var(--s)*.52) 0 0 calc(var(--s)*-.39);border-radius:50%;background:rgba(80,84,96,.42);filter:blur(16px);will-change:transform,opacity}.ico{position:relative;width:var(--s);aspect-ratio:1/1;transform-style:preserve-3d;will-change:transform}.pad{--s:clamp(112px,11.4vw,208px)}.item.empty{pointer-events:none}.item.empty .pad{box-shadow:var(--down);opacity:.75}.item.empty .soon{font:700 clamp(17px,1.45vw,24px)/1.2 var(--en);letter-spacing:-.015em;color:var(--soft);padding:clamp(18px,1.8vw,28px) 4px 0;margin-top:calc(clamp(24px,2.2vw,36px) + 10px)}.ico i,.ico b{position:absolute;inset:0;display:block;-webkit-mask:var(--m) center/100% 100% no-repeat;mask:var(--m) center/100% 100% no-repeat;backface-visibility:hidden}.ico .face{position:absolute;inset:0;background:var(--f) center/100% 100% no-repeat}.ico .sheen{position:absolute;inset:0;-webkit-mask:var(--m) center/100% 100% no-repeat;mask:var(--m) center/100% 100% no-repeat;background:linear-gradient(112deg,rgba(255,255,255,0) 32%,rgba(255,255,255,.34) 47%,rgba(255,255,255,0) 60%) 50% 0/260% 100% no-repeat}.meta{display:grid;grid-template-columns:1fr auto;gap:6px 20px;align-items:end;padding:clamp(18px,1.8vw,28px) 4px 0}.meta .wm{height:clamp(24px,2.2vw,36px);width:auto}.meta .line{grid-column:1;font:700 clamp(17px,1.45vw,24px)/1.2 var(--en);letter-spacing:-.015em;margin-top:10px}.meta .zh{grid-column:1;font:500 clamp(15px,1.05vw,17px)/1.7 var(--zh);color:var(--ink);margin-top:4px}.meta .tags{grid-column:1;font:500 clamp(13px,.9vw,14.5px)/1.7 var(--zh);color:var(--mid)}.key{grid-column:2;grid-row:1/5;align-self:end;display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 26px;border-radius:999px;background:var(--mat);box-shadow:var(--up);font:700 14px var(--en);transition:background-color .2s ease,box-shadow .14s ease-out,transform .14s ease-out}.item:active .key{box-shadow:var(--down);transform:translateY(1px)}@media (hover:hover){.item:hover .key{background:#E2E4E9}}.foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:22px;border-top:1px solid rgba(163,166,175,.45)}@media (max-width:699px){.stagewrap{padding-top:96px}.hd{flex-direction:column;align-items:flex-start}.pad{--s:37vw;aspect-ratio:1/1}.lock{flex-direction:column;align-items:flex-start;gap:6px}.mark{width:96px;margin-left:-8px}.item.empty{display:none}.seg button{min-height:44px}}@media (prefers-reduced-motion:reduce){.ico,.shadow{transition:none}}";
var HTML="<div class=\"mi\">\n<section class=\"stagewrap\">\n<header class=\"hd\">\n<div class=\"lock\">\n<div class=\"mark\"><video muted loop playsinline autoplay preload=\"auto\" poster=\"@@A:intention_mark_metal_poster.jpg@@\" src=\"@@A:intention_mark_metal_spin.mp4@@\"></video></div>\n<div>\n<p class=\"micro\">INTENTION Made</p>\n<h1><img class=\"iw\" src=\"@@A:intention_wordmark_black.png@@\" alt=\"INTENTION\"><span>Made.</span></h1>\n<p class=\"zh\">一群創作者們每天都在用的東西</p>\n</div>\n</div>\n<div class=\"seg\" id=\"cat\"><span class=\"thumb\"></span><button aria-pressed=\"true\" data-k=\"apps\">Apps</button><button disabled data-k=\"goods\">Goods<sup>SOON</sup></button></div>\n</header>\n<div class=\"shelf\" id=\"shelf\"></div>\n<footer class=\"foot micro\"><span>INTENTION Made / 2026</span><span>Powered by INTENTION .</span></footer>\n</section>\n</div>";
var MAP={"hearby_body.png": "https://static.wixstatic.com/media/b5c7be_f738a157b5aa4ce6aba8e56530d64e12~mv2.png", "hearby_face.png": "https://static.wixstatic.com/media/b5c7be_2cd3be4c9f4e4c1bb5344c2922e1b69d~mv2.png", "hearby_glyph.png": "https://static.wixstatic.com/media/b5c7be_bc3ce1789bae4ef7bb320faab5c7fe4d~mv2.png", "hearby_logotype_black.png": "https://static.wixstatic.com/media/b5c7be_9e55e2814f4c476f8b2042df40d9ae5d~mv2.png", "intention_mark_metal_poster.jpg": "https://static.wixstatic.com/media/b5c7be_cad80ff625e2442da85737736045a2c6~mv2.jpg", "intention_mark_metal_spin.mp4": "https://video.wixstatic.com/video/b5c7be_39dc16d540cf493591f6efe5bfb64617/file", "intention_wordmark_black.png": "https://static.wixstatic.com/media/b5c7be_b45542e4088c4faebb222148c309df93~mv2.png", "talky_body.png": "https://static.wixstatic.com/media/b5c7be_07fe14fed4d1405b9f15e778e3b843a2~mv2.png", "talky_face.png": "https://static.wixstatic.com/media/b5c7be_9f9d93bdce2e4ae9b829c990f635386c~mv2.png", "talky_glyph.png": "https://static.wixstatic.com/media/b5c7be_e310209c989b4f03bcec5bef32112ba7~mv2.png", "talky_logotype_black.png": "https://static.wixstatic.com/media/b5c7be_c1e68375234a40f0828e0f3094746f0a~mv2.png"};
var DEF={base:"",dmg:"__DMG_URL__",repo:"__REPO_URL__"};
var FONT="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap";
var scriptBase=(function(){try{var s=document.currentScript;if(s&&s.src)return s.src.replace(/[^\/]*$/,'')+'assets/';}catch(e){}return '';})();
function init(host,A){
var $=function(s,r){return (r||host).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||host).querySelectorAll(s))};

var L=window.MADE_LINKS||{};
var ITEMS=[
{id:'talky',body:'talky_body.png',face:'talky_face.png',mark:'talky_glyph.png',cat:'apps',href:'/talky',os:'macOS',wm:'talky_logotype_black.png',alt:'talky',line:"Don't type, just Talky",zh:'最穩的語音輸入法',tags:'完全離線、支援翻譯',side:[38,40,46],glyph:[255,255,255]},
{id:'hearby',body:'hearby_body.png',face:'hearby_face.png',mark:'hearby_glyph.png',cat:'apps',href:'/hearby',os:'macOS',wm:'hearby_logotype_black.png',alt:'hearby',line:"Don't take notes. Noted.",zh:'可以回流的會議紀錄軟體',tags:'錄音不出電腦、下次還記得',side:[0,44,190],glyph:[255,255,255]}
];
var BODY=14,GLYPH=6;
function icon(it){
var ico=document.createElement('div');ico.className='ico';
var h='';
for(var i=0;i<BODY;i++){var k=i/(BODY-1),c=it.side.map(function(v){return Math.round(v*(.62+.38*k))});
h+='<i data-z="'+(k-.5)+'" style="--m:url('+A(it.body)+');background:rgb('+c.join(',')+')"></i>'}
h+='<span class="face" data-z=".5" style="--f:url('+A(it.face)+')"></span>';
for(var j=1;j<=GLYPH;j++){var g=j/GLYPH,d=it.glyph.map(function(v){return Math.round(v*(.8+.2*g))});
h+='<b data-g="'+g+'" style="--m:url('+A(it.mark)+');background:rgb('+d.join(',')+')"></b>'}
h+='<span class="sheen" data-z=".5" style="--m:url('+A(it.body)+')"></span>';
ico.innerHTML=h;return ico}
var shelf=$('#shelf'),live=[];
ITEMS.forEach(function(it,n){
var a=document.createElement('a');a.className='item';a.href=L[it.id]||it.href;a.setAttribute('data-cat',it.cat);
a.innerHTML='<div class="pad"><span class="n micro">0'+(n+1)+'</span><span class="os micro">'+it.os+'</span><div class="shadow"></div></div>'+
'<div class="meta"><img class="wm" src="'+A(it.wm)+'" alt="'+it.alt+'"><p class="line">'+it.line+'</p><p class="zh">'+it.zh+'</p><p class="tags">'+it.tags+'</p><span class="key">Open</span></div>';
var pad=$('.pad',a),ico=icon(it);pad.appendChild(ico);shelf.appendChild(a);
live.push({el:a,pad:pad,ico:ico,sh:$('.shadow',a),sheen:$('.sheen',ico),ph:n*1.7,rx:8,ry:-18,fy:0,sc:1,tx:null,ty:null,over:false});
});
(function(){var e=document.createElement('div');e.className='item empty';e.setAttribute('data-cat','apps');e.innerHTML='<div class="pad"><span class="n micro">0'+(ITEMS.length+1)+'</span></div><p class="soon">Next one. Soon.</p>';shelf.appendChild(e)})();
function depth(){live.forEach(function(o){var s=o.ico.offsetWidth,T=s*.13,G=s*.045;
$$('[data-z]',o.ico).forEach(function(e){e.style.transform='translateZ('+(parseFloat(e.getAttribute('data-z'))*T).toFixed(2)+'px)'});
$$('[data-g]',o.ico).forEach(function(e){e.style.transform='translateZ('+(T/2+parseFloat(e.getAttribute('data-g'))*G).toFixed(2)+'px)'})})}
depth();addEventListener('resize',depth);
live.forEach(function(o){
o.el.addEventListener('pointermove',function(e){var r=o.pad.getBoundingClientRect();o.over=true;o.tx=((e.clientX-r.left)/r.width-.5)*2;o.ty=((e.clientY-r.top)/r.height-.5)*2});
o.el.addEventListener('pointerleave',function(){o.over=false});
});
var still=matchMedia('(prefers-reduced-motion:reduce)').matches,t0=performance.now(),raf;
function frame(now){var t=(now-t0)/1000;
live.forEach(function(o){
var ry=o.over?o.tx*30:-16+17*Math.sin(t*.55+o.ph),rx=o.over?-o.ty*22:9+4*Math.sin(t*.4+o.ph),fy=o.over?-10:7*Math.sin(t*.9+o.ph),sc=o.over?1.07:1;
if(still){ry=-18;rx=9;fy=0;sc=1}
o.ry+=(ry-o.ry)*.09;o.rx+=(rx-o.rx)*.09;o.fy+=(fy-o.fy)*.09;o.sc+=(sc-o.sc)*.09;
o.ico.style.transform='translateY('+o.fy.toFixed(2)+'px) scale('+o.sc.toFixed(3)+') rotateX('+o.rx.toFixed(2)+'deg) rotateY('+o.ry.toFixed(2)+'deg)';
o.sh.style.transform='translateX('+(-o.ry*.7).toFixed(1)+'px) scale('+(1+o.fy/90).toFixed(3)+')';o.sh.style.opacity=(.9+o.fy/60).toFixed(2);
o.sheen.style.backgroundPosition=(50-o.ry*1.6).toFixed(1)+'% 0'});
raf=requestAnimationFrame(frame)}
frame(t0);cancelAnimationFrame(raf);
new IntersectionObserver(function(es){es.forEach(function(e){cancelAnimationFrame(raf);if(e.isIntersecting)raf=requestAnimationFrame(frame)})},{threshold:.05}).observe(shelf);
document.addEventListener('visibilitychange',function(){cancelAnimationFrame(raf);if(!document.hidden){raf=requestAnimationFrame(frame);var v=$('.mark video');if(v){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){})}}});
(function(){var el=$('#cat'),th=$('.thumb',el);function place(){var b=$('button[aria-pressed=true]',el);if(!b)return;th.style.width=b.offsetWidth+'px';th.style.transform='translateX('+(b.offsetLeft-4)+'px)'}
el.addEventListener('click',function(e){var b=e.target.closest('button');if(!b||b.disabled)return;$$('button',el).forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});place();
$$('.item',shelf).forEach(function(i){i.style.display=i.getAttribute('data-cat')===b.getAttribute('data-k')?'':'none'})});
addEventListener('resize',place);place();setTimeout(place,300)})();
}
function mount(host){
if(host.__mounted)return;host.__mounted=1;
var inFrame=false;try{inFrame=(window.self!==window.top)}catch(e){inFrame=true}
if(inFrame&&!host.hasAttribute('force')){host.style.display='block';host.style.width='100%';host.innerHTML='<div style="height:720px;background:#EEEFF2;color:#282A2F;font:700 16px/1.6 Helvetica,Arial,sans-serif;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;box-sizing:border-box">made-index<br><span style="font-weight:400;color:#73767E">編輯器與預覽只顯示這塊占位，發布後的網站才顯示整頁</span></div>';return}
var base=host.getAttribute('assets-base')||DEF.base||scriptBase||'assets/';if(base.slice(-1)!=='/')base+='/';
var dmg=host.getAttribute('dmg-url')||DEF.dmg,repo=host.getAttribute('repo-url')||DEF.repo;
var A=function(n){return MAP[n]||base+n};
var fill=function(s){return s.replace(/@@A:([^@]+)@@/g,function(_,n){return A(n)}).split('@@DMG@@').join(dmg).split('@@REPO@@').join(repo)};
if(!document.querySelector('link[data-made-index-font]')){var l=document.createElement('link');l.rel='stylesheet';l.href=FONT;l.setAttribute('data-made-index-font','');document.head.appendChild(l)}
if(!document.getElementById('made-index-css')){var st=document.createElement('style');st.id='made-index-css';st.textContent=fill(CSS);document.head.appendChild(st)}
host.style.display='block';host.style.width='100%';
host.innerHTML=fill(HTML);
init(host,A);
}
if(window.customElements&&!customElements.get('made-index')){
class MadeIndex extends HTMLElement{connectedCallback(){mount(this)}}
customElements.define('made-index',MadeIndex);
}else{
var go=function(){Array.prototype.forEach.call(document.querySelectorAll('made-index'),mount)};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
}
})();
