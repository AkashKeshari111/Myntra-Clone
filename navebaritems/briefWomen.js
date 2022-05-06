import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let  Brief = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917772/2021/10/28/6de2ffb2-a122-437e-867d-c9108f8a13011635422092997DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 472",
      "actualPrice": "Rs. 1049",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917676/2021/11/25/a1a6e85e-9965-47c7-8878-6d9dad08ac531637838400414-DressBerry-Women-Briefs-8211637838399919-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 419",
      "actualPrice": "Rs. 1049",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885220/2021/10/1/d39609be-c68b-4557-bfa3-0d6705525a751633088713162-Mast--Harbour-Women-Briefs-2981633088712228-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Women Pack of 3 Cotton Briefs",
      "price": "Rs. 399",
      "actualPrice": "Rs. 999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917714/2021/10/28/defa7d86-275c-4be5-9e96-9ea1b00871661635421900169DressBerryWomenPackof3PureCottonSolidBriefsDB-SOLID-BIK-NEW-1.jpg",
      "brand": "DressBerry",
      "title": "Pack of 3 Pure Cotton Briefs",
      "price": "Rs. 399",
      "actualPrice": "Rs. 999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917732/2021/11/2/7177a141-8af4-485a-984b-5839b80fafe41635843472185-DressBerry-Women-Pack-of-3-Pure-Cotton-Printed-Hipster-Brief-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Cotton Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917774/2021/11/2/a4822cf2-6fe9-4633-87b0-a08e2ca206c51635833693892DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917716/2021/11/17/c7a7869f-47f0-4222-a9b7-ba490535bcec1637141909116-DressBerry-Women-Pack-of-3-Pure-Cotton-Printed-Hipster-Brief-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Cotton Briefs",
      "price": "Rs. 419",
      "actualPrice": "Rs. 1049",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917766/2021/11/30/5f6116b8-7bb9-4830-a79e-786e4b98c0801638263356374-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917640/2021/10/28/69799d85-3afc-4c69-b420-1de94e53ceed1635422132576DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917756/2021/11/30/a5c093ca-7daf-4d23-809c-4e642a816cae1638253586094-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14620458/2021/10/28/4c0968f7-2feb-4106-9d45-8df87b5627181635422943829DressBerryWomenPackof3HipsterBriefs1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 249",
      "actualPrice": "Rs. 999",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885342/2021/10/1/12d31358-c6e9-48e2-a6eb-6c57f89528151633093550355-Roadster-Women-Briefs-2821633093548273-1.jpg",
      "brand": "Roadster",
      "title": "Pack of 3 Bikini Briefs",
      "price": "Rs. 249",
      "actualPrice": "Rs. 999",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885346/2021/10/4/62a9f6d8-4f08-4c14-801d-9f7f4ba3e12d1633335018822-Roadster-Women-Pack-of-3-Solid-Briefs-7641633335018306-1.jpg",
      "brand": "Roadster",
      "title": "Women Pack of 3 Solid Briefs",
      "price": "Rs. 299",
      "actualPrice": "Rs. 999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917762/2021/11/30/34299509-9441-462b-946c-1e611a972fbe1638263599825-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pack of 3 Hipster Briefs",
      "price": "Rs. 419",
      "actualPrice": "Rs. 1049",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917806/2021/11/2/8914415f-6b4c-44fd-b6a0-638de59b84791635834105138DressBerryPackof3PrintedCottonBikiniBriefsDB-PRT-BIK-NEW-0121.jpg",
      "brand": "DressBerry",
      "title": "Pack of 3 Cotton Bikini Briefs",
      "price": "Rs. 314",
      "actualPrice": "Rs. 1049",
      "offer": "(70% OFF)"
    }
  ]

  Brief.map(function(el){
    let append_data=document.getElementById("append_data")
    let div1=document.createElement("div")
    let img=document.createElement("img")
    let brand=document.createElement("h3")
    let type=document.createElement("p")
    let price=document.createElement("p")
    let MP=document.createElement("s")
    let off=document.createElement("p")
  
  
    div1.id="inner_div"
    img.src=el.image;
    img.id="img1"
  
  
  
    
    brand.innerText=el.brand;
    brand.id="brand1"
  
   
    type.innerText=el.title;
    type.id="type1"
     
    let div2=document.createElement("div")
    div2.id="div_2"
    let div3=document.createElement("div")
    div3.id="div_3"
    price.innerText=el.price;
    price.id="price1"
    MP.innerText=el.actualPrice;
    MP.id="mp1"
    off.innerText=el.offer;
    off.id="off1"
  
  
    
    div3.append(price,MP,off)
    div2.append(div3)
    div1.append(img,brand,type,div2)
  
    append_data.append(div1)
  
  
    localStorage.setItem("BriefWomen",JSON.stringify(Brief))
    console.log("inside")
  
  })
 
