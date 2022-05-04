import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();


let casualTrauserARR = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/12/b58188ba-77dd-4fc7-bd86-c8cad24a4da91605128902262-1.jpg",
      "brand": "Quechua By Decathlon",
      "title": "Men Trousers",
      "price": "Rs. 1699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13159756/2021/10/28/bba53106-be0b-4a56-9c54-938c050f1e681635397565779-HERENOW-Men-Khaki-Slim-Fit-Joggers-Trousers-6931635397565058-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Printed Jogger Trousers",
      "price": "Rs. 1139",
      "actualPrice": "Rs. 3799",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/824792dc-9629-4d46-80cc-6f8995d7ef571610360852562-1.jpg",
      "brand": "Breakbounce",
      "title": "Men Slim Fit Joggers",
      "price": "Rs. 1034",
      "actualPrice": "Rs. 2299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8209403/2019/8/22/691ae9ad-4342-4dd6-ae59-03601a27eafd1566479499415-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Cargos-4361566479497959-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 924",
      "actualPrice": "Rs. 1849",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389026/2018/2/13/11518499099305-Hubberholme-Men-Beige-Slim-Fit-Solid-Cargos-5611518499099225-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2343636/2018/4/3/11522753442408-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Joggers-5881522753442218-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Joggers",
      "price": "Rs. 873",
      "actualPrice": "Rs. 1649",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389024/2018/2/13/11518499083955-Hubberholme-Men-Blue-Slim-Fit-Solid-Cargos-3051518499083872-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 914",
      "actualPrice": "Rs. 1499",
      "offer": "(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15923976/2021/10/26/e0d19c60-d23b-4570-b542-71206c9f116c1635231969002HIGHLANDERMenBlueSlimFitCargosTrousers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Jogger Cargos",
      "price": "Rs. 1085",
      "actualPrice": "Rs. 2049",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13737006/2021/3/2/b337be4f-8f03-43a3-b893-845e9c5de9651614681709969-Hubberholme-Men-Trousers-991614681708306-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos Pants",
      "price": "Rs. 929",
      "actualPrice": "Rs. 1499",
      "offer": "(38% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2290039/2019/8/22/9d7b2585-8dad-4bf5-bb2d-b9311a5db3c21566479165516-HIGHLANDER-Men-Black-Tapered-Fit-Solid-Chinos-66615664791644-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Tapered Fit Chinos",
      "price": "Rs. 820",
      "actualPrice": "Rs. 1549",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11761660/2022/4/7/9adffe9c-cd64-4ae8-9ad4-6f5c6c4d1b211649328829260HubberholmeMenBrownSlimFitSolidCargos1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15193444/2021/8/19/2b5c68a8-6081-4f20-b33c-96d80c6b97a91629350010636Cargojoggers1.jpg",
      "brand": "H&M",
      "title": "Men Cargo Joggers",
      "price": "Rs. 2699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/9/07d57b24-1ea2-40b5-bbcb-3b6ecc40cfe31617971753593-1.jpg",
      "brand": "Pepe Jeans",
      "title": "Men Regular Fit Cargos",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389029/2018/2/13/11518499123014-Hubberholme-Men-Brown-Slim-Fit-Solid-Cargos-441518499122964-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389028/2018/2/13/11518499115458-Hubberholme-Men-Navy-Blue-Slim-Fit-Solid-Cargos-9761518499115386-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 914",
      "actualPrice": "Rs. 1499",
      "offer": "(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/23/5d65d390-43e0-4cf2-848c-b7c3518e8d191606119681047-1.jpg",
      "brand": "Friskers",
      "title": "Printed Hood T-shirt",
      "price": "Rs. 629",
      "actualPrice": "Rs. 999",
      "offer": "(37% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15557220/2021/9/21/a26f02ca-7b26-4272-a3aa-d189b29346bf1632232962624KLOTTHEMenOrangeTypography2PocketsT-shirt1.jpg",
      "brand": "KLOTTHE",
      "title": "Men Pack of 2 Printed T-shirts",
      "price": "Rs. 652",
      "actualPrice": "Rs. 2329",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4323771/2019/2/5/7d6bc087-9f42-4b32-ac48-b3fa1d8583cd1549356451702-Wildcraft-Men-Black-Printed-Rucksack-3681549356450753-1.jpg",
      "brand": "Wildcraft",
      "title": "Men Printed Rucksack",
      "price": "Rs. 3989",
      "actualPrice": "Rs. 5699",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1959406/2017/10/28/11509183864082-Roadster-Men-Olive-Green-Solid-Hooded-Sweatshirt-711509183863891-1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Sweatshirt",
      "price": "Rs. 1899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9951393/2019/8/22/d57c6740-e85c-434a-bb40-cf765c7a961c1566475032107-Roadster-Men-Shirts-9581566475030373-1.jpg",
      "brand": "Roadster",
      "title": "Men Casual Denim Shirt",
      "price": "Rs. 759",
      "actualPrice": "Rs. 1899",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/5/99ccf9d4-bf61-4636-b44b-6dd9a17009861609854448355-1.jpg",
      "brand": "Free Authority",
      "title": "Men Joker Print Neck Gaiter",
      "price": "Rs. 349",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/5491f43b-955b-46bb-a7dc-f99d7b71350d1621491582175-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2508117/2018/5/11/02d14673-59b7-404c-93a5-3fa778d61b3e1526033060695-Roadster-Men-Olive-Green-Regular-Fit-Printed-Casual-Shirt-4221526033060542-1.jpg",
      "brand": "Roadster",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16366676/2021/12/4/6a2a0cbc-15de-42b5-a380-9b2fb08b7fae1638606618774appulseMenMulticoloured2ColourblockedPocketsSlimFitT-shirt1.jpg",
      "brand": "appulse",
      "title": "Men Pack of 2 Slim Fit T-shirt",
      "price": "Rs. 2998",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14965844/2021/8/8/26d55006-28d4-4aea-bad2-a1796a1a561c1628398432290-Digital-Dress-Room-Men-Cream-Coloured--Gold-Toned-AD-Studded-1.jpg",
      "brand": "Digital Dress Room",
      "title": "Men AD-Studded Letter Z Rakhi",
      "price": "Rs. 599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/569c4ddd-680a-495a-9a88-1b5cdf6a745b1625038179644-1.jpg",
      "brand": "Blacksmith",
      "title": "Cufflink",
      "price": "Rs. 524",
      "actualPrice": "Rs. 1499",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13808678/2021/4/20/8d564db4-1c24-40d7-b573-3628f908d0311618899890767-Lee-Cooper-Men-Casual-Shoes-8131618899889863-1.jpg",
      "brand": "Lee Cooper",
      "title": "Men Leather Flat Boots",
      "price": "Rs. 2309",
      "actualPrice": "Rs. 3299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13561530/2021/3/15/247f10d4-f53b-4ca1-aba9-75a822caac661615795399058-MANARI-India-Men-Olive-Green-Reusable-5-Ply-Camo-Full-Covera-1.jpg",
      "brand": "MANARI India",
      "title": "Men 5 Ply Sustainable Mask",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1099",
      "offer": "(Rs. 400 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/17/a4c1ef39-efc0-4199-bf7a-5524e45d7b091613558895610-1.jpg",
      "brand": "Big Fox",
      "title": "Men High-Top Flat Boots",
      "price": "Rs. 1159",
      "actualPrice": "Rs. 1999",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1630942/2017/2/23/11487846661634-RDSTR-Men-Charcoal-Grey-Chronograph-Watch-MFB-PN-WTH1606-A-7551487846661480-1.jpg",
      "brand": "Roadster",
      "title": "Men Chronograph Watch",
      "price": "Rs. 1014",
      "actualPrice": "Rs. 2899",
      "offer": "(65% OFF)"
    }
  ]


  casualTrauserARR.map(function(el){
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
  
  
    localStorage.setItem("casualTrauserMens",JSON.stringify(casualTrauserARR))
  })