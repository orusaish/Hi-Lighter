window.addEventListener('scroll', function(ev) {
  var d = document.documentElement.scrollTop;
  var subNav = document.getElementById('teams');
  /* adjust number for desired scroll trigger */
  if (d > 10) {
    subNav.classList.add('active')
    return;
  } else {
    subNav.classList.remove('active')
    return;
  }
});