let mat =[
            {name: "Fint brød", type: "Brød", amount: 30 , calories: 70, pris: 20, img: fintbrød.jpg },
            {name: "Grovt brød", type: "Brød", amount: 45, calories: 90, pris: 30, img: grovtbrød.jpg},
            {name: "Smør", type: "saus", amount: 6 , calories: 40 , pris: 3, img: smør.jpg },
            {name: "Aioli", type: "saus", amount: 6 , calories: 25, pris: 6, img: aioli.png },
            {name: "Salsa", type: "saus", amount: 6 , calories: 30, pris: 5, img: salsa.jpg},
            {name: "Gulost", type: "ost", amount: 10 , calories: 61, pris: 6, img: gulost.png },
            {name: "Cheddar", type: "ost", amount: 10 , calories: 42, pris: 4, img: cheddar.jpg},
            {name: "Salami", type: "kjøtt", amount: 15 , calories: 34, pris: 7, img: salami.png },
            {name: "Skinke", type: "kjøtt", amount: 15 , calories: 13, pris: 7, img: skinke.png },
            {name: "Laks", type: "kjøtt", amount: 15 , calories: 24, pris: 10, img: laks.jpg },
            {name: "Salat", type: "grønnsaker", amount: 3 , calories: 2, pris: 8, img: salat.png },
            {name: "Agurk", type: "grønnsaker", amount: 3 , calories: 3, pris: 5, img: agurk.jpg },
            {name: "Tomat", type: "grønnsaker", amount: 5 , calories: 4, pris: 6, img: tomat.png },
            {name: "Paprika", type: "grønnsaker", amount: 3 , calories: 3, pris: 6, img: paprika.jpg },
            {name: "Løk", type: "grønnsaker", amount: 3 , calories: 2, pris: 6, img: løk.jpg },
        ];

        let drikke = [
            {name: "Eplejuice", type: "Juice", amount: 200 , calories: 86, pris: 20, img: eplejuice.jpg },
            {name: "Te", type: "Te", amount: 150 , calories: 0 , pris: 10, img: te.jpeg},
            {name: "Appelsinjuice", type: "Juice", amount: 200 , calories: 86, pris: 25, img: appelsinjuice.jpg },
            {name: "Kaffer", type: "Kaffe", amount: 150 , calories: 0, pris: 10 , img: kaffe.png},
            {name: "Lett melk", type: "Melk", amount: 200 , calories: 86, pris: 20, img: melk.jpg },
            {name: "Ekstra lett melk", type: "Melk", amount: 200 , calories: 70, pris: 22, img: melk.jpg },
            {name: "Skummet melk", type: "Melk", amount: 200 , calories: 52, pris: 24, img: melk.jpg},
            {name: "Cola", type: "Brus", amount: 330 , calories: 139, pris: 20, img: cola.jpg},
        ];



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
