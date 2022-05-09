import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Flats = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10332219/2019/8/30/faba247e-5f1b-4694-801e-b18129c33ddd1567172536837-Taavi-Women-Rust-Coloured-Printed-Mules-151567172535985-1.jpg",
    "brand": "Taavi",
    "type": "Women Ikat Mules",
    "price": "854",
    "MP": "1899",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15682024/2021/11/25/ce6f33c8-26e3-4fe9-868e-4c91351a9be41637830952702-Shoetopia-Women-Peach-Coloured-Printed-Ballerinas-Flats-8816-7.jpg",
    "brand": "Shoetopia",
    "type": "Women Ballerinas Flats",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12384416/2020/9/1/12106de8-7db9-4bb0-8611-b8055c1184451598963814316ShoetopiaWomenPinkSolidBallerinas1.jpg",
    "brand": "Shoetopia",
    "type": "Women Ballerinas",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11365474/2020/2/11/79b4d4bb-67ca-40fb-a7a6-cfbdf6d7c7321581423071776-Marc-Loire-Women-Grey--Pink-Woven-Design-Ballerinas-59915814-1.jpg",
    "brand": "Marc Loire",
    "type": "Women Woven Design Ballerinas",
    "price": "999",
    "MP": "1998",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14713152/2021/9/22/945e8ab3-159d-47fc-8efd-a994b9ec80131632302629066-Shoetopia-Women-White-Open-Toe-Flats-with-Bows-1281632302628-7.jpg",
    "brand": "Shoetopia",
    "type": "Women Open Toe Flats",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12721074/2021/2/17/fbaa44e5-fecd-420a-aa94-c41c88091f401613544338528-Shezone-Women-White-Printed-Ballerinas-7951613544337037-1.jpg",
    "brand": "Shezone",
    "type": "Women Ballerinas",
    "price": "699",
    "MP": "999",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/21/b4e6a311-2d00-4aa7-9d37-8476a54edd8f1582236941065-1.jpg",
    "brand": "ZAPATOZ",
    "type": "Women Open Toe Flats",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9269831/2019/5/22/8c440396-597b-4f6b-ac76-60a2784f33fb1558510414742-DressBerry-Women-Flats-221558510413292-1.jpg",
    "brand": "DressBerry",
    "type": "Women Striped Flats",
    "price": "854",
    "MP": "1899",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1424833/2022/1/4/232c2c5a-009e-4092-8e18-05590d92bd9c1641295756561-DressBerry-Women-Beige-Pointy-Toed-Flats-2281641295756213-1.jpg",
    "brand": "DressBerry",
    "type": "Women Pointy-Toed Flats",
    "price": "809",
    "MP": "1799",
    "offer": 55
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7326288/2018/10/6/37e8316c-4ca8-45e5-97ba-a78530b111e31538803609384-Street-Style-Store-Women-Black-Woven-Design-Open-Toe-Flats-9681538803609216-1.jpg",
    "brand": "Street Style Store",
    "type": "Women Open Toe Flats",
    "price": "799",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13308810/2021/4/1/54cee3aa-36d9-4fba-b135-a95473ae26d71617274509272-DressBerry-Women-Mustard-Yellow-Solid-Ballerinas-with-Suede--1.jpg",
    "brand": "DressBerry",
    "type": "Women Suede Finish Ballerinas",
    "price": "1699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15847808/2021/10/19/c52e09d7-e67b-4483-9c72-d93669dcf6041634617556829ShezoneWomenGreyOpenToeFlatswithBows1.jpg",
    "brand": "Shezone",
    "type": "Women Open Toe Flats",
    "price": "699",
    "MP": "999",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15847834/2021/10/19/b68c57e6-d8d3-4a73-9fd5-c35fcdf7c2411634620389211ShezoneWomenCream-ColouredBallerinaswithLaserCutsFlats1.jpg",
    "brand": "Shezone",
    "type": "Women Ballerinas Flats",
    "price": "699",
    "MP": "999",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12768990/2020/11/9/7e67b1b9-4b20-4f28-89cd-41bb8639db751604902933023VishudhWomenGunmetal-TonedSolidOpenToeFlats1.jpg",
    "brand": "Vishudh",
    "type": "Women Open Toe Flats",
    "price": "549",
    "MP": "999",
    "offer": 45
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/3/25/12d7c775-f920-4c89-81ac-f07f6c342ee41553491998560-1.jpg",
    "brand": "Shoetopia",
    "type": "Women Solid Mules",
    "price": "499",
    "MP": "999",
    "offer": 50
  },

]




mensData(Flats)



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
  
   
  let sort1 =   Flats.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Flats.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Flats.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Flats.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Flats.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Flats.sort(function(a,b){
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
  highlanderSort(Flats)
})

function highlanderSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 etherSort(Flats)
})

function etherSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 USSort(Flats)
})

function USSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  for(let i = 0; i<Flats.length ;i++){

    if(Flats[i].brand == "Roadster"){
       appendarr.push(Flats[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Flats.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Flats)
})

function blueSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 whiteSort(Flats)
})

function whiteSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 blackSort(Flats)
})

function blackSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 greenSort(Flats)
})

function greenSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 greySort(Flats)
})

function greySort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
 redSort(Flats)
})

function redSort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  p1Sort(Flats)
})

function p1Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  p2Sort(Flats)
})

function p2Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  p3Sort(Flats)
})

function p3Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  off1Sort(Flats)
})

function off1Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  off2Sort(Flats)
})

function off2Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  off3Sort(Flats)
})

function off3Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  off4Sort(Flats)
})

function off4Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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
  off5Sort(Flats)
})

function off5Sort(Flats){
  
  let sortedData = Flats.filter(function(elem) {
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