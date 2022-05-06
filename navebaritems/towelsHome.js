import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Towels = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2127325/2018/6/11/4891d48d-e3ef-486e-8396-7efa735923a61528700077208-swiss-republic-Set-of-6-Cotton-450-GSM-Towels-9511528700077109-1.jpg",
      "brand": "swiss republic",
      "title": "Set of 6 450 GSM Towels",
      "price": "Rs. 759",
      "actualPrice": "Rs. 1899",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6593366/2018/5/31/41792311-8209-481e-a702-d340a72feaa61527749390263-na-1091527749388921-1.jpg",
      "brand": "Story@home",
      "title": "Set of 4 Towels",
      "price": "Rs. 1438",
      "actualPrice": "Rs. 3197",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2532373/2022/1/28/dac4d806-793a-4bfe-932e-aea04638920b1643379016426StoryhomeUnisexYellowCotton450GSMSetof12Towels1.jpg",
      "brand": "Story@home",
      "title": "Set of 4 Towels",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1998",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/1019ea12-fd3a-43a3-810e-b4895c4646241615894543989-1.jpg",
      "brand": "BIANCA",
      "title": "12 Pcs 500 GSM Face Towel Set",
      "price": "Rs. 837",
      "actualPrice": "Rs. 1047",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/a74c8d8d-cfe7-4c2f-bb1a-8e1d2ab921591612885144983-1.jpg",
      "brand": "CORE Designed by SPACES",
      "title": "Set Of 10 Solid 380 GSM Towel Set",
      "price": "Rs. 1169",
      "actualPrice": "Rs. 1799",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13623188/2021/2/11/a25058d4-af6a-4e60-b714-a617198fc73d1613017618667COREDesignedbySPACESSetof6Solid380GSMTowelSet1.jpg",
      "brand": "CORE Designed by SPACES",
      "title": "Set of 6 Solid 380 GSM Towel Set",
      "price": "Rs. 869",
      "actualPrice": "Rs. 1499",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6593365/2018/5/31/5b7bebbc-a17b-4bb3-8300-8cd306a90a5d1527749379248-na-7301527749378009-1.jpg",
      "brand": "Story@home",
      "title": "Set of 4 Towels",
      "price": "Rs. 1438",
      "actualPrice": "Rs. 3197",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/7132dce0-785c-44e0-bee2-3fb7e3ad01bb1615893605112-1.jpg",
      "brand": "BIANCA",
      "title": "Pack of 4 Cotton Towel",
      "price": "Rs. 758",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/dd8abac9-879d-445f-aa4d-ef4b2ab6abc71612885499942-1.jpg",
      "brand": "CORE Designed by SPACES",
      "title": "Set of 10 Solid 380 GSM Towels",
      "price": "Rs. 1169",
      "actualPrice": "Rs. 1799",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2322874/2018/6/11/aacc77de-b62b-4ccf-84fb-73116a1fadb11528700477805-swiss-republic-Set-of-2-Green--Pink-Cotton-450-GSM-Bath-Towels-7351528700477663-1.jpg",
      "brand": "swiss republic",
      "title": "Set of 2 Cotton 450 GSM Bath Towels",
      "price": "Rs. 679",
      "actualPrice": "Rs. 1699",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13623184/2021/2/11/dc9401b0-ce1d-4f72-8885-457cd8561e451613017618221COREDesignedbySPACESUnisexSetOf4Solid380GSMTowels1.jpg",
      "brand": "CORE Designed by SPACES",
      "title": "Unisex Set Of 4 Solid 380GSM Towels",
      "price": "Rs. 869",
      "actualPrice": "Rs. 1499",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2401435/2022/1/28/e941d3ec-05ac-4f63-aa96-063f304629441643379043311StoryhomeSetof12OffWhiteSolid450GSMFaceTowels1.jpg",
      "brand": "Story@home",
      "title": "Towel Set",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1998",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/f3114d1a-1ad5-47da-97d3-13fc4356a72f1615898730989-1.jpg",
      "brand": "BIANCA",
      "title": "Set Of 3 Solid 500 GSM Zero-Twist Towels",
      "price": "Rs. 1128",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/11/9d95b1c9-7745-4e87-8549-da3fe93097ba1613034839807-1.jpg",
      "brand": "RANGOLI",
      "title": "Unisex Set Of 4 Appliqued 450 GSM Towels",
      "price": "Rs. 1970",
      "actualPrice": "Rs. 2699",
      "offer": "(27% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9164449/2019/4/2/27c72787-7243-4560-acd2-880174a074b91554180048713-Storyhome-Unisex-Set-of-2-Red--Green-Solid-Bath-Towels-41615-1.jpg",
      "brand": "Story@home",
      "title": "Set of 2 Bath Towels",
      "price": "Rs. 909",
      "actualPrice": "Rs. 2598",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5453315/2018/5/28/0285753f-7998-4f22-81e5-cd49f2bcc94f1527497805808-Status-Brown--Beige-Striped-Bedside-Runner-1021527497805686-1.jpg",
      "brand": "Status",
      "title": "Striped Bedside Runner",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1799",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6707933/2021/11/19/efb584ea-f5a1-48ef-9183-75ba940c7d891637300117925ROMEEBlueBrownSolidACRoom150GSMReversibleDoubleBedComforter1.jpg",
      "brand": "ROMEE",
      "title": "AC Room 150 GSM Comforter",
      "price": "Rs. 1399",
      "actualPrice": "Rs. 3999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269901/2019/4/13/3c1c74ce-f2ab-42d6-8658-78f04f6f805a1555137814478-Storyhome-red-1-Piece-Double-Comforter-81555137813324-1.jpg",
      "brand": "Story@home",
      "title": "AC Room 200 GSM Comforter",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6707931/2021/11/18/77f195a2-51a4-4c75-a2b8-ca3972c3e8e61637218871177ROMEEPurplePinkSolidACRoom150GSMReversibleDoubleBedComforter1.jpg",
      "brand": "ROMEE",
      "title": "AC Room 150 GSM Comforter",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 3999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2396562/2021/11/19/046d443e-7ce0-455a-b96e-cb237b193e101637313492446StoryhomeWhiteSolidMildWinter210GSMSingleBedComforter1.jpg",
      "brand": "Story@home",
      "title": "Mild Winter 210 GSM Comforter",
      "price": "Rs. 1649",
      "actualPrice": "Rs. 2999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7783052/2022/3/12/c4f6ec78-f4ed-49bc-a79b-b6af4605b8431647069580077StoryhomeBlueWhiteGeometric1QueenBedsheetwith2PillowCovers1.jpg",
      "brand": "Story@home",
      "title": "Queen Bedsheet Pillow Covers",
      "price": "Rs. 824",
      "actualPrice": "Rs. 1499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2130042/2017/9/15/11505475800803-Storyhome-Unisex-Mattress-Protector-3981505475800602-1.jpg",
      "brand": "Story@home",
      "title": "Mattress Protector",
      "price": "Rs. 974",
      "actualPrice": "Rs. 1499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7514110/2018/10/1/d86ef3b1-f943-4f7a-8f61-4c7e5cdac85a1538376865479-999Store-Brown-Wooden-Wall-Mirror-511538376865348-1.jpg",
      "brand": "999Store",
      "title": "Handcrafted Wooden Wall Mirror",
      "price": "Rs. 4999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4248624/2018/3/16/11521177187759-RANDOM-Off-White-Round-Printed-Analogue-Wall-Clock-3561521177187524-1.jpg",
      "brand": "RANDOM",
      "title": "30.48 cm Analogue Wall Clock",
      "price": "Rs. 689",
      "actualPrice": "Rs. 1499",
      "offer": "(54% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2486196/2018/2/14/11518595577062-na-5191518595576825-1.jpg",
      "brand": "Story@home",
      "title": "Mattress Protector",
      "price": "Rs. 974",
      "actualPrice": "Rs. 1499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4448731/2022/3/12/a8168251-58af-4132-aee1-89906717960f1647071861057DivineCasaBrownBeigeEthnicMotifsFlat144TCCotton1QueenBedshee1.jpg",
      "brand": "Divine Casa",
      "title": "144 TC 1 Queen Bedsheet with 2 Pillow Covers",
      "price": "Rs. 770",
      "actualPrice": "Rs. 1000",
      "offer": "(23% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4447671/2018/4/3/11522750669202-Romee-White-Cotton-Microfiber-Pillow-17-inch-x-27-inch-Set-of-2-971522750669146-1.jpg",
      "brand": "ROMEE",
      "title": "Pillow",
      "price": "Rs. 458",
      "actualPrice": "Rs. 1699",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269913/2021/12/3/2acb9aef-b66e-414f-9b83-ad962d40b1241638507857825StoryhomeLimeGreenNavyBlueSolidACRoom200GSMDoubleBedComforte1.jpg",
      "brand": "Story@home",
      "title": "AC Room 200 GSM Comforter",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1558106/2017/4/18/11492514480662-eCraftIndia-White-Dial-Handcrafted-Analogue-Wall-Clock-691492514480513-1.jpg",
      "brand": "eCraftIndia",
      "title": "35.56 cm Analogue Wall Clock",
      "price": "Rs. 1044",
      "actualPrice": "Rs. 1899",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269905/2021/11/19/34b2066a-bffe-4d30-9e39-ad59162dc0db1637313556920StoryhomeRedNavyBlueSolidACRoom200GSMSingleBedComforter1.jpg",
      "brand": "Story@home",
      "title": "AC Room 200 GSM Comforter",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    }
  ]



  Towels.map(function(el){
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
  
  
    localStorage.setItem("TowelsHome",JSON.stringify(Towels))
    console.log("inside")
  
  })
 
