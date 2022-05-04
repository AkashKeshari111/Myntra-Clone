import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Dresses = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/fdb171ec-546c-4589-a904-9ed6d925793b1543044594769-1.jpg",
      "brand": "Madame",
      "title": "Women Striped Drop-Waist Dress",
      "price": "Rs. 2599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/17fa3c4c-fa58-4446-98b2-11e96bdbf3a61620124841086-1.jpg",
      "brand": "Madame",
      "title": "Printed Midi A-Line Dress",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6978659/2018/8/20/92d4b826-a6fd-4a40-bfb1-e068824f10381534741660431-Madame-Women-Dresses-8091534741660228-1.jpg",
      "brand": "Madame",
      "title": "Women Printed Maxi Dress",
      "price": "Rs. 2999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15201456/2021/8/19/fb84db91-2ecc-4b62-99d8-880af3ea81291629375046844MadameBeigeCheckedCrepeShirtDress1.jpg",
      "brand": "Madame",
      "title": "Checked Crepe Shirt Dress",
      "price": "Rs. 1079",
      "actualPrice": "Rs. 2699",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17178278/2022/3/9/0af68bea-5c44-4368-a243-efd3074f0d261646828208387LoungePantsMBeautifulWomenNightsuitsMBeautifulWomenNightsuit1.jpg",
      "brand": "Madame",
      "title": "Women Solid Maxi Dress",
      "price": "Rs. 3499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16121484/2021/11/17/49f42cb2-e34b-40fe-8997-f499da3705871637149830095MadameGreenDress1.jpg",
      "brand": "Madame",
      "title": "Layered Dress",
      "price": "Rs. 919",
      "actualPrice": "Rs. 2299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/d11b0ab2-0e70-4ec0-a98e-6255d417f1311620125039891-1.jpg",
      "brand": "Madame",
      "title": "Printed Fit and Flare Dress",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11293050/2020/1/22/7e22ab09-ab9d-4641-9ddf-69d885ef69e11579687745016-Madame-Women-Sea-Green-Printed-Fit-and-Flare-Dress-726157968-1.jpg",
      "brand": "Madame",
      "title": "Printed Fit & Flare Dress",
      "price": "Rs. 1559",
      "actualPrice": "Rs. 2599",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17446510/2022/3/9/a86bc641-2047-4c6c-a5cf-b92b0fa3d4d21646822961641ZinkLondonGreenAnimalDress1.jpg",
      "brand": "Zink London",
      "title": "Floral Empire Dress",
      "price": "Rs. 1839",
      "actualPrice": "Rs. 2299",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13748770/2021/3/3/66b3d5fe-c1b7-4404-bbc2-bf366db208831614763478473-Madame-Women-Sea-Green-Solid-A-Line-Dress-3171614763477142-1.jpg",
      "brand": "Madame",
      "title": "Solid A-Line Dress",
      "price": "Rs. 1379",
      "actualPrice": "Rs. 2299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13748776/2021/3/3/9dec4613-7dba-42ed-9048-059946d47bc31614764288358-Madame-Women-Purple-Solid-A-Line-Dress-5201614764286111-1.jpg",
      "brand": "Madame",
      "title": "Solid A-Line Dress",
      "price": "Rs. 1379",
      "actualPrice": "Rs. 2299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17178288/2022/3/9/54cbf167-9f88-4dd8-a29f-f334b9f7d2381646828159232LoungePantsMBeautifulWomenNightsuitsMBeautifulWomenNightsuit1.jpg",
      "brand": "Madame",
      "title": "Women Embroidered Maxi Dress",
      "price": "Rs. 3299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15751500/2021/10/6/b05f572a-8600-4b2a-9759-6ff9b7ed1cc91633517005745MadameTurquoiseBlueDress1.jpg",
      "brand": "Madame",
      "title": "Flutter Sleeved Dress",
      "price": "Rs. 919",
      "actualPrice": "Rs. 2299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/cf8c115e-24b1-45bb-9ba8-b86192a0b75d1620124837630-1.jpg",
      "brand": "Madame",
      "title": "Printed Midi A-Line Dress",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17240254/2022/2/22/d15e2647-6e52-41d6-84b5-4809cf009b581645515626839CODEbyLifestyleBlueFloralDress1.jpg",
      "brand": "CODE by Lifestyle",
      "title": "Women Blue Floral Dress",
      "price": "Rs. 2499",
      "actualPrice": null,
      "offer": null
    }
  ]

  Dresses.map(function(el){
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
  
  
    localStorage.setItem("DressesWomen",JSON.stringify(Dresses))
    console.log("inside")
  
  })
 
