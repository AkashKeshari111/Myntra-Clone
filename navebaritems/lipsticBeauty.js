import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Lipstick = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178082/2020/1/13/22d48310-290a-429b-8534-db884cde683f1578907784720-Maybelline-New-York-Sensational-03-Flush-It-Red-Liquid-Matte-1.jpg",
    "brand": "Maybelline",
    "type": "Matte Lipstick-Flush It Red 03",
    "price": "268",
    "MP": "349",
    "offer": 23
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178096/2022/3/28/16f525cb-5e71-4193-8f59-3a52b4925f501648457264774-Maybelline-New-York-Sensational-Liquid-Matte-Lipstick---08-S-1.jpg",
    "brand": "Maybelline",
    "type": "Liquid Matte Sensationally Me",
    "price": "289",
    "MP": "349",
    "offer": 17
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14336572/2021/5/24/0c23a790-a8e3-4a27-be5e-2b177698a2c61621829340252-Maybelline-Women-Beauty-Gift-Set-1431621829340019-1.jpg",
    "brand": "Maybelline",
    "type": "Set of 4 Liquid Matte Minis",
    "price": "316",
    "MP": "396",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2230635/2017/11/7/11510034492880-Maybelline-Women-Lipstick-9421510034492872-1.jpg",
    "brand": "Maybelline",
    "type": "Super Stay Matte - 15 Lover",
    "price": "650",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105590/2022/4/13/fe16c1fd-2fd7-4281-9fac-211e1b3252271649824360798Lakme9to5PrimerMatteLipstick-PlumPickMP41.jpg",
    "brand": "Lakme",
    "type": "Matte Lipstick-Plum Pick MP4",
    "price": "400",
    "MP": "500",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8051025/2022/2/21/61beefd1-6915-4944-bf1b-a7463e5f260f1645423276110-Maybelline-New-York-Super-Stay-Matte-Ink-Liquid-Lipstick---F-1.jpg",
    "brand": "Maybelline",
    "type": "Super Stay Matte - Founder 115",
    "price": "594",
    "MP": "699",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6870092/2018/12/26/001c5c9d-ec8a-4091-a16b-df8a850b0bbe1545825125810-Maybelline-New-York-80-Ruler-Super-Stay-Matte-Ink-Liquid-Lip-1.jpg",
    "brand": "Maybelline",
    "type": "Super Stay Matte - Ruler 80",
    "price": "608",
    "MP": "699",
    "offer": 13
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990822/2021/12/8/fa878233-56ad-462c-aa4d-b0aa43583c151638957490027-Maybelline-Color-Sensational-Ultimattes-Lipstick-More-Blush--5.jpg",
    "brand": "Maybelline",
    "type": "Lipstick 499 More Blush",
    "price": "494",
    "MP": "549",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2383022/2018/3/14/11521032706846-Maybelline-Color-Sensational-Chilli-Nude-Inti-Matte-Nudes-Lipstick-2141521032706813-1.jpg",
    "brand": "Maybelline",
    "type": "Matte Lipstick - Chilli Nude",
    "price": "209",
    "MP": "299",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/20/91913af8-d794-4aa7-b4a1-b54176fbb3321576792969444-2.jpg",
    "brand": "SUGAR",
    "type": "Matte Transferproof Lipstick",
    "price": "699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11632896/2021/7/26/9d860722-88ac-4ec4-adb0-19eebbaeb0e41627289836416-SUGAR-Set-of-4-Smudge-Me-Not-Liquid-Mini-Nude-Lipstick-41416-1.jpg",
    "brand": "SUGAR",
    "type": "Set of 4 Mini Lipstick",
    "price": "799",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/b0841404-fbd0-41bc-afcd-56eeacdec8e01610179137422-1.jpg",
    "brand": "Just Herbs",
    "type": "Ayurvedic Lipstick Trial Kit",
    "price": "460",
    "MP": "575",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105572/2021/1/25/9547adc2-db67-42b6-81d5-fbd835046a5d1611572248485-Lakme-Women-Lipstick-2481611572247698-1.jpg",
    "brand": "Lakme",
    "type": "Lipstick-Rosy Sunday MP8",
    "price": "470",
    "MP": "500",
    "offer": 6
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990832/2021/12/1/39122196-78f1-4485-ae4d-fd6f6a57c84f1638338165721-Maybelline-Women-Lipstick-5591638338165630-1.jpg",
    "brand": "Maybelline",
    "type": "Lipstick- 399 More Magenta",
    "price": "466",
    "MP": "549",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1906679/2022/4/21/287444a2-5425-48b4-8f3f-9777d201a4251650544469288LakmeEnrichLipCrayonCinnamonBrown091.jpg",
    "brand": "Lakme",
    "type": "Enrich Lip Crayon - Cinnamon Brown",
    "price": "258",
    "MP": "275",
    "offer": 6
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55269/2021/3/24/2a8ba3df-cca2-4f48-ab17-8cd307538c621616563309201-Lakme-Absolute-Shine-Line-Eye-Liner---Black-3261616563308869-1.jpg",
    "brand": "Lakme",
    "type": "Shine Line Eye Liner - Black",
    "price": "378",
    "MP": "450",
    "offer": 16
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
    "brand": "Lakme",
    "type": "Eyeliner - Shimmery Bronze",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
    "brand": "Lakme",
    "type": "Line Eyeliner - Steel Grey",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg",
    "brand": "Maybelline",
    "type": "Gel Eyeliner - Blackest Black",
    "price": "350",
    "MP": "500",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
    "brand": "Lakme",
    "type": "Eyeliner - Sparkling Olive",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5660739/2022/4/18/d346f98d-585b-480e-847c-64bfa8f004d11650284885776MaybellineNewYorkColossalKajal-SuperBlack1.jpg",
    "brand": "Maybelline",
    "type": "Colossal Kajal - Super Black",
    "price": "240",
    "MP": "300",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8450977/2022/2/23/1db855f2-5677-4590-9eef-2ded0bce94311645615492693-Lakme-9to5-Pure-Rouge-Blusher---Coral-Punch-1741645615492210-1.jpg",
    "brand": "Lakme",
    "type": "9to5 Pure Rouge Blusher",
    "price": "500",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2368963/2020/7/24/bd290bdf-abb9-4739-992c-87591d0a36ec1595568846153LakmeEyeconicFineTipLinerPen-DeepBlack1ml1.jpg",
    "brand": "Lakme",
    "type": "Fine Tip Liner Pen-Deep Black",
    "price": "445",
    "MP": "500",
    "offer": 11
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
    "brand": "Colorbar",
    "type": "Waterproof Eyeliner - Black",
    "price": "339",
    "MP": "399",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2000582/2022/4/26/8cae6f02-a974-4209-946c-843c932ad11a1650957988536-Lakme-9-to-5-SPF-30-Complexion-Care-Cream--Honey-30-g-809165-1.jpg",
    "brand": "Lakme",
    "type": "Honey SPF 30 CC Cream - 30 g",
    "price": "360",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/image/style/properties/285218/Lakme-9-to-5-Black-Impact-Eyeliner_1_96bd14879dc3013d4aed0c7216d36419.jpg",
    "brand": "Lakme",
    "type": "9to5 Eyeliner - Black Impact",
    "price": "252",
    "MP": "300",
    "offer": 16
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
    "brand": "Lakme",
    "type": "Naturale Black Gel Kajal",
    "price": "441",
    "MP": "475",
    "offer": 7
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
    "brand": "FACES CANADA",
    "type": "Magneteyes Kajal Black 01",
    "price": "139",
    "MP": "179",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2966311/2022/3/31/c85baf75-a526-47f1-bd27-c2a54e24b0581648724132330MaybellineNewYorkFaceStudioMasterChromeMetallicHighlighter-M1.jpg",
    "brand": "Maybelline",
    "type": "Studio Metallic Highlighter",
    "price": "449",
    "MP": "599",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1546432/2022/4/1/3b25eb26-7876-4ca1-ba02-e6f93950777f1648804871850MaybellineNewYorkFitMeConcealer-10Light68ml1.jpg",
    "brand": "Maybelline",
    "type": "Fit Me Concealer - Light 10",
    "price": "399",
    "MP": "499",
    "offer": 20
  }
]



mensData(Lipstick)




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
  
   
  let sort1 =   Lipstick.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Lipstick.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Lipstick.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Lipstick.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Lipstick.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Lipstick.sort(function(a,b){
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
  highlanderSort(Lipstick)
})

function highlanderSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 etherSort(Lipstick)
})

function etherSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 USSort(Lipstick)
})

function USSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  for(let i = 0; i<Lipstick.length ;i++){

    if(Lipstick[i].brand == "Roadster"){
       appendarr.push(Lipstick[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Lipstick.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Lipstick)
})

function blueSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 whiteSort(Lipstick)
})

function whiteSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 blackSort(Lipstick)
})

function blackSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 greenSort(Lipstick)
})

function greenSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 greySort(Lipstick)
})

function greySort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
 redSort(Lipstick)
})

function redSort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  p1Sort(Lipstick)
})

function p1Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  p2Sort(Lipstick)
})

function p2Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  p3Sort(Lipstick)
})

function p3Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  off1Sort(Lipstick)
})

function off1Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  off2Sort(Lipstick)
})

function off2Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  off3Sort(Lipstick)
})

function off3Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  off4Sort(Lipstick)
})

function off4Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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
  off5Sort(Lipstick)
})

function off5Sort(Lipstick){
  
  let sortedData = Lipstick.filter(function(elem) {
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