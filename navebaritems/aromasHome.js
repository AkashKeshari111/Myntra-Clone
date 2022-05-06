import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Aromas = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/15/8f83448b-c0d7-4fcb-ba77-42e122c827bf1571137795995-1.jpg",
      "brand": "HOSLEY",
      "title": "Hazelnut Scented Jar Candle",
      "price": "Rs. 325",
      "actualPrice": "Rs. 500",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/27/e7370e91-96a7-4827-bba7-744dc1256a2c1619500108125-1.jpg",
      "brand": "Alicia Souza",
      "title": "You Are loved Scented Candle",
      "price": "Rs. 449",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/21/9a07e1ec-9d67-4a07-a344-a414241e8b1f1571636292789-1.jpg",
      "brand": "HOSLEY",
      "title": "6inch Wax Pillar Candle",
      "price": "Rs. 396",
      "actualPrice": "Rs. 575",
      "offer": "(31% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/7/e5c5e53a-2f0f-4ad0-82a6-9f6c4322c3cb1607351782464-1.jpg",
      "brand": "YANKEE CANDLE",
      "title": "Classic Small Jar Cherry Blossom Scented Candles",
      "price": "Rs. 1242",
      "actualPrice": "Rs. 1380",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16187332/2021/11/20/227d2bd0-306d-4499-b3d9-a23ac2c6d9091637406885923Candles1.jpg",
      "brand": "Iris",
      "title": "Solid Candle",
      "price": "Rs. 250",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/15/dc741361-4031-4475-bf28-ff50925b93511571163129401-1.jpg",
      "brand": "HOSLEY",
      "title": "Set of 7 Eucalyptus Candles",
      "price": "Rs. 390",
      "actualPrice": "Rs. 600",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/19/81ce774c-0331-4219-95a0-e4dd53ab5e201574127324896-1.jpg",
      "brand": "HOSLEY",
      "title": "Scented 2 Wick Jar Candle",
      "price": "Rs. 375",
      "actualPrice": "Rs. 500",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/15/930b5fde-ebbe-4b19-ba5a-9093910314de1571162655123-1.jpg",
      "brand": "HOSLEY",
      "title": "Set of 7 Candles",
      "price": "Rs. 390",
      "actualPrice": "Rs. 600",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/25/02dafe3c-1ff2-457c-b7ce-a8b065b6da4d1571964426611-1.jpg",
      "brand": "HOSLEY",
      "title": "Set of 3 Fragrance Jar Candles",
      "price": "Rs. 557",
      "actualPrice": "Rs. 820",
      "offer": "(32% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/15/2389bf64-83c6-4d05-8d2b-9fa153fef1f71571162055201-1.jpg",
      "brand": "HOSLEY",
      "title": "Scented Jar Candle",
      "price": "Rs. 325",
      "actualPrice": "Rs. 500",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/6/11/d60d9cbe-6227-4c90-88fe-0d8420cae5f01591832378375-1.jpg",
      "brand": "HOSLEY",
      "title": "Set Of 3 Glass Scented Candles",
      "price": "Rs. 720",
      "actualPrice": "Rs. 900",
      "offer": "(20% OFF)"
    }
  ]

  Aromas.map(function(el){
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
  
  
    localStorage.setItem("AromasHome",JSON.stringify(Aromas))
    console.log("inside")
  
  })
 
