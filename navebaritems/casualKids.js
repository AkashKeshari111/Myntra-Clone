import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()



let Casual = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787771/2019/7/4/4a667184-54ea-43f2-8e22-48839f737f321562237176299-YK-Girls-Blue-Slip-On-Sneakers-2751562237175217-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Slip-On Sneakers",
      "price": "Rs. 428",
      "actualPrice": "Rs. 1299",
      "offer": "Rs. 428Rs. 1299(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/21e6c49c-802c-4603-a796-45d94285b14d1605865469740-1.jpg",
      "brand": "Shoetopia",
      "title": "Girls Colourblocked Sneakers",
      "price": "Rs. 749",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 749Rs. 999(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11395038/2020/2/6/009d6527-1960-4731-9d14-63dcc47374801580982623642-YK-Girls-Casual-Shoes-171580982622579-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Slip-On Sneakers",
      "price": "Rs. 329",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 329Rs. 999(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14221488/2021/6/7/10ee0557-f0bf-4063-bc62-d79e0282691f1623043738352-YK-Girls-Casual-Shoes-591623043737993-1.jpg",
      "brand": "YK",
      "title": "Girls Woven Design Sneakers",
      "price": "Rs. 575",
      "actualPrice": "Rs. 1799",
      "offer": "Rs. 575Rs. 1799(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10317659/2019/8/12/b08a855a-0987-4ed1-920a-932cf3f47e011565601454871-YK-Girls-Green-Sneakers-9081565601454042-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Sneakers",
      "price": "Rs. 389",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 389Rs. 999(61% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787753/2019/7/4/14c6fa4e-3f76-4c88-b146-f13fda6f2a361562237194407-YK-Girls-Green-Sneakers-6351562237193613-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Sneakers",
      "price": "Rs. 467",
      "actualPrice": "Rs. 1299",
      "offer": "Rs. 467Rs. 1299(64% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14649716/2021/10/13/857d072f-2c3a-40d5-b2dd-b305f48edb1c1634121468873-YK-Girls-Casual-Shoes-8691634121468432-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Slip-On Sneakers",
      "price": "Rs. 319",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 319Rs. 999(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/23/de9d82aa-4bcf-4e09-b9c9-f4810d333a661624443722259-1.jpg",
      "brand": "Pantaloons Junior",
      "title": "Girls Pink Leather Sneakers",
      "price": "Rs. 799",
      "actualPrice": null,
      "offer": "Rs. 799"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/1/0a3da20e-af72-4b7e-a57c-e8bb36056af31622549065246-1.jpg",
      "brand": "max",
      "title": "Girls Woven Design PU Slip-On Sneakers",
      "price": "Rs. 629",
      "actualPrice": "Rs. 699",
      "offer": "Rs. 629Rs. 699(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/23/4090cf24-f3ad-4dd4-baad-dec08be739421603405714933-1.jpg",
      "brand": "Yellow Bee",
      "title": "Girls Printed Clogs",
      "price": "Rs. 474",
      "actualPrice": "Rs. 499",
      "offer": "Rs. 474Rs. 499(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/8be59a6d-4cfa-4840-a78b-e13d711d51e51605851458117-1.jpg",
      "brand": "Shoetopia",
      "title": "Girls Woven Design Sneakers",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 599Rs. 999(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/54c931d1-5aa1-4aa8-87e1-5b30da37a0661605874077562-1.jpg",
      "brand": "Shoetopia",
      "title": "Girls Woven Design Slip-On Sneakers",
      "price": "Rs. 649",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 649Rs. 999(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787773/2019/7/4/3cadd65d-0f26-458a-b7c2-a89812b801e41562237065789-YK-Girls-Blue-Slip-On-Sneakers-721562237065476-1.jpg",
      "brand": "YK",
      "title": "Girls Printed Slip-On Sneakers",
      "price": "Rs. 363",
      "actualPrice": "Rs. 1299",
      "offer": "Rs. 363Rs. 1299(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10444566/2019/9/10/1638163e-7110-42c2-84c8-2f136b84974e1568120937665-Barbie-Girls-Casual-Shoes-7651568120937005-1.jpg",
      "brand": "toothless",
      "title": "Girls Barbie Printed Sneakers",
      "price": "Rs. 609",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 609Rs. 999(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/fb50a6d7-a66e-4486-9562-c1ffb59290831611723459888-1.jpg",
      "brand": "max",
      "title": "Girls Printed Sneakers",
      "price": "Rs. 584",
      "actualPrice": "Rs. 649",
      "offer": "Rs. 584Rs. 649(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16315322/2021/12/1/a1b61875-16ad-4cc5-a948-3c915d198acc1638344958706POPLINSGirlsBlueWashedLightweightCropDenimJacket1.jpg",
      "brand": "POPLINS",
      "title": "Blue Washed Crop Denim Jacket",
      "price": "Rs. 664",
      "actualPrice": "Rs. 3499",
      "offer": "Rs. 664Rs. 3499(81% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10840186/2019/11/4/7c1e4147-c4e6-49c3-90ec-38f93e62e9d71572845682737-Lazy-Shark-Kids-Girls-Pink-Sweatshirt-2931572845681824-1.jpg",
      "brand": "Lazy Shark",
      "title": "Girls Printed Sweatshirt",
      "price": "Rs. 543",
      "actualPrice": "Rs. 1599",
      "offer": "Rs. 543Rs. 1599(66% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/3/61299e8c-ab97-4b5c-940d-21c5f96fda1d1583185448214-1.jpg",
      "brand": "TALES & STORIES",
      "title": "Girls Solid Regular-Fit Dungarees",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1599",
      "offer": "Rs. 799Rs. 1599(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11763904/2020/4/6/b48becdc-3ee1-4e36-8e70-febc0e7a74b81586155535049LazySharkKids-GirlsClothingSet1.jpg",
      "brand": "Lazy Shark",
      "title": "Girls Printed T-shirt with Shorts",
      "price": "Rs. 569",
      "actualPrice": "Rs. 1499",
      "offer": "Rs. 569Rs. 1499(62% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/29/9ef63153-0a72-4daa-83c5-213ea31e6adf1595972768774-1.jpg",
      "brand": "LilPicks",
      "title": "Girls Colourblocked T-shirt with Shorts",
      "price": "Rs. 701",
      "actualPrice": "Rs. 1299",
      "offer": "Rs. 701Rs. 1299(46% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/22/c008d649-f270-465a-9272-96a5afe5a5111619082118444-1.jpg",
      "brand": "UNDER FOURTEEN ONLY",
      "title": "Girls Pure Cotton Shorts",
      "price": "Rs. 849",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 849Rs. 999(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/1/e32c9277-8c78-48e4-b051-c2977462d73c1593552792381-1.jpg",
      "brand": "SINI MINI",
      "title": "Set of 4 Solid T-shirt",
      "price": "Rs. 894",
      "actualPrice": "Rs. 2796",
      "offer": "Rs. 894Rs. 2796(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11487668/2020/2/25/f5658e3b-dff2-4f13-b595-178b83f0aefa1582607733504GiniJonyGirlsTops1.jpg",
      "brand": "Gini and Jony",
      "title": "Girls Printed T-shirt",
      "price": "Rs. 249",
      "actualPrice": "Rs. 499",
      "offer": "Rs. 249Rs. 499(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/31/73463e37-94ef-458b-8dd5-a74725e027281596145751294-1.jpg",
      "brand": "MINI KLUB",
      "title": "Girls Regular Fit Denim Shorts",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": "Rs. 699"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/10/9071432a-0a5a-4582-bb23-c7a85630b6ae1612957960137-1.jpg",
      "brand": "max",
      "title": "Girls Printed Round Neck T-shirt",
      "price": "Rs. 249",
      "actualPrice": null,
      "offer": "Rs. 249"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/13/e8604608-69ac-4b0e-ad25-f988f7073dd81605236484381-1.jpg",
      "brand": "PROTEENS",
      "title": "Girls Striped Round Neck T-shirt",
      "price": "Rs. 278",
      "actualPrice": "Rs. 309",
      "offer": "Rs. 278Rs. 309(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/28/aeff06af-063e-4d58-a833-85ff8556e8121582847299293-1.jpg",
      "brand": "Luke & Lilly",
      "title": "Pack of 3 Girls Regular Shorts",
      "price": "Rs. 669",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 669Rs. 999(33% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12268884/2020/9/17/fc134a5d-97c6-489c-a184-bd8c06f602821600343081138-Tiny-Girl-Red-Solid-Mid-Rise-Jeggings-6621600343080096-1.jpg",
      "brand": "Tiny Girl",
      "title": "Girls Solid Mid-Rise Jeggings",
      "price": "Rs. 597",
      "actualPrice": "Rs. 1195",
      "offer": "Rs. 597Rs. 1195(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15954666/2021/10/30/612e7a1f-5f60-4100-9c40-75aa7d87fac91635617823062ATUNBlackDress1.jpg",
      "brand": "A.T.U.N.",
      "title": "Girls High-Low Dress",
      "price": "Rs. 495",
      "actualPrice": "Rs. 1599",
      "offer": "Rs. 495Rs. 1599(69% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15266332/2022/5/4/5c61f658-cb2e-485e-9e91-f6c88d7990bb1651646993799-YK-Girls-Yellow--Off-White-Floral-Fit--Flare-Dress-914165164-11.jpg",
      "brand": "YK",
      "title": "Girls Floral Fit & Flare Dress",
      "price": "Rs. 379",
      "actualPrice": "Rs. 999",
      "offer": "Rs. 379Rs. 999(62% OFF)"
    }
  ]


  Casual.map(function(el){
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
  
  
    localStorage.setItem("CasualKids",JSON.stringify(Casual))
    console.log("inside")
  
  })
 

