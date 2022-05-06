import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

import{sticky1} from "../components/sticky.js"

sticky1()

let Shampoo = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837541/2022/1/27/86827c8b-4d8b-4adf-b70e-c9419c9b27ed1643280119188TRESemmeWomenKeratinSmoothShampoo185ml1.jpg",
      "brand": "TRESemme",
      "title": "Keratin Smooth Shampoo 185 ml",
      "price": "Rs. 164",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11782162/2020/9/11/137a3d23-9716-48a6-974d-13c2f3d486581599823221533-Dove-Women-Shampoo-and-Conditioner-5131599823220943-1.jpg",
      "brand": "Dove",
      "title": "Anti Dandruff Shampoo 80 ml",
      "price": "Rs. 71",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371154/2022/1/21/b614ce80-354f-4183-823c-a450774eb2a51642768848965LOrealParis6OilNourishShampoo1000ml1.jpg",
      "brand": "LOreal",
      "title": "6 Oil Nourish Shampoo",
      "price": "Rs. 899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414868/2019/11/4/f319a2c2-111c-4f60-8590-8fbaee2b8b0c1572873854677-LOreal-Paris-Rapid-Reviver-Extraordinary-Clay-Deep-Condition-1.jpg",
      "brand": "LOreal",
      "title": "Clay Deep Conditioner 180 ml",
      "price": "Rs. 180",
      "actualPrice": "Rs. 240",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16956352/2022/2/24/9e53f81a-37ce-4a03-8105-46d3f3ab427a1645682787117-Nyle-Naturals-Soft-and-Shiny-Anti-Hairfall-Shampoo-With-Good-1.jpg",
      "brand": "Nyle Naturals",
      "title": "Anti-Hairfall Shampoo 800 ml",
      "price": "Rs. 288",
      "actualPrice": "Rs. 395",
      "offer": "(27% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711014/2020/6/6/6a20c92d-65b1-4818-8ba6-362e7a302f071591434193053LOrealParis6OilNourishShampoo175ml1.jpg",
      "brand": "LOreal",
      "title": "6 Oil Nourish Sustainable Shampoo",
      "price": "Rs. 116",
      "actualPrice": "Rs. 135",
      "offer": "(14% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15729188/2021/12/28/8350f83e-1c38-460e-8d43-8913d7ff39321640639197783-Garnier-Fructis-Hair-Food---Reparing-Papaya-Shampoo-For-Dama-1.jpg",
      "brand": "Garnier",
      "title": "Deep Repair Papaya Hair Food",
      "price": "Rs. 499",
      "actualPrice": "Rs. 549",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318448/2020/7/20/a5bb7f96-8dac-43e2-b6f4-d91f2de00ba51595249938310ProfusionCosmeticsMasterArtistryParadiseBathSoakSaltandOilFo1.jpg",
      "brand": "Pantene",
      "title": "Silky Smooth Care Shampoo",
      "price": "Rs. 330",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16679476/2022/2/9/4dbd7e0d-2081-4eab-8471-e86480515bc71644394088083-LOreal-Paris-Extraordinary-Oil-Smooth-Conditioner-for-Smooth-1.jpg",
      "brand": "LOreal",
      "title": "Extraordinary Oil Conditioner",
      "price": "Rs. 859",
      "actualPrice": "Rs. 999",
      "offer": "(14% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414880/2022/1/21/0913bcba-d7ca-4914-9abe-a1c734e3181e1642768817165LOrealParisRapidReviverTotalRepair5DeepConditioner180ml1.jpg",
      "brand": "LOreal",
      "title": "Total Repair 5 Conditioner",
      "price": "Rs. 180",
      "actualPrice": "Rs. 240",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837550/2019/1/25/85deada1-38f2-4564-a402-39ab45a575e61548408272841-TRESemme-Hair-Fall-Defense-Shampoo-580-ml-7651548408272699-1.jpg",
      "brand": "TRESemme",
      "title": "Hair Fall Defense Shampoo",
      "price": "Rs. 579",
      "actualPrice": "Rs. 610",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371142/2022/1/28/b67f4f22-c85f-403b-8b57-1b8a1a1e2c711643364351332LorealParisTotalRepair5Shampoo1L1.jpg",
      "brand": "LOreal",
      "title": "Total Repair 5 Shampoo 1L",
      "price": "Rs. 863",
      "actualPrice": "Rs. 899",
      "offer": "(4% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16466410/2021/12/10/7ac401c5-6f41-4bae-8365-706fddafaaa81639134673552LAFZAnahitaWomenBodySpray150ml1.jpg",
      "brand": "LAFZ",
      "title": "Women Anahita Body Spray 150ml",
      "price": "Rs. 150",
      "actualPrice": "Rs. 200",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506348/2021/12/21/e3f44c70-bd55-47ff-80e6-8da6223038a61640068889128-Dove-Body-Love-Paraben-Free-48hrs-Hydration-Cooling-Gel-Crem-1.jpg",
      "brand": "Dove",
      "title": "Body Love Cooling Gel Creme",
      "price": "Rs. 310",
      "actualPrice": "Rs. 330",
      "offer": "(6% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275018/2021/6/14/10d000a4-2dac-4622-a9f5-f25470c153821623676848372-Miss-Claire-Women-Lip-Liner-7171623676848315-1.jpg",
      "brand": "Miss Claire",
      "title": "Mahogany L-52 Lip Liner",
      "price": "Rs. 65",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14499392/2022/3/9/ea597da5-522d-4d2a-91ac-8f0238cacf0a1646825647811KayaYouthSetof3HydroReplenishSoothingAloeVeraFaceMask1.jpg",
      "brand": "Kaya Youth",
      "title": "Set of 3 Soothing Face Mask",
      "price": "Rs. 375",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7111969/2018/9/14/cc985c63-5938-47c7-8f32-1c37adef83431536925184235-Miss-Claire-L-33-Fire-Brick-Red-Glimmer-Stick-for-Lips-18-g--1.jpg",
      "brand": "Miss Claire",
      "title": "L-33 Fire Brick Red Lip Liner",
      "price": "Rs. 65",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275120/2021/6/14/a700c157-e3e7-41c6-a8fd-87b14f85a9831623674472535-Miss-Claire-Women-Eyeshadow-2281623674472303-1.jpg",
      "brand": "Miss Claire",
      "title": "Single Eyeshadow - 0852",
      "price": "Rs. 160",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14145770/2021/5/11/e5d3024e-09bd-4c33-90c6-f662c983cc561620734587937-Miss-Claire-Women-Nail-Polish-1981620734587637-1.jpg",
      "brand": "Miss Claire",
      "title": "G35 Gel Effect Nail Polish 5ml",
      "price": "Rs. 90",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15950086/2021/11/12/8664fe24-45ed-490e-b88d-f63db3d8cdea1636697833261NYBaeDewyDropsLiquidFoundationMacchiato30ml1.jpg",
      "brand": "NY Bae",
      "title": "Liquid Foundation",
      "price": "Rs. 183",
      "actualPrice": "Rs. 229",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16276418/2021/11/27/77c97e08-5595-448d-b8cc-c12988fda8fc1638006914749MildcaresReusableStandandPeeForWomenPackof21.jpg",
      "brand": "MILDCARES",
      "title": "Set Of 2 Urination Funnel",
      "price": "Rs. 395",
      "actualPrice": "Rs. 1198",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17192980/2022/3/14/c708c015-6f3a-4cf3-a5d1-75dce0b93b3f1647230032958SevenSeasInfiniteTouchLoosePowderSPF-18Compact-Skin1.jpg",
      "brand": "Seven Seas",
      "title": "Infinite Touch Loose Powder Compact SPF-18- 20 g",
      "price": "Rs. 205",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15580926/2021/10/12/8862ea5d-de92-40ad-be58-269dd75c33991634026539248-SWISS-BEAUTY-Gel-Effect-Lustre-Nail-Lacquer-20-2616340265391-1.jpg",
      "brand": "SWISS BEAUTY",
      "title": "Gel Lustre Nail Lacquer-20",
      "price": "Rs. 84",
      "actualPrice": "Rs. 99",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275086/2021/8/5/02d9ac78-065a-4837-b7db-3710b37f77541628150496529-Miss-Claire-Women-Lip-Gloss-4471628150496396-1.jpg",
      "brand": "Miss Claire",
      "title": "Matte & Pearly Gloss - 106",
      "price": "Rs. 125",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15738030/2021/10/6/0981ea5e-93ef-4d3c-bef2-66efd9d378a71633503180732GYNOCUP1.jpg",
      "brand": "GYNOCUP",
      "title": "Pack of 5 Removal Razor",
      "price": "Rs. 249",
      "actualPrice": "Rs. 499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16762094/2022/3/15/732a90e4-1b6f-458a-8617-cf6c3dfff7b21647339342144MissRoseMoisturizingCreamyNonTransferMatteLipstick-7301-007B1.jpg",
      "brand": "MISS ROSE",
      "title": "Matte Lipstick - 7301-007B 50",
      "price": "Rs. 249",
      "actualPrice": "Rs. 399",
      "offer": "(Rs. 150 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532336/2022/1/11/857cb291-24af-4c50-8f36-07201ef56b5e1641897897136-essence-LONG-LASTING-lipstick-08-Passionate-4451641897896932-1.jpg",
      "brand": "essence",
      "title": "08 Passionate Lasting Lipstick",
      "price": "Rs. 310",
      "actualPrice": null,
      "offer": null
    }
  ]
  Shampoo.map(function(el){
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
  
  
    localStorage.setItem("ShampooBeauty",JSON.stringify(Shampoo))
    console.log("inside")
  
  })
 
