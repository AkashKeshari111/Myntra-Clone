import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Lakme = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629082/2022/5/4/e6bfd58f-f4f4-45ca-911d-e84d5eebfaef1651646980985-Lakme-Insta-Liner---Black-9ml-3461651646980759-1.jpg",
    "brand": "Lakme",
    "type": "Insta-Liner - Black 9ml",
    "price": "109",
    "MP": "130",
    "offer": 16
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629094/2020/7/9/d9cc4f27-9deb-46ca-821e-a37410cbcbd51594288324999LakmeSetof2EyeconicKajal-DeepBlack070g1.jpg",
    "brand": "Lakme",
    "type": "Set of 2 Eyeconic Kajal",
    "price": "291",
    "MP": "320",
    "offer": 9
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1963241/2022/4/18/d937014a-3250-4803-a3ce-320a6de213e61650281596290-Maybelline-New-York-Colossal-Kajal---Black-4661650281595507-1.jpg",
    "brand": "Maybelline",
    "type": "Colossal Kajal - Black",
    "price": "162",
    "MP": "180",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
    "brand": "Lakme",
    "type": "Line Eyeliner - Steel Grey",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
    "brand": "FACES CANADA",
    "type": "Magneteyes Kajal Black 01",
    "price": "139",
    "MP": "179",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178488/2022/4/18/80cb29dd-2f09-4e80-9e7e-33f8818588d31650283565026MaybellineNewYorkLineTattooHighImpactLiner-IntenseBlack1.jpg",
    "brand": "Maybelline",
    "type": "Line Tattoo High Impact Liner",
    "price": "467",
    "MP": "550",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14329750/2021/7/22/6cc9100c-59ad-4893-b3ab-101eb656a7711626955100865SUGARKohlOfHonourIntenseKajal-01BlackOutSingleBlister025gm1.jpg",
    "brand": "SUGAR",
    "type": "Intense Kajal - 01 Black Out",
    "price": "249",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
    "brand": "Lakme",
    "type": "Eyeliner - Sparkling Olive",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
    "brand": "Lakme",
    "type": "Eyeliner - Shimmery Bronze",
    "price": "441",
    "MP": "450",
    "offer": 2
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11884842/2021/2/15/5f29cede-eefb-4435-8d2a-62d3f6b756fb1613372681539-SUGAR-Eye-Told-You-So-Smudgeproof-Eyeliner-17-ml-18316133726-1.jpg",
    "brand": "SUGAR",
    "type": "Smudgeproof Eyeliner",
    "price": "699",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886477/2021/8/6/25c98cd3-a7f9-4634-915f-ef19b71021091628249311123-FACES-CANADA-Magneteyes-Eyeliner---Black-01-35-ml-4871628249-1.jpg",
    "brand": "FACES CANADA",
    "type": "Magnet Eyes Eyeliner- Black 01",
    "price": "194",
    "MP": "249",
    "offer": 22
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
    "brand": "Colorbar",
    "type": "Waterproof Eyeliner - Black",
    "price": "339",
    "MP": "399",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12274332/2021/3/24/7d81e6f4-bb89-41b5-8dcd-6b425f6d29831616574346145-Wet-n-Wild-Color-Icon-Kohl-Liner-Pencil---Youre-Always-White-1.jpg",
    "brand": "Wet n Wild",
    "type": "You're Always White E608A",
    "price": "120",
    "MP": "195",
    "offer": 38
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
    "brand": "Lakme",
    "type": "Naturale Black Gel Kajal",
    "price": "441",
    "MP": "475",
    "offer": 7
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17024160/2022/3/16/d6893613-6c03-4b31-b976-ae7135d85f691647428824164PrettyWomenWomenSmudgeproofRetractableKohlGreenKajal0542gm1.jpg",
    "brand": "Pretty Women",
    "type": "Women Smudgeproof Retractable Kohl Green Kajal 05 4.2 gm",
    "price": "224",
    "MP": "249",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14058032/2021/6/3/119f250c-3413-4c1d-a421-eb0ef6aff4ab1622720457832-Revlon-Set-of-4-Colour-Shine-Super-Lustrous-Nail-Enamels-517-1.jpg",
    "brand": "Revlon",
    "type": "4 Pcs Lustrous Nail Enamels",
    "price": "450",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/62474/2022/3/21/e3c77daa-76fe-4623-b0f6-e3d4d99cb2721647845969213-Maybelline-Lip-Smooth-Color-Changing-Peach-Bloom-Lip-Balm-17-1.jpg",
    "brand": "Maybelline",
    "type": "Peach Bloom Lip Balm 1.7g",
    "price": "135",
    "MP": "180",
    "offer": 25
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12678954/2020/10/9/b82a6915-8d35-4510-93e8-249c2b115e541602216132908-Biotique-Advanced-Organics-Apple-Cider-Vinegar-Deep-Cleansin-1.jpg",
    "brand": "Biotique",
    "type": "Women Apple Cider Face Wash",
    "price": "171",
    "MP": "225",
    "offer": 24
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55163/2021/3/24/c96c707f-99b0-4952-9c3f-ed06b81bc8861616563219147-Lakme-True-Wear-Classics-Twilight-Mauve-Nail-Polish-103-3181-1.jpg",
    "brand": "Lakme",
    "type": "Nail Polish",
    "price": "120",
    "MP": "125",
    "offer": 4
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10444666/2019/12/16/6aa1e3ee-588b-419b-ab41-8c8957cdef731576496070922-Olay-SPF-15-Total-Effects-7-In-1-Anti-Aging-Skin-Cream-50-g--1.jpg",
    "brand": "Olay",
    "type": "Anti Aging Cream 50 g",
    "price": "674",
    "MP": "899",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837535/2022/3/9/0860bcb0-6525-4ac3-96be-a6b5cee3b9cf1646825666381TRESemmeKeratinSmoothShampoo580ml1.jpg",
    "brand": "TRESemme",
    "type": "Keratin Smooth Shampoo",
    "price": "525",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10849078/2022/3/21/9c4a05b4-1ad9-4cec-b243-64e6f5364df11647837063216-Maybelline-Lip-Smooth-Color-Changing-Lip-Balm---Pink-Bloom-1-1.jpg",
    "brand": "Maybelline",
    "type": "Lip Balm - Pink Bloom 1.7g",
    "price": "126",
    "MP": "180",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6528962/2018/9/21/d4375779-3782-48d6-bb11-0f286360f0591537509696186-Maybelline-Women-Lip-Care-6861537509696033-1.jpg",
    "brand": "Maybelline",
    "type": "Broadway Red Baby Lips 4g",
    "price": "159",
    "MP": "175",
    "offer": 9
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11699568/2022/1/27/d711eb0a-c9bd-473f-8367-9b99c64785a41643279982185BiotiqueWomenMorningNectarFlawlessSkinCreamwithBadamSeedOil11.jpg",
    "brand": "Biotique",
    "type": "Nectar Flawless Skin Cream",
    "price": "174",
    "MP": "230",
    "offer": 24
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711012/2022/4/18/26b2be49-b623-45eb-9bf0-74d62897db7e1650265034818-LOreal-Paris-Total-Repair-5-Shampoo-1925ml---1925-ml-5181650-1.jpg",
    "brand": "LOreal",
    "type": "Total Repair 5 Shampoo'",
    "price": "122",
    "MP": "135",
    "offer": 9
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
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7196201/2018/9/28/061ebc76-c25a-464a-a6be-3241179332101538122410789-Maybelline-Women-Lipstick-1281538122410487-1.jpg",
    "brand": "Maybelline",
    "type": "Creamy Matte Lipstick 630",
    "price": "209",
    "MP": "299",
    "offer": 30
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4384871/2021/8/11/44f62cd5-555e-45d2-ba86-05aad086ce001628671666203LakmeAbsolutePerfectRadianceSkinLighteningDayCreme15g1.jpg",
    "brand": "Lakme",
    "type": "Skin Lightening Day Creme 15g",
    "price": "89",
    "MP": "99",
    "offer": 10
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
    "brand": "Livon",
    "type": "Set of 2 Anti-Frizz Hair Serum",
    "price": "415",
    "MP": "500",
    "offer": 17
  }
]


mensData(Lakme)




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
  
   
  let sort1 =   Lakme.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Lakme.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Lakme.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Lakme.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Lakme.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Lakme.sort(function(a,b){
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
  highlanderSort(Lakme)
})

function highlanderSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 etherSort(Lakme)
})

function etherSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 USSort(Lakme)
})

function USSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  for(let i = 0; i<Lakme.length ;i++){

    if(Lakme[i].brand == "Roadster"){
       appendarr.push(Lakme[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Lakme.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Lakme)
})

function blueSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 whiteSort(Lakme)
})

function whiteSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 blackSort(Lakme)
})

function blackSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 greenSort(Lakme)
})

function greenSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 greySort(Lakme)
})

function greySort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
 redSort(Lakme)
})

function redSort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  p1Sort(Lakme)
})

function p1Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  p2Sort(Lakme)
})

function p2Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  p3Sort(Lakme)
})

function p3Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  off1Sort(Lakme)
})

function off1Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  off2Sort(Lakme)
})

function off2Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  off3Sort(Lakme)
})

function off3Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  off4Sort(Lakme)
})

function off4Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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
  off5Sort(Lakme)
})

function off5Sort(Lakme){
  
  let sortedData = Lakme.filter(function(elem) {
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