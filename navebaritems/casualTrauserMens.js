import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()



let casualTrauserARR = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/12/b58188ba-77dd-4fc7-bd86-c8cad24a4da91605128902262-1.jpg",
    "brand": "Quechua By Decathlon",
    "type": "Men Trousers",
    "price": "1699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13159756/2021/10/28/bba53106-be0b-4a56-9c54-938c050f1e681635397565779-HERENOW-Men-Khaki-Slim-Fit-Joggers-Trousers-6931635397565058-1.jpg",
    "brand": "HERE&NOW",
    "type": "Men Printed Jogger Trousers",
    "price": "1139",
    "MP": "3799",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/824792dc-9629-4d46-80cc-6f8995d7ef571610360852562-1.jpg",
    "brand": "Breakbounce",
    "type": "Men Slim Fit Joggers",
    "price": "1034",
    "MP": "2299",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8209403/2019/8/22/691ae9ad-4342-4dd6-ae59-03601a27eafd1566479499415-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Cargos-4361566479497959-1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Slim Fit Cargos",
    "price": "924",
    "MP": "1849",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389026/2018/2/13/11518499099305-Hubberholme-Men-Beige-Slim-Fit-Solid-Cargos-5611518499099225-1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos",
    "price": "989",
    "MP": "1499",
    "offer": 34
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2343636/2018/4/3/11522753442408-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Joggers-5881522753442218-1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Slim Fit Joggers",
    "price": "873",
    "MP": "1649",
    "offer": 47
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389024/2018/2/13/11518499083955-Hubberholme-Men-Blue-Slim-Fit-Solid-Cargos-3051518499083872-1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos",
    "price": "914",
    "MP": "1499",
    "offer": 39
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15923976/2021/10/26/e0d19c60-d23b-4570-b542-71206c9f116c1635231969002HIGHLANDERMenBlueSlimFitCargosTrousers1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Slim Fit Jogger Cargos",
    "price": "1085",
    "MP": "2049",
    "offer": 47
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13737006/2021/3/2/b337be4f-8f03-43a3-b893-845e9c5de9651614681709969-Hubberholme-Men-Trousers-991614681708306-1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos Pants",
    "price": "929",
    "MP": "1499",
    "offer": 38
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11761660/2022/4/7/9adffe9c-cd64-4ae8-9ad4-6f5c6c4d1b211649328829260HubberholmeMenBrownSlimFitSolidCargos1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos",
    "price": "989",
    "MP": "1499",
    "offer": 34
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15193444/2021/8/19/2b5c68a8-6081-4f20-b33c-96d80c6b97a91629350010636Cargojoggers1.jpg",
    "brand": "H&M",
    "type": "Men Cargo Joggers",
    "price": "2699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/9/07d57b24-1ea2-40b5-bbcb-3b6ecc40cfe31617971753593-1.jpg",
    "brand": "Pepe Jeans",
    "type": "Men Regular Fit Cargos",
    "price": "1799",
    "MP": "2999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389029/2018/2/13/11518499123014-Hubberholme-Men-Brown-Slim-Fit-Solid-Cargos-441518499122964-1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos",
    "price": "989",
    "MP": "1499",
    "offer": 34
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389028/2018/2/13/11518499115458-Hubberholme-Men-Navy-Blue-Slim-Fit-Solid-Cargos-9761518499115386-1.jpg",
    "brand": "Hubberholme",
    "type": "Men Slim Fit Cargos",
    "price": "914",
    "MP": "1499",
    "offer": 39
  },
  
]



mensData(casualTrauserARR)



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
  
   
  let sort1 =   casualTrauserARR.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   casualTrauserARR.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   casualTrauserARR.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   casualTrauserARR.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   casualTrauserARR.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   casualTrauserARR.sort(function(a,b){
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
  highlanderSort(casualTrauserARR)
})

function highlanderSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 etherSort(casualTrauserARR)
})

function etherSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 USSort(casualTrauserARR)
})

function USSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  for(let i = 0; i<casualTrauserARR.length ;i++){

    if(casualTrauserARR[i].brand == "Roadster"){
       appendarr.push(casualTrauserARR[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // casualTrauserARR.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(casualTrauserARR)
})

function blueSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 whiteSort(casualTrauserARR)
})

function whiteSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 blackSort(casualTrauserARR)
})

function blackSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 greenSort(casualTrauserARR)
})

function greenSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 greySort(casualTrauserARR)
})

function greySort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
 redSort(casualTrauserARR)
})

function redSort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  p1Sort(casualTrauserARR)
})

function p1Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  p2Sort(casualTrauserARR)
})

function p2Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  p3Sort(casualTrauserARR)
})

function p3Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  off1Sort(casualTrauserARR)
})

function off1Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  off2Sort(casualTrauserARR)
})

function off2Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  off3Sort(casualTrauserARR)
})

function off3Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  off4Sort(casualTrauserARR)
})

function off4Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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
  off5Sort(casualTrauserARR)
})

function off5Sort(casualTrauserARR){
  
  let sortedData = casualTrauserARR.filter(function(elem) {
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