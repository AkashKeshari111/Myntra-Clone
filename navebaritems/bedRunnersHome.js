import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

 let BedRunners = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17454350/2022/3/9/c48c35b7-6e97-4567-af15-af4cca4d6b661646823241939Runners1.jpg",
      "brand": "S9home by Seasons",
      "title": "Bed Runner with Cushion Covers",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172754/2022/2/16/32d9d223-01da-456e-bedb-05f370ad405b1645007789639BlackKITCHENAntiSlipKitchenRunner1.jpg",
      "brand": "AEROHAVEN",
      "title": "Anti Slip Floor Runner",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172748/2022/2/16/fe7f0be4-d4a2-4594-ae82-1468d184f5ad1645007754479AEROHAVENTaupeBrownQuirkyAntiSlipKitchenRunner1.jpg",
      "brand": "AEROHAVEN",
      "title": "Quirky Anti Slip Kitchen Runner",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172756/2022/2/16/51625964-f171-4b35-94b7-c3ad318501101645006968206BlueKITCHENAntiSlipKitchenRunner1.jpg",
      "brand": "AEROHAVEN",
      "title": "Quirky Anti Slip Kitchen Runner",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172762/2022/2/16/a5c66dd4-a92e-4d70-9950-b160a46c78601645006746373TealCOOKINGAntiSlipKitchenRunner1.jpg",
      "brand": "AEROHAVEN",
      "title": "Patterned 1850 GSM Anti Slip Kitchen Runner",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15218536/2021/8/21/9e2bacd5-99ed-40a1-b91b-9548f17522791629552337668ArrabiGreenGraphicTCCottonBlend4SEATERTableRunner1.jpg",
      "brand": "Arrabi",
      "title": "Printed 4-Seater Table Runner",
      "price": "Rs. 398",
      "actualPrice": "Rs. 1329",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15812652/2021/10/13/8feffb81-7e50-4cec-be2f-a3f4f1c941db1634113788805Runners1.jpg",
      "brand": "BELLA TRUE",
      "title": "Macrame Table Runner",
      "price": "Rs. 832",
      "actualPrice": "Rs. 1699",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15752598/2021/10/6/a130be5c-da8f-4617-8abc-f89ac90d115f1633514496337Redtablerunnerwithtoneontonebeadssequinandtassels1.jpg",
      "brand": "Amoliconcepts",
      "title": "Embellished Table Runner",
      "price": "Rs. 1600",
      "actualPrice": "Rs. 2000",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15433430/2021/9/11/b1cb108d-8dd7-405c-ac2d-1ec69bc0d0801631356535477HomecentreGoldCinderLeafTableRunner-PVC-33x150cm1.jpg",
      "brand": "Home Centre",
      "title": "Patterned Table Runner",
      "price": "Rs. 899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17113640/2022/2/10/b9e49a94-c060-4f8b-9f74-aa156641c53d1644477110181STITCHNESTCreamPrintedTableRunner1.jpg",
      "brand": "STITCHNEST",
      "title": "Printed Table Runner",
      "price": "Rs. 399",
      "actualPrice": "Rs. 999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/29/14b8ddc6-d5bf-44e8-8686-f5ba298ab9ff1622263272202-1.jpg",
      "brand": "Home Centre",
      "title": "Textured Table Runner",
      "price": "Rs. 899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/26/f23b527e-ba51-4e64-9af0-da45cdefa5b21619443827373-1.jpg",
      "brand": "Status",
      "title": "Abstract Patterned Floor Runner",
      "price": "Rs. 659",
      "actualPrice": "Rs. 1999",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/22/0270cd8b-0318-4187-9b50-1b05fe7795c61600723873746-1.jpg",
      "brand": "ROMEE",
      "title": "Printed Table Runner",
      "price": "Rs. 419",
      "actualPrice": "Rs. 1399",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1390849/2016/6/13/11465811519179-SEJ-by-Nisha-Gupta-Unisex-Table-Runner-1571465811519085-1.jpg",
      "brand": "SEJ by Nisha Gupta",
      "title": "Ethnic Cotton Table Runner",
      "price": "Rs. 554",
      "actualPrice": "Rs. 1849",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/19/1e719fe0-5459-46a8-9094-f19e8734200c1618844820990-1.jpg",
      "brand": "BELLA TRUE",
      "title": "Digital Printed Table Runner",
      "price": "Rs. 349",
      "actualPrice": "Rs. 2499",
      "offer": "(86% OFF)"
    }
  ]


  BedRunners.map(function(el){
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
  
  
    localStorage.setItem("BedRunnersHome",JSON.stringify(BedRunners))
    console.log("inside")
  
  })
 
