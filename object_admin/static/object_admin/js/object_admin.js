document.addEventListener("DOMContentLoaded", function() {

  var el = document.querySelector('.django-object-admin__trigger');
  if (el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var nav = document.querySelector('.django-object-admin__nav');
      toggleClass(nav, 'django-object-admin__nav--active');
    }, false);
  }

  function toggleClass(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }
  }

}, false);
