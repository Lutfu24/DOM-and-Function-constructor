class Car {
  constructor(brand, model, year, description, isNew) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.description = description;
    this.isNew = isNew;
  }
}

const btn = document.querySelector(".btn");
const carArr = [];
const myFunction = () => {
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let year = document.getElementById("year").value;
  let desc = document.getElementById("desc").value;
  let checkbox = document.getElementById("checkbox").checked;
  let tbody = document.querySelector("tbody");

  let car = new Car(brand, model, year, desc, checkbox);
  carArr.push(car);
  console.log({carArr});
  tbody.innerHTML += `<tr>
  <td class="td">${car.brand}</td>
  <td class="td">${car.model}</td>
  <td class="td">${car.year}</td>
  <td class="td">${car.description}</td>
  <td class="td">${car.isNew}</td>
</tr>`
};

btn.addEventListener("click", myFunction);
