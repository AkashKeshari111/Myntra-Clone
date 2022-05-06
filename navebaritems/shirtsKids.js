import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Shirts = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17059980/2022/2/5/e702aa94-661a-4728-88f4-0e01fd80c2c01644046193591CrimsouneClubBoysBluePrintedCasualShirt1.jpg",
      "brand": "Crimsoune Club",
      "title": "Pure Cotton Printed Shirt",
      "price": "Rs. 1399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16837282/2022/1/14/d3ff4b4a-cef1-4878-9092-bd57d16c89201642176044477AllenSollyJuniorBoysWhiteSlimFitPrintedCasualShirt1.jpg",
      "brand": "Allen Solly Junior",
      "title": "Slim Fit Casual Shirt",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 1499",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15862506/2021/10/20/8384b33c-1382-478c-81ab-c4d6b15b72cf1634734688125Ed-a-MammaBoysRedPremiumOpaqueStripedCasualShirt1.jpg",
      "brand": "Ed-a-Mamma",
      "title": "Opaque Casual Shirt",
      "price": "Rs. 849",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12685840/2021/4/29/9131e30b-33a2-436f-b7df-c44bc085b8ac1619678950821URBANSCOTTISHBoysGreenRegularFitPrintedCasualShirt1.jpg",
      "brand": "URBAN SCOTTISH",
      "title": "Boys Regular Fit Casual Shirt",
      "price": "Rs. 854",
      "actualPrice": "Rs. 1899",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17352780/2022/3/2/a8259656-b3f4-45a4-b7c3-7e4de9907b431646231670174OctaveBoysOliveGreenCasualShirt1.jpg",
      "brand": "Octave",
      "title": "Boys Cotton Casual Shirt",
      "price": "Rs. 1249",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16913606/2022/3/7/0fcefe52-c48a-41cf-a7bb-b5487fb108471646635742022-mothercare-Boys-Shirts-5771646635741542-1.jpg",
      "brand": "mothercare",
      "title": "Boys Cotton Checked Shirt",
      "price": "Rs. 1499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14812088/2021/7/29/85340101-61e7-40c9-b283-1ab7103365d91627549592647-TONYBOY-Boys-Full-Sleeve-Solid-Shirt---LtYellow1-97516275495-1.jpg",
      "brand": "TONYBOY",
      "title": "Opaque Casual Shirt",
      "price": "Rs. 844",
      "actualPrice": "Rs. 1299",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16037058/2021/11/9/26cc7ed2-fbfc-4071-b50b-7ae9ae01042c1636440813492FabindiaBoysRedOpaquePrintedCasualShirt1.jpg",
      "brand": "Fabindia",
      "title": "Opaque Casual Shirt",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17034018/2022/2/3/cca16c7f-7c62-4ad7-a284-c65518aa8f4d1643887534111LilLollipopBoysNavyBlueCasualShirt1.jpg",
      "brand": "Lil Lollipop",
      "title": "Pure Cotton Casual Shirt",
      "price": "Rs. 654",
      "actualPrice": "Rs. 1090",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4945544/2018/4/25/11524640047871-Allen-Solly-Junior-Boys-Shirts-3901524640047801-1.jpg",
      "brand": "Allen Solly Junior",
      "title": "Boys Regular Fit Casual Shirt",
      "price": "Rs. 1199",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17423218/2022/3/7/91caffc6-3b1e-4a76-a6bf-3666baaa31b31646662547618MANETBoysRedClassicPrintedPartyShirt1.jpg",
      "brand": "MANET",
      "title": "Boys Casual Cotton Shirt",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1599",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16544284/2021/12/17/4fd34549-c2fd-4e62-81d7-94fe7c8aa44a1639738924905UNDERFOURTEENONLYBoysOrangeCheckedCasualShirt1.jpg",
      "brand": "UNDER FOURTEEN ONLY",
      "title": "Boys Casual Shirt",
      "price": "Rs. 799",
      "actualPrice": "Rs. 999",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16686454/2022/3/24/bf235f45-8069-4876-8715-edbf7fbd68961648112411560-US-Polo-Assn-Kids-Boys-Burgundy-Regular-Fit-Conversational-O-1.jpg",
      "brand": "U.S. Polo Assn. Kids",
      "title": "Regular Fit Cotton Casual",
      "price": "Rs. 1499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15275864/2021/9/16/46df12bb-0378-4498-8e44-37129537cb6c1631774832709-Allen-Solly-Junior-Boys-Shirts-7761631774831604-1.jpg",
      "brand": "Allen Solly Junior",
      "title": "Boys Boxy Cotton Casual Shirt",
      "price": "Rs. 779",
      "actualPrice": "Rs. 1299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17042622/2022/2/4/6c000dc3-a892-4e91-90e1-94bf037eaa911643916008187CAVIOBoysGreenPrintedPartyShirt1.jpg",
      "brand": "CAVIO",
      "title": "Party Shirt",
      "price": "Rs. 973",
      "actualPrice": "Rs. 1390",
      "offer": "(30% OFF)"
    }
  ]
  Shirts.map(function(el){
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
  
  
    localStorage.setItem("ShirtsKids",JSON.stringify(Shirts))
    console.log("inside")
  
  })
 
