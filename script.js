const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
  alert("Thanks for visiting Obaidullah's website!");
});

function search() {
  let query = document.getElementById("searchInput").value;

  if (query !== "") {
    document.getElementById("searchResults").innerHTML =
      "<h2>Search Result</h2>" +
      "<p>You searched for: <b>" + query + "</b></p>" +
      "<p>Welcome to Obaidullah's World!</p>";
  }
}
