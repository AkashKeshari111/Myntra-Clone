import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

  let Lakme = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629082/2022/5/4/e6bfd58f-f4f4-45ca-911d-e84d5eebfaef1651646980985-Lakme-Insta-Liner---Black-9ml-3461651646980759-1.jpg",
      "brand": "Lakme",
      "title": "Insta-Liner - Black 9ml",
      "price": "Rs. 109",
      "actualPrice": "Rs. 130",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629094/2020/7/9/d9cc4f27-9deb-46ca-821e-a37410cbcbd51594288324999LakmeSetof2EyeconicKajal-DeepBlack070g1.jpg",
      "brand": "Lakme",
      "title": "Set of 2 Eyeconic Kajal",
      "price": "Rs. 291",
      "actualPrice": "Rs. 320",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1963241/2022/4/18/d937014a-3250-4803-a3ce-320a6de213e61650281596290-Maybelline-New-York-Colossal-Kajal---Black-4661650281595507-1.jpg",
      "brand": "Maybelline",
      "title": "Colossal Kajal - Black",
      "price": "Rs. 162",
      "actualPrice": "Rs. 180",
      "offer": "(10% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
      "brand": "FACES CANADA",
      "title": "Magneteyes Kajal Black 01",
      "price": "Rs. 139",
      "actualPrice": "Rs. 179",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178488/2022/4/18/80cb29dd-2f09-4e80-9e7e-33f8818588d31650283565026MaybellineNewYorkLineTattooHighImpactLiner-IntenseBlack1.jpg",
      "brand": "Maybelline",
      "title": "Line Tattoo High Impact Liner",
      "price": "Rs. 467",
      "actualPrice": "Rs. 550",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14329750/2021/7/22/6cc9100c-59ad-4893-b3ab-101eb656a7711626955100865SUGARKohlOfHonourIntenseKajal-01BlackOutSingleBlister025gm1.jpg",
      "brand": "SUGAR",
      "title": "Intense Kajal - 01 Black Out",
      "price": "Rs. 249",
      "actualPrice": null,
      "offer": null
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Shimmery Bronze",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11884842/2021/2/15/5f29cede-eefb-4435-8d2a-62d3f6b756fb1613372681539-SUGAR-Eye-Told-You-So-Smudgeproof-Eyeliner-17-ml-18316133726-1.jpg",
      "brand": "SUGAR",
      "title": "Smudgeproof Eyeliner",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886477/2021/8/6/25c98cd3-a7f9-4634-915f-ef19b71021091628249311123-FACES-CANADA-Magneteyes-Eyeliner---Black-01-35-ml-4871628249-1.jpg",
      "brand": "FACES CANADA",
      "title": "Magnet Eyes Eyeliner- Black 01",
      "price": "Rs. 194",
      "actualPrice": "Rs. 249",
      "offer": "(22% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12274332/2021/3/24/7d81e6f4-bb89-41b5-8dcd-6b425f6d29831616574346145-Wet-n-Wild-Color-Icon-Kohl-Liner-Pencil---Youre-Always-White-1.jpg",
      "brand": "Wet n Wild",
      "title": "You're Always White E608A",
      "price": "Rs. 120",
      "actualPrice": "Rs. 195",
      "offer": "(38% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17024160/2022/3/16/d6893613-6c03-4b31-b976-ae7135d85f691647428824164PrettyWomenWomenSmudgeproofRetractableKohlGreenKajal0542gm1.jpg",
      "brand": "Pretty Women",
      "title": "Women Smudgeproof Retractable Kohl Green Kajal 05 4.2 gm",
      "price": "Rs. 224",
      "actualPrice": "Rs. 249",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14058032/2021/6/3/119f250c-3413-4c1d-a421-eb0ef6aff4ab1622720457832-Revlon-Set-of-4-Colour-Shine-Super-Lustrous-Nail-Enamels-517-1.jpg",
      "brand": "Revlon",
      "title": "4 Pcs Lustrous Nail Enamels",
      "price": "Rs. 450",
      "actualPrice": null,
      "offer": null
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14172246/2022/4/29/50d3b62a-21d7-4f54-a61f-77797b34ebf51651215613044-Garnier-Bright-Complete-VITAMIN-C-Booster-Face-Serum-30ml-31-1.jpg",
      "brand": "Garnier",
      "title": "VITAMIN C Bright Face Serum",
      "price": "Rs. 549",
      "actualPrice": null,
      "offer": null
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55163/2021/3/24/c96c707f-99b0-4952-9c3f-ed06b81bc8861616563219147-Lakme-True-Wear-Classics-Twilight-Mauve-Nail-Polish-103-3181-1.jpg",
      "brand": "Lakme",
      "title": "Nail Polish",
      "price": "Rs. 120",
      "actualPrice": "Rs. 125",
      "offer": "(4% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10444666/2019/12/16/6aa1e3ee-588b-419b-ab41-8c8957cdef731576496070922-Olay-SPF-15-Total-Effects-7-In-1-Anti-Aging-Skin-Cream-50-g--1.jpg",
      "brand": "Olay",
      "title": "Anti Aging Cream 50 g",
      "price": "Rs. 674",
      "actualPrice": "Rs. 899",
      "offer": "(25% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10849078/2022/3/21/9c4a05b4-1ad9-4cec-b243-64e6f5364df11647837063216-Maybelline-Lip-Smooth-Color-Changing-Lip-Balm---Pink-Bloom-1-1.jpg",
      "brand": "Maybelline",
      "title": "Lip Balm - Pink Bloom 1.7g",
      "price": "Rs. 126",
      "actualPrice": "Rs. 180",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6528962/2018/9/21/d4375779-3782-48d6-bb11-0f286360f0591537509696186-Maybelline-Women-Lip-Care-6861537509696033-1.jpg",
      "brand": "Maybelline",
      "title": "Broadway Red Baby Lips 4g",
      "price": "Rs. 159",
      "actualPrice": "Rs. 175",
      "offer": "(9% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711012/2022/4/18/26b2be49-b623-45eb-9bf0-74d62897db7e1650265034818-LOreal-Paris-Total-Repair-5-Shampoo-1925ml---1925-ml-5181650-1.jpg",
      "brand": "LOreal",
      "title": "Total Repair 5 Shampoo'",
      "price": "Rs. 122",
      "actualPrice": "Rs. 135",
      "offer": "(9% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7196201/2018/9/28/061ebc76-c25a-464a-a6be-3241179332101538122410789-Maybelline-Women-Lipstick-1281538122410487-1.jpg",
      "brand": "Maybelline",
      "title": "Creamy Matte Lipstick 630",
      "price": "Rs. 209",
      "actualPrice": "Rs. 299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4384871/2021/8/11/44f62cd5-555e-45d2-ba86-05aad086ce001628671666203LakmeAbsolutePerfectRadianceSkinLighteningDayCreme15g1.jpg",
      "brand": "Lakme",
      "title": "Skin Lightening Day Creme 15g",
      "price": "Rs. 89",
      "actualPrice": "Rs. 99",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
      "brand": "Livon",
      "title": "Set of 2 Anti-Frizz Hair Serum",
      "price": "Rs. 415",
      "actualPrice": "Rs. 500",
      "offer": "(17% OFF)"
    }
  ]



  Lakme.map(function(el){
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
  
  
    localStorage.setItem("LakmeBeauty",JSON.stringify(Lakme))
    console.log("inside")
  
  })
 
