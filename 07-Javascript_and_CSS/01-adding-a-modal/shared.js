var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButtons = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

selectPlanButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open' //this will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

const closeModal = () => {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
};

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});
if (modalNoButtons) {
  modalNoButtons.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
