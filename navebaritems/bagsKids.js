import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Bags  = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16343552/2022/3/3/878f12b7-087c-47a6-aa14-33309763cc8c1646299241258-Puma-Unisex-Kids-Backpacks-2141646299240492-1.jpg",
      "brand": "Puma",
      "title": "Kids x Smiley World Backpack",
      "price": "Rs. 1799",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15699320/2021/10/1/e79a0a93-c1b4-43bb-b891-52c41d084a501633071809593SmilyKiddosBackpackGrey1.jpg",
      "brand": "Smily Kiddos",
      "title": "Graphic Backpack",
      "price": "Rs. 1393",
      "actualPrice": "Rs. 1990",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16343548/2022/2/23/d829e45d-a5ee-4416-a459-c13760c7b67d1645601050974-Puma-Unisex-Kids-Backpacks-8401645601050356-1.jpg",
      "brand": "Puma",
      "title": "Kids Fruits Backpack",
      "price": "Rs. 1999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15699328/2021/10/1/5c24551a-f12d-400b-bd6c-3794271a9c9d1633071988176SmilyKiddosBackpackBlackGreen1.jpg",
      "brand": "Smily Kiddos",
      "title": "Graphic Backpack",
      "price": "Rs. 1393",
      "actualPrice": "Rs. 1990",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15311510/2021/8/30/fa9291bd-31ee-43cc-972b-9d5eecd9eb251630347799247Backpacks1.jpg",
      "brand": "Genius",
      "title": "Kids Graphic Printed Backpack",
      "price": "Rs. 1244",
      "actualPrice": "Rs. 1915",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15173020/2021/8/23/80dff17b-7c0a-4375-a750-286a394db8a71629699685029-HRX-by-Hrithik-Roshan-Unisex-Kids-Backpacks-3471629699684490-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Unisex U-17 Backpack",
      "price": "Rs. 899",
      "actualPrice": "Rs. 1799",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15173026/2021/8/23/e30327e2-dc4a-4bbf-a009-1a8a5d0330b51629699725744-HRX-by-Hrithik-Roshan-Unisex-Kids-Backpacks-1811629699725286-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Unisex U-17 Backpack",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14084952/2021/4/15/f52a72c5-28b9-4518-9bb8-726f50dc4a111618484397714SmilyKiddosUnisexKidsBlueCamouflage1.jpg",
      "brand": "Smily Kiddos",
      "title": "Camouflage Backpacks",
      "price": "Rs. 1393",
      "actualPrice": "Rs. 1990",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15311518/2021/8/30/9d3745d2-7307-4d00-a60d-bcadd1d785161630347749827Backpacks1.jpg",
      "brand": "Genius",
      "title": "Unisex Kids Printed Backpack",
      "price": "Rs. 1149",
      "actualPrice": "Rs. 1619",
      "offer": "(29% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15715222/2021/10/1/d6281352-774b-470d-97b8-1c2e2bda0eba1633104235259SmilyKiddosUShapeBackpack-BLUE1.jpg",
      "brand": "Smily Kiddos",
      "title": "Graphic Backpack",
      "price": "Rs. 1679",
      "actualPrice": "Rs. 2399",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15699322/2021/10/1/1edd6945-c844-48bf-bdcf-3a7d94caf08e1633071849277SmilyKiddosBackpackFutureBlueYellow1.jpg",
      "brand": "Smily Kiddos",
      "title": "Graphic Printed Backpack",
      "price": "Rs. 1393",
      "actualPrice": "Rs. 1990",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15173022/2021/8/23/3022d42c-b0da-47a2-ab1a-f70ea9d3edc41629699684772-HRX-by-Hrithik-Roshan-Unisex-Kids-Backpacks-8601629699684180-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Unisex U-17 Backpack",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14178072/2021/4/24/5578e07e-7b77-4122-adf9-445028edd2f41619249308716SmilyKiddosUnisexKidsBlackGraphic1.jpg",
      "brand": "Smily Kiddos",
      "title": "Unisex Kids Graphic Backpack",
      "price": "Rs. 1819",
      "actualPrice": "Rs. 2599",
      "offer": "(30% OFF)"
    }
  ]

  Bags.map(function(el){
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
  
  
    localStorage.setItem("BagsKids",JSON.stringify(Bags))
    console.log("inside")
  
  })
 
