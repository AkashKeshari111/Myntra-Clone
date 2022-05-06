import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Bra = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475743/2019/4/4/e33218ab-48be-441e-a9b7-e0ae157ceed71554375840623-HRX-by-Hrithik-Roshan-Charcoal-Solid-Non-Wired-Lightly-Padde-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Seamless Padded Sports Bra",
      "price": "Rs. 389",
      "actualPrice": "Rs. 1299",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475737/2019/4/4/9893a421-b3e3-4612-b3ab-87d90f7c67cc1554375827892-HRX-by-Hrithik-Roshan-Green-Self-Design-Non-Wired-Lightly-Pa-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Seamless Padded Sports Bra",
      "price": "Rs. 844",
      "actualPrice": "Rs. 1299",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475771/2022/4/11/ea86f5c0-17f9-4636-8276-dc737cd5fabc1649655561090-HRX-by-Hrithik-Roshan-Seamless-Green-Lightly-Padded-Rapid-dr-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Bra",
      "price": "Rs. 584",
      "actualPrice": "Rs. 1299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475759/2022/3/22/f9167cda-316f-4966-b8b9-eee716107fbf1647944596697-HRX-by-Hrithik-Roshan-Seamless-Women-Coral-Orange-Rapid-Dry--1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Seamless Rapid Dry Yoga Bra",
      "price": "Rs. 439",
      "actualPrice": "Rs. 1099",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9050703/2019/5/29/7b53bebc-4ff1-435b-b60c-7c01531e20761559119481394-DressBerry-Grey-Melange-Solid-Non-Wired-Heavily-Padded-T-shi-1.jpg",
      "brand": "DressBerry",
      "title": "Lightly Padded T-shirt Bra",
      "price": "Rs. 314",
      "actualPrice": "Rs. 899",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475711/2019/3/13/310c8cb5-595d-4bb9-817a-5cb6af155dfe1552458918414-HRX-by-Hrithik-Roshan-Grey-Printed-Lightly-Padded-RAPID-DRY--1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Seamless RAPID-DRY Sports Bra",
      "price": "Rs. 594",
      "actualPrice": "Rs. 1699",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11862234/2020/7/29/b58ac067-2a85-4b65-b419-a27a8f7fd78d1596001811098HERENOWMenWhiteRedStripedRoundNeckT-shirtBraHRXbyHrithikRosh1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Running Rapid-Dry Sports Bra",
      "price": "Rs. 764",
      "actualPrice": "Rs. 1699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13983656/2021/6/29/2b8ba030-124b-417e-a0ac-49b8ec3774331624964672458-DressBerry-Women-Bra-2021624964671953-1.jpg",
      "brand": "DressBerry",
      "title": "Workout Bra",
      "price": "Rs. 164",
      "actualPrice": "Rs. 549",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13983648/2021/6/29/281e694a-7d20-46ac-85e3-66326f6899341624962437304-DressBerry-Women-Bra-6551624962436761-1.jpg",
      "brand": "DressBerry",
      "title": "Workout Bra",
      "price": "Rs. 192",
      "actualPrice": "Rs. 549",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14701460/2021/9/10/98e495f7-2818-44b4-bb2a-027b86a20f6e1631246415969-HRX-by-Hrithik-Roshan-Women-Bra-5901631246415216-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Training Rapid-Dry Sports Bra",
      "price": "Rs. 524",
      "actualPrice": "Rs. 1499",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9320545/2019/4/15/c21a7844-357b-4a95-a528-032f949d75891555325250808-Zivame-Padded-Wirefree-Bra--Red-6971555325250400-1.jpg",
      "brand": "Zivame",
      "title": "Lightly Padded T-shirt Bra",
      "price": "Rs. 411",
      "actualPrice": "Rs. 749",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9050707/2019/5/29/54335ee9-f35e-4b8e-bdc7-9292db2b77dc1559119492474-DressBerry-Women-Bra-611559119491866-1.jpg",
      "brand": "DressBerry",
      "title": "Lightly Padded T-shirt Bra",
      "price": "Rs. 269",
      "actualPrice": "Rs. 899",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15115018/2021/8/19/5a50fe5c-2b0a-49fe-a37a-35d9b566a4401629354590350JockeyLightGreyMelangeSlipOnActiveBra13761.jpg",
      "brand": "Jockey",
      "title": "Slip-On Sports Bra",
      "price": "Rs. 579",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2306777/2017/12/4/11512394342021-Zivame-Padded-Wirefree-T-shirt-Bra--Black-2411512394341892-1.jpg",
      "brand": "Zivame",
      "title": "Lightly Padded T-shirt Bra",
      "price": "Rs. 449",
      "actualPrice": "Rs. 899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13370868/2021/2/15/92a6f744-20f6-4120-8eef-5faa0c42cdd81613393848462-Enamor-Pink-Solid-Non-Wired-Non-Padded-Everyday-Bra-19916133-1.jpg",
      "brand": "Enamor",
      "title": "Non Padded Everyday Bra",
      "price": "Rs. 449",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11357430/2020/2/26/5a8ae7d2-b098-48dc-b69a-19f113c915f11582693069169-HRX-by-Hrithik-Roshan-Women-Shorts-8891582693066899-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Running Rapid-Dry Shorts",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/21/4d2ed754-05e1-4ee7-8a2d-d6b3677b70a11611228971382-1.jpg",
      "brand": "Clovia",
      "title": "Women Solid Ankle Length Training Tights",
      "price": "Rs. 584",
      "actualPrice": "Rs. 1299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12959222/2022/4/20/6983e9a3-cea0-41d0-93b8-0d6980fd3a9f1650451192884DomyosbyDecathlonWomenBlackHighWaistSkin-TightFitnessShorts1.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Women Cardio Training Shorts",
      "price": "Rs. 854",
      "actualPrice": "Rs. 899",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10106535/2019/9/19/9952e7ac-4522-4cfe-abd1-7b591250bb291568891066162-HRX-by-Hrithik-Roshan-Women-Red-Rapid-Dry-Yoga-Seamless-Shor-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Yoga Seamless Shorts",
      "price": "Rs. 449",
      "actualPrice": "Rs. 1499",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/22/87a1ed11-990e-4c07-8bd8-e65700e0306b1614002659146-1.jpg",
      "brand": "Clovia",
      "title": "Activewear Sports Tights",
      "price": "Rs. 610",
      "actualPrice": "Rs. 1299",
      "offer": "(53% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/5/8f763367-e2d1-4440-8cd7-4b1216947c341607174318712-1.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Occasional Fitness Tank Top",
      "price": "Rs. 474",
      "actualPrice": "Rs. 499",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11791840/2021/8/19/250f8880-176d-4dc9-adbf-769cdb5202491629374591717-Sirona-Pro-FDA-Approved-Super-Soft-Reusable-Menstrual-Cup----1.jpg",
      "brand": "Sirona",
      "title": "Reusable Menstrual Cup - Small",
      "price": "Rs. 279",
      "actualPrice": "Rs. 399",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/c8ba10f6-6594-4426-b65d-72f55f2153341620105764568-2.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Women Solid Ankle-Length Organic Cotton Yoga Leggings",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10106163/2019/9/3/1e55c9f0-0be0-4b9f-a6aa-331c984086cc1567511778666-HRX-by-Hrithik-Roshan-Women-Tights-8471567511775688-4.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Seamless Yoga Tights",
      "price": "Rs. 1499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7688006/2021/7/27/e0f77cd9-cffc-4049-9911-08e815a7a54a1627371128568-HRX-by-Hrithik-Roshan-Women-Navy-Blue-Solid-Rapid-Dry-Runnin-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Running T-shirt",
      "price": "Rs. 349",
      "actualPrice": "Rs. 999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/16/bf8ddd19-38ab-4aa2-89e7-2716817b26111618578647471-1.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Women Skinny Fit Sports Shorts",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8328163/2019/4/2/9ca4fde8-35b1-4b88-b9b9-a6c326d51df31554201033546-HRX-by-Hrithik-Roshan-Women-Black-Solid-Regular-Fit-Sports-S-4.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Rapid dry Sports Shorts",
      "price": "Rs. 1499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13549216/2021/3/15/b76c73b6-9135-4997-a444-31b19b5fe8c01615804088995ChkokkoWomenBlackSolidRunningShorts1.jpg",
      "brand": "Chkokko",
      "title": "Women Running Shorts",
      "price": "Rs. 699",
      "actualPrice": "Rs. 2330",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/31/d55d48fc-f135-4a27-af54-d5fd267bdbad1617177260742-1.jpg",
      "brand": "Zelocity by Zivame",
      "title": "Women Solid Tights",
      "price": "Rs. 597",
      "actualPrice": "Rs. 1195",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10565506/2020/2/4/900c17fc-9cca-45b3-93dd-493d66d0e2531580805529814-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tank--1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Running Rapid-Dry Tank Top",
      "price": "Rs. 359",
      "actualPrice": "Rs. 899",
      "offer": "(60% OFF)"
    }
  ]

  Bra.map(function(el){
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
  
  
    localStorage.setItem("BraWomen",JSON.stringify(Bra))
    console.log("inside")
  
  })
 
