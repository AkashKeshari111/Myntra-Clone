import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Mattress = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/15/6d315a47-56d0-47f0-bdcb-058e5faa5d691623742292125-1.jpg",
    "brand": "Home Centre",
    "type": "Queen Size Mattress Topper",
    "price": "12999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/4/3d35a164-5695-4446-9e24-6d5ab05313161601760642275-1.jpg",
    "brand": "Rajasthan Decor",
    "type": "Double Bed Mattress Protector",
    "price": "1599",
    "MP": "4999",
    "offer": 68
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/5/dde97374-1adf-428f-8ab0-68d77624178b1572902694970-1.jpg",
    "brand": "Story@home",
    "type": "Double Bed Water Proof & Dust Proof Mattress Protector",
    "price": "1299",
    "MP": "1999",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/6/11/b61c8e10-9d7b-438f-b013-4f1291b4d2691591832809073-1.jpg",
    "brand": "HOSTA HOMES",
    "type": "Solid Mattress Protector",
    "price": "1574",
    "MP": "3499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/19/c06d4154-9cb9-46b1-b682-df4de659b6df1621411760484-1.jpg",
    "brand": "Story@home",
    "type": "Solid Waterproof & Dustproof Single Size Mattress Protector",
    "price": "974",
    "MP": "1499",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15258344/2021/8/26/52873d3f-bc9a-409f-9229-071c10d27aba1629949876116QULITEDCOTTONKINGSIZEMATTRESSPROTECTORBYHOSTAHOMES1.jpg",
    "brand": "HOSTA HOMES",
    "type": "Quilted Cotton King Bed Mattress Protector",
    "price": "1899",
    "MP": "3799",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/92de449c-0271-4691-863b-dab6831aff711614942247163-1.jpg",
    "brand": "BIANCA",
    "type": "Solid Waterproof Mattress Protector",
    "price": "1506",
    "MP": "2598",
    "offer": 42
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15258346/2021/8/26/4595dfb7-d85a-4693-9576-a8dfc0c1b7311629950501689QULITEDCOTTONKINGSIZEMATTRESSPROTECTORBYHOSTAHOMES1.jpg",
    "brand": "HOSTA HOMES",
    "type": "Quilted Cotton King Bed Mattress Protector",
    "price": "1899",
    "MP": "3799",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14997946/2021/11/11/2c18b715-14a0-4330-81aa-cbd4a98d8dc91636584443828-LA-VERNE-Blue-King-Size-Cotton-Terry-Waterproof-Mattress-Pro-1.jpg",
    "brand": "LA VERNE",
    "type": "Waterproof Mattress Protector",
    "price": "999",
    "MP": "2999",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16858588/2022/1/18/32c9f608-f232-4601-a9fb-fda4b54da9981642479360813MattressProtector1.jpg",
    "brand": "Divine Casa",
    "type": "Mattress Protector",
    "price": "949",
    "MP": "3799",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/6/10/203016cb-c800-45e0-90ed-f458ae74b9ce1591743973946-1.jpg",
    "brand": "HOSTA HOMES",
    "type": "Solid Waterproof & Dustproof Queen Bed Mattress Protector",
    "price": "1349",
    "MP": "2999",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16858600/2022/1/18/f34ca54c-9342-4ab4-8e68-90e8a516ecfb1642478739424MattressProtector1.jpg",
    "brand": "Divine Casa",
    "type": "210 GSM Mattress Protector",
    "price": "949",
    "MP": "3799",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/19/c4f795b1-435d-4476-a9c8-be05ede697381621411998112-1.jpg",
    "brand": "Story@home",
    "type": "Solid Waterproof Mattress Cover",
    "price": "1799",
    "MP": "1999",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/cfe9e36a-3e41-4d42-a3f9-47f046d00b7b1614945232039-1.jpg",
    "brand": "BIANCA",
    "type": "Solid Waterproof Micro-Terry Mattress Protector With Elastic Edges",
    "price": "1790",
    "MP": "3198",
    "offer": 44
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/5/8aa67bdd-bb5f-4ebd-86d6-b3de44655c181614940191589-1.jpg",
    "brand": "BIANCA",
    "type": "Solid Waterproof Mattress Protector",
    "price": "1790",
    "MP": "3198",
    "offer": 44
  }
]
mensData(Mattress)



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
  
   
  let sort1 =   Mattress.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Mattress.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Mattress.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Mattress.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Mattress.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Mattress.sort(function(a,b){
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
  highlanderSort(Mattress)
})

function highlanderSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 etherSort(Mattress)
})

function etherSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 USSort(Mattress)
})

function USSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  for(let i = 0; i<Mattress.length ;i++){

    if(Mattress[i].brand == "Roadster"){
       appendarr.push(Mattress[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Mattress.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Mattress)
})

function blueSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 whiteSort(Mattress)
})

function whiteSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 blackSort(Mattress)
})

function blackSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 greenSort(Mattress)
})

function greenSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 greySort(Mattress)
})

function greySort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
 redSort(Mattress)
})

function redSort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  p1Sort(Mattress)
})

function p1Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  p2Sort(Mattress)
})

function p2Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  p3Sort(Mattress)
})

function p3Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  off1Sort(Mattress)
})

function off1Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  off2Sort(Mattress)
})

function off2Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  off3Sort(Mattress)
})

function off3Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  off4Sort(Mattress)
})

function off4Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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
  off5Sort(Mattress)
})

function off5Sort(Mattress){
  
  let sortedData = Mattress.filter(function(elem) {
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