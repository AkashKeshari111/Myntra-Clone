import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Tops = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17366470/2022/3/3/01880ee6-846a-407b-aeb4-6446518de7651646316753058Printedtop1.jpg",
      "brand": "H&M",
      "title": "Girls Printed Cotton Top",
      "price": "Rs. 254",
      "actualPrice": "Rs. 299",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16705408/2022/1/6/ff6b96e5-4ec8-4566-ae33-57fb03bc37bc1641464682566Tops1.jpg",
      "brand": "max",
      "title": "Floral Print Top",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17070836/2022/2/7/5302f65c-57fb-4daf-aad6-14b4b90979201644227889407NatileneMulticolouredFloralPrintTop1.jpg",
      "brand": "Natilene",
      "title": "Floral Print Ruffles Top",
      "price": "Rs. 449",
      "actualPrice": "Rs. 899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17124612/2022/2/10/ddb17015-8cb6-4811-b5fa-0c830bba1a9c1644504229786Collaredjerseytop1.jpg",
      "brand": "H&M",
      "title": "Girls Collared Jersey Top",
      "price": "Rs. 594",
      "actualPrice": "Rs. 699",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16909108/2022/1/22/3d74df94-29bc-4e1a-b98f-1149ea377dd71642853916897ATUNNavyBlueTop1.jpg",
      "brand": "A.T.U.N.",
      "title": "Extended Sleeves Top",
      "price": "Rs. 428",
      "actualPrice": "Rs. 1299",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16509384/2021/12/14/303af1de-4aa1-444f-8994-e8eb969459451639473513264Printedjerseytop1.jpg",
      "brand": "H&M",
      "title": "Printed Jersey Top",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17185604/2022/2/17/95dd8000-d4d8-4fcb-bf39-fceb92bfb21c1645105877784Printedjerseytop1.jpg",
      "brand": "H&M",
      "title": "Printed Jersey Top",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/19/090cffc8-cc2b-47a2-b41f-82853a3c75fd1621401713213-1.jpg",
      "brand": "Pepe Jeans",
      "title": "Striped Cotton Bardot Top",
      "price": "Rs. 899",
      "actualPrice": "Rs. 1499",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16744394/2022/4/28/7d691722-8f28-4dc1-83f0-a21c73795d371651121601298-HM-Girls-Pink-Polka-Dots-Printed-Top-6841651121601244-2.jpg",
      "brand": "H&M",
      "title": "Polka Dots Printed Top",
      "price": "Rs. 254",
      "actualPrice": "Rs. 299",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17186302/2022/2/17/4d24b95c-9d7e-4d1e-8e10-9f150b98c3411645108721835Frill-collaredblouse1.jpg",
      "brand": "H&M",
      "title": "Girls Frill-Collared Blouse",
      "price": "Rs. 699",
      "actualPrice": "Rs. 999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15548414/2021/9/21/3534e48e-23bf-4766-bd05-324f06de80481632212728526maxBlackRegularTop1.jpg",
      "brand": "max",
      "title": "Regular Top",
      "price": "Rs. 399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268526/2022/2/24/ae03968c-a324-4d5b-b63d-3169d1ff616e1645695337099Puff-sleevedjerseytop1.jpg",
      "brand": "H&M",
      "title": "Girls Puff-Sleeved Jersey Top",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17144544/2022/2/12/667de29b-9703-4ace-871d-d2538961e8521644667762591KiddoPantiPeach-ColouredFloralPrintGeorgetteTop1.jpg",
      "brand": "KiddoPanti",
      "title": "Floral Print Georgette Top",
      "price": "Rs. 473",
      "actualPrice": "Rs. 599",
      "offer": "(21% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16866522/2022/1/18/d3d7ebb5-ae76-4ba6-bc41-c14cbd4644421642505740730maxPinkTop1.jpg",
      "brand": "max",
      "title": "Girls Self Design Top",
      "price": "Rs. 399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17124598/2022/2/10/99d0e050-d40d-4634-b0a2-89a984baf1fe1644501977105Motif-fronttop1.jpg",
      "brand": "H&M",
      "title": "Printed Motif-Front Top",
      "price": "Rs. 799",
      "actualPrice": null,
      "offer": null
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
  
  
    localStorage.setItem("TopsKids",JSON.stringify(Tops))
    console.log("inside")
  
  })
 
