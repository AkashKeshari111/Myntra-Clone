import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let SportsShoesArr = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8058351/2022/1/4/5c0a11c6-3193-43d1-99ad-067b264b8cf61641295613595-HRX-by-Hrithik-Roshan-Men-Black-Urban-Outdoor-Running-Shoe-4-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Men Urban Outdoor Running Shoe",
    "price": "3024",
    "MP": "5499",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15226458/2021/8/23/abda7767-9bdb-48cb-90c8-026efaeabffc1629721241687SportsShoes1.jpg",
    "brand": "Puma",
    "type": "Men Anzarun Lite V3 IDP Run",
    "price": "2449",
    "MP": "3499",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13483748/2022/3/24/a5439bbb-226b-4104-bbd2-64d3d9998d6b1648107968374PumaMenWhiteCELLVALIANTSLRunningShoes1.jpg",
    "brand": "Puma",
    "type": "Men CELL VALIANT SL Shoes",
    "price": "4549",
    "MP": "6999",
    "offer": 35
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14824822/2021/8/23/4c997245-e8d5-4e56-8a91-9096693d80131629712617426-Puma-Men-Sports-Shoes-521629712616966-1.jpg",
    "brand": "Puma",
    "type": "Men Jamming 2.0 Running Shoes",
    "price": "11049",
    "MP": "12999",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703466/2018/6/11/93a747f9-54da-4f47-97db-a812de6702251528698311878-Running-1351528698311718-1.jpg",
    "brand": "Puma",
    "type": "Men Running Shoes",
    "price": "3574",
    "MP": "5499",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11938692/2020/6/15/8e39d227-b791-4d60-8442-be820bcc0dcf1592217999977Pumagrey1.jpg",
    "brand": "Puma",
    "type": "Men Running Shoes",
    "price": "2399",
    "MP": "3999",
    "offer": 40
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14521968/2021/12/24/3a3cc02d-17bc-4423-8fc2-342a1b00d1df1640343251519-Puma-Men-Black-Mesh-Running-Shoes-1071640343251207-1.jpg",
    "brand": "Puma",
    "type": "Eternity Nitro Running Shoes",
    "price": "11049",
    "MP": "12999",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703405/2018/7/3/6ae532e9-9419-4342-96f6-37f0f047ffb61530620273965-Puma-Men-Black-Viz-Runner-Running-Shoes-821530620273760-1.jpg",
    "brand": "Puma",
    "type": "Men Viz Running Shoes",
    "price": "3574",
    "MP": "5499",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14367616/2021/8/12/07269c5b-cd27-4716-9709-583e7eac513d1628768262239-US-Polo-Assn-Men-White-LEBRON-20-Walking-Shoes-3021628768261-1.jpg",
    "brand": "U.S. Polo Assn.",
    "type": "Men LEBRON 2.0 Walking Shoes",
    "price": "2399",
    "MP": "3999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/30/7426c955-48fd-48c1-994b-c2221f40f39a1617090592324-1.jpg",
    "brand": "Domyos By Decathlon",
    "type": "Men Training & Gym Shoes",
    "price": "2279",
    "MP": "3999",
    "offer": 43
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/14/860b14a7-5bcf-4d09-920d-91e2e9bebfa21602633763764-1.jpg",
    "brand": "Woakers",
    "type": "Men Running Shoes",
    "price": "681",
    "MP": "3405",
    "offer": 80
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/8/5f287707-5817-4322-85ab-ce1d8b4d424c1602114254212-1.jpg",
    "brand": "Puma",
    "type": "Men Minima Running Shoes",
    "price": "3249",
    "MP": "6499",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12282146/2020/11/9/2f878da8-b88c-4bbd-997c-8a39e0f33e5b1604905105117-Puma-Men-Sports-Shoes-4491604905103244-1.jpg",
    "brand": "Puma",
    "type": "Men Runner IDP Running Shoes",
    "price": "2799",
    "MP": "3999",
    "offer": 30
  },

]

mensData(SportsShoesArr)




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
  
   
  let sort1 =   SportsShoesArr.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   SportsShoesArr.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   SportsShoesArr.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   SportsShoesArr.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   SportsShoesArr.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   SportsShoesArr.sort(function(a,b){
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
  highlanderSort(SportsShoesArr)
})

function highlanderSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 etherSort(SportsShoesArr)
})

function etherSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 USSort(SportsShoesArr)
})

function USSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  for(let i = 0; i<SportsShoesArr.length ;i++){

    if(SportsShoesArr[i].brand == "Roadster"){
       appendarr.push(SportsShoesArr[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // SportsShoesArr.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(SportsShoesArr)
})

function blueSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 whiteSort(SportsShoesArr)
})

function whiteSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 blackSort(SportsShoesArr)
})

function blackSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 greenSort(SportsShoesArr)
})

function greenSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 greySort(SportsShoesArr)
})

function greySort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
 redSort(SportsShoesArr)
})

function redSort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  p1Sort(SportsShoesArr)
})

function p1Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  p2Sort(SportsShoesArr)
})

function p2Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  p3Sort(SportsShoesArr)
})

function p3Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  off1Sort(SportsShoesArr)
})

function off1Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  off2Sort(SportsShoesArr)
})

function off2Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  off3Sort(SportsShoesArr)
})

function off3Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  off4Sort(SportsShoesArr)
})

function off4Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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
  off5Sort(SportsShoesArr)
})

function off5Sort(SportsShoesArr){
  
  let sortedData = SportsShoesArr.filter(function(elem) {
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