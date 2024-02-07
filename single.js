const parametre = new URLSearchParams(windows.location.search);
const id = parametre.get("id");

fetch(`https://api.punkapi.com/v2/beers/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  data.forEach((beer) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("h3").textContent = beer.name;
    klon.querySelector("img").src = beer.image_url;
    if (beer.metod.twist) {
      klon.querySelector("article").classList.add("twisted");
      klon.querySelector("details span").textContent = beer.method.twist;
    }
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("p+p span").textContent = beer.ebc;
    parent.appendChild(klon);
  });
}

//fra produkt.js

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

// fetch("https://kea-alt-del.dk/t7/api/products/" + id)
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// function showProduct(product) {
//   console.log(product);
//   document.querySelector(".tilvalg h3").textContent = product.productdisplayname;
//   document.querySelector(".tilvalg koen").textContent = product.gender;
//   document.querySelector(".tilvalg overdel").textContent = product.subcategory;
//   document.querySelector(".tilvalg brand").textContent = product.brandname;
//   document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
// }
