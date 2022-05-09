import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let casualShoesArr = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756898/2021/12/14/066bfe87-ef05-4cc9-8769-cee2a63b50b91639473787244RoadsterMenWhiteSolidSneakers1.jpg",
    "brand": "Roadster",
    "type": "Men Solid Sneakers",
    "price": "2899",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12068002/2021/8/5/0a5fec8d-e917-4e8f-9b71-0288a26be52e1628146013628HIGHLANDERMenWhiteSneakers1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Solid Sneakers",
    "price": "995",
    "MP": "1990",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11945014/2021/5/17/b214346d-8a65-4a91-b2e3-bf8f632db13f1621223871248-Provogue-Men-Blue-Loafers-5161621223871159-6.jpg",
    "brand": "Provogue",
    "type": "Men Solid Loafers",
    "price": "849",
    "MP": "4245",
    "offer": 80
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756892/2021/12/14/e141e830-7352-4e67-a119-e6e8da1682fd1639478472050-Roadster-Men-Grey-Solid-Suede-Finish-Sneakers-75316394784715-1.jpg",
    "brand": "Roadster",
    "type": "Men Suede Finish Sneakers",
    "price": "2999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16016368/2021/11/5/a865e870-1060-4c73-b7fa-0f54a17d834b1636111288189MactreeMenWhiteColourblockedPUSneakers6.jpg",
    "brand": "Mactree",
    "type": "Men Colourblocked PU Sneakers",
    "price": "744",
    "MP": "3720",
    "offer": 80
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/8/14/cd6632e5-a2c6-4ec2-a3d8-9a6a6c59e0f51565782726402-1.jpg",
    "brand": "H&M",
    "type": "Men Trainers",
    "price": "1999",
    "MP": null,
    "offer": null
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067992/2021/2/22/090fc394-cf26-43b7-807d-134ca7c68b911613970123853-HIGHLANDER-Men-White-Sneakers-5371613970122157-6.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Solid Sneakers",
    "price": "995",
    "MP": "1990",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Solid Sneakers",
    "price": "995",
    "MP": "1990",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15839406/2021/11/12/54e4c724-80c7-45f9-aa32-167ffa9623741636705114683-US-Polo-Assn-Men-Casual-Shoes-2501636705113615-1.jpg",
    "brand": "U.S. Polo Assn.",
    "type": "Men Solid Slip-On Sneakers",
    "price": "1949",
    "MP": "2599",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15630218/2021/9/29/bda9fe48-193c-4a64-8e2a-a8e60bd6e2d61632884288144Trainers1.jpg",
    "brand": "H&M",
    "type": "Men Trainers",
    "price": "1999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11497178/2020/2/24/717b8fd1-c6f0-4db9-8021-7f3e0201103e1582535122670-US-Polo-Assn-Men-White-Sneakers-9531582535121583-1.jpg",
    "brand": "U.S. Polo Assn.",
    "type": "Men Sneakers",
    "price": "3999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067984/2021/2/2/0425f19a-852a-45e6-a1f6-7c80526a158f1612240158034-HIGHLANDER-Men-White-Sneakers-2351612240156845-6.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Solid Sneakers",
    "price": "995",
    "MP": "1990",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9785479/2021/2/17/9b109c7d-39f4-499c-9900-8e2e394cf75d1613525159914LOCOMOTIVEMenWhiteSneakers1.jpg",
    "brand": "LOCOMOTIVE",
    "type": "Men Sneakers",
    "price": "895",
    "MP": "995",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11097166/2019/12/10/cb47b7dc-e28a-4559-8388-8b82762b27681575980908117-HIGHLANDER-Men-White-Sneakers-661575980906633-1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Sneakers",
    "price": "995",
    "MP": "1990",
    "offer": 50
  },

]



mensData(casualShoesArr)



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
  
   
  let sort1 =   casualShoesArr.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   casualShoesArr.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   casualShoesArr.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   casualShoesArr.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   casualShoesArr.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   casualShoesArr.sort(function(a,b){
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
  highlanderSort(casualShoesArr)
})

function highlanderSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 etherSort(casualShoesArr)
})

function etherSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 USSort(casualShoesArr)
})

function USSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  for(let i = 0; i<casualShoesArr.length ;i++){

    if(casualShoesArr[i].brand == "Roadster"){
       appendarr.push(casualShoesArr[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // casualShoesArr.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(casualShoesArr)
})

function blueSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 whiteSort(casualShoesArr)
})

function whiteSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 blackSort(casualShoesArr)
})

function blackSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 greenSort(casualShoesArr)
})

function greenSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 greySort(casualShoesArr)
})

function greySort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
 redSort(casualShoesArr)
})

function redSort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  p1Sort(casualShoesArr)
})

function p1Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  p2Sort(casualShoesArr)
})

function p2Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  p3Sort(casualShoesArr)
})

function p3Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  off1Sort(casualShoesArr)
})

function off1Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  off2Sort(casualShoesArr)
})

function off2Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  off3Sort(casualShoesArr)
})

function off3Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  off4Sort(casualShoesArr)
})

function off4Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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
  off5Sort(casualShoesArr)
})

function off5Sort(casualShoesArr){
  
  let sortedData = casualShoesArr.filter(function(elem) {
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