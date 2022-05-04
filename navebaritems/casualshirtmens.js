import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();



let casualShirt =  [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2284523/2018/2/15/11518684805969-Roadster-Men-Navy-Blue--Green-Regular-Fit-Checked-Casual-Shirt-4471518684805162-1.jpg",
      "brand": "Roadster",
      "title": "Men Regular Check Casual Shirt",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1823142/2017/4/27/11493281526215-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-1.jpg",
      "brand": "WROGN",
      "title": "Slim Fit Checked Casual Shirt",
      "price": "Rs. 1379",
      "actualPrice": "Rs. 2299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      "brand": "Dennis Lingo",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 684",
      "actualPrice": "Rs. 1849",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1362028/2016/8/31/11472638719005-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-1.jpg",
      "brand": "Roadster",
      "title": "Cotton Regular Checked Casual Shirt",
      "price": "Rs. 519",
      "actualPrice": "Rs. 1299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6714923/2019/3/6/343e1235-336c-401e-beab-afbb828448231551863812172-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-473155186-1.jpg",
      "brand": "Dennis Lingo",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 684",
      "actualPrice": "Rs. 1849",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2284691/2018/1/29/11517205743041-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-2871517205742822-1.jpg",
      "brand": "Roadster",
      "title": "Twill Casual Shirt",
      "price": "Rs. 479",
      "actualPrice": "Rs. 1199",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2338729/2018/8/30/25a48bec-c445-4e49-94f5-f85702bcd76e1535620402114-WROGN-Men-Red--Navy-Blue-Smart-Fit-Checked-Casual-Shirt-4501-1.jpg",
      "brand": "WROGN",
      "title": "Men Casual Shirt",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 2499",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1667052/2022/4/18/a987b75a-2aaa-4b2e-85fb-5cf8e01b383d1650284962264RoadsterMenKhakiCheckedCasualSustainableShirt1.jpg",
      "brand": "Roadster",
      "title": "Checked Casual Shirt",
      "price": "Rs. 934",
      "actualPrice": "Rs. 1699",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/3/8/75750a68-13fc-4bd5-b91e-bd879aca9e1b1552028704151-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 767",
      "actualPrice": "Rs. 1449",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1758578/2017/5/12/11494569522819-WROGN-Men-Shirts-8521494569522516-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 1264",
      "actualPrice": "Rs. 2299",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1729391/2019/8/28/a9d4a7aa-af7e-4a37-a9d4-a94dc8c057e81566992341974-WROGN-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-52415669923403-1.jpg",
      "brand": "WROGN",
      "title": "Checked Casual Shirt",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7324885/2019/12/4/f383d293-415a-4606-ab12-cc07ab603ec41575437710624-HIGHLANDER-Men-Brown--Black-Slim-Fit-Checked-Casual-Shirt-81-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 766",
      "actualPrice": "Rs. 1299",
      "offer": "(41% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 569",
      "actualPrice": "Rs. 1899",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2256562/2018/2/5/11517823140053-HIGHLANDER-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-6531517823139956-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 739",
      "actualPrice": "Rs. 999",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1265389/2018/2/7/11517995810352-Highlander-Black-Slim-Fit-Casual-Shirt-1061517995810069-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Slim Fit Casual Shirt",
      "price": "Rs. 639",
      "actualPrice": "Rs. 999",
      "offer": "(36% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16044348/2021/11/9/66a7073f-9e01-4ba5-95f9-11930c6e10f71636459459715Dhotis1.jpg",
      "brand": "WHITE HEART",
      "title": "Solid Pure Cotton Double Dhoti",
      "price": "Rs. 485",
      "actualPrice": "",
      "offer": ""
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/21/b3eb713b-2e7b-4161-9248-dec3b074ef201574357961193-1.jpg",
      "brand": "Pacific Gold",
      "title": "Men Belt & Wallet Accessory Gift Set",
      "price": "Rs. 1221",
      "actualPrice": "Rs. 3700",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/bbb3e2ee-04b7-4d9b-8417-19700ceae5b71600470648296-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6704784/2018/6/11/f6670615-fcfd-4a5d-a48b-5d422e1bd3ee1528714953765-Belt-and-wallet-combo-4971528714953520-1.jpg",
      "brand": "Pacific Gold",
      "title": "Men Accessory Gift Set",
      "price": "Rs. 953",
      "actualPrice": "Rs. 2649",
      "offer": "(64% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/91199418-8704-44a4-9351-3cc68e8f6bfa1621494390335-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/20/27c23b7c-ea2e-4601-8195-52b7148d69791600558422229-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/27f24201-cf8d-4d7a-b7a2-94d6f36a40bc1600471564440-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8072751/2018/12/4/9fae1490-dc8e-4595-b905-6eaef63052791543913468462-WM-black-6511543913468314-1.jpg",
      "brand": "WM",
      "title": "Set Of 2 Analogue Watches",
      "price": "Rs. 799",
      "actualPrice": "Rs. 3999",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15862876/2021/12/15/136cc76b-a2b3-4e76-9fe5-1fd37473d1201639544298217-Roadster-Men-Casual-Shoes-141639544297854-1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Horsebit Mules",
      "price": "Rs. 1079",
      "actualPrice": "Rs. 2399",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/30b88124-0eeb-4faf-b2e0-53f4751f3d271600380802868-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/8e57496f-5f79-422b-974c-1a72d7fde0a91600382288830-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/13/fded9209-8168-4d1c-98a7-8db76ccc68041620880270594-1.jpg",
      "brand": "SCHARF",
      "title": "Men Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2399",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341552/2021/2/23/ca2856a5-3c4f-4f39-9949-4eb1e498741c1614066211256-Ultimo-321614066210821-1.jpg",
      "brand": "Ultimo",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 649",
      "actualPrice": "Rs. 1299",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16214790/2021/11/23/3ed89b05-0a3c-43c7-ba32-cc0282e52efc1637670546426CampusMenBlackRedPrintedSportsSandals1.jpg",
      "brand": "Campus",
      "title": "Men Printed Sports Sandals",
      "price": "Rs. 944",
      "actualPrice": "Rs. 1049",
      "offer": "(Rs. 105 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/82323dd3-644c-4a16-be56-9f2683ee9ea71600382981429-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    }
  ]


  casualShirt.map(function(el){
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
  
  
    localStorage.setItem("casualShirtMens",JSON.stringify(casualShirt))
    console.log("inside")
  
  })
 

