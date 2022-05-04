import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

let Belts = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749634/2021/3/9/1f9bf3e7-5da0-43d5-9a48-23ffd95d45f31615280726428-United-Colors-of-Benetton-Men-Belts-121615280725858-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Solid Belt",
      "price": "Rs. 839",
      "actualPrice": "Rs. 1199",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15477188/2021/9/26/cb4475b0-282d-420e-8cec-03c6bb85c52d1632639295862-WildHorn-Men-Black-Textured-Leather-Formal-Belt-897163263929-11.jpg",
      "brand": "WildHorn",
      "title": "Textured Leather Formal Belt",
      "price": "Rs. 549",
      "actualPrice": "Rs. 2499",
      "offer": "(78% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7271185/2018/9/18/a3a0379e-9e48-481e-9d9f-c1f5e8d047ba1537254640785-United-Colors-of-Benetton-Men-Belts-6291537254640739-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Solid Leather Belt",
      "price": "Rs. 1034",
      "actualPrice": "Rs. 2299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047714/2021/12/10/28d65caf-c3ca-4ea7-96a6-667a3e4b28011639121054603-United-Colors-of-Benetton-Men-Black-PU-Belt-5791639121054259-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Solid Belt",
      "price": "Rs. 719",
      "actualPrice": "Rs. 1599",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14881750/2021/9/21/2be43863-a577-425c-8ac4-93950bea10a91632223480430-Peter-England-Men-Belts-7831632223480206-1.jpg",
      "brand": "Peter England",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1199",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14032600/2021/4/7/843de55d-9058-46ef-89c8-66d995b303c81617801630666CRUSSETMenBlack1.jpg",
      "brand": "CRUSSET",
      "title": "Men Solid Leather Belt",
      "price": "Rs. 455",
      "actualPrice": "Rs. 1899",
      "offer": "(76% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104944/2021/6/12/7c3824bb-0646-41f9-b3bf-439dc55f53ed1623492742365-United-Colors-of-Benetton-Mens-Faux-Leather-Reversible-Belt--1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 719",
      "actualPrice": "Rs. 1599",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16327370/2021/12/1/1e0be525-cb25-47a3-a43b-d2d27de53f821638367733982FusionThreadsMenBrownTextured1.jpg",
      "brand": "Fusion Threads",
      "title": "Men Leather Formal Belt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104916/2021/11/12/e31e4c38-815e-461f-a96d-347342c444ac1636699508450-United-Colors-of-Benetton-Mens-Genuine-Leather-Belt-80416366-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Leather Formal Belt",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047680/2022/2/23/a1cd3feb-f259-4d7b-86de-f2b59608be681645609343557-United-Colors-of-Benetton-Men-Black-PU-Belt-1621645609343295-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Reversible Belt",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1799",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/6e8374de-0eee-4e1d-ad9f-8051e35394a61584572702921-1.jpg",
      "brand": "CRUSSET",
      "title": "Men Solid Leather Belt",
      "price": "Rs. 713",
      "actualPrice": "Rs. 1699",
      "offer": "(58% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14881828/2021/10/6/231128e0-24ae-48df-8df8-1fcea8312bbb1633522283993-Peter-England-Men-Belts-3581633522283820-1.jpg",
      "brand": "Peter England",
      "title": "Men Reversible Formal Belt",
      "price": "Rs. 779",
      "actualPrice": "Rs. 1299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047768/2021/12/10/30da4ea9-e0fb-46f3-9eb3-e4e3b00d94f91639121078516-United-Colors-of-Benetton-Men-Coffee-Brown-PU-Formal-Belt-17-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Solid Formal Belt",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1599",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/10/23/ec5984f1-00d5-4dbd-be2f-fd5bef7a4ea11540319220478-1.jpg",
      "brand": "SPYKAR",
      "title": "Belts",
      "price": "Rs. 1199",
      "actualPrice": "Rs. 1999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104778/2021/12/22/d7c2d574-cbab-4474-83db-a082e610c9a41640177072481-United-Colors-of-Benetton-Mens-Genuine-Leather-Belt-69816401-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Laser Cuts Leather Belt",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826812/2022/1/6/b44bf107-fe69-4f6a-b70c-19986fbdfcaf1641460698455-Van-Heusen-Men-Brown-Solid-Money-Clip-9481641460697972-1.jpg",
      "brand": "Van Heusen",
      "title": "Solid Money Clip",
      "price": "Rs. 1359",
      "actualPrice": "Rs. 1599",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12661556/2020/10/19/44199ef4-e13c-4d7b-88dc-c35a1a23f56b1603093984522-Louis-Philippe-Men-Wallets-7981603093981895-1.jpg",
      "brand": "Louis Philippe",
      "title": "Solid Two Fold Leather Wallet",
      "price": "Rs. 899",
      "actualPrice": "Rs. 1799",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826778/2021/4/12/e5c3bc9a-30b8-4cbb-8945-c613bfd107291618229561452-Van-Heusen-Men-Black-Textured-Leather-Two-Fold-Wallet-894161-1.jpg",
      "brand": "Van Heusen",
      "title": "Men Leather Two Fold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1399",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826692/2021/4/12/7bffcef7-9c72-4a87-88ee-c6b7fc26f5b81618231897204-Van-Heusen-Men-Tan-Brown-Textured-Leather-Two-Fold-Wallet-38-1.jpg",
      "brand": "Van Heusen",
      "title": "TexturedLeather TwoFold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1399",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13399138/2021/1/20/3e53faf4-2015-40d9-a87e-303d40b22e181611139148384-Louis-Philippe-Men-Wallets-9001611139146906-1.jpg",
      "brand": "Louis Philippe",
      "title": "Men Leather Two Fold Wallet",
      "price": "Rs. 1599",
      "actualPrice": "Rs. 1999",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13123690/2020/12/14/a61b45a5-0161-4eb6-975b-45987b87412b1607927464908-Van-Heusen-Men-Wallets-3361607927462988-1.jpg",
      "brand": "Van Heusen",
      "title": "Men Solid Card Holder",
      "price": "Rs. 649",
      "actualPrice": "Rs. 1299",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/2/5be8ebc9-b009-4fb8-b7dc-2d67e5fb84571614675087369-1.jpg",
      "brand": "Carlton London",
      "title": "Men RFID Leather Wallet",
      "price": "Rs. 1889",
      "actualPrice": "Rs. 2099",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12665508/2020/10/15/8138ddf2-3f6d-49f7-8582-15ee8cfdb6501602754609930-WROGN-Unisex-Wallets-2981602754608319-1.jpg",
      "brand": "WROGN",
      "title": "Men Printed Passport Holder",
      "price": "Rs. 299",
      "actualPrice": "Rs. 1199",
      "offer": "(75% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11445110/2020/11/2/84d66b3b-76ca-4d4f-8a26-305207b395791604316500641-Jockey-Men-Socks-5081604316499724-1.jpg",
      "brand": "Jockey",
      "title": "Men Patterned Socks",
      "price": "Rs. 189",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826854/2021/4/12/8ef2e941-9259-4cce-aea4-e068f444c1db1618229596395-Van-Heusen-Men-Black-Solid-Leather-Two-Fold-Wallet-938161822-1.jpg",
      "brand": "Van Heusen",
      "title": "Men Leather Two Fold Wallet",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1399",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749600/2021/3/10/66caf5da-91be-4c5c-b76d-2d91da60dc7a1615351400049-United-Colors-of-Benetton-Men-Wallets-8321615351398984-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Solid Two Fold Wallet",
      "price": "Rs. 769",
      "actualPrice": "Rs. 1099",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/22/7e05dbba-981b-4046-b0ea-f68d5fadd17b1611297298939-1.jpg",
      "brand": "Teakwood Leathers",
      "title": "Colourblocked Two Fold Wallet",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/ab7da053-a208-44a3-b358-0dd4f086afb41612857776316-1.jpg",
      "brand": "DR. HENRY",
      "title": "Textured Two Fold Wallet",
      "price": "Rs. 874",
      "actualPrice": "Rs. 1325",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749592/2021/3/10/155c6d81-1a1e-469f-8402-ff7decc1c7fd1615351377945-United-Colors-of-Benetton-Men-Wallets-7151615351377074-1.jpg",
      "brand": "United Colors of Benetton",
      "title": "Men Geometric Textured Wallet",
      "price": "Rs. 604",
      "actualPrice": "Rs. 1099",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12661448/2020/10/15/f5498b12-e67b-49e0-9c3c-90b994e83ad61602754200263-Louis-Philippe-Men-Wallets-9791602754198915-1.jpg",
      "brand": "Louis Philippe",
      "title": "Men Leather Two Fold Wallet",
      "price": "Rs. 899",
      "actualPrice": "Rs. 1799",
      "offer": "(50% OFF)"
    }
  ]


  Belts.map(function(el){
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
  
  
    localStorage.setItem("BeltsMens",JSON.stringify(Belts))
    console.log("inside")
  
  })
 
