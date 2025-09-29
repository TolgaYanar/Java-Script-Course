(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  header.addEventListener("click", function () {
    header.style.color === "blue"
      ? (header.style.color = "red")
      : (header.style.color = "blue");
  });
})();

//Modiefied as blue to red and red to blue on click
