import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


 
let HairStraightener  = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9375005/2019/5/8/bf565462-b571-4c65-9e0e-ecaafc8b6d801557312258867-Philips-Women-Hair-Appliance-3831557312258283-1.jpg",
    "brand": "Philips",
    "type": "HP8120/00 Hair Dryer",
    "price": "1102",
    "MP": "1345",
    "offer": 18
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/30/cfda1d1b-7054-455b-be9f-56ba149d67731575065114849-1.jpg",
    "brand": "Ikonic",
    "type": "Women DIVA Hair Straightener",
    "price": "4200",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9375035/2022/4/12/4e673a43-c609-4d58-96d1-b57d78628f9d1649748061359PhilipsHP864346MissFreshersStraightenerHairdryerStylingKit1.jpg",
    "brand": "Philips",
    "type": "HP8643/46 Straightener & Dryer",
    "price": "1858",
    "MP": "2295",
    "offer": 19
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12800108/2021/8/31/79a232dc-b05d-4d92-b1fc-68ff2eadfc861630404010381-Vega-Women-Keratin-3-in-1-Hair-Styler-VHSCC-03-4261630404009-1.jpg",
    "brand": "VEGA",
    "type": "Women Keratin 3 in 1 Styler",
    "price": "1715",
    "MP": "2199",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13507848/2021/2/15/c082731b-f64b-4878-8628-a4f4c6502da81613394624242-Philips-Women-Hair-Appliance-8201613394621991-1.jpg",
    "brand": "Philips",
    "type": "Thermo Protect Hair Dryer",
    "price": "1996",
    "MP": "2495",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5589986/2020/11/17/9dc798fa-d74e-4f8e-bf2b-66da3881861f1605624172359-Ikonic-ProTitanium-Black-Shine-Hair-Straightner-816160562417-1.jpg",
    "brand": "Ikonic",
    "type": "Hair Straightener",
    "price": "7000",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9374997/2021/7/30/2613e26e-1c13-4054-8ad5-1841e8436a6b1627637166814-Philips-HP810046-SalonDry-ThermoProtect-1000W-Compact-Hair-D-1.jpg",
    "brand": "Philips",
    "type": "HP8100/46 SalonDry Hair Dryer",
    "price": "761",
    "MP": "875",
    "offer": 13
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/9/21/02db46a6-130c-4932-b923-54d0b7cebb781569054832778-1.jpg",
    "brand": "Ikonic",
    "type": "Mini Iron Hair Straightener",
    "price": "1575",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4609758/2020/11/17/b19c4281-a912-46d7-adae-50df222020161605624131789-Ikonic-Glam-All-In-1-Black-Hair-Straightner-8111605624130331-1.jpg",
    "brand": "Ikonic",
    "type": "Hair Straightener",
    "price": "3500",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12445350/2020/11/23/b538625c-34f4-4ece-92a7-64212506733f1606148686922-Philips-Women-Hair-Appliance-1361606148686636-1.jpg",
    "brand": "Philips",
    "type": "Ionic Styling Brush HP4722/20",
    "price": "1621",
    "MP": "2495",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15285148/2022/2/17/a16d60fa-ca81-4936-a723-5f0054cd3d981645105127888SYSKASuperglamHS1050HairStraightener-Pink1.jpg",
    "brand": "SYSKA",
    "type": "HS1050 Hair Straightener",
    "price": "2399",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5910805/2021/11/18/e52f1553-ee81-4d4d-9a1b-c59247a8ae0a1637187853482-VEGA-VHSS-03-Miss-Versatile-Hair-Styling-Set---Color-May-Var-15.jpg",
    "brand": "VEGA",
    "type": "VHSS-03 Hair Styling Set",
    "price": "2463",
    "MP": "3199",
    "offer": 23
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15285146/2022/2/17/91ec9287-a782-4ebe-b685-8bad0bb13a451645105129878SYSKASuperglamHS1050HairStraightener-Black1.jpg",
    "brand": "SYSKA",
    "type": "HS1050 Hair Straightener",
    "price": "2399",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13525942/2021/7/18/d28421e0-1bb5-4173-b003-ca0c06ef235b1626591259654-Groomiist-Gold-Series-Multi-Functional-3-in-1-Hair-Straighte-1.jpg",
    "brand": "Groomiist",
    "type": "3 in 1 Hair Straightener",
    "price": "1418",
    "MP": "2446",
    "offer": 42
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12107582/2022/1/4/36c018c7-84cb-4f54-bc0f-43d60888ed2b1641292301018-Dyson-Airwrap-Complete-Hair-Styler---Red--Gunmetal-Toned-386-1.jpg",
    "brand": "dyson",
    "type": "Airwrap Complete Hair Styler",
    "price": "44900",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10849124/2022/4/19/06ab8810-6393-4bd9-bd0a-100a2336a8b61650366021829MaybellineNewYorkTheNudesEyeshadowPalette-Blush9g1.jpg",
    "brand": "Maybelline",
    "type": "Eyeshadow Palette - Blush",
    "price": "769",
    "MP": "905",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14240272/2021/10/27/b81763f1-882b-4456-8daf-3ea9ad5a65351635328781676PlumCandyMeltsVeganLipBalm-RedVelvetLove-12g1.jpg",
    "brand": "Plum",
    "type": "Lip Balm - Red Velvet Love",
    "price": "250",
    "MP": "295",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12838504/2020/11/6/969cf5be-f93e-4a7f-9530-35052ff0d0601604661793589-Makeup-Revolution-London-Women-Makeup-Kit-2541604661793399-1.jpg",
    "brand": "Makeup Revolution London",
    "type": "Set of Eyeshadow & Highlighter",
    "price": "1200",
    "MP": "2400",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2174520/2021/7/27/157153cf-f7a9-4b1f-be3f-a4a4e99143451627402418673-SUGAR-Arrested-For-Overstay-Water-Proof-I-Will-Be-Black-Eyel-4.jpg",
    "brand": "SUGAR",
    "type": "I Will Be Black Eyeliner 01",
    "price": "899",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13748724/2021/3/1/ec213bae-9f25-482a-8f6e-aafaa63950b21614600616670-Makeup-Revolution-London-Women-Eyeshadow-2581614600616483-1.jpg",
    "brand": "Makeup Revolution London",
    "type": "Set of 2 Reloaded Eyeshadows",
    "price": "840",
    "MP": "2100",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16674826/2022/1/4/709c861b-be7b-4060-95ab-3c5fa4d9245a1641284103230AllureBlendingBrush-SGK-228s1.jpg",
    "brand": "ALLURE",
    "type": "Blending Makeup Eye Brush",
    "price": "278",
    "MP": "299",
    "offer": 7
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10235945/2022/1/27/4dbe4a3b-9195-4b9f-ad5c-a7640e3fef9a1643279843160PondsSuperLightGelOilFreeMoisturiserwithHyaluronicAcidVitami1.jpg",
    "brand": "Ponds",
    "type": "Light Gel Oil Free Moisturiser",
    "price": "309",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15605464/2021/9/26/bfa862ed-b626-4c44-9fdd-eeda2b0c02b21632616438753ColorbarKosherJadeFacialRoller1.jpg",
    "brand": "Colorbar",
    "type": "Kosher Jade Facial Roller",
    "price": "1312",
    "MP": "1750",
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/12/66f9c4fb-2571-4c0a-ae3f-44bd270afc1d1618208092879-1.jpg",
    "brand": "MISS ROSE",
    "type": "Set Of 6 Matte Liquid Lipgloss",
    "price": "1299",
    "MP": "3299",
    "offer": 2000
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14172246/2022/4/29/50d3b62a-21d7-4f54-a61f-77797b34ebf51651215613044-Garnier-Bright-Complete-VITAMIN-C-Booster-Face-Serum-30ml-31-1.jpg",
    "brand": "Garnier",
    "type": "VITAMIN C Bright Face Serum",
    "price": "549",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14254354/2022/3/22/40e8fae2-e8f7-49ae-9723-39bf6763c0541647947204182-FACES-CANADA-Ultime-Pro-Sun-Defense-CC-Cream-Luxe-SPF-50-Ivo-1.jpg",
    "brand": "FACES CANADA",
    "type": "Luxe SPF 50 Ivory 01",
    "price": "799",
    "MP": "999",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2421530/2022/4/25/3813980e-3d5e-4de0-9878-2ad3d9b567091650869407873FACESCANADAUltimeProMakeupFixer1.jpg",
    "brand": "FACES CANADA",
    "type": "Ultime Pro Makeup Fixer",
    "price": "506",
    "MP": "649",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15352458/2022/4/3/ccb1089d-aa8c-41bb-bc92-5c101e4f67211648967341839SKINKRAFTCustomizedSevereAcneKit1.jpg",
    "brand": "SKINKRAFT",
    "type": "Customized Severe Acne Kit",
    "price": "1348",
    "MP": "2697",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4425793/2020/10/10/55d1289f-174d-4ab3-90bc-524113ca10731602269397669WetnWildBlushBrushEC796White1.jpg",
    "brand": "Wet n Wild",
    "type": "Blush Brush EC796",
    "price": "263",
    "MP": "425",
    "offer": 38
  }
] 


  
mensData(HairStraightener)



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
  
   
  let sort1 =   HairStraightener.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   HairStraightener.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   HairStraightener.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   HairStraightener.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   HairStraightener.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   HairStraightener.sort(function(a,b){
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
  highlanderSort(HairStraightener)
})

function highlanderSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 etherSort(HairStraightener)
})

function etherSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 USSort(HairStraightener)
})

function USSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  for(let i = 0; i<HairStraightener.length ;i++){

    if(HairStraightener[i].brand == "Roadster"){
       appendarr.push(HairStraightener[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // HairStraightener.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(HairStraightener)
})

function blueSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 whiteSort(HairStraightener)
})

function whiteSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 blackSort(HairStraightener)
})

function blackSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 greenSort(HairStraightener)
})

function greenSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 greySort(HairStraightener)
})

function greySort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
 redSort(HairStraightener)
})

function redSort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  p1Sort(HairStraightener)
})

function p1Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  p2Sort(HairStraightener)
})

function p2Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  p3Sort(HairStraightener)
})

function p3Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  off1Sort(HairStraightener)
})

function off1Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  off2Sort(HairStraightener)
})

function off2Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  off3Sort(HairStraightener)
})

function off3Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  off4Sort(HairStraightener)
})

function off4Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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
  off5Sort(HairStraightener)
})

function off5Sort(HairStraightener){
  
  let sortedData = HairStraightener.filter(function(elem) {
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