
import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()

 

  let Hand = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16330780/2021/12/2/f9a8ad65-c105-4606-8c8f-070e5f95983e1638426233222StoryhomeSetOf4WhiteSolidPureCotton450GSMHandTowels1.jpg",
      "brand": "Story@home",
      "type": "Set Of 4 Solid Pure Cotton 450 GSM Hand Towels",
      "price": "601",
      "MP": "1398",
      "offer": 57
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12196610/2021/10/12/9a596654-b7ad-4d35-b900-66c5a9035f441634024915910-Trident-Unisex-Set-Of-4-Brown--White-Striped-380-GSM-Comfort-1.jpg",
      "brand": "Trident",
      "type": "Unisex Set Of 4 Striped 380 GSM Comfort Living Coconut Shell Hand Towels",
      "price": "539",
      "MP": "899",
      "offer": 40
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16330774/2021/12/2/f06395ac-46fd-4791-8625-3f9fe1f4c9db1638425517844StoryhomeSetOf4OrangeSolid450GSMPureCottonHandTowels1.jpg",
      "brand": "Story@home",
      "type": "4 Pure Cotton Hand Towels",
      "price": "601",
      "MP": "1398",
      "offer": 57
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15576088/2021/9/24/762f808e-4cf1-48c1-af89-16402b1b73a01632443544524ArrabiMultiStripesHandwovenCottonHandTowelSetof41.jpg",
      "brand": "Arrabi",
      "type": "Set of 4 Striped Handwoven 210 GSM Hand Towels",
      "price": "500",
      "MP": "1669",
      "offer": 70
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13995884/2021/10/12/69edf8a5-123d-4eab-b1f2-accebe70dbc31634032981931StoryhomeSetOf4SolidCotton450GSMHandTowels1.jpg",
      "brand": "Story@home",
      "type": "Set Of 4 Solid 450 GSM Hand Towels",
      "price": "601",
      "MP": "1398",
      "offer": 57
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16384662/2021/12/6/6f4708bc-9ea0-4621-9fd9-8b5cf890c3131638798782399ArrabiBlueStripesHandwovenCottonHandTowelSetof51.jpg",
      "brand": "Arrabi",
      "type": "Set Of 5 Striped Cotton Hand Towel",
      "price": "548",
      "MP": "1829",
      "offer": 70
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15576072/2021/9/23/644876f4-c594-468b-95f6-659e686fd8631632401585512ArrabiBlueStripesHandwovenCottonHandTowelSetof51.jpg",
      "brand": "Arrabi",
      "type": "Set Of 5 Striped Hand-Woven 210 GSM Cotton Hand Towels",
      "price": "548",
      "MP": "1829",
      "offer": 70
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14694502/2021/10/12/b9b794d1-b2fa-4e3e-ad50-8ff288411d3b1634032948988BIANCANavyBlueSetOf4MercerizedCotton450GSMBumpy-StripedHandT1.jpg",
      "brand": "BIANCA",
      "type": "4-Pieces 450 GSM Hand Towels",
      "price": "555",
      "MP": "750",
      "offer": 26
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16881076/2022/1/20/1b0b462c-494e-4548-ab45-53809c2f87761642650412959AVILivingHandTowelCombo2Pieces-PureCottonUltraSoftSuperAbsor1.jpg",
      "brand": "AVI Living",
      "type": "Set Of 2 Pure Cotton Towel",
      "price": "599",
      "MP": "999",
      "offer": 40
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16084258/2021/11/13/dfeafdd4-1f0e-4092-9eea-cbef49da600a1636791941378AVILivingSetof2BatmanHandTowel500GSMBlackWhiteWithYellowBord1.jpg",
      "brand": "AVI Living",
      "type": "Set Of 2 Batman 500 GSM Towels",
      "price": "602",
      "MP": "849",
      "offer": 29
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178160/2021/10/12/d172812e-d274-4524-a8c4-1e04971677211634026363859-Heelium-Set-of-3-Solid-600-GSM-Quick-Absorbent-Sports--Gym-H-1.jpg",
      "brand": "Heelium",
      "type": "Set of 3 600 GSM Sports Hand Towel",
      "price": "999",
      "MP": "1499",
      "offer": 500
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17049244/2022/2/4/17842b95-140c-40fe-bc44-c74fa707e55d1643970955031MasparColorartWindsor550GSMCottonSelfJacquardMangoHandTowel1.jpg",
      "brand": "MASPAR",
      "type": "Pack of 2 550 GSM Hand Towels",
      "price": "499",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16881066/2022/1/19/f887e8e5-7ccc-4413-a5d3-1ba8b2e0f6c71642599651207AVILivingHandTowelCombo2PiecesUltraSoftSuperAbsorbent1.jpg",
      "brand": "AVI Living",
      "type": "Pack of 2 500 GSM Hand Towel",
      "price": "575",
      "MP": "899",
      "offer": 36
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14361634/2021/10/13/c1669713-2f16-4236-b916-e82b0957c6051634108197551-BIANCA-Set-Of-2-Purple--Orange-Solid-450-GSM-Mercerized-Comb-1.jpg",
      "brand": "BIANCA",
      "type": "Set Of 2 Solid 450 GSM Mercerized Combed Cotton Hand Towels",
      "price": "285",
      "MP": "375",
      "offer": 24
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14765732/2021/10/12/52d46bc4-475d-4bd4-bf2f-c8881750d8181634031535477-DDecor-Set-Of-2-Brown-Solid-650-GSM-Live-Beautiful-Cotton-Ha-1.jpg",
      "brand": "DDecor",
      "type": "Set Of 2 Solid 650 GSM Live Beautiful Cotton Hand Towels",
      "price": "699",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/2/e5f83a66-913b-429c-b9ba-c49cf40d14fe1609571102436-1.jpg",
      "brand": "REME",
      "type": "Digital Floral Printed Organic-Cotton Heavy Winter 150 GSM Sustainable Double Bed Quilt",
      "price": "9999",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14807964/2022/3/14/f0caa86a-7e02-43cc-a3f6-44dcb2f82d1a1647240976872BLUEDAHLIABlue400TCKingBedsheetwith2PillowCovers1.jpg",
      "brand": "BLUE DAHLIA",
      "type": "400 TC King Superfine Bedsheet with 2 Pillow Covers",
      "price": "2549",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15244518/2021/8/24/7054aa11-865d-4a1e-84f2-08f936292f001629818958701WhiteGoldPorcelainCoffeeMugSetof2pcs1.jpg",
      "brand": "White Gold",
      "type": "Set of 2 Porcelain Glossy Mugs",
      "price": "1110",
      "MP": "1915",
      "offer": 42
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/2a056a31-b0be-4eed-ae9b-9d8ed2500f1c1625042462379-1.jpg",
      "brand": "Stoa Paris",
      "type": "Set Of 2 Solid 144 TC Cotton Pillow Covers",
      "price": "399",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14031718/2022/3/15/a973f199-1847-41f8-bf27-565005ce8a0d1647333107570TaaviWhiteMustardYellowHandBlockPrint120TCQueenBedsheetwith21.jpg",
      "brand": "Taavi",
      "type": "Bedsheet with 2 Pillow Covers",
      "price": "1074",
      "MP": "4299",
      "offer": 75
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/19/5d683b52-5313-4493-b9b9-b33c8e62fae71616138248726-1.jpg",
      "brand": "KLOTTHE",
      "type": "Set Of 2 King Bed Covers",
      "price": "2915",
      "MP": "8329",
      "offer": 65
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15115774/2021/8/11/8190d962-e20c-4703-8a2d-7448e7d166631628701921502ArrabiGreenChecksHandwovenCottonDoubleKingSizeBedsheetwith2P1.jpg",
      "brand": "Arrabi",
      "type": "300 TC King 2 Pillow Covers",
      "price": "1700",
      "MP": "5669",
      "offer": 70
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/b28ae20e-2b97-45e4-9693-772a83d984fc1611740640767-1.jpg",
      "brand": "REME",
      "type": "Heavy Winter 150 GSM Quilt",
      "price": "9999",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/16/3c2ee74a-5cb0-41e0-9749-d5b17a2bd1cb1623859342114-1.jpg",
      "brand": "Himeya",
      "type": "300 TC King 2 Pillow Covers",
      "price": "3009",
      "MP": "4299",
      "offer": 30
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/b3380e3d-2adb-4067-9246-c156a73fb5101625062802299-1.jpg",
      "brand": "Stoa Paris",
      "type": "144 TC King 4 Pillow Covers",
      "price": "1987",
      "MP": "2799",
      "offer": 29
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/10/401f7305-d90e-4861-a940-c97dda502faa1612959122726-1.jpg",
      "brand": "REME",
      "type": "AC Room 150 GSM Quilt",
      "price": "7999",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/704ce1b1-817d-4d7c-b193-4b738e3c74d51611741631200-1.jpg",
      "brand": "REME",
      "type": "Heavy Winter 150 GSM Quilt",
      "price": "9999",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13349726/2022/3/15/8bd82cf6-e975-4954-8866-80310af8c4141647332700197MARKHOMEWhiteSolid200TCDoubleQueenCottonBedsheetwithTwoPillo1.jpg",
      "brand": "MARK HOME",
      "type": "200 TC Double Queen Bedsheet",
      "price": "1699",
      "MP": "2199",
      "offer": 1000
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14903466/2021/7/23/163c7694-d41e-48ae-853d-9fb9c9a3e5ff1627014047402KLOTTHEGreenBlackCheckedCottonDoubleKingBedcoverWith2PillowC1.jpg",
      "brand": "KLOTTHE",
      "type": "Checked Cotton Double King Bedcover With 2 Pillow Covers",
      "price": "1397",
      "MP": "4659",
      "offer": 70
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/19/6922c33b-31bb-4d2f-9b43-eeabdbf65aee1616142857120-1.jpg",
      "brand": "KLOTTHE",
      "type": "Set Of 2 Striped Double King Bed Covers with 4 Pillow Covers",
      "price": "2915",
      "MP": "8329",
      "offer": 65
    }
  ]


  mensData(Hand)
  
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
  
   
  let sort1 =   Hand.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Hand.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Hand.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Hand.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Hand.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Hand.sort(function(a,b){
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
  highlanderSort(Hand)
})

function highlanderSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 etherSort(Hand)
})

function etherSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 USSort(Hand)
})

function USSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  for(let i = 0; i<Hand.length ;i++){

    if(Hand[i].brand == "Roadster"){
       appendarr.push(Hand[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Hand.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Hand)
})

function blueSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 whiteSort(Hand)
})

function whiteSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 blackSort(Hand)
})

function blackSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 greenSort(Hand)
})

function greenSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 greySort(Hand)
})

function greySort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
 redSort(Hand)
})

function redSort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  p1Sort(Hand)
})

function p1Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  p2Sort(Hand)
})

function p2Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  p3Sort(Hand)
})

function p3Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  off1Sort(Hand)
})

function off1Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  off2Sort(Hand)
})

function off2Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  off3Sort(Hand)
})

function off3Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  off4Sort(Hand)
})

function off4Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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
  off5Sort(Hand)
})

function off5Sort(Hand){
  
  let sortedData = Hand.filter(function(elem) {
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