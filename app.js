function fixScrollbarWidth() {
  var element = document.getElementById(':4');
  if (element) {
    element.style.width = element.offsetWidth - 14 + 'px';
  }
}

window.onload = function(event) {
  fixScrollbarWidth();
}

