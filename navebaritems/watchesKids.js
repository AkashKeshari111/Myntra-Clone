import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Watches = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17016076/2022/2/2/3678f0f5-cb6b-4fb6-a507-f6bb5a3153b51643794698709KoolKidzUnisexKidsMulticolouredBrassPrintedDialGreenStrapsAn1.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Brass Dial & Watch",
    "price": "660",
    "MP": "695",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16609502/2021/12/24/c6509ab9-7c7c-48e3-8445-d467140db07e1640352962949KOOLKIDZKK106DARKPINK021.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Leather Straps Watch",
    "price": "420",
    "MP": "495",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268860/2022/2/24/813b6d94-b553-465c-9aa9-6b90261e6de81645676915553DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
    "brand": "Disney",
    "type": "Unisex Kids Automatic Watch",
    "price": "949",
    "MP": "999",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16042606/2021/11/9/e67bdbd2-06ca-4b9c-91ff-942c2aebc6bf1636459218400SpikyRoundAnalogueWatchesBellerRW_Renbow1.jpg",
    "brand": "Spiky",
    "type": "Unisex Kids Multi Function Watch",
    "price": "549",
    "MP": "999",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16609512/2021/12/24/7edc9e27-e08e-4725-9c34-f6984aada5be1640352113726KOOLKIDZKK106DARKPINK011.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Leather Straps Watch",
    "price": "420",
    "MP": "495",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/20/33d8f1c2-079b-494a-9ef7-88882a8b58fa1616222499672-1.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Digital Watch",
    "price": "660",
    "MP": "695",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16890402/2022/1/20/817b7823-3e9e-437f-b93f-6a7e5609e3141642681963474KoolKidzUnisexKidsPinkBrassPrintedDialPinkStrapsAnalogueWatc1.jpg",
    "brand": "Kool Kidz",
    "type": "Kids Brass Dial & Watch",
    "price": "531",
    "MP": "625",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268858/2022/2/24/1c8b6649-d03a-4a2b-97ac-cb4e8aa9f68e1645675391293DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
    "brand": "Disney",
    "type": "Kids Disney Princess Watch",
    "price": "949",
    "MP": "999",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17469294/2022/3/10/dcc4f664-c164-4a2a-a09e-b591735388ae1646906062375SpikyUnisexKidsWhiteDialMulticolouredLeatherStrapsAnalogueWa1.jpg",
    "brand": "Spiky",
    "type": "Kids Leather Straps Watch",
    "price": "549",
    "MP": "999",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14879050/2021/7/20/b802044f-8b98-4efa-bd56-f99306b253191626774183199KoolKidzUnisexKidsMulticolouredPrintedDialBlueStrapsAnalogue1.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Watch",
    "price": "562",
    "MP": "625",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268872/2022/2/24/1031d740-011c-435e-b540-dc93644332941645675344069DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
    "brand": "Disney",
    "type": "Unisex Kids Automatic Watch",
    "price": "949",
    "MP": "999",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/20/dea1dc87-9ed5-4316-ab4b-f7da27ef05841616222460811-1.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Digital Watch",
    "price": "660",
    "MP": "695",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16513032/2021/12/14/b7198a9b-f031-410f-bf8e-288f1a4967c51639472065534KoolKidzUnisexKidsMulticolouredDialGoldTonedLeatherBraceletS1.jpg",
    "brand": "Kool Kidz",
    "type": "Unisex Kids Leather Straps Watch",
    "price": "535",
    "MP": "595",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17271068/2022/2/24/78ef25f2-91fd-4fce-8a14-b6fe081504211645683066719MarvelUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
    "brand": "Marvel",
    "type": "Unisex Kids Watch",
    "price": "935",
    "MP": "1299",
    "offer": 28
  }
]


mensData(Watches)



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
  
   
  let sort1 =   Watches.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Watches.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Watches.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Watches.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Watches.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Watches.sort(function(a,b){
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
  highlanderSort(Watches)
})

function highlanderSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 etherSort(Watches)
})

function etherSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 USSort(Watches)
})

function USSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  for(let i = 0; i<Watches.length ;i++){

    if(Watches[i].brand == "Roadster"){
       appendarr.push(Watches[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Watches.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Watches)
})

function blueSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 whiteSort(Watches)
})

function whiteSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 blackSort(Watches)
})

function blackSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 greenSort(Watches)
})

function greenSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 greySort(Watches)
})

function greySort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
 redSort(Watches)
})

function redSort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  p1Sort(Watches)
})

function p1Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  p2Sort(Watches)
})

function p2Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  p3Sort(Watches)
})

function p3Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  off1Sort(Watches)
})

function off1Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  off2Sort(Watches)
})

function off2Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  off3Sort(Watches)
})

function off3Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  off4Sort(Watches)
})

function off4Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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
  off5Sort(Watches)
})

function off5Sort(Watches){
  
  let sortedData = Watches.filter(function(elem) {
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