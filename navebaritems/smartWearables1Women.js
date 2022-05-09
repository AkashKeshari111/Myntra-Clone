import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let SmartWearables1 = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14923600/2021/7/24/0ee445ce-82e0-4ce5-996d-3bc060141a0d1627105195230FitbitLuxeBlackGraphiteStainlessSteel1.jpg",
    "brand": "Fitbit",
    "type": "Solid luxe Bracelet Style Fitness Band",
    "price": "10599",
    "MP": "10999",
    "offer": 400
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13066978/2020/11/24/bbff3258-163d-475a-9088-7842bb6f03741606198368935-GOQii-Vital-30-body-temperature-tracker-with-3-months-person-1.jpg",
    "brand": "GOQii",
    "type": "Vital 3.0 Smart Fitness Band",
    "price": "1499",
    "MP": "3999",
    "offer": 2500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15031916/2021/8/5/fd5af935-0323-4aa9-9e5d-cf79eaf70c671628138506158FitbitLuxeOrchidPlatinumStainlessSteel1.jpg",
    "brand": "Fitbit",
    "type": "Solid Luxe Fitness Band",
    "price": "10699",
    "MP": "10999",
    "offer": 300
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15951116/2021/10/30/936f33a3-a60e-4327-a469-d0cd025634a61635579842434FitbitUnisexWhiteSolidFitnessBand1.jpg",
    "brand": "Fitbit",
    "type": "Unisex Solid Fitness Band",
    "price": "13999",
    "MP": "14999",
    "offer": 1000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15951114/2021/10/30/b5a4e8f4-8bf1-4c18-9146-f242f59c59f71635579842597FitbitUnisexBlackSolidFitnessBand1.jpg",
    "brand": "Fitbit",
    "type": "Unisex Solid Fitness Band",
    "price": "13999",
    "MP": "14999",
    "offer": 1000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/12/fa1b1b9b-b9ac-4c0c-816c-02d45fa7447c1613125433526-1.jpg",
    "brand": "Fitbit",
    "type": "Unisex Inspire 2 Fitness Band",
    "price": "6999",
    "MP": "7999",
    "offer": 1000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14937414/2021/9/17/cf4054e8-ac07-4c8c-9b07-15fada3f97f11631859866205-NOISE-Blue-Zest-5W-Bluetooth-Wireless-Speaker-94216318598656-1.jpg",
    "brand": "NOISE",
    "type": "Zest 5 W Bluetooth Speaker",
    "price": "1299",
    "MP": "2999",
    "offer": 1700
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484430/2021/9/21/08b0bf70-7ac0-408e-bf78-4554a454ddd01632211185823-realme-Green-Buds-Wireless-2-Neo-Bluetooth-Headphones-780163-1.jpg",
    "brand": "Realme",
    "type": "Buds Wireless 2 Neo Headphones",
    "price": "1199",
    "MP": "2499",
    "offer": 1300
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15018198/2021/8/5/02cd2b4e-3b3e-4eef-9224-2f40e81155501628187915241SWADESISTUFFUnisexBlackDialBlackStrapsDigitalAutomaticWatch1.jpg",
    "brand": "SWADESI STUFF",
    "type": "Unisex Automatic Watch",
    "price": "499",
    "MP": "2495",
    "offer": 80
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11888908/2020/6/1/c1f77b16-cdc3-4442-b4b8-dfafd76af3471591001971457-boAt-Rockerz-560-Over-Ear-Wireless-Headphone-with-Immersive--1.jpg",
    "brand": "boAt",
    "type": "Rockerz 560 Wireless Headphone",
    "price": "1699",
    "MP": "3990",
    "offer": 2291
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13960824/2021/3/29/49126165-26c5-49b8-b062-f23e8fc3df731616996931978-Realme-Yellow--Black-Buds-Wireless-Pro-with-ANC-RMA208-23161-1.jpg",
    "brand": "Realme",
    "type": "Buds Wireless Pro with ANC",
    "price": "3499",
    "MP": "5999",
    "offer": 2500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15484432/2021/9/21/ccddbedc-1ff2-4378-9789-ed129560db251632211239810-realme-Black-Buds-Wireless-2-Neo-Bluetooth-Headphones-651632-1.jpg",
    "brand": "Realme",
    "type": "Buds Wireless 2 Neo Headphones",
    "price": "1199",
    "MP": "2499",
    "offer": 1300
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14937418/2021/9/17/29071f5a-160a-4891-893e-e6fb25cb53451631859871429-NOISE-Black-Solid-Zest-5W-Bluetooth-Wireless-Speaker-2251631-1.jpg",
    "brand": "NOISE",
    "type": "Zest 5W Bluetooth Speaker",
    "price": "1299",
    "MP": "2999",
    "offer": 1700
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13874858/2021/6/17/27bcdfbf-0be3-4039-a804-af27db32d5da1623885677027-UNIGEN-AUDIO-Unisex-White-Solid-True-Wireless-Earbuds-414162-1.jpg",
    "brand": "UNIGEN AUDIO",
    "type": "Unisex Solid True Wireless Earbuds",
    "price": "999",
    "MP": "2999",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13862504/2022/4/13/59956070-4528-407d-a056-67496af639001649838579725-BOULT-AUDIO-AirBass-Combuds-True-Wireless-Bluetooth-Headset--1.jpg",
    "brand": "BOULT AUDIO",
    "type": "Combuds True Wireless - Black",
    "price": "1299",
    "MP": "4999",
    "offer": 3700
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15037938/2021/8/5/dc420055-374d-4ee4-a88a-0e7b8c68ca561628154389419AISLINMetalPadRim-LessUnisexRoundSunglasses1.jpg",
    "brand": "AISLIN",
    "type": "Unisex Black Round Sunglasses",
    "price": "545",
    "MP": "1525",
    "offer": 980
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11888906/2021/9/30/1948e33e-94f1-4ccc-911d-ad60af338c671632978546421-boAt-Rockerz--450-M-Hazel-Beige-Wireless-Headphone-with-Imme-1.jpg",
    "brand": "boAt",
    "type": "Rockerz 450 Headphones",
    "price": "1499",
    "MP": "3990",
    "offer": 2491
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14544990/2021/6/24/2423f42c-0267-41a0-a817-7e6d5cedc2ba1624537437065CortinaBluePrintedProtectiveLuggageCover1.jpg",
    "brand": "Cortina",
    "type": "Protective Luggage Cover",
    "price": "899",
    "MP": "1898",
    "offer": 999
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15542098/2021/9/22/7dcc4012-cd33-474f-a18e-4f67a86cf6411632287663466-Realme-Unisex-Speakers-311632287663236-1.jpg",
    "brand": "Realme",
    "type": "Cobble 5W Bluetooth Speaker",
    "price": "1299",
    "MP": "2499",
    "offer": 1200
  }
]

mensData(SmartWearables1)




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