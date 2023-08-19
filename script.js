// const headerLinks = document.getElementById("headerLinks");

// document
//   .getElementById("showInputButton")
//   .addEventListener("click", function () {
//     document.getElementById("hiddenInput").style.display = "block";
//     headerLinks.style.minWidth = "600px";
//   });

//-----------------------------------------------------------------

const adaptiveBtn = document.getElementById("adaptiveBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeAdaptiveMenu = document.getElementById("closeAdaptiveMenu");
const mobileMenuLinks = document.getElementsByClassName("mobileMenuLink");

adaptiveBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeAdaptiveMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

for (const link of mobileMenuLinks) {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}

//-----------------------------------------------------------------
