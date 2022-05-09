import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Tops = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11364258/2020/1/31/899b523a-f57a-48fb-80cd-8422614f195d1580451588210-SASSAFRAS-Women-Green--Beige-Printed-Blouson-Top-49515804515-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Floral Georgette Blouson Top",
    "price": "674",
    "MP": "1499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12222044/2020/8/14/16302e01-c0ca-4e70-80e5-db8c2064ce8f1597405258249-SASSAFRAS-Women-Peach-Coloured-Solid-Top-9011597405255592-1.jpg",
    "brand": "SASSAFRAS",
    "type": "High-Neck Top",
    "price": "499",
    "MP": "999",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9070021/2019/3/28/f0bce3b7-9ca8-45c9-a33d-dfd07c849a9c1553778513694-SASSAFRAS-Women-Beige--Black-Regular-Fit-Printed-Shirt-11915-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Animal Print Shirt Style Top",
    "price": "629",
    "MP": "1399",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11679908/2020/5/25/8046704c-bff4-45bc-bf0f-5d438724b7b81590424372490CottinfabWomensBrownPleatedTrouserTopsCarltonLondonWomenTops1.jpg",
    "brand": "Carlton London",
    "type": "Victorian Crop Fitted Top",
    "price": "667",
    "MP": "1390",
    "offer": 52
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12284212/2020/8/25/8fc39488-cee7-4424-870d-ae5bd666d19c1598366814622-SASSAFRAS-Women-Black-Solid-Top-601598366813572-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Ribbed Crop Top",
    "price": "449",
    "MP": "899",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8643215/2019/2/1/dd3ef60d-be47-4a19-93c9-8598694020281549016416015-SASSAFRAS-Women-Grey-Solid-Blouson-Top-7381549016414303-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Layered Cropped Blouson Top",
    "price": "499",
    "MP": "999",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1052250/2019/4/11/fb86e884-dbdc-4951-bb45-38cc400c437f1554985706259-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Casual-Shirt-3-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Ruffled Shirt Style Top",
    "price": "549",
    "MP": "999",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/c3f87e02-333b-4008-aa5c-3bb5d3fc658a1611743836816-1.jpg",
    "brand": "Harpa",
    "type": "Square Neck Top",
    "price": "643",
    "MP": "1399",
    "offer": 54
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4325708/2018/4/2/11522662991296-Style-Quotient-Women-Tops-4231522662991112-1.jpg",
    "brand": "Style Quotient",
    "type": "Polka Dot Print Top",
    "price": "575",
    "MP": "1599",
    "offer": 64
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8841591/2019/3/5/e92e95ab-68ed-4c6b-8d3e-146d777f9bbf1551780857345-La-Zoire-Stripe-Shifly-Top-831551780856037-1.jpg",
    "brand": "La Zoire",
    "type": "Striped A-Line Top",
    "price": "879",
    "MP": "1599",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13843266/2022/4/18/abaa6501-e1be-4b8e-af96-ecae86eed9e41650283574811SassafrasBlackSilverStripedOneShoulderPuffSleevesCinchedWais1.jpg",
    "brand": "SASSAFRAS",
    "type": "Striped One Shoulder Puff Sleeves Top",
    "price": "674",
    "MP": "1499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9070485/2022/4/18/c2030007-83c4-4a80-8a9e-c964cef044791650284882570SASSAFRASBlackStyledBackCropTop1.jpg",
    "brand": "SASSAFRAS",
    "type": "Styled Back Crop Top",
    "price": "499",
    "MP": "999",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13842966/2021/4/3/3d20dde9-8c47-48f2-a079-8cdacd9c78b11617444711671-Sassafras-Brown--Red-Geometric-Printed-Georgette-Wrap-Crop-T-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Geometric Printed Georgette Wrap Top",
    "price": "674",
    "MP": "1499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10308651/2019/7/26/09114b19-d977-46ca-8f25-f33c9b47456a1564140179144-SASSAFRAS-Women-Blue-Solid-Top-3621564140176982-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Pleated Frilled Hem Top",
    "price": "559",
    "MP": "1399",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11364152/2020/1/27/091a681c-beb4-4192-bc64-44ca554391141580121893720-SASSAFRAS-Women-White-Solid-Blouson-Top-731580121889856-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Extended Sleeved Blouson",
    "price": "499",
    "MP": "999",
    "offer": 50
  },
  
]



mensData(Tops)



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
  
   
  let sort1 =   Tops.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Tops.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Tops.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Tops.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Tops.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Tops.sort(function(a,b){
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
  highlanderSort(Tops)
})

function highlanderSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 etherSort(Tops)
})

function etherSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 USSort(Tops)
})

function USSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  for(let i = 0; i<Tops.length ;i++){

    if(Tops[i].brand == "Roadster"){
       appendarr.push(Tops[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Tops.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Tops)
})

function blueSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 whiteSort(Tops)
})

function whiteSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 blackSort(Tops)
})

function blackSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 greenSort(Tops)
})

function greenSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 greySort(Tops)
})

function greySort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
 redSort(Tops)
})

function redSort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  p1Sort(Tops)
})

function p1Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  p2Sort(Tops)
})

function p2Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  p3Sort(Tops)
})

function p3Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  off1Sort(Tops)
})

function off1Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  off2Sort(Tops)
})

function off2Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  off3Sort(Tops)
})

function off3Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  off4Sort(Tops)
})

function off4Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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
  off5Sort(Tops)
})

function off5Sort(Tops){
  
  let sortedData = Tops.filter(function(elem) {
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