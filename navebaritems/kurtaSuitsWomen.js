import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();


let KurtasSuits = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13962098/2021/4/14/877b6542-dc0b-4352-bf9a-2e200ba068181618405391945DeewaPrintedPinkA-LineDressKurtaSetsZIYAAWomenKurtaSetsZIYAA6.jpg",
      "brand": "ZIYAA",
      "title": "Printed Kurta with Trousers",
      "price": "Rs. 972",
      "actualPrice": "Rs. 2430",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14038092/2021/4/20/e70ba29d-ea27-4e0c-990e-38b4838f8e531618917104638KurtaSetsAHIKAWomenKurtaSetsAHIKAWomenKurtaSetsAHIKAWomenKur1.jpg",
      "brand": "AHIKA",
      "title": "Printed Kurta with Trousers & Dupatta",
      "price": "Rs. 1574",
      "actualPrice": "Rs. 3748",
      "offer": "(58% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/2/0f576a65-3225-4aac-9db9-4b5743f9199f1622617345842-1.jpg",
      "brand": "Stylum",
      "title": "Women Striped Kurta with Trousers With Dupatta",
      "price": "Rs. 1056",
      "actualPrice": "Rs. 2400",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/22/9faa9d87-fb5c-49e0-a748-d3511aa35cd11624340534242-1.jpg",
      "brand": "Indo Era",
      "title": "Women Yoke Design Kurta with Palazzos With Dupatta",
      "price": "Rs. 1759",
      "actualPrice": "Rs. 3999",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16295538/2021/11/29/0e6f9fdd-2558-4c03-ab84-df9fbff2d5e91638190875095WomensPinkCottonPrintedKurtaWithTrouserSet1.jpg",
      "brand": "THE NKS PLUS",
      "title": "Woman Peach Kurta & Palazzos",
      "price": "Rs. 899",
      "actualPrice": "Rs. 2499",
      "offer": "(64% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14203104/2021/6/28/cb46c83c-9d85-4441-bbcb-aa21455b8a861624859278600-Sangria-Women-Kurta-Sets-9871624859277961-1.jpg",
      "brand": "Sangria",
      "title": "Women Cotton Kurta Sets",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/9/e9cc12aa-854b-48e0-b7ba-6bcf4e4a62e51617948770143-1.jpg",
      "brand": "ANAISA",
      "title": "Embroidered Kurta with Trousers",
      "price": "Rs. 987",
      "actualPrice": "Rs. 2669",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16991432/2022/1/31/d98622c6-c0e9-48d0-8af5-5c6ea78491d61643620795853GoSrikiWomenGreenStraightSolidKurtawithPalazzoDupatta1.jpg",
      "brand": "GoSriKi",
      "title": "Kurta with Trousers & Dupatta",
      "price": "Rs. 998",
      "actualPrice": "Rs. 3699",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15262564/2021/10/18/3e5de65a-4aeb-4746-b981-4e3edfcd5fa01634543478338-Indo-Era-Women-Navy-Blue-Ethnic-Motifs-Yoke-Design-Cotton-Ku-13.jpg",
      "brand": "Indo Era",
      "title": "Women Yoke Design Kurta with Palazzos With Dupatta",
      "price": "Rs. 1403",
      "actualPrice": "Rs. 3599",
      "offer": "(61% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16595430/2022/1/17/e71ccafc-0971-43fc-b6d2-259e9804c34d1642421396636RangritiWomenAssortedPrintedKurtawithPalazzosDupatta1.jpg",
      "brand": "Rangriti",
      "title": "Women Assorted Kurta Set",
      "price": "Rs. 2299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10306657/2019/9/21/185212e8-b3d5-4fee-886d-2aac0dd9e5211569064558443-IMARA-Women-Kurta-Sets-5061569064556675-1.jpg",
      "brand": "IMARA",
      "title": "Women Yoke Design Kurta with Trousers & Dupatta",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 2999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14345986/2022/2/4/2d941a96-a140-4707-8cee-bc3b2c26744b1643937538871NayoWomenNavyBlueStraightScreenPrintPureCottonKurtaPalazzosW1.jpg",
      "brand": "Nayo",
      "title": "Women Kurta Set & Dupatta",
      "price": "Rs. 1399",
      "actualPrice": "Rs. 3499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17171690/2022/2/16/c687fae9-54a6-4c01-af44-771d17fbe6211645005298812KALINIAngrakhaKurtaPantandDupattaSet3.jpg",
      "brand": "KALINI",
      "title": "Kurta with Trousers & Dupatta",
      "price": "Rs. 999",
      "actualPrice": "Rs. 3999",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12307502/2022/4/18/ee3d06ff-fe83-4a7f-829a-2c1622987a371650283480461PrakhyaWomenPinkSelfDesignKurtawithTrousersDupatta1.jpg",
      "brand": "Prakhya",
      "title": "Self Design Kurta with Trousers & Dupatta",
      "price": "Rs. 989",
      "actualPrice": "Rs. 3298",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15508976/2021/9/29/6af853e2-4cf8-45e0-b28a-90c0ba578d0a1632905310824IndoEraBluePrintedStraightKurtaTrouserWithDupattaSet1.jpg",
      "brand": "Indo Era",
      "title": "Women Printed Kurta with Palazzos With Dupatta",
      "price": "Rs. 2039",
      "actualPrice": "Rs. 5999",
      "offer": "(66% OFF)"
    }
  ]


  KurtasSuits.map(function(el){
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
  
  
    localStorage.setItem("KurtasSuitsWomen",JSON.stringify(KurtasSuits))
    console.log("inside")
  
  })
 
