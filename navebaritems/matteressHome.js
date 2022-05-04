import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Mattress = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/15/6d315a47-56d0-47f0-bdcb-058e5faa5d691623742292125-1.jpg",
      "brand": "Home Centre",
      " title": "Queen Size Mattress Topper",
      "price": "Rs. 12999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/4/3d35a164-5695-4446-9e24-6d5ab05313161601760642275-1.jpg",
      "brand": "Rajasthan Decor",
      " title": "Double Bed Mattress Protector",
      "price": "Rs. 1599",
      "actualPrice": "Rs. 4999",
      "offer": "(68% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/5/dde97374-1adf-428f-8ab0-68d77624178b1572902694970-1.jpg",
      "brand": "Story@home",
      " title": "Double Bed Water Proof & Dust Proof Mattress Protector",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 1999",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/6/11/b61c8e10-9d7b-438f-b013-4f1291b4d2691591832809073-1.jpg",
      "brand": "HOSTA HOMES",
      " title": "Solid Mattress Protector",
      "price": "Rs. 1574",
      "actualPrice": "Rs. 3499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/19/c06d4154-9cb9-46b1-b682-df4de659b6df1621411760484-1.jpg",
      "brand": "Story@home",
      " title": "Solid Waterproof & Dustproof Single Size Mattress Protector",
      "price": "Rs. 974",
      "actualPrice": "Rs. 1499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15258344/2021/8/26/52873d3f-bc9a-409f-9229-071c10d27aba1629949876116QULITEDCOTTONKINGSIZEMATTRESSPROTECTORBYHOSTAHOMES1.jpg",
      "brand": "HOSTA HOMES",
      " title": "Quilted Cotton King Bed Mattress Protector",
      "price": "Rs. 1899",
      "actualPrice": "Rs. 3799",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/92de449c-0271-4691-863b-dab6831aff711614942247163-1.jpg",
      "brand": "BIANCA",
      " title": "Solid Waterproof Mattress Protector",
      "price": "Rs. 1506",
      "actualPrice": "Rs. 2598",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15258346/2021/8/26/4595dfb7-d85a-4693-9576-a8dfc0c1b7311629950501689QULITEDCOTTONKINGSIZEMATTRESSPROTECTORBYHOSTAHOMES1.jpg",
      "brand": "HOSTA HOMES",
      " title": "Quilted Cotton King Bed Mattress Protector",
      "price": "Rs. 1899",
      "actualPrice": "Rs. 3799",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14997946/2021/11/11/2c18b715-14a0-4330-81aa-cbd4a98d8dc91636584443828-LA-VERNE-Blue-King-Size-Cotton-Terry-Waterproof-Mattress-Pro-1.jpg",
      "brand": "LA VERNE",
      " title": "Waterproof Mattress Protector",
      "price": "Rs. 999",
      "actualPrice": "Rs. 2999",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16858588/2022/1/18/32c9f608-f232-4601-a9fb-fda4b54da9981642479360813MattressProtector1.jpg",
      "brand": "Divine Casa",
      " title": "Mattress Protector",
      "price": "Rs. 949",
      "actualPrice": "Rs. 3799",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/6/10/203016cb-c800-45e0-90ed-f458ae74b9ce1591743973946-1.jpg",
      "brand": "HOSTA HOMES",
      " title": "Solid Waterproof & Dustproof Queen Bed Mattress Protector",
      "price": "Rs. 1349",
      "actualPrice": "Rs. 2999",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16858600/2022/1/18/f34ca54c-9342-4ab4-8e68-90e8a516ecfb1642478739424MattressProtector1.jpg",
      "brand": "Divine Casa",
      " title": "210 GSM Mattress Protector",
      "price": "Rs. 949",
      "actualPrice": "Rs. 3799",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/19/c4f795b1-435d-4476-a9c8-be05ede697381621411998112-1.jpg",
      "brand": "Story@home",
      " title": "Solid Waterproof Mattress Cover",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 1999",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/cfe9e36a-3e41-4d42-a3f9-47f046d00b7b1614945232039-1.jpg",
      "brand": "BIANCA",
      " title": "Solid Waterproof Micro-Terry Mattress Protector With Elastic Edges",
      "price": "Rs. 1790",
      "actualPrice": "Rs. 3198",
      "offer": "(44% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/8aa67bdd-bb5f-4ebd-86d6-b3de44655c181614940191589-1.jpg",
      "brand": "BIANCA",
      " title": "Solid Waterproof Mattress Protector",
      "price": "Rs. 1790",
      "actualPrice": "Rs. 3198",
      "offer": "(44% OFF)"
    }
  ]
  Mattress.map(function(el){
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
  
  
    localStorage.setItem("MattressBeauty",JSON.stringify(Mattress))
    console.log("inside")
  
  })
 
