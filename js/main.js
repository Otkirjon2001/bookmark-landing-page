const elSiteButton1 = document.getElementById("features-item-button-1");
const elSiteButton2 = document.getElementById("features-item-button-2");
const elSiteButton3 = document.getElementById("features-item-button-3");
const elSiteFeatures1 = document.querySelector(".features-wrapper-box-1");
const elSiteFeatures2 = document.querySelector(".features-wrapper-box-2");
const elSiteFeatures3 = document.querySelector(".features-wrapper-box-3");

elSiteButton1.addEventListener("click", function() {
  elSiteButton1.classList.add("features__button--active");
  elSiteButton2.classList.remove("features__button--active");
  elSiteButton3.classList.remove("features__button--active");
  elSiteFeatures1.classList.remove("none");
  elSiteFeatures2.classList.add("none");
  elSiteFeatures3.classList.add("none");
})
elSiteButton2.addEventListener("click", function() {
  elSiteButton1.classList.remove("features__button--active");
  elSiteButton2.classList.add("features__button--active");
  elSiteButton3.classList.remove("features__button--active");
  elSiteFeatures1.classList.add("none");
  elSiteFeatures2.classList.remove("none");
  elSiteFeatures3.classList.add("none");
})
elSiteButton3.addEventListener("click", function() {
  elSiteButton1.classList.remove("features__button--active");
  elSiteButton2.classList.remove("features__button--active");
  elSiteButton3.classList.add("features__button--active");
  elSiteFeatures1.classList.add("none");
  elSiteFeatures2.classList.add("none");
  elSiteFeatures3.classList.remove("none");
})

const elsParagraph = document.querySelectorAll('p');
console.log(elsParagraph.length);