import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let BedRunners = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17454350/2022/3/9/c48c35b7-6e97-4567-af15-af4cca4d6b661646823241939Runners1.jpg",
    "brand": "S9home by Seasons",
    "type": "Bed Runner with Cushion Covers",
    "price": "674",
    "MP": "1499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172754/2022/2/16/32d9d223-01da-456e-bedb-05f370ad405b1645007789639BlackKITCHENAntiSlipKitchenRunner1.jpg",
    "brand": "AEROHAVEN",
    "type": "Anti Slip Floor Runner",
    "price": "599",
    "MP": "1499",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172748/2022/2/16/fe7f0be4-d4a2-4594-ae82-1468d184f5ad1645007754479AEROHAVENTaupeBrownQuirkyAntiSlipKitchenRunner1.jpg",
    "brand": "AEROHAVEN",
    "type": "Quirky Anti Slip Kitchen Runner",
    "price": "599",
    "MP": "1499",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172756/2022/2/16/51625964-f171-4b35-94b7-c3ad318501101645006968206BlueKITCHENAntiSlipKitchenRunner1.jpg",
    "brand": "AEROHAVEN",
    "type": "Quirky Anti Slip Kitchen Runner",
    "price": "599",
    "MP": "1499",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17172762/2022/2/16/a5c66dd4-a92e-4d70-9950-b160a46c78601645006746373TealCOOKINGAntiSlipKitchenRunner1.jpg",
    "brand": "AEROHAVEN",
    "type": "Patterned 1850 GSM Anti Slip Kitchen Runner",
    "price": "599",
    "MP": "1499",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15218536/2021/8/21/9e2bacd5-99ed-40a1-b91b-9548f17522791629552337668ArrabiGreenGraphicTCCottonBlend4SEATERTableRunner1.jpg",
    "brand": "Arrabi",
    "type": "Printed 4-Seater Table Runner",
    "price": "398",
    "MP": "1329",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15812652/2021/10/13/8feffb81-7e50-4cec-be2f-a3f4f1c941db1634113788805Runners1.jpg",
    "brand": "BELLA TRUE",
    "type": "Macrame Table Runner",
    "price": "832",
    "MP": "1699",
    "offer": 51
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15752598/2021/10/6/a130be5c-da8f-4617-8abc-f89ac90d115f1633514496337Redtablerunnerwithtoneontonebeadssequinandtassels1.jpg",
    "brand": "Amoliconcepts",
    "type": "Embellished Table Runner",
    "price": "1600",
    "MP": "2000",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15433430/2021/9/11/b1cb108d-8dd7-405c-ac2d-1ec69bc0d0801631356535477HomecentreGoldCinderLeafTableRunner-PVC-33x150cm1.jpg",
    "brand": "Home Centre",
    "type": "Patterned Table Runner",
    "price": "899",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17113640/2022/2/10/b9e49a94-c060-4f8b-9f74-aa156641c53d1644477110181STITCHNESTCreamPrintedTableRunner1.jpg",
    "brand": "STITCHNEST",
    "type": "Printed Table Runner",
    "price": "399",
    "MP": "999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/29/14b8ddc6-d5bf-44e8-8686-f5ba298ab9ff1622263272202-1.jpg",
    "brand": "Home Centre",
    "type": "Textured Table Runner",
    "price": "899",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/26/f23b527e-ba51-4e64-9af0-da45cdefa5b21619443827373-1.jpg",
    "brand": "Status",
    "type": "Abstract Patterned Floor Runner",
    "price": "659",
    "MP": "1999",
    "offer": 67
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/22/0270cd8b-0318-4187-9b50-1b05fe7795c61600723873746-1.jpg",
    "brand": "ROMEE",
    "type": "Printed Table Runner",
    "price": "419",
    "MP": "1399",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1390849/2016/6/13/11465811519179-SEJ-by-Nisha-Gupta-Unisex-Table-Runner-1571465811519085-1.jpg",
    "brand": "SEJ by Nisha Gupta",
    "type": "Ethnic Cotton Table Runner",
    "price": "554",
    "MP": "1849",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/19/1e719fe0-5459-46a8-9094-f19e8734200c1618844820990-1.jpg",
    "brand": "BELLA TRUE",
    "type": "Digital Printed Table Runner",
    "price": "349",
    "MP": "2499",
    "offer": 86
  }
]


mensData(BedRunners)



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
  
   
  let sort1 =   BedRunners.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   BedRunners.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   BedRunners.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   BedRunners.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   BedRunners.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   BedRunners.sort(function(a,b){
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
  highlanderSort(BedRunners)
})

function highlanderSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 etherSort(BedRunners)
})

function etherSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 USSort(BedRunners)
})

function USSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  for(let i = 0; i<BedRunners.length ;i++){

    if(BedRunners[i].brand == "Roadster"){
       appendarr.push(BedRunners[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // BedRunners.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(BedRunners)
})

function blueSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 whiteSort(BedRunners)
})

function whiteSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 blackSort(BedRunners)
})

function blackSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 greenSort(BedRunners)
})

function greenSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 greySort(BedRunners)
})

function greySort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
 redSort(BedRunners)
})

function redSort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  p1Sort(BedRunners)
})

function p1Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  p2Sort(BedRunners)
})

function p2Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  p3Sort(BedRunners)
})

function p3Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  off1Sort(BedRunners)
})

function off1Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  off2Sort(BedRunners)
})

function off2Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  off3Sort(BedRunners)
})

function off3Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  off4Sort(BedRunners)
})

function off4Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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
  off5Sort(BedRunners)
})

function off5Sort(BedRunners){
  
  let sortedData = BedRunners.filter(function(elem) {
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

