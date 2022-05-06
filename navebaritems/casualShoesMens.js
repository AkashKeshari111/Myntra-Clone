import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let casualShoesArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756898/2021/12/14/066bfe87-ef05-4cc9-8769-cee2a63b50b91639473787244RoadsterMenWhiteSolidSneakers1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Sneakers",
      "price": "Rs. 2899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12068002/2021/8/5/0a5fec8d-e917-4e8f-9b71-0288a26be52e1628146013628HIGHLANDERMenWhiteSneakers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11945014/2021/5/17/b214346d-8a65-4a91-b2e3-bf8f632db13f1621223871248-Provogue-Men-Blue-Loafers-5161621223871159-6.jpg",
      "brand": "Provogue",
      "title": "Men Solid Loafers",
      "price": "Rs. 849",
      "actualPrice": "Rs. 4245",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756892/2021/12/14/e141e830-7352-4e67-a119-e6e8da1682fd1639478472050-Roadster-Men-Grey-Solid-Suede-Finish-Sneakers-75316394784715-1.jpg",
      "brand": "Roadster",
      "title": "Men Suede Finish Sneakers",
      "price": "Rs. 2999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16016368/2021/11/5/a865e870-1060-4c73-b7fa-0f54a17d834b1636111288189MactreeMenWhiteColourblockedPUSneakers6.jpg",
      "brand": "Mactree",
      "title": "Men Colourblocked PU Sneakers",
      "price": "Rs. 744",
      "actualPrice": "Rs. 3720",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/8/14/cd6632e5-a2c6-4ec2-a3d8-9a6a6c59e0f51565782726402-1.jpg",
      "brand": "H&M",
      "title": "Men Trainers",
      "price": "Rs. 1999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14925430/2021/7/24/f6e8ad02-39f7-4741-8c6b-e650e3364f9e1627112482546USPoloAssnMenOffWhiteSneakers1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Casual Sneakers",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067992/2021/2/22/090fc394-cf26-43b7-807d-134ca7c68b911613970123853-HIGHLANDER-Men-White-Sneakers-5371613970122157-6.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15839406/2021/11/12/54e4c724-80c7-45f9-aa32-167ffa9623741636705114683-US-Polo-Assn-Men-Casual-Shoes-2501636705113615-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Solid Slip-On Sneakers",
      "price": "Rs. 1949",
      "actualPrice": "Rs. 2599",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15630218/2021/9/29/bda9fe48-193c-4a64-8e2a-a8e60bd6e2d61632884288144Trainers1.jpg",
      "brand": "H&M",
      "title": "Men Trainers",
      "price": "Rs. 1999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11497178/2020/2/24/717b8fd1-c6f0-4db9-8021-7f3e0201103e1582535122670-US-Polo-Assn-Men-White-Sneakers-9531582535121583-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Sneakers",
      "price": "Rs. 3999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067984/2021/2/2/0425f19a-852a-45e6-a1f6-7c80526a158f1612240158034-HIGHLANDER-Men-White-Sneakers-2351612240156845-6.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9785479/2021/2/17/9b109c7d-39f4-499c-9900-8e2e394cf75d1613525159914LOCOMOTIVEMenWhiteSneakers1.jpg",
      "brand": "LOCOMOTIVE",
      "title": "Men Sneakers",
      "price": "Rs. 895",
      "actualPrice": "Rs. 995",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11097166/2019/12/10/cb47b7dc-e28a-4559-8388-8b82762b27681575980908117-HIGHLANDER-Men-White-Sneakers-661575980906633-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11713274/2020/3/21/701cb210-4751-4a5e-b771-cc40d0b783b71584800012175-Calvadoss-Men-Black--Brown-Premium-Belt--Wallet-Gift-Set-277-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/29/40d180a2-b37a-40a7-89e8-16bcb5c38b231609243673701-1.jpg",
      "brand": "Bonjour",
      "title": "Men Pack of 3 Assorted Ankle-Length Socks",
      "price": "Rs. 525",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13603700/2021/2/6/d1d13161-c06c-4b4a-8810-0458fe8275541612610102977BalenziaMenPackof3AssortedSneakerSocks1.jpg",
      "brand": "Balenzia",
      "title": "Men Pack of 3 Assorted Sneaker Socks",
      "price": "Rs. 507",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16587998/2022/3/23/87d2ab5e-2298-4808-8593-2c22f827b47b1648027399616-Man-Arden-Men-Brown-Pure-Neem-Wooden-U-Shaped-Beard-Comb-wit-1.jpg",
      "brand": "Man Arden",
      "title": "Men Pure Neem Wooden U Shaped Beard Comb with Premium Faux Leather Pouch",
      "price": "Rs. 299",
      "actualPrice": "Rs. 349",
      "offer": "(Rs. 50 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14965866/2021/8/6/78f3863a-5772-4fe0-a620-3fe64035adb21628240108771DigitalDressRoomMenGold-PlatedWhiteAD-StuddedLetterCRakhi1.jpg",
      "brand": "Digital Dress Room",
      "title": "Men Gold-Plated AD-Studded Letter C Rakhi",
      "price": "Rs. 599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1765378/2017/2/17/11487321663088-Balenzia-Men-Socks-811487321663420-1.jpg",
      "brand": "Balenzia",
      "title": "Anti-Slip Loafer Socks",
      "price": "Rs. 596",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/26/88d00007-d6aa-4d16-aadf-f7ba9efcc3fe1624729764501-1.jpg",
      "brand": "VIMAL JONNEY",
      "title": "Men Set of 2 Printed T-shirts",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1998",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10708120/2022/4/13/8baa52de-e0d8-4562-89a2-b80fa64f486f1649845487459FossilTheCarlyleHRMenBlackGen5DigitalLeatherSmartwatchFTW4021.jpg",
      "brand": "Fossil",
      "title": "Men Gen 5 Digital Leather Smartwatch",
      "price": "Rs. 14995",
      "actualPrice": "Rs. 22995",
      "offer": "(Rs. 8000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17147062/2022/2/14/d2d68866-455a-4ced-8672-cc680cd59c001644814631987ArdeurMensStylishPllusSizeCottonJoggers1.jpg",
      "brand": "ARDEUR",
      "title": "Men Plus Size Joggers",
      "price": "Rs. 790",
      "actualPrice": "Rs. 1499",
      "offer": "(Rs. 709 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16490548/2021/12/13/26cc0c9a-add8-4063-931f-62ab86e42b901639367761605SIDEWOKAnkleLengthCottonSelfDesignSocksforMen-Packof51.jpg",
      "brand": "SIDEWOK",
      "title": "Men 5 Pcs Combed Cotton Socks",
      "price": "Rs. 489",
      "actualPrice": "Rs. 999",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/26/997994e5-4a5d-4c99-aca1-6b915f585d2e1616766707781-1.jpg",
      "brand": "The Tie Hub",
      "title": "Checked Pre-Tied Bow Tie",
      "price": "Rs. 1500",
      "actualPrice": "Rs. 3000",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11778746/2020/4/1/0d286dc1-ad22-4fa2-a284-7ac2ed7af3f51585738362006WELBAWT1.jpg",
      "brand": "WELBAWT",
      "title": "Men Reversible Leather Belt",
      "price": "Rs. 1099",
      "actualPrice": "Rs. 1999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16280330/2021/11/27/3729008a-2e48-4dfd-877d-36dc00c6ed051638027321751MancodeDe-TanScrub100gmDe-TanPeeloffMask100gmComboof21.jpg",
      "brand": "MANCODE",
      "title": "Men De-Tan Scrub & Mask",
      "price": "Rs. 455",
      "actualPrice": "Rs. 700",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16061380/2021/11/11/a83188ad-abb6-46a6-9729-2cacdb955b8e1636615520888DanielKleinMenBlueDialBlueLeatherStrapsAnalogueWatchDK1123591.jpg",
      "brand": "Daniel Klein",
      "title": "Men Leather Straps Watch",
      "price": "Rs. 2425",
      "actualPrice": "Rs. 4950",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14966978/2021/7/29/831313f0-3b9c-48c1-8072-b3902552550b1627530730029HotIceScandalHommeDeodorant200mlEach-Setof21.jpg",
      "brand": "Hot Ice",
      "title": "Men Set of 2 Deodorant",
      "price": "Rs. 495",
      "actualPrice": "Rs. 550",
      "offer": "(10% OFF)"
    }
  ]



  casualShoesArr.map(function(el){
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
  
  
    localStorage.setItem("casualShoesMens",JSON.stringify(casualShoesArr))
    console.log("inside")
  
  })
 
