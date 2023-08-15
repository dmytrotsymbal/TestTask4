const headerLinks = document.getElementById("headerLinks");

document
  .getElementById("showInputButton")
  .addEventListener("click", function () {
    document.getElementById("hiddenInput").style.display = "block";
    headerLinks.style.minWidth = "600px";
  });
