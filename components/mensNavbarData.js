
import {navbar} from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();


import { footer } from "./footer.js";
document.getElementById("footerDiv").innerHTML=footer();



let tshirt_arr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12816462/2020/11/24/ba18a805-4903-48a4-a136-c60ca39b22911606200984349-HERENOW-Men-Tshirts-1551606200983033-1.jpg",
      "Brand": "HERE&NOW",
      "type": "Men Solid Round Neck T-shirt",
      "price": "Rs. 227",
      "actualPrice": "Rs. 649",
      "off": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1816490/2018/4/7/11523090829974-HIGHLANDER-Men-Black-Slim-Fit-Solid-Round-Neck-T-shirt-2051523090829712-1.jpg",
      "Brand": "HIGHLANDER",
      "type": "Solid Round Neck Pure Cotton T-shirt",
      "price": "Rs. 351",
      "actualPrice": "Rs. 549",
      "off": "(36% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
      "Brand": "Roadster",
      "type": "Solid Round Neck Pure Cotton T-shirt",
      "price": "Rs. 299",
      "actualPrice": "Rs. 599",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9793521/2022/4/18/2924525f-037f-4021-b065-761d590593cf1650284877470RoadsterMenMaroonSolidRoundNeckPureCottonT-shirt1.jpg",
      "Brand": "Roadster",
      "type": "Solid Round Neck Pure Cotton T-shirt",
      "price": "Rs. 329",
      "actualPrice": "Rs. 599",
      "off": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2216201/2017/11/30/11512038271694-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8171512038271594-1.jpg",
      "Brand": "Roadster",
      "type": "Drop-Shoulder T-shirt",
      "price": "Rs. 349",
      "actualPrice": "Rs. 699",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1996725/2018/1/10/11515567400610-Roadster-Men-Blue-Solid-V-Neck-T-shirt-7321515567400387-1.jpg",
      "Brand": "Roadster",
      "type": "Solid V-Neck T-shirt",
      "price": "Rs. 299",
      "actualPrice": "Rs. 599",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1018611/2016/3/4/11457076915444-ETHER-Supima-White-T-shirt-2431457076914677-1.jpg",
      "Brand": "ether",
      "type": "Pure Cotton T-shirt",
      "price": "Rs. 329",
      "actualPrice": "Rs. 599",
      "off": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2275373/2018/1/24/11516793428292-Roadster-Men-Charcoal-Solid-Round-Neck-T-shirt-3641516793428158-1.jpg",
      "Brand": "Roadster",
      "type": "Solid Round Neck T-shirt",
      "price": "Rs. 199",
      "actualPrice": "Rs. 399",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10384503/2022/4/12/85aee619-a4ec-4c09-a456-e47412956b951649749384737-Roadster-Men-Olive-Green-Solid-Round-Neck-Pure-Cotton-T-shir-1.jpg",
      "Brand": "Roadster",
      "type": "Men Solid Round Neck Pure Cotton T-shirt",
      "price": "Rs. 299",
      "actualPrice": "Rs. 599",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10941384/2020/2/13/9447a845-892a-49f5-91ee-4de8a6589a541581587257528-Roadster-Men-Tshirts-8221581587255142-1.jpg",
      "Brand": "Roadster",
      "type": "Solid Round Neck Pure Cotton T-shirt",
      "price": "Rs. 549",
      "actualPrice": "Rs. 999",
      "off": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2310354/2018/2/15/11518692015450-Roadster-Men-Tshirts-3681518692015229-1.jpg",
      "Brand": "Roadster",
      "type": "T-shirt with Layered Hem",
      "price": "Rs. 239",
      "actualPrice": "Rs. 599",
      "off": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/3314157/2018/4/18/11524041081440-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3461524041081257-1.jpg",
      "Brand": "Roadster",
      "type": "Solid Round Neck T-shirt",
      "price": "Rs. 324",
      "actualPrice": "Rs. 499",
      "off": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13552828/2021/11/18/f5f8618d-7983-46ec-833d-ea7a650e20201637222081460-Bewakoof-Men-White-Pure-Cotton-T-shirt-5811637222081380-18.jpg",
      "Brand": "Bewakoof",
      "type": "Pure Cotton T-shirt",
      "price": "Rs. 399",
      "actualPrice": null,
      "off": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2306179/2019/3/8/649510bf-570a-4743-88bd-0bb1f354d3fe1552026562116-Roadster-Men-White-Solid-V-Neck-T-shirt-8741552026560838-1.jpg",
      "Brand": "Roadster",
      "type": "Slub Effect Raw Edge Pure Cotton T-shirt",
      "price": "Rs. 299",
      "actualPrice": "Rs. 599",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10188591/2019/9/26/70f45aeb-477e-48fb-b5e4-8820904196271569490421369-WROGN-Men-Burgundy-Solid-Slim-Fit-Round-Neck-T-shirt-9361569-1.jpg",
      "Brand": "WROGN",
      "type": "Men Solid Slim Fit Pure Cotton T-shirt",
      "price": "Rs. 539",
      "actualPrice": "Rs. 899",
      "off": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/18/6abf4e55-8a49-4b8e-9bd1-4a1534f8d90f1581980902307-1.jpg",
      "Brand": "Apsis",
      "type": "Solid Reversible Belt",
      "price": "Rs. 449",
      "actualPrice": "Rs. 1499",
      "off": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/7/3410a59b-a27c-44ed-b9a6-e908da8190451575679872752-1.jpg",
      "Brand": "WM",
      "type": "Men Analogue Watch",
      "price": "Rs. 399",
      "actualPrice": "Rs. 2499",
      "off": "(84% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/6/6ccc8673-a85a-4eae-aaba-8875ec5b331f1580943439526-1.jpg",
      "Brand": "amicraft",
      "type": "Men Reversible Solid Belt",
      "price": "Rs. 439",
      "actualPrice": "Rs. 2199",
      "off": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/20/73e8c2f4-ff95-4b7b-9919-f9e6fe9050401613794027463-1.jpg",
      "Brand": "MASH UNLIMITED",
      "type": "Men Solid Slim-Fit Track Pants",
      "price": "Rs. 548",
      "actualPrice": "Rs. 899",
      "off": "(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15522098/2021/9/29/c3639cbc-0e4f-4b23-96c1-bb0e3f8fbecd1632918636153-FELIX-Men-White-Dial--Black-Leather-Straps-Analogue-Watch-95-1.jpg",
      "Brand": "FELIX",
      "type": "Men Leather Analogue Watch",
      "price":  629,
      "actualPrice": "Rs. 3149",
      "off": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16091748/2021/11/15/9a41db06-3ae2-4fd6-bca2-516df267d4d41636962687638KETCHMenBeigeSlimFitJoggersTrousers1.jpg",
      "Brand": "KETCH",
      "type": "Men Slim Fit Joggers Trousers",
      "price": "Rs. 577",
      "actualPrice": "Rs. 1649",
      "off": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12983724/2020/12/8/edc628ce-92fd-4b84-9064-c348db661dbe1607426938676-Mast--Harbour-Men-Jeans-8661607426936872-1.jpg",
      "Brand": "Mast & Harbour",
      "type": "Men Skinny Fit Jeans",
      "price": "Rs. 809",
      "actualPrice": "Rs. 1799",
      "off": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341556/2021/2/23/a5983f22-f45a-467c-b77b-c6c520eef9471614072375613-Ultimo-9541614072374715-1.jpg",
      "Brand": "Ultimo",
      "type": "Men Solid Reversible Belt",
      "price": "Rs. 649",
      "actualPrice": "Rs. 1299",
      "off": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/27/cd061deb-7f38-42c1-a09b-6cecb4fd4a721624788728381-1.jpg",
      "Brand": "max",
      "type": "Men Striped Sliders",
      "price": "Rs. 449",
      "actualPrice": "Rs. 499",
      "off": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13703514/2022/3/23/a5328a08-e4d6-481f-93b7-563005c8cc0c1648026765141-Man-Arden-Men-7X-Beard-Oil-30ml-9521648026764982-1.jpg",
      "Brand": "Man Arden",
      "type": "Men Beard Oil 30ml",
      "price": "Rs. 314",
      "actualPrice": "Rs. 399",
      "off": "(Rs. 85 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/8/358e6360-dac2-4062-86c2-070967c40c2d1575761379950-1.jpg",
      "Brand": "WM",
      "type": "Men Analogue Watch",
      "price": "Rs. 399",
      "actualPrice": "Rs. 2499",
      "off": "(84% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/30/c6f32afe-e60c-407e-81c0-b591834745801606739420611-1.jpg",
      "Brand": "TnW",
      "type": "Men Solid Handcrafted Two Fold Wallet",
      "price": "Rs. 298",
      "actualPrice": "Rs. 1195",
      "off": "(75% OFF)"
    }
  ]
  
  // tesirt data end here



  // Casual sirt  data here

 let casualShirt =  [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2284523/2018/2/15/11518684805969-Roadster-Men-Navy-Blue--Green-Regular-Fit-Checked-Casual-Shirt-4471518684805162-1.jpg",
      "brand": "Roadster",
      "title": "Men Regular Check Casual Shirt",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1823142/2017/4/27/11493281526215-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-1.jpg",
      "brand": "WROGN",
      "title": "Slim Fit Checked Casual Shirt",
      "price": "Rs. 1379",
      "actualPrice": "Rs. 2299",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      "brand": "Dennis Lingo",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 684",
      "actualPrice": "Rs. 1849",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1362028/2016/8/31/11472638719005-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-1.jpg",
      "brand": "Roadster",
      "title": "Cotton Regular Checked Casual Shirt",
      "price": "Rs. 519",
      "actualPrice": "Rs. 1299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6714923/2019/3/6/343e1235-336c-401e-beab-afbb828448231551863812172-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-473155186-1.jpg",
      "brand": "Dennis Lingo",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 684",
      "actualPrice": "Rs. 1849",
      "offer": "(63% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2284691/2018/1/29/11517205743041-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-2871517205742822-1.jpg",
      "brand": "Roadster",
      "title": "Twill Casual Shirt",
      "price": "Rs. 479",
      "actualPrice": "Rs. 1199",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2338729/2018/8/30/25a48bec-c445-4e49-94f5-f85702bcd76e1535620402114-WROGN-Men-Red--Navy-Blue-Smart-Fit-Checked-Casual-Shirt-4501-1.jpg",
      "brand": "WROGN",
      "title": "Men Casual Shirt",
      "price": "Rs. 1499",
      "actualPrice": "Rs. 2499",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1667052/2022/4/18/a987b75a-2aaa-4b2e-85fb-5cf8e01b383d1650284962264RoadsterMenKhakiCheckedCasualSustainableShirt1.jpg",
      "brand": "Roadster",
      "title": "Checked Casual Shirt",
      "price": "Rs. 934",
      "actualPrice": "Rs. 1699",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/3/8/75750a68-13fc-4bd5-b91e-bd879aca9e1b1552028704151-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 767",
      "actualPrice": "Rs. 1449",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1758578/2017/5/12/11494569522819-WROGN-Men-Shirts-8521494569522516-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 1264",
      "actualPrice": "Rs. 2299",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1729391/2019/8/28/a9d4a7aa-af7e-4a37-a9d4-a94dc8c057e81566992341974-WROGN-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-52415669923403-1.jpg",
      "brand": "WROGN",
      "title": "Checked Casual Shirt",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7324885/2019/12/4/f383d293-415a-4606-ab12-cc07ab603ec41575437710624-HIGHLANDER-Men-Brown--Black-Slim-Fit-Checked-Casual-Shirt-81-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 766",
      "actualPrice": "Rs. 1299",
      "offer": "(41% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 569",
      "actualPrice": "Rs. 1899",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2256562/2018/2/5/11517823140053-HIGHLANDER-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-6531517823139956-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "price": "Rs. 739",
      "actualPrice": "Rs. 999",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1265389/2018/2/7/11517995810352-Highlander-Black-Slim-Fit-Casual-Shirt-1061517995810069-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Slim Fit Casual Shirt",
      "price": "Rs. 639",
      "actualPrice": "Rs. 999",
      "offer": "(36% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16044348/2021/11/9/66a7073f-9e01-4ba5-95f9-11930c6e10f71636459459715Dhotis1.jpg",
      "brand": "WHITE HEART",
      "title": "Solid Pure Cotton Double Dhoti",
      "price": "Rs. 485",
      "actualPrice": "",
      "offer": ""
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/11/21/b3eb713b-2e7b-4161-9248-dec3b074ef201574357961193-1.jpg",
      "brand": "Pacific Gold",
      "title": "Men Belt & Wallet Accessory Gift Set",
      "price": "Rs. 1221",
      "actualPrice": "Rs. 3700",
      "offer": "(67% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/bbb3e2ee-04b7-4d9b-8417-19700ceae5b71600470648296-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6704784/2018/6/11/f6670615-fcfd-4a5d-a48b-5d422e1bd3ee1528714953765-Belt-and-wallet-combo-4971528714953520-1.jpg",
      "brand": "Pacific Gold",
      "title": "Men Accessory Gift Set",
      "price": "Rs. 953",
      "actualPrice": "Rs. 2649",
      "offer": "(64% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/91199418-8704-44a4-9351-3cc68e8f6bfa1621494390335-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/20/27c23b7c-ea2e-4601-8195-52b7148d69791600558422229-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/27f24201-cf8d-4d7a-b7a2-94d6f36a40bc1600471564440-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8072751/2018/12/4/9fae1490-dc8e-4595-b905-6eaef63052791543913468462-WM-black-6511543913468314-1.jpg",
      "brand": "WM",
      "title": "Set Of 2 Analogue Watches",
      "price": "Rs. 799",
      "actualPrice": "Rs. 3999",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15862876/2021/12/15/136cc76b-a2b3-4e76-9fe5-1fd37473d1201639544298217-Roadster-Men-Casual-Shoes-141639544297854-1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Horsebit Mules",
      "price": "Rs. 1079",
      "actualPrice": "Rs. 2399",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/30b88124-0eeb-4faf-b2e0-53f4751f3d271600380802868-1.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/8e57496f-5f79-422b-974c-1a72d7fde0a91600382288830-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/13/fded9209-8168-4d1c-98a7-8db76ccc68041620880270594-1.jpg",
      "brand": "SCHARF",
      "title": "Men Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2399",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341552/2021/2/23/ca2856a5-3c4f-4f39-9949-4eb1e498741c1614066211256-Ultimo-321614066210821-1.jpg",
      "brand": "Ultimo",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 649",
      "actualPrice": "Rs. 1299",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16214790/2021/11/23/3ed89b05-0a3c-43c7-ba32-cc0282e52efc1637670546426CampusMenBlackRedPrintedSportsSandals1.jpg",
      "brand": "Campus",
      "title": "Men Printed Sports Sandals",
      "price": "Rs. 944",
      "actualPrice": "Rs. 1049",
      "offer": "(Rs. 105 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/82323dd3-644c-4a16-be56-9f2683ee9ea71600382981429-7.jpg",
      "brand": "WildHorn",
      "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    }
  ]

  // casual sirt end here




  // jeans data start here

  let jeansArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7786833/2019/9/25/55914283-1977-4328-9677-023537820a8b1569399773519-LOCOMOTIVE-Men-Grey-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-1.jpg",
      "brand": "LOCOMOTIVE",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1074",
      "actualPrice": "Rs. 2499",
      "offer": "(57% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7243639/2022/4/19/868d6eee-0649-44e4-b17b-2aa3e3b0fc9c1650366028127RoadsterMenBlackSlimFitMid-RiseCleanLookJeans1.jpg",
      "brand": "Roadster",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 679",
      "actualPrice": "Rs. 1699",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8706061/2019/4/2/e5a76652-ca96-47de-a7f4-ca92dc2483581554196084705-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchabl-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 688",
      "actualPrice": "Rs. 1299",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10187401/2019/9/6/4d898c8c-ed5a-4e03-8618-1e60af1a261d1567759098279-WROGN-Men-Jeans-1021567759096713-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1299",
      "actualPrice": "Rs. 2599",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7678836/2018/12/17/04fceac4-8e1b-4982-ba58-00485243a3481545031068966-Roadster-Men-Jeans-841545031064917-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 764",
      "actualPrice": "Rs. 1699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5669588/2018/6/12/0dcec4bb-3be9-4c67-9d9a-ecdcc937f98d1528807434080-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-4491528807433906-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 934",
      "actualPrice": "Rs. 1699",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10885024/2019/11/13/adb31de4-d904-42f0-b754-456351b9e5b91573647637113-IVOC-Mens-Denim-Joggers-8411573647633226-1.jpg",
      "brand": "IVOC",
      "title": "Men Jogger Jeans",
      "price": "Rs. 834",
      "actualPrice": "Rs. 1799",
      "offer": "(Rs. 965 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6544937/2018/7/11/867f2bfa-64f5-4c29-afa0-eed584bddb751531295865569-Roadster-Men-Jeans-7681531295865401-1.jpg",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 799",
      "actualPrice": "Rs. 1999",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8673413/2019/3/14/4c4ba5c0-e87a-430e-a267-f48f20a703621552564719527-WROGN-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-J-1.jpg",
      "brand": "WROGN",
      "title": "Men Skinny Fit Jeans",
      "price": "Rs. 1559",
      "actualPrice": "Rs. 2599",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12560198/2020/11/27/06786031-de7d-4adb-a02e-a00f1b4988e31606477259949-HERENOW-Men-Jeans-4651606477258027-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1999",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2428491/2018/2/1/11517477484451-HERENOW-Men-Jeans-141517477484325-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Cropped Tapered Fit Jeans",
      "price": "Rs. 749",
      "actualPrice": "Rs. 2499",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2150846/2017/10/19/11508406968179-HERENOW-Men-Blue-Slim-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-7261508406968007-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 779",
      "actualPrice": "Rs. 2599",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13823708/2022/4/26/ac356453-1770-442b-83d5-734f86645e2f1650961872384-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
      "brand": "Urbano Fashion",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 755",
      "actualPrice": "Rs. 1399",
      "offer": "(46% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9162839/2022/4/20/65a4b6eb-29dd-4b1d-bda8-96a18a5c4f421650446666508HIGHLANDERMenBlackTaperedFitMid-RiseCleanLookStretchableJean1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Tapered Fit Jeans",
      "price": "Rs. 688",
      "actualPrice": "Rs. 1299",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
      "brand": "WROGN",
      "title": "Men Slim Fit Jeans",
      "price": "Rs. 1439",
      "actualPrice": "Rs. 2399",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15557090/2021/9/21/9868e070-3272-44d3-a7a4-71948d12dac01632231292988KLOTTHEMenGrey2PoloCollarPocketsT-shirt1.jpg",
      "brand": "KLOTTHE",
      "title": "Men Printed Polo Collar Pockets T-shirt",
      "price": "Rs. 698",
      "actualPrice": "Rs. 2329",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12918952/2021/1/13/bd0de45e-c771-4bbd-9bdb-d9db59699a9e1610514155139-Roadster-Men-Shirts-2181610514153187-1.jpg",
      "brand": "Roadster",
      "title": "Pack Of 2 Solid Casual Shirt",
      "price": "Rs. 1214",
      "actualPrice": "Rs. 2699",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/d93a97a4-de0b-4d45-a5cc-5fca98f55a171584574624556-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/8/a421647f-fad1-4293-b336-95c1c2330b9c1575758234024-1.jpg",
      "brand": "WM",
      "title": "Men Leather Analogue Watch",
      "price": "Rs. 399",
      "actualPrice": "Rs. 2499",
      "offer": "(84% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10863004/2020/4/6/e27368e2-9ced-426c-a700-c80c2d08a1371586151984972-Roadster-Men-Pack-Of-Two-Black--Grey-Regular-Fit-Solid-Casua-1.jpg",
      "brand": "Roadster",
      "title": "Regular Fit Pack of Two Shirts",
      "price": "Rs. 1374",
      "actualPrice": "Rs. 2499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11895986/2020/8/12/312abeb3-7b15-4382-ab53-b57cf39a9c761597216507405-Roadster-Men-Shirts-41597216506028-1.jpg",
      "brand": "Roadster",
      "title": "Regular Printed Casual Shirt",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/16/906ec19c-1883-4577-9def-fea0ff5efb6d1608134200868-1.jpg",
      "brand": "cape canary",
      "title": "Regular Fit Casual Shirt",
      "price": "Rs. 674",
      "actualPrice": "Rs. 1499",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/a85c9c26-12dc-470c-afcb-e1e9a2650fc51610167480222-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Solid Sustainable Belt",
      "price": "Rs. 527",
      "actualPrice": "Rs. 1198",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/10/23/7ee63e6d-9f48-430e-a621-8eb2712aeb331571769108774-1.jpg",
      "brand": "Kara",
      "title": "Men Solid Belt",
      "price": "Rs. 1399",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/20/4454f0e2-6d1a-47f2-9f16-25911f635d541584657926107-1.jpg",
      "brand": "CRUSSET",
      "title": "Textured Belt",
      "price": "Rs. 524",
      "actualPrice": "Rs. 1499",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10944912/2020/3/12/09d222e8-260c-4774-a037-96b5ad826c5d1584009890617-Roadster-Men-Shirts-8851584009888652-1.jpg",
      "brand": "Roadster",
      "title": "Regular Checked Casual Shirt",
      "price": "Rs. 599",
      "actualPrice": "Rs. 1499",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13341490/2021/2/23/4fd35ff2-7496-4ffc-992b-f028c85634b11614050482980-ULTIMO-3861614050482203-1.jpg",
      "brand": "Ultimo",
      "title": "Men Checked Reversible Belt",
      "price": "Rs. 519",
      "actualPrice": "Rs. 1299",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/6/9ef0523f-f7ac-42c6-9d33-ba65bc7bb8971580945568074-1.jpg",
      "brand": "amicraft",
      "title": "Men Textured Reversible Belt",
      "price": "Rs. 439",
      "actualPrice": "Rs. 2199",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10398211/2019/11/25/7ab8bc06-f264-45e3-82bf-7c79f02812211574658986116-Roadster-Men-Shirts-8711574658983724-1.jpg",
      "brand": "Roadster",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 539",
      "actualPrice": "Rs. 1199",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12251302/2020/9/24/5ca02381-c7df-4299-af12-4cfa29bcc4f61600948098090-Roadster-Men-Tshirts-171600948095917-1.jpg",
      "brand": "Roadster",
      "title": "Printed Round Neck Pure Cotton T-shirt",
      "price": "Rs. 399",
      "actualPrice": "Rs. 799",
      "offer": "(50% OFF)"
    }
  ]

// jeans data end here


    let casualTrauserARR = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/12/b58188ba-77dd-4fc7-bd86-c8cad24a4da91605128902262-1.jpg",
      "brand": "Quechua By Decathlon",
      "title": "Men Trousers",
      "price": "Rs. 1699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13159756/2021/10/28/bba53106-be0b-4a56-9c54-938c050f1e681635397565779-HERENOW-Men-Khaki-Slim-Fit-Joggers-Trousers-6931635397565058-1.jpg",
      "brand": "HERE&NOW",
      "title": "Men Printed Jogger Trousers",
      "price": "Rs. 1139",
      "actualPrice": "Rs. 3799",
      "offer": "(70% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/11/824792dc-9629-4d46-80cc-6f8995d7ef571610360852562-1.jpg",
      "brand": "Breakbounce",
      "title": "Men Slim Fit Joggers",
      "price": "Rs. 1034",
      "actualPrice": "Rs. 2299",
      "offer": "(55% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8209403/2019/8/22/691ae9ad-4342-4dd6-ae59-03601a27eafd1566479499415-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Cargos-4361566479497959-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 924",
      "actualPrice": "Rs. 1849",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389026/2018/2/13/11518499099305-Hubberholme-Men-Beige-Slim-Fit-Solid-Cargos-5611518499099225-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2343636/2018/4/3/11522753442408-HIGHLANDER-Men-Grey-Slim-Fit-Solid-Joggers-5881522753442218-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Joggers",
      "price": "Rs. 873",
      "actualPrice": "Rs. 1649",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389024/2018/2/13/11518499083955-Hubberholme-Men-Blue-Slim-Fit-Solid-Cargos-3051518499083872-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 914",
      "actualPrice": "Rs. 1499",
      "offer": "(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15923976/2021/10/26/e0d19c60-d23b-4570-b542-71206c9f116c1635231969002HIGHLANDERMenBlueSlimFitCargosTrousers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Jogger Cargos",
      "price": "Rs. 1085",
      "actualPrice": "Rs. 2049",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13737006/2021/3/2/b337be4f-8f03-43a3-b893-845e9c5de9651614681709969-Hubberholme-Men-Trousers-991614681708306-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos Pants",
      "price": "Rs. 929",
      "actualPrice": "Rs. 1499",
      "offer": "(38% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2290039/2019/8/22/9d7b2585-8dad-4bf5-bb2d-b9311a5db3c21566479165516-HIGHLANDER-Men-Black-Tapered-Fit-Solid-Chinos-66615664791644-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Tapered Fit Chinos",
      "price": "Rs. 820",
      "actualPrice": "Rs. 1549",
      "offer": "(47% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11761660/2022/4/7/9adffe9c-cd64-4ae8-9ad4-6f5c6c4d1b211649328829260HubberholmeMenBrownSlimFitSolidCargos1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15193444/2021/8/19/2b5c68a8-6081-4f20-b33c-96d80c6b97a91629350010636Cargojoggers1.jpg",
      "brand": "H&M",
      "title": "Men Cargo Joggers",
      "price": "Rs. 2699",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/4/9/07d57b24-1ea2-40b5-bbcb-3b6ecc40cfe31617971753593-1.jpg",
      "brand": "Pepe Jeans",
      "title": "Men Regular Fit Cargos",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389029/2018/2/13/11518499123014-Hubberholme-Men-Brown-Slim-Fit-Solid-Cargos-441518499122964-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 989",
      "actualPrice": "Rs. 1499",
      "offer": "(34% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2389028/2018/2/13/11518499115458-Hubberholme-Men-Navy-Blue-Slim-Fit-Solid-Cargos-9761518499115386-1.jpg",
      "brand": "Hubberholme",
      "title": "Men Slim Fit Cargos",
      "price": "Rs. 914",
      "actualPrice": "Rs. 1499",
      "offer": "(39% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/23/5d65d390-43e0-4cf2-848c-b7c3518e8d191606119681047-1.jpg",
      "brand": "Friskers",
      "title": "Printed Hood T-shirt",
      "price": "Rs. 629",
      "actualPrice": "Rs. 999",
      "offer": "(37% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15557220/2021/9/21/a26f02ca-7b26-4272-a3aa-d189b29346bf1632232962624KLOTTHEMenOrangeTypography2PocketsT-shirt1.jpg",
      "brand": "KLOTTHE",
      "title": "Men Pack of 2 Printed T-shirts",
      "price": "Rs. 652",
      "actualPrice": "Rs. 2329",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/4323771/2019/2/5/7d6bc087-9f42-4b32-ac48-b3fa1d8583cd1549356451702-Wildcraft-Men-Black-Printed-Rucksack-3681549356450753-1.jpg",
      "brand": "Wildcraft",
      "title": "Men Printed Rucksack",
      "price": "Rs. 3989",
      "actualPrice": "Rs. 5699",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1959406/2017/10/28/11509183864082-Roadster-Men-Olive-Green-Solid-Hooded-Sweatshirt-711509183863891-1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Sweatshirt",
      "price": "Rs. 1899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9951393/2019/8/22/d57c6740-e85c-434a-bb40-cf765c7a961c1566475032107-Roadster-Men-Shirts-9581566475030373-1.jpg",
      "brand": "Roadster",
      "title": "Men Casual Denim Shirt",
      "price": "Rs. 759",
      "actualPrice": "Rs. 1899",
      "offer": "(60% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/5/99ccf9d4-bf61-4636-b44b-6dd9a17009861609854448355-1.jpg",
      "brand": "Free Authority",
      "title": "Men Joker Print Neck Gaiter",
      "price": "Rs. 349",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/5491f43b-955b-46bb-a7dc-f99d7b71350d1621491582175-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2508117/2018/5/11/02d14673-59b7-404c-93a5-3fa778d61b3e1526033060695-Roadster-Men-Olive-Green-Regular-Fit-Printed-Casual-Shirt-4221526033060542-1.jpg",
      "brand": "Roadster",
      "title": "Men Cotton Casual Shirt",
      "price": "Rs. 749",
      "actualPrice": "Rs. 1499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16366676/2021/12/4/6a2a0cbc-15de-42b5-a380-9b2fb08b7fae1638606618774appulseMenMulticoloured2ColourblockedPocketsSlimFitT-shirt1.jpg",
      "brand": "appulse",
      "title": "Men Pack of 2 Slim Fit T-shirt",
      "price": "Rs. 2998",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14965844/2021/8/8/26d55006-28d4-4aea-bad2-a1796a1a561c1628398432290-Digital-Dress-Room-Men-Cream-Coloured--Gold-Toned-AD-Studded-1.jpg",
      "brand": "Digital Dress Room",
      "title": "Men AD-Studded Letter Z Rakhi",
      "price": "Rs. 599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/30/569c4ddd-680a-495a-9a88-1b5cdf6a745b1625038179644-1.jpg",
      "brand": "Blacksmith",
      "title": "Cufflink",
      "price": "Rs. 524",
      "actualPrice": "Rs. 1499",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13808678/2021/4/20/8d564db4-1c24-40d7-b573-3628f908d0311618899890767-Lee-Cooper-Men-Casual-Shoes-8131618899889863-1.jpg",
      "brand": "Lee Cooper",
      "title": "Men Leather Flat Boots",
      "price": "Rs. 2309",
      "actualPrice": "Rs. 3299",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13561530/2021/3/15/247f10d4-f53b-4ca1-aba9-75a822caac661615795399058-MANARI-India-Men-Olive-Green-Reusable-5-Ply-Camo-Full-Covera-1.jpg",
      "brand": "MANARI India",
      "title": "Men 5 Ply Sustainable Mask",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1099",
      "offer": "(Rs. 400 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/17/a4c1ef39-efc0-4199-bf7a-5524e45d7b091613558895610-1.jpg",
      "brand": "Big Fox",
      "title": "Men High-Top Flat Boots",
      "price": "Rs. 1159",
      "actualPrice": "Rs. 1999",
      "offer": "(42% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1630942/2017/2/23/11487846661634-RDSTR-Men-Charcoal-Grey-Chronograph-Watch-MFB-PN-WTH1606-A-7551487846661480-1.jpg",
      "brand": "Roadster",
      "title": "Men Chronograph Watch",
      "price": "Rs. 1014",
      "actualPrice": "Rs. 2899",
      "offer": "(65% OFF)"
    }
  ]

  //// casual trauser  end here 


  ///// footware section start here

  // CasualShoes start here

   let casualShoesArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756898/2021/12/14/066bfe87-ef05-4cc9-8769-cee2a63b50b91639473787244RoadsterMenWhiteSolidSneakers1.jpg",
      "brand": "Roadster",
      "title": "Men Solid Sneakers",
      "price": "Rs. 2899",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12068002/2021/8/5/0a5fec8d-e917-4e8f-9b71-0288a26be52e1628146013628HIGHLANDERMenWhiteSneakers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11945014/2021/5/17/b214346d-8a65-4a91-b2e3-bf8f632db13f1621223871248-Provogue-Men-Blue-Loafers-5161621223871159-6.jpg",
      "brand": "Provogue",
      "title": "Men Solid Loafers",
      "price": "Rs. 849",
      "actualPrice": "Rs. 4245",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11756892/2021/12/14/e141e830-7352-4e67-a119-e6e8da1682fd1639478472050-Roadster-Men-Grey-Solid-Suede-Finish-Sneakers-75316394784715-1.jpg",
      "brand": "Roadster",
      "title": "Men Suede Finish Sneakers",
      "price": "Rs. 2999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16016368/2021/11/5/a865e870-1060-4c73-b7fa-0f54a17d834b1636111288189MactreeMenWhiteColourblockedPUSneakers6.jpg",
      "brand": "Mactree",
      "title": "Men Colourblocked PU Sneakers",
      "price": "Rs. 744",
      "actualPrice": "Rs. 3720",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/8/14/cd6632e5-a2c6-4ec2-a3d8-9a6a6c59e0f51565782726402-1.jpg",
      "brand": "H&M",
      "title": "Men Trainers",
      "price": "Rs. 1999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14925430/2021/7/24/f6e8ad02-39f7-4741-8c6b-e650e3364f9e1627112482546USPoloAssnMenOffWhiteSneakers1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Casual Sneakers",
      "price": "Rs. 1799",
      "actualPrice": "Rs. 2999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067992/2021/2/22/090fc394-cf26-43b7-807d-134ca7c68b911613970123853-HIGHLANDER-Men-White-Sneakers-5371613970122157-6.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15839406/2021/11/12/54e4c724-80c7-45f9-aa32-167ffa9623741636705114683-US-Polo-Assn-Men-Casual-Shoes-2501636705113615-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Solid Slip-On Sneakers",
      "price": "Rs. 1949",
      "actualPrice": "Rs. 2599",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15630218/2021/9/29/bda9fe48-193c-4a64-8e2a-a8e60bd6e2d61632884288144Trainers1.jpg",
      "brand": "H&M",
      "title": "Men Trainers",
      "price": "Rs. 1999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11497178/2020/2/24/717b8fd1-c6f0-4db9-8021-7f3e0201103e1582535122670-US-Polo-Assn-Men-White-Sneakers-9531582535121583-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Sneakers",
      "price": "Rs. 3999",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12067984/2021/2/2/0425f19a-852a-45e6-a1f6-7c80526a158f1612240158034-HIGHLANDER-Men-White-Sneakers-2351612240156845-6.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Solid Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/9785479/2021/2/17/9b109c7d-39f4-499c-9900-8e2e394cf75d1613525159914LOCOMOTIVEMenWhiteSneakers1.jpg",
      "brand": "LOCOMOTIVE",
      "title": "Men Sneakers",
      "price": "Rs. 895",
      "actualPrice": "Rs. 995",
      "offer": "(10% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11097166/2019/12/10/cb47b7dc-e28a-4559-8388-8b82762b27681575980908117-HIGHLANDER-Men-White-Sneakers-661575980906633-1.jpg",
      "brand": "HIGHLANDER",
      "title": "Men Sneakers",
      "price": "Rs. 995",
      "actualPrice": "Rs. 1990",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11713274/2020/3/21/701cb210-4751-4a5e-b771-cc40d0b783b71584800012175-Calvadoss-Men-Black--Brown-Premium-Belt--Wallet-Gift-Set-277-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/29/40d180a2-b37a-40a7-89e8-16bcb5c38b231609243673701-1.jpg",
      "brand": "Bonjour",
      "title": "Men Pack of 3 Assorted Ankle-Length Socks",
      "price": "Rs. 525",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13603700/2021/2/6/d1d13161-c06c-4b4a-8810-0458fe8275541612610102977BalenziaMenPackof3AssortedSneakerSocks1.jpg",
      "brand": "Balenzia",
      "title": "Men Pack of 3 Assorted Sneaker Socks",
      "price": "Rs. 507",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16587998/2022/3/23/87d2ab5e-2298-4808-8593-2c22f827b47b1648027399616-Man-Arden-Men-Brown-Pure-Neem-Wooden-U-Shaped-Beard-Comb-wit-1.jpg",
      "brand": "Man Arden",
      "title": "Men Pure Neem Wooden U Shaped Beard Comb with Premium Faux Leather Pouch",
      "price": "Rs. 299",
      "actualPrice": "Rs. 349",
      "offer": "(Rs. 50 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14965866/2021/8/6/78f3863a-5772-4fe0-a620-3fe64035adb21628240108771DigitalDressRoomMenGold-PlatedWhiteAD-StuddedLetterCRakhi1.jpg",
      "brand": "Digital Dress Room",
      "title": "Men Gold-Plated AD-Studded Letter C Rakhi",
      "price": "Rs. 599",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1765378/2017/2/17/11487321663088-Balenzia-Men-Socks-811487321663420-1.jpg",
      "brand": "Balenzia",
      "title": "Anti-Slip Loafer Socks",
      "price": "Rs. 596",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/26/88d00007-d6aa-4d16-aadf-f7ba9efcc3fe1624729764501-1.jpg",
      "brand": "VIMAL JONNEY",
      "title": "Men Set of 2 Printed T-shirts",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1998",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10708120/2022/4/13/8baa52de-e0d8-4562-89a2-b80fa64f486f1649845487459FossilTheCarlyleHRMenBlackGen5DigitalLeatherSmartwatchFTW4021.jpg",
      "brand": "Fossil",
      "title": "Men Gen 5 Digital Leather Smartwatch",
      "price": "Rs. 14995",
      "actualPrice": "Rs. 22995",
      "offer": "(Rs. 8000 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17147062/2022/2/14/d2d68866-455a-4ced-8672-cc680cd59c001644814631987ArdeurMensStylishPllusSizeCottonJoggers1.jpg",
      "brand": "ARDEUR",
      "title": "Men Plus Size Joggers",
      "price": "Rs. 790",
      "actualPrice": "Rs. 1499",
      "offer": "(Rs. 709 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16490548/2021/12/13/26cc0c9a-add8-4063-931f-62ab86e42b901639367761605SIDEWOKAnkleLengthCottonSelfDesignSocksforMen-Packof51.jpg",
      "brand": "SIDEWOK",
      "title": "Men 5 Pcs Combed Cotton Socks",
      "price": "Rs. 489",
      "actualPrice": "Rs. 999",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/26/997994e5-4a5d-4c99-aca1-6b915f585d2e1616766707781-1.jpg",
      "brand": "The Tie Hub",
      "title": "Checked Pre-Tied Bow Tie",
      "price": "Rs. 1500",
      "actualPrice": "Rs. 3000",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11778746/2020/4/1/0d286dc1-ad22-4fa2-a284-7ac2ed7af3f51585738362006WELBAWT1.jpg",
      "brand": "WELBAWT",
      "title": "Men Reversible Leather Belt",
      "price": "Rs. 1099",
      "actualPrice": "Rs. 1999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16280330/2021/11/27/3729008a-2e48-4dfd-877d-36dc00c6ed051638027321751MancodeDe-TanScrub100gmDe-TanPeeloffMask100gmComboof21.jpg",
      "brand": "MANCODE",
      "title": "Men De-Tan Scrub & Mask",
      "price": "Rs. 455",
      "actualPrice": "Rs. 700",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16061380/2021/11/11/a83188ad-abb6-46a6-9729-2cacdb955b8e1636615520888DanielKleinMenBlueDialBlueLeatherStrapsAnalogueWatchDK1123591.jpg",
      "brand": "Daniel Klein",
      "title": "Men Leather Straps Watch",
      "price": "Rs. 2425",
      "actualPrice": "Rs. 4950",
      "offer": "(51% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14966978/2021/7/29/831313f0-3b9c-48c1-8072-b3902552550b1627530730029HotIceScandalHommeDeodorant200mlEach-Setof21.jpg",
      "brand": "Hot Ice",
      "title": "Men Set of 2 Deodorant",
      "price": "Rs. 495",
      "actualPrice": "Rs. 550",
      "offer": "(10% OFF)"
    }
  ]

  /// casual shoes end here///

  //sports arr 


  let SportsShoesArr = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8058351/2022/1/4/5c0a11c6-3193-43d1-99ad-067b264b8cf61641295613595-HRX-by-Hrithik-Roshan-Men-Black-Urban-Outdoor-Running-Shoe-4-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Men Urban Outdoor Running Shoe",
      "price": "Rs. 3024",
      "actualPrice": "Rs. 5499",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15226458/2021/8/23/abda7767-9bdb-48cb-90c8-026efaeabffc1629721241687SportsShoes1.jpg",
      "brand": "Puma",
      "title": "Men Anzarun Lite V3 IDP Run",
      "price": "Rs. 2449",
      "actualPrice": "Rs. 3499",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13483748/2022/3/24/a5439bbb-226b-4104-bbd2-64d3d9998d6b1648107968374PumaMenWhiteCELLVALIANTSLRunningShoes1.jpg",
      "brand": "Puma",
      "title": "Men CELL VALIANT SL Shoes",
      "price": "Rs. 4549",
      "actualPrice": "Rs. 6999",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703398/2022/4/27/1ef5f34e-fa0e-416a-ba3f-1f50855611461651050543321PumaMenWhiteEscaperSLRunningSportsShoes1.jpg",
      "brand": "Puma",
      "title": "Men Escaper SL Shoes",
      "price": "Rs. 3299",
      "actualPrice": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14824822/2021/8/23/4c997245-e8d5-4e56-8a91-9096693d80131629712617426-Puma-Men-Sports-Shoes-521629712616966-1.jpg",
      "brand": "Puma",
      "title": "Men Jamming 2.0 Running Shoes",
      "price": "Rs. 11049",
      "actualPrice": "Rs. 12999",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703466/2018/6/11/93a747f9-54da-4f47-97db-a812de6702251528698311878-Running-1351528698311718-1.jpg",
      "brand": "Puma",
      "title": "Men Running Shoes",
      "price": "Rs. 3574",
      "actualPrice": "Rs. 5499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11938692/2020/6/15/8e39d227-b791-4d60-8442-be820bcc0dcf1592217999977Pumagrey1.jpg",
      "brand": "Puma",
      "title": "Men Running Shoes",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10334347/2020/11/13/ea6514b3-e3e4-4339-bacd-3977457ad1ee1605257668889-US-Polo-Assn-Men-Off-White-Textile-Walking-Shoes-76016052576-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men Walking Shoes",
      "price": "Rs. 2199",
      "actualPrice": "Rs. 3999",
      "offer": "(45% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14521968/2021/12/24/3a3cc02d-17bc-4423-8fc2-342a1b00d1df1640343251519-Puma-Men-Black-Mesh-Running-Shoes-1071640343251207-1.jpg",
      "brand": "Puma",
      "title": "Eternity Nitro Running Shoes",
      "price": "Rs. 11049",
      "actualPrice": "Rs. 12999",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6703405/2018/7/3/6ae532e9-9419-4342-96f6-37f0f047ffb61530620273965-Puma-Men-Black-Viz-Runner-Running-Shoes-821530620273760-1.jpg",
      "brand": "Puma",
      "title": "Men Viz Running Shoes",
      "price": "Rs. 3574",
      "actualPrice": "Rs. 5499",
      "offer": "(35% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14367616/2021/8/12/07269c5b-cd27-4716-9709-583e7eac513d1628768262239-US-Polo-Assn-Men-White-LEBRON-20-Walking-Shoes-3021628768261-1.jpg",
      "brand": "U.S. Polo Assn.",
      "title": "Men LEBRON 2.0 Walking Shoes",
      "price": "Rs. 2399",
      "actualPrice": "Rs. 3999",
      "offer": "(40% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/30/7426c955-48fd-48c1-994b-c2221f40f39a1617090592324-1.jpg",
      "brand": "Domyos By Decathlon",
      "title": "Men Training & Gym Shoes",
      "price": "Rs. 2279",
      "actualPrice": "Rs. 3999",
      "offer": "(43% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/14/860b14a7-5bcf-4d09-920d-91e2e9bebfa21602633763764-1.jpg",
      "brand": "Woakers",
      "title": "Men Running Shoes",
      "price": "Rs. 681",
      "actualPrice": "Rs. 3405",
      "offer": "(80% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/8/5f287707-5817-4322-85ab-ce1d8b4d424c1602114254212-1.jpg",
      "brand": "Puma",
      "title": "Men Minima Running Shoes",
      "price": "Rs. 3249",
      "actualPrice": "Rs. 6499",
      "offer": "(50% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12282146/2020/11/9/2f878da8-b88c-4bbd-997c-8a39e0f33e5b1604905105117-Puma-Men-Sports-Shoes-4491604905103244-1.jpg",
      "brand": "Puma",
      "title": "Men Runner IDP Running Shoes",
      "price": "Rs. 2799",
      "actualPrice": "Rs. 3999",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/a785ee60-d670-4be3-9a2c-7b33b9cefb221584596192881-1.jpg",
      "brand": "Calvadoss",
      "title": "Men Premium Belt & Wallet Accessory Gift Set",
      "price": "Rs. 782",
      "actualPrice": "Rs. 2899",
      "offer": "(73% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15377500/2021/9/6/6dce8d21-d4ae-48bd-8e97-a063d0c552011630929856422LighteningBrighteningLiquoriceDeTanFaceScrub1.jpg",
      "brand": "UrbanMooch",
      "title": "Mens DeTan Face Scrub 100gm",
      "price": "Rs. 280",
      "actualPrice": "Rs. 400",
      "offer": "(30% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15360426/2021/9/23/b23eae78-66ca-4f84-bf51-51e075de0a0a1632394527514SKINKRAFTTransparentCustomizedSkincareKit1.jpg",
      "brand": "SKINKRAFT",
      "title": "Men Customized Skincare Kit",
      "price": "Rs. 1186",
      "actualPrice": "Rs. 2697",
      "offer": "(56% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/26/6b2b8655-9114-4cc5-a21b-ec98fa00089d1616775442097-1.jpg",
      "brand": "KIPRUN By Decathlon",
      "title": "Men Regular Fit Sports Shorts",
      "price": "Rs. 1563",
      "actualPrice": "Rs. 1699",
      "offer": "(8% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/19/887f76f0-ef4a-47f7-9688-3f222230c5ed1600467325986-7.jpg",
      "brand": "WildHorn",
      "title": "Men Leather Accessory Gift Set",
      "price": "Rs. 839",
      "actualPrice": "Rs. 2999",
      "offer": "(72% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/30/0d4e74a1-6675-46f0-a726-dbfb5c8f18491617100823703-1.jpg",
      "brand": "ABYS",
      "title": "Leather Two Fold Wallet",
      "price": "Rs. 528",
      "actualPrice": "Rs. 1125",
      "offer": "(53% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/6/26/88d00007-d6aa-4d16-aadf-f7ba9efcc3fe1624729764501-1.jpg",
      "brand": "VIMAL JONNEY",
      "title": "Men Set of 2 Printed T-shirts",
      "price": "Rs. 699",
      "actualPrice": "Rs. 1998",
      "offer": "(65% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/12/b1e9f736-cea6-46d4-b6ab-dea6d7884c991620800987869-1.jpg",
      "brand": "Blacksmith",
      "title": "Men Satin Accessory Gift Set",
      "price": "Rs. 614",
      "actualPrice": "Rs. 1499",
      "offer": "(59% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16587998/2022/3/23/87d2ab5e-2298-4808-8593-2c22f827b47b1648027399616-Man-Arden-Men-Brown-Pure-Neem-Wooden-U-Shaped-Beard-Comb-wit-1.jpg",
      "brand": "Man Arden",
      "title": "Men Pure Neem Wooden U Shaped Beard Comb with Premium Faux Leather Pouch",
      "price": "Rs. 299",
      "actualPrice": "Rs. 349",
      "offer": "(Rs. 50 OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/5/20/91199418-8704-44a4-9351-3cc68e8f6bfa1621494390335-1.jpg",
      "brand": "MANCODE",
      "title": "Pack of 2 Beard Oil & Soap",
      "price": "Rs. 350",
      "actualPrice": "Rs. 474",
      "offer": "(26% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/11/2/aad7f05a-3137-4939-9a87-886944c40b331604320382744-1.jpg",
      "brand": "LetsShave",
      "title": "Set Of 12 Pro 6 Shaving Blades",
      "price": "Rs. 1999",
      "actualPrice": "Rs. 2666",
      "offer": "(25% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16167628/2021/12/22/555c6bef-a9ce-4480-a4b9-c8d43a55d96d1640172496555-NOVA-Men-Trimmer-461640172496231-1.jpg",
      "brand": "NOVA",
      "title": "Men NHT 1038 Trimmer",
      "price": "Rs. 1100",
      "actualPrice": "Rs. 1295",
      "offer": "(15% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10012959/2021/12/18/c8ac8bca-3148-4bd5-8be8-8b3cab5b46ad1639769257677JEWELJUNCTIONSilver-TonedGeometricCufflinks1.jpg",
      "brand": "JEWEL JUNCTION",
      "title": "Geometric Cufflinks",
      "price": "Rs. 413",
      "actualPrice": "Rs. 1799",
      "offer": "(77% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/18/1291dbc7-859c-45a6-ba50-2103d0f9f4791616054135168-1.jpg",
      "brand": "MANCODE",
      "title": "Combo Of 2 Beard Cream & Soap",
      "price": "Rs. 324",
      "actualPrice": "Rs. 450",
      "offer": "(28% OFF)"
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16499748/2021/12/13/ea7928c8-b19c-4400-934e-7dbd26b3d2e21639403971569MensGroomingKit1.jpg",
      "brand": "Havells",
      "title": "HS4150 Hair Straightener",
      "price": "Rs. 1715",
      "actualPrice": "Rs. 1995",
      "offer": "(14% OFF)"
    }
  ]
  /////// Sports Shoes end here

  //// Sports & Active Wear start here
/// Sports Shoes  start here

///Fashion Accessories
// wallets   


let Wallets = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214618/2021/8/21/09ead0b2-bca9-43d6-af11-96758dd051821629487558186MenBrownSolidGenuineLeatherZipAroundWallet1.jpg",
    "brand": "Teakwood Leathers",
    "title": "Mem Textured Two Fold Wallet",
    "price": "Rs. 799",
    "actualPrice": "Rs. 1999",
    "offer": "(60% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904066/2021/7/22/37afe654-2efb-45f0-b3c5-5949da232d4c1626967626123WildHornMenBrownSolid1.jpg",
    "brand": "WildHorn",
    "title": "Men Solid Two-Fold Wallet",
    "price": "Rs. 575",
    "actualPrice": "Rs. 2399",
    "offer": "(76% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214620/2021/8/21/52b2cc0c-2ee5-468d-a8bb-459ba94de0ab1629487546139MenBrownSolidGenuineLeatherTwoFoldWallet1.jpg",
    "brand": "Teakwood Leathers",
    "title": "Leather Two Fold Wallet",
    "price": "Rs. 699",
    "actualPrice": "Rs. 1749",
    "offer": "(60% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11658994/2021/10/30/363104e8-6e34-42e2-b979-d0c26108eebb1635567477042-WildHorn-Men-Green-Solid-RFID-Protected-Leather-Two-Fold-Wal-7.jpg",
    "brand": "WildHorn",
    "title": "Leather Two Fold Wallet",
    "price": "Rs. 579",
    "actualPrice": "Rs. 1999",
    "offer": "(71% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904050/2021/7/22/63ddd620-a354-4050-b550-adac6de135891626967329052WildHornMenBrownPrinted1.jpg",
    "brand": "WildHorn",
    "title": "Men Printed Two-Fold Wallet",
    "price": "Rs. 575",
    "actualPrice": "Rs. 2399",
    "offer": "(76% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647838/2021/10/30/585827f3-aa59-4647-8f68-6ada00282f6c1635567191001-WildHorn-Men-Black-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
    "brand": "WildHorn",
    "title": "RFID Protected Leather Wallet",
    "price": "Rs. 539",
    "actualPrice": "Rs. 1999",
    "offer": "(73% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904086/2021/7/22/d68299c5-f479-45e0-846d-af08482bf78a1626967284512WildHornMenBrownSolid1.jpg",
    "brand": "WildHorn",
    "title": "Leather Two Fold Wallet",
    "price": "Rs. 575",
    "actualPrice": "Rs. 2399",
    "offer": "(76% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15214632/2021/8/21/3d1b5740-8050-4e09-8aa1-c340f9d9fe871629487576992MenTanSolidGenuineLeatherTwoFoldWallet1.jpg",
    "brand": "Teakwood Leathers",
    "title": "Men Solid Two-Fold Wallet",
    "price": "Rs. 699",
    "actualPrice": "Rs. 1749",
    "offer": "(60% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532782/2021/12/16/50fccd28-6364-4729-a042-11bbd89d81261639644918709ProvogueMenBronzeSolid1.jpg",
    "brand": "Provogue",
    "title": "RFID Two Fold Wallet",
    "price": "Rs. 389",
    "actualPrice": "Rs. 1299",
    "offer": "(70% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14904040/2021/7/22/1e32d782-b609-4953-8116-06dd9f9155231626967393348WildHornMenBlackSolid1.jpg",
    "brand": "WildHorn",
    "title": "Men Solid Two-Fold Wallet",
    "price": "Rs. 551",
    "actualPrice": "Rs. 2399",
    "offer": "(77% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11281584/2020/1/21/4974621d-19b1-4724-8fdc-d067033325091579591268600-Mast--Harbour-Men-Navy-Blue-Solid-Two-Fold-Wallet-4941579591-1.jpg",
    "brand": "Mast & Harbour",
    "title": "Men Leather Two Fold Wallet",
    "price": "Rs. 974",
    "actualPrice": "Rs. 1499",
    "offer": "(35% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14450146/2022/1/5/c3e546fb-f398-4b28-88c0-410985a8c56c1641389258577NAPAHIDEMenTanSolidLeatherTwoFoldWalletwithRFID1.jpg",
    "brand": "NAPA HIDE",
    "title": "Leather Two Fold Wallet with RFID",
    "price": "Rs. 399",
    "actualPrice": "Rs. 1999",
    "offer": "(80% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/7/1/d012c347-4f0b-47ff-993b-731b5868a8d51625114961479-1.jpg",
    "brand": "LOUIS STITCH",
    "title": "Leather Two Fold Wallet with RFID",
    "price": "Rs. 840",
    "actualPrice": "Rs. 4200",
    "offer": "(80% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11647832/2021/10/30/95bb5d76-9f0e-4551-ad84-e0d71f2facd31635567170117-WildHorn-Men-Brown-Solid-RFID-Protected-Genuine-Leather-Two--7.jpg",
    "brand": "WildHorn",
    "title": "RFID Protected Leather Wallet",
    "price": "Rs. 539",
    "actualPrice": "Rs. 1999",
    "offer": "(73% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5568704/2022/2/25/f3895c8a-28e4-4724-a581-5a5e2969d6a21645781583712-Levis-Men-Brown-Textured-Zip-Around-Wallet-9161645781583145-1.jpg",
    "brand": "Levis",
    "title": "Men Textured Zip Around Wallet",
    "price": "Rs. 1699",
    "actualPrice": "Rs. 1999",
    "offer": "(15% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/7/3/0230c309-ef49-4621-8975-bc7071a785cd1593726087790-5.jpg",
    "brand": "Teakwood Leathers",
    "title": "Men Genuine Leather Accessory Gift Set",
    "price": "Rs. 1399",
    "actualPrice": "Rs. 3999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/10/13/21f93cf5-cddf-4fde-bcb4-2a4b4120d9051602542304498-1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "Rs. 749",
    "actualPrice": "Rs. 2999",
    "offer": "(75% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/b84a3dc8-b4b4-429d-b9cd-1bd89f9032741600383589268-7.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "Rs. 839",
    "actualPrice": "Rs. 2999",
    "offer": "(72% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/229a3f9a-c226-4c36-89c2-de1cb764ad6f1600989130005-1.jpg",
    "brand": "WildHorn",
    "title": "Men Leather Accessory Gift Set",
    "price": "Rs. 1049",
    "actualPrice": "Rs. 2999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/18/806e9d57-2a10-423e-9698-92945fff5aae1600382535208-7.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "Rs. 839",
    "actualPrice": "Rs. 2999",
    "offer": "(72% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/77eb9427-1723-470d-aee4-d53c4f6eaa261600985088309-1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "Rs. 1049",
    "actualPrice": "Rs. 2999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/25/a6ce5f89-6222-4697-92fb-199b7e2ff34a1600989614723-1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "Rs. 1049",
    "actualPrice": "Rs. 2999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/2/29/64a72c00-2c97-4f75-a2e2-a00adffd21861582930075221-1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Wallet & Pen Accessory Gift Set",
    "price": "Rs. 899",
    "actualPrice": "Rs. 2999",
    "offer": "(70% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1410362/2016/6/25/11466848469624-WildHorn-Men-Accessory-Gift-Set-2951466848469482-1.jpg",
    "brand": "WildHorn",
    "title": "Men Accessory Gift Set",
    "price": "Rs. 1049",
    "actualPrice": "Rs. 2999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346832/2020/8/27/11a13641-1878-44d8-9e56-2b73caff382a1598538414460WildHornMenBrownGenuineLeatherRFIDProtectedWalletBeltComboGi7.jpg",
    "brand": "WildHorn",
    "title": "Wallet & Belt Combo Gift Set",
    "price": "Rs. 1139",
    "actualPrice": "Rs. 2999",
    "offer": "(62% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/9/20/f9a05b21-eeb0-4b1b-88d8-70cb5b2e33d81600552127304-7.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "Rs. 839",
    "actualPrice": "Rs. 2999",
    "offer": "(72% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346950/2020/8/28/2fecd3b4-07b2-46a9-9f40-da9c108663c41598616777783WildHornMenBrownRFIDProtectedGenuineLeatherAccessoryGiftSet1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Accessory Gift Set",
    "price": "Rs. 1139",
    "actualPrice": "Rs. 2999",
    "offer": "(62% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/12/9/724d1bd7-b092-487f-970e-c003a62132381607504341477-1.jpg",
    "brand": "Pacific Gold",
    "title": "Men Genuine Leather Accessory Gift Set",
    "price": "Rs. 1199",
    "actualPrice": "Rs. 3999",
    "offer": "(70% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16167824/2021/11/19/01aa6a70-53ef-4783-be0a-11b54ca1330b1637296234250WildHornLeatherBeltWalletComboforMenLeatherGiftHamperIGiftsf1.jpg",
    "brand": "WildHorn",
    "title": "Men Textured Pure Genuine Leather Accessory Gift Set",
    "price": "Rs. 1399",
    "actualPrice": "Rs. 3999",
    "offer": "(65% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12346868/2020/8/28/df512b3f-62b9-4085-acd0-14a05e67da731598616767379WildHornMenBlackRFIDProtectedGenuineLeatherWalletBeltAccesso1.jpg",
    "brand": "WildHorn",
    "title": "Men RFID Protected Genuine Leather Wallet & Belt Accessory Gift Set",
    "price": "Rs. 1139",
    "actualPrice": "Rs. 2999",
    "offer": "(62% OFF)"
  }
]
//// waltes end here 

///Belt start here

let Belts = [
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749634/2021/3/9/1f9bf3e7-5da0-43d5-9a48-23ffd95d45f31615280726428-United-Colors-of-Benetton-Men-Belts-121615280725858-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Solid Belt",
    "price": "Rs. 839",
    "actualPrice": "Rs. 1199",
    "offer": "(30% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15477188/2021/9/26/cb4475b0-282d-420e-8cec-03c6bb85c52d1632639295862-WildHorn-Men-Black-Textured-Leather-Formal-Belt-897163263929-11.jpg",
    "brand": "WildHorn",
    "title": "Textured Leather Formal Belt",
    "price": "Rs. 549",
    "actualPrice": "Rs. 2499",
    "offer": "(78% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7271185/2018/9/18/a3a0379e-9e48-481e-9d9f-c1f5e8d047ba1537254640785-United-Colors-of-Benetton-Men-Belts-6291537254640739-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Solid Leather Belt",
    "price": "Rs. 1034",
    "actualPrice": "Rs. 2299",
    "offer": "(55% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047714/2021/12/10/28d65caf-c3ca-4ea7-96a6-667a3e4b28011639121054603-United-Colors-of-Benetton-Men-Black-PU-Belt-5791639121054259-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Solid Belt",
    "price": "Rs. 719",
    "actualPrice": "Rs. 1599",
    "offer": "(55% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14881750/2021/9/21/2be43863-a577-425c-8ac4-93950bea10a91632223480430-Peter-England-Men-Belts-7831632223480206-1.jpg",
    "brand": "Peter England",
    "title": "Men Textured Reversible Belt",
    "price": "Rs. 599",
    "actualPrice": "Rs. 1199",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14032600/2021/4/7/843de55d-9058-46ef-89c8-66d995b303c81617801630666CRUSSETMenBlack1.jpg",
    "brand": "CRUSSET",
    "title": "Men Solid Leather Belt",
    "price": "Rs. 455",
    "actualPrice": "Rs. 1899",
    "offer": "(76% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104944/2021/6/12/7c3824bb-0646-41f9-b3bf-439dc55f53ed1623492742365-United-Colors-of-Benetton-Mens-Faux-Leather-Reversible-Belt--1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Textured Reversible Belt",
    "price": "Rs. 719",
    "actualPrice": "Rs. 1599",
    "offer": "(55% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16327370/2021/12/1/1e0be525-cb25-47a3-a43b-d2d27de53f821638367733982FusionThreadsMenBrownTextured1.jpg",
    "brand": "Fusion Threads",
    "title": "Men Leather Formal Belt",
    "price": "Rs. 599",
    "actualPrice": "Rs. 1499",
    "offer": "(60% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104916/2021/11/12/e31e4c38-815e-461f-a96d-347342c444ac1636699508450-United-Colors-of-Benetton-Mens-Genuine-Leather-Belt-80416366-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Leather Formal Belt",
    "price": "Rs. 1374",
    "actualPrice": "Rs. 2499",
    "offer": "(45% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047680/2022/2/23/a1cd3feb-f259-4d7b-86de-f2b59608be681645609343557-United-Colors-of-Benetton-Men-Black-PU-Belt-1621645609343295-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Reversible Belt",
    "price": "Rs. 989",
    "actualPrice": "Rs. 1799",
    "offer": "(45% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2020/3/19/6e8374de-0eee-4e1d-ad9f-8051e35394a61584572702921-1.jpg",
    "brand": "CRUSSET",
    "title": "Men Solid Leather Belt",
    "price": "Rs. 713",
    "actualPrice": "Rs. 1699",
    "offer": "(58% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14881828/2021/10/6/231128e0-24ae-48df-8df8-1fcea8312bbb1633522283993-Peter-England-Men-Belts-3581633522283820-1.jpg",
    "brand": "Peter England",
    "title": "Men Reversible Formal Belt",
    "price": "Rs. 779",
    "actualPrice": "Rs. 1299",
    "offer": "(40% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16047768/2021/12/10/30da4ea9-e0fb-46f3-9eb3-e4e3b00d94f91639121078516-United-Colors-of-Benetton-Men-Coffee-Brown-PU-Formal-Belt-17-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Solid Formal Belt",
    "price": "Rs. 799",
    "actualPrice": "Rs. 1599",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2018/10/23/ec5984f1-00d5-4dbd-be2f-fd5bef7a4ea11540319220478-1.jpg",
    "brand": "SPYKAR",
    "title": "Belts",
    "price": "Rs. 1199",
    "actualPrice": "Rs. 1999",
    "offer": "(40% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14104778/2021/12/22/d7c2d574-cbab-4474-83db-a082e610c9a41640177072481-United-Colors-of-Benetton-Mens-Genuine-Leather-Belt-69816401-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Laser Cuts Leather Belt",
    "price": "Rs. 1374",
    "actualPrice": "Rs. 2499",
    "offer": "(45% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826812/2022/1/6/b44bf107-fe69-4f6a-b70c-19986fbdfcaf1641460698455-Van-Heusen-Men-Brown-Solid-Money-Clip-9481641460697972-1.jpg",
    "brand": "Van Heusen",
    "title": "Solid Money Clip",
    "price": "Rs. 1359",
    "actualPrice": "Rs. 1599",
    "offer": "(15% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12661556/2020/10/19/44199ef4-e13c-4d7b-88dc-c35a1a23f56b1603093984522-Louis-Philippe-Men-Wallets-7981603093981895-1.jpg",
    "brand": "Louis Philippe",
    "title": "Solid Two Fold Leather Wallet",
    "price": "Rs. 899",
    "actualPrice": "Rs. 1799",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826778/2021/4/12/e5c3bc9a-30b8-4cbb-8945-c613bfd107291618229561452-Van-Heusen-Men-Black-Textured-Leather-Two-Fold-Wallet-894161-1.jpg",
    "brand": "Van Heusen",
    "title": "Men Leather Two Fold Wallet",
    "price": "Rs. 699",
    "actualPrice": "Rs. 1399",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826692/2021/4/12/7bffcef7-9c72-4a87-88ee-c6b7fc26f5b81618231897204-Van-Heusen-Men-Tan-Brown-Textured-Leather-Two-Fold-Wallet-38-1.jpg",
    "brand": "Van Heusen",
    "title": "TexturedLeather TwoFold Wallet",
    "price": "Rs. 699",
    "actualPrice": "Rs. 1399",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13399138/2021/1/20/3e53faf4-2015-40d9-a87e-303d40b22e181611139148384-Louis-Philippe-Men-Wallets-9001611139146906-1.jpg",
    "brand": "Louis Philippe",
    "title": "Men Leather Two Fold Wallet",
    "price": "Rs. 1599",
    "actualPrice": "Rs. 1999",
    "offer": "(20% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13123690/2020/12/14/a61b45a5-0161-4eb6-975b-45987b87412b1607927464908-Van-Heusen-Men-Wallets-3361607927462988-1.jpg",
    "brand": "Van Heusen",
    "title": "Men Solid Card Holder",
    "price": "Rs. 649",
    "actualPrice": "Rs. 1299",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/3/2/5be8ebc9-b009-4fb8-b7dc-2d67e5fb84571614675087369-1.jpg",
    "brand": "Carlton London",
    "title": "Men RFID Leather Wallet",
    "price": "Rs. 1889",
    "actualPrice": "Rs. 2099",
    "offer": "(10% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12665508/2020/10/15/8138ddf2-3f6d-49f7-8582-15ee8cfdb6501602754609930-WROGN-Unisex-Wallets-2981602754608319-1.jpg",
    "brand": "WROGN",
    "title": "Men Printed Passport Holder",
    "price": "Rs. 299",
    "actualPrice": "Rs. 1199",
    "offer": "(75% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11445110/2020/11/2/84d66b3b-76ca-4d4f-8a26-305207b395791604316500641-Jockey-Men-Socks-5081604316499724-1.jpg",
    "brand": "Jockey",
    "title": "Men Patterned Socks",
    "price": "Rs. 189",
    "actualPrice": null,
    "offer": null
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13826854/2021/4/12/8ef2e941-9259-4cce-aea4-e068f444c1db1618229596395-Van-Heusen-Men-Black-Solid-Leather-Two-Fold-Wallet-938161822-1.jpg",
    "brand": "Van Heusen",
    "title": "Men Leather Two Fold Wallet",
    "price": "Rs. 699",
    "actualPrice": "Rs. 1399",
    "offer": "(50% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749600/2021/3/10/66caf5da-91be-4c5c-b76d-2d91da60dc7a1615351400049-United-Colors-of-Benetton-Men-Wallets-8321615351398984-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Solid Two Fold Wallet",
    "price": "Rs. 769",
    "actualPrice": "Rs. 1099",
    "offer": "(30% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/22/7e05dbba-981b-4046-b0ea-f68d5fadd17b1611297298939-1.jpg",
    "brand": "Teakwood Leathers",
    "title": "Colourblocked Two Fold Wallet",
    "price": "Rs. 599",
    "actualPrice": "Rs. 1499",
    "offer": "(60% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/2/9/ab7da053-a208-44a3-b358-0dd4f086afb41612857776316-1.jpg",
    "brand": "DR. HENRY",
    "title": "Textured Two Fold Wallet",
    "price": "Rs. 874",
    "actualPrice": "Rs. 1325",
    "offer": "(34% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13749592/2021/3/10/155c6d81-1a1e-469f-8402-ff7decc1c7fd1615351377945-United-Colors-of-Benetton-Men-Wallets-7151615351377074-1.jpg",
    "brand": "United Colors of Benetton",
    "title": "Men Geometric Textured Wallet",
    "price": "Rs. 604",
    "actualPrice": "Rs. 1099",
    "offer": "(45% OFF)"
  },
  {
    "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12661448/2020/10/15/f5498b12-e67b-49e0-9c3c-90b994e83ad61602754200263-Louis-Philippe-Men-Wallets-9791602754198915-1.jpg",
    "brand": "Louis Philippe",
    "title": "Men Leather Two Fold Wallet",
    "price": "Rs. 899",
    "actualPrice": "Rs. 1799",
    "offer": "(50% OFF)"
  }
]

//// belts  data end here 



function mens_navbar_items(arr,name,id){
  arr.map(function(el){
    let appendData=document.getElementById(id)
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
  
    appendData.append(div1)
  
  
    localStorage.setItem(name,JSON.stringify(arr))
    console.log("inside")
  
  })
}


 mens_navbar_items(SportsShoesArr,"SportsShoes_n","a2")
 mens_navbar_items( Wallets," Wallets_n","a1")
 mens_navbar_items( jeansArr," jeansArr_n","a3")