
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

  previousScrollPostition = currentScrollPosition
})
