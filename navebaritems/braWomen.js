import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Bra = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475743/2019/4/4/e33218ab-48be-441e-a9b7-e0ae157ceed71554375840623-HRX-by-Hrithik-Roshan-Charcoal-Solid-Non-Wired-Lightly-Padde-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Seamless Padded Sports Bra",
    "price": "389",
    "MP": "1299",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475737/2019/4/4/9893a421-b3e3-4612-b3ab-87d90f7c67cc1554375827892-HRX-by-Hrithik-Roshan-Green-Self-Design-Non-Wired-Lightly-Pa-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Seamless Padded Sports Bra",
    "price": "844",
    "MP": "1299",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475771/2022/4/11/ea86f5c0-17f9-4636-8276-dc737cd5fabc1649655561090-HRX-by-Hrithik-Roshan-Seamless-Green-Lightly-Padded-Rapid-dr-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Bra",
    "price": "584",
    "MP": "1299",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475759/2022/3/22/f9167cda-316f-4966-b8b9-eee716107fbf1647944596697-HRX-by-Hrithik-Roshan-Seamless-Women-Coral-Orange-Rapid-Dry--1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Seamless Rapid Dry Yoga Bra",
    "price": "439",
    "MP": "1099",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9050703/2019/5/29/7b53bebc-4ff1-435b-b60c-7c01531e20761559119481394-DressBerry-Grey-Melange-Solid-Non-Wired-Heavily-Padded-T-shi-1.jpg",
    "brand": "DressBerry",
    "type": "Lightly Padded T-shirt Bra",
    "price": "314",
    "MP": "899",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8475711/2019/3/13/310c8cb5-595d-4bb9-817a-5cb6af155dfe1552458918414-HRX-by-Hrithik-Roshan-Grey-Printed-Lightly-Padded-RAPID-DRY--1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Seamless RAPID-DRY Sports Bra",
    "price": "594",
    "MP": "1699",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11862234/2020/7/29/b58ac067-2a85-4b65-b419-a27a8f7fd78d1596001811098HERENOWMenWhiteRedStripedRoundNeckT-shirtBraHRXbyHrithikRosh1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Running Rapid-Dry Sports Bra",
    "price": "764",
    "MP": "1699",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13983656/2021/6/29/2b8ba030-124b-417e-a0ac-49b8ec3774331624964672458-DressBerry-Women-Bra-2021624964671953-1.jpg",
    "brand": "DressBerry",
    "type": "Workout Bra",
    "price": "164",
    "MP": "549",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13983648/2021/6/29/281e694a-7d20-46ac-85e3-66326f6899341624962437304-DressBerry-Women-Bra-6551624962436761-1.jpg",
    "brand": "DressBerry",
    "type": "Workout Bra",
    "price": "192",
    "MP": "549",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14701460/2021/9/10/98e495f7-2818-44b4-bb2a-027b86a20f6e1631246415969-HRX-by-Hrithik-Roshan-Women-Bra-5901631246415216-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Training Rapid-Dry Sports Bra",
    "price": "524",
    "MP": "1499",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9320545/2019/4/15/c21a7844-357b-4a95-a528-032f949d75891555325250808-Zivame-Padded-Wirefree-Bra--Red-6971555325250400-1.jpg",
    "brand": "Zivame",
    "type": "Lightly Padded T-shirt Bra",
    "price": "411",
    "MP": "749",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9050707/2019/5/29/54335ee9-f35e-4b8e-bdc7-9292db2b77dc1559119492474-DressBerry-Women-Bra-611559119491866-1.jpg",
    "brand": "DressBerry",
    "type": "Lightly Padded T-shirt Bra",
    "price": "269",
    "MP": "899",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15115018/2021/8/19/5a50fe5c-2b0a-49fe-a37a-35d9b566a4401629354590350JockeyLightGreyMelangeSlipOnActiveBra13761.jpg",
    "brand": "Jockey",
    "type": "Slip-On Sports Bra",
    "price": "579",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2306777/2017/12/4/11512394342021-Zivame-Padded-Wirefree-T-shirt-Bra--Black-2411512394341892-1.jpg",
    "brand": "Zivame",
    "type": "Lightly Padded T-shirt Bra",
    "price": "449",
    "MP": "899",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13370868/2021/2/15/92a6f744-20f6-4120-8eef-5faa0c42cdd81613393848462-Enamor-Pink-Solid-Non-Wired-Non-Padded-Everyday-Bra-19916133-1.jpg",
    "brand": "Enamor",
    "type": "Non Padded Everyday Bra",
    "price": "449",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11357430/2020/2/26/5a8ae7d2-b098-48dc-b69a-19f113c915f11582693069169-HRX-by-Hrithik-Roshan-Women-Shorts-8891582693066899-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Running Rapid-Dry Shorts",
    "price": "674",
    "MP": "1499",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/21/4d2ed754-05e1-4ee7-8a2d-d6b3677b70a11611228971382-1.jpg",
    "brand": "Clovia",
    "type": "Women Solid Ankle Length Training Tights",
    "price": "584",
    "MP": "1299",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12959222/2022/4/20/6983e9a3-cea0-41d0-93b8-0d6980fd3a9f1650451192884DomyosbyDecathlonWomenBlackHighWaistSkin-TightFitnessShorts1.jpg",
    "brand": "Domyos By Decathlon",
    "type": "Women Cardio Training Shorts",
    "price": "854",
    "MP": "899",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10106535/2019/9/19/9952e7ac-4522-4cfe-abd1-7b591250bb291568891066162-HRX-by-Hrithik-Roshan-Women-Red-Rapid-Dry-Yoga-Seamless-Shor-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Yoga Seamless Shorts",
    "price": "449",
    "MP": "1499",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/22/87a1ed11-990e-4c07-8bd8-e65700e0306b1614002659146-1.jpg",
    "brand": "Clovia",
    "type": "Activewear Sports Tights",
    "price": "610",
    "MP": "1299",
    "offer": 53
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/5/8f763367-e2d1-4440-8cd7-4b1216947c341607174318712-1.jpg",
    "brand": "Domyos By Decathlon",
    "type": "Occasional Fitness Tank Top",
    "price": "474",
    "MP": "499",
    "offer": 5
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/4/c8ba10f6-6594-4426-b65d-72f55f2153341620105764568-2.jpg",
    "brand": "Domyos By Decathlon",
    "type": "Women Solid Ankle-Length Organic Cotton Yoga Leggings",
    "price": "699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10106163/2019/9/3/1e55c9f0-0be0-4b9f-a6aa-331c984086cc1567511778666-HRX-by-Hrithik-Roshan-Women-Tights-8471567511775688-4.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Seamless Yoga Tights",
    "price": "1499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7688006/2021/7/27/e0f77cd9-cffc-4049-9911-08e815a7a54a1627371128568-HRX-by-Hrithik-Roshan-Women-Navy-Blue-Solid-Rapid-Dry-Runnin-1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Running T-shirt",
    "price": "349",
    "MP": "999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/16/bf8ddd19-38ab-4aa2-89e7-2716817b26111618578647471-1.jpg",
    "brand": "Domyos By Decathlon",
    "type": "Women Skinny Fit Sports Shorts",
    "price": "499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8328163/2019/4/2/9ca4fde8-35b1-4b88-b9b9-a6c326d51df31554201033546-HRX-by-Hrithik-Roshan-Women-Black-Solid-Regular-Fit-Sports-S-4.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Women Rapid dry Sports Shorts",
    "price": "1499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13549216/2021/3/15/b76c73b6-9135-4997-a444-31b19b5fe8c01615804088995ChkokkoWomenBlackSolidRunningShorts1.jpg",
    "brand": "Chkokko",
    "type": "Women Running Shorts",
    "price": "699",
    "MP": "2330",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/31/d55d48fc-f135-4a27-af54-d5fd267bdbad1617177260742-1.jpg",
    "brand": "Zelocity by Zivame",
    "type": "Women Solid Tights",
    "price": "597",
    "MP": "1195",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10565506/2020/2/4/900c17fc-9cca-45b3-93dd-493d66d0e2531580805529814-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tank--1.jpg",
    "brand": "HRX by Hrithik Roshan",
    "type": "Running Rapid-Dry Tank Top",
    "price": "359",
    "MP": "899",
    "offer": 60
  }
]

mensData(Bra)



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
  
   
  let sort1 =   Bra.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Bra.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Bra.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Bra.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Bra.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Bra.sort(function(a,b){
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
  highlanderSort(Bra)
})

function highlanderSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 etherSort(Bra)
})

function etherSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 USSort(Bra)
})

function USSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  for(let i = 0; i<Bra.length ;i++){

    if(Bra[i].brand == "Roadster"){
       appendarr.push(Bra[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Bra.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Bra)
})

function blueSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 whiteSort(Bra)
})

function whiteSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 blackSort(Bra)
})

function blackSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 greenSort(Bra)
})

function greenSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 greySort(Bra)
})

function greySort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
 redSort(Bra)
})

function redSort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  p1Sort(Bra)
})

function p1Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  p2Sort(Bra)
})

function p2Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  p3Sort(Bra)
})

function p3Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  off1Sort(Bra)
})

function off1Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  off2Sort(Bra)
})

function off2Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  off3Sort(Bra)
})

function off3Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  off4Sort(Bra)
})

function off4Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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
  off5Sort(Bra)
})

function off5Sort(Bra){
  
  let sortedData = Bra.filter(function(elem) {
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