const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWJjMjhhZDEyOTAwMTU4NzZjMWMiLCJpYXQiOjE3MzE2NjQ4MzQsImV4cCI6MTczMjg3NDQzNH0.c5vDXJeOiuPwk2PShSdqXd1ErBVaeRjjgL4O5EQ2334";

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

function generateProductCards(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCardHTML = `
          <div class="col-md-4">
            <div class="card mb-4">
              <a href="dettaglio.html?id=${product._id}">
                <img src="${product.imageUrl}" class="card-img-top" style="height:350px" alt="${product.name}">
              </a>
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><strong>€${product.price}</strong></p>
                <button onclick="editProduct('${product._id}')" class="btn">Modifica</button>
                <button onclick="detailsProduct('${product._id}')" class="btn">Details</button>
              </div>
            </div>
          </div>
        `;
    productList.innerHTML += productCardHTML;
  });
}

function fetchProducts() {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.display = "inline-block";

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((products) => {
      generateProductCards(products);
      loadingIndicator.style.display = "none";
    })
    .catch((error) => {
      alert("Errore nel caricamento dei prodotti");
    });
}

function editProduct(productId) {
  window.location.href = `backoffice.html?id=${productId}`;
}

window.onload = fetchProducts;

function detailsProduct(productId){
    window.location.href = `datail.html?id=${productId}`
}

window.onload = fetchProducts;