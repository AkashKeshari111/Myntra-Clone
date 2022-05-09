import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Towels = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2127325/2018/6/11/4891d48d-e3ef-486e-8396-7efa735923a61528700077208-swiss-republic-Set-of-6-Cotton-450-GSM-Towels-9511528700077109-1.jpg",
    "brand": "swiss republic",
    "type": "Set of 6 450 GSM Towels",
    "price": "759",
    "MP": "1899",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6593366/2018/5/31/41792311-8209-481e-a702-d340a72feaa61527749390263-na-1091527749388921-1.jpg",
    "brand": "Story@home",
    "type": "Set of 4 Towels",
    "price": "1438",
    "MP": "3197",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2532373/2022/1/28/dac4d806-793a-4bfe-932e-aea04638920b1643379016426StoryhomeUnisexYellowCotton450GSMSetof12Towels1.jpg",
    "brand": "Story@home",
    "type": "Set of 4 Towels",
    "price": "699",
    "MP": "1998",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/1019ea12-fd3a-43a3-810e-b4895c4646241615894543989-1.jpg",
    "brand": "BIANCA",
    "type": "12 Pcs 500 GSM Face Towel Set",
    "price": "837",
    "MP": "1047",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/a74c8d8d-cfe7-4c2f-bb1a-8e1d2ab921591612885144983-1.jpg",
    "brand": "CORE Designed by SPACES",
    "type": "Set Of 10 Solid 380 GSM Towel Set",
    "price": "1169",
    "MP": "1799",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13623188/2021/2/11/a25058d4-af6a-4e60-b714-a617198fc73d1613017618667COREDesignedbySPACESSetof6Solid380GSMTowelSet1.jpg",
    "brand": "CORE Designed by SPACES",
    "type": "Set of 6 Solid 380 GSM Towel Set",
    "price": "869",
    "MP": "1499",
    "offer": 42
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6593365/2018/5/31/5b7bebbc-a17b-4bb3-8300-8cd306a90a5d1527749379248-na-7301527749378009-1.jpg",
    "brand": "Story@home",
    "type": "Set of 4 Towels",
    "price": "1438",
    "MP": "3197",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/7132dce0-785c-44e0-bee2-3fb7e3ad01bb1615893605112-1.jpg",
    "brand": "BIANCA",
    "type": "Pack of 4 Cotton Towel",
    "price": "758",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/dd8abac9-879d-445f-aa4d-ef4b2ab6abc71612885499942-1.jpg",
    "brand": "CORE Designed by SPACES",
    "type": "Set of 10 Solid 380 GSM Towels",
    "price": "1169",
    "MP": "1799",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2322874/2018/6/11/aacc77de-b62b-4ccf-84fb-73116a1fadb11528700477805-swiss-republic-Set-of-2-Green--Pink-Cotton-450-GSM-Bath-Towels-7351528700477663-1.jpg",
    "brand": "swiss republic",
    "type": "Set of 2 Cotton 450 GSM Bath Towels",
    "price": "679",
    "MP": "1699",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13623184/2021/2/11/dc9401b0-ce1d-4f72-8885-457cd8561e451613017618221COREDesignedbySPACESUnisexSetOf4Solid380GSMTowels1.jpg",
    "brand": "CORE Designed by SPACES",
    "type": "Unisex Set Of 4 Solid 380GSM Towels",
    "price": "869",
    "MP": "1499",
    "offer": 42
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2401435/2022/1/28/e941d3ec-05ac-4f63-aa96-063f304629441643379043311StoryhomeSetof12OffWhiteSolid450GSMFaceTowels1.jpg",
    "brand": "Story@home",
    "type": "Towel Set",
    "price": "699",
    "MP": "1998",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/16/f3114d1a-1ad5-47da-97d3-13fc4356a72f1615898730989-1.jpg",
    "brand": "BIANCA",
    "type": "Set Of 3 Solid 500 GSM Zero-Twist Towels",
    "price": "1128",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/11/9d95b1c9-7745-4e87-8549-da3fe93097ba1613034839807-1.jpg",
    "brand": "RANGOLI",
    "type": "Unisex Set Of 4 Appliqued 450 GSM Towels",
    "price": "1970",
    "MP": "2699",
    "offer": 27
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9164449/2019/4/2/27c72787-7243-4560-acd2-880174a074b91554180048713-Storyhome-Unisex-Set-of-2-Red--Green-Solid-Bath-Towels-41615-1.jpg",
    "brand": "Story@home",
    "type": "Set of 2 Bath Towels",
    "price": "909",
    "MP": "2598",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5453315/2018/5/28/0285753f-7998-4f22-81e5-cd49f2bcc94f1527497805808-Status-Brown--Beige-Striped-Bedside-Runner-1021527497805686-1.jpg",
    "brand": "Status",
    "type": "Striped Bedside Runner",
    "price": "539",
    "MP": "1799",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6707933/2021/11/19/efb584ea-f5a1-48ef-9183-75ba940c7d891637300117925ROMEEBlueBrownSolidACRoom150GSMReversibleDoubleBedComforter1.jpg",
    "brand": "ROMEE",
    "type": "AC Room 150 GSM Comforter",
    "price": "1399",
    "MP": "3999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269901/2019/4/13/3c1c74ce-f2ab-42d6-8658-78f04f6f805a1555137814478-Storyhome-red-1-Piece-Double-Comforter-81555137813324-1.jpg",
    "brand": "Story@home",
    "type": "AC Room 200 GSM Comforter",
    "price": "2399",
    "MP": "3999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6707931/2021/11/18/77f195a2-51a4-4c75-a2b8-ca3972c3e8e61637218871177ROMEEPurplePinkSolidACRoom150GSMReversibleDoubleBedComforter1.jpg",
    "brand": "ROMEE",
    "type": "AC Room 150 GSM Comforter",
    "price": "1199",
    "MP": "3999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2396562/2021/11/19/046d443e-7ce0-455a-b96e-cb237b193e101637313492446StoryhomeWhiteSolidMildWinter210GSMSingleBedComforter1.jpg",
    "brand": "Story@home",
    "type": "Mild Winter 210 GSM Comforter",
    "price": "1649",
    "MP": "2999",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7783052/2022/3/12/c4f6ec78-f4ed-49bc-a79b-b6af4605b8431647069580077StoryhomeBlueWhiteGeometric1QueenBedsheetwith2PillowCovers1.jpg",
    "brand": "Story@home",
    "type": "Queen Bedsheet Pillow Covers",
    "price": "824",
    "MP": "1499",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2130042/2017/9/15/11505475800803-Storyhome-Unisex-Mattress-Protector-3981505475800602-1.jpg",
    "brand": "Story@home",
    "type": "Mattress Protector",
    "price": "974",
    "MP": "1499",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7514110/2018/10/1/d86ef3b1-f943-4f7a-8f61-4c7e5cdac85a1538376865479-999Store-Brown-Wooden-Wall-Mirror-511538376865348-1.jpg",
    "brand": "999Store",
    "type": "Handcrafted Wooden Wall Mirror",
    "price": "4999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4248624/2018/3/16/11521177187759-RANDOM-Off-White-Round-Printed-Analogue-Wall-Clock-3561521177187524-1.jpg",
    "brand": "RANDOM",
    "type": "30.48 cm Analogue Wall Clock",
    "price": "689",
    "MP": "1499",
    "offer": 54
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2486196/2018/2/14/11518595577062-na-5191518595576825-1.jpg",
    "brand": "Story@home",
    "type": "Mattress Protector",
    "price": "974",
    "MP": "1499",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4448731/2022/3/12/a8168251-58af-4132-aee1-89906717960f1647071861057DivineCasaBrownBeigeEthnicMotifsFlat144TCCotton1QueenBedshee1.jpg",
    "brand": "Divine Casa",
    "type": "144 TC 1 Queen Bedsheet with 2 Pillow Covers",
    "price": "770",
    "MP": "1000",
    "offer": 23
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4447671/2018/4/3/11522750669202-Romee-White-Cotton-Microfiber-Pillow-17-inch-x-27-inch-Set-of-2-971522750669146-1.jpg",
    "brand": "ROMEE",
    "type": "Pillow",
    "price": "458",
    "MP": "1699",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269913/2021/12/3/2acb9aef-b66e-414f-9b83-ad962d40b1241638507857825StoryhomeLimeGreenNavyBlueSolidACRoom200GSMDoubleBedComforte1.jpg",
    "brand": "Story@home",
    "type": "AC Room 200 GSM Comforter",
    "price": "2399",
    "MP": "3999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1558106/2017/4/18/11492514480662-eCraftIndia-White-Dial-Handcrafted-Analogue-Wall-Clock-691492514480513-1.jpg",
    "brand": "eCraftIndia",
    "type": "35.56 cm Analogue Wall Clock",
    "price": "1044",
    "MP": "1899",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269905/2021/11/19/34b2066a-bffe-4d30-9e39-ad59162dc0db1637313556920StoryhomeRedNavyBlueSolidACRoom200GSMSingleBedComforter1.jpg",
    "brand": "Story@home",
    "type": "AC Room 200 GSM Comforter",
    "price": "1799",
    "MP": "2999",
    "offer": 40
  }
]



mensData(Towels)



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
  
   
  let sort1 =   Towels.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Towels.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Towels.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Towels.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Towels.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Towels.sort(function(a,b){
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
  highlanderSort(Towels)
})

function highlanderSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 etherSort(Towels)
})

function etherSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 USSort(Towels)
})

function USSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  for(let i = 0; i<Towels.length ;i++){

    if(Towels[i].brand == "Roadster"){
       appendarr.push(Towels[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Towels.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Towels)
})

function blueSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 whiteSort(Towels)
})

function whiteSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 blackSort(Towels)
})

function blackSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 greenSort(Towels)
})

function greenSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 greySort(Towels)
})

function greySort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
 redSort(Towels)
})

function redSort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  p1Sort(Towels)
})

function p1Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  p2Sort(Towels)
})

function p2Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  p3Sort(Towels)
})

function p3Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  off1Sort(Towels)
})

function off1Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  off2Sort(Towels)
})

function off2Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  off3Sort(Towels)
})

function off3Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  off4Sort(Towels)
})

function off4Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
  off5Sort(Towels)
})

function off5Sort(Towels){
  
  let sortedData = Towels.filter(function(elem) {
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
