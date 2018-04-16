const select = document.getElementById("filter");

select.addEventListener("input", evt => {
  const target = evt.target;
  const value = target.options[target.selectedIndex].value;
  console.log("input received", value);

  switch (value) {
    case "priceAsc":

      break;
    case "priceDesc":

      break;
    case "calAsc":

      break;
    case "calDesc":

      break;

    default:
      break;
  }
});
