import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()


  let CasualShoes = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11264120/2022/1/11/ed69bd6b-242b-4c1e-8f86-6579c61106bb1641886437380-DressBerry-Women-White-Solid-Sneakers-1801641886437116-1.jpg",
      "brand": "DressBerry",
      "title": "Women Solid Sneakers",
      "price": "Rs. 1594",
      "actualPrice": "Rs. 2899",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13381274/2021/1/11/4fa3094c-851d-45a5-9452-1076a6b54cb41610355713577-Ginger-by-Lifestyle-Women-White-Driving-Shoes-10916103557123-1.jpg",
      "brand": "Ginger by Lifestyle",
      "title": "Women Solid Driving Shoes",
      "price": "Rs. 1709",
      "actualPrice": "Rs. 2999",
      "offer": "(43% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396059/2019/10/22/c0797cc9-3f91-4242-9ad4-49d5a4e78d431571734906586-Kook-N-Keech-Women-White-Sneakers-1691571734904452-1.jpg",
      "brand": "Kook N Keech",
      "title": "Women Sneakers",
      "price": "Rs. 869",
      "actualPrice": "Rs. 2899",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2450219/2018/7/18/98de6ce2-0874-4c3a-841a-3ba96c4cbf721531907093943-ether-Women-Casual-Shoes-811531907093591-1.jpg",
      "brand": "ether",
      "title": "Women Sneakers",
      "price": "Rs. 1149",
      "actualPrice": "Rs. 2299",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4879974/2018/7/3/c79e0284-5ede-43d2-88f0-b63efc3e52841530608539857-Kook-N-Keech-Women-Casual-Shoes-3331530608539751-1.jpg",
      "brand": "Kook N Keech",
      "title": "Women Sneakers",
      "price": "Rs. 1034",
      "actualPrice": "Rs. 2299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7240622/2021/12/28/41a2286d-5fe5-4c9e-be9d-c75e56e40b921640692050659ShoetopiaWomenWhiteSneakers1.jpg",
      "brand": "Shoetopia",
      "title": "Women Sneakers",
      "price": "Rs. 599",
      "actualPrice": "Rs. 999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396065/2019/10/24/2e1d2398-3e5b-45fe-bb6b-513dfb72bebc1571895106224-Kook-N-Keech-Women-White-Sneakers-7161571895104684-1.jpg",
      "brand": "Kook N Keech",
      "title": "Women Sneakers",
      "price": "Rs. 1449",
      "actualPrice": "Rs. 2899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4879970/2018/7/3/6fdbdb21-2433-4914-9f51-015f4ae493dd1530610259796-Mast--Harbour-Women-White-Sneakers-7891530610259640-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Women Sneakers",
      "price": "Rs. 2299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15011436/2021/10/13/f292cd15-2f0e-4661-9e74-7db076c97a881634110701671-Kook-N-Keech-Women-Casual-Shoes-3021634110701372-1.jpg",
      "brand": "Kook N Keech",
      "title": "Women Solid Sneakers",
      "price": "Rs. 1379",
      "actualPrice": "Rs. 2299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2454497/2018/3/19/11521443411300-Puma-Women-White-Sneakers-8601521443411261-1.jpg",
      "brand": "Puma",
      "title": "Women Smash V2 L Sneakers",
      "price": "Rs. 2974",
      "actualPrice": "Rs. 3499",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15357682/2021/11/12/97213365-cd54-4642-91d6-20f2267de3791636699708595-Mast--Harbour-Women-Casual-Shoes-5071636699708293-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Women Solid Sneakers",
      "price": "Rs. 1149",
      "actualPrice": "Rs. 2299",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396071/2019/5/22/b9480b19-9c01-464f-951d-6117011588ba1558517020340-Mast--Harbour-Women-Casual-Shoes-5881558517019407-1.jpg",
      "brand": "Mast & Harbour",
      "title": "Women Sneakers",
      "price": "Rs. 1484",
      "actualPrice": "Rs. 2699",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11261274/2020/11/27/d1920f0e-87dc-4ae2-9483-7a2ee6d65c771606474166664HRXbyHrithikRoshanWomenWhiteAthleisureShoe1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Women Woven Design Sneakers",
      "price": "Rs. 1599",
      "actualPrice": "Rs. 3999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13381270/2021/5/13/86ade4af-8122-4292-afb6-6fcf0c159a391620893603133-Ginger-by-Lifestyle-Women-White-Sneakers-1151620893602689-1.jpg",
      "brand": "Ginger by Lifestyle",
      "title": "Women Colourblocked PU Sneakers",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 2499",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15216664/2021/8/21/2ad6947e-ea0c-4046-bae3-0fb142e43c511629533595171GingerbyLifestyleWomenWhiteColourblockedSneakers1.jpg",
      "brand": "Ginger by Lifestyle",
      "title": "Women Textured Sneakers",
      "price": "Rs. 1499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15911844/2021/10/24/f63d731c-76a7-4e96-8a1e-b1482a11187f1635058247466PeopleWomenBlackTaperedFitSlashKneeJeans1.jpg",
      "brand": "People",
      "title": "Women Tapered Fit Jeans",
      "price": "Rs. 1299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14874198/2021/9/9/6683371e-543c-4ba3-8cb9-e6ae155b1bdb1631191014566-Levis-Women-Blue-Tapered-Fit-High-Rise-Heavy-Fade-Stretchabl-1.jpg",
      "brand": "Levis",
      "title": "Women Tapered Fit High-Rise Jeans",
      "price": "Rs. 3699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12178098/2020/9/14/0c974e1b-625f-441c-bc9c-eceb9c37aa791600084794622-Roadster-Women-Jackets-4521600084791832-1.jpg",
      "brand": "Roadster",
      "title": "Washed Denim Jacket",
      "price": "Rs. 1214",
      "actualPrice": "Rs. 2699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13326220/2021/7/20/e25afa22-59dd-4563-b205-3e15dbd04a011626762940897-Levis-Women-Jeans-9221626762940246-1.jpg",
      "brand": "Levis",
      "title": "Women 711 Skinny Fit Jeans",
      "price": "Rs. 1949",
      "actualPrice": "Rs. 3899",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12178108/2020/9/15/2f1276e0-6010-4d87-b003-bdf9afd9f0141600148870817-Roadster-Women-Jackets-1141600148869206-1.jpg",
      "brand": "Roadster",
      "title": "Washed Denim Jacket",
      "price": "Rs. 804",
      "actualPrice": "Rs. 2299",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15662748/2021/9/29/df981729-6fd3-4d7c-95e5-00db646bcb1f1632899613028HighStarWomenBlueWashedCropDenimJacketwithEmbroidered1.jpg",
      "brand": "High Star",
      "title": "Washed Crop Denim Jacket",
      "price": "Rs. 749",
      "actualPrice": "Rs. 2499",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/c11e14aa-8b67-403e-a397-c7026cb871ae1610368656453-1.jpg",
      "brand": "Kastner",
      "title": "Women Solid Belt",
      "price": "Rs. 295",
      "actualPrice": "Rs. 799",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/10/a5df6a38-0b29-4c0a-b69d-98d079d6a30e1612969980779-1.jpg",
      "brand": "High Star",
      "title": "Solid Denim Jacket",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1999",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14874012/2021/8/30/91470362-00f2-4733-a6c8-3ee520f505691630313683132-Levis-Women-Jeans-981630313682242-1.jpg",
      "brand": "Levis",
      "title": "Women Super Skinny Fit High-Rise Jeans",
      "price": "Rs. 2039",
      "actualPrice": "Rs. 3399",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15224542/2021/8/23/7c974859-cfc5-4955-8ed9-b764889089641629716948447CalvadossFashionBelt1.jpg",
      "brand": "Calvadoss",
      "title": "Women Tan Leather Belt",
      "price": "Rs. 459",
      "actualPrice": "Rs. 999",
      "offer": "(54% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14835538/2021/7/22/f1f11a34-cc4b-4fec-a4c5-b70206fafad51626944116949-Lino-Perros-Women-Navy-Blue-Backpack-8181626944116377-1.jpg",
      "brand": "Lino Perros",
      "title": "Women 14 Inch Laptop Backpack",
      "price": "Rs. 1287",
      "actualPrice": "Rs. 2995",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/23/5e3f229f-e1ee-4eee-89a7-352f500411321614086827378-1.jpg",
      "brand": "WINSOME DEAL",
      "title": "Solid Belt",
      "price": "Rs. 296",
      "actualPrice": "Rs. 899",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12513532/2021/1/29/84055fab-fcd1-4b9e-a36c-deac1bce97121611915928937-Pepe-Jeans-Women-Navy-Blue-Skinny-Fit-High-Rise-Clean-Look-S-1.jpg",
      "brand": "Pepe Jeans",
      "title": "Women Skinny Fit Jeans",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 2999",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12026542/2020/8/20/340a9e7d-9a9a-4c47-a029-512bab1b987d1597920353835-Lino-Perros-Women-Grey-Solid-Backpack-7231597920352431-1.jpg",
      "brand": "Lino Perros",
      "title": "Women 13 Inch Laptop Backpack",
      "price": "Rs. 1367",
      "actualPrice": "Rs. 3695",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13326232/2021/7/6/2faa8c16-02a2-4042-a6b0-021cef49c3871625561831982-Levis-Women-Jeans-4231625561831444-1.jpg",
      "brand": "Levis",
      "title": "Women Super Skinny Fit High-Rise Jeans",
      "price": "Rs. 2999",
      "actualPrice": null,
      "offer": null
    }
  ]


  CasualShoes.map(function(el){
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
  
  
    localStorage.setItem("CasualShoesWomen",JSON.stringify(CasualShoes))
    console.log("inside")
  
  })
 
