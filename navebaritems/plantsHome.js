import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Plants = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/18/31187e0e-99c4-43aa-b69a-78bc6ccd9abb1613646703381-1.jpg",
      "brand": "TIED RIBBONS",
      "title": "Set Of 2 Solid Plastic Planters With Metal Stand",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1749",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/9/1da94c19-7539-431d-9d55-51dc180eafcb1623211787575-1.jpg",
      "brand": "Home Centre",
      "title": "Set Of 3 Planters On Stand",
      "price": "Rs. 1599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14370594/2021/6/22/7a7f86ac-8113-4323-af38-826698ff0fc51624353771183-Aapno-Rajasthan-Copper-Toned--Black-Cylindrical-Metal-Plante-13.jpg",
      "brand": "Aapno Rajasthan",
      "title": "Cylindrical Metal Planter With Stand",
      "price": "Rs. 840",
      "actualPrice": "Rs. 2800",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/8/24/b1646a41-f6d5-40e0-8e2b-c44ac7f115891566587650094-1.jpg",
      "brand": "HomeTown",
      "title": "Set of 2 Planters",
      "price": "Rs. 890",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14069304/2021/6/22/35ebd24e-4d0d-4ce8-9ed5-66376adc03651624353753208-Aapno-Rajasthan-Set-Of-2-Brown-Antique-Finish-Hammered-Brass-11.jpg",
      "brand": "Aapno Rajasthan",
      "title": "Set Of 2 Antique Finish Hammered Brass Planters",
      "price": "Rs. 4200",
      "actualPrice": "Rs. 12000",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16166900/2021/11/18/ffb738cd-a2eb-4fe2-8f8a-7b9e0e73770e1637244577779Planters1.jpg",
      "brand": "WALLMANTRA",
      "title": "Cross Rope Wall Hanging",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 1999",
      "offer": "(Rs. 500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/18/d06f5e45-420a-428b-98b6-144fbf7409141613629591803-1.jpg",
      "brand": "TIED RIBBONS",
      "title": "Set Of 3 Solid Metal Planters With Wheel-Shaped Stand",
      "price": "Rs. 1279",
      "actualPrice": "Rs. 3199",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17243496/2022/2/22/226821ae-458c-495b-81f2-0826f7bc64161645523402311BlackMetalFlowerPotSucculentPlantPotIndoorandOutdoorSetof21.jpg",
      "brand": "Homesake",
      "title": "Set of 2 Metal Planters",
      "price": "Rs. 499",
      "actualPrice": "Rs. 2500",
      "offer": "(Rs. 2001 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/6/14/f5087b43-82e3-4d59-a81c-61ae4e32fb5e1560497477323-1.jpg",
      "brand": "Aapno Rajasthan",
      "title": "Two Owls Ceramic Planter",
      "price": "Rs. 660",
      "actualPrice": "Rs. 2200",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/10/a5c24dca-196b-46c8-a63f-d1834300a6d41604956838736-1.jpg",
      "brand": "StyleMyWay",
      "title": "Ceramic Round Planter Pot",
      "price": "Rs. 691",
      "actualPrice": "Rs. 1115",
      "offer": "(38% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14063538/2021/6/2/9a8cfbe4-2196-494e-8ba7-111f87803e641622648428542-Aapno-Rajasthan-Set-Of-3-Striped-Ceramic-Planters-7891622648-1.jpg",
      "brand": "Aapno Rajasthan",
      "title": "Set Of 3 Striped Ceramic Planters",
      "price": "Rs. 660",
      "actualPrice": "Rs. 2000",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/4/ca43d488-13f3-48c1-9d0e-a10ff99a0e741604454623301-1.jpg",
      "brand": "Aapno Rajasthan",
      "title": "Set of 3 Planters",
      "price": "Rs. 2520",
      "actualPrice": "Rs. 7200",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4670819/2018/4/11/11523433108619-Set-of-three-Herb-Pots-Red-5351523433108501-1.jpg",
      "brand": "green girgit",
      "title": "Metal Herb Planter",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1100",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/9/b8653a0d-9525-4901-81f4-e0beff426abf1623212234997-1.jpg",
      "brand": "Home Centre",
      "title": "Solid Mini Planter With Stand",
      "price": "Rs. 599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15292386/2021/8/28/bb3f37dc-b141-460a-8c57-a1d1bb30e1c11630137238197Planters1.jpg",
      "brand": "Homesake",
      "title": "Set Of 2 Plant Hangers",
      "price": "Rs. 2000",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/31/1a69dfad-a1a3-49d2-bd08-45deab4d31fd1622460767582-1.jpg",
      "brand": "Pure Home and Living",
      "title": "Set Of 3 Bathroom Accessories",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 2999",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/28/8ac2bbaa-961b-4823-82e9-1d182f1867c21606558991168-1.jpg",
      "brand": "Indus Valley",
      "title": "Unisex Skin and Hair Combo",
      "price": "Rs. 363",
      "actualPrice": "Rs. 428",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11777018/2020/12/24/af3a2968-6d83-4bbf-8b10-bcf31215656b1608793889111-molife-Unisex-Black-Amplify-100-Powerful-Wireless-Soundbar-W-1.jpg",
      "brand": "molife",
      "title": "Amplify 100 Wireless Soundbar",
      "price": "Rs. 2999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9093513/2021/8/11/8fd3f159-a7f9-44c6-b98b-2df5be62892d1628671289225BombayShavingCompanyExfoliatingCharcoalFaceScrubForDeadSkinE1.jpg",
      "brand": "Bombay Shaving Company",
      "title": "Unisex Face Scrub 100 gm",
      "price": "Rs. 248",
      "actualPrice": "Rs. 299",
      "offer": "(17% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/7/17142faf-a949-427e-afa4-d999a30872111583535049427-1.jpg",
      "brand": "molife",
      "title": "Unisex Solid Play 700 Bluetooth Wireless Earpods Earphones",
      "price": "Rs. 4499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/28/a1056c18-f7ef-4221-8f52-484bfacda6ed1606572165546-1.jpg",
      "brand": "Indus Valley",
      "title": "Unisex Skin and Hair Combo",
      "price": "Rs. 788",
      "actualPrice": "Rs. 928",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/66227c99-6e30-4db4-85da-88a138377d0c1612854955542-1.jpg",
      "brand": "INTERDESIGN",
      "title": "Cade Lidded Storage Bin",
      "price": "Rs. 1119",
      "actualPrice": "Rs. 1399",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/6/70b8e223-421c-45c9-a80c-3b0b0c0fe75a1620296425608-1.jpg",
      "brand": "Pure Home and Living",
      "title": "Amber Glass Container",
      "price": "Rs. 600",
      "actualPrice": "Rs. 750",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11814812/2020/9/4/969c00e9-3cca-4c15-a681-6a0367bd6f611599201646076-Bombay-Shaving-Company-Set-of-2-Charcoal-Easy-At-Home-Skin-R-2.jpg",
      "brand": "Bombay Shaving Company",
      "title": "Set of 2 Charcoal Face Mask",
      "price": "Rs. 250",
      "actualPrice": "Rs. 298",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9227673/2020/9/16/fe7c2740-b4dc-4b00-adc0-2179796aff8c1600247520011-WishCare-Unisex-Jamaican-Black-Castor-Oil-200ml-602160024751-1.jpg",
      "brand": "WishCare",
      "title": "Unisex Hair Oil",
      "price": "Rs. 601",
      "actualPrice": "Rs. 699",
      "offer": "(14% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9149707/2019/3/29/be23b7b3-4eb4-48b7-97df-6f1c84e41f971553856987675-Bombay-Shaving-Company-Unisex-Charcoal-Face-Scrub-45gm-98015-1.jpg",
      "brand": "Bombay Shaving Company",
      "title": "Unisex Face Scrub",
      "price": "Rs. 175",
      "actualPrice": "Rs. 179",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14999216/2021/8/2/43ec8827-d753-4c6b-8475-16d96db3f1571627914215382Organisers1.jpg",
      "brand": "My Gift Booth",
      "title": "Set Of 2 Travel Shoe Bags",
      "price": "Rs. 299",
      "actualPrice": "Rs. 999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9227689/2020/9/16/838f48df-449e-4247-906b-ec71354c9be11600247578013-WishCare-Unisex-Cold-Pressed-Kalonji-Black-Seed-Oil-200ml-96-1.jpg",
      "brand": "WishCare",
      "title": "Kalonji Black Seed Oil",
      "price": "Rs. 396",
      "actualPrice": "Rs. 400",
      "offer": "(1% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11814810/2020/9/4/093829eb-c515-419c-ac1f-5e7246b9032b1599201627160-Bombay-Shaving-Company-Pack-of-5-Charcoal-Face-Sheet-Mask-25-1.jpg",
      "brand": "Bombay Shaving Company",
      "title": "Charcoal Face Sheet Mask",
      "price": "Rs. 499",
      "actualPrice": "Rs. 745",
      "offer": "(33% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/7/8d63a88d-72d8-4e89-a866-f9c7d0d80ada1607354441520-1.jpg",
      "brand": "molife",
      "title": "Dual-Driver Portable Bluetooth Speakers With Upto 5 Hours Playback",
      "price": "Rs. 3499",
      "actualPrice": null,
      "offer": null
    }
  ]

  Plants .map(function(el){
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
  
  
    localStorage.setItem("PlantsHome",JSON.stringify(Plants ))
    console.log("inside")
  
  })
 
