// import navbar from "./navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
// let price = JSON.parse(localStorage.getItem("totalprice"));
document.getElementById("placeOrder").addEventListener("click", placeOrder);

let priceData = JSON.parse(localStorage.getItem("totalPriceInfo"));
let totalActual = priceData.totalActualPrice;
let total = priceData.totalPrice;
// console.log(total);

let discount = priceData.discount;

document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("total").innerText = `₹ ${total}`;
document.getElementById("discount").innerText = `₹ ${discount}`;

function placeOrder() {
  alert("order placed");
  window.location.href="/cart/success.html"

  
}


  
