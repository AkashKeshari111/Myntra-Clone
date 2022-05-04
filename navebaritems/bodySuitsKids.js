import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Bodysuits = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17261666/2022/4/20/6f37f0c4-380f-4596-a4fa-f8153966906d1650449000330BUMZEEInfantGirlsPeachWhitePrintedPureCottonBodysuitwithHair1.jpg",
      "brand": "BUMZEE",
      "title": "Infant Girls Cotton Bodysuit",
      "price": "Rs. 398",
      "offer": "(Rs. 301 OFF)",
      "actualPrice": "Rs. 699"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16892758/2022/4/27/d52013e8-6e19-410d-9c0b-cbc30242ae0b1651036883768-HM-Kids-Girls-White--Blue-2-pack-long-sleeved-bodysuits-3141-2.jpg",
      "brand": "H&M",
      "title": "2-pack long-sleeved bodysuits",
      "price": "Rs. 849",
      "offer": "(15% OFF)",
      "actualPrice": "Rs. 999"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16396298/2021/12/7/89cf67c4-1937-4b32-8dcd-1c5fb717200b1638873680715Fancydresscostume1.jpg",
      "brand": "H&M",
      "title": "Girls Fancy Dress Costume",
      "price": "Rs. 974",
      "offer": "(25% OFF)",
      "actualPrice": "Rs. 1299"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17261664/2022/4/20/dda64510-2db2-43dc-b03d-ea1a7ede31cc1650448998885BUMZEEInfantGirlsPinkRedPrintedPureCottonBodysuitWithHairBan1.jpg",
      "brand": "BUMZEE",
      "title": "Infant Girls Printed Bodysuit",
      "price": "Rs. 398",
      "offer": "(Rs. 301 OFF)",
      "actualPrice": "Rs. 699"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17059486/2022/2/5/c0afc50a-dfc4-4bf8-a3c5-c3a3d787d5fb1644045090577ClothingSet1.jpg",
      "brand": "MINI KLUB",
      "title": "Girls Bodysuit with Stocking",
      "price": "Rs. 1299",
      "offer": null,
      "actualPrice": null
    }
  ]


  Bodysuits.map(function(el){
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
  
  
    localStorage.setItem("BodysuitsKids",JSON.stringify(Bodysuits))
    console.log("inside")
  
  })
 
