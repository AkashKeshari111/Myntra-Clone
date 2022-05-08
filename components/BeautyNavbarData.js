
import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import {sidebar_nav} from "../components/sidebar_navMens.js"
document.getElementById("sidebar_nav").innerHTML=sidebar_nav();


import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();
searchFunction();

let Beauty = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178082/2020/1/13/22d48310-290a-429b-8534-db884cde683f1578907784720-Maybelline-New-York-Sensational-03-Flush-It-Red-Liquid-Matte-1.jpg",
      "brand": "Maybelline",
      "title": "Matte Lipstick-Flush It Red 03",
      "price": "Rs. 268",
      "actualPrice": "Rs. 349",
      "offer": "(23% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7196201/2018/9/28/061ebc76-c25a-464a-a6be-3241179332101538122410789-Maybelline-Women-Lipstick-1281538122410487-1.jpg",
      "brand": "Maybelline",
      "title": "Creamy Matte Lipstick 630",
      "price": "Rs. 209",
      "actualPrice": "Rs. 299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4384871/2021/8/11/44f62cd5-555e-45d2-ba86-05aad086ce001628671666203LakmeAbsolutePerfectRadianceSkinLighteningDayCreme15g1.jpg",
      "brand": "Lakme",
      "title": "Skin Lightening Day Creme 15g",
      "price": "Rs. 89",
      "actualPrice": "Rs. 99",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
      "brand": "Livon",
      "title": "Set of 2 Anti-Frizz Hair Serum",
      "price": "Rs. 415",
      "actualPrice": "Rs. 500",
      "offer": "(17% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105590/2022/4/13/fe16c1fd-2fd7-4281-9fac-211e1b3252271649824360798Lakme9to5PrimerMatteLipstick-PlumPickMP41.jpg",
      "brand": "Lakme",
      "title": "Matte Lipstick-Plum Pick MP4",
      "price": "Rs. 400",
      "actualPrice": "Rs. 500",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8051025/2022/2/21/61beefd1-6915-4944-bf1b-a7463e5f260f1645423276110-Maybelline-New-York-Super-Stay-Matte-Ink-Liquid-Lipstick---F-1.jpg",
      "brand": "Maybelline",
      "title": "Super Stay Matte - Founder 115",
      "price": "Rs. 594",
      "actualPrice": "Rs. 699",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6870092/2018/12/26/001c5c9d-ec8a-4091-a16b-df8a850b0bbe1545825125810-Maybelline-New-York-80-Ruler-Super-Stay-Matte-Ink-Liquid-Lip-1.jpg",
      "brand": "Maybelline",
      "title": "Super Stay Matte - Ruler 80",
      "price": "Rs. 608",
      "actualPrice": "Rs. 699",
      "offer": "(13% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990822/2021/12/8/fa878233-56ad-462c-aa4d-b0aa43583c151638957490027-Maybelline-Color-Sensational-Ultimattes-Lipstick-More-Blush--5.jpg",
      "brand": "Maybelline",
      "title": "Lipstick 499 More Blush",
      "price": "Rs. 494",
      "actualPrice": "Rs. 549",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2383022/2018/3/14/11521032706846-Maybelline-Color-Sensational-Chilli-Nude-Inti-Matte-Nudes-Lipstick-2141521032706813-1.jpg",
      "brand": "Maybelline",
      "title": "Matte Lipstick - Chilli Nude",
      "price": "Rs. 209",
      "actualPrice": "Rs. 299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/20/91913af8-d794-4aa7-b4a1-b54176fbb3321576792969444-2.jpg",
      "brand": "SUGAR",
      "title": "Matte Transferproof Lipstick",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509854/2021/4/13/28434eb8-28a1-4d70-ba28-290bb424d5231618311009851-Olay-Women-Face-Moisturisers-1601618311009637-1.jpg",
      "brand": "Olay",
      "title": "Women SPF 24 Day Cream",
      "price": "Rs. 499",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57782/2020/10/10/7505b6c6-ae86-40c0-883c-78cc391cb75e1602273099106LotusHerbalsSustainableWomenNutramoistSkinRenewalDailyCream51.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Nutramoist Skin Renewal Cream",
      "price": "Rs. 364",
      "actualPrice": "Rs. 455",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57630/2020/10/10/40f2ef8c-9a39-4ee6-ab40-ca86c8957d291602269994214LotusHerbalsSustainableNutraniteSkinRenewalNutritiveNightCre1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Nutranite Skin Renewal Night Cream",
      "price": "Rs. 364",
      "actualPrice": "Rs. 455",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57692/2022/1/27/491e9858-0aec-4fa7-b31b-b1221a7bd4f21643279838266LotusHerbalsSustainableSheaButterMoisturiser120g1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Shea Butter Moisturiser",
      "price": "Rs. 258",
      "actualPrice": "Rs. 345",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509842/2021/8/11/19b48d54-fc72-49d8-a20b-7754778988011628659279386OlayWomenNaturalWhite7inOneNourishingNightRepairCream50g1.jpg",
      "brand": "Olay",
      "title": "Women Night Repair Cream",
      "price": "Rs. 292",
      "actualPrice": "Rs. 365",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11699568/2022/1/27/d711eb0a-c9bd-473f-8367-9b99c64785a41643279982185BiotiqueWomenMorningNectarFlawlessSkinCreamwithBadamSeedOil11.jpg",
      "brand": "Biotique",
      "title": "Nectar Flawless Skin Cream",
      "price": "Rs. 174",
      "actualPrice": "Rs. 230",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57694/2020/10/10/5e174bd2-95f1-4e79-8606-482e2465ee4a1602270641317LotusHerbalsSustainableWomenWhiteAlphaHydroxyOil-FreeMoistur1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Alpha Hydroxy Oil-Free Moisturiser",
      "price": "Rs. 260",
      "actualPrice": "Rs. 325",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7197210/2021/9/29/1d7a7e49-0f54-4a40-919d-6c9e964a19e01632856574405-Ponds-Non-Oily-Light-Moisturiser-150-ml-381632856573467-1.jpg",
      "brand": "Ponds",
      "title": "Light Moisturiser 150 ml",
      "price": "Rs. 192",
      "actualPrice": "Rs. 219",
      "offer": "(12% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/57702/2020/10/10/1d8a3452-cef3-4d10-b547-36d3b125c8a21602270806662LotusHerbalsSustainableAlmondAnti-WrinkleCreme50g1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Almond Anti-Wrinkle Creme",
      "price": "Rs. 356",
      "actualPrice": "Rs. 475",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509846/2021/8/11/b67377aa-386a-41e3-b1a7-7e3889d7eb531628659416371OlayTotalEffects7InOneNightCream-50g1.jpg",
      "brand": "Olay",
      "title": "7 In One Night Cream",
      "price": "Rs. 719",
      "actualPrice": "Rs. 899",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9337273/2020/5/19/5fde2839-c24b-47f5-8d7d-678c6f5b8b531589882046284NiveaSetof2BodyFaceMoisturisers1.jpg",
      "brand": "Nivea",
      "title": "Lotion & Face Moisturisers",
      "price": "Rs. 471",
      "actualPrice": "Rs. 524",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506304/2021/10/5/d0d42ed8-295a-49ab-9a11-c328333f30661633428468519-Dove-Women-Face-Moisturisers-6331633428468424-1.jpg",
      "brand": "Dove",
      "title": "Body Butter Paraben Free",
      "price": "Rs. 218",
      "actualPrice": "Rs. 230",
      "offer": "(5% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318446/2021/8/11/7141eb69-c1c5-4e4d-8dc1-bbf15ddf0bde1628671502854OlayWomenRegeneristMicro-SculptingAnti-AgeingFaceMoisturiser1.jpg",
      "brand": "Olay",
      "title": "Regenerist Face Moisturiser",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11752718/2020/9/29/332a6efb-6580-4947-abb1-e6aec905ea071601376847184-Lotus-Herbals-Women-Face-Moisturisers-871601376846087-1.jpg",
      "brand": "Lotus Herbals",
      "title": "Anti-Blemish Creme 50 g",
      "price": "Rs. 620",
      "actualPrice": "Rs. 775",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11618812/2020/10/10/581ad042-7e67-4abe-8e93-8ef02376eadb1602273112716LotusHerbalsSustainableYOUTHRXGineplexYouthActivatingSerumCr1.jpg",
      "brand": "Lotus Herbals",
      "title": "Sustainable Youth Activating Serum+Creme",
      "price": "Rs. 875",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55243/2022/3/21/67b62137-0277-460f-a0d2-385bdd09be941647860136423-Lakme-Perfecting-Liquid-Foundation---Natural-Pearl-27ml-5181-1.jpg",
      "brand": "Lakme",
      "title": "Natural Pearl Foundation",
      "price": "Rs. 130",
      "actualPrice": "Rs. 155",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792562/2022/3/25/17bbc36f-c331-42b0-b5ef-0de38fa40d3d1648208654463-Lakme-9To5-Primer--Matte-Perfect-Cover-Foundation---Neutral--1.jpg",
      "brand": "Lakme",
      "title": "Foundation-Neutral Medium N220",
      "price": "Rs. 437",
      "actualPrice": "Rs. 475",
      "offer": "(8% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/6bb916d7-8f56-4c36-8a41-e1b9dead44e81543029083259-1.jpg",
      "brand": "VLCC",
      "title": "Facial Kit",
      "price": "Rs. 350",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1954340/2022/4/25/65d4a9b6-a9dd-4d14-b66c-293b5ba647531650873316918-Ponds-Bright-Beauty-Spot-Less-Glow-Face-Wash-with-Vitamins---1.jpg",
      "brand": "Ponds",
      "title": "Bright Beauty Face Wash 100 g",
      "price": "Rs. 175",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/11/24/19ee9b8e-84c9-4bff-b0f1-ae07c7235a951543028025098-1.jpg",
      "brand": "Biotique",
      "title": "BB and CC Cream",
      "price": "Rs. 151",
      "actualPrice": "Rs. 199",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629100/2022/3/30/59095c7e-fa6c-40ea-aec8-aa51d83efb621648624226950Lakme9to5WeightlessMiniMousseFoundation-RoseIvory6g1.jpg",
      "brand": "Lakme",
      "title": "9 to 5 Mousse - Rose Ivory",
      "price": "Rs. 148",
      "actualPrice": "Rs. 160",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10924304/2022/4/1/ef58e645-ca88-43ee-b54f-82d7c91673f71648804709050FACESCANADAWeightlessStayMatteCompactSPF-20VitaminESheaButte1.jpg",
      "brand": "FACES CANADA",
      "title": "SPF 20 Matte Compact - Sand 04",
      "price": "Rs. 155",
      "actualPrice": "Rs. 199",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/62474/2022/3/21/e3c77daa-76fe-4623-b0f6-e3d4d99cb2721647845969213-Maybelline-Lip-Smooth-Color-Changing-Peach-Bloom-Lip-Balm-17-1.jpg",
      "brand": "Maybelline",
      "title": "Peach Bloom Lip Balm 1.7g",
      "price": "Rs. 135",
      "actualPrice": "Rs. 180",
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55276/2022/4/1/3aad48c4-7adb-4c37-9c0d-17a703dc7c381648804698184LakmeRosePowderWithSunscreen1.jpg",
      "brand": "Lakme",
      "title": "Rose Powder With Sunscreen",
      "price": "Rs. 168",
      "actualPrice": "Rs. 175",
      "offer": "(4% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12678954/2020/10/9/b82a6915-8d35-4510-93e8-249c2b115e541602216132908-Biotique-Advanced-Organics-Apple-Cider-Vinegar-Deep-Cleansin-1.jpg",
      "brand": "Biotique",
      "title": "Women Apple Cider Face Wash",
      "price": "Rs. 171",
      "actualPrice": "Rs. 225",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
      "brand": "Livon",
      "title": "Set of 2 Anti-Frizz Hair Serum",
      "price": "Rs. 415",
      "actualPrice": "Rs. 500",
      "offer": "(17% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837535/2022/3/9/0860bcb0-6525-4ac3-96be-a6b5cee3b9cf1646825666381TRESemmeKeratinSmoothShampoo580ml1.jpg",
      "brand": "TRESemme",
      "title": "Keratin Smooth Shampoo",
      "price": "Rs. 525",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792552/2022/3/21/825670ab-7b84-4828-8357-e5eb5a45dc421647862301030-Lakme-9-To-5-Primer-And-Matte-Perfect-Cover-Foundation---Coo-1.jpg",
      "brand": "Lakme",
      "title": "Foundation - Cool Rose C140",
      "price": "Rs. 432",
      "actualPrice": "Rs. 475",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8667341/2022/4/20/82ce3069-8759-4392-882d-e971a10b06481650452216826-Dove-Hair-Fall-Rescue-Shampoo-For-Weak-Hair-1-l-492165045221-1.jpg",
      "brand": "Dove",
      "title": "Hair Fall Rescue Shampoo",
      "price": "Rs. 849",
      "actualPrice": null,
      "offer": null
    },
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
    },
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
   ,
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
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629082/2022/5/4/e6bfd58f-f4f4-45ca-911d-e84d5eebfaef1651646980985-Lakme-Insta-Liner---Black-9ml-3461651646980759-1.jpg",
      "brand": "Lakme",
      "title": "Insta-Liner - Black 9ml",
      "price": "Rs. 109",
      "actualPrice": "Rs. 130",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11629094/2020/7/9/d9cc4f27-9deb-46ca-821e-a37410cbcbd51594288324999LakmeSetof2EyeconicKajal-DeepBlack070g1.jpg",
      "brand": "Lakme",
      "title": "Set of 2 Eyeconic Kajal",
      "price": "Rs. 291",
      "actualPrice": "Rs. 320",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1963241/2022/4/18/d937014a-3250-4803-a3ce-320a6de213e61650281596290-Maybelline-New-York-Colossal-Kajal---Black-4661650281595507-1.jpg",
      "brand": "Maybelline",
      "title": "Colossal Kajal - Black",
      "price": "Rs. 162",
      "actualPrice": "Rs. 180",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
      "brand": "Lakme",
      "title": "Line Eyeliner - Steel Grey",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
      "brand": "FACES CANADA",
      "title": "Magneteyes Kajal Black 01",
      "price": "Rs. 139",
      "actualPrice": "Rs. 179",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178488/2022/4/18/80cb29dd-2f09-4e80-9e7e-33f8818588d31650283565026MaybellineNewYorkLineTattooHighImpactLiner-IntenseBlack1.jpg",
      "brand": "Maybelline",
      "title": "Line Tattoo High Impact Liner",
      "price": "Rs. 467",
      "actualPrice": "Rs. 550",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14329750/2021/7/22/6cc9100c-59ad-4893-b3ab-101eb656a7711626955100865SUGARKohlOfHonourIntenseKajal-01BlackOutSingleBlister025gm1.jpg",
      "brand": "SUGAR",
      "title": "Intense Kajal - 01 Black Out",
      "price": "Rs. 249",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Sparkling Olive",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Shimmery Bronze",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11884842/2021/2/15/5f29cede-eefb-4435-8d2a-62d3f6b756fb1613372681539-SUGAR-Eye-Told-You-So-Smudgeproof-Eyeliner-17-ml-18316133726-1.jpg",
      "brand": "SUGAR",
      "title": "Smudgeproof Eyeliner",
      "price": "Rs. 699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886477/2021/8/6/25c98cd3-a7f9-4634-915f-ef19b71021091628249311123-FACES-CANADA-Magneteyes-Eyeliner---Black-01-35-ml-4871628249-1.jpg",
      "brand": "FACES CANADA",
      "title": "Magnet Eyes Eyeliner- Black 01",
      "price": "Rs. 194",
      "actualPrice": "Rs. 249",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
      "brand": "Colorbar",
      "title": "Waterproof Eyeliner - Black",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12274332/2021/3/24/7d81e6f4-bb89-41b5-8dcd-6b425f6d29831616574346145-Wet-n-Wild-Color-Icon-Kohl-Liner-Pencil---Youre-Always-White-1.jpg",
      "brand": "Wet n Wild",
      "title": "You're Always White E608A",
      "price": "Rs. 120",
      "actualPrice": "Rs. 195",
      "offer": "(38% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
      "brand": "Lakme",
      "title": "Naturale Black Gel Kajal",
      "price": "Rs. 441",
      "actualPrice": "Rs. 475",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17024160/2022/3/16/d6893613-6c03-4b31-b976-ae7135d85f691647428824164PrettyWomenWomenSmudgeproofRetractableKohlGreenKajal0542gm1.jpg",
      "brand": "Pretty Women",
      "title": "Women Smudgeproof Retractable Kohl Green Kajal 05 4.2 gm",
      "price": "Rs. 224",
      "actualPrice": "Rs. 249",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14058032/2021/6/3/119f250c-3413-4c1d-a421-eb0ef6aff4ab1622720457832-Revlon-Set-of-4-Colour-Shine-Super-Lustrous-Nail-Enamels-517-1.jpg",
      "brand": "Revlon",
      "title": "4 Pcs Lustrous Nail Enamels",
      "price": "Rs. 450",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/62474/2022/3/21/e3c77daa-76fe-4623-b0f6-e3d4d99cb2721647845969213-Maybelline-Lip-Smooth-Color-Changing-Peach-Bloom-Lip-Balm-17-1.jpg",
      "brand": "Maybelline",
      "title": "Peach Bloom Lip Balm 1.7g",
      "price": "Rs. 135",
      "actualPrice": "Rs. 180",
      "offer": "(25% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12678954/2020/10/9/b82a6915-8d35-4510-93e8-249c2b115e541602216132908-Biotique-Advanced-Organics-Apple-Cider-Vinegar-Deep-Cleansin-1.jpg",
      "brand": "Biotique",
      "title": "Women Apple Cider Face Wash",
      "price": "Rs. 171",
      "actualPrice": "Rs. 225",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55163/2021/3/24/c96c707f-99b0-4952-9c3f-ed06b81bc8861616563219147-Lakme-True-Wear-Classics-Twilight-Mauve-Nail-Polish-103-3181-1.jpg",
      "brand": "Lakme",
      "title": "Nail Polish",
      "price": "Rs. 120",
      "actualPrice": "Rs. 125",
      "offer": "(4% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10444666/2019/12/16/6aa1e3ee-588b-419b-ab41-8c8957cdef731576496070922-Olay-SPF-15-Total-Effects-7-In-1-Anti-Aging-Skin-Cream-50-g--1.jpg",
      "brand": "Olay",
      "title": "Anti Aging Cream 50 g",
      "price": "Rs. 674",
      "actualPrice": "Rs. 899",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837535/2022/3/9/0860bcb0-6525-4ac3-96be-a6b5cee3b9cf1646825666381TRESemmeKeratinSmoothShampoo580ml1.jpg",
      "brand": "TRESemme",
      "title": "Keratin Smooth Shampoo",
      "price": "Rs. 525",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10849078/2022/3/21/9c4a05b4-1ad9-4cec-b243-64e6f5364df11647837063216-Maybelline-Lip-Smooth-Color-Changing-Lip-Balm---Pink-Bloom-1-1.jpg",
      "brand": "Maybelline",
      "title": "Lip Balm - Pink Bloom 1.7g",
      "price": "Rs. 126",
      "actualPrice": "Rs. 180",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6528962/2018/9/21/d4375779-3782-48d6-bb11-0f286360f0591537509696186-Maybelline-Women-Lip-Care-6861537509696033-1.jpg",
      "brand": "Maybelline",
      "title": "Broadway Red Baby Lips 4g",
      "price": "Rs. 159",
      "actualPrice": "Rs. 175",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11699568/2022/1/27/d711eb0a-c9bd-473f-8367-9b99c64785a41643279982185BiotiqueWomenMorningNectarFlawlessSkinCreamwithBadamSeedOil11.jpg",
      "brand": "Biotique",
      "title": "Nectar Flawless Skin Cream",
      "price": "Rs. 174",
      "actualPrice": "Rs. 230",
      "offer": "(24% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711012/2022/4/18/26b2be49-b623-45eb-9bf0-74d62897db7e1650265034818-LOreal-Paris-Total-Repair-5-Shampoo-1925ml---1925-ml-5181650-1.jpg",
      "brand": "LOreal",
      "title": "Total Repair 5 Shampoo'",
      "price": "Rs. 122",
      "actualPrice": "Rs. 135",
      "offer": "(9% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11632896/2021/7/26/9d860722-88ac-4ec4-adb0-19eebbaeb0e41627289836416-SUGAR-Set-of-4-Smudge-Me-Not-Liquid-Mini-Nude-Lipstick-41416-1.jpg",
      "brand": "SUGAR",
      "title": "Set of 4 Mini Lipstick",
      "price": "Rs. 799",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/b0841404-fbd0-41bc-afcd-56eeacdec8e01610179137422-1.jpg",
      "brand": "Just Herbs",
      "title": "Ayurvedic Lipstick Trial Kit",
      "price": "Rs. 460",
      "actualPrice": "Rs. 575",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105572/2021/1/25/9547adc2-db67-42b6-81d5-fbd835046a5d1611572248485-Lakme-Women-Lipstick-2481611572247698-1.jpg",
      "brand": "Lakme",
      "title": "Lipstick-Rosy Sunday MP8",
      "price": "Rs. 470",
      "actualPrice": "Rs. 500",
      "offer": "(6% OFF)"
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
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990832/2021/12/1/39122196-78f1-4485-ae4d-fd6f6a57c84f1638338165721-Maybelline-Women-Lipstick-5591638338165630-1.jpg",
      "brand": "Maybelline",
      "title": "Lipstick- 399 More Magenta",
      "price": "Rs. 466",
      "actualPrice": "Rs. 549",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1906679/2022/4/21/287444a2-5425-48b4-8f3f-9777d201a4251650544469288LakmeEnrichLipCrayonCinnamonBrown091.jpg",
      "brand": "Lakme",
      "title": "Enrich Lip Crayon - Cinnamon Brown",
      "price": "Rs. 258",
      "actualPrice": "Rs. 275",
      "offer": "(6% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55269/2021/3/24/2a8ba3df-cca2-4f48-ab17-8cd307538c621616563309201-Lakme-Absolute-Shine-Line-Eye-Liner---Black-3261616563308869-1.jpg",
      "brand": "Lakme",
      "title": "Shine Line Eye Liner - Black",
      "price": "Rs. 378",
      "actualPrice": "Rs. 450",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Shimmery Bronze",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
      "brand": "Lakme",
      "title": "Line Eyeliner - Steel Grey",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg",
      "brand": "Maybelline",
      "title": "Gel Eyeliner - Blackest Black",
      "price": "Rs. 350",
      "actualPrice": "Rs. 500",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
      "brand": "Lakme",
      "title": "Eyeliner - Sparkling Olive",
      "price": "Rs. 441",
      "actualPrice": "Rs. 450",
      "offer": "(2% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5660739/2022/4/18/d346f98d-585b-480e-847c-64bfa8f004d11650284885776MaybellineNewYorkColossalKajal-SuperBlack1.jpg",
      "brand": "Maybelline",
      "title": "Colossal Kajal - Super Black",
      "price": "Rs. 240",
      "actualPrice": "Rs. 300",
      "offer": "(20% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8450977/2022/2/23/1db855f2-5677-4590-9eef-2ded0bce94311645615492693-Lakme-9to5-Pure-Rouge-Blusher---Coral-Punch-1741645615492210-1.jpg",
      "brand": "Lakme",
      "title": "9to5 Pure Rouge Blusher",
      "price": "Rs. 500",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2368963/2020/7/24/bd290bdf-abb9-4739-992c-87591d0a36ec1595568846153LakmeEyeconicFineTipLinerPen-DeepBlack1ml1.jpg",
      "brand": "Lakme",
      "title": "Fine Tip Liner Pen-Deep Black",
      "price": "Rs. 445",
      "actualPrice": "Rs. 500",
      "offer": "(11% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
      "brand": "Colorbar",
      "title": "Waterproof Eyeliner - Black",
      "price": "Rs. 339",
      "actualPrice": "Rs. 399",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2000582/2022/4/26/8cae6f02-a974-4209-946c-843c932ad11a1650957988536-Lakme-9-to-5-SPF-30-Complexion-Care-Cream--Honey-30-g-809165-1.jpg",
      "brand": "Lakme",
      "title": "Honey SPF 30 CC Cream - 30 g",
      "price": "Rs. 360",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/image/style/properties/285218/Lakme-9-to-5-Black-Impact-Eyeliner_1_96bd14879dc3013d4aed0c7216d36419.jpg",
      "brand": "Lakme",
      "title": "9to5 Eyeliner - Black Impact",
      "price": "Rs. 252",
      "actualPrice": "Rs. 300",
      "offer": "(16% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
      "brand": "Lakme",
      "title": "Naturale Black Gel Kajal",
      "price": "Rs. 441",
      "actualPrice": "Rs. 475",
      "offer": "(7% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
      "brand": "FACES CANADA",
      "title": "Magneteyes Kajal Black 01",
      "price": "Rs. 139",
      "actualPrice": "Rs. 179",
      "offer": "(22% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2966311/2022/3/31/c85baf75-a526-47f1-bd27-c2a54e24b0581648724132330MaybellineNewYorkFaceStudioMasterChromeMetallicHighlighter-M1.jpg",
      "brand": "Maybelline",
      "title": "Studio Metallic Highlighter",
      "price": "Rs. 449",
      "actualPrice": "Rs. 599",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1546432/2022/4/1/3b25eb26-7876-4ca1-ba02-e6f93950777f1648804871850MaybellineNewYorkFitMeConcealer-10Light68ml1.jpg",
      "brand": "Maybelline",
      "title": "Fit Me Concealer - Light 10",
      "price": "Rs. 399",
      "actualPrice": "Rs. 499",
      "offer": "(20% OFF)"
    }
  ]



  
  Beauty.map(function(el){
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
  
  
    localStorage.setItem("BeautyProduct",JSON.stringify(Beauty))
    console.log("inside")
  
  })
 
