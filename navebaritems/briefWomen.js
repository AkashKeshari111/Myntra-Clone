import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let  Brief = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917772/2021/10/28/6de2ffb2-a122-437e-867d-c9108f8a13011635422092997DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "472",
    "MP": "1049",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917676/2021/11/25/a1a6e85e-9965-47c7-8878-6d9dad08ac531637838400414-DressBerry-Women-Briefs-8211637838399919-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "419",
    "MP": "1049",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885220/2021/10/1/d39609be-c68b-4557-bfa3-0d6705525a751633088713162-Mast--Harbour-Women-Briefs-2981633088712228-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Women Pack of 3 Cotton Briefs",
    "price": "399",
    "MP": "999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917714/2021/10/28/defa7d86-275c-4be5-9e96-9ea1b00871661635421900169DressBerryWomenPackof3PureCottonSolidBriefsDB-SOLID-BIK-NEW-1.jpg",
    "brand": "DressBerry",
    "type": "Pack of 3 Pure Cotton Briefs",
    "price": "399",
    "MP": "999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917732/2021/11/2/7177a141-8af4-485a-984b-5839b80fafe41635843472185-DressBerry-Women-Pack-of-3-Pure-Cotton-Printed-Hipster-Brief-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Cotton Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917774/2021/11/2/a4822cf2-6fe9-4633-87b0-a08e2ca206c51635833693892DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917716/2021/11/17/c7a7869f-47f0-4222-a9b7-ba490535bcec1637141909116-DressBerry-Women-Pack-of-3-Pure-Cotton-Printed-Hipster-Brief-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Cotton Briefs",
    "price": "419",
    "MP": "1049",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917766/2021/11/30/5f6116b8-7bb9-4830-a79e-786e4b98c0801638263356374-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917640/2021/10/28/69799d85-3afc-4c69-b420-1de94e53ceed1635422132576DressBerryWomenPackof3PureCottonHipsterBriefsDB-PRT-BIK-NEW-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917756/2021/11/30/a5c093ca-7daf-4d23-809c-4e642a816cae1638253586094-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14620458/2021/10/28/4c0968f7-2feb-4106-9d45-8df87b5627181635422943829DressBerryWomenPackof3HipsterBriefs1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "249",
    "MP": "999",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885342/2021/10/1/12d31358-c6e9-48e2-a6eb-6c57f89528151633093550355-Roadster-Women-Briefs-2821633093548273-1.jpg",
    "brand": "Roadster",
    "type": "Pack of 3 Bikini Briefs",
    "price": "249",
    "MP": "999",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14885346/2021/10/4/62a9f6d8-4f08-4c14-801d-9f7f4ba3e12d1633335018822-Roadster-Women-Pack-of-3-Solid-Briefs-7641633335018306-1.jpg",
    "brand": "Roadster",
    "type": "Women Pack of 3 Solid Briefs",
    "price": "299",
    "MP": "999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917762/2021/11/30/34299509-9441-462b-946c-1e611a972fbe1638263599825-DressBerry-Women-Pack-of-3-Pure-Cotton-Hipster-Briefs-DB-PRT-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pack of 3 Hipster Briefs",
    "price": "419",
    "MP": "1049",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14917806/2021/11/2/8914415f-6b4c-44fd-b6a0-638de59b84791635834105138DressBerryPackof3PrintedCottonBikiniBriefsDB-PRT-BIK-NEW-0121.jpg",
    "brand": "DressBerry",
    "type": "Pack of 3 Cotton Bikini Briefs",
    "price": "314",
    "MP": "1049",
    "offer": 70
  }
]


mensData(Brief)



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
  
   
  let sort1 =   Brief.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Brief.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Brief.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Brief.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Brief.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Brief.sort(function(a,b){
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
  highlanderSort(Brief)
})

function highlanderSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 etherSort(Brief)
})

function etherSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 USSort(Brief)
})

function USSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  for(let i = 0; i<Brief.length ;i++){

    if(Brief[i].brand == "Roadster"){
       appendarr.push(Brief[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Brief.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Brief)
})

function blueSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 whiteSort(Brief)
})

function whiteSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 blackSort(Brief)
})

function blackSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 greenSort(Brief)
})

function greenSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 greySort(Brief)
})

function greySort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
 redSort(Brief)
})

function redSort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  p1Sort(Brief)
})

function p1Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  p2Sort(Brief)
})

function p2Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  p3Sort(Brief)
})

function p3Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  off1Sort(Brief)
})

function off1Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  off2Sort(Brief)
})

function off2Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  off3Sort(Brief)
})

function off3Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  off4Sort(Brief)
})

function off4Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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
  off5Sort(Brief)
})

function off5Sort(Brief){
  
  let sortedData = Brief.filter(function(elem) {
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