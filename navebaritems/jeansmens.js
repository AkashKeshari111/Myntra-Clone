import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


 
let jeansArr = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7786833/2019/9/25/55914283-1977-4328-9677-023537820a8b1569399773519-LOCOMOTIVE-Men-Grey-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-1.jpg",
    "brand": "LOCOMOTIVE",
    "type": "Men Slim Fit Jeans",
    "price": "1074",
    "MP": "2499",
    "offer": 57
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7243639/2022/4/19/868d6eee-0649-44e4-b17b-2aa3e3b0fc9c1650366028127RoadsterMenBlackSlimFitMid-RiseCleanLookJeans1.jpg",
    "brand": "Roadster",
    "type": "Men Slim Fit Jeans",
    "price": "679",
    "MP": "1699",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8706061/2019/4/2/e5a76652-ca96-47de-a7f4-ca92dc2483581554196084705-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchabl-1.jpg",
    "brand": "HIGHLANDER",
    "type": "Men Slim Fit Jeans",
    "price": "688",
    "MP": "1299",
    "offer": 47
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10187401/2019/9/6/4d898c8c-ed5a-4e03-8618-1e60af1a261d1567759098279-WROGN-Men-Jeans-1021567759096713-1.jpg",
    "brand": "WROGN",
    "type": "Men Slim Fit Jeans",
    "price": "1299",
    "MP": "2599",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7678836/2018/12/17/04fceac4-8e1b-4982-ba58-00485243a3481545031068966-Roadster-Men-Jeans-841545031064917-1.jpg",
    "brand": "Roadster",
    "type": "Men Skinny Fit Jeans",
    "price": "764",
    "MP": "1699",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5669588/2018/6/12/0dcec4bb-3be9-4c67-9d9a-ecdcc937f98d1528807434080-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-4491528807433906-1.jpg",
    "brand": "Roadster",
    "type": "Men Skinny Fit Jeans",
    "price": "934",
    "MP": "1699",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10885024/2019/11/13/adb31de4-d904-42f0-b754-456351b9e5b91573647637113-IVOC-Mens-Denim-Joggers-8411573647633226-1.jpg",
    "brand": "IVOC",
    "type": "Men Jogger Jeans",
    "price": "834",
    "MP": "1799",
    "offer": 965
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6544937/2018/7/11/867f2bfa-64f5-4c29-afa0-eed584bddb751531295865569-Roadster-Men-Jeans-7681531295865401-1.jpg",
    "brand": "Roadster",
    "type": "Men Skinny Fit Jeans",
    "price": "799",
    "MP": "1999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8673413/2019/3/14/4c4ba5c0-e87a-430e-a267-f48f20a703621552564719527-WROGN-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-J-1.jpg",
    "brand": "WROGN",
    "type": "Men Skinny Fit Jeans",
    "price": "1559",
    "MP": "2599",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12560198/2020/11/27/06786031-de7d-4adb-a02e-a00f1b4988e31606477259949-HERENOW-Men-Jeans-4651606477258027-1.jpg",
    "brand": "HERE&NOW",
    "type": "Men Slim Fit Jeans",
    "price": "599",
    "MP": "1999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2428491/2018/2/1/11517477484451-HERENOW-Men-Jeans-141517477484325-1.jpg",
    "brand": "HERE&NOW",
    "type": "Men Cropped TMPered Fit Jeans",
    "price": "749",
    "MP": "2499",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2150846/2017/10/19/11508406968179-HERENOW-Men-Blue-Slim-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-7261508406968007-1.jpg",
    "brand": "HERE&NOW",
    "type": "Men Slim Fit Jeans",
    "price": "779",
    "MP": "2599",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13823708/2022/4/26/ac356453-1770-442b-83d5-734f86645e2f1650961872384-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
    "brand": "Urbano Fashion",
    "type": "Men Slim Fit Jeans",
    "price": "755",
    "MP": "1399",
    "offer": 46
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
    "brand": "WROGN",
    "type": "Men Slim Fit Jeans",
    "price": "1439",
    "MP": "2399",
    "offer": 40
  },
  
]


  
mensData(jeansArr)




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
  
   
  let sort1 =   jeansArr.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   jeansArr.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   jeansArr.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   jeansArr.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   jeansArr.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   jeansArr.sort(function(a,b){
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
  highlanderSort(jeansArr)
})

function highlanderSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 etherSort(jeansArr)
})

function etherSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 USSort(jeansArr)
})

function USSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  for(let i = 0; i<jeansArr.length ;i++){

    if(jeansArr[i].brand == "Roadster"){
       appendarr.push(jeansArr[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // jeansArr.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(jeansArr)
})

function blueSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 whiteSort(jeansArr)
})

function whiteSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 blackSort(jeansArr)
})

function blackSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 greenSort(jeansArr)
})

function greenSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 greySort(jeansArr)
})

function greySort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
 redSort(jeansArr)
})

function redSort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  p1Sort(jeansArr)
})

function p1Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  p2Sort(jeansArr)
})

function p2Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  p3Sort(jeansArr)
})

function p3Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  off1Sort(jeansArr)
})

function off1Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  off2Sort(jeansArr)
})

function off2Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  off3Sort(jeansArr)
})

function off3Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  off4Sort(jeansArr)
})

function off4Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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
  off5Sort(jeansArr)
})

function off5Sort(jeansArr){
  
  let sortedData = jeansArr.filter(function(elem) {
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