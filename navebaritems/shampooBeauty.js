import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()



let Shampoo = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837541/2022/1/27/86827c8b-4d8b-4adf-b70e-c9419c9b27ed1643280119188TRESemmeWomenKeratinSmoothShampoo185ml1.jpg",
    "brand": "TRESemme",
    "type": "Keratin Smooth Shampoo 185 ml",
    "price": "164",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11782162/2020/9/11/137a3d23-9716-48a6-974d-13c2f3d486581599823221533-Dove-Women-Shampoo-and-Conditioner-5131599823220943-1.jpg",
    "brand": "Dove",
    "type": "Anti Dandruff Shampoo 80 ml",
    "price": "71",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371154/2022/1/21/b614ce80-354f-4183-823c-a450774eb2a51642768848965LOrealParis6OilNourishShampoo1000ml1.jpg",
    "brand": "LOreal",
    "type": "6 Oil Nourish Shampoo",
    "price": "899",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414868/2019/11/4/f319a2c2-111c-4f60-8590-8fbaee2b8b0c1572873854677-LOreal-Paris-Rapid-Reviver-Extraordinary-Clay-Deep-Condition-1.jpg",
    "brand": "LOreal",
    "type": "Clay Deep Conditioner 180 ml",
    "price": "180",
    "MP": "240",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16956352/2022/2/24/9e53f81a-37ce-4a03-8105-46d3f3ab427a1645682787117-Nyle-Naturals-Soft-and-Shiny-Anti-Hairfall-Shampoo-With-Good-1.jpg",
    "brand": "Nyle Naturals",
    "type": "Anti-Hairfall Shampoo 800 ml",
    "price": "288",
    "MP": "395",
    "offer": 27
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711014/2020/6/6/6a20c92d-65b1-4818-8ba6-362e7a302f071591434193053LOrealParis6OilNourishShampoo175ml1.jpg",
    "brand": "LOreal",
    "type": "6 Oil Nourish Sustainable Shampoo",
    "price": "116",
    "MP": "135",
    "offer": 14
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15729188/2021/12/28/8350f83e-1c38-460e-8d43-8913d7ff39321640639197783-Garnier-Fructis-Hair-Food---Reparing-Papaya-Shampoo-For-Dama-1.jpg",
    "brand": "Garnier",
    "type": "Deep Repair Papaya Hair Food",
    "price": "499",
    "MP": "549",
    "offer": 9
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318448/2020/7/20/a5bb7f96-8dac-43e2-b6f4-d91f2de00ba51595249938310ProfusionCosmeticsMasterArtistryParadiseBathSoakSaltandOilFo1.jpg",
    "brand": "Pantene",
    "type": "Silky Smooth Care Shampoo",
    "price": "330",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16679476/2022/2/9/4dbd7e0d-2081-4eab-8471-e86480515bc71644394088083-LOreal-Paris-Extraordinary-Oil-Smooth-Conditioner-for-Smooth-1.jpg",
    "brand": "LOreal",
    "type": "Extraordinary Oil Conditioner",
    "price": "859",
    "MP": "999",
    "offer": 14
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414880/2022/1/21/0913bcba-d7ca-4914-9abe-a1c734e3181e1642768817165LOrealParisRapidReviverTotalRepair5DeepConditioner180ml1.jpg",
    "brand": "LOreal",
    "type": "Total Repair 5 Conditioner",
    "price": "180",
    "MP": "240",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837550/2019/1/25/85deada1-38f2-4564-a402-39ab45a575e61548408272841-TRESemme-Hair-Fall-Defense-Shampoo-580-ml-7651548408272699-1.jpg",
    "brand": "TRESemme",
    "type": "Hair Fall Defense Shampoo",
    "price": "579",
    "MP": "610",
    "offer": 5
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371142/2022/1/28/b67f4f22-c85f-403b-8b57-1b8a1a1e2c711643364351332LorealParisTotalRepair5Shampoo1L1.jpg",
    "brand": "LOreal",
    "type": "Total Repair 5 Shampoo 1L",
    "price": "863",
    "MP": "899",
    "offer": 4
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16466410/2021/12/10/7ac401c5-6f41-4bae-8365-706fddafaaa81639134673552LAFZAnahitaWomenBodySpray150ml1.jpg",
    "brand": "LAFZ",
    "type": "Women Anahita Body Spray 150ml",
    "price": "150",
    "MP": "200",
    "offer": 25
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506348/2021/12/21/e3f44c70-bd55-47ff-80e6-8da6223038a61640068889128-Dove-Body-Love-Paraben-Free-48hrs-Hydration-Cooling-Gel-Crem-1.jpg",
    "brand": "Dove",
    "type": "Body Love Cooling Gel Creme",
    "price": "310",
    "MP": "330",
    "offer": 6
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275018/2021/6/14/10d000a4-2dac-4622-a9f5-f25470c153821623676848372-Miss-Claire-Women-Lip-Liner-7171623676848315-1.jpg",
    "brand": "Miss Claire",
    "type": "Mahogany L-52 Lip Liner",
    "price": "65",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14499392/2022/3/9/ea597da5-522d-4d2a-91ac-8f0238cacf0a1646825647811KayaYouthSetof3HydroReplenishSoothingAloeVeraFaceMask1.jpg",
    "brand": "Kaya Youth",
    "type": "Set of 3 Soothing Face Mask",
    "price": "375",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7111969/2018/9/14/cc985c63-5938-47c7-8f32-1c37adef83431536925184235-Miss-Claire-L-33-Fire-Brick-Red-Glimmer-Stick-for-Lips-18-g--1.jpg",
    "brand": "Miss Claire",
    "type": "L-33 Fire Brick Red Lip Liner",
    "price": "65",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275120/2021/6/14/a700c157-e3e7-41c6-a8fd-87b14f85a9831623674472535-Miss-Claire-Women-Eyeshadow-2281623674472303-1.jpg",
    "brand": "Miss Claire",
    "type": "Single Eyeshadow - 0852",
    "price": "160",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14145770/2021/5/11/e5d3024e-09bd-4c33-90c6-f662c983cc561620734587937-Miss-Claire-Women-Nail-Polish-1981620734587637-1.jpg",
    "brand": "Miss Claire",
    "type": "G35 Gel Effect Nail Polish 5ml",
    "price": "90",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15950086/2021/11/12/8664fe24-45ed-490e-b88d-f63db3d8cdea1636697833261NYBaeDewyDropsLiquidFoundationMacchiato30ml1.jpg",
    "brand": "NY Bae",
    "type": "Liquid Foundation",
    "price": "183",
    "MP": "229",
    "offer": 20
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16276418/2021/11/27/77c97e08-5595-448d-b8cc-c12988fda8fc1638006914749MildcaresReusableStandandPeeForWomenPackof21.jpg",
    "brand": "MILDCARES",
    "type": "Set Of 2 Urination Funnel",
    "price": "395",
    "MP": "1198",
    "offer": 67
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17192980/2022/3/14/c708c015-6f3a-4cf3-a5d1-75dce0b93b3f1647230032958SevenSeasInfiniteTouchLoosePowderSPF-18Compact-Skin1.jpg",
    "brand": "Seven Seas",
    "type": "Infinite Touch Loose Powder Compact SPF-18- 20 g",
    "price": "205",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15580926/2021/10/12/8862ea5d-de92-40ad-be58-269dd75c33991634026539248-SWISS-BEAUTY-Gel-Effect-Lustre-Nail-Lacquer-20-2616340265391-1.jpg",
    "brand": "SWISS BEAUTY",
    "type": "Gel Lustre Nail Lacquer-20",
    "price": "84",
    "MP": "99",
    "offer": 15
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275086/2021/8/5/02d9ac78-065a-4837-b7db-3710b37f77541628150496529-Miss-Claire-Women-Lip-Gloss-4471628150496396-1.jpg",
    "brand": "Miss Claire",
    "type": "Matte & Pearly Gloss - 106",
    "price": "125",
    "MP": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15738030/2021/10/6/0981ea5e-93ef-4d3c-bef2-66efd9d378a71633503180732GYNOCUP1.jpg",
    "brand": "GYNOCUP",
    "type": "Pack of 5 Removal Razor",
    "price": "249",
    "MP": "499",
    "offer": 50
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16762094/2022/3/15/732a90e4-1b6f-458a-8617-cf6c3dfff7b21647339342144MissRoseMoisturizingCreamyNonTransferMatteLipstick-7301-007B1.jpg",
    "brand": "MISS ROSE",
    "type": "Matte Lipstick - 7301-007B 50",
    "price": "249",
    "MP": "399",
    "offer": 150
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532336/2022/1/11/857cb291-24af-4c50-8f36-07201ef56b5e1641897897136-essence-LONG-LASTING-lipstick-08-Passionate-4451641897896932-1.jpg",
    "brand": "essence",
    "type": "08 Passionate Lasting Lipstick",
    "price": "310",
    "MP": null,
    "offer": null
  }
]
mensData(Shampoo)



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
  
   
  let sort1 =   Shampoo.sort(function(a,b){
      if(a.brand > b.brand)return 1;
      if(a.brand < b.brand)return -1;
      return 0;
   
    })
    console.log(sort1,"sort arr")
    mensData(sort1)
  }


  if(selected =="Popularity"){
  
   
    let sort1 =   Shampoo.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  


    if(selected =="Popularity"){
  
   
      let sort1 =   Shampoo.sort(function(a,b){
          if(a.brand > b.brand)return -1;
          if(a.brand < b.brand)return  1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }


      if(selected =="Price: High to Low"){
  
   
        let sort1 =   Shampoo.sort(function(a,b){
           return Number(b.price) - Number(a.price) ;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }


        if(selected =="Price: Low to High"){
  
   
          let sort1 =   Shampoo.sort(function(a,b){
             return Number(a.price) - Number(b.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
       

          if(selected =="Better Discount"){
  
        
            let sort1 =   Shampoo.sort(function(a,b){
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
  highlanderSort(Shampoo)
})

function highlanderSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 etherSort(Shampoo)
})

function etherSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 USSort(Shampoo)
})

function USSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  for(let i = 0; i<Shampoo.length ;i++){

    if(Shampoo[i].brand == "Roadster"){
       appendarr.push(Shampoo[i])
      
    } 
    // console.log("filter",appendarr)
    // mensData(appendarr)
   
    console.log("dafdfaefadf")
    console.log("filter",appendarr)
    mensData(appendarr)
    // else if()
  }
  
 
 

  // Shampoo.filter
}
// filterFun()

// color 

document.getElementById("blue").addEventListener("click", function(){
  console.log("click")
 blueSort(Shampoo)
})

function blueSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 whiteSort(Shampoo)
})

function whiteSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 blackSort(Shampoo)
})

function blackSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 greenSort(Shampoo)
})

function greenSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 greySort(Shampoo)
})

function greySort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
 redSort(Shampoo)
})

function redSort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  p1Sort(Shampoo)
})

function p1Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  p2Sort(Shampoo)
})

function p2Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  p3Sort(Shampoo)
})

function p3Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  off1Sort(Shampoo)
})

function off1Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  off2Sort(Shampoo)
})

function off2Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  off3Sort(Shampoo)
})

function off3Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  off4Sort(Shampoo)
})

function off4Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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
  off5Sort(Shampoo)
})

function off5Sort(Shampoo){
  
  let sortedData = Shampoo.filter(function(elem) {
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