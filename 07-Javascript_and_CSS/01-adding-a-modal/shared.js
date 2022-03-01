var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButtons = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

selectPlanButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

const closeModal = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  backdrop.style.display = "none";
});
modalNoButtons.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
