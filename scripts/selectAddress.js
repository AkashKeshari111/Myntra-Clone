// import navbar from "./navbar.js";
// document.getElementById("navbar").innerHTML = navbar();

// let cartData = JSON.parse(localStorage.getItem("cart"))

let deliveryInfo = JSON.parse(localStorage.getItem("address"));
let name = deliveryInfo[0].name;
let address = deliveryInfo[0].address;
let mobile = deliveryInfo[0].mobile;
// console.log(deliveryInfo);
console.log(name, address, mobile);

document.getElementById("name").innerHTML = name;
document.getElementById("address").innerText = address;
let addDiv = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Mobile:";
let ph = document.createElement("h6");
ph.style.fontSize = "small";
ph.style.marginLeft = "5px";
p.style.lineHeight = "15px";
ph.innerText = mobile;
addDiv.append(p, ph);
addDiv.style.display = "flex";
document.getElementById("mobile").append(addDiv);

// let cartGo = JSON.parse(localStorage.getItem("cartGo"));

let cartGo = [
  {
    image:
      "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749634/2021/3/9/1f9bf3e7-5da0-43d5-9a48-23ffd95d45f31615280726428-United-Colors-of-Benetton-Men-Belts-121615280725858-1.jpg",
    brand: "United Colors of Benetton",
    title: "Men Solid Belt",
    price: "Rs. 839",
    actualPrice: "Rs. 1199",
    offer: "(30% OFF)",
  },
  {
    image:
      "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15477188/2021/9/26/cb4475b0-282d-420e-8cec-03c6bb85c52d1632639295862-WildHorn-Men-Black-Textured-Leather-Formal-Belt-897163263929-11.jpg",
    brand: "WildHorn",
    title: "Textured Leather Formal Belt",
    price: "Rs. 549",
    actualPrice: "Rs. 2499",
    offer: "(78% OFF)",
  },
  {
    image:
      "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7271185/2018/9/18/a3a0379e-9e48-481e-9d9f-c1f5e8d047ba1537254640785-United-Colors-of-Benetton-Men-Belts-6291537254640739-1.jpg",
    brand: "United Colors of Benetton",
    title: "Men Solid Leather Belt",
    price: "Rs. 1034",
    actualPrice: "Rs. 2299",
    offer: "(55% OFF)",
  },
  {
    image:
      "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047714/2021/12/10/28d65caf-c3ca-4ea7-96a6-667a3e4b28011639121054603-United-Colors-of-Benetton-Men-Black-PU-Belt-5791639121054259-1.jpg",
    brand: "United Colors of Benetton",
    title: "Men Solid Belt",
    price: "Rs. 719",
    actualPrice: "Rs. 1599",
    offer: "(55% OFF)",
  },
  {
    image:
      "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14881750/2021/9/21/2be43863-a577-425c-8ac4-93950bea10a91632223480430-Peter-England-Men-Belts-7831632223480206-1.jpg",
    brand: "Peter England",
    title: "Men Textured Reversible Belt",
    price: "Rs. 599",
    actualPrice: "Rs. 1199",
    offer: "(50% OFF)",
  },
];

cartGo.map((elem) => {
  let box = document.createElement("div");
  let boxLeft = document.createElement("div");
  let boxRight = document.createElement("div");
  box.style.borderBottom = "1px solid lightgrey";

  let img = document.createElement("img");
  img.src = elem.image;
  img.style.maxHeight = "100%";
  img.style.width = "auto";

  // let brand = document.createElement("h3");
  // brand.innerText = elem.brand;

  // let closeDiv = document.createElement("div")
  // let closeX = document.createElement("h3")
  // closeX.innerText = "X"
  // let closenc =

  // let name = document.createElement("h6");
  // name.innerText = elem.name;

  // let merchant = document.createElement("p");
  // merchant.innerText = elem.merchant;

  // let size = document.createElement("h5");
  // size.innerText = elem.size;

  // let qty = document.createElement("select");
  // qty.innerText = elem.Qty;

  // let price = document.createElement("h6");
  // price.innerText = elem.price;

  let est = document.createElement("p");
  est.innerText = "Estimated delivery by ";
  est.style.fontSize = "small";

  let deliveryDate = document.createElement("h6");
  deliveryDate.innerText = " 12 May 2022";
  deliveryDate.style.lineHeight = "20px";
  deliveryDate.style.fontSize = "200";

  let estDiv = document.createElement("div");
  estDiv.style.display = "flex";
  // estDiv.style.justifyContent = "space-around";
  estDiv.append(est, deliveryDate);
  estDiv.style.marginTop = "10%";

  boxLeft.append(img);
  boxRight.append(estDiv);
  box.setAttribute("class", "flexThis");
  box.style.height = "60px";
  box.append(boxLeft, boxRight);

  document.getElementById("appendBagSmall").append(box);
});
let priceData = JSON.parse(localStorage.getItem("totalPriceInfo"));
let totalActual = priceData.totalActualPrice;
let total = priceData.totalPrice;
// console.log(total);

let discount = priceData.discount;

document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("total").innerText = `₹ ${total}`;
document.getElementById("discount").innerText = `₹ ${discount}`;
