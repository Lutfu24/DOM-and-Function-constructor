class Car {
  constructor(brand, model, year, description, isNew) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.description = description;
    this.isNew = isNew;
  }
}

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");
const desc = document.getElementById("desc");
const checkbox = document.getElementById("checkbox");

const btn = document.querySelector(".btn");

const myFunction = (brand, model, year, desc, checkbox) => {
  const car = new Car(brand, model, year, desc, checkbox);
  console.log({car});
};

btn.addEventListener("click", myFunction);
