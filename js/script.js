const page__hashList = ['#about','#contacts'];

let navLink = document.getElementById("nav-link");

let langLinkFirst = document.getElementById("lang-link-1");
let langLinkSecond = document.getElementById("lang-link-2");
let langLinkThird = document.getElementById("lang-link-3");

let mailIcon = document.getElementById("mail-icon");
let scrollUp = document.getElementById("scroll-up");
let scrollDown = document.getElementById("scroll-down");

let langBackgroundSource = document.querySelector(".lang-link_active");

let dynamicStyle = () => {
    if (window.location.hash == page__hashList[0]) {
        navLink.classList.add("nav-link_white");
        langLinkFirst.classList.add("lang-link_whiteActive");
        langLinkSecond.classList.add("lang-link_white");
        langLinkThird.classList.add("lang-link_white");

        mailIcon.src="./img/fixed/mail-icon_white.svg";
        scrollUp.src="./img/fixed/scroll-up_white.svg";
        scrollDown.src="./img/fixed/scroll-down_white.svg";
        console.log("ABOUT US");

        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg.svg')";

    } else if(window.location.hash == page__hashList[1]) {
        console.log("CONTACTS");
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
        scrollDown.src="";

        mailIcon.classList.remove("animateImages");
        mailIcon.classList.add("animateImages");

        langBackgroundSource.style.backgroundImage = "url('./img/fixed/lang-bg_black.svg')";

    } else {
        console.log("WRONG PAGE");
        navLink.classList.remove("nav-link_white");
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

    }
}

let scrollUpLink = document.getElementById("scroll-up-link");
let scrollDownLink = document.getElementById("scroll-down-link");

const pageIdList = ['#home', '#production', '#gofrotara', '#packages', '#materials', '#materials-2', '#about', '#partners', '#contacts'];

let scrollUpDown = () => {
    if (window.location.hash == pageIdList[0]) {
        scrollUpLink.setAttribute('href', "#home");
        scrollDownLink.setAttribute('href', "#production");

        console.log("homelink");
    } else if(window.location.hash == pageIdList[1]) {
        scrollUpLink.setAttribute('href', "#home");
        scrollDownLink.setAttribute('href', "#gofrotara");

    } else if(window.location.hash == pageIdList[2]) {
      scrollUpLink.setAttribute('href', "#production");
      scrollDownLink.setAttribute('href', "#packages"); 

    } else if(window.location.hash == pageIdList[3]) {
      scrollUpLink.setAttribute('href', "#gofrotara");
      scrollDownLink.setAttribute('href', "#materials"); 

    } else if(window.location.hash == pageIdList[4]) {
      scrollUpLink.setAttribute('href', "#packages");
      scrollDownLink.setAttribute('href', "#materials-2");

    } else if(window.location.hash == pageIdList[5]) {
      scrollUpLink.setAttribute('href', "#materials");
      scrollDownLink.setAttribute('href', "#about");

    } else if(window.location.hash == pageIdList[6]) {
      scrollUpLink.setAttribute('href', "#materials-2");
      scrollDownLink.setAttribute('href', "#partners");
      
    } else if(window.location.hash == pageIdList[7]) {
      scrollUpLink.setAttribute('href', "#about");
      scrollDownLink.setAttribute('href', "#contacts");

    } else if(window.location.hash == pageIdList[8]) {
      scrollUpLink.setAttribute('href', "#partners");
      scrollDownLink.setAttribute('href', "#");
    } else {
      scrollUpLink.setAttribute('href', "#");
      scrollDownLink.setAttribute('href', "#");
    }
}

let headerLogo = document.getElementById("header-logo");

let addLogo = () => {
    if(window.location.hash != pageIdList[0]) {
        headerLogo.src = "./img/fixed/header-logo.svg";
    } else {
        headerLogo.src = "";
    }
}

let navSideList = document.getElementById("nav-side-list");

let navSideSpan_01 = document.getElementById("nav-side_01");
let navSideSpan_02 = document.getElementById("nav-side_02");
let navSideSpan_03 = document.getElementById("nav-side_03");
let navSideSpan_04 = document.getElementById("nav-side_04");
let navSideSpan_05 = document.getElementById("nav-side_05");
let navSideSpan_06 = document.getElementById("nav-side_06");
let navSideSpan_07 = document.getElementById("nav-side_07");
let navSideSpan_08 = document.getElementById("nav-side_08");
let navSideSpan_09 = document.getElementById("nav-side_09");


let navSideItem_01  = document.getElementById("nav-side-item_01");
let navSideItem_02  = document.getElementById("nav-side-item_02");
let navSideItem_03  = document.getElementById("nav-side-item_03");
let navSideItem_04  = document.getElementById("nav-side-item_04");
let navSideItem_05  = document.getElementById("nav-side-item_05");
let navSideItem_06  = document.getElementById("nav-side-item_06");
let navSideItem_07  = document.getElementById("nav-side-item_07");
let navSideItem_08  = document.getElementById("nav-side-item_08");
let navSideItem_09  = document.getElementById("nav-side-item_09");


let navSideLink_01  = document.getElementById("nav-side-link-01");
let navSideLink_02  = document.getElementById("nav-side-link-02");
let navSideLink_03  = document.getElementById("nav-side-link-03");
let navSideLink_04  = document.getElementById("nav-side-link-04");
let navSideLink_05  = document.getElementById("nav-side-link-05");
let navSideLink_06  = document.getElementById("nav-side-link-06");
let navSideLink_07  = document.getElementById("nav-side-link-07");
let navSideLink_08  = document.getElementById("nav-side-link-08");
let navSideLink_09  = document.getElementById("nav-side-link-09");

let navSideShowActive = () => {
    if (window.location.hash == pageIdList[0]) {
      navSideSpan_01.classList.add("nav-side_active");

      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");



      navSideItem_01.classList.add("nav-side-item_active");

      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[1]) {
      navSideSpan_02.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_02.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[2]) {
      navSideSpan_03.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_03.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[3]) {
      navSideSpan_04.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_04.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[4]) {
      navSideSpan_05.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_05.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[5]) {
      navSideSpan_06.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_06.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[6]) {
      navSideSpan_07.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_07.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_07.classList.add("nav-side__link_black");

      navSideLink_01.classList.add("nav-side__link_white");
      navSideLink_02.classList.add("nav-side__link_white");
      navSideLink_03.classList.add("nav-side__link_white");
      navSideLink_04.classList.add("nav-side__link_white");
      navSideLink_05.classList.add("nav-side__link_white");
      navSideLink_06.classList.add("nav-side__link_white");
      navSideLink_08.classList.add("nav-side__link_white");
      navSideLink_09.classList.add("nav-side__link_white");
      
    } else if(window.location.hash == pageIdList[7]) {
      navSideSpan_08.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_09.classList.remove("nav-side_active");


      navSideItem_08.classList.add("nav-side-item_active");

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_09.classList.remove("nav-side-item_active");
      navSideItem_09.style.backgroundImage = "";

      navSideLink_01.classList.remove("nav-side__link_black");
      navSideLink_02.classList.remove("nav-side__link_black");
      navSideLink_03.classList.remove("nav-side__link_black");
      navSideLink_04.classList.remove("nav-side__link_black");
      navSideLink_05.classList.remove("nav-side__link_black");
      navSideLink_06.classList.remove("nav-side__link_black");
      navSideLink_07.classList.remove("nav-side__link_black");
      navSideLink_08.classList.remove("nav-side__link_black");
      navSideLink_09.classList.remove("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");

    } else if(window.location.hash == pageIdList[8]) {
      navSideSpan_09.classList.add("nav-side_active");

      navSideSpan_01.classList.remove("nav-side_active");
      navSideSpan_02.classList.remove("nav-side_active");
      navSideSpan_03.classList.remove("nav-side_active");
      navSideSpan_04.classList.remove("nav-side_active");
      navSideSpan_05.classList.remove("nav-side_active");
      navSideSpan_06.classList.remove("nav-side_active");
      navSideSpan_07.classList.remove("nav-side_active");
      navSideSpan_08.classList.remove("nav-side_active");


      navSideItem_09.classList.add("nav-side-item_active");

      navSideItem_09.style.backgroundImage = "url('./img/fixed/nav-side_bg_white.svg')";

      navSideItem_01.classList.remove("nav-side-item_active");
      navSideItem_02.classList.remove("nav-side-item_active");
      navSideItem_03.classList.remove("nav-side-item_active");
      navSideItem_04.classList.remove("nav-side-item_active");
      navSideItem_05.classList.remove("nav-side-item_active");
      navSideItem_06.classList.remove("nav-side-item_active");
      navSideItem_07.classList.remove("nav-side-item_active");
      navSideItem_08.classList.remove("nav-side-item_active");

      navSideLink_01.classList.add("nav-side__link_black");
      navSideLink_02.classList.add("nav-side__link_black");
      navSideLink_03.classList.add("nav-side__link_black");
      navSideLink_04.classList.add("nav-side__link_black");
      navSideLink_05.classList.add("nav-side__link_black");
      navSideLink_06.classList.add("nav-side__link_black");
      navSideLink_07.classList.add("nav-side__link_black");
      navSideLink_08.classList.add("nav-side__link_black");
      navSideLink_09.classList.add("nav-side__link_black");

      navSideLink_01.classList.remove("nav-side__link_white");
      navSideLink_02.classList.remove("nav-side__link_white");
      navSideLink_03.classList.remove("nav-side__link_white");
      navSideLink_04.classList.remove("nav-side__link_white");
      navSideLink_05.classList.remove("nav-side__link_white");
      navSideLink_06.classList.remove("nav-side__link_white");
      navSideLink_08.classList.remove("nav-side__link_white");
      navSideLink_09.classList.remove("nav-side__link_white");
    } else {
      scrollUpLink.setAttribute('href', "#");
      scrollDownLink.setAttribute('href', "#");

      navSideItem_09.style.backgroundImage = "";
    }
}

let homeClass = document.querySelector(".home");
let productionClass = document.querySelector(".production");
let gofrotaraClass = document.querySelector(".gofrotara");
let packagesClass = document.querySelector(".packages");
let materialsClass = document.querySelector(".materials");
let materials2Class = document.querySelector(".materials-2");
let aboutClass = document.querySelector(".about");
let partnersClass = document.querySelector(".partners");
let contactsClass = document.querySelector(".contacts");

let addAnimation = () => {
  if (window.location.hash == pageIdList[0]) {
    homeClass.classList.add("animated", "fadeInLeft", "delay-2s");
  } else if(window.location.hash == pageIdList[1]) {
    productionClass.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[2]) {
    gofrotaraClass.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[3]) {
    packagesClass.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[4]) {
    materialsClass.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[5]) {
    materials2Class.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[6]) {
    aboutClass.classList.add("animated", "fadeInLeft", "delay-1000ms");
    
  } else if(window.location.hash == pageIdList[7]) {
    partnersClass.classList.add("animated", "fadeInLeft", "delay-1000ms");

  } else if(window.location.hash == pageIdList[8]) {
    contactsClass.classList.add("animated", "fadeInLeft", "delay-1000ms");
  } else {
  }
}

let startFunctions = () => {
    dynamicStyle(); scrollUpDown(); addLogo(); navSideShowActive(); addAnimation();
}