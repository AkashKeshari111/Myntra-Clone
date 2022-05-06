import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Lipstick = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178082/2020/1/13/22d48310-290a-429b-8534-db884cde683f1578907784720-Maybelline-New-York-Sensational-03-Flush-It-Red-Liquid-Matte-1.jpg",
      "brand": "Maybelline",
      "title": "Matte Lipstick-Flush It Red 03",
      "price": "Rs. 268",
      "actualPrice": "Rs. 349",
      "offer": "(23% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178096/2022/3/28/16f525cb-5e71-4193-8f59-3a52b4925f501648457264774-Maybelline-New-York-Sensational-Liquid-Matte-Lipstick---08-S-1.jpg",
      "brand": "Maybelline",
      "title": "Liquid Matte Sensationally Me",
      "price": "Rs. 289",
      "actualPrice": "Rs. 349",
      "offer": "(17% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14336572/2021/5/24/0c23a790-a8e3-4a27-be5e-2b177698a2c61621829340252-Maybelline-Women-Beauty-Gift-Set-1431621829340019-1.jpg",
      "brand": "Maybelline",
      "title": "Set of 4 Liquid Matte Minis",
      "price": "Rs. 316",
      "actualPrice": "Rs. 396",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2230635/2017/11/7/11510034492880-Maybelline-Women-Lipstick-9421510034492872-1.jpg",
      "brand": "Maybelline",
      "title": "Super Stay Matte - 15 Lover",
      "price": "Rs. 650",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105590/2022/4/13/fe16c1fd-2fd7-4281-9fac-211e1b3252271649824360798Lakme9to5PrimerMatteLipstick-PlumPickMP41.jpg",
      "brand": "Lakme",
      "title": "Matte Lipstick-Plum Pick MP4",
      "price": "Rs. 400",
      "actualPrice": "Rs. 500",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8051025/2022/2/21/61beefd1-6915-4944-bf1b-a7463e5f260f1645423276110-Maybelline-New-York-Super-Stay-Matte-Ink-Liquid-Lipstick---F-1.jpg",
      "brand": "Maybelline",
      "title": "Super Stay Matte - Founder 115",
      "price": "Rs. 594",
      "actualPrice": "Rs. 699",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6870092/2018/12/26/001c5c9d-ec8a-4091-a16b-df8a850b0bbe1545825125810-Maybelline-New-York-80-Ruler-Super-Stay-Matte-Ink-Liquid-Lip-1.jpg",
      "brand": "Maybelline",
      "title": "Super Stay Matte - Ruler 80",
      "price": "Rs. 608",
      "actualPrice": "Rs. 699",
      "offer": "(13% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990822/2021/12/8/fa878233-56ad-462c-aa4d-b0aa43583c151638957490027-Maybelline-Color-Sensational-Ultimattes-Lipstick-More-Blush--5.jpg",
      "brand": "Maybelline",
      "title": "Lipstick 499 More Blush",
      "price": "Rs. 494",
      "actualPrice": "Rs. 549",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2383022/2018/3/14/11521032706846-Maybelline-Color-Sensational-Chilli-Nude-Inti-Matte-Nudes-Lipstick-2141521032706813-1.jpg",
      "brand": "Maybelline",
      "title": "Matte Lipstick - Chilli Nude",
      "price": "Rs. 209",
      "actualPrice": "Rs. 299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/20/91913af8-d794-4aa7-b4a1-b54176fbb3321576792969444-2.jpg",
      "brand": "SUGAR",
      "title": "Matte Transferproof Lipstick",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11632896/2021/7/26/9d860722-88ac-4ec4-adb0-19eebbaeb0e41627289836416-SUGAR-Set-of-4-Smudge-Me-Not-Liquid-Mini-Nude-Lipstick-41416-1.jpg",
      "brand": "SUGAR",
      "title": "Set of 4 Mini Lipstick",
      "price": "Rs. 799",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/b0841404-fbd0-41bc-afcd-56eeacdec8e01610179137422-1.jpg",
      "brand": "Just Herbs",
      "title": "Ayurvedic Lipstick Trial Kit",
      "price": "Rs. 460",
      "actualPrice": "Rs. 575",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105572/2021/1/25/9547adc2-db67-42b6-81d5-fbd835046a5d1611572248485-Lakme-Women-Lipstick-2481611572247698-1.jpg",
      "brand": "Lakme",
      "title": "Lipstick-Rosy Sunday MP8",
      "price": "Rs. 470",
      "actualPrice": "Rs. 500",
      "offer": "(6% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990832/2021/12/1/39122196-78f1-4485-ae4d-fd6f6a57c84f1638338165721-Maybelline-Women-Lipstick-5591638338165630-1.jpg",
      "brand": "Maybelline",
      "title": "Lipstick- 399 More Magenta",
      "price": "Rs. 466",
      "actualPrice": "Rs. 549",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1906679/2022/4/21/287444a2-5425-48b4-8f3f-9777d201a4251650544469288LakmeEnrichLipCrayonCinnamonBrown091.jpg",
      "brand": "Lakme",
      "title": "Enrich Lip Crayon - Cinnamon Brown",
      "price": "Rs. 258",
      "actualPrice": "Rs. 275",
      "offer": "(6% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55269/2021/3/24/2a8ba3df-cca2-4f48-ab17-8cd307538c621616563309201-Lakme-Absolute-Shine-Line-Eye-Liner---Black-3261616563308869-1.jpg",
      "brand": "Lakme",
      "title": "Shine Line Eye Liner - Black",
      "price": "Rs. 378",
      "actualPrice": "Rs. 450",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Shimmery Bronze",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
      "brand": "Lakme",
      "title": "Line Eyeliner - Steel Grey",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg",
      "brand": "Maybelline",
      "title": "Gel Eyeliner - Blackest Black",
      "price": "Rs. 350",
      "actualPrice": "Rs. 500",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Sparkling Olive",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5660739/2022/4/18/d346f98d-585b-480e-847c-64bfa8f004d11650284885776MaybellineNewYorkColossalKajal-SuperBlack1.jpg",
      "brand": "Maybelline",
      "title": "Colossal Kajal - Super Black",
      "price": "Rs. 240",
      "actualPrice": "Rs. 300",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8450977/2022/2/23/1db855f2-5677-4590-9eef-2ded0bce94311645615492693-Lakme-9to5-Pure-Rouge-Blusher---Coral-Punch-1741645615492210-1.jpg",
      "brand": "Lakme",
      "title": "9to5 Pure Rouge Blusher",
      "price": "Rs. 500",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2368963/2020/7/24/bd290bdf-abb9-4739-992c-87591d0a36ec1595568846153LakmeEyeconicFineTipLinerPen-DeepBlack1ml1.jpg",
      "brand": "Lakme",
      "title": "Fine Tip Liner Pen-Deep Black",
      "price": "Rs. 445",
      "actualPrice": "Rs. 500",
      "offer": "(11% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
      "brand": "Colorbar",
      "title": "Waterproof Eyeliner - Black",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2000582/2022/4/26/8cae6f02-a974-4209-946c-843c932ad11a1650957988536-Lakme-9-to-5-SPF-30-Complexion-Care-Cream--Honey-30-g-809165-1.jpg",
      "brand": "Lakme",
      "title": "Honey SPF 30 CC Cream - 30 g",
      "price": "Rs. 360",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/image/style/properties/285218/Lakme-9-to-5-Black-Impact-Eyeliner_1_96bd14879dc3013d4aed0c7216d36419.jpg",
      "brand": "Lakme",
      "title": "9to5 Eyeliner - Black Impact",
      "price": "Rs. 252",
      "actualPrice": "Rs. 300",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
      "brand": "Lakme",
      "title": "Naturale Black Gel Kajal",
      "price": "Rs. 441",
      "actualPrice": "Rs. 475",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
      "brand": "FACES CANADA",
      "title": "Magneteyes Kajal Black 01",
      "price": "Rs. 139",
      "actualPrice": "Rs. 179",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2966311/2022/3/31/c85baf75-a526-47f1-bd27-c2a54e24b0581648724132330MaybellineNewYorkFaceStudioMasterChromeMetallicHighlighter-M1.jpg",
      "brand": "Maybelline",
      "title": "Studio Metallic Highlighter",
      "price": "Rs. 449",
      "actualPrice": "Rs. 599",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1546432/2022/4/1/3b25eb26-7876-4ca1-ba02-e6f93950777f1648804871850MaybellineNewYorkFitMeConcealer-10Light68ml1.jpg",
      "brand": "Maybelline",
      "title": "Fit Me Concealer - Light 10",
      "price": "Rs. 399",
      "actualPrice": "Rs. 499",
      "offer": "(20% OFF)"
    }
  ]



  Lipstick.map(function(el){
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
  
  
    localStorage.setItem("LipstickBeauty",JSON.stringify(Lipstick))
    console.log("inside")
  
  })
 
