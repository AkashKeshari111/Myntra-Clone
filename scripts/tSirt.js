
// import {navbar} from "../components/navbar.js"
// document.getElementById("navbar").innerHTML=navbar();


// let tshirt_arr=[
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12816462/2020/11/24/ba18a805-4903-48a4-a136-c60ca39b22911606200984349-HERENOW-Men-Tshirts-1551606200983033-1.jpg",
//     "Brand": "HERE&NOW",
//     "type": "Men Solid Round Neck T-shirt",
//     "price": "Rs. 227",
//     "actualPrice": "Rs. 649",
//     "off": "(65% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1816490/2018/4/7/11523090829974-HIGHLANDER-Men-Black-Slim-Fit-Solid-Round-Neck-T-shirt-2051523090829712-1.jpg",
//     "Brand": "HIGHLANDER",
//     "type": "Solid Round Neck Pure Cotton T-shirt",
//     "price": "Rs. 351",
//     "actualPrice": "Rs. 549",
//     "off": "(36% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid Round Neck Pure Cotton T-shirt",
//     "price": "Rs. 299",
//     "actualPrice": "Rs. 599",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9793521/2022/4/18/2924525f-037f-4021-b065-761d590593cf1650284877470RoadsterMenMaroonSolidRoundNeckPureCottonT-shirt1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid Round Neck Pure Cotton T-shirt",
//     "price": "Rs. 329",
//     "actualPrice": "Rs. 599",
//     "off": "(45% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2216201/2017/11/30/11512038271694-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8171512038271594-1.jpg",
//     "Brand": "Roadster",
//     "type": "Drop-Shoulder T-shirt",
//     "price": "Rs. 349",
//     "actualPrice": "Rs. 699",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1996725/2018/1/10/11515567400610-Roadster-Men-Blue-Solid-V-Neck-T-shirt-7321515567400387-1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid V-Neck T-shirt",
//     "price": "Rs. 299",
//     "actualPrice": "Rs. 599",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1018611/2016/3/4/11457076915444-ETHER-Supima-White-T-shirt-2431457076914677-1.jpg",
//     "Brand": "ether",
//     "type": "Pure Cotton T-shirt",
//     "price": "Rs. 329",
//     "actualPrice": "Rs. 599",
//     "off": "(45% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2275373/2018/1/24/11516793428292-Roadster-Men-Charcoal-Solid-Round-Neck-T-shirt-3641516793428158-1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid Round Neck T-shirt",
//     "price": "Rs. 199",
//     "actualPrice": "Rs. 399",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10384503/2022/4/12/85aee619-a4ec-4c09-a456-e47412956b951649749384737-Roadster-Men-Olive-Green-Solid-Round-Neck-Pure-Cotton-T-shir-1.jpg",
//     "Brand": "Roadster",
//     "type": "Men Solid Round Neck Cotton T-shirt",
//     "price": "Rs. 299",
//     "actualPrice": "Rs. 599",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10941384/2020/2/13/9447a845-892a-49f5-91ee-4de8a6589a541581587257528-Roadster-Men-Tshirts-8221581587255142-1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid Round Neck Pure Cotton T-shirt",
//     "price": "Rs. 549",
//     "actualPrice": "Rs. 999",
//     "off": "(45% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2310354/2018/2/15/11518692015450-Roadster-Men-Tshirts-3681518692015229-1.jpg",
//     "Brand": "Roadster",
//     "type": "T-shirt with Layered Hem",
//     "price": "Rs. 239",
//     "actualPrice": "Rs. 599",
//     "off": "(60% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/3314157/2018/4/18/11524041081440-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3461524041081257-1.jpg",
//     "Brand": "Roadster",
//     "type": "Solid Round Neck T-shirt",
//     "price": "Rs. 324",
//     "actualPrice": "Rs. 499",
//     "off": "(35% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13552828/2021/11/18/f5f8618d-7983-46ec-833d-ea7a650e20201637222081460-Bewakoof-Men-White-Pure-Cotton-T-shirt-5811637222081380-18.jpg",
//     "Brand": "Bewakoof",
//     "type": "Pure Cotton T-shirt",
//     "price": "Rs. 399",
//     "actualPrice": null,
//     "off": null
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2306179/2019/3/8/649510bf-570a-4743-88bd-0bb1f354d3fe1552026562116-Roadster-Men-White-Solid-V-Neck-T-shirt-8741552026560838-1.jpg",
//     "Brand": "Roadster",
//     "type": "Slub Effect Raw Edge Cotton T-shirt",
//     "price": "Rs. 299",
//     "actualPrice": "Rs. 599",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10188591/2019/9/26/70f45aeb-477e-48fb-b5e4-8820904196271569490421369-WROGN-Men-Burgundy-Solid-Slim-Fit-Round-Neck-T-shirt-9361569-1.jpg",
//     "Brand": "WROGN",
//     "type": "Men Solid Slim Fit Pure Cotton T-shirt",
//     "price": "Rs. 539",
//     "actualPrice": "Rs. 899",
//     "off": "(40% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/18/6abf4e55-8a49-4b8e-9bd1-4a1534f8d90f1581980902307-1.jpg",
//     "Brand": "Apsis",
//     "type": "Solid Reversible Belt",
//     "price": "Rs. 449",
//     "actualPrice": "Rs. 1499",
//     "off": "(70% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/7/3410a59b-a27c-44ed-b9a6-e908da8190451575679872752-1.jpg",
//     "Brand": "WM",
//     "type": "Men Analogue Watch",
//     "price": "Rs. 399",
//     "actualPrice": "Rs. 2499",
//     "off": "(84% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/6/6ccc8673-a85a-4eae-aaba-8875ec5b331f1580943439526-1.jpg",
//     "Brand": "amicraft",
//     "type": "Men Reversible Solid Belt",
//     "price": "Rs. 439",
//     "actualPrice": "Rs. 2199",
//     "off": "(80% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/20/73e8c2f4-ff95-4b7b-9919-f9e6fe9050401613794027463-1.jpg",
//     "Brand": "MASH UNLIMITED",
//     "type": "Men Solid Slim-Fit Track Pants",
//     "price": "Rs. 548",
//     "actualPrice": "Rs. 899",
//     "off": "(39% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15522098/2021/9/29/c3639cbc-0e4f-4b23-96c1-bb0e3f8fbecd1632918636153-FELIX-Men-White-Dial--Black-Leather-Straps-Analogue-Watch-95-1.jpg",
//     "Brand": "FELIX",
//     "type": "Men Leather Analogue Watch",
//     "price":  629,
//     "actualPrice": "Rs. 3149",
//     "off": "(80% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16091748/2021/11/15/9a41db06-3ae2-4fd6-bca2-516df267d4d41636962687638KETCHMenBeigeSlimFitJoggersTrousers1.jpg",
//     "Brand": "KETCH",
//     "type": "Men Slim Fit Joggers Trousers",
//     "price": "Rs. 577",
//     "actualPrice": "Rs. 1649",
//     "off": "(65% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12983724/2020/12/8/edc628ce-92fd-4b84-9064-c348db661dbe1607426938676-Mast--Harbour-Men-Jeans-8661607426936872-1.jpg",
//     "Brand": "Mast & Harbour",
//     "type": "Men Skinny Fit Jeans",
//     "price": "Rs. 809",
//     "actualPrice": "Rs. 1799",
//     "off": "(55% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341556/2021/2/23/a5983f22-f45a-467c-b77b-c6c520eef9471614072375613-Ultimo-9541614072374715-1.jpg",
//     "Brand": "Ultimo",
//     "type": "Men Solid Reversible Belt",
//     "price": "Rs. 649",
//     "actualPrice": "Rs. 1299",
//     "off": "(50% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/27/cd061deb-7f38-42c1-a09b-6cecb4fd4a721624788728381-1.jpg",
//     "Brand": "max",
//     "type": "Men Striped Sliders",
//     "price": "Rs. 449",
//     "actualPrice": "Rs. 499",
//     "off": "(10% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13703514/2022/3/23/a5328a08-e4d6-481f-93b7-563005c8cc0c1648026765141-Man-Arden-Men-7X-Beard-Oil-30ml-9521648026764982-1.jpg",
//     "Brand": "Man Arden",
//     "type": "Men Beard Oil 30ml",
//     "price": "Rs. 314",
//     "actualPrice": "Rs. 399",
//     "off": "(Rs. 85 OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/8/358e6360-dac2-4062-86c2-070967c40c2d1575761379950-1.jpg",
//     "Brand": "WM",
//     "type": "Men Analogue Watch",
//     "price": "Rs. 399",
//     "actualPrice": "Rs. 2499",
//     "off": "(84% OFF)"
//   },
//   {
//     "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/30/c6f32afe-e60c-407e-81c0-b591834745801606739420611-1.jpg",
//     "Brand": "TnW",
//     "type": "Men Solid Handcrafted Two Fold Wallet",
//     "price": "Rs. 298",
//     "actualPrice": "Rs. 1195",
//     "off": "(75% OFF)"
//   }
// ]




// tshirt_arr.map(function(el){
//   let append_data=document.getElementById("append_data")
//   let div1=document.createElement("div")
//   let img=document.createElement("img")
//   let brand=document.createElement("h3")
//   let type=document.createElement("p")
//   let price=document.createElement("p")
//   let MP=document.createElement("s")
//   let off=document.createElement("p")


//   div1.id="inner_div"
//   img.src=el.image;
//   img.id="img1"



  
//   brand.innerText=el.Brand;
//   brand.id="brand1"

 
//   type.innerText=el.type;
//   type.id="type1"
   
//   let div2=document.createElement("div")
//   div2.id="div_2"
//   let div3=document.createElement("div")
//   div3.id="div_3"
//   price.innerText=el.price;
//   price.id="price1"
//   MP.innerText=el.actualPrice;
//   MP.id="mp1"
//   off.innerText=el.off;
//   off.id="off1"


  
//   div3.append(price,MP,off)
//   div2.append(div3)
//   div1.append(img,brand,type,div2)

//   append_data.append(div1)


//   localStorage.setItem("tshirt",JSON.stringify(tshirt_arr))
//   console.log("inside")

// })






// import { footer } from "../components/footer.js";
// document.getElementById("footerDiv").innerHTML=footer();
