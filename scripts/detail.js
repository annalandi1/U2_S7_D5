const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWJjMjhhZDEyOTAwMTU4NzZjMWMiLCJpYXQiOjE3MzE2NjQ4MzQsImV4cCI6MTczMjg3NDQzNH0.c5vDXJeOiuPwk2PShSdqXd1ErBVaeRjjgL4O5EQ2334";

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const productId = new URLSearchParams(window.location.search).get("id");

fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("product-detail").innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.description}</p>
    <p><strong>Marca:</strong> ${data.brand}</p>
    <p><strong>Prezzo:</strong> ${data.price}€</p>
    <img src="${data.imageUrl}" alt="${data.name}" height="90%" width="90%">
  `;
  })
  .catch((error) => alert("Errore, impossibile caricare il prodotto"));