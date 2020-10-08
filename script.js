const navDrop = () => {
  let previousScrollPostition = window.pageYOffset;

  // window.onscroll = () => {
  //   console.log("SIMPLE FUNCTION", window.pageYOffset)
  // }

  window.addEventListener("scroll", () => {
    let currentScrollPosition = window.pageYOffset;

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
  const listItem = document.querySelectorAll(".header__li");

  burger.addEventListener("click", () => {
    ul.classList.toggle("header__ul__open");

    listItem.forEach((li, i) => {
      li.addEventListener("click", () => {
        ul.classList.remove("header__ul__open");
        burger.classList.remove("toggleBurger");

        listItem.forEach((item) => {
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
