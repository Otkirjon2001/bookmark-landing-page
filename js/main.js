const elSiteButton1 = document.getElementById("features-item-button-1");
const elSiteButton2 = document.getElementById("features-item-button-2");
const elSiteButton3 = document.getElementById("features-item-button-3");
const elSiteFeatures1 = document.querySelector(".features-wrapper-box-1");
const elSiteFeatures2 = document.querySelector(".features-wrapper-box-2");
const elSiteFeatures3 = document.querySelector(".features-wrapper-box-3");

elSiteButton1.addEventListener("click", function() {
  elSiteButton1.classList.add("border-bottom");
  elSiteButton2.classList.remove("border-bottom");
  elSiteButton3.classList.remove("border-bottom");
  elSiteFeatures1.classList.remove("none");
  elSiteFeatures2.classList.add("none");
  elSiteFeatures3.classList.add("none");
})
elSiteButton2.addEventListener("click", function() {
  elSiteButton1.classList.remove("border-bottom");
  elSiteButton2.classList.add("border-bottom");
  elSiteButton3.classList.remove("border-bottom");
  elSiteFeatures1.classList.add("none");
  elSiteFeatures2.classList.remove("none");
  elSiteFeatures3.classList.add("none");
})
elSiteButton3.addEventListener("click", function() {
  elSiteButton1.classList.remove("border-bottom");
  elSiteButton2.classList.remove("border-bottom");
  elSiteButton3.classList.add("border-bottom");
  elSiteFeatures1.classList.add("none");
  elSiteFeatures2.classList.add("none");
  elSiteFeatures3.classList.remove("none");
})
