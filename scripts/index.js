// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA"
// }
// })

const url = "https://striveschool-api.herokuapp.com/api/product/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
  },
};

window.onload = async () => {
  await getData();
};

const getData = async () => {
  try {
    const response = await fetch(url, options);
    const items = await response.json();
    console.log(items), showItems(items);
  } catch (error) {
    console.log(error);
  }
};

const showItems = async (itemsArray) => {
  const ul = document.querySelector(".item-list");
  ul.innerHTML = "";
  itemsArray.forEach((item) => {
    const { _id, name, description, brand, imageUrl, price } = item;
    ul.innerHTML += `

    <div class="card col-3">
        <img src="${imageUrl}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>

            <a href="./backOffice.html?id=${_id}" class="btn btn-primary">More</a>
        </div>
    </div>`;
  });
};
