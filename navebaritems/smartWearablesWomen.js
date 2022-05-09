import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let SmartWearables = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14858178/2021/7/23/fed66508-7823-41f7-ab0e-54643ab2ea141627049284831-AMAZFIT-GTS-2e-SMART-WATCH-MOSS-GREEN-2771627049284631-1.jpg",
    "brand": "Amazfit",
    "type": "GTS 2E Smart Watch",
    "price": "9999",
    "MP": "14999",
    "offer": 5000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13285260/2021/1/18/78527280-5c83-49a3-8a85-db44956406ef1610967137060-CrossBeats-Unisex-Gold-Toned-Digital-Smart-Watch-CB-IGNITE-5-1.jpg",
    "brand": "CrossBeats",
    "type": "Digital Smart Watch",
    "price": "2499",
    "MP": "9999",
    "offer": 7500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11987192/2020/9/9/5f14d543-345d-40c7-9dc0-1b16bd028de61599657332772-Fitbit-Versa2-Petal--Copper-Rose-Smartwatch-with-Heart-Rate--1.jpg",
    "brand": "Fitbit",
    "type": "Versa 2 Smartwatch",
    "price": "13499",
    "MP": "14999",
    "offer": 1500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11302744/2020/1/9/ecbbf2ca-c0d1-47a8-a25b-d55f183fe5b71578570316300-Amazfit-Unisex-Orange-Huami-GTS-Smartwatch-A1914-90115785703-1.jpg",
    "brand": "Amazfit",
    "type": "Unisex Huami GTS Smartwatch",
    "price": "5999",
    "MP": "12999",
    "offer": 7000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13234940/2022/1/20/85ac6d23-0374-4bee-a28c-92aef67b4a051642644688401-FitSpark-Unisex-Piano-Black-Eclipse-14-Super-Retina-Display--2.jpg",
    "brand": "FitSpark",
    "type": "Unisex Eclipse HD Smartwatch",
    "price": "2999",
    "MP": "5990",
    "offer": 2991
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/22/b64ad159-21e3-479b-80c9-37f053d756141571696203491-1.jpg",
    "brand": "NOISE",
    "type": "Colorfit Pro2 Smart Watch",
    "price": "2799",
    "MP": "4999",
    "offer": 2200
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14282458/2021/5/18/0b860bdb-8696-44d1-92e4-2319d07308a11621321271683-Fitbit-Unisex-Grey-Sense-Smart-Watches-FB512BKBK-95116213212-1.jpg",
    "brand": "Fitbit",
    "type": "Unisex Sense Smart Watches",
    "price": "22499",
    "MP": "22999",
    "offer": 500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14858168/2021/7/23/d59dab34-7ab2-4055-8770-73ebba12ab091627049173559-AMAZFIT-GTS-2e-SMART-WATCH-LILAC-PURPLE-8791627049173360-1.jpg",
    "brand": "Amazfit",
    "type": "GTS 2E Smart Watch",
    "price": "9999",
    "MP": "14999",
    "offer": 5000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/14/6e086c6f-10b2-45a7-9add-04612485f6ee1607962591764-1.jpg",
    "brand": "NOISE",
    "type": "Unisex ColorFit Pro 3 Smartwatch",
    "price": "3999",
    "MP": "5999",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/14/7031e27a-3f05-472b-8f92-bb86707b228c1607960084926-1.jpg",
    "brand": "NOISE",
    "type": "Unisex ColorFit Pro 3 1.55 Inch Display Smartwatch with 5.0 Bluetooth Version",
    "price": "3999",
    "MP": "5999",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15708818/2021/10/2/3f64c96b-6d0c-4b89-b9ec-c904c2a4ee801633180510709HAMMERUnisexBlackPulse20SmartWatchwithCallingandMusic1.jpg",
    "brand": "HAMMER",
    "type": "Unisex Pulse 2.0 Smart Watch with Calling and Music",
    "price": "3499",
    "MP": "13330",
    "offer": 9831
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14281874/2021/5/17/121d3d73-6d77-434d-90b2-9b3950df330a1621232488316-Fitbit-Versa-3-BlackBlack-Aluminum-4771621232487887-1.jpg",
    "brand": "Fitbit",
    "type": "Unisex Versa 3 Smart Watch",
    "price": "18499",
    "MP": "18999",
    "offer": 500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10769100/2019/10/17/5c741d75-f365-4d92-9ad7-88a9a8473cc41571294527910-Noise--Teal-Green-ColorFit-Pro-2-Active-Smartwatch-395157129-1.jpg",
    "brand": "NOISE",
    "type": "Pro 2 Smartwatch",
    "price": "2799",
    "MP": "4999",
    "offer": 2200
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15040574/2021/8/16/93930149-cfb5-47af-8d7f-c4f98e471dbc1629095134249-realme-Watch-2Black-Strap-5751629095134044-1.jpg",
    "brand": "Realme",
    "type": "Unisex SmartWatch 2",
    "price": "2999",
    "MP": "3999",
    "offer": 1000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16195312/2021/11/22/87c93c85-cd78-4359-9abe-497b8e9246c71637588315348-Noise-X-Fit-Smartwatch---Jet-Black-1381637588315167-1.jpg",
    "brand": "NOISE",
    "type": "X-Fit Smartwatch",
    "price": "2999",
    "MP": "5999",
    "offer": 3000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15665102/2021/9/28/b9646494-db94-4ba5-9698-4515a3eaa76b1632834478347SwissDesignUnisexBlue1.jpg",
    "brand": "Swiss Design",
    "type": "Rectangle Sunglasses",
    "price": "449",
    "MP": "1499",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11656280/2020/3/12/d2a9f46a-69e5-461a-9963-77ee8272ac4f1584016079055-JBL-T100TWS-Pure-Bass-In-Ear-Wireless-Headphones-with--17-Ho-1.jpg",
    "brand": "JBL",
    "type": "T100TWS Wireless Headphones",
    "price": "4489",
    "MP": "7999",
    "offer": 3510
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7827827/2018/11/27/7dc61e9d-0a92-4efe-a568-b98ea3a3dacf1543314876687-JBL-T500BT-Powerful-Bass-Wireless-On-Ear-Headphones-with-Mic-1.jpg",
    "brand": "JBL",
    "type": "On-Ear Headphones with Mic",
    "price": "2999",
    "MP": "3799",
    "offer": 800
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13175482/2021/1/18/452c5d2c-3cf2-46bb-aa48-673f45b12ae51610967052981-CrossBeats-Unisex-Navy-Blue-EDGE-True-Wireless-In-Ear-Earpho-1.jpg",
    "brand": "CrossBeats",
    "type": "Unisex EDGE True Wireless In-Ear Earphones",
    "price": "2299",
    "MP": "12999",
    "offer": 10700
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13602280/2021/2/6/ad133674-49e8-4161-9fa2-27673cc5d98f1612609818713macmeriseGreyBlackAvengersEndgameSuitXiaomiPocoX3BackCover1.jpg",
    "brand": "macmerise",
    "type": "Avengers Endgame Suit Xiaomi Poco X3 Back Cover",
    "price": "499",
    "MP": "699",
    "offer": 200
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/15/23e79c40-be3c-443d-8f1e-1650fc8220871610708026157-1.jpg",
    "brand": "Realme",
    "type": "Unisex Solid Buds Air Pro",
    "price": "3999",
    "MP": "5999",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/4/c0af74fa-7b95-4126-b649-8dfcc88dcb4c1612430690924-1.jpg",
    "brand": "macmerise",
    "type": "Printed Rusted Captains Shield Xiaomi Poco X2 Back Cover",
    "price": "499",
    "MP": "699",
    "offer": 200
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14503126/2021/6/28/748ef327-3d80-4af3-9d33-5a3092a3c2861624878983940-Timex-Unisex-Grey-Dial--Silver-Toned-Stainless-Steel-Bracele-1.jpg",
    "brand": "Timex",
    "type": "Unisex Digital Watch",
    "price": "2098",
    "MP": "5995",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15563036/2021/9/21/842fbc3e-f1d1-422c-9da7-1ffeba77e6871632243077156Sunglasses1.jpg",
    "brand": "SCAGLIA",
    "type": "Anti Reflective Sunglasses",
    "price": "431",
    "MP": "1599",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15624552/2021/9/25/8331ec62-2c07-44c0-a3f8-ec4fa747e3381632577411260ENRICORazorUVProtectedRoundUnisexSunglasses1.jpg",
    "brand": "ENRICO",
    "type": "Unisex Round Sunglasses",
    "price": "1014",
    "MP": "1950",
    "offer": 48
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11249768/2020/2/3/51b126a6-9d4f-4183-81f3-a6479f400ce61580726683434-Swatch-Unisex-Watches-7841580726681876-1.jpg",
    "brand": "Swatch",
    "type": "Unisex Swiss Analogue Watch",
    "price": "11500",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15561102/2021/9/21/a18e0d79-e0bd-4f69-9649-bfe300eb04801632239095941SCAGLIAUnisexBrown1.jpg",
    "brand": "SCAGLIA",
    "type": "Unisex Wayfarer Sunglasses",
    "price": "383",
    "MP": "1599",
    "offer": 76
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484392/2021/9/21/70d68946-db74-4ab2-90f4-27353fc529061632211166187-Realme-Buds-Air-2-with-Active-Noise-Cancellation-True-Wirele-1.jpg",
    "brand": "Realme",
    "type": "Air 2 True Wireless Headset",
    "price": "3299",
    "MP": "4999",
    "offer": 1700
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15875952/2021/10/20/b691e1bf-cd65-497a-9f2f-124c6519a68d1634727424362FloydUnisexBlack1.jpg",
    "brand": "Floyd",
    "type": "Unisex Round Sunglasses with UV Protected Lens",
    "price": "699",
    "MP": "1999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15795916/2021/10/11/d70033c2-84da-4211-863c-48595095d39b1633950361425AviatorSunglasses1.jpg",
    "brand": "Ted Smith",
    "type": "Unisex Aviator Sunglasses",
    "price": "884",
    "MP": "2390",
    "offer": 63
  }
]

mensData(SmartWearables)



// let sortFun = 
let sortFun = document.querySelector("#sort") ;
sortFun.addEventListener("change",function(){
  // console.log("inside add event ")
  menSort()
})
function menSort(){
  console.log("insid sort")
  let selected = document.querySelector("#sort").value ;
  console.log(selected,"sort")
  if(selected =="What's New"){
  
   
  let sort1 =   SmartWearables1.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   SmartWearables1.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   SmartWearables1.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   SmartWearables1.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   SmartWearables1.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   SmartWearables1.sort(function(a,b){
               return Number(b.offer) - Number(a.offer) ;
             
              })
              console.log(sort1,"sort arr")
              mensData(sort1)
            }    

            if(selected =="SbyR"){
            
            
            
               window.location.reload()
              }    
  


}

// menSort()

// mens Filter
// let checkbox;
// let cBox = document.querySelector(".check_box")
// let appendData = document.getElementById("append_data")

// cBox.addEventListener("click",function(){

// let cBox1 =  document.querySelector('input[type="checkbox"]:checked') ;
// appendData.innerText = checkbox.value;
// console.log("inside fn",appendData)
// })






function mensData(arr){
 
  // console.log("sort data send kra ",arr)
let   append_data=document.getElementById("append_data")
  append_data.innerHTML = null;
  arr.map(function(el){
   
    let div1=document.createElement("div")
    div1.setAttribute("class","div1")
    let img=document.createElement("img")
    let brand=document.createElement("h3")
  
  
    let type=document.createElement("p")
    let price=document.createElement("p")
    let MP=document.createElement("s")
    let off=document.createElement("p")
  
  
    div1.id="inner_div"
    img.src=el.image;
    img.id="img1"
  
    //  img.addEventListener("click",function(){

    //     addToCart(el)

    //  })
  
  
    
    brand.innerText=el.brand;
    brand.id="brand1"
  
   
    type.innerText=el.type;
    type.id="type1"
     // box
     let box = document.createElement("div")
    let div2=document.createElement("div")
    div2.id="div_2"
    let div3=document.createElement("div")
    div3.id="div_3"
    price.innerText=`Rs. ${el.price}`;
    price.id="price1"
    MP.innerText=el.MP;
    MP.id="mp1"
    off.innerText= `${el.offer}% OFF`;
    off.id="off1"
  
  
    box.append(brand,type)
    div3.append(price,MP,off)
    div2.append(div3)
    div1.append(img,box,div2)
  
    append_data.append(div1)
  
  
  
    div1.addEventListener("mouseover",function(event){
         let   hoverDiv = document.createElement("div")
         hoverDiv.setAttribute("class","hoverDiv")
         hoverDiv.addEventListener("click",function(){
           wishlistSend(el)
         })
                  brand.innerHTML =  `<i class="fa-solid fa-heart"></i> whishlist `; 
      
                  brand.setAttribute("class","brand1")
                    type.innerText = "size: 28 30 32 34 36"
                  hoverDiv.append(brand,type)
                  box.append(hoverDiv)
              })
           
              div1.addEventListener("mouseout",function(event){
                 
              //    itag.src = "image"
                  brand.innerText =  el.brand;
                  type.innerText  = el.type;
               
                  brand.setAttribute("class","brand2")
      
              })
                  
  
  
  
  
    // console.log("inside")
  
  })
  

}// fun end


/// add to cart function 
let cartArr = JSON.parse(localStorage.getItem("cartGo"))||[]
function addToCart(el){
// cartArr = []  
cartArr.push(el)
console.log("insideCArt")
 
  localStorage.setItem("cartGo",JSON.stringify(cartArr))
document.getElementById("count_cart").innerHTML = cartArr.length;
}


////

let wishlistArr = JSON.parse(localStorage.getItem("wishlistGo"))||[]

function wishlistSend(el){
//  let mensArrToCart = []  
// wishlistArr = []
wishlistArr.push(el)
console.log("insideWishList")
 
  localStorage.setItem("wishlistGo",JSON.stringify( wishlistArr))
 console.log(wishlistArr.length,"wishlit counter")

 document.getElementById("count_wish").innerHTML = wishlistArr.length
}




/////  array key name same dalna he 


// filter 
let filter = document.querySelector(".check_box");

filter.addEventListener("click",filterFun)

document.getElementById("Highlander").addEventListener("click", function(){
  // console.log("click")
  highlanderSort(SmartWearables1)
})

function highlanderSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.brand == "HIGHLANDER"){
      console.log("highlinder")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}


document.getElementById("ether").addEventListener("click", function(){
  console.log("click")
 etherSort(SmartWearables1)
})

function etherSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.brand == "ether"){
      console.log("ether")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}



document.getElementById("U.S Polo Assn").addEventListener("click", function(){
  console.log("click")
 USSort(SmartWearables1)
})

function USSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.brand == "U.S Polo Assn"){
      console.log("U.S Polo Assn")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}



// arr.length ;






function filterFun(){
     let appendarr=[]
  for(let i = 0; i<SmartWearables1.length ;i++){

    if(SmartWearables1[i].brand == "Roadster"){
       appendarr.push(SmartWearables1[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // SmartWearables1.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(SmartWearables1)
})

function blueSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "blue"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}


document.getElementById("white").addEventListener("click", function(){
  console.log("click")
 whiteSort(SmartWearables1)
})

function whiteSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "white"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}


document.getElementById("black").addEventListener("click", function(){
  console.log("click")
 blackSort(SmartWearables1)
})

function blackSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "black"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}


document.getElementById("green").addEventListener("click", function(){
  console.log("click")
 greenSort(SmartWearables1)
})

function greenSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "green"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}


document.getElementById("grey").addEventListener("click", function(){
  console.log("click")
 greySort(SmartWearables1)
})

function greySort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "gray"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}

document.getElementById("red").addEventListener("click", function(){
  console.log("click")
 redSort(SmartWearables1)
})

function redSort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(elem.color == "red"){
      console.log("blue")
      return elem
     
    }

  });
  console.log(sortedData)
  mensData(sortedData)
}

document.getElementById("279").addEventListener("click", function(){
  console.log("click")
  p1Sort(SmartWearables1)
})

function p1Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.price) >= 279&& Number(elem.price) <= 499){
      console.log("blue")
      return elem
     
    }

  });
  let sortedOrder = sortedData.sort(function(a,b){
    return a.price - b.price;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}


document.getElementById("479").addEventListener("click", function(){
  console.log("click")
  p2Sort(SmartWearables1)
})

function p2Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.price) >= 479&& Number(elem.price) <= 799){
      console.log("blue")
      return elem
     
    }

  });
  let sortedOrder = sortedData.sort(function(a,b){
    return a.price - b.price;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}



document.getElementById("579").addEventListener("click", function(){
  console.log("click")
  p3Sort(SmartWearables1)
})

function p3Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.price) >= 579&& Number(elem.price) <= 999){
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.price - b.price;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}


document.getElementById("10").addEventListener("click", function(){
  console.log("click")
  off1Sort(SmartWearables1)
})

function off1Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.offer) >= 10) {
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.offer - b.offer;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}



document.getElementById("20").addEventListener("click", function(){
  console.log("click")
  off2Sort(SmartWearables1)
})

function off2Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.offer) >= 20) {
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.offer - b.offer;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}


document.getElementById("30").addEventListener("click", function(){
  console.log("click")
  off3Sort(SmartWearables1)
})

function off3Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.offer) >= 30) {
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.offer - b.offer;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}


document.getElementById("40").addEventListener("click", function(){
  console.log("click")
  off4Sort(SmartWearables1)
})

function off4Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.offer) >= 40) {
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.offer - b.offer;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}


document.getElementById("50").addEventListener("click", function(){
  console.log("click")
  off5Sort(SmartWearables1)
})

function off5Sort(SmartWearables1){
  
  let sortedData = SmartWearables1.filter(function(elem) {
    if(Number(elem.offer) >= 50) {
      console.log("blue")
      return elem
     
    }

  });

  
  let sortedOrder = sortedData.sort(function(a,b){
    return a.offer - b.offer;
  })
  console.log(sortedOrder)
  mensData(sortedOrder)
}