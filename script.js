const navDrop = () => {
  let previousScrollPostition = window.pageYOffset;
  const h1 = document.querySelector(".header__intro__text");
  const navLogo = document.querySelector(".navLogo");

  window.addEventListener("scroll", () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 200) {
      h1.style.display = "none";
      navLogo.style.display = "block";
      navLogo.style.width = "150px";
      navLogo.style.height = "50px";
      navLogo.style.backgroundImage = "url('./assets/bertex_new.gif')";
      navLogo.style.backgroundSize = "contain";
      navLogo.style.backgroundRepeat = "no-repeat";
      navLogo.style.backgroundPosition = "center";
      // navLogo.style.backgroundColor = "red";
    } else {
      h1.style.display = "block";
      navLogo.style.display = "none";
    }

    if (previousScrollPostition < currentScrollPosition) {
      document.querySelector(".header__nav").style.top = "-10vh";
    } else {
      document.querySelector(".header__nav").style.top = "0";
    }

    previousScrollPostition = currentScrollPosition;
  });
};
navDrop();

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
