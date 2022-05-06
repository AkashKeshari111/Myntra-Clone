import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let SmartWearables = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14858178/2021/7/23/fed66508-7823-41f7-ab0e-54643ab2ea141627049284831-AMAZFIT-GTS-2e-SMART-WATCH-MOSS-GREEN-2771627049284631-1.jpg",
      "brand": "Amazfit",
      "title": "GTS 2E Smart Watch",
      "price": "Rs. 9999",
      "actualPrice": "Rs. 14999",
      "offer": "(Rs. 5000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13285260/2021/1/18/78527280-5c83-49a3-8a85-db44956406ef1610967137060-CrossBeats-Unisex-Gold-Toned-Digital-Smart-Watch-CB-IGNITE-5-1.jpg",
      "brand": "CrossBeats",
      "title": "Digital Smart Watch",
      "price": "Rs. 2499",
      "actualPrice": "Rs. 9999",
      "offer": "(Rs. 7500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11987192/2020/9/9/5f14d543-345d-40c7-9dc0-1b16bd028de61599657332772-Fitbit-Versa2-Petal--Copper-Rose-Smartwatch-with-Heart-Rate--1.jpg",
      "brand": "Fitbit",
      "title": "Versa 2 Smartwatch",
      "price": "Rs. 13499",
      "actualPrice": "Rs. 14999",
      "offer": "(Rs. 1500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11302744/2020/1/9/ecbbf2ca-c0d1-47a8-a25b-d55f183fe5b71578570316300-Amazfit-Unisex-Orange-Huami-GTS-Smartwatch-A1914-90115785703-1.jpg",
      "brand": "Amazfit",
      "title": "Unisex Huami GTS Smartwatch",
      "price": "Rs. 5999",
      "actualPrice": "Rs. 12999",
      "offer": "(Rs. 7000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13234940/2022/1/20/85ac6d23-0374-4bee-a28c-92aef67b4a051642644688401-FitSpark-Unisex-Piano-Black-Eclipse-14-Super-Retina-Display--2.jpg",
      "brand": "FitSpark",
      "title": "Unisex Eclipse HD Smartwatch",
      "price": "Rs. 2999",
      "actualPrice": "Rs. 5990",
      "offer": "(Rs. 2991 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/22/b64ad159-21e3-479b-80c9-37f053d756141571696203491-1.jpg",
      "brand": "NOISE",
      "title": "Colorfit Pro2 Smart Watch",
      "price": "Rs. 2799",
      "actualPrice": "Rs. 4999",
      "offer": "(Rs. 2200 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14282458/2021/5/18/0b860bdb-8696-44d1-92e4-2319d07308a11621321271683-Fitbit-Unisex-Grey-Sense-Smart-Watches-FB512BKBK-95116213212-1.jpg",
      "brand": "Fitbit",
      "title": "Unisex Sense Smart Watches",
      "price": "Rs. 22499",
      "actualPrice": "Rs. 22999",
      "offer": "(Rs. 500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14858168/2021/7/23/d59dab34-7ab2-4055-8770-73ebba12ab091627049173559-AMAZFIT-GTS-2e-SMART-WATCH-LILAC-PURPLE-8791627049173360-1.jpg",
      "brand": "Amazfit",
      "title": "GTS 2E Smart Watch",
      "price": "Rs. 9999",
      "actualPrice": "Rs. 14999",
      "offer": "(Rs. 5000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/14/6e086c6f-10b2-45a7-9add-04612485f6ee1607962591764-1.jpg",
      "brand": "NOISE",
      "title": "Unisex ColorFit Pro 3 Smartwatch",
      "price": "Rs. 3999",
      "actualPrice": "Rs. 5999",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/14/7031e27a-3f05-472b-8f92-bb86707b228c1607960084926-1.jpg",
      "brand": "NOISE",
      "title": "Unisex ColorFit Pro 3 1.55 Inch Display Smartwatch with 5.0 Bluetooth Version",
      "price": "Rs. 3999",
      "actualPrice": "Rs. 5999",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15708818/2021/10/2/3f64c96b-6d0c-4b89-b9ec-c904c2a4ee801633180510709HAMMERUnisexBlackPulse20SmartWatchwithCallingandMusic1.jpg",
      "brand": "HAMMER",
      "title": "Unisex Pulse 2.0 Smart Watch with Calling and Music",
      "price": "Rs. 3499",
      "actualPrice": "Rs. 13330",
      "offer": "(Rs. 9831 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14281874/2021/5/17/121d3d73-6d77-434d-90b2-9b3950df330a1621232488316-Fitbit-Versa-3-BlackBlack-Aluminum-4771621232487887-1.jpg",
      "brand": "Fitbit",
      "title": "Unisex Versa 3 Smart Watch",
      "price": "Rs. 18499",
      "actualPrice": "Rs. 18999",
      "offer": "(Rs. 500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10769100/2019/10/17/5c741d75-f365-4d92-9ad7-88a9a8473cc41571294527910-Noise--Teal-Green-ColorFit-Pro-2-Active-Smartwatch-395157129-1.jpg",
      "brand": "NOISE",
      "title": "Pro 2 Smartwatch",
      "price": "Rs. 2799",
      "actualPrice": "Rs. 4999",
      "offer": "(Rs. 2200 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15040574/2021/8/16/93930149-cfb5-47af-8d7f-c4f98e471dbc1629095134249-realme-Watch-2Black-Strap-5751629095134044-1.jpg",
      "brand": "Realme",
      "title": "Unisex SmartWatch 2",
      "price": "Rs. 2999",
      "actualPrice": "Rs. 3999",
      "offer": "(Rs. 1000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16195312/2021/11/22/87c93c85-cd78-4359-9abe-497b8e9246c71637588315348-Noise-X-Fit-Smartwatch---Jet-Black-1381637588315167-1.jpg",
      "brand": "NOISE",
      "title": "X-Fit Smartwatch",
      "price": "Rs. 2999",
      "actualPrice": "Rs. 5999",
      "offer": "(Rs. 3000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15665102/2021/9/28/b9646494-db94-4ba5-9698-4515a3eaa76b1632834478347SwissDesignUnisexBlue1.jpg",
      "brand": "Swiss Design",
      "title": "Rectangle Sunglasses",
      "price": "Rs. 449",
      "actualPrice": "Rs. 1499",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11656280/2020/3/12/d2a9f46a-69e5-461a-9963-77ee8272ac4f1584016079055-JBL-T100TWS-Pure-Bass-In-Ear-Wireless-Headphones-with--17-Ho-1.jpg",
      "brand": "JBL",
      "title": "T100TWS Wireless Headphones",
      "price": "Rs. 4489",
      "actualPrice": "Rs. 7999",
      "offer": "(Rs. 3510 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7827827/2018/11/27/7dc61e9d-0a92-4efe-a568-b98ea3a3dacf1543314876687-JBL-T500BT-Powerful-Bass-Wireless-On-Ear-Headphones-with-Mic-1.jpg",
      "brand": "JBL",
      "title": "On-Ear Headphones with Mic",
      "price": "Rs. 2999",
      "actualPrice": "Rs. 3799",
      "offer": "(Rs. 800 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13175482/2021/1/18/452c5d2c-3cf2-46bb-aa48-673f45b12ae51610967052981-CrossBeats-Unisex-Navy-Blue-EDGE-True-Wireless-In-Ear-Earpho-1.jpg",
      "brand": "CrossBeats",
      "title": "Unisex EDGE True Wireless In-Ear Earphones",
      "price": "Rs. 2299",
      "actualPrice": "Rs. 12999",
      "offer": "(Rs. 10700 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13602280/2021/2/6/ad133674-49e8-4161-9fa2-27673cc5d98f1612609818713macmeriseGreyBlackAvengersEndgameSuitXiaomiPocoX3BackCover1.jpg",
      "brand": "macmerise",
      "title": "Avengers Endgame Suit Xiaomi Poco X3 Back Cover",
      "price": "Rs. 499",
      "actualPrice": "Rs. 699",
      "offer": "(Rs. 200 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/15/23e79c40-be3c-443d-8f1e-1650fc8220871610708026157-1.jpg",
      "brand": "Realme",
      "title": "Unisex Solid Buds Air Pro",
      "price": "Rs. 3999",
      "actualPrice": "Rs. 5999",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/4/c0af74fa-7b95-4126-b649-8dfcc88dcb4c1612430690924-1.jpg",
      "brand": "macmerise",
      "title": "Printed Rusted Captains Shield Xiaomi Poco X2 Back Cover",
      "price": "Rs. 499",
      "actualPrice": "Rs. 699",
      "offer": "(Rs. 200 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14503126/2021/6/28/748ef327-3d80-4af3-9d33-5a3092a3c2861624878983940-Timex-Unisex-Grey-Dial--Silver-Toned-Stainless-Steel-Bracele-1.jpg",
      "brand": "Timex",
      "title": "Unisex Digital Watch",
      "price": "Rs. 2098",
      "actualPrice": "Rs. 5995",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15563036/2021/9/21/842fbc3e-f1d1-422c-9da7-1ffeba77e6871632243077156Sunglasses1.jpg",
      "brand": "SCAGLIA",
      "title": "Anti Reflective Sunglasses",
      "price": "Rs. 431",
      "actualPrice": "Rs. 1599",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15624552/2021/9/25/8331ec62-2c07-44c0-a3f8-ec4fa747e3381632577411260ENRICORazorUVProtectedRoundUnisexSunglasses1.jpg",
      "brand": "ENRICO",
      "title": "Unisex Round Sunglasses",
      "price": "Rs. 1014",
      "actualPrice": "Rs. 1950",
      "offer": "(48% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11249768/2020/2/3/51b126a6-9d4f-4183-81f3-a6479f400ce61580726683434-Swatch-Unisex-Watches-7841580726681876-1.jpg",
      "brand": "Swatch",
      "title": "Unisex Swiss Analogue Watch",
      "price": "Rs. 11500",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15561102/2021/9/21/a18e0d79-e0bd-4f69-9649-bfe300eb04801632239095941SCAGLIAUnisexBrown1.jpg",
      "brand": "SCAGLIA",
      "title": "Unisex Wayfarer Sunglasses",
      "price": "Rs. 383",
      "actualPrice": "Rs. 1599",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484392/2021/9/21/70d68946-db74-4ab2-90f4-27353fc529061632211166187-Realme-Buds-Air-2-with-Active-Noise-Cancellation-True-Wirele-1.jpg",
      "brand": "Realme",
      "title": "Air 2 True Wireless Headset",
      "price": "Rs. 3299",
      "actualPrice": "Rs. 4999",
      "offer": "(Rs. 1700 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15875952/2021/10/20/b691e1bf-cd65-497a-9f2f-124c6519a68d1634727424362FloydUnisexBlack1.jpg",
      "brand": "Floyd",
      "title": "Unisex Round Sunglasses with UV Protected Lens",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15795916/2021/10/11/d70033c2-84da-4211-863c-48595095d39b1633950361425AviatorSunglasses1.jpg",
      "brand": "Ted Smith",
      "title": "Unisex Aviator Sunglasses",
      "price": "Rs. 884",
      "actualPrice": "Rs. 2390",
      "offer": "(63% OFF)"
    }
  ]

  SmartWearables.map(function(el){
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
  
  
    localStorage.setItem("SmartWearablesWomen",JSON.stringify(SmartWearables))
    console.log("inside")
  
  })
 
