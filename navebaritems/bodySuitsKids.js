import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();

searchFunction()


let Bodysuits = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17261666/2022/4/20/6f37f0c4-380f-4596-a4fa-f8153966906d1650449000330BUMZEEInfantGirlsPeachWhitePrintedPureCottonBodysuitwithHair1.jpg",
      "brand": "BUMZEE",
      "title": "Infant Girls Cotton Bodysuit",
      "price": "Rs. 398",
      "offer": "(Rs. 301 OFF)",
      "actualPrice": "Rs. 699"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16892758/2022/4/27/d52013e8-6e19-410d-9c0b-cbc30242ae0b1651036883768-HM-Kids-Girls-White--Blue-2-pack-long-sleeved-bodysuits-3141-2.jpg",
      "brand": "H&M",
      "title": "2-pack long-sleeved bodysuits",
      "price": "Rs. 849",
      "offer": "(15% OFF)",
      "actualPrice": "Rs. 999"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16396298/2021/12/7/89cf67c4-1937-4b32-8dcd-1c5fb717200b1638873680715Fancydresscostume1.jpg",
      "brand": "H&M",
      "title": "Girls Fancy Dress Costume",
      "price": "Rs. 974",
      "offer": "(25% OFF)",
      "actualPrice": "Rs. 1299"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17261664/2022/4/20/dda64510-2db2-43dc-b03d-ea1a7ede31cc1650448998885BUMZEEInfantGirlsPinkRedPrintedPureCottonBodysuitWithHairBan1.jpg",
      "brand": "BUMZEE",
      "title": "Infant Girls Printed Bodysuit",
      "price": "Rs. 398",
      "offer": "(Rs. 301 OFF)",
      "actualPrice": "Rs. 699"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17059486/2022/2/5/c0afc50a-dfc4-4bf8-a3c5-c3a3d787d5fb1644045090577ClothingSet1.jpg",
      "brand": "MINI KLUB",
      "title": "Girls Bodysuit with Stocking",
      "price": "Rs. 1299",
      "offer": null,
      "actualPrice": null
    }
  ]


  mensData(Bodysuits)
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
    
     
    let sort1 =   Bodysuits.sort(function(a,b){
        if(a.brand > b.brand)return 1;
        if(a.brand < b.brand)return -1;
        return 0;
     
      })
      console.log(sort1,"sort arr")
      mensData(sort1)
    }
  
  
    if(selected =="Popularity"){
    
     
      let sort1 =   Bodysuits.sort(function(a,b){
          if(a.brand > b.brand)return 1;
          if(a.brand < b.brand)return -1;
          return 0;
       
        })
        console.log(sort1,"sort arr")
        mensData(sort1)
      }
    
  
  
      if(selected =="Popularity"){
    
     
        let sort1 =   Bodysuits.sort(function(a,b){
            if(a.brand > b.brand)return -1;
            if(a.brand < b.brand)return  1;
            return 0;
         
          })
          console.log(sort1,"sort arr")
          mensData(sort1)
        }
  
  
        if(selected =="Price: High to Low"){
    
     
          let sort1 =   Bodysuits.sort(function(a,b){
             return Number(b.price) - Number(a.price) ;
           
            })
            console.log(sort1,"sort arr")
            mensData(sort1)
          }
  
  
          if(selected =="Price: Low to High"){
    
     
            let sort1 =   Bodysuits.sort(function(a,b){
               return Number(a.price) - Number(b.price) ;
             
              })
              console.log(sort1,"sort arr")
              mensData(sort1)
            }
         
  
            if(selected =="Better Discount"){
    
          
              let sort1 =   Bodysuits.sort(function(a,b){
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
    highlanderSort(Bodysuits)
  })
  
  function highlanderSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   etherSort(Bodysuits)
  })
  
  function etherSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   USSort(Bodysuits)
  })
  
  function USSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    for(let i = 0; i<Bodysuits.length ;i++){
  
      if(Bodysuits[i].brand == "Roadster"){
         appendarr.push(Bodysuits[i])
        
      } 
      // console.log("filter",appendarr)
      // mensData(appendarr)
     
      console.log("dafdfaefadf")
      console.log("filter",appendarr)
      mensData(appendarr)
      // else if()
    }
    
   
   
  
    // Bodysuits.filter
  }
  // filterFun()
  
  // color 
  
  document.getElementById("blue").addEventListener("click", function(){
    console.log("click")
   blueSort(Bodysuits)
  })
  
  function blueSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   whiteSort(Bodysuits)
  })
  
  function whiteSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   blackSort(Bodysuits)
  })
  
  function blackSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   greenSort(Bodysuits)
  })
  
  function greenSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   greySort(Bodysuits)
  })
  
  function greySort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
   redSort(Bodysuits)
  })
  
  function redSort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    p1Sort(Bodysuits)
  })
  
  function p1Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    p2Sort(Bodysuits)
  })
  
  function p2Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    p3Sort(Bodysuits)
  })
  
  function p3Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    off1Sort(Bodysuits)
  })
  
  function off1Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    off2Sort(Bodysuits)
  })
  
  function off2Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    off3Sort(Bodysuits)
  })
  
  function off3Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    off4Sort(Bodysuits)
  })
  
  function off4Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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
    off5Sort(Bodysuits)
  })
  
  function off5Sort(Bodysuits){
    
    let sortedData = Bodysuits.filter(function(elem) {
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