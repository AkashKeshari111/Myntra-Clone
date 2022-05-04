
 
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
 
  
import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

 
 let jeansArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7786833/2019/9/25/55914283-1977-4328-9677-023537820a8b1569399773519-LOCOMOTIVE-Men-Grey-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-1.jpg",
      "brand": "LOCOMOTIVE",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1074",
      "actualPrice": "Rs. 2499",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7243639/2022/4/19/868d6eee-0649-44e4-b17b-2aa3e3b0fc9c1650366028127RoadsterMenBlackSlimFitMid-RiseCleanLookJeans1.jpg",
      "brand": "Roadster",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 679",
      "actualPrice": "Rs. 1699",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8706061/2019/4/2/e5a76652-ca96-47de-a7f4-ca92dc2483581554196084705-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchabl-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 688",
      "actualPrice": "Rs. 1299",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10187401/2019/9/6/4d898c8c-ed5a-4e03-8618-1e60af1a261d1567759098279-WROGN-Men-Jeans-1021567759096713-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 2599",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7678836/2018/12/17/04fceac4-8e1b-4982-ba58-00485243a3481545031068966-Roadster-Men-Jeans-841545031064917-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 764",
      "actualPrice": "Rs. 1699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5669588/2018/6/12/0dcec4bb-3be9-4c67-9d9a-ecdcc937f98d1528807434080-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-4491528807433906-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 934",
      "actualPrice": "Rs. 1699",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10885024/2019/11/13/adb31de4-d904-42f0-b754-456351b9e5b91573647637113-IVOC-Mens-Denim-Joggers-8411573647633226-1.jpg",
      "brand": "IVOC",
      "title": "Men Jogger Jeans",
      "price": "Rs. 834",
      "actualPrice": "Rs. 1799",
      "offer": "(Rs. 965 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6544937/2018/7/11/867f2bfa-64f5-4c29-afa0-eed584bddb751531295865569-Roadster-Men-Jeans-7681531295865401-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8673413/2019/3/14/4c4ba5c0-e87a-430e-a267-f48f20a703621552564719527-WROGN-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-J-1.jpg",
      "brand": "WROGN",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 1559",
      "actualPrice": "Rs. 2599",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12560198/2020/11/27/06786031-de7d-4adb-a02e-a00f1b4988e31606477259949-HERENOW-Men-Jeans-4651606477258027-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2428491/2018/2/1/11517477484451-HERENOW-Men-Jeans-141517477484325-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Cropped Tapered Fit Jeans",
      "price": "Rs. 749",
      "actualPrice": "Rs. 2499",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2150846/2017/10/19/11508406968179-HERENOW-Men-Blue-Slim-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-7261508406968007-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 779",
      "actualPrice": "Rs. 2599",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13823708/2022/4/26/ac356453-1770-442b-83d5-734f86645e2f1650961872384-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
      "brand": "Urbano Fashion",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 755",
      "actualPrice": "Rs. 1399",
      "offer": "(46% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9162839/2022/4/20/65a4b6eb-29dd-4b1d-bda8-96a18a5c4f421650446666508HIGHLANDERMenBlackTaperedFitMid-RiseCleanLookStretchableJean1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Tapered Fit Jeans",
      "price": "Rs. 688",
      "actualPrice": "Rs. 1299",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1439",
      "actualPrice": "Rs. 2399",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15557090/2021/9/21/9868e070-3272-44d3-a7a4-71948d12dac01632231292988KLOTTHEMenGrey2PoloCollarPocketsT-shirt1.jpg",
      "brand": "KLOTTHE",
      "title": "Men Printed Polo Collar Pockets T-shirt",
      "price": "Rs. 698",
      "actualPrice": "Rs. 2329",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12918952/2021/1/13/bd0de45e-c771-4bbd-9bdb-d9db59699a9e1610514155139-Roadster-Men-Shirts-2181610514153187-1.jpg",
      "brand": "Roadster",
      "title": "Pack Of 2 Solid Casual Shirt",
      "price": "Rs. 1214",
      "actualPrice": "Rs. 2699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/d93a97a4-de0b-4d45-a5cc-5fca98f55a171584574624556-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/8/a421647f-fad1-4293-b336-95c1c2330b9c1575758234024-1.jpg",
      "brand": "WM",
      "title": "Men Leather Analogue Watch",
      "price": "Rs. 399",
      "actualPrice": "Rs. 2499",
      "offer": "(84% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10863004/2020/4/6/e27368e2-9ced-426c-a700-c80c2d08a1371586151984972-Roadster-Men-Pack-Of-Two-Black--Grey-Regular-Fit-Solid-Casua-1.jpg",
      "brand": "Roadster",
      "title": "Regular Fit Pack of Two Shirts",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11895986/2020/8/12/312abeb3-7b15-4382-ab53-b57cf39a9c761597216507405-Roadster-Men-Shirts-41597216506028-1.jpg",
      "brand": "Roadster",
      "title": "Regular Printed Casual Shirt",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/16/906ec19c-1883-4577-9def-fea0ff5efb6d1608134200868-1.jpg",
      "brand": "cape canary",
      "title": "Regular Fit Casual Shirt",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/a85c9c26-12dc-470c-afcb-e1e9a2650fc51610167480222-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Solid Sustainable Belt",
      "price": "Rs. 527",
      "actualPrice": "Rs. 1198",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/23/7ee63e6d-9f48-430e-a621-8eb2712aeb331571769108774-1.jpg",
      "brand": "Kara",
      "title": "Men Solid Belt",
      "price": "Rs. 1399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/20/4454f0e2-6d1a-47f2-9f16-25911f635d541584657926107-1.jpg",
      "brand": "CRUSSET",
      "title": "Textured Belt",
      "price": "Rs. 524",
      "actualPrice": "Rs. 1499",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10944912/2020/3/12/09d222e8-260c-4774-a037-96b5ad826c5d1584009890617-Roadster-Men-Shirts-8851584009888652-1.jpg",
      "brand": "Roadster",
      "title": "Regular Checked Casual Shirt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341490/2021/2/23/4fd35ff2-7496-4ffc-992b-f028c85634b11614050482980-ULTIMO-3861614050482203-1.jpg",
      "brand": "Ultimo",
      "title": "Men Checked Reversible Belt",
      "price": "Rs. 519",
      "actualPrice": "Rs. 1299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/6/9ef0523f-f7ac-42c6-9d33-ba65bc7bb8971580945568074-1.jpg",
      "brand": "amicraft",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 439",
      "actualPrice": "Rs. 2199",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10398211/2019/11/25/7ab8bc06-f264-45e3-82bf-7c79f02812211574658986116-Roadster-Men-Shirts-8711574658983724-1.jpg",
      "brand": "Roadster",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1199",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12251302/2020/9/24/5ca02381-c7df-4299-af12-4cfa29bcc4f61600948098090-Roadster-Men-Tshirts-171600948095917-1.jpg",
      "brand": "Roadster",
      "title": "Printed Round Neck Pure Cotton T-shirt",
      "price": "Rs. 399",
      "actualPrice": "Rs. 799",
      "offer": "(50% OFF)"
    }
  ]


  
  jeansArr.map(function(el){
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
  
  
    localStorage.setItem("jeansMens",JSON.stringify(jeansArr))
    console.log("inside")
  
  })




