import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


// import{sticky1} from "../components/sticky.js"

// sticky1()

let TShirts = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15362120/2021/9/4/81a36d9e-49a0-41df-88b4-2690245d73d11630771947898HELLCATBoysBurgundyTypography2PrintedT-shirt1.jpg",
    "brand": "HELLCAT",
    "type": "Boys Pack-2 Printed T-shirt",
    "price": "599",
    "MP": "1999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14191940/2021/4/26/b3e4c93d-6975-4b4f-b47e-f1010f24548c1619436930003HELLCATBoysMulticolouredPrintedRoundNeckT-shirt1.jpg",
    "brand": "HELLCAT",
    "type": "Boys Pack of 2 T-shirts",
    "price": "526",
    "MP": "1699",
    "offer": 69
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15334334/2021/9/1/4f6d14d1-fdb2-4956-a89a-6a4f499d1eea1630508896700BonOrganikBoysOrangePrintedAppliqueT-shirt1.jpg",
    "brand": "BonOrganik",
    "type": "Boys Printed T-shirt",
    "price": "349",
    "MP": "999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15354574/2021/9/3/f33dd697-59a1-4204-bf70-4f7bc7ee61521630679227368HELLCATBoysGreenTypography2PrintedT-shirt1.jpg",
    "brand": "HELLCAT",
    "type": "Boys Pack-2 Printed T-shirt",
    "price": "599",
    "MP": "1999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/19/0449c939-7fa1-4755-bb5d-53b0025db3e01595110038743-1.jpg",
    "brand": "HELLCAT",
    "type": "Boys Pack Of 3 Printed T-shirt",
    "price": "689",
    "MP": "2299",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/18/f250d5e5-5829-40b4-a007-5d765e388de11595026879335-1.jpg",
    "brand": "HELLCAT",
    "type": "Pack Of 3 T-shirt",
    "price": "620",
    "MP": "2299",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/12/9167083e-fe42-44ac-bc43-ed94fae8ecbc1618212451195-1.jpg",
    "brand": "Maniac",
    "type": "Boys Colourblocked Cotton Pure Cotton T-shirt",
    "price": "969",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
    "brand": "HELLCAT",
    "type": "Pack Of 3 T-shirts",
    "price": "620",
    "MP": "2299",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15552556/2021/9/21/b8518562-4dde-453d-a531-2f3983e1ec6a1632223704403maxBoysMulticolouredTypographyPrintedAppliqueT-shirt1.jpg",
    "brand": "max",
    "type": "Pack of 3 Printed T-shirt",
    "price": "620",
    "MP": "689",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12758932/2020/10/16/109715dc-eef2-4eb5-b184-4150dafc6a6b1602833254052HELLCATBoysOliveGreenPrintedHoodT-shirt1.jpg",
    "brand": "HELLCAT",
    "type": "Boys Pack Of 2 Hood T-shirts",
    "price": "679",
    "MP": "1999",
    "offer": 66
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15932826/2022/1/7/5eac46c6-af55-44b6-889f-a0a4c23d7d681641545112054-HELLCAT-Boys-Set-of-2-Colourblocked-T-shirts-435164154511196-2.jpg",
    "brand": "HELLCAT",
    "type": "Set of 2 Colourblocked T-shirt",
    "price": "619",
    "MP": "1999",
    "offer": 69
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15552594/2021/9/21/35b0d182-4b52-4767-b550-7746dec36d9b1632223680366maxBoysMulticolouredTypographyV-NeckAppliqueT-shirt1.jpg",
    "brand": "max",
    "type": "Boys Pack of 5 Printed T-shirt",
    "price": "854",
    "MP": "949",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15332162/2021/9/1/f0df1e62-e8e2-4a06-92a7-81d102fbf5e21630501642929ManiacBoysRedColourblockedV-NeckSlimFitT-shirt1.jpg",
    "brand": "Maniac",
    "type": "Boys Colourblocked V-Neck Slim Fit T-shirt",
    "price": "749",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15334336/2021/9/1/c5dd8a5e-6c15-481d-a85c-4cc2e42ecabd1630508605640BonOrganikBoysWhiteTypographyPrintedAppliqueT-shirt1.jpg",
    "brand": "BonOrganik",
    "type": "Boys Cotton Typography T-shirt",
    "price": "349",
    "MP": "999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17132460/2022/2/22/0e0369b8-aadc-4262-97f9-2b4db6236c221645542905367-HELLCAT-Boys-Pack-Of-3-Navy-Blue-Printed-Bio-Finish-Cotton-T-11.jpg",
    "brand": "HELLCAT",
    "type": "Pack Of 3 Bio Finish T-shirt",
    "price": "749",
    "MP": "2997",
    "offer": 75
  },
  
]



mensData(TShirts)




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
  
   
  let sort1 =   TShirts.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   TShirts.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   TShirts.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   TShirts.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   TShirts.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   TShirts.sort(function(a,b){
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
  highlanderSort(TShirts)
})

function highlanderSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 etherSort(TShirts)
})

function etherSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 USSort(TShirts)
})

function USSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  for(let i = 0; i<TShirts.length ;i++){

    if(TShirts[i].brand == "Roadster"){
       appendarr.push(TShirts[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // TShirts.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(TShirts)
})

function blueSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 whiteSort(TShirts)
})

function whiteSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 blackSort(TShirts)
})

function blackSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 greenSort(TShirts)
})

function greenSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 greySort(TShirts)
})

function greySort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
 redSort(TShirts)
})

function redSort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  p1Sort(TShirts)
})

function p1Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  p2Sort(TShirts)
})

function p2Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  p3Sort(TShirts)
})

function p3Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  off1Sort(TShirts)
})

function off1Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  off2Sort(TShirts)
})

function off2Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  off3Sort(TShirts)
})

function off3Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  off4Sort(TShirts)
})

function off4Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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
  off5Sort(TShirts)
})

function off5Sort(TShirts){
  
  let sortedData = TShirts.filter(function(elem) {
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