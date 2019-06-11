$(window).on('load', (function() {
  $('.preloader').fadeOut(3000);
}));

$('.openFilePanel').click(function(event) {
    if ($('.message').hasClass('message_closed')) {
      $('.message').removeClass('message_closed').addClass('message_opened').css('display', 'flex');
      
        navLink.classList.remove("nav-link_white");
        navLinkSecond.classList.remove("nav-link_white");
        langLinkFirst.classList.remove("lang-link_whiteActive");
        langLinkSecond.classList.remove("lang-link_white");
        langLinkThird.classList.remove("lang-link_white");
        
        navLink.classList.add("nav-link_black");
        navLinkSecond.classList.add("nav-link_black");
        langLinkFirst.classList.add("lang-link_blackActive");
        langLinkSecond.classList.add("lang-link_black");
        langLinkThird.classList.add("lang-link_black");
  
        mailIcon.src="./img/fixed/mail-icon_black.svg";
        scrollUp.src="./img/fixed/scroll-up_black.svg";
        scrollDown.src="./img/fixed/scroll-down_black.svg";
  
        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg_black.svg')";
  
        navSideList.style.display = "none";

        headerLogo.src = "./img/none.png";
        if(window.location.hash == "#contacts") {
          scrollDown.src="./img/none.png";
        } else;

        for(let i = 0; i < numbersLink.length; i++) {
          numbersLink[i].style.color = "#000000";
          numbersLink[i].style.background = "none";
        }
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
        navLinkSecond.classList.remove("nav-link_black");
        langLinkFirst.classList.remove("lang-link_blackActive");
        langLinkSecond.classList.remove("lang-link_black");
        langLinkThird.classList.remove("lang-link_black");

        mailIcon.src="./img/fixed/mail-icon.svg";
        scrollUp.src = "./img/none.png";
        scrollDown.src="./img/fixed/scroll-down.svg";

        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg.svg')";

        navLink.classList.remove("nav-link_white");
        navLinkSecond.classList.remove("nav-link_white");
        headerLogo.src = "./img/none.png";
      } else {
        scrollDown.src="./img/none.png";
        headerLogo.src = "./img/fixed/header-logo.svg";
      }
        
      navSideList.style.display = "block";

      for(let i = 0; i < numbersLink.length; i++) {
        numbersLink[i].style.color = "#434343";
        numbersLink[i].style.background = "#FFFFFF";
      }
    }
    event.preventDefault();
  });

  
  let prodItemFirst = document.getElementById("prod-1");
  let prodItemSecond = document.getElementById("prod-2");
  let prodItemThird = document.getElementById("prod-3");
  let prodItemFourth = document.getElementById("prod-4"); 
  let prodItemFifth = document.getElementById("prod-5");
  let prodItemSixth = document.getElementById("prod-6");

  let prodBtnFirst = document.getElementById("prod-btn-1");
  let prodBtnSecond = document.getElementById("prod-btn-2");
  let prodBtnThird = document.getElementById("prod-btn-3");
  let prodBtnFourth = document.getElementById("prod-btn-4"); 
  let prodBtnFifth = document.getElementById("prod-btn-5");
  let prodBtnSixth = document.getElementById("prod-btn-6");

  prodBtnFirst.addEventListener('click', () => {
    prodItemFirst.classList.remove('animated', 'zoomIn');
    prodItemFirst.classList.add('animated', 'zoomIn');
    prodItemFirst.addEventListener('animationend', function() {
      prodItemFirst.classList.remove('animated', 'zoomIn');
    })
  });

  prodBtnSecond.addEventListener('click', () => {
    prodItemSecond.classList.remove('animated', 'zoomIn');
    prodItemSecond.classList.add('animated', 'zoomIn');    
    prodItemSecond.addEventListener('animationend', function() {
      prodItemSecond.classList.remove('animated', 'zoomIn');
    })
  });

  prodBtnThird.addEventListener('click', () => {
    prodItemThird.classList.remove('animated', 'zoomIn');
    prodItemThird.classList.add('animated', 'zoomIn');    prodItemThird.addEventListener('animationend', function() {
      prodItemThird.classList.remove('animated', 'zoomIn');
    })
  });

  prodBtnFourth.addEventListener('click', () => {
    prodItemFourth.classList.remove('animated', 'zoomIn');
    prodItemFourth.classList.add('animated', 'zoomIn');    prodItemFourth.addEventListener('animationend', function() {
      prodItemFourth.classList.remove('animated', 'zoomIn');
    })
  });

  prodBtnFifth.addEventListener('click', () => {
    prodItemFifth.classList.remove('animated', 'zoomIn');
    prodItemFifth.classList.add('animated', 'zoomIn');    prodItemFifth.addEventListener('animationend', function() {
      prodItemFifth.classList.remove('animated', 'zoomIn');
    })
  });

  prodBtnSixth.addEventListener('click', () => {
    prodItemSixth.classList.remove('animated', 'zoomIn');
    prodItemSixth.classList.add('animated', 'zoomIn');    prodItemSixth.addEventListener('animationend', function() {
      prodItemSixth.classList.remove('animated', 'zoomIn');
    })
  });



  let gofrBtnFirst = document.getElementById("gofr-btn-1");
  let gofrBtnSecond = document.getElementById("gofr-btn-2");
  let gofrBtnThird = document.getElementById("gofr-btn-3");
  let gofrBtnFourth = document.getElementById("gofr-btn-4"); 

  let gofrImageFirst = document.getElementById("gofr-img-1");
  let gofrImageSecond = document.getElementById("gofr-img-2");
  let gofrImageThird = document.getElementById("gofr-img-3");
  let gofrImageFourth = document.getElementById("gofr-img-4"); 

  let gofrTitleFirst = document.getElementById("gofr-title-1");
  let gofrTitleSecond = document.getElementById("gofr-title-2");
  let gofrTitleThird = document.getElementById("gofr-title-3");
  let gofrTitleFourth = document.getElementById("gofr-title-4"); 

  let gofrTextFirst = document.getElementById("gofr-text-1");
  let gofrTextSecond = document.getElementById("gofr-text-2");
  let gofrTextThird = document.getElementById("gofr-text-3");
  let gofrTextFourth = document.getElementById("gofr-text-4"); 


  gofrBtnFirst.addEventListener('click', () => {
    gofrImageFirst.classList.remove('animated', 'zoomIn');
    gofrImageFirst.classList.add('animated', 'zoomIn');
    gofrTitleFirst.classList.remove('animated', 'zoomIn');
    gofrTitleFirst.classList.add('animated', 'zoomIn');
    gofrTextFirst.classList.remove('animated', 'zoomIn');
    gofrTextFirst.classList.add('animated', 'zoomIn');   

    gofrImageFirst.addEventListener('animationend', function() {
      gofrImageFirst.classList.remove('animated', 'zoomIn');
    })
    gofrTitleFirst.addEventListener('animationend', function() {
      gofrTitleFirst.classList.remove('animated', 'zoomIn');
    })
    gofrTextFirst.addEventListener('animationend', function() {
      gofrTextFirst.classList.remove('animated', 'zoomIn');
    })
  });

  gofrBtnSecond.addEventListener('click', () => {
    gofrImageSecond.classList.remove('animated', 'zoomIn');
    gofrImageSecond.classList.add('animated', 'zoomIn');
    gofrTitleSecond.classList.remove('animated', 'zoomIn');
    gofrTitleSecond.classList.add('animated', 'zoomIn');
    gofrTextSecond.classList.remove('animated', 'zoomIn');
    gofrTextSecond.classList.add('animated', 'zoomIn');
    
    gofrImageSecond.addEventListener('animationend', function() {
      gofrImageSecond.classList.remove('animated', 'zoomIn');
    })
    gofrTitleSecond.addEventListener('animationend', function() {
      gofrTitleSecond.classList.remove('animated', 'zoomIn');
    })
    gofrTextSecond.addEventListener('animationend', function() {
      gofrTextSecond.classList.remove('animated', 'zoomIn');
    })
  });

  gofrBtnThird.addEventListener('click', () => {
    gofrImageThird.classList.remove('animated', 'zoomIn');
    gofrImageThird.classList.add('animated', 'zoomIn');
    gofrTitleThird.classList.remove('animated', 'zoomIn');
    gofrTitleThird.classList.add('animated', 'zoomIn');
    gofrTextThird.classList.remove('animated', 'zoomIn');
    gofrTextThird.classList.add('animated', 'zoomIn');

    gofrImageThird.addEventListener('animationend', function() {
      gofrImageThird.classList.remove('animated', 'zoomIn');
    })
    gofrTitleThird.addEventListener('animationend', function() {
      gofrTitleThird.classList.remove('animated', 'zoomIn');
    })
    gofrTextThird.addEventListener('animationend', function() {
      gofrTextThird.classList.remove('animated', 'zoomIn');
    })
  });

  gofrBtnFourth.addEventListener('click', () => {
    gofrImageFourth.classList.remove('animated', 'zoomIn');
    gofrImageFourth.classList.add('animated', 'zoomIn');
    gofrTitleFourth.classList.remove('animated', 'zoomIn');
    gofrTitleFourth.classList.add('animated', 'zoomIn');
    gofrTextFourth.classList.remove('animated', 'zoomIn');
    gofrTextFourth.classList.add('animated', 'zoomIn');

    gofrImageFourth.addEventListener('animationend', function() {
      gofrImageFourth.classList.remove('animated', 'zoomIn');
    })
    gofrTitleFourth.addEventListener('animationend', function() {
      gofrTitleFourth.classList.remove('animated', 'zoomIn');
    })
    gofrTextFourth.addEventListener('animationend', function() {
      gofrTextFourth.classList.remove('animated', 'zoomIn');
    })
  });






  let packBtnFirst = document.getElementById("pack-btn-1");
  let packBtnSecond = document.getElementById("pack-btn-2");
  let packBtnThird = document.getElementById("pack-btn-3");

  let packImageFirst = document.getElementById("pack-img-1");
  let packImageSecond = document.getElementById("pack-img-2");
  let packImageThird = document.getElementById("pack-img-3");

  let packTitleFirst = document.getElementById("pack-title-1");
  let packTitleSecond = document.getElementById("pack-title-2");
  let packTitleThird = document.getElementById("pack-title-3");

  let packTextFirst = document.getElementById("pack-text-1");
  let packTextSecond = document.getElementById("pack-text-2");
  let packTextThird = document.getElementById("pack-text-3");


  packBtnFirst.addEventListener('click', () => {
    packImageFirst.classList.remove('animated', 'zoomIn');
    packImageFirst.classList.add('animated', 'zoomIn');
    packTitleFirst.classList.remove('animated', 'zoomIn');
    packTitleFirst.classList.add('animated', 'zoomIn');
    packTextFirst.classList.remove('animated', 'zoomIn');
    packTextFirst.classList.add('animated', 'zoomIn');   

    packImageFirst.addEventListener('animationend', function() {
      packImageFirst.classList.remove('animated', 'zoomIn');
    })
    packTitleFirst.addEventListener('animationend', function() {
      packTitleFirst.classList.remove('animated', 'zoomIn');
    })
    packTextFirst.addEventListener('animationend', function() {
      packTextFirst.classList.remove('animated', 'zoomIn');
    })
  });

  packBtnSecond.addEventListener('click', () => {
    packImageSecond.classList.remove('animated', 'zoomIn');
    packImageSecond.classList.add('animated', 'zoomIn');
    packTitleSecond.classList.remove('animated', 'zoomIn');
    packTitleSecond.classList.add('animated', 'zoomIn');
    packTextSecond.classList.remove('animated', 'zoomIn');
    packTextSecond.classList.add('animated', 'zoomIn');
    
    packImageSecond.addEventListener('animationend', function() {
      packImageSecond.classList.remove('animated', 'zoomIn');
    })
    packTitleSecond.addEventListener('animationend', function() {
      packTitleSecond.classList.remove('animated', 'zoomIn');
    })
    packTextSecond.addEventListener('animationend', function() {
      packTextSecond.classList.remove('animated', 'zoomIn');
    })
  });

  packBtnThird.addEventListener('click', () => {
    packImageThird.classList.remove('animated', 'zoomIn');
    packImageThird.classList.add('animated', 'zoomIn');
    packTitleThird.classList.remove('animated', 'zoomIn');
    packTitleThird.classList.add('animated', 'zoomIn');
    packTextThird.classList.remove('animated', 'zoomIn');
    packTextThird.classList.add('animated', 'zoomIn');

    packImageThird.addEventListener('animationend', function() {
      packImageThird.classList.remove('animated', 'zoomIn');
    })
    packTitleThird.addEventListener('animationend', function() {
      packTitleThird.classList.remove('animated', 'zoomIn');
    })
    packTextThird.addEventListener('animationend', function() {
      packTextThird.classList.remove('animated', 'zoomIn');
    })
  });







  

  let materialsBtnFirst = document.getElementById("materials-btn-1");
  let materialsBtnSecond = document.getElementById("materials-btn-2");
  let materialsBtnThird = document.getElementById("materials-btn-3");

  let materialsImageFirst = document.getElementById("materials-img-1");
  let materialsImageSecond = document.getElementById("materials-img-2");
  let materialsImageThird = document.getElementById("materials-img-3");

  let materialsTitleFirst = document.getElementById("materials-title-1");
  let materialsTitleSecond = document.getElementById("materials-title-2");
  let materialsTitleThird = document.getElementById("materials-title-3");

  let materialsTextFirst = document.getElementById("materials-text-1");
  let materialsTextSecond = document.getElementById("materials-text-2");
  let materialsTextThird = document.getElementById("materials-text-3");

  let materialsDescSecond = document.getElementById("materials-desc-2");
  let materialsSubTextSecond = document.getElementById("materials-subText-2");

  let materialsDescThird = document.getElementById("materials-desc-3");

  materialsBtnFirst.addEventListener('click', () => {
    materialsImageFirst.classList.remove('animated', 'zoomIn');
    materialsImageFirst.classList.add('animated', 'zoomIn');
    materialsTitleFirst.classList.remove('animated', 'zoomIn');
    materialsTitleFirst.classList.add('animated', 'zoomIn');
    materialsTextFirst.classList.remove('animated', 'zoomIn');
    materialsTextFirst.classList.add('animated', 'zoomIn');   

    materialsImageFirst.addEventListener('animationend', function() {
      materialsImageFirst.classList.remove('animated', 'zoomIn');
    })
    materialsTitleFirst.addEventListener('animationend', function() {
      materialsTitleFirst.classList.remove('animated', 'zoomIn');
    })
    materialsTextFirst.addEventListener('animationend', function() {
      materialsTextFirst.classList.remove('animated', 'zoomIn');
    })
  });

  materialsBtnSecond.addEventListener('click', () => {
    materialsImageSecond.classList.remove('animated', 'zoomIn');
    materialsImageSecond.classList.add('animated', 'zoomIn');
    materialsTitleSecond.classList.remove('animated', 'zoomIn');
    materialsTitleSecond.classList.add('animated', 'zoomIn');
    materialsTextSecond.classList.remove('animated', 'zoomIn');
    materialsTextSecond.classList.add('animated', 'zoomIn');
    materialsDescSecond.classList.remove('animated', 'zoomIn');
    materialsDescSecond.classList.add('animated', 'zoomIn');
    materialsSubTextSecond.classList.remove('animated', 'zoomIn');
    materialsSubTextSecond.classList.add('animated', 'zoomIn');
    
    materialsImageSecond.addEventListener('animationend', function() {
      materialsImageSecond.classList.remove('animated', 'zoomIn');
    })
    materialsTitleSecond.addEventListener('animationend', function() {
      materialsTitleSecond.classList.remove('animated', 'zoomIn');
    })
    materialsTextSecond.addEventListener('animationend', function() {
      materialsTextSecond.classList.remove('animated', 'zoomIn');
    })
    materialsDescSecond.addEventListener('animationend', function() {
      materialsDescSecond.classList.remove('animated', 'zoomIn');
    })
    materialsSubTextSecond.addEventListener('animationend', function() {
      materialsSubTextSecond.classList.remove('animated', 'zoomIn');
    })
  });

  materialsBtnThird.addEventListener('click', () => {
    materialsImageThird.classList.remove('animated', 'zoomIn');
    materialsImageThird.classList.add('animated', 'zoomIn');
    materialsTitleThird.classList.remove('animated', 'zoomIn');
    materialsTitleThird.classList.add('animated', 'zoomIn');
    materialsTextThird.classList.remove('animated', 'zoomIn');
    materialsTextThird.classList.add('animated', 'zoomIn');
    materialsDescThird.classList.remove('animated', 'zoomIn');
    materialsDescThird.classList.add('animated', 'zoomIn');

    materialsImageThird.addEventListener('animationend', function() {
      materialsImageThird.classList.remove('animated', 'zoomIn');
    })
    materialsTitleThird.addEventListener('animationend', function() {
      materialsTitleThird.classList.remove('animated', 'zoomIn');
    })
    materialsTextThird.addEventListener('animationend', function() {
      materialsTextThird.classList.remove('animated', 'zoomIn');
    })
    materialsDescThird.addEventListener('animationend', function() {
      materialsDescThird.classList.remove('animated', 'zoomIn');
    })
  });