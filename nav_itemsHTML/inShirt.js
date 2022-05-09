import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML= sidebar_nav();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();
searchFunction()


var A_shirts1 =[
    { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/aae765ac-5610-4614-9839-102ad40fe5ab1650284973267RoadsterMenBlackGreyCheckedCasualSustainableShirt15.jpg",
  },
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d00d3bcb-fbbb-4c2e-8e29-bbef1d3b0cb71650284973277RoadsterMenBlackGreyCheckedCasualSustainableShirt2.jpg",
  }
  ,{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d4461682-e19e-46d7-b120-c58b256fe3311650284973300RoadsterMenBlackGreyCheckedCasualSustainableShirt4.jpg",
  },
  { "brand": "Roadster",
  },
  { "price":  674,
  },
  {    "MP":  1499,
  },
  {  "offer": 55
  },
  ]
  var A_shirts2=[ {
    "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"},
   { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/b40e3089-2e16-4982-b6e9-9e5522d6725b1566454086712-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-5.jpg"},
   { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/936afc2c-4596-4c38-8f90-770d21935f281566454086747-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-3.jpg"},
   { "brand": "WRONG"},
    {"price":  684},
   { "MP":  1849},
   { "offer": 63},
  ]
  
  var A_shirts3=[{ "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120287-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-4.jpg"},
  {"url1":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg" },
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2022/3/11/45f11a57-c7f7-4499-9386-53fc64a1e6061646999259263-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-7391646999259197-6.jpg"},
  {"brand": "Allen Solly"},
  {"price":  839},
  {"MP":  2099},
  {"offer": 60},]
  
  var A_shirts4=[ {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "Arrow 1146 "},
  { "price": 749},
  { "MP": 1499},
  { "offer": 50}]
  var A_shirts5=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/7142624c-9184-47db-bf67-5610bd756c761566454100661-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-1.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/c0b715eb-dfcb-4897-83e0-1827bb690f4f1566454100639-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-2.jpg"},
  {"brand": "Arrow Sport 626 "},
  { "price":  684},
  { "MP": 1849},
  { "offer": 63}]
  var A_shirts6=[ {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15353340/2021/10/28/5fc7bbc8-405e-492b-9495-0dedcdeb1f791635400364200-Nautica-Men-Shirts-921635400363485-1.jpg"},
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15353340/2021/10/28/b599c2dd-4ee3-41b7-b136-91cbf24e21821635400364182-Nautica-Men-Shirts-921635400363485-3.jpg"},
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15353340/2021/10/28/a910e4e6-96b7-4890-bf34-a0a3e01a8fce1635400364173-Nautica-Men-Shirts-921635400363485-4.jpg"},
  { "brand": "Allen Solly Sport{"},
  { "price":  582},
  { "MP":  1099},
  {"offer":  47}]
  var A_shirts7=[ {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"},
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737656-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-4.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"},
  { "brand": "Aeropostale"},
  { "price":  539},
  { "MP":  1199},
  { "offer":  55}]
  var A_shirts8=[{ "url1": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11780956/2020/4/3/f724f764-2aae-4918-ba70-6a20335f90451585905028495HIGHLANDERMenWhiteBlueSlimFitPrintedCasualShirt1.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11780956/2020/4/3/b99462b2-1fd3-4806-ad77-e081a06d3d0a1585905028609HIGHLANDERMenWhiteBlueSlimFitPrintedCasualShirt3.jpg"},
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11780956/2020/4/3/a1707411-9eb0-4a5c-953b-f7201667ec641585905028553HIGHLANDERMenWhiteBlueSlimFitPrintedCasualShirt2.jpg"},
  { "brand": "AD By Arvind 183 "},
  { "price": 555},
  { "MP":  1049},
  { "offer":  47}]
  var A_shirts9=[  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/aae765ac-5610-4614-9839-102ad40fe5ab1650284973267RoadsterMenBlackGreyCheckedCasualSustainableShirt15.jpg",
  },
  { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d00d3bcb-fbbb-4c2e-8e29-bbef1d3b0cb71650284973277RoadsterMenBlackGreyCheckedCasualSustainableShirt2.jpg",
  }
  ,{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d4461682-e19e-46d7-b120-c58b256fe3311650284973300RoadsterMenBlackGreyCheckedCasualSustainableShirt4.jpg",
  },
  { "brand": "AMERICAN EAGLE OUTFITTERS 138 "},
  { "price":  1319},
  { "MP":  2399},
  { "offer":  45}]
  var A_shirts10=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "Arrow New York 110 "},
  { "price":  704},
  { "MP":  1499},
  { "offer":  53}]
  var A_shirts11=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "abof 98 ",},
  { "price":  677},
  { "MP":  1149},
  {"offer":  41}]
  var A_shirts12=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "Antony Morato 60 "},
  { "price":  2399},
  { "MP":  2999},
  { "offer":  20}]
  var A_shirts13=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "Anouk 36 "},
  {"price":  479},
  {"MP":  1199},
  { "offer":  60}]
  var A_shirts14=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "ATTIITUDE 18 "},
  { "price":  1374},
  { "MP":  2499},
  { "offer":  45}]
  var A_shirts15=[{"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/41895e3f-96f7-4ce9-860f-a9ed84ecb1721565006161782-Roadster-Men-Shirts-8701565006159466-6.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/4942f30e-a38b-44a8-ae3a-cd536b17c25d1565006161796-Roadster-Men-Shirts-8701565006159466-5.jpg"},
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/a4ff349b-5bf5-41c6-a623-a684d94af3c91565006161838-Roadster-Men-Shirts-8701565006159466-3.jpg"},
  { "brand": "Arrow Blue Jean Co. 7 "},
  { "price": 1249},
  { "MP": 2499},
  { "offer":  50}]
  var A_shirts16=[{ "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120287-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-4.jpg"},
  {"url1":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg" },
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2022/3/11/45f11a57-c7f7-4499-9386-53fc64a1e6061646999259263-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-7391646999259197-6.jpg"},
  // {"brand": "Allen Solly"},
  { "brand": "Allen Cooper 7 "},
  {  "price":  749},
  { "MP":  1499},
  { "offer":  50}]
  var A_shirts17=[{ "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120287-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-4.jpg"},
  {"url1":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg" },
  {"url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2022/3/11/45f11a57-c7f7-4499-9386-53fc64a1e6061646999259263-HIGHLANDER-Men-White-Slim-Fit-Casual-Shirt-7391646999259197-6.jpg"},
  { "brand": "aLL 3 "},
  { "price":  529},
  { "MP":  999},
  { "offer":  47}]
  var A_shirt18=[ {
    "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"},
   { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/b40e3089-2e16-4982-b6e9-9e5522d6725b1566454086712-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-5.jpg"},
   { "url1": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/936afc2c-4596-4c38-8f90-770d21935f281566454086747-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-3.jpg"},
  { "brand": "American Bull 2 "},
  { "price":  749},
  { "MP":  1499},
  { "offer":  50}]







//  let div = document.querySelector("#images")
//  let div1 = document.createElement("div")
//  let div2 = document.createElement("div")
//  let brand = document.createElement("p")
//  let title = document.createElement("p")
//  let price = document.createElement("p")
//  let MP = document.createElement("p")
//  let off = document.createElement("p")

// async programing  
let id;
let i = 0;
function setmen(arr){
    let append_data=document.getElementById("images")
    let div1=document.createElement("div")
    div1.setAttribute("class","div1")
    let box = document.createElement("div")

    
        let img=document.createElement("img")
       div1.id="inner_div"
      
        img.id="img1"
         id =   setInterval(function(){
          
            if(i=== 3) {
                i = 0;
            }
         
            console.log(arr[i].url1)
            console.log(i)
            img.src = arr[i].url1;
            box2.append(price,MP,off)
            box.append(brand,type)
            div1.append(img,box,box2)
            append_data.append(div1)
            
            i++;
            },3000)
      
        console.log(arr)
        div1.addEventListener("mouseover",function(event){
   let   hoverDiv = document.createElement("div")
            brand.innerHTML =  `<i class="fa-solid fa-heart"></i> whishlist `; 

            brand.setAttribute("class","brand1")
              type.innerText = "size: 28 30 32 34 36"
            hoverDiv.append(brand,type)
            box.append(hoverDiv)
        })
     div1.addEventListener("click",function(event){
       window.location.href = "/nav_itemsHTML/casualshirtMens.html"
     })
        div1.addEventListener("mouseout",function(event){
           
        //    itag.src = "image"
        console.log(arr[3].brand,"this is b")
            brand.innerText =  arr[3].brand;
            // type.innerText  = arr[4].title;
         
            brand.setAttribute("class","brand2")

        })
            
        let box2 = document.createElement("div")
        box2.setAttribute("id","box2")
 let brand=document.createElement("h6")
brand.setAttribute("id","brand")
        let type=document.createElement("p")
        type.setAttribute("id","type")
        let price=document.createElement("p")
        price.setAttribute("id","price")
        let MP=document.createElement("s")
        MP.setAttribute("id","MP")
        let off=document.createElement("p")
        off.setAttribute("id","off")

        brand.innerText = arr[3].brand;
        // type.innerText = arr[4].title;
        price.innerText = `RS.${arr[4].price}`
        MP.innerText = `RS.${arr[5].MP}`;
        off.innerText = `(${arr[6].offer}%OFF)`;
      
        console.log("inside") 
        
      div1.addEventListener("click",()=>{
          clickFunction(arr)
      })  


}

let arrSend = JSON.parse(localStorage.getItem("tShirtKey"))||[]
function clickFunction(arr){
    console.log(arr,"tShirtKey")
    // arrSend = null
    arrSend.push(arr)


localStorage.setItem("tShirtKey",JSON.stringify( arrSend))


}



setmen(A_shirts1)
setmen(A_shirts2)
setmen(A_shirts3)

setmen(A_shirts4)
setmen( A_shirts5)
setmen(A_shirts6)
setmen(A_shirts7)
setmen(A_shirts8)
setmen(A_shirts9)
setmen(A_shirts10)
setmen(A_shirts11)
setmen(A_shirts12)
setmen( A_shirts13)
setmen(A_shirts14)
setmen(A_shirts15)
setmen(A_shirts16)
setmen(A_shirt17)
setmen(A_shirt18)

// 



// function mensSortFunction(){

//     let selected = document.querySelector("#sort").value ;
//     if(selected == "What's New"){
//         arr.sort((a,b)=>{
//          if(a.brand > b.brand)return -1;
//          if(a.brand < b.brand) return 1;
//          return 0; 
//         })
//         console.log("sortPrice")
//         setmen(A_shirt7)
//     }

   
// }







 