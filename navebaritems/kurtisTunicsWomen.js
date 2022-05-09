import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let KurtisTunics = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13647612/2021/3/2/ae01b413-6d60-4f2f-a851-24bf78ae0a801614675775880-Varanga-Pink-Floral-And-Bird-Printed-Crop-Top-With-Puff-Slee-1.jpg",
    "brand": "Varanga",
    "type": "Floral Printed Crop Top",
    "price": "597",
    "MP": "1299",
    "offer": 54
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13719118/2021/3/3/d7568371-96e2-4588-b0b2-fa7f3a2d6edb1614752823080-Athena-Turquoise-Blue-top-with-power-shoulder-sleeve-detail--1.jpg",
    "brand": "Athena",
    "type": "Power Shoulders Top",
    "price": "636",
    "MP": "1299",
    "offer": 51
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10856186/2019/11/30/c93932d4-79f1-4115-b07c-21bb59775a671575111475924-SASSAFRAS-Women-Tops-1431575111474030-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Solid Top",
    "price": "539",
    "MP": "1199",
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9553433/2022/4/20/88ea5805-292d-40c3-b53a-fbf4fa33c1481650446688676SASSAFRASGreenWhiteStripedStyledBackCropTop1.jpg",
    "brand": "SASSAFRAS",
    "type": "Styled Back Crop Top",
    "price": "449",
    "MP": "899",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12797568/2020/11/11/b5389152-fe8a-4729-ac94-e361353bfbad1605068283796-Cottinfab-Women-Tops-9111605068282525-1.jpg",
    "brand": "Cottinfab",
    "type": "Printed Shirt Style Pure Cotton Top",
    "price": "479",
    "MP": "1199",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7256716/2018/8/31/75084dda-6d3f-4387-9b4a-b776dfae3a651535708100723-na-8491535708100420-1.jpg",
    "brand": "Mayra",
    "type": "Striped A-Line Top",
    "price": "417",
    "MP": "995",
    "offer": 58
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13719146/2021/3/3/d2d0ad98-7563-4d4d-af0a-a99abaeca74b1614753570173-Athena-Sea-Green-top-with-power-shoulder-sleeve-detail-12416-1.jpg",
    "brand": "Athena",
    "type": "Power Shoulders Top",
    "price": "636",
    "MP": "1299",
    "offer": 51
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13843006/2021/4/9/f03c740b-8aae-4505-89e5-2f2a5e76a3fe1617974298161-Sassafras-Blue-Pure-Cotton-Fitted-Crop-Top-6761617974297629-1.jpg",
    "brand": "SASSAFRAS",
    "type": "Fitted Crop Top",
    "price": "449",
    "MP": "899",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/1/34ed596f-7dd3-45e0-a7b9-20ddf041da9a1606815654154-1.jpg",
    "brand": "Tokyo Talkies",
    "type": "Solid Top",
    "price": "379",
    "MP": "949",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9240703/2022/4/12/4dc1199d-d684-41d1-9035-5a6483e5e1a21649748075919herbyinvictusOliveGreenSmartCasualTop1.jpg",
    "brand": "her by invictus",
    "type": "Smart Casual Top",
    "price": "559",
    "MP": "1599",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13738182/2021/7/5/ae19d5f2-c171-4cef-baf7-360007dcf72c1625487089028-VENI-VIDI-VICI-Fuschia--Frilled-Tie-Back-Top-687162548708858-1.jpg",
    "brand": "Veni Vidi Vici",
    "type": "Ruffled Crop Top",
    "price": "468",
    "MP": "1170",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12221932/2020/10/6/fc845ff5-a434-48a4-8dca-9b4bf3fb52391601959631371-SASSAFRAS-Women-Black-High-Neck-Cropped-Top-4281601959630186-1.jpg",
    "brand": "SASSAFRAS",
    "type": "High Neck Cropped Top",
    "price": "399",
    "MP": "799",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11711840/2020/10/13/c4034971-d71f-416c-9d48-82f1c39127c01602590834834MastHarbourWomenSeaGreenYellowFloralPrintedCropTop1.jpg",
    "brand": "Mast & Harbour",
    "type": "Floral Lace Crop Top",
    "price": "454",
    "MP": "1299",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11144044/2020/2/6/d8b6c14b-af7f-439d-a260-383e0eb7a7bd1580965077361-Mast--Harbour-Women-Blue-Self-Striped-Top-3821580965076362-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Self-Striped Pure Cotton Top",
    "price": "559",
    "MP": "1599",
    "offer": 65
  },
  
]




mensData(KurtisTunics)




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
  
   
  let sort1 =   KurtisTunics.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   KurtisTunics.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   KurtisTunics.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   KurtisTunics.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   KurtisTunics.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   KurtisTunics.sort(function(a,b){
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
  highlanderSort(KurtisTunics)
})

function highlanderSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 etherSort(KurtisTunics)
})

function etherSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 USSort(KurtisTunics)
})

function USSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  for(let i = 0; i<KurtisTunics.length ;i++){

    if(KurtisTunics[i].brand == "Roadster"){
       appendarr.push(KurtisTunics[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // KurtisTunics.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(KurtisTunics)
})

function blueSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 whiteSort(KurtisTunics)
})

function whiteSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 blackSort(KurtisTunics)
})

function blackSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 greenSort(KurtisTunics)
})

function greenSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 greySort(KurtisTunics)
})

function greySort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
 redSort(KurtisTunics)
})

function redSort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  p1Sort(KurtisTunics)
})

function p1Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  p2Sort(KurtisTunics)
})

function p2Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  p3Sort(KurtisTunics)
})

function p3Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  off1Sort(KurtisTunics)
})

function off1Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  off2Sort(KurtisTunics)
})

function off2Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  off3Sort(KurtisTunics)
})

function off3Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  off4Sort(KurtisTunics)
})

function off4Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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
  off5Sort(KurtisTunics)
})

function off5Sort(KurtisTunics){
  
  let sortedData = KurtisTunics.filter(function(elem) {
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