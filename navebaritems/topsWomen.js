import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Tops = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11364258/2020/1/31/899b523a-f57a-48fb-80cd-8422614f195d1580451588210-SASSAFRAS-Women-Green--Beige-Printed-Blouson-Top-49515804515-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Floral Georgette Blouson Top",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12222044/2020/8/14/16302e01-c0ca-4e70-80e5-db8c2064ce8f1597405258249-SASSAFRAS-Women-Peach-Coloured-Solid-Top-9011597405255592-1.jpg",
      "brand": "SASSAFRAS",
      "title": "High-Neck Top",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9070021/2019/3/28/f0bce3b7-9ca8-45c9-a33d-dfd07c849a9c1553778513694-SASSAFRAS-Women-Beige--Black-Regular-Fit-Printed-Shirt-11915-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Animal Print Shirt Style Top",
      "price": "Rs. 629",
      "actualPrice": "Rs. 1399",
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12284212/2020/8/25/8fc39488-cee7-4424-870d-ae5bd666d19c1598366814622-SASSAFRAS-Women-Black-Solid-Top-601598366813572-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Ribbed Crop Top",
      "price": "Rs. 449",
      "actualPrice": "Rs. 899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8643215/2019/2/1/dd3ef60d-be47-4a19-93c9-8598694020281549016416015-SASSAFRAS-Women-Grey-Solid-Blouson-Top-7381549016414303-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Layered Cropped Blouson Top",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1052250/2019/4/11/fb86e884-dbdc-4951-bb45-38cc400c437f1554985706259-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Casual-Shirt-3-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Ruffled Shirt Style Top",
      "price": "Rs. 549",
      "actualPrice": "Rs. 999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/c3f87e02-333b-4008-aa5c-3bb5d3fc658a1611743836816-1.jpg",
      "brand": "Harpa",
      "title": "Square Neck Top",
      "price": "Rs. 643",
      "actualPrice": "Rs. 1399",
      "offer": "(54% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4325708/2018/4/2/11522662991296-Style-Quotient-Women-Tops-4231522662991112-1.jpg",
      "brand": "Style Quotient",
      "title": "Polka Dot Print Top",
      "price": "Rs. 575",
      "actualPrice": "Rs. 1599",
      "offer": "(64% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8841591/2019/3/5/e92e95ab-68ed-4c6b-8d3e-146d777f9bbf1551780857345-La-Zoire-Stripe-Shifly-Top-831551780856037-1.jpg",
      "brand": "La Zoire",
      "title": "Striped A-Line Top",
      "price": "Rs. 879",
      "actualPrice": "Rs. 1599",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13843266/2022/4/18/abaa6501-e1be-4b8e-af96-ecae86eed9e41650283574811SassafrasBlackSilverStripedOneShoulderPuffSleevesCinchedWais1.jpg",
      "brand": "SASSAFRAS",
      "title": "Striped One Shoulder Puff Sleeves Top",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9070485/2022/4/18/c2030007-83c4-4a80-8a9e-c964cef044791650284882570SASSAFRASBlackStyledBackCropTop1.jpg",
      "brand": "SASSAFRAS",
      "title": "Styled Back Crop Top",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13842966/2021/4/3/3d20dde9-8c47-48f2-a079-8cdacd9c78b11617444711671-Sassafras-Brown--Red-Geometric-Printed-Georgette-Wrap-Crop-T-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Geometric Printed Georgette Wrap Top",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10308651/2019/7/26/09114b19-d977-46ca-8f25-f33c9b47456a1564140179144-SASSAFRAS-Women-Blue-Solid-Top-3621564140176982-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Pleated Frilled Hem Top",
      "price": "Rs. 559",
      "actualPrice": "Rs. 1399",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11364152/2020/1/27/091a681c-beb4-4192-bc64-44ca554391141580121893720-SASSAFRAS-Women-White-Solid-Blouson-Top-731580121889856-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Extended Sleeved Blouson",
      "price": "Rs. 499",
      "actualPrice": "Rs. 999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/23/01f58b90-bc30-4b49-adb0-9c642b7bfe191614060968879-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 299",
      "actualPrice": "Rs. 1199",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/23/a662867d-8177-4d75-9536-e220383413571614090252672-1.jpg",
      "brand": "WINSOME DEAL",
      "title": "Solid Belt",
      "price": "Rs. 296",
      "actualPrice": "Rs. 899",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/24/f3de0b8f-64d9-40f7-bd50-3e950298f3e51614142066451-1.jpg",
      "brand": "Kastner",
      "title": "Pack of 2 Solid Belt",
      "price": "Rs. 447",
      "actualPrice": "Rs. 1599",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13410500/2021/10/21/3f9f5394-463e-4125-8ddb-c06f20ebbc681634800169728-Kastner-Women-Black-Solid-Belt-1041634800169456-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 295",
      "actualPrice": "Rs. 799",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10604514/2019/9/13/6caeb091-11d9-4fcf-8af7-dd4303d429e81568368379676-SASSAFRAS-Women-Jeans-271568368377035-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Straight Cropped Jeans",
      "price": "Rs. 854",
      "actualPrice": "Rs. 1899",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/d3dc2a8c-23d3-408f-81ad-e5f96cddde531610369238995-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 295",
      "actualPrice": "Rs. 799",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10840034/2019/11/13/e2f6ef38-51d8-402d-a157-f3fc0745b9a71573622842433-20Dresses-Women-Black-Solid-Belt-4341573622841765-1.jpg",
      "brand": "20Dresses",
      "title": "Women Solid Elasticated Belt",
      "price": "Rs. 671",
      "actualPrice": "Rs. 895",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/c11e14aa-8b67-403e-a397-c7026cb871ae1610368656453-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 295",
      "actualPrice": "Rs. 799",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/23/37cc622a-3c22-453c-9302-c9bf168835f71614056451736-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 1199",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11866266/2020/6/11/84650ad3-7e3a-49e2-b3d4-532c3e441ddd1591851344259-SASSAFRAS-Women-Trousers-7851591851342000-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Trousers",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12278598/2020/11/10/f8136b3c-5338-4025-bd40-6b4967f528a71604995228202-Roadster-Women-Jeans-9211604995225290-1.jpg",
      "brand": "Roadster",
      "title": "Women Skinny Fit Cropped Jeans",
      "price": "Rs. 719",
      "actualPrice": "Rs. 1599",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11731340/2021/9/17/632f566c-fc30-49d9-8cff-60837f1f67b41631821743059CRUSSETWomenBlackSolidBelt1.jpg",
      "brand": "CRUSSET",
      "title": "Women Solid Belt",
      "price": "Rs. 344",
      "actualPrice": "Rs. 1499",
      "offer": "(77% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12221882/2020/9/7/286df0e6-5791-4393-81e0-1a7d7e3571561599456724282-SASSAFRAS-Women-Blue-Regular-Fit-Mid-Rise-Clean-Look-Stretch-1.jpg",
      "brand": "SASSAFRAS",
      "title": "Women Regular Fit Jeans",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/2/4e67fadc-57ba-4094-b20b-f4145f2e86071614705245633-1.jpg",
      "brand": "Bella Toes",
      "title": "Women Sneakers",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7414863/2018/9/17/e05a8578-4be1-4be5-a749-9e83add572121537168850217-NA-9871537168849993-1.jpg",
      "brand": "Zastraa",
      "title": "Women Peg Trousers",
      "price": "Rs. 779",
      "actualPrice": "Rs. 2599",
      "offer": "(70% OFF)"
    }
  ]



  Tops.map(function(el){
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
  
  
    localStorage.setItem("TopsWomen",JSON.stringify(Tops))
    console.log("inside")
  
  })
 
