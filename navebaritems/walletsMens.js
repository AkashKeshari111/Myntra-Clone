import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Wallets = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214618/2021/8/21/09ead0b2-bca9-43d6-af11-96758dd051821629487558186MenBrownSolidGenuineLeatherZipAroundWallet1.jpg",
    "brand": "Teakwood Leathers",
    "type": "Mem Textured Two Fold Wallet",
    "price": "799",
    "MP": "1999",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904066/2021/7/22/37afe654-2efb-45f0-b3c5-5949da232d4c1626967626123WildHornMenBrownSolid1.jpg",
    "brand": "WildHorn",
    "type": "Men Solid Two-Fold Wallet",
    "price": "575",
    "MP": "2399",
    "offer": 76
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214620/2021/8/21/52b2cc0c-2ee5-468d-a8bb-459ba94de0ab1629487546139MenBrownSolidGenuineLeatherTwoFoldWallet1.jpg",
    "brand": "Teakwood Leathers",
    "type": "Leather Two Fold Wallet",
    "price": "699",
    "MP": "1749",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11658994/2021/10/30/363104e8-6e34-42e2-b979-d0c26108eebb1635567477042-WildHorn-Men-Green-Solid-RFID-Protected-Leather-Two-Fold-Wal-7.jpg",
    "brand": "WildHorn",
    "type": "Leather Two Fold Wallet",
    "price": "579",
    "MP": "1999",
    "offer": 71
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904050/2021/7/22/63ddd620-a354-4050-b550-adac6de135891626967329052WildHornMenBrownPrinted1.jpg",
    "brand": "WildHorn",
    "type": "Men Printed Two-Fold Wallet",
    "price": "575",
    "MP": "2399",
    "offer": 76
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647838/2021/10/30/585827f3-aa59-4647-8f68-6ada00282f6c1635567191001-WildHorn-Men-Black-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
    "brand": "WildHorn",
    "type": "RFID Protected Leather Wallet",
    "price": "539",
    "MP": "1999",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904086/2021/7/22/d68299c5-f479-45e0-846d-af08482bf78a1626967284512WildHornMenBrownSolid1.jpg",
    "brand": "WildHorn",
    "type": "Leather Two Fold Wallet",
    "price": "575",
    "MP": "2399",
    "offer": 76
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214632/2021/8/21/3d1b5740-8050-4e09-8aa1-c340f9d9fe871629487576992MenTanSolidGenuineLeatherTwoFoldWallet1.jpg",
    "brand": "Teakwood Leathers",
    "type": "Men Solid Two-Fold Wallet",
    "price": "699",
    "MP": "1749",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532782/2021/12/16/50fccd28-6364-4729-a042-11bbd89d81261639644918709ProvogueMenBronzeSolid1.jpg",
    "brand": "Provogue",
    "type": "RFID Two Fold Wallet",
    "price": "389",
    "MP": "1299",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904040/2021/7/22/1e32d782-b609-4953-8116-06dd9f9155231626967393348WildHornMenBlackSolid1.jpg",
    "brand": "WildHorn",
    "type": "Men Solid Two-Fold Wallet",
    "price": "551",
    "MP": "2399",
    "offer": 77
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11281584/2020/1/21/4974621d-19b1-4724-8fdc-d067033325091579591268600-Mast--Harbour-Men-Navy-Blue-Solid-Two-Fold-Wallet-4941579591-1.jpg",
    "brand": "Mast & Harbour",
    "type": "Men Leather Two Fold Wallet",
    "price": "974",
    "MP": "1499",
    "offer": 35
  },
  
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/7/1/d012c347-4f0b-47ff-993b-731b5868a8d51625114961479-1.jpg",
    "brand": "LOUIS STITCH",
    "type": "Leather Two Fold Wallet with RFID",
    "price": "840",
    "MP": "4200",
    "offer": 80
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647832/2021/10/30/95bb5d76-9f0e-4551-ad84-e0d71f2facd31635567170117-WildHorn-Men-Brown-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
    "brand": "WildHorn",
    "type": "RFID Protected Leather Wallet",
    "price": "539",
    "MP": "1999",
    "offer": 73
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5568704/2022/2/25/f3895c8a-28e4-4724-a581-5a5e2969d6a21645781583712-Levis-Men-Brown-Textured-Zip-Around-Wallet-9161645781583145-1.jpg",
    "brand": "Levis",
    "type": "Men Textured Zip Around Wallet",
    "price": "1699",
    "MP": "1999",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/3/0230c309-ef49-4621-8975-bc7071a785cd1593726087790-5.jpg",
    "brand": "Teakwood Leathers",
    "type": "Men Genuine Leather Accessory Gift Set",
    "price": "1399",
    "MP": "3999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/13/21f93cf5-cddf-4fde-bcb4-2a4b4120d9051602542304498-1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "749",
    "MP": "2999",
    "offer": 75
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/b84a3dc8-b4b4-429d-b9cd-1bd89f9032741600383589268-7.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "839",
    "MP": "2999",
    "offer": 72
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/229a3f9a-c226-4c36-89c2-de1cb764ad6f1600989130005-1.jpg",
    "brand": "WildHorn",
    "type": "Men Leather Accessory Gift Set",
    "price": "1049",
    "MP": "2999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/806e9d57-2a10-423e-9698-92945fff5aae1600382535208-7.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "839",
    "MP": "2999",
    "offer": 72
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/77eb9427-1723-470d-aee4-d53c4f6eaa261600985088309-1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "1049",
    "MP": "2999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/a6ce5f89-6222-4697-92fb-199b7e2ff34a1600989614723-1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "1049",
    "MP": "2999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/29/64a72c00-2c97-4f75-a2e2-a00adffd21861582930075221-1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "899",
    "MP": "2999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1410362/2016/6/25/11466848469624-WildHorn-Men-Accessory-Gift-Set-2951466848469482-1.jpg",
    "brand": "WildHorn",
    "type": "Men Accessory Gift Set",
    "price": "1049",
    "MP": "2999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346832/2020/8/27/11a13641-1878-44d8-9e56-2b73caff382a1598538414460WildHornMenBrownGenuineLeatherRFIDProtectedWalletBeltComboGi7.jpg",
    "brand": "WildHorn",
    "type": "Wallet & Belt Combo Gift Set",
    "price": "1139",
    "MP": "2999",
    "offer": 62
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/20/f9a05b21-eeb0-4b1b-88d8-70cb5b2e33d81600552127304-7.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "839",
    "MP": "2999",
    "offer": 72
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346950/2020/8/28/2fecd3b4-07b2-46a9-9f40-da9c108663c41598616777783WildHornMenBrownRFIDProtectedGenuineLeatherAccessoryGiftSet1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "1139",
    "MP": "2999",
    "offer": 62
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/9/724d1bd7-b092-487f-970e-c003a62132381607504341477-1.jpg",
    "brand": "Pacific Gold",
    "type": "Men Genuine Leather Accessory Gift Set",
    "price": "1199",
    "MP": "3999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16167824/2021/11/19/01aa6a70-53ef-4783-be0a-11b54ca1330b1637296234250WildHornLeatherBeltWalletComboforMenLeatherGiftHamperIGiftsf1.jpg",
    "brand": "WildHorn",
    "type": "Men Textured Pure Genuine Leather Accessory Gift Set",
    "price": "1399",
    "MP": "3999",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346868/2020/8/28/df512b3f-62b9-4085-acd0-14a05e67da731598616767379WildHornMenBlackRFIDProtectedGenuineLeatherWalletBeltAccesso1.jpg",
    "brand": "WildHorn",
    "type": "Men RFID Protected Genuine Leather Wallet & Belt Accessory Gift Set",
    "price": "1139",
    "MP": "2999",
    "offer": 62
  }
]


mensData(Wallets)



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
  
   
  let sort1 =   Wallets.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Wallets.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Wallets.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Wallets.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Wallets.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Wallets.sort(function(a,b){
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
  highlanderSort(Wallets)
})

function highlanderSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 etherSort(Wallets)
})

function etherSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 USSort(Wallets)
})

function USSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  for(let i = 0; i<Wallets.length ;i++){

    if(Wallets[i].brand == "Roadster"){
       appendarr.push(Wallets[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Wallets.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Wallets)
})

function blueSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 whiteSort(Wallets)
})

function whiteSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 blackSort(Wallets)
})

function blackSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 greenSort(Wallets)
})

function greenSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 greySort(Wallets)
})

function greySort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
 redSort(Wallets)
})

function redSort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  p1Sort(Wallets)
})

function p1Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  p2Sort(Wallets)
})

function p2Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  p3Sort(Wallets)
})

function p3Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  off1Sort(Wallets)
})

function off1Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  off2Sort(Wallets)
})

function off2Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  off3Sort(Wallets)
})

function off3Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  off4Sort(Wallets)
})

function off4Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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
  off5Sort(Wallets)
})

function off5Sort(Wallets){
  
  let sortedData = Wallets.filter(function(elem) {
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