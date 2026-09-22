const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.08});
document.querySelectorAll('.section,.expertise-card,.timeline-item,.credential,.article-card').forEach(el=>{
  el.style.opacity='0'; el.style.transform='translateY(16px)'; el.style.transition='opacity .65s ease, transform .65s ease';
  io.observe(el);
});
const style=document.createElement('style');
style.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
