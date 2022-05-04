
 
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
 
  
import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

 
let Hand = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16330780/2021/12/2/f9a8ad65-c105-4606-8c8f-070e5f95983e1638426233222StoryhomeSetOf4WhiteSolidPureCotton450GSMHandTowels1.jpg",
      "brand": "Story@home",
      "title": "Set Of 4 Solid Pure Cotton 450 GSM Hand Towels",
      "price": "Rs. 601",
      "actualPrice": "Rs. 1398",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12196610/2021/10/12/9a596654-b7ad-4d35-b900-66c5a9035f441634024915910-Trident-Unisex-Set-Of-4-Brown--White-Striped-380-GSM-Comfort-1.jpg",
      "brand": "Trident",
      "title": "Unisex Set Of 4 Striped 380 GSM Comfort Living Coconut Shell Hand Towels",
      "price": "Rs. 539",
      "actualPrice": "Rs. 899",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16330774/2021/12/2/f06395ac-46fd-4791-8625-3f9fe1f4c9db1638425517844StoryhomeSetOf4OrangeSolid450GSMPureCottonHandTowels1.jpg",
      "brand": "Story@home",
      "title": "4 Pure Cotton Hand Towels",
      "price": "Rs. 601",
      "actualPrice": "Rs. 1398",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15576088/2021/9/24/762f808e-4cf1-48c1-af89-16402b1b73a01632443544524ArrabiMultiStripesHandwovenCottonHandTowelSetof41.jpg",
      "brand": "Arrabi",
      "title": "Set of 4 Striped Handwoven 210 GSM Hand Towels",
      "price": "Rs. 500",
      "actualPrice": "Rs. 1669",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13995884/2021/10/12/69edf8a5-123d-4eab-b1f2-accebe70dbc31634032981931StoryhomeSetOf4SolidCotton450GSMHandTowels1.jpg",
      "brand": "Story@home",
      "title": "Set Of 4 Solid 450 GSM Hand Towels",
      "price": "Rs. 601",
      "actualPrice": "Rs. 1398",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16384662/2021/12/6/6f4708bc-9ea0-4621-9fd9-8b5cf890c3131638798782399ArrabiBlueStripesHandwovenCottonHandTowelSetof51.jpg",
      "brand": "Arrabi",
      "title": "Set Of 5 Striped Cotton Hand Towel",
      "price": "Rs. 548",
      "actualPrice": "Rs. 1829",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15576072/2021/9/23/644876f4-c594-468b-95f6-659e686fd8631632401585512ArrabiBlueStripesHandwovenCottonHandTowelSetof51.jpg",
      "brand": "Arrabi",
      "title": "Set Of 5 Striped Hand-Woven 210 GSM Cotton Hand Towels",
      "price": "Rs. 548",
      "actualPrice": "Rs. 1829",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14694502/2021/10/12/b9b794d1-b2fa-4e3e-ad50-8ff288411d3b1634032948988BIANCANavyBlueSetOf4MercerizedCotton450GSMBumpy-StripedHandT1.jpg",
      "brand": "BIANCA",
      "title": "4-Pieces 450 GSM Hand Towels",
      "price": "Rs. 555",
      "actualPrice": "Rs. 750",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16881076/2022/1/20/1b0b462c-494e-4548-ab45-53809c2f87761642650412959AVILivingHandTowelCombo2Pieces-PureCottonUltraSoftSuperAbsor1.jpg",
      "brand": "AVI Living",
      "title": "Set Of 2 Pure Cotton Towel",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16084258/2021/11/13/dfeafdd4-1f0e-4092-9eea-cbef49da600a1636791941378AVILivingSetof2BatmanHandTowel500GSMBlackWhiteWithYellowBord1.jpg",
      "brand": "AVI Living",
      "title": "Set Of 2 Batman 500 GSM Towels",
      "price": "Rs. 602",
      "actualPrice": "Rs. 849",
      "offer": "(29% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178160/2021/10/12/d172812e-d274-4524-a8c4-1e04971677211634026363859-Heelium-Set-of-3-Solid-600-GSM-Quick-Absorbent-Sports--Gym-H-1.jpg",
      "brand": "Heelium",
      "title": "Set of 3 600 GSM Sports Hand Towel",
      "price": "Rs. 999",
      "actualPrice": "Rs. 1499",
      "offer": "(Rs. 500 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17049244/2022/2/4/17842b95-140c-40fe-bc44-c74fa707e55d1643970955031MasparColorartWindsor550GSMCottonSelfJacquardMangoHandTowel1.jpg",
      "brand": "MASPAR",
      "title": "Pack of 2 550 GSM Hand Towels",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16881066/2022/1/19/f887e8e5-7ccc-4413-a5d3-1ba8b2e0f6c71642599651207AVILivingHandTowelCombo2PiecesUltraSoftSuperAbsorbent1.jpg",
      "brand": "AVI Living",
      "title": "Pack of 2 500 GSM Hand Towel",
      "price": "Rs. 575",
      "actualPrice": "Rs. 899",
      "offer": "(36% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14361634/2021/10/13/c1669713-2f16-4236-b916-e82b0957c6051634108197551-BIANCA-Set-Of-2-Purple--Orange-Solid-450-GSM-Mercerized-Comb-1.jpg",
      "brand": "BIANCA",
      "title": "Set Of 2 Solid 450 GSM Mercerized Combed Cotton Hand Towels",
      "price": "Rs. 285",
      "actualPrice": "Rs. 375",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14765732/2021/10/12/52d46bc4-475d-4bd4-bf2f-c8881750d8181634031535477-DDecor-Set-Of-2-Brown-Solid-650-GSM-Live-Beautiful-Cotton-Ha-1.jpg",
      "brand": "DDecor",
      "title": "Set Of 2 Solid 650 GSM Live Beautiful Cotton Hand Towels",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/2/e5f83a66-913b-429c-b9ba-c49cf40d14fe1609571102436-1.jpg",
      "brand": "REME",
      "title": "Digital Floral Printed Organic-Cotton Heavy Winter 150 GSM Sustainable Double Bed Quilt",
      "price": "Rs. 9999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14807964/2022/3/14/f0caa86a-7e02-43cc-a3f6-44dcb2f82d1a1647240976872BLUEDAHLIABlue400TCKingBedsheetwith2PillowCovers1.jpg",
      "brand": "BLUE DAHLIA",
      "title": "400 TC King Superfine Bedsheet with 2 Pillow Covers",
      "price": "Rs. 2549",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15244518/2021/8/24/7054aa11-865d-4a1e-84f2-08f936292f001629818958701WhiteGoldPorcelainCoffeeMugSetof2pcs1.jpg",
      "brand": "White Gold",
      "title": "Set of 2 Porcelain Glossy Mugs",
      "price": "Rs. 1110",
      "actualPrice": "Rs. 1915",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/2a056a31-b0be-4eed-ae9b-9d8ed2500f1c1625042462379-1.jpg",
      "brand": "Stoa Paris",
      "title": "Set Of 2 Solid 144 TC Cotton Pillow Covers",
      "price": "Rs. 399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14031718/2022/3/15/a973f199-1847-41f8-bf27-565005ce8a0d1647333107570TaaviWhiteMustardYellowHandBlockPrint120TCQueenBedsheetwith21.jpg",
      "brand": "Taavi",
      "title": "Bedsheet with 2 Pillow Covers",
      "price": "Rs. 1074",
      "actualPrice": "Rs. 4299",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/19/5d683b52-5313-4493-b9b9-b33c8e62fae71616138248726-1.jpg",
      "brand": "KLOTTHE",
      "title": "Set Of 2 King Bed Covers",
      "price": "Rs. 2915",
      "actualPrice": "Rs. 8329",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15115774/2021/8/11/8190d962-e20c-4703-8a2d-7448e7d166631628701921502ArrabiGreenChecksHandwovenCottonDoubleKingSizeBedsheetwith2P1.jpg",
      "brand": "Arrabi",
      "title": "300 TC King 2 Pillow Covers",
      "price": "Rs. 1700",
      "actualPrice": "Rs. 5669",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/b28ae20e-2b97-45e4-9693-772a83d984fc1611740640767-1.jpg",
      "brand": "REME",
      "title": "Heavy Winter 150 GSM Quilt",
      "price": "Rs. 9999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/16/3c2ee74a-5cb0-41e0-9749-d5b17a2bd1cb1623859342114-1.jpg",
      "brand": "Himeya",
      "title": "300 TC King 2 Pillow Covers",
      "price": "Rs. 3009",
      "actualPrice": "Rs. 4299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/b3380e3d-2adb-4067-9246-c156a73fb5101625062802299-1.jpg",
      "brand": "Stoa Paris",
      "title": "144 TC King 4 Pillow Covers",
      "price": "Rs. 1987",
      "actualPrice": "Rs. 2799",
      "offer": "(29% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/10/401f7305-d90e-4861-a940-c97dda502faa1612959122726-1.jpg",
      "brand": "REME",
      "title": "AC Room 150 GSM Quilt",
      "price": "Rs. 7999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/704ce1b1-817d-4d7c-b193-4b738e3c74d51611741631200-1.jpg",
      "brand": "REME",
      "title": "Heavy Winter 150 GSM Quilt",
      "price": "Rs. 9999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13349726/2022/3/15/8bd82cf6-e975-4954-8866-80310af8c4141647332700197MARKHOMEWhiteSolid200TCDoubleQueenCottonBedsheetwithTwoPillo1.jpg",
      "brand": "MARK HOME",
      "title": "200 TC Double Queen Bedsheet",
      "price": "Rs. 1699",
      "actualPrice": "Rs. 2199",
      "offer": "(Rs. 1000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14903466/2021/7/23/163c7694-d41e-48ae-853d-9fb9c9a3e5ff1627014047402KLOTTHEGreenBlackCheckedCottonDoubleKingBedcoverWith2PillowC1.jpg",
      "brand": "KLOTTHE",
      "title": "Checked Cotton Double King Bedcover With 2 Pillow Covers",
      "price": "Rs. 1397",
      "actualPrice": "Rs. 4659",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/19/6922c33b-31bb-4d2f-9b43-eeabdbf65aee1616142857120-1.jpg",
      "brand": "KLOTTHE",
      "title": "Set Of 2 Striped Double King Bed Covers with 4 Pillow Covers",
      "price": "Rs. 2915",
      "actualPrice": "Rs. 8329",
      "offer": "(65% OFF)"
    }
  ]

  
  Hand .map(function(el){
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
  
  
    localStorage.setItem("HandHome",JSON.stringify(Hand ))
    console.log("inside")
  
  })




