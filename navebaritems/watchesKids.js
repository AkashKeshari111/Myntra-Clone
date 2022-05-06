import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

// import{sticky1} from "../components/sticky.js"

// sticky1()

let Watches = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17016076/2022/2/2/3678f0f5-cb6b-4fb6-a507-f6bb5a3153b51643794698709KoolKidzUnisexKidsMulticolouredBrassPrintedDialGreenStrapsAn1.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Brass Dial & Watch",
      "price": "Rs. 660",
      "actualPrice": "Rs. 695",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16609502/2021/12/24/c6509ab9-7c7c-48e3-8445-d467140db07e1640352962949KOOLKIDZKK106DARKPINK021.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Leather Straps Watch",
      "price": "Rs. 420",
      "actualPrice": "Rs. 495",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268860/2022/2/24/813b6d94-b553-465c-9aa9-6b90261e6de81645676915553DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
      "brand": "Disney",
      "title": "Unisex Kids Automatic Watch",
      "price": "Rs. 949",
      "actualPrice": "Rs. 999",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16042606/2021/11/9/e67bdbd2-06ca-4b9c-91ff-942c2aebc6bf1636459218400SpikyRoundAnalogueWatchesBellerRW_Renbow1.jpg",
      "brand": "Spiky",
      "title": "Unisex Kids Multi Function Watch",
      "price": "Rs. 549",
      "actualPrice": "Rs. 999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16609512/2021/12/24/7edc9e27-e08e-4725-9c34-f6984aada5be1640352113726KOOLKIDZKK106DARKPINK011.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Leather Straps Watch",
      "price": "Rs. 420",
      "actualPrice": "Rs. 495",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/20/33d8f1c2-079b-494a-9ef7-88882a8b58fa1616222499672-1.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Digital Watch",
      "price": "Rs. 660",
      "actualPrice": "Rs. 695",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16890402/2022/1/20/817b7823-3e9e-437f-b93f-6a7e5609e3141642681963474KoolKidzUnisexKidsPinkBrassPrintedDialPinkStrapsAnalogueWatc1.jpg",
      "brand": "Kool Kidz",
      "title": "Kids Brass Dial & Watch",
      "price": "Rs. 531",
      "actualPrice": "Rs. 625",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268858/2022/2/24/1c8b6649-d03a-4a2b-97ac-cb4e8aa9f68e1645675391293DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
      "brand": "Disney",
      "title": "Kids Disney Princess Watch",
      "price": "Rs. 949",
      "actualPrice": "Rs. 999",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17469294/2022/3/10/dcc4f664-c164-4a2a-a09e-b591735388ae1646906062375SpikyUnisexKidsWhiteDialMulticolouredLeatherStrapsAnalogueWa1.jpg",
      "brand": "Spiky",
      "title": "Kids Leather Straps Watch",
      "price": "Rs. 549",
      "actualPrice": "Rs. 999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14879050/2021/7/20/b802044f-8b98-4efa-bd56-f99306b253191626774183199KoolKidzUnisexKidsMulticolouredPrintedDialBlueStrapsAnalogue1.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Watch",
      "price": "Rs. 562",
      "actualPrice": "Rs. 625",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17268872/2022/2/24/1031d740-011c-435e-b540-dc93644332941645675344069DisneyUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
      "brand": "Disney",
      "title": "Unisex Kids Automatic Watch",
      "price": "Rs. 949",
      "actualPrice": "Rs. 999",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/20/dea1dc87-9ed5-4316-ab4b-f7da27ef05841616222460811-1.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Digital Watch",
      "price": "Rs. 660",
      "actualPrice": "Rs. 695",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16513032/2021/12/14/b7198a9b-f031-410f-bf8e-288f1a4967c51639472065534KoolKidzUnisexKidsMulticolouredDialGoldTonedLeatherBraceletS1.jpg",
      "brand": "Kool Kidz",
      "title": "Unisex Kids Leather Straps Watch",
      "price": "Rs. 535",
      "actualPrice": "Rs. 595",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17271068/2022/2/24/78ef25f2-91fd-4fce-8a14-b6fe081504211645683066719MarvelUnisexKidsPrintedDialStrapsAnalogueAutomaticWatchW9Y-V1.jpg",
      "brand": "Marvel",
      "title": "Unisex Kids Watch",
      "price": "Rs. 935",
      "actualPrice": "Rs. 1299",
      "offer": "(28% OFF)"
    }
  ]



  Watches.map(function(el){
    let append_data=document.getElementById("append_data")
    let div1=document.createElement("div")
    let img=document.createElement("img")
    let brand=document.createElement("h3")
    let type=document.createElement("p")
    let price=document.createElement("p")
    let MP=document.createElement("s")
    let off=document.createElement("p")
  
  
    div1.id="inner_div"
    img.src=el.image;
    img.id="img1"
  
  
  
    
    brand.innerText=el.brand;
    brand.id="brand1"
  
   
    type.innerText=el.title;
    type.id="type1"
     
    let div2=document.createElement("div")
    div2.id="div_2"
    let div3=document.createElement("div")
    div3.id="div_3"
    price.innerText=el.price;
    price.id="price1"
    MP.innerText=el.actualPrice;
    MP.id="mp1"
    off.innerText=el.offer;
    off.id="off1"
  
  
    
    div3.append(price,MP,off)
    div2.append(div3)
    div1.append(img,brand,type,div2)
  
    append_data.append(div1)
  
  
    localStorage.setItem("WatchesKids",JSON.stringify(Watches))
    console.log("inside")
  
  })