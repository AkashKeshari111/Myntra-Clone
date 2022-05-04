
 
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
 
  
import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

 
let HairStraightener  = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9375005/2019/5/8/bf565462-b571-4c65-9e0e-ecaafc8b6d801557312258867-Philips-Women-Hair-Appliance-3831557312258283-1.jpg",
      "brand": "Philips",
      "title": "HP8120/00 Hair Dryer",
      "price": "Rs. 1102",
      "actualPrice": "Rs. 1345",
      "offer": "(18% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/30/cfda1d1b-7054-455b-be9f-56ba149d67731575065114849-1.jpg",
      "brand": "Ikonic",
      "title": "Women DIVA Hair Straightener",
      "price": "Rs. 4200",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9375035/2022/4/12/4e673a43-c609-4d58-96d1-b57d78628f9d1649748061359PhilipsHP864346MissFreshersStraightenerHairdryerStylingKit1.jpg",
      "brand": "Philips",
      "title": "HP8643/46 Straightener & Dryer",
      "price": "Rs. 1858",
      "actualPrice": "Rs. 2295",
      "offer": "(19% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12800108/2021/8/31/79a232dc-b05d-4d92-b1fc-68ff2eadfc861630404010381-Vega-Women-Keratin-3-in-1-Hair-Styler-VHSCC-03-4261630404009-1.jpg",
      "brand": "VEGA",
      "title": "Women Keratin 3 in 1 Styler",
      "price": "Rs. 1715",
      "actualPrice": "Rs. 2199",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13507848/2021/2/15/c082731b-f64b-4878-8628-a4f4c6502da81613394624242-Philips-Women-Hair-Appliance-8201613394621991-1.jpg",
      "brand": "Philips",
      "title": "Thermo Protect Hair Dryer",
      "price": "Rs. 1996",
      "actualPrice": "Rs. 2495",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5589986/2020/11/17/9dc798fa-d74e-4f8e-bf2b-66da3881861f1605624172359-Ikonic-ProTitanium-Black-Shine-Hair-Straightner-816160562417-1.jpg",
      "brand": "Ikonic",
      "title": "Hair Straightener",
      "price": "Rs. 7000",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9374997/2021/7/30/2613e26e-1c13-4054-8ad5-1841e8436a6b1627637166814-Philips-HP810046-SalonDry-ThermoProtect-1000W-Compact-Hair-D-1.jpg",
      "brand": "Philips",
      "title": "HP8100/46 SalonDry Hair Dryer",
      "price": "Rs. 761",
      "actualPrice": "Rs. 875",
      "offer": "(13% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/9/21/02db46a6-130c-4932-b923-54d0b7cebb781569054832778-1.jpg",
      "brand": "Ikonic",
      "title": "Mini Iron Hair Straightener",
      "price": "Rs. 1575",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4609758/2020/11/17/b19c4281-a912-46d7-adae-50df222020161605624131789-Ikonic-Glam-All-In-1-Black-Hair-Straightner-8111605624130331-1.jpg",
      "brand": "Ikonic",
      "title": "Hair Straightener",
      "price": "Rs. 3500",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12445350/2020/11/23/b538625c-34f4-4ece-92a7-64212506733f1606148686922-Philips-Women-Hair-Appliance-1361606148686636-1.jpg",
      "brand": "Philips",
      "title": "Ionic Styling Brush HP4722/20",
      "price": "Rs. 1621",
      "actualPrice": "Rs. 2495",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15285148/2022/2/17/a16d60fa-ca81-4936-a723-5f0054cd3d981645105127888SYSKASuperglamHS1050HairStraightener-Pink1.jpg",
      "brand": "SYSKA",
      "title": "HS1050 Hair Straightener",
      "price": "Rs. 2399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5910805/2021/11/18/e52f1553-ee81-4d4d-9a1b-c59247a8ae0a1637187853482-VEGA-VHSS-03-Miss-Versatile-Hair-Styling-Set---Color-May-Var-15.jpg",
      "brand": "VEGA",
      "title": "VHSS-03 Hair Styling Set",
      "price": "Rs. 2463",
      "actualPrice": "Rs. 3199",
      "offer": "(23% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15285146/2022/2/17/91ec9287-a782-4ebe-b685-8bad0bb13a451645105129878SYSKASuperglamHS1050HairStraightener-Black1.jpg",
      "brand": "SYSKA",
      "title": "HS1050 Hair Straightener",
      "price": "Rs. 2399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13525942/2021/7/18/d28421e0-1bb5-4173-b003-ca0c06ef235b1626591259654-Groomiist-Gold-Series-Multi-Functional-3-in-1-Hair-Straighte-1.jpg",
      "brand": "Groomiist",
      "title": "3 in 1 Hair Straightener",
      "price": "Rs. 1418",
      "actualPrice": "Rs. 2446",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12107582/2022/1/4/36c018c7-84cb-4f54-bc0f-43d60888ed2b1641292301018-Dyson-Airwrap-Complete-Hair-Styler---Red--Gunmetal-Toned-386-1.jpg",
      "brand": "dyson",
      "title": "Airwrap Complete Hair Styler",
      "price": "Rs. 44900",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10849124/2022/4/19/06ab8810-6393-4bd9-bd0a-100a2336a8b61650366021829MaybellineNewYorkTheNudesEyeshadowPalette-Blush9g1.jpg",
      "brand": "Maybelline",
      "title": "Eyeshadow Palette - Blush",
      "price": "Rs. 769",
      "actualPrice": "Rs. 905",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14240272/2021/10/27/b81763f1-882b-4456-8daf-3ea9ad5a65351635328781676PlumCandyMeltsVeganLipBalm-RedVelvetLove-12g1.jpg",
      "brand": "Plum",
      "title": "Lip Balm - Red Velvet Love",
      "price": "Rs. 250",
      "actualPrice": "Rs. 295",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12838504/2020/11/6/969cf5be-f93e-4a7f-9530-35052ff0d0601604661793589-Makeup-Revolution-London-Women-Makeup-Kit-2541604661793399-1.jpg",
      "brand": "Makeup Revolution London",
      "title": "Set of Eyeshadow & Highlighter",
      "price": "Rs. 1200",
      "actualPrice": "Rs. 2400",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2174520/2021/7/27/157153cf-f7a9-4b1f-be3f-a4a4e99143451627402418673-SUGAR-Arrested-For-Overstay-Water-Proof-I-Will-Be-Black-Eyel-4.jpg",
      "brand": "SUGAR",
      "title": "I Will Be Black Eyeliner 01",
      "price": "Rs. 899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13748724/2021/3/1/ec213bae-9f25-482a-8f6e-aafaa63950b21614600616670-Makeup-Revolution-London-Women-Eyeshadow-2581614600616483-1.jpg",
      "brand": "Makeup Revolution London",
      "title": "Set of 2 Reloaded Eyeshadows",
      "price": "Rs. 840",
      "actualPrice": "Rs. 2100",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16674826/2022/1/4/709c861b-be7b-4060-95ab-3c5fa4d9245a1641284103230AllureBlendingBrush-SGK-228s1.jpg",
      "brand": "ALLURE",
      "title": "Blending Makeup Eye Brush",
      "price": "Rs. 278",
      "actualPrice": "Rs. 299",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10235945/2022/1/27/4dbe4a3b-9195-4b9f-ad5c-a7640e3fef9a1643279843160PondsSuperLightGelOilFreeMoisturiserwithHyaluronicAcidVitami1.jpg",
      "brand": "Ponds",
      "title": "Light Gel Oil Free Moisturiser",
      "price": "Rs. 309",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15605464/2021/9/26/bfa862ed-b626-4c44-9fdd-eeda2b0c02b21632616438753ColorbarKosherJadeFacialRoller1.jpg",
      "brand": "Colorbar",
      "title": "Kosher Jade Facial Roller",
      "price": "Rs. 1312",
      "actualPrice": "Rs. 1750",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/18/ee9cbe99-9a9e-49f8-b603-da69d9cc6c371621319188346-1.jpg",
      "brand": "Plum",
      "title": "Rose Water Toner 100 ml",
      "price": "Rs. 180",
      "actualPrice": "Rs. 225",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/12/66f9c4fb-2571-4c0a-ae3f-44bd270afc1d1618208092879-1.jpg",
      "brand": "MISS ROSE",
      "title": "Set Of 6 Matte Liquid Lipgloss",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 3299",
      "offer": "(Rs. 2000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14172246/2022/4/29/50d3b62a-21d7-4f54-a61f-77797b34ebf51651215613044-Garnier-Bright-Complete-VITAMIN-C-Booster-Face-Serum-30ml-31-1.jpg",
      "brand": "Garnier",
      "title": "VITAMIN C Bright Face Serum",
      "price": "Rs. 549",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14254354/2022/3/22/40e8fae2-e8f7-49ae-9723-39bf6763c0541647947204182-FACES-CANADA-Ultime-Pro-Sun-Defense-CC-Cream-Luxe-SPF-50-Ivo-1.jpg",
      "brand": "FACES CANADA",
      "title": "Luxe SPF 50 Ivory 01",
      "price": "Rs. 799",
      "actualPrice": "Rs. 999",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2421530/2022/4/25/3813980e-3d5e-4de0-9878-2ad3d9b567091650869407873FACESCANADAUltimeProMakeupFixer1.jpg",
      "brand": "FACES CANADA",
      "title": "Ultime Pro Makeup Fixer",
      "price": "Rs. 506",
      "actualPrice": "Rs. 649",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15352458/2022/4/3/ccb1089d-aa8c-41bb-bc92-5c101e4f67211648967341839SKINKRAFTCustomizedSevereAcneKit1.jpg",
      "brand": "SKINKRAFT",
      "title": "Customized Severe Acne Kit",
      "price": "Rs. 1348",
      "actualPrice": "Rs. 2697",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4425793/2020/10/10/55d1289f-174d-4ab3-90bc-524113ca10731602269397669WetnWildBlushBrushEC796White1.jpg",
      "brand": "Wet n Wild",
      "title": "Blush Brush EC796",
      "price": "Rs. 263",
      "actualPrice": "Rs. 425",
      "offer": "(38% OFF)"
    }
  ]


  
  HairStraightener.map(function(el){
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
  
  
    localStorage.setItem("HairStraightenerBeauty",JSON.stringify(HairStraightener))
    console.log("inside")
  
  })




