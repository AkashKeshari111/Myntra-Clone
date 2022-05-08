import {navbar,searchFunction} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

  import { footer } from "../components/footer.js";
document.getElementById("footerDiv").innerHTML=footer();

searchFunction();
      
   let womenData =[
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/48aa9321-1906-4471-be70-20ef124459971598892519217-M_S.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/90c35c24-ac69-4472-a1a0-be82c087ec181598892519026-F21.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/61c793f2-399c-4b8a-9e93-831adef697381598892519164-Levis.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8f070770-db34-4e20-ab80-59728106460a1598892519078-GAP.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg"
        },
        {
          "image": "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
        }
      ]
         
      function append (x,y ,containerid,pagename ){
          for(let i=x ;i<y;i++){
          let dealOntopImg=document.createElement("img")
          dealOntopImg.style.width="90%"
          dealOntopImg.style.marginLeft="30px"
          dealOntopImg.style.marginRight="30px"
          dealOntopImg.src=womenData[i].image

          let linkEd=document.createElement("a")
          linkEd.append(dealOntopImg)
          linkEd.href=`/nav_itemsHTML/${pagename}.html`

         
          document.getElementById(`${containerid}`).append(linkEd)
         }
      }
      append(0,10,"biggestdealonbrands","topWomen")
      append(10,16,"categorytobag","topWomen")
      append(16,21,"exploretopbrands","faceBeauty")
      append(23,27,"myntraluxe","topWomen")
      append(27,32,"indianwear","flatsWomen")
      append(32,37,"sportswear","lipsticBeauty")
      append(37,42,"footwear","lipsticBeauty")
      append(42,47,"ACCESSORIES","faceBeauty")