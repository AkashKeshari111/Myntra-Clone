import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let SmartWearables1 = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14923600/2021/7/24/0ee445ce-82e0-4ce5-996d-3bc060141a0d1627105195230FitbitLuxeBlackGraphiteStainlessSteel1.jpg",
      "brand": "Fitbit",
      "title": "Solid luxe Bracelet Style Fitness Band",
      "price": "Rs. 10599",
      "actualPrice": "Rs. 10999",
      "offer": "(Rs. 400 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13066978/2020/11/24/bbff3258-163d-475a-9088-7842bb6f03741606198368935-GOQii-Vital-30-body-temperature-tracker-with-3-months-person-1.jpg",
      "brand": "GOQii",
      "title": "Vital 3.0 Smart Fitness Band",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 3999",
      "offer": "(Rs. 2500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15031916/2021/8/5/fd5af935-0323-4aa9-9e5d-cf79eaf70c671628138506158FitbitLuxeOrchidPlatinumStainlessSteel1.jpg",
      "brand": "Fitbit",
      "title": "Solid Luxe Fitness Band",
      "price": "Rs. 10699",
      "actualPrice": "Rs. 10999",
      "offer": "(Rs. 300 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15951116/2021/10/30/936f33a3-a60e-4327-a469-d0cd025634a61635579842434FitbitUnisexWhiteSolidFitnessBand1.jpg",
      "brand": "Fitbit",
      "title": "Unisex Solid Fitness Band",
      "price": "Rs. 13999",
      "actualPrice": "Rs. 14999",
      "offer": "(Rs. 1000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15951114/2021/10/30/b5a4e8f4-8bf1-4c18-9146-f242f59c59f71635579842597FitbitUnisexBlackSolidFitnessBand1.jpg",
      "brand": "Fitbit",
      "title": "Unisex Solid Fitness Band",
      "price": "Rs. 13999",
      "actualPrice": "Rs. 14999",
      "offer": "(Rs. 1000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/12/fa1b1b9b-b9ac-4c0c-816c-02d45fa7447c1613125433526-1.jpg",
      "brand": "Fitbit",
      "title": "Unisex Inspire 2 Fitness Band",
      "price": "Rs. 6999",
      "actualPrice": "Rs. 7999",
      "offer": "(Rs. 1000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14937414/2021/9/17/cf4054e8-ac07-4c8c-9b07-15fada3f97f11631859866205-NOISE-Blue-Zest-5W-Bluetooth-Wireless-Speaker-94216318598656-1.jpg",
      "brand": "NOISE",
      "title": "Zest 5 W Bluetooth Speaker",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 2999",
      "offer": "(Rs. 1700 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484430/2021/9/21/08b0bf70-7ac0-408e-bf78-4554a454ddd01632211185823-realme-Green-Buds-Wireless-2-Neo-Bluetooth-Headphones-780163-1.jpg",
      "brand": "Realme",
      "title": "Buds Wireless 2 Neo Headphones",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 2499",
      "offer": "(Rs. 1300 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15018198/2021/8/5/02cd2b4e-3b3e-4eef-9224-2f40e81155501628187915241SWADESISTUFFUnisexBlackDialBlackStrapsDigitalAutomaticWatch1.jpg",
      "brand": "SWADESI STUFF",
      "title": "Unisex Automatic Watch",
      "price": "Rs. 499",
      "actualPrice": "Rs. 2495",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11888908/2020/6/1/c1f77b16-cdc3-4442-b4b8-dfafd76af3471591001971457-boAt-Rockerz-560-Over-Ear-Wireless-Headphone-with-Immersive--1.jpg",
      "brand": "boAt",
      "title": "Rockerz 560 Wireless Headphone",
      "price": "Rs. 1699",
      "actualPrice": "Rs. 3990",
      "offer": "(Rs. 2291 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13960824/2021/3/29/49126165-26c5-49b8-b062-f23e8fc3df731616996931978-Realme-Yellow--Black-Buds-Wireless-Pro-with-ANC-RMA208-23161-1.jpg",
      "brand": "Realme",
      "title": "Buds Wireless Pro with ANC",
      "price": "Rs. 3499",
      "actualPrice": "Rs. 5999",
      "offer": "(Rs. 2500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484432/2021/9/21/ccddbedc-1ff2-4378-9789-ed129560db251632211239810-realme-Black-Buds-Wireless-2-Neo-Bluetooth-Headphones-651632-1.jpg",
      "brand": "Realme",
      "title": "Buds Wireless 2 Neo Headphones",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 2499",
      "offer": "(Rs. 1300 OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14937418/2021/9/17/29071f5a-160a-4891-893e-e6fb25cb53451631859871429-NOISE-Black-Solid-Zest-5W-Bluetooth-Wireless-Speaker-2251631-1.jpg",
      "brand": "NOISE",
      "title": "Zest 5W Bluetooth Speaker",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 2999",
      "offer": "(Rs. 1700 OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13874858/2021/6/17/27bcdfbf-0be3-4039-a804-af27db32d5da1623885677027-UNIGEN-AUDIO-Unisex-White-Solid-True-Wireless-Earbuds-414162-1.jpg",
      "brand": "UNIGEN AUDIO",
      "title": "Unisex Solid True Wireless Earbuds",
      "price": "Rs. 999",
      "actualPrice": "Rs. 2999",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13862504/2022/4/13/59956070-4528-407d-a056-67496af639001649838579725-BOULT-AUDIO-AirBass-Combuds-True-Wireless-Bluetooth-Headset--1.jpg",
      "brand": "BOULT AUDIO",
      "title": "Combuds True Wireless - Black",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 4999",
      "offer": "(Rs. 3700 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15037938/2021/8/5/dc420055-374d-4ee4-a88a-0e7b8c68ca561628154389419AISLINMetalPadRim-LessUnisexRoundSunglasses1.jpg",
      "brand": "AISLIN",
      "title": "Unisex Black Round Sunglasses",
      "price": "Rs. 545",
      "actualPrice": "Rs. 1525",
      "offer": "(Rs. 980 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11888906/2021/9/30/1948e33e-94f1-4ccc-911d-ad60af338c671632978546421-boAt-Rockerz--450-M-Hazel-Beige-Wireless-Headphone-with-Imme-1.jpg",
      "brand": "boAt",
      "title": "Rockerz 450 Headphones",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 3990",
      "offer": "(Rs. 2491 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14544990/2021/6/24/2423f42c-0267-41a0-a817-7e6d5cedc2ba1624537437065CortinaBluePrintedProtectiveLuggageCover1.jpg",
      "brand": "Cortina",
      "title": "Protective Luggage Cover",
      "price": "Rs. 899",
      "actualPrice": "Rs. 1898",
      "offer": "(Rs. 999 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15542098/2021/9/22/7dcc4012-cd33-474f-a18e-4f67a86cf6411632287663466-Realme-Unisex-Speakers-311632287663236-1.jpg",
      "brand": "Realme",
      "title": "Cobble 5W Bluetooth Speaker",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 2499",
      "offer": "(Rs. 1200 OFF)"
    }
  ]

  SmartWearables1.map(function(el){
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
  
  
    localStorage.setItem("SmartWearables1Women",JSON.stringify(SmartWearables1))
    console.log("inside")
  
  })
 
