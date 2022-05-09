import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Face =[
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509854/2021/4/13/28434eb8-28a1-4d70-ba28-290bb424d5231618311009851-Olay-Women-Face-Moisturisers-1601618311009637-1.jpg",
    "brand": "Olay",
    "type": "Women SPF 24 Day Cream",
    "price": "499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57782/2020/10/10/7505b6c6-ae86-40c0-883c-78cc391cb75e1602273099106LotusHerbalsSustainableWomenNutramoistSkinRenewalDailyCream51.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Nutramoist Skin Renewal Cream",
    "price": "364",
    "MP": "455",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57630/2020/10/10/40f2ef8c-9a39-4ee6-ab40-ca86c8957d291602269994214LotusHerbalsSustainableNutraniteSkinRenewalNutritiveNightCre1.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Nutranite Skin Renewal Night Cream",
    "price": "364",
    "MP": "455",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57692/2022/1/27/491e9858-0aec-4fa7-b31b-b1221a7bd4f21643279838266LotusHerbalsSustainableSheaButterMoisturiser120g1.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Shea Butter Moisturiser",
    "price": "258",
    "MP": "345",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509842/2021/8/11/19b48d54-fc72-49d8-a20b-7754778988011628659279386OlayWomenNaturalWhite7inOneNourishingNightRepairCream50g1.jpg",
    "brand": "Olay",
    "type": "Women Night Repair Cream",
    "price": "292",
    "MP": "365",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11699568/2022/1/27/d711eb0a-c9bd-473f-8367-9b99c64785a41643279982185BiotiqueWomenMorningNectarFlawlessSkinCreamwithBadamSeedOil11.jpg",
    "brand": "Biotique",
    "type": "Nectar Flawless Skin Cream",
    "price": "174",
    "MP": "230",
    "offer": 24
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57694/2020/10/10/5e174bd2-95f1-4e79-8606-482e2465ee4a1602270641317LotusHerbalsSustainableWomenWhiteAlphaHydroxyOil-FreeMoistur1.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Alpha Hydroxy Oil-Free Moisturiser",
    "price": "260",
    "MP": "325",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7197210/2021/9/29/1d7a7e49-0f54-4a40-919d-6c9e964a19e01632856574405-Ponds-Non-Oily-Light-Moisturiser-150-ml-381632856573467-1.jpg",
    "brand": "Ponds",
    "type": "Light Moisturiser 150 ml",
    "price": "192",
    "MP": "219",
    "offer": 12
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57702/2020/10/10/1d8a3452-cef3-4d10-b547-36d3b125c8a21602270806662LotusHerbalsSustainableAlmondAnti-WrinkleCreme50g1.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Almond Anti-Wrinkle Creme",
    "price": "356",
    "MP": "475",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509846/2021/8/11/b67377aa-386a-41e3-b1a7-7e3889d7eb531628659416371OlayTotalEffects7InOneNightCream-50g1.jpg",
    "brand": "Olay",
    "type": "7 In One Night Cream",
    "price": "719",
    "MP": "899",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9337273/2020/5/19/5fde2839-c24b-47f5-8d7d-678c6f5b8b531589882046284NiveaSetof2BodyFaceMoisturisers1.jpg",
    "brand": "Nivea",
    "type": "Lotion & Face Moisturisers",
    "price": "471",
    "MP": "524",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506304/2021/10/5/d0d42ed8-295a-49ab-9a11-c328333f30661633428468519-Dove-Women-Face-Moisturisers-6331633428468424-1.jpg",
    "brand": "Dove",
    "type": "Body Butter Paraben Free",
    "price": "218",
    "MP": "230",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318446/2021/8/11/7141eb69-c1c5-4e4d-8dc1-bbf15ddf0bde1628671502854OlayWomenRegeneristMicro-SculptingAnti-AgeingFaceMoisturiser1.jpg",
    "brand": "Olay",
    "type": "Regenerist Face Moisturiser",
    "price": "339",
    "MP": "399",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11752718/2020/9/29/332a6efb-6580-4947-abb1-e6aec905ea071601376847184-Lotus-Herbals-Women-Face-Moisturisers-871601376846087-1.jpg",
    "brand": "Lotus Herbals",
    "type": "Anti-Blemish Creme 50 g",
    "price": "620",
    "MP": "775",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11618812/2020/10/10/581ad042-7e67-4abe-8e93-8ef02376eadb1602273112716LotusHerbalsSustainableYOUTHRXGineplexYouthActivatingSerumCr1.jpg",
    "brand": "Lotus Herbals",
    "type": "Sustainable Youth Activating Serum+Creme",
    "price": "875",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55243/2022/3/21/67b62137-0277-460f-a0d2-385bdd09be941647860136423-Lakme-Perfecting-Liquid-Foundation---Natural-Pearl-27ml-5181-1.jpg",
    "brand": "Lakme",
    "type": "Natural Pearl Foundation",
    "price": "130",
    "MP": "155",
    "offer": 16
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792562/2022/3/25/17bbc36f-c331-42b0-b5ef-0de38fa40d3d1648208654463-Lakme-9To5-Primer--Matte-Perfect-Cover-Foundation---Neutral--1.jpg",
    "brand": "Lakme",
    "type": "Foundation-Neutral Medium N220",
    "price": "437",
    "MP": "475",
    "offer": 8
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/6bb916d7-8f56-4c36-8a41-e1b9dead44e81543029083259-1.jpg",
    "brand": "VLCC",
    "type": "Facial Kit",
    "price": "350",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1954340/2022/4/25/65d4a9b6-a9dd-4d14-b66c-293b5ba647531650873316918-Ponds-Bright-Beauty-Spot-Less-Glow-Face-Wash-with-Vitamins---1.jpg",
    "brand": "Ponds",
    "type": "Bright Beauty Face Wash 100 g",
    "price": "175",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/19ee9b8e-84c9-4bff-b0f1-ae07c7235a951543028025098-1.jpg",
    "brand": "Biotique",
    "type": "BB and CC Cream",
    "price": "151",
    "MP": "199",
    "offer": 24
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629100/2022/3/30/59095c7e-fa6c-40ea-aec8-aa51d83efb621648624226950Lakme9to5WeightlessMiniMousseFoundation-RoseIvory6g1.jpg",
    "brand": "Lakme",
    "type": "9 to 5 Mousse - Rose Ivory",
    "price": "148",
    "MP": "160",
    "offer": 7
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10924304/2022/4/1/ef58e645-ca88-43ee-b54f-82d7c91673f71648804709050FACESCANADAWeightlessStayMatteCompactSPF-20VitaminESheaButte1.jpg",
    "brand": "FACES CANADA",
    "type": "SPF 20 Matte Compact - Sand 04",
    "price": "155",
    "MP": "199",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/62474/2022/3/21/e3c77daa-76fe-4623-b0f6-e3d4d99cb2721647845969213-Maybelline-Lip-Smooth-Color-Changing-Peach-Bloom-Lip-Balm-17-1.jpg",
    "brand": "Maybelline",
    "type": "Peach Bloom Lip Balm 1.7g",
    "price": "135",
    "MP": "180",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/18/ee9cbe99-9a9e-49f8-b603-da69d9cc6c371621319188346-1.jpg",
    "brand": "Plum",
    "type": "Rose Water Toner 100 ml",
    "price": "180",
    "MP": "225",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55276/2022/4/1/3aad48c4-7adb-4c37-9c0d-17a703dc7c381648804698184LakmeRosePowderWithSunscreen1.jpg",
    "brand": "Lakme",
    "type": "Rose Powder With Sunscreen",
    "price": "168",
    "MP": "175",
    "offer": 4
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12678954/2020/10/9/b82a6915-8d35-4510-93e8-249c2b115e541602216132908-Biotique-Advanced-Organics-Apple-Cider-Vinegar-Deep-Cleansin-1.jpg",
    "brand": "Biotique",
    "type": "Women Apple Cider Face Wash",
    "price": "171",
    "MP": "225",
    "offer": 24
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
    "brand": "Livon",
    "type": "Set of 2 Anti-Frizz Hair Serum",
    "price": "415",
    "MP": "500",
    "offer": 17
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837535/2022/3/9/0860bcb0-6525-4ac3-96be-a6b5cee3b9cf1646825666381TRESemmeKeratinSmoothShampoo580ml1.jpg",
    "brand": "TRESemme",
    "type": "Keratin Smooth Shampoo",
    "price": "525",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792552/2022/3/21/825670ab-7b84-4828-8357-e5eb5a45dc421647862301030-Lakme-9-To-5-Primer-And-Matte-Perfect-Cover-Foundation---Coo-1.jpg",
    "brand": "Lakme",
    "type": "Foundation - Cool Rose C140",
    "price": "432",
    "MP": "475",
    "offer": 9
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8667341/2022/4/20/82ce3069-8759-4392-882d-e971a10b06481650452216826-Dove-Hair-Fall-Rescue-Shampoo-For-Weak-Hair-1-l-492165045221-1.jpg",
    "brand": "Dove",
    "type": "Hair Fall Rescue Shampoo",
    "price": "849",
    "MP": null,
    "offer": null
  }
]


mensData(Face)



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
  
   
  let sort1 =   Face.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Face.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Face.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Face.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Face.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Face.sort(function(a,b){
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
  highlanderSort(Face)
})

function highlanderSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 etherSort(Face)
})

function etherSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 USSort(Face)
})

function USSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  for(let i = 0; i<Face.length ;i++){

    if(Face[i].brand == "Roadster"){
       appendarr.push(Face[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Face.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Face)
})

function blueSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 whiteSort(Face)
})

function whiteSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 blackSort(Face)
})

function blackSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 greenSort(Face)
})

function greenSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 greySort(Face)
})

function greySort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
 redSort(Face)
})

function redSort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  p1Sort(Face)
})

function p1Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  p2Sort(Face)
})

function p2Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  p3Sort(Face)
})

function p3Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  off1Sort(Face)
})

function off1Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  off2Sort(Face)
})

function off2Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  off3Sort(Face)
})

function off3Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  off4Sort(Face)
})

function off4Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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
  off5Sort(Face)
})

function off5Sort(Face){
  
  let sortedData = Face.filter(function(elem) {
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