import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let TShirts = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15362120/2021/9/4/81a36d9e-49a0-41df-88b4-2690245d73d11630771947898HELLCATBoysBurgundyTypography2PrintedT-shirt1.jpg",
      "brand": "HELLCAT",
      "title": "Boys Pack-2 Printed T-shirt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14191940/2021/4/26/b3e4c93d-6975-4b4f-b47e-f1010f24548c1619436930003HELLCATBoysMulticolouredPrintedRoundNeckT-shirt1.jpg",
      "brand": "HELLCAT",
      "title": "Boys Pack of 2 T-shirts",
      "price": "Rs. 526",
      "actualPrice": "Rs. 1699",
      "offer": "(69% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15334334/2021/9/1/4f6d14d1-fdb2-4956-a89a-6a4f499d1eea1630508896700BonOrganikBoysOrangePrintedAppliqueT-shirt1.jpg",
      "brand": "BonOrganik",
      "title": "Boys Printed T-shirt",
      "price": "Rs. 349",
      "actualPrice": "Rs. 999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15354574/2021/9/3/f33dd697-59a1-4204-bf70-4f7bc7ee61521630679227368HELLCATBoysGreenTypography2PrintedT-shirt1.jpg",
      "brand": "HELLCAT",
      "title": "Boys Pack-2 Printed T-shirt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/19/0449c939-7fa1-4755-bb5d-53b0025db3e01595110038743-1.jpg",
      "brand": "HELLCAT",
      "title": "Boys Pack Of 3 Printed T-shirt",
      "price": "Rs. 689",
      "actualPrice": "Rs. 2299",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/18/f250d5e5-5829-40b4-a007-5d765e388de11595026879335-1.jpg",
      "brand": "HELLCAT",
      "title": "Pack Of 3 T-shirt",
      "price": "Rs. 620",
      "actualPrice": "Rs. 2299",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/12/9167083e-fe42-44ac-bc43-ed94fae8ecbc1618212451195-1.jpg",
      "brand": "Maniac",
      "title": "Boys Colourblocked Cotton Pure Cotton T-shirt",
      "price": "Rs. 969",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
      "brand": "HELLCAT",
      "title": "Pack Of 3 T-shirts",
      "price": "Rs. 620",
      "actualPrice": "Rs. 2299",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15552556/2021/9/21/b8518562-4dde-453d-a531-2f3983e1ec6a1632223704403maxBoysMulticolouredTypographyPrintedAppliqueT-shirt1.jpg",
      "brand": "max",
      "title": "Pack of 3 Printed T-shirt",
      "price": "Rs. 620",
      "actualPrice": "Rs. 689",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12758932/2020/10/16/109715dc-eef2-4eb5-b184-4150dafc6a6b1602833254052HELLCATBoysOliveGreenPrintedHoodT-shirt1.jpg",
      "brand": "HELLCAT",
      "title": "Boys Pack Of 2 Hood T-shirts",
      "price": "Rs. 679",
      "actualPrice": "Rs. 1999",
      "offer": "(66% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15932826/2022/1/7/5eac46c6-af55-44b6-889f-a0a4c23d7d681641545112054-HELLCAT-Boys-Set-of-2-Colourblocked-T-shirts-435164154511196-2.jpg",
      "brand": "HELLCAT",
      "title": "Set of 2 Colourblocked T-shirt",
      "price": "Rs. 619",
      "actualPrice": "Rs. 1999",
      "offer": "(69% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15552594/2021/9/21/35b0d182-4b52-4767-b550-7746dec36d9b1632223680366maxBoysMulticolouredTypographyV-NeckAppliqueT-shirt1.jpg",
      "brand": "max",
      "title": "Boys Pack of 5 Printed T-shirt",
      "price": "Rs. 854",
      "actualPrice": "Rs. 949",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15332162/2021/9/1/f0df1e62-e8e2-4a06-92a7-81d102fbf5e21630501642929ManiacBoysRedColourblockedV-NeckSlimFitT-shirt1.jpg",
      "brand": "Maniac",
      "title": "Boys Colourblocked V-Neck Slim Fit T-shirt",
      "price": "Rs. 749",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15334336/2021/9/1/c5dd8a5e-6c15-481d-a85c-4cc2e42ecabd1630508605640BonOrganikBoysWhiteTypographyPrintedAppliqueT-shirt1.jpg",
      "brand": "BonOrganik",
      "title": "Boys Cotton Typography T-shirt",
      "price": "Rs. 349",
      "actualPrice": "Rs. 999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17132460/2022/2/22/0e0369b8-aadc-4262-97f9-2b4db6236c221645542905367-HELLCAT-Boys-Pack-Of-3-Navy-Blue-Printed-Bio-Finish-Cotton-T-11.jpg",
      "brand": "HELLCAT",
      "title": "Pack Of 3 Bio Finish T-shirt",
      "price": "Rs. 749",
      "actualPrice": "Rs. 2997",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15293248/2021/11/10/12d84fd3-6304-448a-af40-1baddb8ef44a1636543059262KidsVilleBoysNavyBlueWhiteSpidermanPrintedRoomSlippers1.jpg",
      "brand": "Kids Ville",
      "title": "Boys Printed Room Slippers",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/110cd75d-7b4a-4973-b7bb-de1f74965ae81620124926426-1.jpg",
      "brand": "3PIN",
      "title": "Boys Solid Cotton Joggers",
      "price": "Rs. 839",
      "actualPrice": "Rs. 1199",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15337818/2021/9/2/d88b588c-efee-4d30-9412-3872f9c303881630564815781LilPicksBoysMulticolouredRegularShorts1.jpg",
      "brand": "LilPicks",
      "title": "Boys Pack of 5 Regular Shorts",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1799",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15293254/2021/11/10/f9cf0678-9cfb-4b90-8cff-5839575d06711636543009778KidsVilleBoysRedWhiteSpidermanPrintedRoomSlippers1.jpg",
      "brand": "Kids Ville",
      "title": "Boys Printed Room Slippers",
      "price": "Rs. 299",
      "actualPrice": "Rs. 399",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15025282/2021/8/27/d0fb17f9-96bb-4878-9a69-5f7d86c590821630068273887ADBUCKSBoysBrownPureCottonPrintedRelaxedNonIronCargosTrouser1.jpg",
      "brand": "ADBUCKS",
      "title": "Boys Pure Cotton Cargos",
      "price": "Rs. 999",
      "actualPrice": "Rs. 1499",
      "offer": "(Rs. 500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15257244/2021/8/25/287b1a9c-2c4d-49fb-87f3-74b73f0314cc1629898861798max1.jpg",
      "brand": "max",
      "title": "Boys Cargo Shorts",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14279568/2021/8/3/40bcd68f-592d-4031-b191-28f2caf68a561627963731915-HERENOW-Boys-Blue-Washed-Slim-Fit-Mid-Rise-Denim-Shorts-9916-1.jpg",
      "brand": "HERE&NOW",
      "title": "Boys Slim Fit Mid-Rise Denim Shorts",
      "price": "Rs. 503",
      "actualPrice": "Rs. 1799",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14279590/2022/4/28/32f38ea7-c8cb-4edd-9a95-8d8b926bdcb81651141074172-HERENOW-Boys-Black-Typography-Embroidered-Slim-Fit-Denim-Sho-1.jpg",
      "brand": "HERE&NOW",
      "title": "Boys Embroidered Denim Shorts",
      "price": "Rs. 543",
      "actualPrice": "Rs. 1699",
      "offer": "(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15293260/2021/11/10/e197482c-8fe6-40f2-bb9e-ea8a4b3727be1636543051252KidsVilleBoysMulticolouredSpidermanPrintedRoomSlippers1.jpg",
      "brand": "Kids Ville",
      "title": "Boys Printed Room Slippers",
      "price": "Rs. 374",
      "actualPrice": "Rs. 499",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/19/f3579a52-26d8-46c6-a917-30808e736c311613727857394-1.jpg",
      "brand": "TALES & STORIES",
      "title": "Boys Slim Fit Jeans",
      "price": "Rs. 649",
      "actualPrice": "Rs. 999",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/28/770892b5-56f2-4779-9b57-40b96756dc771622202918157-1.jpg",
      "brand": "max",
      "title": "Boys Regular Trousers",
      "price": "Rs. 494",
      "actualPrice": "Rs. 549",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11851556/2020/5/14/9b117013-d7cd-45f9-8e4e-ac230b91424b1589445310432-Urbano-Juniors-Boys-Black-Slim-Fit-Jeans-9161589445309632-1.jpg",
      "brand": "Urbano Juniors",
      "title": "Boys Slim Fit Denim Joggers",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1399",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15108378/2022/1/11/e1fdcca3-1e1e-4126-99a0-dbfa009f9f001641885001181-PLUM-TREE-Boys-Grey-Printed-Regular-Shorts-6041641885001099-2.jpg",
      "brand": "PLUM TREE",
      "title": "Boys Regular Shorts",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14503876/2021/8/2/267f0c36-6222-47ea-b9db-d87fa5eea3b71627909700595-HERENOW-Boys-Navy-Blue-Heavy-Fade-Applique-Stretchable-Jeans-1.jpg",
      "brand": "HERE&NOW",
      "title": "Boys Stretchable Jeans",
      "price": "Rs. 569",
      "actualPrice": "Rs. 1899",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15395990/2021/9/7/e3d85445-9e12-4c11-8253-b883c364fa1a1631020020737ManiacBoysNavyBlueSlimFitRegularShorts1.jpg",
      "brand": "Maniac",
      "title": "Boys Slim Fit Regular Shorts",
      "price": "Rs. 1099",
      "actualPrice": null,
      "offer": null
    }
  ]



  TShirts.map(function(el){
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
  
  
    localStorage.setItem("TShirtsKids",JSON.stringify(TShirts))
    console.log("inside")
  
  })
 
