const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max?d.scrollTop/max*100:0)+"%"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menuToggle=document.querySelector(".menu-toggle");
const siteNav=document.getElementById("site-nav");
function closeMenu(){siteNav.classList.remove("open");menuToggle?.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false")}
function openMenu(){siteNav.classList.add("open");menuToggle?.classList.add("open");menuToggle?.setAttribute("aria-expanded","true")}
menuToggle?.addEventListener("click",()=>{siteNav.classList.contains("open")?closeMenu():openMenu()});
siteNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("click",(e)=>{if(siteNav.classList.contains("open")&&!siteNav.contains(e.target)&&!menuToggle.contains(e.target))closeMenu()});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape")closeMenu()});
