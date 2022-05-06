import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
 
  
import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let SportsShoesArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8058351/2022/1/4/5c0a11c6-3193-43d1-99ad-067b264b8cf61641295613595-HRX-by-Hrithik-Roshan-Men-Black-Urban-Outdoor-Running-Shoe-4-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Men Urban Outdoor Running Shoe",
      "price": "Rs. 3024",
      "actualPrice": "Rs. 5499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15226458/2021/8/23/abda7767-9bdb-48cb-90c8-026efaeabffc1629721241687SportsShoes1.jpg",
      "brand": "Puma",
      "title": "Men Anzarun Lite V3 IDP Run",
      "price": "Rs. 2449",
      "actualPrice": "Rs. 3499",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13483748/2022/3/24/a5439bbb-226b-4104-bbd2-64d3d9998d6b1648107968374PumaMenWhiteCELLVALIANTSLRunningShoes1.jpg",
      "brand": "Puma",
      "title": "Men CELL VALIANT SL Shoes",
      "price": "Rs. 4549",
      "actualPrice": "Rs. 6999",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703398/2022/4/27/1ef5f34e-fa0e-416a-ba3f-1f50855611461651050543321PumaMenWhiteEscaperSLRunningSportsShoes1.jpg",
      "brand": "Puma",
      "title": "Men Escaper SL Shoes",
      "price": "Rs. 3299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14824822/2021/8/23/4c997245-e8d5-4e56-8a91-9096693d80131629712617426-Puma-Men-Sports-Shoes-521629712616966-1.jpg",
      "brand": "Puma",
      "title": "Men Jamming 2.0 Running Shoes",
      "price": "Rs. 11049",
      "actualPrice": "Rs. 12999",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703466/2018/6/11/93a747f9-54da-4f47-97db-a812de6702251528698311878-Running-1351528698311718-1.jpg",
      "brand": "Puma",
      "title": "Men Running Shoes",
      "price": "Rs. 3574",
      "actualPrice": "Rs. 5499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11938692/2020/6/15/8e39d227-b791-4d60-8442-be820bcc0dcf1592217999977Pumagrey1.jpg",
      "brand": "Puma",
      "title": "Men Running Shoes",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10334347/2020/11/13/ea6514b3-e3e4-4339-bacd-3977457ad1ee1605257668889-US-Polo-Assn-Men-Off-White-Textile-Walking-Shoes-76016052576-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Walking Shoes",
      "price": "Rs. 2199",
      "actualPrice": "Rs. 3999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14521968/2021/12/24/3a3cc02d-17bc-4423-8fc2-342a1b00d1df1640343251519-Puma-Men-Black-Mesh-Running-Shoes-1071640343251207-1.jpg",
      "brand": "Puma",
      "title": "Eternity Nitro Running Shoes",
      "price": "Rs. 11049",
      "actualPrice": "Rs. 12999",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703405/2018/7/3/6ae532e9-9419-4342-96f6-37f0f047ffb61530620273965-Puma-Men-Black-Viz-Runner-Running-Shoes-821530620273760-1.jpg",
      "brand": "Puma",
      "title": "Men Viz Running Shoes",
      "price": "Rs. 3574",
      "actualPrice": "Rs. 5499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14367616/2021/8/12/07269c5b-cd27-4716-9709-583e7eac513d1628768262239-US-Polo-Assn-Men-White-LEBRON-20-Walking-Shoes-3021628768261-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men LEBRON 2.0 Walking Shoes",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/30/7426c955-48fd-48c1-994b-c2221f40f39a1617090592324-1.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Men Training & Gym Shoes",
      "price": "Rs. 2279",
      "actualPrice": "Rs. 3999",
      "offer": "(43% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/14/860b14a7-5bcf-4d09-920d-91e2e9bebfa21602633763764-1.jpg",
      "brand": "Woakers",
      "title": "Men Running Shoes",
      "price": "Rs. 681",
      "actualPrice": "Rs. 3405",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/8/5f287707-5817-4322-85ab-ce1d8b4d424c1602114254212-1.jpg",
      "brand": "Puma",
      "title": "Men Minima Running Shoes",
      "price": "Rs. 3249",
      "actualPrice": "Rs. 6499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12282146/2020/11/9/2f878da8-b88c-4bbd-997c-8a39e0f33e5b1604905105117-Puma-Men-Sports-Shoes-4491604905103244-1.jpg",
      "brand": "Puma",
      "title": "Men Runner IDP Running Shoes",
      "price": "Rs. 2799",
      "actualPrice": "Rs. 3999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/a785ee60-d670-4be3-9a2c-7b33b9cefb221584596192881-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Accessory Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15377500/2021/9/6/6dce8d21-d4ae-48bd-8e97-a063d0c552011630929856422LighteningBrighteningLiquoriceDeTanFaceScrub1.jpg",
      "brand": "UrbanMooch",
      "title": "Mens DeTan Face Scrub 100gm",
      "price": "Rs. 280",
      "actualPrice": "Rs. 400",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15360426/2021/9/23/b23eae78-66ca-4f84-bf51-51e075de0a0a1632394527514SKINKRAFTTransparentCustomizedSkincareKit1.jpg",
      "brand": "SKINKRAFT",
      "title": "Men Customized Skincare Kit",
      "price": "Rs. 1186",
      "actualPrice": "Rs. 2697",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/26/6b2b8655-9114-4cc5-a21b-ec98fa00089d1616775442097-1.jpg",
      "brand": "KIPRUN By Decathlon",
      "title": "Men Regular Fit Sports Shorts",
      "price": "Rs. 1563",
      "actualPrice": "Rs. 1699",
      "offer": "(8% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/887f76f0-ef4a-47f7-9688-3f222230c5ed1600467325986-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/30/0d4e74a1-6675-46f0-a726-dbfb5c8f18491617100823703-1.jpg",
      "brand": "ABYS",
      "title": "Leather Two Fold Wallet",
      "price": "Rs. 528",
      "actualPrice": "Rs. 1125",
      "offer": "(53% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/12/b1e9f736-cea6-46d4-b6ab-dea6d7884c991620800987869-1.jpg",
      "brand": "Blacksmith",
      "title": "Men Satin Accessory Gift Set",
      "price": "Rs. 614",
      "actualPrice": "Rs. 1499",
      "offer": "(59% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/91199418-8704-44a4-9351-3cc68e8f6bfa1621494390335-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/2/aad7f05a-3137-4939-9a87-886944c40b331604320382744-1.jpg",
      "brand": "LetsShave",
      "title": "Set Of 12 Pro 6 Shaving Blades",
      "price": "Rs. 1999",
      "actualPrice": "Rs. 2666",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16167628/2021/12/22/555c6bef-a9ce-4480-a4b9-c8d43a55d96d1640172496555-NOVA-Men-Trimmer-461640172496231-1.jpg",
      "brand": "NOVA",
      "title": "Men NHT 1038 Trimmer",
      "price": "Rs. 1100",
      "actualPrice": "Rs. 1295",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10012959/2021/12/18/c8ac8bca-3148-4bd5-8be8-8b3cab5b46ad1639769257677JEWELJUNCTIONSilver-TonedGeometricCufflinks1.jpg",
      "brand": "JEWEL JUNCTION",
      "title": "Geometric Cufflinks",
      "price": "Rs. 413",
      "actualPrice": "Rs. 1799",
      "offer": "(77% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/18/1291dbc7-859c-45a6-ba50-2103d0f9f4791616054135168-1.jpg",
      "brand": "MANCODE",
      "title": "Combo Of 2 Beard Cream & Soap",
      "price": "Rs. 324",
      "actualPrice": "Rs. 450",
      "offer": "(28% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16499748/2021/12/13/ea7928c8-b19c-4400-934e-7dbd26b3d2e21639403971569MensGroomingKit1.jpg",
      "brand": "Havells",
      "title": "HS4150 Hair Straightener",
      "price": "Rs. 1715",
      "actualPrice": "Rs. 1995",
      "offer": "(14% OFF)"
    }
  ]

  SportsShoesArr.map(function(el){
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
  
  
    localStorage.setItem("sportsShoesMens",JSON.stringify(SportsShoesArr))
    console.log("inside")
  
  })

