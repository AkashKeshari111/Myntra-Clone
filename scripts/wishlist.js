

import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();





searchFunction()




// localStorage.setItem("wishlistGo", JSON.stringify(sendtolocal));
let wishlistGo = JSON.parse(localStorage.getItem("wishlistGo")) || [];
// let a = wishlistGo

if (wishlistGo.length == 0) {
  document.getElementById("myWishlist").innerHTML = `<div id="wishlistempty">
  <h4>YOUR WISHLIST IS EMPTY</h4>
  <br />
  <p>
    Add items that you like to your wishlist. Review them anytime and easily
    move them to the bag
  </p>
  <img src="../scripts/wishlist.PNG" alt="" />
  <br />
  <button id="continue"><a href="/index.html">CONTINUE SHOPPING</a></button>
</div>`;
} else {
  document.getElementById("myWishlist").innerText = null;

  wishlistGo.map((elem, index) => {
    let img = document.createElement("img");
    img.src = elem.image;
    img.style.height = "60%";
    img.style.width = "auto";
    // let brand = document.createElement("h6");
    // brand.innerText = elem.brand;

    let name = document.createElement("p");
    name.innerText = elem.type;
  

    let price = document.createElement("h6");
    price.innerText = `Rs. ${Number(elem.price)}`;
    price.style.fontSize = "85%";

    let actualPrice = document.createElement("p");
    actualPrice.innerText = Number(elem.MP);
    actualPrice.style.color = "grey";
    actualPrice.style.textDecoration = "line-through";
    actualPrice.style.fontSize = "85%";
    // console.log(actualPrice);

    let offer = document.createElement("p");
    offer.innerText = `${elem.offer}% OFF`;
    offer.style.color = "#ff3f6c";
    offer.style.fontSize = "85%";

    let priceDiv = document.createElement("div");
    priceDiv.style.display = "flex";
    //   priceDiv.style.border = "1px solid red";
    priceDiv.style.justifyContent = "space-evenly";
    priceDiv.style.height = "30px";
    // priceDiv.style.marginTop = "15px";

    let move = document.createElement("button");
    move.innerText = "MOVE TO BAG";
    move.addEventListener("click", function () {
      MovetoBag(elem, index);
    });

    priceDiv.append(price, actualPrice, offer);
    let box = document.createElement("div");
    box.style.border = "1px solid lightgrey";
    box.style.height = "340px";
    box.style.width100px;
    box.append(img, name, priceDiv, move);
    document.getElementById("wishlistAppend").append(box);
  });

  let nums = wishlistGo.length;
  let titleDiv = document.createElement("div");
  let titleWish = document.createElement("h6");
  titleWish.innerText = "My Wishlist :";
  titleWish.id="abc"
  let num = document.createElement("p");
  num.style.lineHeight = "20px";
  num.style.marginLeft = "10px";
  num.innerText = `${nums} items`;
  titleDiv.append(titleWish, num);
  titleDiv.style.display = "flex";
  document.getElementById("myWishlist").append(titleDiv);
}


let moveToBagArr = JSON.parse(localStorage.getItem("cartGo")) || [];

function MovetoBag(elem, index) {
  moveToBagArr.push(elem);
  wishlistGo.splice(index, 1);
  console.log(elem, index);
  localStorage.setItem("cartGo", JSON.stringify(moveToBagArr));
  localStorage.setItem("wishlistGo", JSON.stringify(wishlistGo));
  window.location.reload();
}

document.getElementById("count_cart").innerHTML=moveToBagArr.length;

