import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Face =[
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509854/2021/4/13/28434eb8-28a1-4d70-ba28-290bb424d5231618311009851-Olay-Women-Face-Moisturisers-1601618311009637-1.jpg",
      "brand": "Olay",
      "title": "Women SPF 24 Day Cream",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57782/2020/10/10/7505b6c6-ae86-40c0-883c-78cc391cb75e1602273099106LotusHerbalsSustainableWomenNutramoistSkinRenewalDailyCream51.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Nutramoist Skin Renewal Cream",
      "price": "Rs. 364",
      "actualPrice": "Rs. 455",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57630/2020/10/10/40f2ef8c-9a39-4ee6-ab40-ca86c8957d291602269994214LotusHerbalsSustainableNutraniteSkinRenewalNutritiveNightCre1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Nutranite Skin Renewal Night Cream",
      "price": "Rs. 364",
      "actualPrice": "Rs. 455",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57692/2022/1/27/491e9858-0aec-4fa7-b31b-b1221a7bd4f21643279838266LotusHerbalsSustainableSheaButterMoisturiser120g1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Shea Butter Moisturiser",
      "price": "Rs. 258",
      "actualPrice": "Rs. 345",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509842/2021/8/11/19b48d54-fc72-49d8-a20b-7754778988011628659279386OlayWomenNaturalWhite7inOneNourishingNightRepairCream50g1.jpg",
      "brand": "Olay",
      "title": "Women Night Repair Cream",
      "price": "Rs. 292",
      "actualPrice": "Rs. 365",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11699568/2022/1/27/d711eb0a-c9bd-473f-8367-9b99c64785a41643279982185BiotiqueWomenMorningNectarFlawlessSkinCreamwithBadamSeedOil11.jpg",
      "brand": "Biotique",
      "title": "Nectar Flawless Skin Cream",
      "price": "Rs. 174",
      "actualPrice": "Rs. 230",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57694/2020/10/10/5e174bd2-95f1-4e79-8606-482e2465ee4a1602270641317LotusHerbalsSustainableWomenWhiteAlphaHydroxyOil-FreeMoistur1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Alpha Hydroxy Oil-Free Moisturiser",
      "price": "Rs. 260",
      "actualPrice": "Rs. 325",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7197210/2021/9/29/1d7a7e49-0f54-4a40-919d-6c9e964a19e01632856574405-Ponds-Non-Oily-Light-Moisturiser-150-ml-381632856573467-1.jpg",
      "brand": "Ponds",
      "title": "Light Moisturiser 150 ml",
      "price": "Rs. 192",
      "actualPrice": "Rs. 219",
      "offer": "(12% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57702/2020/10/10/1d8a3452-cef3-4d10-b547-36d3b125c8a21602270806662LotusHerbalsSustainableAlmondAnti-WrinkleCreme50g1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Almond Anti-Wrinkle Creme",
      "price": "Rs. 356",
      "actualPrice": "Rs. 475",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509846/2021/8/11/b67377aa-386a-41e3-b1a7-7e3889d7eb531628659416371OlayTotalEffects7InOneNightCream-50g1.jpg",
      "brand": "Olay",
      "title": "7 In One Night Cream",
      "price": "Rs. 719",
      "actualPrice": "Rs. 899",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9337273/2020/5/19/5fde2839-c24b-47f5-8d7d-678c6f5b8b531589882046284NiveaSetof2BodyFaceMoisturisers1.jpg",
      "brand": "Nivea",
      "title": "Lotion & Face Moisturisers",
      "price": "Rs. 471",
      "actualPrice": "Rs. 524",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506304/2021/10/5/d0d42ed8-295a-49ab-9a11-c328333f30661633428468519-Dove-Women-Face-Moisturisers-6331633428468424-1.jpg",
      "brand": "Dove",
      "title": "Body Butter Paraben Free",
      "price": "Rs. 218",
      "actualPrice": "Rs. 230",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318446/2021/8/11/7141eb69-c1c5-4e4d-8dc1-bbf15ddf0bde1628671502854OlayWomenRegeneristMicro-SculptingAnti-AgeingFaceMoisturiser1.jpg",
      "brand": "Olay",
      "title": "Regenerist Face Moisturiser",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11752718/2020/9/29/332a6efb-6580-4947-abb1-e6aec905ea071601376847184-Lotus-Herbals-Women-Face-Moisturisers-871601376846087-1.jpg",
      "brand": "Lotus Herbals",
      "title": "Anti-Blemish Creme 50 g",
      "price": "Rs. 620",
      "actualPrice": "Rs. 775",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11618812/2020/10/10/581ad042-7e67-4abe-8e93-8ef02376eadb1602273112716LotusHerbalsSustainableYOUTHRXGineplexYouthActivatingSerumCr1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Youth Activating Serum+Creme",
      "price": "Rs. 875",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55243/2022/3/21/67b62137-0277-460f-a0d2-385bdd09be941647860136423-Lakme-Perfecting-Liquid-Foundation---Natural-Pearl-27ml-5181-1.jpg",
      "brand": "Lakme",
      "title": "Natural Pearl Foundation",
      "price": "Rs. 130",
      "actualPrice": "Rs. 155",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792562/2022/3/25/17bbc36f-c331-42b0-b5ef-0de38fa40d3d1648208654463-Lakme-9To5-Primer--Matte-Perfect-Cover-Foundation---Neutral--1.jpg",
      "brand": "Lakme",
      "title": "Foundation-Neutral Medium N220",
      "price": "Rs. 437",
      "actualPrice": "Rs. 475",
      "offer": "(8% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/6bb916d7-8f56-4c36-8a41-e1b9dead44e81543029083259-1.jpg",
      "brand": "VLCC",
      "title": "Facial Kit",
      "price": "Rs. 350",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1954340/2022/4/25/65d4a9b6-a9dd-4d14-b66c-293b5ba647531650873316918-Ponds-Bright-Beauty-Spot-Less-Glow-Face-Wash-with-Vitamins---1.jpg",
      "brand": "Ponds",
      "title": "Bright Beauty Face Wash 100 g",
      "price": "Rs. 175",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/19ee9b8e-84c9-4bff-b0f1-ae07c7235a951543028025098-1.jpg",
      "brand": "Biotique",
      "title": "BB and CC Cream",
      "price": "Rs. 151",
      "actualPrice": "Rs. 199",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629100/2022/3/30/59095c7e-fa6c-40ea-aec8-aa51d83efb621648624226950Lakme9to5WeightlessMiniMousseFoundation-RoseIvory6g1.jpg",
      "brand": "Lakme",
      "title": "9 to 5 Mousse - Rose Ivory",
      "price": "Rs. 148",
      "actualPrice": "Rs. 160",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10924304/2022/4/1/ef58e645-ca88-43ee-b54f-82d7c91673f71648804709050FACESCANADAWeightlessStayMatteCompactSPF-20VitaminESheaButte1.jpg",
      "brand": "FACES CANADA",
      "title": "SPF 20 Matte Compact - Sand 04",
      "price": "Rs. 155",
      "actualPrice": "Rs. 199",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/62474/2022/3/21/e3c77daa-76fe-4623-b0f6-e3d4d99cb2721647845969213-Maybelline-Lip-Smooth-Color-Changing-Peach-Bloom-Lip-Balm-17-1.jpg",
      "brand": "Maybelline",
      "title": "Peach Bloom Lip Balm 1.7g",
      "price": "Rs. 135",
      "actualPrice": "Rs. 180",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/18/ee9cbe99-9a9e-49f8-b603-da69d9cc6c371621319188346-1.jpg",
      "brand": "Plum",
      "title": "Rose Water Toner 100 ml",
      "price": "Rs. 180",
      "actualPrice": "Rs. 225",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55276/2022/4/1/3aad48c4-7adb-4c37-9c0d-17a703dc7c381648804698184LakmeRosePowderWithSunscreen1.jpg",
      "brand": "Lakme",
      "title": "Rose Powder With Sunscreen",
      "price": "Rs. 168",
      "actualPrice": "Rs. 175",
      "offer": "(4% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12678954/2020/10/9/b82a6915-8d35-4510-93e8-249c2b115e541602216132908-Biotique-Advanced-Organics-Apple-Cider-Vinegar-Deep-Cleansin-1.jpg",
      "brand": "Biotique",
      "title": "Women Apple Cider Face Wash",
      "price": "Rs. 171",
      "actualPrice": "Rs. 225",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
      "brand": "Livon",
      "title": "Set of 2 Anti-Frizz Hair Serum",
      "price": "Rs. 415",
      "actualPrice": "Rs. 500",
      "offer": "(17% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837535/2022/3/9/0860bcb0-6525-4ac3-96be-a6b5cee3b9cf1646825666381TRESemmeKeratinSmoothShampoo580ml1.jpg",
      "brand": "TRESemme",
      "title": "Keratin Smooth Shampoo",
      "price": "Rs. 525",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792552/2022/3/21/825670ab-7b84-4828-8357-e5eb5a45dc421647862301030-Lakme-9-To-5-Primer-And-Matte-Perfect-Cover-Foundation---Coo-1.jpg",
      "brand": "Lakme",
      "title": "Foundation - Cool Rose C140",
      "price": "Rs. 432",
      "actualPrice": "Rs. 475",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8667341/2022/4/20/82ce3069-8759-4392-882d-e971a10b06481650452216826-Dove-Hair-Fall-Rescue-Shampoo-For-Weak-Hair-1-l-492165045221-1.jpg",
      "brand": "Dove",
      "title": "Hair Fall Rescue Shampoo",
      "price": "Rs. 849",
      "actualPrice": null,
      "offer": null
    }
  ]



  Face.map(function(el){
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
  
  
    localStorage.setItem("FaceBeauty",JSON.stringify(Face))
    console.log("inside")
  
  })
 
