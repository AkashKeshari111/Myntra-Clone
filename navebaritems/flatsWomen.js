import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Flats = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10332219/2019/8/30/faba247e-5f1b-4694-801e-b18129c33ddd1567172536837-Taavi-Women-Rust-Coloured-Printed-Mules-151567172535985-1.jpg",
      "brand": "Taavi",
      "title": "Women Ikat Mules",
      "price": "Rs. 854",
      "actualPrice": "Rs. 1899",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15682024/2021/11/25/ce6f33c8-26e3-4fe9-868e-4c91351a9be41637830952702-Shoetopia-Women-Peach-Coloured-Printed-Ballerinas-Flats-8816-7.jpg",
      "brand": "Shoetopia",
      "title": "Women Ballerinas Flats",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12384416/2020/9/1/12106de8-7db9-4bb0-8611-b8055c1184451598963814316ShoetopiaWomenPinkSolidBallerinas1.jpg",
      "brand": "Shoetopia",
      "title": "Women Ballerinas",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11365474/2020/2/11/79b4d4bb-67ca-40fb-a7a6-cfbdf6d7c7321581423071776-Marc-Loire-Women-Grey--Pink-Woven-Design-Ballerinas-59915814-1.jpg",
      "brand": "Marc Loire",
      "title": "Women Woven Design Ballerinas",
      "price": "Rs. 999",
      "actualPrice": "Rs. 1998",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14713152/2021/9/22/945e8ab3-159d-47fc-8efd-a994b9ec80131632302629066-Shoetopia-Women-White-Open-Toe-Flats-with-Bows-1281632302628-7.jpg",
      "brand": "Shoetopia",
      "title": "Women Open Toe Flats",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12721074/2021/2/17/fbaa44e5-fecd-420a-aa94-c41c88091f401613544338528-Shezone-Women-White-Printed-Ballerinas-7951613544337037-1.jpg",
      "brand": "Shezone",
      "title": "Women Ballerinas",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/21/b4e6a311-2d00-4aa7-9d37-8476a54edd8f1582236941065-1.jpg",
      "brand": "ZAPATOZ",
      "title": "Women Open Toe Flats",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269831/2019/5/22/8c440396-597b-4f6b-ac76-60a2784f33fb1558510414742-DressBerry-Women-Flats-221558510413292-1.jpg",
      "brand": "DressBerry",
      "title": "Women Striped Flats",
      "price": "Rs. 854",
      "actualPrice": "Rs. 1899",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1424833/2022/1/4/232c2c5a-009e-4092-8e18-05590d92bd9c1641295756561-DressBerry-Women-Beige-Pointy-Toed-Flats-2281641295756213-1.jpg",
      "brand": "DressBerry",
      "title": "Women Pointy-Toed Flats",
      "price": "Rs. 809",
      "actualPrice": "Rs. 1799",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7326288/2018/10/6/37e8316c-4ca8-45e5-97ba-a78530b111e31538803609384-Street-Style-Store-Women-Black-Woven-Design-Open-Toe-Flats-9681538803609216-1.jpg",
      "brand": "Street Style Store",
      "title": "Women Open Toe Flats",
      "price": "Rs. 799",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13308810/2021/4/1/54cee3aa-36d9-4fba-b135-a95473ae26d71617274509272-DressBerry-Women-Mustard-Yellow-Solid-Ballerinas-with-Suede--1.jpg",
      "brand": "DressBerry",
      "title": "Women Suede Finish Ballerinas",
      "price": "Rs. 1699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15847808/2021/10/19/c52e09d7-e67b-4483-9c72-d93669dcf6041634617556829ShezoneWomenGreyOpenToeFlatswithBows1.jpg",
      "brand": "Shezone",
      "title": "Women Open Toe Flats",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15847834/2021/10/19/b68c57e6-d8d3-4a73-9fd5-c35fcdf7c2411634620389211ShezoneWomenCream-ColouredBallerinaswithLaserCutsFlats1.jpg",
      "brand": "Shezone",
      "title": "Women Ballerinas Flats",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12768990/2020/11/9/7e67b1b9-4b20-4f28-89cd-41bb8639db751604902933023VishudhWomenGunmetal-TonedSolidOpenToeFlats1.jpg",
      "brand": "Vishudh",
      "title": "Women Open Toe Flats",
      "price": "Rs. 549",
      "actualPrice": "Rs. 999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/3/25/12d7c775-f920-4c89-81ac-f07f6c342ee41553491998560-1.jpg",
      "brand": "Shoetopia",
      "title": "Women Solid Mules",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16561916/2022/3/8/332da2c1-fd09-4549-8f86-1449da89ead11646709222018LaFilleBlackPUStructuredSlingBag1.jpg",
      "brand": "LaFille",
      "title": "PU Structured Sling Bag",
      "price": "Rs. 390",
      "actualPrice": "Rs. 1699",
      "offer": "(77% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16519670/2021/12/15/e92938a1-fd35-44a4-b360-f9c6dd98cb6e1639547926817borseleleWomenRustTextured1.jpg",
      "brand": "borse lele",
      "title": "Textured Tasselled Backpack",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17092210/2022/2/9/1bb90137-ca71-4f0a-9a40-c530e2ae9eb51644399627931KrypticWomenOrangeBlackPackOf2CottonPyjamas1.jpg",
      "brand": "Kryptic",
      "title": "Women Pack Of 2 Pyjamas",
      "price": "Rs. 989",
      "actualPrice": "Rs. 2248",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16519672/2021/12/15/1345b391-ac69-4d62-b3db-aad97c1fabec1639550757324borseleleWomenBrownTextured1.jpg",
      "brand": "borse lele",
      "title": "Women Textured Backpack",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16519668/2021/12/15/82773e56-6bba-4526-ae39-41f3e7dbb1fc1639547900092borseleleWomenGreenTextured1.jpg",
      "brand": "borse lele",
      "title": "Backpack",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15582794/2021/12/23/e25f83f9-60c6-4e3b-b1f0-ac4c6d6b2fd31640259110388-DressBerry-Women-Wallets-6211640259110033-1.jpg",
      "brand": "DressBerry",
      "title": "Floral PU Three Fold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16327568/2021/12/2/8463dab0-09ac-4bab-9df6-6e11e931a38816384235167467ThreadsWomensCrepeMultiColorDigitalPrintStraightKurtaPackOf1.jpg",
      "brand": "7Threads",
      "title": "Pack Of 3 Printed Crepe Kurtas",
      "price": "Rs. 1281",
      "actualPrice": "Rs. 5339",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16301060/2021/11/30/dee8dd8a-f138-4b4a-8547-27230649007c1638256770510Handbags1.jpg",
      "brand": "Exotic",
      "title": "PU Structured Sling Bag",
      "price": "Rs. 559",
      "actualPrice": "Rs. 1399",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16317924/2021/12/1/ad761052-2024-492d-a826-c5279593952b1638346047593ExoticWomenTanSelfDesign1.jpg",
      "brand": "Exotic",
      "title": "Two Fold Wallet",
      "price": "Rs. 373",
      "actualPrice": "Rs. 1099",
      "offer": "(66% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16432710/2021/12/9/aa40dcd1-9d75-4077-b8c2-f53a5dfff2841639052781887Socks1.jpg",
      "brand": "Soxytoes",
      "title": "Unisex Ankle-Length Socks",
      "price": "Rs. 199",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16889664/2022/1/20/aea80c8f-8859-4bbc-a3e2-46933f164bc01642677695774MAMMONPinkColourblockedPUStructuredHandheldBagwithTasselled1.jpg",
      "brand": "MAMMON",
      "title": "PU Structured Handheld Bag with Tasselled",
      "price": "Rs. 340",
      "actualPrice": "Rs. 1700",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17092996/2022/2/9/a2b29d56-003a-4417-8499-cab0c97fd4751644399586127KrypticWomenBlueGreenPackOf2CottonPyjamas1.jpg",
      "brand": "Kryptic",
      "title": "Women Pack Of 2 Pyjamas",
      "price": "Rs. 989",
      "actualPrice": "Rs. 2248",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16425106/2021/12/9/cf4233fe-60ae-41dd-9d98-905711d8c6cf1639033207843BellissaWomenGreyPrinted1.jpg",
      "brand": "Bellissa",
      "title": "Floral Three Fold Wallet",
      "price": "Rs. 650",
      "actualPrice": "Rs. 2099",
      "offer": "(69% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16366862/2021/12/4/003d6598-d8e8-4eaf-ad00-ad7d20bbdabe1638602121124SHININGSTARGreyPUStructuredHandheldBagwithTasselled1.jpg",
      "brand": "SHINING STAR",
      "title": "Women Handheld Bag",
      "price": "Rs. 1297",
      "actualPrice": "Rs. 2199",
      "offer": "(41% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16317932/2021/12/1/1cc18a7a-0524-4c9c-8078-bac5b55b1d171638346054978ExoticWomenPinkSelfDesign1.jpg",
      "brand": "Exotic",
      "title": "Striped Envelope Wallet",
      "price": "Rs. 373",
      "actualPrice": "Rs. 1099",
      "offer": "(66% OFF)"
    }
  ]



  Flats.map(function(el){
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
  
  
    localStorage.setItem("FlatsWomen",JSON.stringify(Flats))
    console.log("inside")
  
  })
 
