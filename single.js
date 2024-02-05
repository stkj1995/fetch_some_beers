const parametre = new URLSearchParams(windows.location.search);
const id = parametre.get("id");

fetch(`https://api.punkapi.com/v2/beers/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  console.log(data[0]);
  document.querySelector("h2").textContent = data[0].name;
  document.querySelector("p").textContent = data[0].description;
  document.querySelector("img").src = data[0].image_url;
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
