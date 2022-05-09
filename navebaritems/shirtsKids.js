import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()



let Shirts = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17059980/2022/2/5/e702aa94-661a-4728-88f4-0e01fd80c2c01644046193591CrimsouneClubBoysBluePrintedCasualShirt1.jpg",
    "brand": "Crimsoune Club",
    "type": "Pure Cotton Printed Shirt",
    "price": "1399",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16837282/2022/1/14/d3ff4b4a-cef1-4878-9092-bd57d16c89201642176044477AllenSollyJuniorBoysWhiteSlimFitPrintedCasualShirt1.jpg",
    "brand": "Allen Solly Junior",
    "type": "Slim Fit Casual Shirt",
    "price": "1199",
    "MP": "1499",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15862506/2021/10/20/8384b33c-1382-478c-81ab-c4d6b15b72cf1634734688125Ed-a-MammaBoysRedPremiumOpaqueStripedCasualShirt1.jpg",
    "brand": "Ed-a-Mamma",
    "type": "Opaque Casual Shirt",
    "price": "849",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12685840/2021/4/29/9131e30b-33a2-436f-b7df-c44bc085b8ac1619678950821URBANSCOTTISHBoysGreenRegularFitPrintedCasualShirt1.jpg",
    "brand": "URBAN SCOTTISH",
    "type": "Boys Regular Fit Casual Shirt",
    "price": "854",
    "MP": "1899",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17352780/2022/3/2/a8259656-b3f4-45a4-b7c3-7e4de9907b431646231670174OctaveBoysOliveGreenCasualShirt1.jpg",
    "brand": "Octave",
    "type": "Boys Cotton Casual Shirt",
    "price": "1249",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16913606/2022/3/7/0fcefe52-c48a-41cf-a7bb-b5487fb108471646635742022-mothercare-Boys-Shirts-5771646635741542-1.jpg",
    "brand": "mothercare",
    "type": "Boys Cotton Checked Shirt",
    "price": "1499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14812088/2021/7/29/85340101-61e7-40c9-b283-1ab7103365d91627549592647-TONYBOY-Boys-Full-Sleeve-Solid-Shirt---LtYellow1-97516275495-1.jpg",
    "brand": "TONYBOY",
    "type": "Opaque Casual Shirt",
    "price": "844",
    "MP": "1299",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16037058/2021/11/9/26cc7ed2-fbfc-4071-b50b-7ae9ae01042c1636440813492FabindiaBoysRedOpaquePrintedCasualShirt1.jpg",
    "brand": "Fabindia",
    "type": "Opaque Casual Shirt",
    "price": "699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17034018/2022/2/3/cca16c7f-7c62-4ad7-a284-c65518aa8f4d1643887534111LilLollipopBoysNavyBlueCasualShirt1.jpg",
    "brand": "Lil Lollipop",
    "type": "Pure Cotton Casual Shirt",
    "price": "654",
    "MP": "1090",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4945544/2018/4/25/11524640047871-Allen-Solly-Junior-Boys-Shirts-3901524640047801-1.jpg",
    "brand": "Allen Solly Junior",
    "type": "Boys Regular Fit Casual Shirt",
    "price": "1199",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17423218/2022/3/7/91caffc6-3b1e-4a76-a6bf-3666baaa31b31646662547618MANETBoysRedClassicPrintedPartyShirt1.jpg",
    "brand": "MANET",
    "type": "Boys Casual Cotton Shirt",
    "price": "799",
    "MP": "1599",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16544284/2021/12/17/4fd34549-c2fd-4e62-81d7-94fe7c8aa44a1639738924905UNDERFOURTEENONLYBoysOrangeCheckedCasualShirt1.jpg",
    "brand": "UNDER FOURTEEN ONLY",
    "type": "Boys Casual Shirt",
    "price": "799",
    "MP": "999",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16686454/2022/3/24/bf235f45-8069-4876-8715-edbf7fbd68961648112411560-US-Polo-Assn-Kids-Boys-Burgundy-Regular-Fit-Conversational-O-1.jpg",
    "brand": "U.S. Polo Assn. Kids",
    "type": "Regular Fit Cotton Casual",
    "price": "1499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15275864/2021/9/16/46df12bb-0378-4498-8e44-37129537cb6c1631774832709-Allen-Solly-Junior-Boys-Shirts-7761631774831604-1.jpg",
    "brand": "Allen Solly Junior",
    "type": "Boys Boxy Cotton Casual Shirt",
    "price": "779",
    "MP": "1299",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17042622/2022/2/4/6c000dc3-a892-4e91-90e1-94bf037eaa911643916008187CAVIOBoysGreenPrintedPartyShirt1.jpg",
    "brand": "CAVIO",
    "type": "Party Shirt",
    "price": "973",
    "MP": "1390",
    "offer": 30
  }
]
mensData(Shirts)




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
  
   
  let sort1 =   Shirts.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Shirts.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Shirts.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Shirts.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Shirts.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Shirts.sort(function(a,b){
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
  highlanderSort(Shirts)
})

function highlanderSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 etherSort(Shirts)
})

function etherSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 USSort(Shirts)
})

function USSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  for(let i = 0; i<Shirts.length ;i++){

    if(Shirts[i].brand == "Roadster"){
       appendarr.push(Shirts[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Shirts.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Shirts)
})

function blueSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 whiteSort(Shirts)
})

function whiteSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 blackSort(Shirts)
})

function blackSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 greenSort(Shirts)
})

function greenSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 greySort(Shirts)
})

function greySort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
 redSort(Shirts)
})

function redSort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  p1Sort(Shirts)
})

function p1Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  p2Sort(Shirts)
})

function p2Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  p3Sort(Shirts)
})

function p3Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  off1Sort(Shirts)
})

function off1Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  off2Sort(Shirts)
})

function off2Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  off3Sort(Shirts)
})

function off3Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  off4Sort(Shirts)
})

function off4Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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
  off5Sort(Shirts)
})

function off5Sort(Shirts){
  
  let sortedData = Shirts.filter(function(elem) {
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