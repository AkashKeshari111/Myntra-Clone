import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

// import{sticky1} from "../components/sticky.js"

// sticky1()

let Wallets = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214618/2021/8/21/09ead0b2-bca9-43d6-af11-96758dd051821629487558186MenBrownSolidGenuineLeatherZipAroundWallet1.jpg",
      "brand": "Teakwood Leathers",
      "title": "Mem Textured Two Fold Wallet",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904066/2021/7/22/37afe654-2efb-45f0-b3c5-5949da232d4c1626967626123WildHornMenBrownSolid1.jpg",
      "brand": "WildHorn",
      "title": "Men Solid Two-Fold Wallet",
      "price": "Rs. 575",
      "actualPrice": "Rs. 2399",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214620/2021/8/21/52b2cc0c-2ee5-468d-a8bb-459ba94de0ab1629487546139MenBrownSolidGenuineLeatherTwoFoldWallet1.jpg",
      "brand": "Teakwood Leathers",
      "title": "Leather Two Fold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1749",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11658994/2021/10/30/363104e8-6e34-42e2-b979-d0c26108eebb1635567477042-WildHorn-Men-Green-Solid-RFID-Protected-Leather-Two-Fold-Wal-7.jpg",
      "brand": "WildHorn",
      "title": "Leather Two Fold Wallet",
      "price": "Rs. 579",
      "actualPrice": "Rs. 1999",
      "offer": "(71% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904050/2021/7/22/63ddd620-a354-4050-b550-adac6de135891626967329052WildHornMenBrownPrinted1.jpg",
      "brand": "WildHorn",
      "title": "Men Printed Two-Fold Wallet",
      "price": "Rs. 575",
      "actualPrice": "Rs. 2399",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647838/2021/10/30/585827f3-aa59-4647-8f68-6ada00282f6c1635567191001-WildHorn-Men-Black-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
      "brand": "WildHorn",
      "title": "RFID Protected Leather Wallet",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1999",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904086/2021/7/22/d68299c5-f479-45e0-846d-af08482bf78a1626967284512WildHornMenBrownSolid1.jpg",
      "brand": "WildHorn",
      "title": "Leather Two Fold Wallet",
      "price": "Rs. 575",
      "actualPrice": "Rs. 2399",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214632/2021/8/21/3d1b5740-8050-4e09-8aa1-c340f9d9fe871629487576992MenTanSolidGenuineLeatherTwoFoldWallet1.jpg",
      "brand": "Teakwood Leathers",
      "title": "Men Solid Two-Fold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1749",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532782/2021/12/16/50fccd28-6364-4729-a042-11bbd89d81261639644918709ProvogueMenBronzeSolid1.jpg",
      "brand": "Provogue",
      "title": "RFID Two Fold Wallet",
      "price": "Rs. 389",
      "actualPrice": "Rs. 1299",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904040/2021/7/22/1e32d782-b609-4953-8116-06dd9f9155231626967393348WildHornMenBlackSolid1.jpg",
      "brand": "WildHorn",
      "title": "Men Solid Two-Fold Wallet",
      "price": "Rs. 551",
      "actualPrice": "Rs. 2399",
      "offer": "(77% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11281584/2020/1/21/4974621d-19b1-4724-8fdc-d067033325091579591268600-Mast--Harbour-Men-Navy-Blue-Solid-Two-Fold-Wallet-4941579591-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Men Leather Two Fold Wallet",
      "price": "Rs. 974",
      "actualPrice": "Rs. 1499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14450146/2022/1/5/c3e546fb-f398-4b28-88c0-410985a8c56c1641389258577NAPAHIDEMenTanSolidLeatherTwoFoldWalletwithRFID1.jpg",
      "brand": "NAPA HIDE",
      "title": "Leather Two Fold Wallet with RFID",
      "price": "Rs. 399",
      "actualPrice": "Rs. 1999",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/7/1/d012c347-4f0b-47ff-993b-731b5868a8d51625114961479-1.jpg",
      "brand": "LOUIS STITCH",
      "title": "Leather Two Fold Wallet with RFID",
      "price": "Rs. 840",
      "actualPrice": "Rs. 4200",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647832/2021/10/30/95bb5d76-9f0e-4551-ad84-e0d71f2facd31635567170117-WildHorn-Men-Brown-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
      "brand": "WildHorn",
      "title": "RFID Protected Leather Wallet",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1999",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5568704/2022/2/25/f3895c8a-28e4-4724-a581-5a5e2969d6a21645781583712-Levis-Men-Brown-Textured-Zip-Around-Wallet-9161645781583145-1.jpg",
      "brand": "Levis",
      "title": "Men Textured Zip Around Wallet",
      "price": "Rs. 1699",
      "actualPrice": "Rs. 1999",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/3/0230c309-ef49-4621-8975-bc7071a785cd1593726087790-5.jpg",
      "brand": "Teakwood Leathers",
      "title": "Men Genuine Leather Accessory Gift Set",
      "price": "Rs. 1399",
      "actualPrice": "Rs. 3999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/13/21f93cf5-cddf-4fde-bcb4-2a4b4120d9051602542304498-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 749",
      "actualPrice": "Rs. 2999",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/b84a3dc8-b4b4-429d-b9cd-1bd89f9032741600383589268-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/229a3f9a-c226-4c36-89c2-de1cb764ad6f1600989130005-1.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 1049",
      "actualPrice": "Rs. 2999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/806e9d57-2a10-423e-9698-92945fff5aae1600382535208-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/77eb9427-1723-470d-aee4-d53c4f6eaa261600985088309-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 1049",
      "actualPrice": "Rs. 2999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/a6ce5f89-6222-4697-92fb-199b7e2ff34a1600989614723-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 1049",
      "actualPrice": "Rs. 2999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/29/64a72c00-2c97-4f75-a2e2-a00adffd21861582930075221-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 899",
      "actualPrice": "Rs. 2999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1410362/2016/6/25/11466848469624-WildHorn-Men-Accessory-Gift-Set-2951466848469482-1.jpg",
      "brand": "WildHorn",
      "title": "Men Accessory Gift Set",
      "price": "Rs. 1049",
      "actualPrice": "Rs. 2999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346832/2020/8/27/11a13641-1878-44d8-9e56-2b73caff382a1598538414460WildHornMenBrownGenuineLeatherRFIDProtectedWalletBeltComboGi7.jpg",
      "brand": "WildHorn",
      "title": "Wallet & Belt Combo Gift Set",
      "price": "Rs. 1139",
      "actualPrice": "Rs. 2999",
      "offer": "(62% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/20/f9a05b21-eeb0-4b1b-88d8-70cb5b2e33d81600552127304-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346950/2020/8/28/2fecd3b4-07b2-46a9-9f40-da9c108663c41598616777783WildHornMenBrownRFIDProtectedGenuineLeatherAccessoryGiftSet1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 1139",
      "actualPrice": "Rs. 2999",
      "offer": "(62% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/9/724d1bd7-b092-487f-970e-c003a62132381607504341477-1.jpg",
      "brand": "Pacific Gold",
      "title": "Men Genuine Leather Accessory Gift Set",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 3999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16167824/2021/11/19/01aa6a70-53ef-4783-be0a-11b54ca1330b1637296234250WildHornLeatherBeltWalletComboforMenLeatherGiftHamperIGiftsf1.jpg",
      "brand": "WildHorn",
      "title": "Men Textured Pure Genuine Leather Accessory Gift Set",
      "price": "Rs. 1399",
      "actualPrice": "Rs. 3999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346868/2020/8/28/df512b3f-62b9-4085-acd0-14a05e67da731598616767379WildHornMenBlackRFIDProtectedGenuineLeatherWalletBeltAccesso1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Belt Accessory Gift Set",
      "price": "Rs. 1139",
      "actualPrice": "Rs. 2999",
      "offer": "(62% OFF)"
    }
  ]


  Wallets.map(function(el){
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
  
  
    localStorage.setItem("walletsMens",JSON.stringify(Wallets))
    console.log("inside")
  
  })