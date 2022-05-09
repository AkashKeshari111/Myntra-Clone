import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()



let KurtasSuits = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13962098/2021/4/14/877b6542-dc0b-4352-bf9a-2e200ba068181618405391945DeewaPrintedPinkA-LineDressKurtaSetsZIYAAWomenKurtaSetsZIYAA6.jpg",
    "brand": "ZIYAA",
    "type": "Printed Kurta with Trousers",
    "price": "972",
    "MP": "2430",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14038092/2021/4/20/e70ba29d-ea27-4e0c-990e-38b4838f8e531618917104638KurtaSetsAHIKAWomenKurtaSetsAHIKAWomenKurtaSetsAHIKAWomenKur1.jpg",
    "brand": "AHIKA",
    "type": "Printed Kurta with Trousers & Dupatta",
    "price": "1574",
    "MP": "3748",
    "offer": 58
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/2/0f576a65-3225-4aac-9db9-4b5743f9199f1622617345842-1.jpg",
    "brand": "Stylum",
    "type": "Women Striped Kurta with Trousers With Dupatta",
    "price": "1056",
    "MP": "2400",
    "offer": 56
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/22/9faa9d87-fb5c-49e0-a748-d3511aa35cd11624340534242-1.jpg",
    "brand": "Indo Era",
    "type": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "price": "1759",
    "MP": "3999",
    "offer": 56
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16295538/2021/11/29/0e6f9fdd-2558-4c03-ab84-df9fbff2d5e91638190875095WomensPinkCottonPrintedKurtaWithTrouserSet1.jpg",
    "brand": "THE NKS PLUS",
    "type": "Woman Peach Kurta & Palazzos",
    "price": "899",
    "MP": "2499",
    "offer": 64
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14203104/2021/6/28/cb46c83c-9d85-4441-bbcb-aa21455b8a861624859278600-Sangria-Women-Kurta-Sets-9871624859277961-1.jpg",
    "brand": "Sangria",
    "type": "Women Cotton Kurta Sets",
    "price": "599",
    "MP": "1999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/9/e9cc12aa-854b-48e0-b7ba-6bcf4e4a62e51617948770143-1.jpg",
    "brand": "ANAISA",
    "type": "Embroidered Kurta with Trousers",
    "price": "987",
    "MP": "2669",
    "offer": 63
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16991432/2022/1/31/d98622c6-c0e9-48d0-8af5-5c6ea78491d61643620795853GoSrikiWomenGreenStraightSolidKurtawithPalazzoDupatta1.jpg",
    "brand": "GoSriKi",
    "type": "Kurta with Trousers & Dupatta",
    "price": "998",
    "MP": "3699",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15262564/2021/10/18/3e5de65a-4aeb-4746-b981-4e3edfcd5fa01634543478338-Indo-Era-Women-Navy-Blue-Ethnic-Motifs-Yoke-Design-Cotton-Ku-13.jpg",
    "brand": "Indo Era",
    "type": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "price": "1403",
    "MP": "3599",
    "offer": 61
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16595430/2022/1/17/e71ccafc-0971-43fc-b6d2-259e9804c34d1642421396636RangritiWomenAssortedPrintedKurtawithPalazzosDupatta1.jpg",
    "brand": "Rangriti",
    "type": "Women Assorted Kurta Set",
    "price": "2299",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10306657/2019/9/21/185212e8-b3d5-4fee-886d-2aac0dd9e5211569064558443-IMARA-Women-Kurta-Sets-5061569064556675-1.jpg",
    "brand": "IMARA",
    "type": "Women Yoke Design Kurta with Trousers & Dupatta",
    "price": "1499",
    "MP": "2999",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14345986/2022/2/4/2d941a96-a140-4707-8cee-bc3b2c26744b1643937538871NayoWomenNavyBlueStraightScreenPrintPureCottonKurtaPalazzosW1.jpg",
    "brand": "Nayo",
    "type": "Women Kurta Set & Dupatta",
    "price": "1399",
    "MP": "3499",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17171690/2022/2/16/c687fae9-54a6-4c01-af44-771d17fbe6211645005298812KALINIAngrakhaKurtaPantandDupattaSet3.jpg",
    "brand": "KALINI",
    "type": "Kurta with Trousers & Dupatta",
    "price": "999",
    "MP": "3999",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12307502/2022/4/18/ee3d06ff-fe83-4a7f-829a-2c1622987a371650283480461PrakhyaWomenPinkSelfDesignKurtawithTrousersDupatta1.jpg",
    "brand": "Prakhya",
    "type": "Self Design Kurta with Trousers & Dupatta",
    "price": "989",
    "MP": "3298",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15508976/2021/9/29/6af853e2-4cf8-45e0-b28a-90c0ba578d0a1632905310824IndoEraBluePrintedStraightKurtaTrouserWithDupattaSet1.jpg",
    "brand": "Indo Era",
    "type": "Women Printed Kurta with Palazzos With Dupatta",
    "price": "2039",
    "MP": "5999",
    "offer": 66
  }
]



mensData(KurtasSuits)




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
  
   
  let sort1 =   KurtasSuits.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   KurtasSuits.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   KurtasSuits.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   KurtasSuits.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   KurtasSuits.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   KurtasSuits.sort(function(a,b){
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
  highlanderSort(KurtasSuits)
})

function highlanderSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 etherSort(KurtasSuits)
})

function etherSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 USSort(KurtasSuits)
})

function USSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  for(let i = 0; i<KurtasSuits.length ;i++){

    if(KurtasSuits[i].brand == "Roadster"){
       appendarr.push(KurtasSuits[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // KurtasSuits.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(KurtasSuits)
})

function blueSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 whiteSort(KurtasSuits)
})

function whiteSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 blackSort(KurtasSuits)
})

function blackSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 greenSort(KurtasSuits)
})

function greenSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 greySort(KurtasSuits)
})

function greySort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
 redSort(KurtasSuits)
})

function redSort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  p1Sort(KurtasSuits)
})

function p1Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  p2Sort(KurtasSuits)
})

function p2Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  p3Sort(KurtasSuits)
})

function p3Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  off1Sort(KurtasSuits)
})

function off1Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  off2Sort(KurtasSuits)
})

function off2Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  off3Sort(KurtasSuits)
})

function off3Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  off4Sort(KurtasSuits)
})

function off4Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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
  off5Sort(KurtasSuits)
})

function off5Sort(KurtasSuits){
  
  let sortedData = KurtasSuits.filter(function(elem) {
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