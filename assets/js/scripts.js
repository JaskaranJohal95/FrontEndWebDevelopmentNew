const el = document.getElementById("scroll-down-intro");

if(el){
  el.addEventListener('click', scrollDown, false);
}


function scrollDown(event) {
  window.scrollBy({
  top: 910,
  left: 0,
  behavior: 'smooth'
});
}
