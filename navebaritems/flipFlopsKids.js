import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Flipflops = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201630/2021/12/28/586271e0-d25d-401d-b0f1-896ab2e65d8c1640693364033-Crocs-Unisex-Kids-Sandals-8611640693363462-1.jpg",
      "brand": "Crocs",
      "title": "Kids Bayaband Clogs",
      "price": "Rs. 2495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201562/2022/3/7/41f6baba-721e-453c-a591-8a290f117cd71646630111339-Crocs-Kids-Pink-Croslite-Clogs-5761646630110915-1.jpg",
      "brand": "Crocs",
      "title": "Kids Croslite Clogs",
      "price": "Rs. 2295"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201542/2022/3/7/ea4bf203-8b21-4692-b075-5f8845c5078e1646649560376-Crocs-Unisex-Kids-Green-Classic-T-Citrus-Croslite-Clogs-1801-1.jpg",
      "brand": "Crocs",
      "title": "Unisex Kids Croslite Clogs",
      "price": "Rs. 1495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201734/2022/1/3/010dfe29-4f59-42e2-9c59-6af3a4afac481641192668259-Crocs-Unisex-Kids-Sandals-8051641192667863-1.jpg",
      "brand": "Crocs",
      "title": "Kids Bayaband Solid Clogs",
      "price": "Rs. 2795"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201572/2022/3/7/d0db09b7-2eb0-4453-8dfc-1073a013e4a01646649674256-Crocs-Kids-Pink-Classic-K-TPk-Croslite-Clogs-567164664967397-1.jpg",
      "brand": "Crocs",
      "title": "Kids Croslite Clogs",
      "price": "Rs. 1795"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201722/2021/12/28/1ca06b5c-e13a-404a-a09a-4958ae32eea61640693375847-Crocs-Unisex-Kids-Sandals-9981640693375172-1.jpg",
      "brand": "Crocs",
      "title": "Kids Bayaband Clogs",
      "price": "Rs. 2495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201596/2022/1/21/3e4aef1d-a17d-4825-a5b7-4de3c8f7d5021642767139982-Crocs-Kids-Grey--Navy-Blue-Crocband-Croslite-Clogs-268164276-1.jpg",
      "brand": "Crocs",
      "title": "Kids Crocband Croslite Clogs",
      "price": "Rs. 2295"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17380402/2022/3/4/e6ca712d-612c-4bcb-a2e0-3f76d316adb41646400296837CrocsUnisexKidsPinkSandals1.jpg",
      "brand": "Crocs",
      "title": "Unisex Kids Croslite Clogs",
      "price": "Rs. 1795"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16508524/2021/12/14/97b65b97-eb33-4e78-87c5-c1ba3dc2020b1639469645945CrocsUnisexKidsBlackSolid1.jpg",
      "brand": "Crocs",
      "title": "Unisex Kids Croslite Clogs",
      "price": "Rs. 3495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17380404/2022/3/4/ac7ab698-bb65-4736-bea0-605ac8e0d3a71646400293667CrocsUnisexKidsMultiSandals1.jpg",
      "brand": "Crocs",
      "title": "Unisex Kids Printed Croslite Clogs",
      "price": "Rs. 1795"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201576/2022/2/2/3fa4134e-d922-4a9d-a258-52d826bc8b731643803717910-Crocs-Unisex-Kids-Pink-Croslite-Clogs-7391643803717283-1.jpg",
      "brand": "Crocs",
      "title": "Kids Croslite Clogs",
      "price": "Rs. 1495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201686/2022/3/7/665a3302-ca8b-4170-856e-d0f48e1f0ad11646641978271-Crocs-Unisex-Kids-Green-Classic-K-Citrus-Croslite-Clogs-6941-1.jpg",
      "brand": "Crocs",
      "title": "Unisex Kids Croslite Clogs",
      "price": "Rs. 1795"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8696487/2019/3/13/477bb7c8-152a-4b78-81fe-694a884c35af1552471463871-Crocs-Unisex-Flip-Flops-7381552471463032-1.jpg",
      "brand": "Crocs",
      "title": "Kids Crocband Thong Flip-Flops",
      "price": "Rs. 1495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2482771/2018/5/8/11525770226330-Crocs-Unisex-Flip-Flops-1651525770226196-1.jpg",
      "brand": "Crocs",
      "title": "Kids Classic Clogs",
      "price": "Rs. 1495"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15112892/2021/12/9/fee187a1-5e94-427a-a1bd-face746755981639029562920-Crocs-Unisex-Kids-Sandals-351639029562525-1.jpg",
      "brand": "Crocs",
      "title": "Kids Glitter Clogs",
      "price": "Rs. 1795"
    }
  ]



  Flipflops.map(function(el){
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
  
  
    localStorage.setItem("FlipflopsKids",JSON.stringify(Flipflops))
    console.log("inside")
  
  })
 
