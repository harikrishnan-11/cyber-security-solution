
/* ─── NAV SCROLL ──────────────────────────────────────────── */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
});

/* ─── HAMBURGER ───────────────────────────────────────────── */
const hamburger=document.getElementById('hamburger'),mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('open');
  const isOpen=hamburger.classList.contains('open');
  mobileMenu.classList.toggle('open',isOpen);
  mobileMenu.style.display=isOpen?'flex':'none';
});
document.querySelectorAll('.menu-link,.mobile-menu .btn').forEach(l=>{
  l.addEventListener('click',()=>{
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenu.style.display='none';
  });
});