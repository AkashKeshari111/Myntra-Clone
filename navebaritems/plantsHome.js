import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Plants = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/18/31187e0e-99c4-43aa-b69a-78bc6ccd9abb1613646703381-1.jpg",
    "brand": "TIED RIBBONS",
    "type": "Set Of 2 Solid Plastic Planters With Metal Stand",
    "price": "699",
    "MP": "1749",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/9/1da94c19-7539-431d-9d55-51dc180eafcb1623211787575-1.jpg",
    "brand": "Home Centre",
    "type": "Set Of 3 Planters On Stand",
    "price": "1599",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14370594/2021/6/22/7a7f86ac-8113-4323-af38-826698ff0fc51624353771183-Aapno-Rajasthan-Copper-Toned--Black-Cylindrical-Metal-Plante-13.jpg",
    "brand": "Aapno Rajasthan",
    "type": "Cylindrical Metal Planter With Stand",
    "price": "840",
    "MP": "2800",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/8/24/b1646a41-f6d5-40e0-8e2b-c44ac7f115891566587650094-1.jpg",
    "brand": "HomeTown",
    "type": "Set of 2 Planters",
    "price": "890",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14069304/2021/6/22/35ebd24e-4d0d-4ce8-9ed5-66376adc03651624353753208-Aapno-Rajasthan-Set-Of-2-Brown-Antique-Finish-Hammered-Brass-11.jpg",
    "brand": "Aapno Rajasthan",
    "type": "Set Of 2 Antique Finish Hammered Brass Planters",
    "price": "4200",
    "MP": "12000",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16166900/2021/11/18/ffb738cd-a2eb-4fe2-8f8a-7b9e0e73770e1637244577779Planters1.jpg",
    "brand": "WALLMANTRA",
    "type": "Cross Rope Wall Hanging",
    "price": "1499",
    "MP": "1999",
    "offer": 500
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/18/d06f5e45-420a-428b-98b6-144fbf7409141613629591803-1.jpg",
    "brand": "TIED RIBBONS",
    "type": "Set Of 3 Solid Metal Planters With Wheel-Shaped Stand",
    "price": "1279",
    "MP": "3199",
    "offer": 60
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17243496/2022/2/22/226821ae-458c-495b-81f2-0826f7bc64161645523402311BlackMetalFlowerPotSucculentPlantPotIndoorandOutdoorSetof21.jpg",
    "brand": "Homesake",
    "type": "Set of 2 Metal Planters",
    "price": "499",
    "MP": "2500",
    "offer": 2001
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/6/14/f5087b43-82e3-4d59-a81c-61ae4e32fb5e1560497477323-1.jpg",
    "brand": "Aapno Rajasthan",
    "type": "Two Owls Ceramic Planter",
    "price": "660",
    "MP": "2200",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/10/a5c24dca-196b-46c8-a63f-d1834300a6d41604956838736-1.jpg",
    "brand": "StyleMyWay",
    "type": "Ceramic Round Planter Pot",
    "price": "691",
    "MP": "1115",
    "offer": 38
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14063538/2021/6/2/9a8cfbe4-2196-494e-8ba7-111f87803e641622648428542-Aapno-Rajasthan-Set-Of-3-Striped-Ceramic-Planters-7891622648-1.jpg",
    "brand": "Aapno Rajasthan",
    "type": "Set Of 3 Striped Ceramic Planters",
    "price": "660",
    "MP": "2000",
    "offer": 67
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/4/ca43d488-13f3-48c1-9d0e-a10ff99a0e741604454623301-1.jpg",
    "brand": "Aapno Rajasthan",
    "type": "Set of 3 Planters",
    "price": "2520",
    "MP": "7200",
    "offer": 65
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4670819/2018/4/11/11523433108619-Set-of-three-Herb-Pots-Red-5351523433108501-1.jpg",
    "brand": "green girgit",
    "type": "Metal Herb Planter",
    "price": "539",
    "MP": "1100",
    "offer": 51
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/9/b8653a0d-9525-4901-81f4-e0beff426abf1623212234997-1.jpg",
    "brand": "Home Centre",
    "type": "Solid Mini Planter With Stand",
    "price": "599",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15292386/2021/8/28/bb3f37dc-b141-460a-8c57-a1d1bb30e1c11630137238197Planters1.jpg",
    "brand": "Homesake",
    "type": "Set Of 2 Plant Hangers",
    "price": "2000",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/31/1a69dfad-a1a3-49d2-bd08-45deab4d31fd1622460767582-1.jpg",
    "brand": "Pure Home and Living",
    "type": "Set Of 3 Bathroom Accessories",
    "price": "2399",
    "MP": "2999",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/28/8ac2bbaa-961b-4823-82e9-1d182f1867c21606558991168-1.jpg",
    "brand": "Indus Valley",
    "type": "Unisex Skin and Hair Combo",
    "price": "363",
    "MP": "428",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11777018/2020/12/24/af3a2968-6d83-4bbf-8b10-bcf31215656b1608793889111-molife-Unisex-Black-Amplify-100-Powerful-Wireless-Soundbar-W-1.jpg",
    "brand": "molife",
    "type": "Amplify 100 Wireless Soundbar",
    "price": "2999",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9093513/2021/8/11/8fd3f159-a7f9-44c6-b98b-2df5be62892d1628671289225BombayShavingCompanyExfoliatingCharcoalFaceScrubForDeadSkinE1.jpg",
    "brand": "Bombay Shaving Company",
    "type": "Unisex Face Scrub 100 gm",
    "price": "248",
    "MP": "299",
    "offer": 17
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/7/17142faf-a949-427e-afa4-d999a30872111583535049427-1.jpg",
    "brand": "molife",
    "type": "Unisex Solid Play 700 Bluetooth Wireless Earpods Earphones",
    "price": "4499",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/28/a1056c18-f7ef-4221-8f52-484bfacda6ed1606572165546-1.jpg",
    "brand": "Indus Valley",
    "type": "Unisex Skin and Hair Combo",
    "price": "788",
    "MP": "928",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/66227c99-6e30-4db4-85da-88a138377d0c1612854955542-1.jpg",
    "brand": "INTERDESIGN",
    "type": "Cade Lidded Storage Bin",
    "price": "1119",
    "MP": "1399",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/6/70b8e223-421c-45c9-a80c-3b0b0c0fe75a1620296425608-1.jpg",
    "brand": "Pure Home and Living",
    "type": "Amber Glass Container",
    "price": "600",
    "MP": "750",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11814812/2020/9/4/969c00e9-3cca-4c15-a681-6a0367bd6f611599201646076-Bombay-Shaving-Company-Set-of-2-Charcoal-Easy-At-Home-Skin-R-2.jpg",
    "brand": "Bombay Shaving Company",
    "type": "Set of 2 Charcoal Face Mask",
    "price": "250",
    "MP": "298",
    "offer": 16
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9227673/2020/9/16/fe7c2740-b4dc-4b00-adc0-2179796aff8c1600247520011-WishCare-Unisex-Jamaican-Black-Castor-Oil-200ml-602160024751-1.jpg",
    "brand": "WishCare",
    "type": "Unisex Hair Oil",
    "price": "601",
    "MP": "699",
    "offer": 14
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9149707/2019/3/29/be23b7b3-4eb4-48b7-97df-6f1c84e41f971553856987675-Bombay-Shaving-Company-Unisex-Charcoal-Face-Scrub-45gm-98015-1.jpg",
    "brand": "Bombay Shaving Company",
    "type": "Unisex Face Scrub",
    "price": "175",
    "MP": "179",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14999216/2021/8/2/43ec8827-d753-4c6b-8475-16d96db3f1571627914215382Organisers1.jpg",
    "brand": "My Gift Booth",
    "type": "Set Of 2 Travel Shoe Bags",
    "price": "299",
    "MP": "999",
    "offer": 70
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9227689/2020/9/16/838f48df-449e-4247-906b-ec71354c9be11600247578013-WishCare-Unisex-Cold-Pressed-Kalonji-Black-Seed-Oil-200ml-96-1.jpg",
    "brand": "WishCare",
    "type": "Kalonji Black Seed Oil",
    "price": "396",
    "MP": "400",
    "offer": 1
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11814810/2020/9/4/093829eb-c515-419c-ac1f-5e7246b9032b1599201627160-Bombay-Shaving-Company-Pack-of-5-Charcoal-Face-Sheet-Mask-25-1.jpg",
    "brand": "Bombay Shaving Company",
    "type": "Charcoal Face Sheet Mask",
    "price": "499",
    "MP": "745",
    "offer": 33
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/7/8d63a88d-72d8-4e89-a866-f9c7d0d80ada1607354441520-1.jpg",
    "brand": "molife",
    "type": "Dual-Driver Portable Bluetooth Speakers With Upto 5 Hours Playback",
    "price": "3499",
    "MP": null,
    "offer": null
  }
]

mensData(Plants)



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
  
   
  let sort1 =   Plants.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Plants.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Plants.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Plants.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Plants.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Plants.sort(function(a,b){
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
  highlanderSort(Plants)
})

function highlanderSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 etherSort(Plants)
})

function etherSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 USSort(Plants)
})

function USSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  for(let i = 0; i<Plants.length ;i++){

    if(Plants[i].brand == "Roadster"){
       appendarr.push(Plants[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Plants.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Plants)
})

function blueSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 whiteSort(Plants)
})

function whiteSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 blackSort(Plants)
})

function blackSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 greenSort(Plants)
})

function greenSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 greySort(Plants)
})

function greySort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
 redSort(Plants)
})

function redSort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  p1Sort(Plants)
})

function p1Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  p2Sort(Plants)
})

function p2Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  p3Sort(Plants)
})

function p3Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  off1Sort(Plants)
})

function off1Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  off2Sort(Plants)
})

function off2Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  off3Sort(Plants)
})

function off3Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  off4Sort(Plants)
})

function off4Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
  off5Sort(Plants)
})

function off5Sort(Plants){
  
  let sortedData = Plants.filter(function(elem) {
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
