import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Flipflops = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201630/2021/12/28/586271e0-d25d-401d-b0f1-896ab2e65d8c1640693364033-Crocs-Unisex-Kids-Sandals-8611640693363462-1.jpg",
    "brand": "Crocs",
    "type": "Kids Bayaband Clogs",
    "price": "2495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201562/2022/3/7/41f6baba-721e-453c-a591-8a290f117cd71646630111339-Crocs-Kids-Pink-Croslite-Clogs-5761646630110915-1.jpg",
    "brand": "Crocs",
    "type": "Kids Croslite Clogs",
    "price": "2295"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201542/2022/3/7/ea4bf203-8b21-4692-b075-5f8845c5078e1646649560376-Crocs-Unisex-Kids-Green-Classic-T-Citrus-Croslite-Clogs-1801-1.jpg",
    "brand": "Crocs",
    "type": "Unisex Kids Croslite Clogs",
    "price": "1495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201734/2022/1/3/010dfe29-4f59-42e2-9c59-6af3a4afac481641192668259-Crocs-Unisex-Kids-Sandals-8051641192667863-1.jpg",
    "brand": "Crocs",
    "type": "Kids Bayaband Solid Clogs",
    "price": "2795"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201572/2022/3/7/d0db09b7-2eb0-4453-8dfc-1073a013e4a01646649674256-Crocs-Kids-Pink-Classic-K-TPk-Croslite-Clogs-567164664967397-1.jpg",
    "brand": "Crocs",
    "type": "Kids Croslite Clogs",
    "price": "1795"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201722/2021/12/28/1ca06b5c-e13a-404a-a09a-4958ae32eea61640693375847-Crocs-Unisex-Kids-Sandals-9981640693375172-1.jpg",
    "brand": "Crocs",
    "type": "Kids Bayaband Clogs",
    "price": "2495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201596/2022/1/21/3e4aef1d-a17d-4825-a5b7-4de3c8f7d5021642767139982-Crocs-Kids-Grey--Navy-Blue-Crocband-Croslite-Clogs-268164276-1.jpg",
    "brand": "Crocs",
    "type": "Kids Crocband Croslite Clogs",
    "price": "2295"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17380402/2022/3/4/e6ca712d-612c-4bcb-a2e0-3f76d316adb41646400296837CrocsUnisexKidsPinkSandals1.jpg",
    "brand": "Crocs",
    "type": "Unisex Kids Croslite Clogs",
    "price": "1795"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16508524/2021/12/14/97b65b97-eb33-4e78-87c5-c1ba3dc2020b1639469645945CrocsUnisexKidsBlackSolid1.jpg",
    "brand": "Crocs",
    "type": "Unisex Kids Croslite Clogs",
    "price": "3495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17380404/2022/3/4/ac7ab698-bb65-4736-bea0-605ac8e0d3a71646400293667CrocsUnisexKidsMultiSandals1.jpg",
    "brand": "Crocs",
    "type": "Unisex Kids Printed Croslite Clogs",
    "price": "1795"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201576/2022/2/2/3fa4134e-d922-4a9d-a258-52d826bc8b731643803717910-Crocs-Unisex-Kids-Pink-Croslite-Clogs-7391643803717283-1.jpg",
    "brand": "Crocs",
    "type": "Kids Croslite Clogs",
    "price": "1495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16201686/2022/3/7/665a3302-ca8b-4170-856e-d0f48e1f0ad11646641978271-Crocs-Unisex-Kids-Green-Classic-K-Citrus-Croslite-Clogs-6941-1.jpg",
    "brand": "Crocs",
    "type": "Unisex Kids Croslite Clogs",
    "price": "1795"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8696487/2019/3/13/477bb7c8-152a-4b78-81fe-694a884c35af1552471463871-Crocs-Unisex-Flip-Flops-7381552471463032-1.jpg",
    "brand": "Crocs",
    "type": "Kids Crocband Thong Flip-Flops",
    "price": "1495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2482771/2018/5/8/11525770226330-Crocs-Unisex-Flip-Flops-1651525770226196-1.jpg",
    "brand": "Crocs",
    "type": "Kids Classic Clogs",
    "price": "1495"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15112892/2021/12/9/fee187a1-5e94-427a-a1bd-face746755981639029562920-Crocs-Unisex-Kids-Sandals-351639029562525-1.jpg",
    "brand": "Crocs",
    "type": "Kids Glitter Clogs",
    "price": "1795"
  }
]




mensData(Flipflops)



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
  
   
  let sort1 =   Flipflops.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Flipflops.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Flipflops.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Flipflops.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Flipflops.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Flipflops.sort(function(a,b){
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
  highlanderSort(Flipflops)
})

function highlanderSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 etherSort(Flipflops)
})

function etherSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 USSort(Flipflops)
})

function USSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  for(let i = 0; i<Flipflops.length ;i++){

    if(Flipflops[i].brand == "Roadster"){
       appendarr.push(Flipflops[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Flipflops.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Flipflops)
})

function blueSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 whiteSort(Flipflops)
})

function whiteSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 blackSort(Flipflops)
})

function blackSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 greenSort(Flipflops)
})

function greenSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 greySort(Flipflops)
})

function greySort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
 redSort(Flipflops)
})

function redSort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  p1Sort(Flipflops)
})

function p1Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  p2Sort(Flipflops)
})

function p2Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  p3Sort(Flipflops)
})

function p3Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  off1Sort(Flipflops)
})

function off1Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  off2Sort(Flipflops)
})

function off2Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  off3Sort(Flipflops)
})

function off3Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  off4Sort(Flipflops)
})

function off4Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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
  off5Sort(Flipflops)
})

function off5Sort(Flipflops){
  
  let sortedData = Flipflops.filter(function(elem) {
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