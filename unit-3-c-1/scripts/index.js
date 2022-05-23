//store the products array in localstorage as "products"

document.querySelector("#submit").addEventListener("click", myProduct);
function Product(t, d, p, i) {
  this.type = t;
  this.desc = d;
  this.price = p;
  this.image = i;
}

let arr = JSON.parse(localStorage.getItem("products")) || [];
function myProduct(event) {
  event.preventDefault();
  let type = document.querySelector("#type").value;
  let desc = document.querySelector("#desc").value;
  let price = document.querySelector("#price").value;
  let image = document.querySelector("#image").value;

  let p1 = new Product(type, desc, price, image);
  arr.push(p1);
  console.log("arr", arr);
  localStorage.setItem("products", JSON.stringify(arr));
}
