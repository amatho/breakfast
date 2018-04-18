const select = document.getElementById("filter");
const categories = document.getElementById("categories");
const products = document.getElementById("products");

const data = [
  { id: 10201, name: "Egenkomponert Baguette", cat: "food", gram: 75, calories: 120, price: 79, render: false },
  { id: 10001, name: "Fint brød", cat: "food", type: "Brød", gram: 30, calories: 70, price: 20, img: "fintbrod.jpg" },
  { id: 10002, name: "Grovt brød", cat: "food", type: "Brød", gram: 45, calories: 90, price: 30, img: "grovtbrod.jpg" },
  { id: 10003, name: "Smør", cat: "food", type: "saus", gram: 6, calories: 40 , price: 3, img: "smor.jpg" },
  { id: 10004, name: "Aioli", cat: "food", type: "saus", gram: 6, calories: 25, price: 6, img: "aioli.png" },
  { id: 10005, name: "Salsa", cat: "food", type: "saus", gram: 6, calories: 30, price: 5, img: "salsa.jpg" },
  { id: 10006, name: "Gulost", cat: "food", type: "ost", gram: 10, calories: 61, price: 6, img: "gulost.png" },
  { id: 10007, name: "Cheddar", cat: "food", type: "ost", gram: 10, calories: 42, price: 4, img: "cheddar.jpg" },
  { id: 10008, name: "Salami", cat: "food", type: "kjøtt", gram: 15, calories: 34, price: 7, img: "salami.png" },
  { id: 10009, name: "Skinke", cat: "food", type: "kjøtt", gram: 15, calories: 13, price: 7, img: "skinke.png" },
  { id: 10010, name: "Laks", cat: "food", type: "kjøtt", gram: 15, calories: 24, price: 10, img: "laks.jpg" },
  { id: 10011, name: "Salat", cat: "food", type: "grønnsaker", gram: 3, calories: 2, price: 8, img: "salat.png" },
  { id: 10012, name: "Agurk", cat: "food", type: "grønnsaker", gram: 3, calories: 3, price: 5, img: "agurk.jpg" },
  { id: 10013, name: "Tomat", cat: "food", type: "grønnsaker", gram: 5, calories: 4, price: 6, img: "tomat.jpg" },
  { id: 10014, name: "Paprika", cat: "food", type: "grønnsaker", gram: 3, calories: 3, price: 6, img: "paprika.jpg" },
  { id: 10015, name: "Løk", cat: "food", type: "grønnsaker", gram: 3, calories: 2, price: 6, img: "lok.jpg" },
  { id: 10101, name: "Eplejuice", cat: "drink", type: "Juice", gram: 200, calories: 86, price: 20, img: "eplejuice.jpg" },
  { id: 10102, name: "Te", cat: "drink", type: "Te", gram: 150, calories: 0, price: 10, img: "te.jpeg" },
  { id: 10103, name: "Appelsinjuice", cat: "drink", type: "Juice", gram: 200, calories: 86, price: 25, img: "appelsinjuice.jpg" },
  { id: 10104, name: "Kaffer", cat: "drink", type: "Kaffe", gram: 150, calories: 0, price: 10 , img: "kaffe.png" },
  { id: 10105, name: "Lett melk", cat: "drink", type: "Melk", gram: 200, calories: 86, price: 20, img: "melk.jpg" },
  { id: 10106, name: "Ekstra lett melk", cat: "drink", type: "Melk", gram: 200, calories: 70, price: 22, img: "melk.jpg" },
  { id: 10107, name: "Skummet melk", cat: "drink", type: "Melk", gram: 200, calories: 52, price: 24, img: "melk.jpg" },
  { id: 10108, name: "Cola", cat: "drink", type: "Brus", gram: 330, calories: 139, price: 20, img: "cola.jpg" }
];

select.addEventListener("input", evt => {
  const target = evt.target;
  const value = target.options[target.selectedIndex].value;
  console.log("input received", value);
  let sortedArray;

  switch (value) {
    case "priceAsc":
      sortedArray = sortAscending(data, "price");
      break;
    case "priceDesc":
      sortedArray = sortDescending(data, "price");
      break;
    case "calAsc":
      sortedArray = sortAscending(data, "calories");
      break;
    case "calDesc":
      sortedArray = sortDescending(data, "calories");
      break;

    default:
      sortedArray = data;
      break;
  }

  renderProducts(sortedArray);
});

renderProducts();

function renderProducts(theData = data) {
  products.innerHTML = "";

  theData.forEach(product => {
    if (product.render === false) return renderCustom();

    products.innerHTML += `
    <div class="product">
      <div class="name">${product.name}</div>
      <img src="assets/${product.img}">
      <div class="info">
        Pris: ${product.price},- Kalorier: ${product.calories} kcal, Vekt: ${product.gram} g
      </div>
      <button onclick="addProduct(${product.id})">kjøp</button>
    </div>
    `;
  });
}

function renderCustom() {
  products.innerHTML += `
  <div class="product">
    <div class="name">Egenkomponert Baguette</div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Baguettes_-_stonesoup.jpg">
    <select class="btn">
      <option value="fint" selected>Fint</option>
      <option value="grovt">Grovt</option>
    </select>
    <div class="info">
      Pris: 79,- Kalorier: 100/120 kcal, Vekt: 75 g
    </div>
    <button onclick="addProduct(10201)">kjøp</button>
  </div>
  `;
}

function addProduct(id) {
  console.log(data.find(elem => elem.id === id));
}

function toggleCategories() {
  categories.classList.toggle("active");
}

function showCategory(category) {
  if (category === "all") {
    renderProducts();
  } else if (category === "food") {
    const filteredData = data.filter(item => item.cat === "food");
    renderProducts(filteredData);
  } else if (category === "drink") {
    const filteredData = data.filter(item => item.cat === "drink");
    renderProducts(filteredData);
  }
}

function sortDescending(array, key) {
    return array.slice(0).sort((a, b) => b[key] - a[key]);
}

function sortAscending(array, key) {
    return array.slice(0).sort((a, b) => a[key] - b[key]);
}
