$(window).on('load', (function() {
  $('.preloader').fadeOut(3000);
}));

$('.openFilePanel').click(function(event) {
    if ($('.message').hasClass('message_closed')) {
      $('.message').removeClass('message_closed').addClass('message_opened').css('display', 'flex');
      
        navLink.classList.remove("nav-link_white");
        langLinkFirst.classList.remove("lang-link_whiteActive");
        langLinkSecond.classList.remove("lang-link_white");
        langLinkThird.classList.remove("lang-link_white");
        
        navLink.classList.add("nav-link_black");
        langLinkFirst.classList.add("lang-link_blackActive");
        langLinkSecond.classList.add("lang-link_black");
        langLinkThird.classList.add("lang-link_black");
  
        mailIcon.src="./img/fixed/mail-icon_black.svg";
        scrollUp.src="./img/fixed/scroll-up_black.svg";
        scrollDown.src="./img/fixed/scroll-down_black.svg";
  
        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg_black.svg')";
  
        navSideList.style.display = "none";

        headerLogo.src = "./img/none.png";
    }
    event.preventDefault();
  });
  
  $('.closeFilePanel').click(function(event) {
    if ($('.message').hasClass('message_opened')) {
      $('.message').removeClass('message_opened').addClass('message_closed');
      
      if(window.location.hash == "#home") {

        langLinkFirst.classList.remove("lang-link_whiteActive");
        langLinkSecond.classList.remove("lang-link_white");
        langLinkThird.classList.remove("lang-link_white");
  
        navLink.classList.remove("nav-link_black");
        langLinkFirst.classList.remove("lang-link_blackActive");
        langLinkSecond.classList.remove("lang-link_black");
        langLinkThird.classList.remove("lang-link_black");

        mailIcon.src="./img/fixed/mail-icon.svg";
        scrollUp.src="./img/fixed/scroll-up.svg";
        scrollDown.src="./img/fixed/scroll-down.svg";

        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg.svg')";

        navLink.classList.remove("nav-link_white");
        headerLogo.src = "./img/none.png";
      } else {
        scrollDown.src="./img/none.png";
        headerLogo.src = "./img/fixed/header-logo.svg";
      }
        
      navSideList.style.display = "block";
    }
    event.preventDefault();
  });