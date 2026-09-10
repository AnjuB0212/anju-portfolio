const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max?d.scrollTop/max*100:0)+"%"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menuToggle=document.querySelector(".menu-toggle");
const siteNav=document.getElementById("site-nav");
menuToggle?.addEventListener("click",()=>{const open=siteNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open);menuToggle.textContent=open?"Close":"Menu"});
siteNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{siteNav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");if(menuToggle)menuToggle.textContent="Menu"}));
