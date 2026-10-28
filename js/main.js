(function(){
function all(s){return Array.prototype.slice.call(document.querySelectorAll(s));}
try{var t=document.querySelector('.nav-toggle'),l=document.querySelector('.nav-links');if(t&&l)t.addEventListener('click',function(){l.classList.toggle('open');});}catch(e){}
try{
 all('.reveal').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<(innerHeight||800)+100)el.classList.add('in');});
 document.documentElement.classList.add('js');
 if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -40px 0px'});all('.reveal:not(.in)').forEach(function(el){io.observe(el);});}
 setTimeout(function(){all('.reveal').forEach(function(el){el.classList.add('in');});},1500);
}catch(e){all('.reveal').forEach(function(el){el.classList.add('in');});}
try{
 var items=all('.gallery a');if(!items.length)return;
 all('.filters button').forEach(function(b){b.addEventListener('click',function(){all('.filters button').forEach(function(x){x.classList.remove('active');});b.classList.add('active');var f=b.getAttribute('data-filter');items.forEach(function(a){a.classList.toggle('hide',f!=='all'&&a.getAttribute('data-cat')!==f);});});});
 var lb=document.querySelector('.lightbox'),img=lb.querySelector('img'),cur=0;
 function vis(){return items.filter(function(a){return !a.classList.contains('hide');});}
 function show(i){var v=vis();cur=(i+v.length)%v.length;img.src=v[cur].getAttribute('href');img.alt=v[cur].querySelector('img').alt;}
 items.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();show(vis().indexOf(a));lb.classList.add('open');});});
 lb.querySelector('.lb-close').onclick=function(){lb.classList.remove('open');};
 lb.querySelector('.lb-prev').onclick=function(e){e.stopPropagation();show(cur-1);};
 lb.querySelector('.lb-next').onclick=function(e){e.stopPropagation();show(cur+1);};
 lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open');});
 document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
 var sx=null;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});lb.addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)show(cur+(d<0?1:-1));sx=null;},{passive:true});
}catch(e){}
})();
