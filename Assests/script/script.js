var searchButton = document.getElementById("search");
searchButton.addEventListener("click");

$(".searchBar").on("click", function () {
  typing = $(this).siblings(".typing").val();
  console.log(typing);
  localStorage.setItem(typing);
});

$("searchBar").val(localStorage.getItem("searchBar"));
