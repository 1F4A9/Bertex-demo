

const navDrop = () => {
  let previousScrollPostition = window.pageYOffset;
  const h1 = document.querySelector(".header__intro__text");
  const navLogo = document.querySelector(".navLogo");

  let breakpoint = window.innerHeight / 2;

  let remove = window.addEventListener("scroll", () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > breakpoint * 2) {
      h1.style.display = "none";
      navLogo.style.display = "block";
      navLogo.style.width = "9.4rem";
      navLogo.style.height = "3.1rem";
      navLogo.style.backgroundImage = "url('./assets/bertex_new.gif')";
      navLogo.style.backgroundSize = "contain";
      navLogo.style.backgroundRepeat = "no-repeat";
      navLogo.style.backgroundPosition = "center";
    } else {
      h1.style.display = "block";

      let maxWidth = 150;
      maxWidth = maxWidth + currentScrollPosition - breakpoint;

      if (maxWidth < 151) {
        navLogo.style.width = `calc(${maxWidth}px)`;
      }
    }

    if (previousScrollPostition < currentScrollPosition) {
      document.querySelector(".header__nav").style.top = "-10vh";
    } else {
      document.querySelector(".header__nav").style.top = "0";
    }

    previousScrollPostition = currentScrollPosition;

    const mediumScreenNavLogo = window.matchMedia("(max-width: 840px)");
    if (mediumScreenNavLogo.matches) {
      navLogo.style.display = "none";
      // h1.style.display = "none";
    }
  });
  // const mediumScreenHeaderText = window.matchMedia("(max-width: 840px)");
  // if (mediumScreenHeaderText.matches) {
  //   h1.style.display = "none";
  // }
};
navDrop();



const MediaHeaderFix = (navLogo, h1) => { };

const navSlide = () => {
  const burger = document.querySelector(".header__nav__mobile__burger");
  const ul = document.querySelector(".header__ul");
  const listItems = document.querySelectorAll(".header__li");

  burger.addEventListener("click", () => {
    ul.classList.toggle("header__ul__open");

    listItems.forEach((li, i) => {
      li.addEventListener("click", () => {
        ul.classList.remove("header__ul__open");
        burger.classList.remove("toggleBurger");

        listItems.forEach((item) => {
          item.style.animation = "";
        });
      });

      if (li.style.animation) {
        li.style.animation = "";
      } else {
        li.style.animation = `liFadeIn 0.5s ease forwards ${i / 7 + 0.5}s`;
      }
    });
    burger.classList.toggle("toggleBurger");
  });
};
navSlide();

function initMap() {
  const myLatLng = { lat: 56.015750, lng: 12.732105 };
  

  let map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
    // disableDefaultUI: true,
    styles: [
      {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "weight": "2.00"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#9c9c9c"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#eeeeee"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#7b7b7b"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#46bcec"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#c8d7d4"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#070707"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      }
  ]
    
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: "assets/googleMarker.png"
    
  });
}
