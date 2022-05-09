import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()




let Casual = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787771/2019/7/4/4a667184-54ea-43f2-8e22-48839f737f321562237176299-YK-Girls-Blue-Slip-On-Sneakers-2751562237175217-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Slip-On Sneakers",
    "price": "428",
    "MP": "1299",
    "offer": 67
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/21e6c49c-802c-4603-a796-45d94285b14d1605865469740-1.jpg",
    "brand": "Shoetopia",
    "type": "Girls Colourblocked Sneakers",
    "price": "749",
    "MP": "999",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11395038/2020/2/6/009d6527-1960-4731-9d14-63dcc47374801580982623642-YK-Girls-Casual-Shoes-171580982622579-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Slip-On Sneakers",
    "price": "329",
    "MP": "999",
    "offer": 67
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14221488/2021/6/7/10ee0557-f0bf-4063-bc62-d79e0282691f1623043738352-YK-Girls-Casual-Shoes-591623043737993-1.jpg",
    "brand": "YK",
    "type": "Girls Woven Design Sneakers",
    "price": "575",
    "MP": "1799",
    "offer": 68
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10317659/2019/8/12/b08a855a-0987-4ed1-920a-932cf3f47e011565601454871-YK-Girls-Green-Sneakers-9081565601454042-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Sneakers",
    "price": "389",
    "MP": "999",
    "offer":70,
  },
    {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787753/2019/7/4/14c6fa4e-3f76-4c88-b146-f13fda6f2a361562237194407-YK-Girls-Green-Sneakers-6351562237193613-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Sneakers",
    "price": "467",
    "MP": "1299",
    "offer":77 ,
    },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14649716/2021/10/13/857d072f-2c3a-40d5-b2dd-b305f48edb1c1634121468873-YK-Girls-Casual-Shoes-8691634121468432-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Slip-On Sneakers",
    "price": "319",
    "MP": "999",
    "offer": 68
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/23/de9d82aa-4bcf-4e09-b9c9-f4810d333a661624443722259-1.jpg",
    "brand": "Pantaloons Junior",
    "type": "Girls Pink Leather Sneakers",
    "price": "799",
    "MP": null,
    "offer": "799"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/1/0a3da20e-af72-4b7e-a57c-e8bb36056af31622549065246-1.jpg",
    "brand": "max",
    "type": "Girls Woven Design PU Slip-On Sneakers",
    "price": "629",
    "MP": "699",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/23/4090cf24-f3ad-4dd4-baad-dec08be739421603405714933-1.jpg",
    "brand": "Yellow Bee",
    "type": "Girls Printed Clogs",
    "price": "474",
    "MP": "499",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/8be59a6d-4cfa-4840-a78b-e13d711d51e51605851458117-1.jpg",
    "brand": "Shoetopia",
    "type": "Girls Woven Design Sneakers",
    "price": "599",
    "MP": "999",
    "offer": 40
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/20/54c931d1-5aa1-4aa8-87e1-5b30da37a0661605874077562-1.jpg",
    "brand": "Shoetopia",
    "type": "Girls Woven Design Slip-On Sneakers",
    "price": "649",
    "MP": "999",
    "offer": 35
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8787773/2019/7/4/3cadd65d-0f26-458a-b7c2-a89812b801e41562237065789-YK-Girls-Blue-Slip-On-Sneakers-721562237065476-1.jpg",
    "brand": "YK",
    "type": "Girls Printed Slip-On Sneakers",
    "price": "363",
    "MP": "1299",
    "offer": 72
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10444566/2019/9/10/1638163e-7110-42c2-84c8-2f136b84974e1568120937665-Barbie-Girls-Casual-Shoes-7651568120937005-1.jpg",
    "brand": "toothless",
    "type": "Girls Barbie Printed Sneakers",
    "price": "609",
    "MP": "999",
    "offer": 39
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/27/fb50a6d7-a66e-4486-9562-c1ffb59290831611723459888-1.jpg",
    "brand": "max",
    "type": "Girls Printed Sneakers",
    "price": "584",
    "MP": "649",
    "offer": 10
  },

]


mensData(Casual)



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
  
   
  let sort1 =   Casual.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Casual.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Casual.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Casual.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Casual.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Casual.sort(function(a,b){
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
  highlanderSort(Casual)
})

function highlanderSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 etherSort(Casual)
})

function etherSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 USSort(Casual)
})

function USSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  for(let i = 0; i<Casual.length ;i++){

    if(Casual[i].brand == "Roadster"){
       appendarr.push(Casual[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Casual.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Casual)
})

function blueSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 whiteSort(Casual)
})

function whiteSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 blackSort(Casual)
})

function blackSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 greenSort(Casual)
})

function greenSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 greySort(Casual)
})

function greySort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
 redSort(Casual)
})

function redSort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  p1Sort(Casual)
})

function p1Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  p2Sort(Casual)
})

function p2Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  p3Sort(Casual)
})

function p3Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  off1Sort(Casual)
})

function off1Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  off2Sort(Casual)
})

function off2Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  off3Sort(Casual)
})

function off3Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  off4Sort(Casual)
})

function off4Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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
  off5Sort(Casual)
})

function off5Sort(Casual){
  
  let sortedData = Casual.filter(function(elem) {
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