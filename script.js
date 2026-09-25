const button = document.getElementById("learnMoreBtn");

button.addEventListener("click", function() {
  alert("Welcome to Obaidullah's World!");
});
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
  alert("Thanks for visiting Obaidullah's website!");
});
function search() {
  let query =
document.getElementById("searchInput").value;
  if (query !== "") {
    window.location.href =
  "https://www.google.com/search?q=" + encodeURIComponentP(query);
  }
}
document .getElementById("searchResults").innerHTML =
  welcome to Obaidullahs world search!;
