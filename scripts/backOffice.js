const url = "https://striveschool-api.herokuapp.com/api/product/";
const par = new URLSearchParams(location.search);
const id = par.get("id");

window.onload = async () => {
  try {
    let containerNode = document.querySelector("#mainContainer");
    if (id !== null) {
      containerNode.innerHTML = "";
      getItemToEdit();
    }
  } catch (error) {
    console.log(error);
  }
};

const getItemToEdit = async () => {
  try {
    const response = await fetch(url + id, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
      },
    });
    const itemToEdit = await response.json();
    console.log(itemToEdit), showItemToEdit(itemToEdit);
  } catch (error) {
    console.log(error);
  }
};

const showItemToEdit = async (item) => {
  let containerNode = document.querySelector("#mainContainer");
  const { _id, name, description, brand, imageUrl, price } = item;
  containerNode.innerHTML = `
    <ul class="row item-list mt-5 d-flex justify-content-center">
        <li class="card col-6 text-center p-3">
            <img src="${imageUrl}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name} by ${brand}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">$ ${price}</p>
                <a href="./backOffice.html?id=${_id}" class="btn btn-primary">More</a>
            </div>
        </li>
    </ul>`;
};

const addItem = async () => {
  try {
    const eventToSend = {
      name: document.querySelector("#itemName").value,
      description: document.querySelector("#itemDescription").value,
      brand: document.querySelector("#itemBrand").value,
      price: document.querySelector("#itemPrice").value,
      imageUrl: document.querySelector("#itemImageUrl").value,
    };
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(eventToSend),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      console.log("success!");
    } else {
      console.log("Oh no something went wrong...");
    }
  } catch (error) {
    console.log(error);
  }
};

// const optionsGet = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
//   },
// };
// const optionsPost = {
//   method: "POST",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
//   },
// };
// const optionsPut = {
//   method: "PUT",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
//   },
// };
// const optionsDelete = {
//   method: "DELETE",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDRlM2U3MzczODAwMTUzNzQzYzAiLCJpYXQiOjE2NzQxMzQ3NTUsImV4cCI6MTY3NTM0NDM1NX0.t0pnWKSN0hLWlcvYzkEigefSBEeys17XVnr-7Z7GgzA",
//   },
// };
