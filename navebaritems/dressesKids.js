import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();


let Dresses = 

  [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17073908/2022/2/7/fbfb7e62-bf2a-4527-a60a-9af5baea01e91644238585570NautiNatiMulticolouredFloralA-LineDress1.jpg",
      "brand": "Nauti Nati",
      "title": "Floral A-Line Dress",
      "price": "Rs. 959",
      "actualPrice": "Rs. 1599",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16981026/2022/1/29/6fc63fa7-9fff-49f8-93cd-11821fb61c971643466638826CUTECUMBERPinkFloralGeorgetteA-LineDress1.jpg",
      "brand": "CUTECUMBER",
      "title": "Floral Georgette A-Line Dress",
      "price": "Rs. 1495",
      "actualPrice": "Rs. 2825",
      "offer": "(Rs. 1330 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16626732/2021/12/27/2dd063bc-6757-4c1a-bb91-d25e7fb7ce721640621437090pspeachesWhiteFloralA-LineDress1.jpg",
      "brand": "pspeaches",
      "title": "Floral Flared Dress",
      "price": "Rs. 679",
      "actualPrice": "Rs. 1699",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17273788/2022/2/24/27084ac7-7118-401a-b1cc-a8fb552c351c1645705049816CUTECUMBERRedCheckedGeorgetteSheathDress1.jpg",
      "brand": "CUTECUMBER",
      "title": "Checked Georgette Sheath Dress",
      "price": "Rs. 990",
      "actualPrice": "Rs. 1800",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16980038/2022/1/29/959b1c0b-a60d-4ea5-b338-bfc8fdfc16341643458396622pspeachesBlueFloralOff-ShoulderChiffonDress1.jpg",
      "brand": "pspeaches",
      "title": "Girls Fit & Flare Dress",
      "price": "Rs. 759",
      "actualPrice": "Rs. 1899",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17331488/2022/3/1/f4633269-a57e-416a-96e0-8e386c93b3d11646074043113AarikaPinkOff-ShoulderNetMidiDress1.jpg",
      "brand": "Aarika",
      "title": "Net Midi Off-Shoulder Dress",
      "price": "Rs. 999",
      "actualPrice": "Rs. 2499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16980018/2022/1/29/c0c3adad-113f-4b3d-8b4c-747ba9bcb3c81643462302051pspeachesOffWhiteFloralChiffonDress1.jpg",
      "brand": "pspeaches",
      "title": "Floral Chiffon Dress",
      "price": "Rs. 759",
      "actualPrice": "Rs. 1899",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17073666/2022/2/7/54dfd165-fe6b-410a-a73d-311faf39f3d91644234172765naughtyninosNavyBlueFloralDress1.jpg",
      "brand": "Naughty Ninos",
      "title": "Embroidered Fit & Flared Dress",
      "price": "Rs. 798",
      "actualPrice": "Rs. 1699",
      "offer": "(53% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/30/0e19e67f-bbde-417f-a764-49f068d2f9241619780109846-1.jpg",
      "brand": "Stylo Bug",
      "title": "Girls Printed A-Line Dress",
      "price": "Rs. 699",
      "actualPrice": "Rs. 2330",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/13/c565c15f-aa28-4778-aedd-2929141a81261613191722110-1.jpg",
      "brand": "Stylo Bug",
      "title": "Girls Printed Fit and Flare Dress",
      "price": "Rs. 658",
      "actualPrice": "Rs. 2195",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/30/b2114036-2ebb-4a39-b366-64c0a53ea8ea1619779924848-1.jpg",
      "brand": "Stylo Bug",
      "title": "Girls Self Design A-Line Dress",
      "price": "Rs. 598",
      "actualPrice": "Rs. 1995",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/fd76c5e3-2375-434e-b3f2-21d568f673751612883987797-1.jpg",
      "brand": "Stylo Bug",
      "title": "Girls Printed Fit and Flare Dress",
      "price": "Rs. 699",
      "actualPrice": "Rs. 2330",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/28/e4b19e18-87d2-4785-aa58-dc31c2544e701619594800860-1.jpg",
      "brand": "Aarika",
      "title": "Girls Sequinned Sheath Dress",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17352904/2022/3/2/9c136b01-e61f-4b9f-a93c-bdb0be1ce9491646230111864EavanBrownChiffonSheathDress1.jpg",
      "brand": "Eavan",
      "title": "Girls Chiffon Sheath Dress",
      "price": "Rs. 999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16980994/2022/1/29/609274c6-ad42-45c4-8d25-46658026a0b51643466545921CUTECUMBERNavyBlueStripedGeorgetteMidiDress1.jpg",
      "brand": "CUTECUMBER",
      "title": "Girls Navy Blue Striped Dress",
      "price": "Rs. 1237",
      "actualPrice": "Rs. 2475",
      "offer": "(50% OFF)"
    }
  ]


  Dresses.map(function(el){
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
  
  
  
    
    brand.innerText=el.Brand;
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
  
  
    localStorage.setItem("DressesKids",JSON.stringify(Dresses))
    console.log("inside")
  
  })
 
