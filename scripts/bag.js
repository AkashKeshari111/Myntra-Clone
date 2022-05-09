



let cartGo = JSON.parse(localStorage.getItem("cartGo"));
// console.log(cartGo)

let totalPrice = cartGo.reduce(function (acc, elem) {
  return acc + Number(elem.price);
}, 0);

let totalActual = cartGo.reduce(function (acc, elem) {
  return acc +Number(elem.MP) ;
}, 0);

let discount = totalActual - totalPrice;
console.log(totalPrice, discount, totalActual);

let priceobj = {
  totalPrice: totalPrice,
  totalActualPrice: totalActual,
  discount: discount,
};

localStorage.setItem("totalPriceInfo", JSON.stringify(priceobj));
// console.log(priceobj);
// }

let nums = cartGo.length;
let titleDiv = document.createElement("div");
let titleWish = document.createElement("h6");
titleWish.innerText = "ITEMS";
let num = document.createElement("h6");
// num.style.lineHeight = "20px";
titleWish.style.marginLeft = "10px";
num.innerText = `${nums} `;
titleDiv.append(num, titleWish);
titleDiv.style.display = "flex";
document.getElementById("numberOfItems").append(titleDiv);

// document.getElementById("totalMrp").innerText = "";
// document.getElementById("totalMrp").innerText = `₹ ${totalPrice}`;
// localStorage.setItem("totalprice", JSON.stringify(totalPrice));
let editCart = [];

cartGo.map((elem, index) => {
  let box = document.createElement("div");
  let boxLeft = document.createElement("div");
  let boxRight = document.createElement("div");
  box.style.minHeight = "160px";
  box.style.minWidth = "auto";
  box.style.marginTop = "15px";
  box.style.padding = "10px";
  boxRight.style.marginLeft = "20px";
  box.style.border = "1px solid grey";
  box.style.borderRadius = "5px";

  // let select = document.createElement("input");
  // select.type = "checkbox";
  // select.style.position = "relative";
  // select.style.bottom = "50px";
  // select.addEventListener("click", function () {
  //   editCart.push(elem, index);
  //   console.log(editCart);
  // });

  let img = document.createElement("img");
  img.src = elem.image;
  img.style.maxHeight = "90%";
  img.style.width = "auto";

  let brand = document.createElement("h6");
  brand.innerText = elem.brand;

  // let closeDiv = document.createElement("div");
  // let closeX = document.createElement("button");
  // closeX.innerText = "X";
  // closeX.style.backgroundColor = "white";
  // closeX.style.border = "0px";

  let name = document.createElement("p");
  name.innerText = elem.type;
  name.style.fontSize = "small";
  name.style.fontWeight = "400";
  name.style.lineHeight = "30px";


  let remove = document.createElement("button");
  remove.className = "invisiblebtn";
  remove.innerText = "REMOVE";
  remove.style.fontSize = "small";
  remove.addEventListener("click", function () {
    removeElement(elem, index);
  });



  let nameButtonDiv = document.createElement("div");
  // nameButtonDiv.style.border = "1px solid red";
  nameButtonDiv.style.display = "flex";
  nameButtonDiv.style.justifyContent = "space-evenly";
  nameButtonDiv.style.width = "100%";
  nameButtonDiv.style.height = "30px";

  nameButtonDiv.append(name, remove);
  // let merchant = document.createElement("p");
  // merchant.innerText = elem.merchant;
  // merchant.style.fontSize = "x-small";
  // merchant.style.lineHeight = "0px";

  let size = document.createElement("button");
  size.style.backgroundColor = "#f4f4f5";
  size.style.border = "0px";
  size.style.borderRadius = "5px";
  // size.style.fontSize = "";
  size.innerText = "Size: Onesize";

  let qty = document.createElement("select");
  qty.innerText = `QTY: 1`;
  let one = document.createElement("option");
  one.innerText = "1";
  let two = document.createElement("option");
  two.innerText = "2";
  let three = document.createElement("option");
  three.innerText = "3";
  let four = document.createElement("option");
  four.innerText = "4";
  let five = document.createElement("option");
  five.innerText = "5";
  qty.append(one, two, three, four, five);

  let sizeDiv = document.createElement("div");
  sizeDiv.append(size, qty);
  sizeDiv.style.display = "flex";
  sizeDiv.style.justifyContent = "space-between";

  let price = document.createElement("h6");
  price.innerText =`₹  ${elem.price}`;
  price.style.fontSize = "85%";

  let MP = document.createElement("p");
  MP.innerText =`₹ ${elem.MP}`;
  MP.style.color = "grey";
  MP.style.textDecoration = "line-through";
  MP.style.fontSize = "85%";
  // console.log(MP);


  

  let offer = document.createElement("p");
  offer.innerText = `${elem.offer}% OFF`;
  offer.style.color = "#ff3f6c";
  offer.style.fontSize = "85%";

  let priceDiv = document.createElement("div");
  priceDiv.style.display = "flex";
  // priceDiv.style.border = "1px solid red";
  priceDiv.style.justifyContent = "space-evenly";
  priceDiv.style.height = "30px";

  priceDiv.style.marginTop = "15px";

  priceDiv.append(price, MP, offer);

  let deliveryDate = document.createElement("p");
  deliveryDate.style.fontSize = "x-small";
  deliveryDate.innerText = "Delivery by: 7 May 2022";

  boxLeft.append(img);
  boxRight.append(brand, nameButtonDiv, sizeDiv, priceDiv, deliveryDate);
  box.style.display = "flex";
  box.style.height = "100px";
  box.append(boxLeft, boxRight);
  document.getElementById("appendBag").append(box);
});

// function removeElement(editCart) {
//   for (let i = 0; i < editCart.length; i++) {
//     let elem = editCart[i];
//   }
// }
let priceData = JSON.parse(localStorage.getItem("totalPriceInfo"));
console.log(priceData);
 totalActual = priceData.totalActualPrice;
 totalPrice = priceData.totalPrice;
 discount = priceData.discount;


document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("total").innerText = `₹ ${totalPrice}`;
document.getElementById("discount").innerText = `₹ ${discount}`;



function removeElement(elem, index) {
  cartGo.splice(index, 1);
  localStorage.setItem("cartGo", JSON.stringify(cartGo));
  nums = cartGo.length;
  let titleDiv = document.createElement("div");
  let titleWish = document.createElement("h6");
  titleWish.innerText = "ITEMS";
  let num = document.createElement("h6");
  // num.style.lineHeight = "20px";
  titleWish.style.marginLeft = "10px";
  num.innerText = `${nums} `;
  titleDiv.append(num, titleWish);
  titleDiv.style.display = "flex";
  document.getElementById("numberOfItems").append(titleDiv);
  window.location.reload();
}