var headerElement = document.getElementsByTagName("header");
  
    var bodyElement = document.getElementsByTagName("body")[0];

var darkModeButton = document.getElementById('darkModeButton')

var darkModeEnabled = true;

function applyDarkMode() {
  darkModeButton.style.background="lightgray";
  darkModeButton.style.color="black";
  darkModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to bottom, #ff5050 0%, #ffccff 100%)";
  lightModeButton.style.background = "lightgray";
  lightModeButton.style.color = "black";
  lightModeButton.style.border="black";

}
function applyLightMode() {
  lightModeButton.style.background="lightgray";
  lightModeButton.style.color="black";
  lightModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to bottom, #ffccff 0%, #ff5050 100%)";
  darkModeButton.style.background = "lightgray";
  darkModeButton.style.color = "black";
  darkModeButton.style.border="black";
}
darkModeButton.addEventListener("click", applyDarkMode);
lightModeButton.addEventListener("click", applyLightMode)
