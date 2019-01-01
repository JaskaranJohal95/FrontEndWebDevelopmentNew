document.getElementById("scroll-down-intro").addEventListener("click", scrollDown);

function scrollDown(event) {
  window.scrollBy({
  top: 910,
  left: 0,
  behavior: 'smooth'
});
}
