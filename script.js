const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
  alert("Thanks for visiting Obaidullah's website!");
});

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", search);

function search() {
  let query = document.getElementById("searchInput").value;

  if (query !== "") {
    document.getElementById("searchResults").innerHTML =
      "<h2>Search Result</h2>" +
      "<p>You searched for: <b>" + query + "</b></p>" +
      "<p>Welcome to Obaidullah's World!</p>";
  }
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    search();
  }
});
const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function() {
  document.getElementById("learnMoreText").innerHTML =
    "Welcome to Obaidullah's World! Here you can learn more about my brother and his journey.";
});
