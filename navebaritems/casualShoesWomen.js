import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let CasualShoes = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11264120/2022/1/11/ed69bd6b-242b-4c1e-8f86-6579c61106bb1641886437380-DressBerry-Women-White-Solid-Sneakers-1801641886437116-1.jpg",
    "brand": "DressBerry",
    "type": "Women Solid Sneakers",
    "price": "1594",
    "MP": "2899",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13381274/2021/1/11/4fa3094c-851d-45a5-9452-1076a6b54cb41610355713577-Ginger-by-Lifestyle-Women-White-Driving-Shoes-10916103557123-1.jpg",
    "brand": "Ginger by Lifestyle",
    "type": "Women Solid Driving Shoes",
    "price": "1709",
    "MP": "2999",
    "offer": 43
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396059/2019/10/22/c0797cc9-3f91-4242-9ad4-49d5a4e78d431571734906586-Kook-N-Keech-Women-White-Sneakers-1691571734904452-1.jpg",
    "brand": "Kook N Keech",
    "type": "Women Sneakers",
    "price": "869",
    "MP": "2899",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2450219/2018/7/18/98de6ce2-0874-4c3a-841a-3ba96c4cbf721531907093943-ether-Women-Casual-Shoes-811531907093591-1.jpg",
    "brand": "ether",
    "type": "Women Sneakers",
    "price": "1149",
    "MP": "2299",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4879974/2018/7/3/c79e0284-5ede-43d2-88f0-b63efc3e52841530608539857-Kook-N-Keech-Women-Casual-Shoes-3331530608539751-1.jpg",
    "brand": "Kook N Keech",
    "type": "Women Sneakers",
    "price": "1034",
    "MP": "2299",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7240622/2021/12/28/41a2286d-5fe5-4c9e-be9d-c75e56e40b921640692050659ShoetopiaWomenWhiteSneakers1.jpg",
    "brand": "Shoetopia",
    "type": "Women Sneakers",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396065/2019/10/24/2e1d2398-3e5b-45fe-bb6b-513dfb72bebc1571895106224-Kook-N-Keech-Women-White-Sneakers-7161571895104684-1.jpg",
    "brand": "Kook N Keech",
    "type": "Women Sneakers",
    "price": "1449",
    "MP": "2899",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4879970/2018/7/3/6fdbdb21-2433-4914-9f51-015f4ae493dd1530610259796-Mast--Harbour-Women-White-Sneakers-7891530610259640-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Women Sneakers",
    "price": "2299",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15011436/2021/10/13/f292cd15-2f0e-4661-9e74-7db076c97a881634110701671-Kook-N-Keech-Women-Casual-Shoes-3021634110701372-1.jpg",
    "brand": "Kook N Keech",
    "type": "Women Solid Sneakers",
    "price": "1379",
    "MP": "2299",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2454497/2018/3/19/11521443411300-Puma-Women-White-Sneakers-8601521443411261-1.jpg",
    "brand": "Puma",
    "type": "Women Smash V2 L Sneakers",
    "price": "2974",
    "MP": "3499",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15357682/2021/11/12/97213365-cd54-4642-91d6-20f2267de3791636699708595-Mast--Harbour-Women-Casual-Shoes-5071636699708293-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Women Solid Sneakers",
    "price": "1149",
    "MP": "2299",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8396071/2019/5/22/b9480b19-9c01-464f-951d-6117011588ba1558517020340-Mast--Harbour-Women-Casual-Shoes-5881558517019407-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Women Sneakers",
    "price": "1484",
    "MP": "2699",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11261274/2020/11/27/d1920f0e-87dc-4ae2-9483-7a2ee6d65c771606474166664HRXbyHrithikRoshanWomenWhiteAthleisureShoe1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Woven Design Sneakers",
    "price": "1599",
    "MP": "3999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13381270/2021/5/13/86ade4af-8122-4292-afb6-6fcf0c159a391620893603133-Ginger-by-Lifestyle-Women-White-Sneakers-1151620893602689-1.jpg",
    "brand": "Ginger by Lifestyle",
    "type": "Women Colourblocked PU Sneakers",
    "price": "1499",
    "MP": "2499",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15216664/2021/8/21/2ad6947e-ea0c-4046-bae3-0fb142e43c511629533595171GingerbyLifestyleWomenWhiteColourblockedSneakers1.jpg",
    "brand": "Ginger by Lifestyle",
    "type": "Women Textured Sneakers",
    "price": "1499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15911844/2021/10/24/f63d731c-76a7-4e96-8a1e-b1482a11187f1635058247466PeopleWomenBlackTaperedFitSlashKneeJeans1.jpg",
    "brand": "People",
    "type": "Women Tapered Fit Jeans",
    "price": "1299",
    "MP": null,
    "offer": null
  },
 
]


mensData(CasualShoes)



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
  
   
  let sort1 =   CasualShoes.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   CasualShoes.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   CasualShoes.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   CasualShoes.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   CasualShoes.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   CasualShoes.sort(function(a,b){
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
  highlanderSort(CasualShoes)
})

function highlanderSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 etherSort(CasualShoes)
})

function etherSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 USSort(CasualShoes)
})

function USSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  for(let i = 0; i<CasualShoes.length ;i++){

    if(CasualShoes[i].brand == "Roadster"){
       appendarr.push(CasualShoes[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // CasualShoes.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(CasualShoes)
})

function blueSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 whiteSort(CasualShoes)
})

function whiteSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 blackSort(CasualShoes)
})

function blackSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 greenSort(CasualShoes)
})

function greenSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 greySort(CasualShoes)
})

function greySort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
 redSort(CasualShoes)
})

function redSort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  p1Sort(CasualShoes)
})

function p1Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  p2Sort(CasualShoes)
})

function p2Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  p3Sort(CasualShoes)
})

function p3Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  off1Sort(CasualShoes)
})

function off1Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  off2Sort(CasualShoes)
})

function off2Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  off3Sort(CasualShoes)
})

function off3Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  off4Sort(CasualShoes)
})

function off4Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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
  off5Sort(CasualShoes)
})

function off5Sort(CasualShoes){
  
  let sortedData = CasualShoes.filter(function(elem) {
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