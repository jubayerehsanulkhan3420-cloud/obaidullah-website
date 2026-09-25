const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
  document.getElementById("contactMessage").innerHTML =
    "Thanks for visiting Obaidullah's website! I hope you enjoyed exploring my world.";
});


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function() {
  const searchText = searchInput.value;

  if (searchText.trim() !== "") {
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(searchText);
  }
});
searchBtn.addEventListener("click", function() {
  let query = document.getElementById("searchInput").value;

  if (query !== "") {
    document.getElementById("searchResults").innerHTML =
      "<h2>Search Result</h2>" +
      "<p>You searched for: <b>" + query + "</b></p>" +
      "<p>Welcome to Obaidullah's World!</p>";
  }
});


const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function() {
  document.getElementById("learnMoreText").innerHTML =
    "Welcome to Obaidullah's World! Here you can learn more about my brother and his journey.";
});


const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
