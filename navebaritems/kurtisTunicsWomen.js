import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import {sidebar_nav_w} from "../components/sidebar_navWomens.js"
document.getElementById("sidebar_nav").innerHTML= sidebar_nav_w();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let KurtisTunics = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13647612/2021/3/2/ae01b413-6d60-4f2f-a851-24bf78ae0a801614675775880-Varanga-Pink-Floral-And-Bird-Printed-Crop-Top-With-Puff-Slee-1.jpg",
      "brand": "Varanga",
      "title": "Floral Printed Crop Top",
      "price": "Rs. 597",
      "actualPrice": "Rs. 1299",
      "offer": "(54% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13719118/2021/3/3/d7568371-96e2-4588-b0b2-fa7f3a2d6edb1614752823080-Athena-Turquoise-Blue-top-with-power-shoulder-sleeve-detail--1.jpg",
      "brand": "Athena",
      "title": "Power Shoulders Top",
      "price": "Rs. 636",
      "actualPrice": "Rs. 1299",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10856186/2019/11/30/c93932d4-79f1-4115-b07c-21bb59775a671575111475924-SASSAFRAS-Women-Tops-1431575111474030-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Solid Top",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1199",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11679908/2020/5/25/8046704c-bff4-45bc-bf0f-5d438724b7b81590424372490CottinfabWomensBrownPleatedTrouserTopsCarltonLondonWomenTops1.jpg",
      "brand": "Carlton London",
      "title": "Victorian Crop Fitted Top",
      "price": "Rs. 667",
      "actualPrice": "Rs. 1390",
      "offer": "(52% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9553433/2022/4/20/88ea5805-292d-40c3-b53a-fbf4fa33c1481650446688676SASSAFRASGreenWhiteStripedStyledBackCropTop1.jpg",
      "brand": "SASSAFRAS",
      "title": "Styled Back Crop Top",
      "price": "Rs. 449",
      "actualPrice": "Rs. 899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12797568/2020/11/11/b5389152-fe8a-4729-ac94-e361353bfbad1605068283796-Cottinfab-Women-Tops-9111605068282525-1.jpg",
      "brand": "Cottinfab",
      "title": "Printed Shirt Style Pure Cotton Top",
      "price": "Rs. 479",
      "actualPrice": "Rs. 1199",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7256716/2018/8/31/75084dda-6d3f-4387-9b4a-b776dfae3a651535708100723-na-8491535708100420-1.jpg",
      "brand": "Mayra",
      "title": "Striped A-Line Top",
      "price": "Rs. 417",
      "actualPrice": "Rs. 995",
      "offer": "(58% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13719146/2021/3/3/d2d0ad98-7563-4d4d-af0a-a99abaeca74b1614753570173-Athena-Sea-Green-top-with-power-shoulder-sleeve-detail-12416-1.jpg",
      "brand": "Athena",
      "title": "Power Shoulders Top",
      "price": "Rs. 636",
      "actualPrice": "Rs. 1299",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13843006/2021/4/9/f03c740b-8aae-4505-89e5-2f2a5e76a3fe1617974298161-Sassafras-Blue-Pure-Cotton-Fitted-Crop-Top-6761617974297629-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Fitted Crop Top",
      "price": "Rs. 449",
      "actualPrice": "Rs. 899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/1/34ed596f-7dd3-45e0-a7b9-20ddf041da9a1606815654154-1.jpg",
      "brand": "Tokyo Talkies",
      "title": "Solid Top",
      "price": "Rs. 379",
      "actualPrice": "Rs. 949",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9240703/2022/4/12/4dc1199d-d684-41d1-9035-5a6483e5e1a21649748075919herbyinvictusOliveGreenSmartCasualTop1.jpg",
      "brand": "her by invictus",
      "title": "Smart Casual Top",
      "price": "Rs. 559",
      "actualPrice": "Rs. 1599",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13738182/2021/7/5/ae19d5f2-c171-4cef-baf7-360007dcf72c1625487089028-VENI-VIDI-VICI-Fuschia--Frilled-Tie-Back-Top-687162548708858-1.jpg",
      "brand": "Veni Vidi Vici",
      "title": "Ruffled Crop Top",
      "price": "Rs. 468",
      "actualPrice": "Rs. 1170",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12221932/2020/10/6/fc845ff5-a434-48a4-8dca-9b4bf3fb52391601959631371-SASSAFRAS-Women-Black-High-Neck-Cropped-Top-4281601959630186-1.jpg",
      "brand": "SASSAFRAS",
      "title": "High Neck Cropped Top",
      "price": "Rs. 399",
      "actualPrice": "Rs. 799",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11711840/2020/10/13/c4034971-d71f-416c-9d48-82f1c39127c01602590834834MastHarbourWomenSeaGreenYellowFloralPrintedCropTop1.jpg",
      "brand": "Mast & Harbour",
      "title": "Floral Lace Crop Top",
      "price": "Rs. 454",
      "actualPrice": "Rs. 1299",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11144044/2020/2/6/d8b6c14b-af7f-439d-a260-383e0eb7a7bd1580965077361-Mast--Harbour-Women-Blue-Self-Striped-Top-3821580965076362-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Self-Striped Pure Cotton Top",
      "price": "Rs. 559",
      "actualPrice": "Rs. 1599",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/11/9dbe54a7-7213-49bf-ae01-bc5a187652801620709690516-1.jpg",
      "brand": "High Star",
      "title": "Women Straight Fit Jeans",
      "price": "Rs. 704",
      "actualPrice": "Rs. 1499",
      "offer": "(53% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13516770/2021/3/1/bc44e155-ffea-4a56-9a49-ee26152103f11614581989377-The-Dry-State-Women-Burgundy-Regular-Fit-Solid-Cropped-Paral-1.jpg",
      "brand": "The Dry State",
      "title": "Women Crop Parallel Trousers",
      "price": "Rs. 639",
      "actualPrice": "Rs. 1999",
      "offer": "(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16256374/2021/11/26/6e53ab7d-9ffb-467a-9193-ecada828c8461637923899309TokyoTalkiesWomenBlackWideLegHigh-RiseStretchableJeans1.jpg",
      "brand": "Tokyo Talkies",
      "title": "Women Wide Leg High-Rise Jeans",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17126896/2022/2/12/f7bd4ead-5b94-46ed-95b6-662e42f4e3b61644641798624SanhoseTanSuedeBlockHeeledBoots1.jpg",
      "brand": "Sanhose",
      "title": "Suede Block Heeled Boots",
      "price": "Rs. 764",
      "actualPrice": "Rs. 1699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16200878/2021/11/22/b86b519d-c02e-45d7-aa1f-8452e61607cb1637575212503TokyoTalkiesWomenRustFlaredPleatedParallelTrousers1.jpg",
      "brand": "Tokyo Talkies",
      "title": "Women Flared Pleated Parallel Trousers",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1349",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/a7c493ef-0130-4474-a350-4cfe9c9ae1ee1621490567989-1.jpg",
      "brand": "People",
      "title": "Women Pleated High-Rise Culottes Trousers",
      "price": "Rs. 1199",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14087628/2021/6/2/6355a3f0-1523-4e43-8897-8eb4519b54731622635165412-SASSAFRAS-Women-Shorts-201622635165020-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Cotton Shorts",
      "price": "Rs. 559",
      "actualPrice": "Rs. 1399",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16854256/2022/1/17/a01336de-6507-4d1b-a77a-296373c49d671642420367085Jeans1.jpg",
      "brand": "High Star",
      "title": "Women Wide Leg High-Rise Jeans",
      "price": "Rs. 839",
      "actualPrice": "Rs. 1999",
      "offer": "(58% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16514088/2022/1/4/171507f2-cf2d-49db-b363-595f1d8f2a7d1641299220549-IVOC-Women-Boyfriend-Fit-Stretchable-Denim-Jeans-14416412992-1.jpg",
      "brand": "IVOC",
      "title": "Women Boyfriend Fit Jeans",
      "price": "Rs. 840",
      "actualPrice": "Rs. 2099",
      "offer": "(Rs. 1259 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16200864/2021/11/22/8e8e3e4b-51e4-4ac8-8aa6-7e270f1fac211637575945874TokyoTalkiesWomenBlackFlaredPleatedParallelTrousers1.jpg",
      "brand": "Tokyo Talkies",
      "title": "Black Flared Parallel Trousers",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1349",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14487148/2021/7/6/00e1b649-7c08-4c54-9246-32b669cba9fd1625559577812KurtasSaadgiWomenKurtaSetsSaadgiWomenKurtaSetsSaadgiWomenKur4.jpg",
      "brand": "SASSAFRAS",
      "title": "Women High-Rise Culottes Trousers",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1599",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16337762/2021/12/2/1eb89eb7-2e13-43ab-ba2e-94efecec82731638433549395TokyoTalkiesWomenMaroonJeans1.jpg",
      "brand": "Tokyo Talkies",
      "title": "Women Regular Fit Jeans",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1749",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/11/463d9466-1f9c-47d2-90b5-330e5918fdfe1620709410565-1.jpg",
      "brand": "High Star",
      "title": "Women Relaxed Fit High-Rise Jeans",
      "price": "Rs. 883",
      "actualPrice": "Rs. 1699",
      "offer": "(48% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13645190/2021/11/16/0f65ef85-7aa0-4ac7-8558-92f1f3e04c751637067301001-SASSAFRAS-Women-Peach-Coloured-Cotton-Solid-Side-Slits-Paral-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Cotton Parallel Trousers",
      "price": "Rs. 949",
      "actualPrice": "Rs. 1899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13000464/2020/12/2/74920b72-b051-40ba-affd-534777462e051606887099938-SASSAFRAS-Women-Jeans-9251606887098047-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Relaxed Fit Jeans",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    }
  ]



  KurtisTunics.map(function(el){
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
  
  
    localStorage.setItem("KurtisTunicsWomen",JSON.stringify(KurtisTunics))
    console.log("inside")
  
  })
 
