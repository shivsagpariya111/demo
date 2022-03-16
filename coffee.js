$(document).ready(function() {
	$('.navbar-toggler-icon').click(function(){
		$('.navbar-menu').slideToggle();
	})
});

var navbar = document.querySelector('#nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}