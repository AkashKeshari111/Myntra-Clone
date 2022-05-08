// import navbar from "./navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
let home = document.getElementById("home");
let work = document.getElementById("work");
home.style.color = "#ff3f6c";
home.style.border = "2px solid #ff3f6c";

function saveHome() {
  event.preventDefault();
  home.style.color = "#ff3f6c";
  home.style.border = "2px solid #ff3f6c";
  work.style.color = "black";
  work.style.border = "2px solid black";
}

function saveWork() {
  event.preventDefault();
  work.style.color = "#ff3f6c";
  work.style.border = "2px solid #ff3f6c";
  home.style.color = "black";
  home.style.border = "2px solid black";
}

document.getElementById("addAddress").addEventListener("click", newAddress);
// let totalPriceDelivery = JSON.parse(localStorage.getItem("totalprice"));
let addressArr = [];
function newAddress() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("Mobile").value;
  let pincode = document.getElementById("pinCode").value;
  let address = document.getElementById("address").value;
  let town = document.getElementById("town").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let myAddress = new makeAddress(
    name,
    mobile,
    pincode,
    address,
    town,
    city,
    state
  );
  addressArr.push(myAddress);
  localStorage.setItem("address", JSON.stringify(addressArr));
  window.location.href = "../cart/selectAddress.html";
}

function makeAddress(n, m, p, a, t, c, s) {
  this.name = n;
  this.mobile = m;
  this.pincode = p;
  this.address = a;
  this.town = t;
  this.city = c;
  this.state = s;
}

let priceObj = JSON.parse(localStorage.getItem("totalPriceInfo"));
let totalActual = priceObj.totalActualPrice;
let total = priceObj.totalActualPrice;
let discount = priceObj.discount;
// console.log(priceObj);

document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("discount").innerText = `₹ ${discount}`;
document.getElementById("totalP").innerText = `₹ ${total}`;
