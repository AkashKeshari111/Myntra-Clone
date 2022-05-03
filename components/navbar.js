function navbar(){
    return `   <div class="parent-box-1">

           
    <div class="logo_div">
        <img id="logo" src="data:image/png;base64,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" alt="LOGO"/>
    </div>

   <div class="menu_div">
       
        <div id="main_div">
              <a id="button"  href="/">MENS</a>
            <div id="akash">
              <div id="b">
                 <div class="div" id="d1">
                     <h5 class="h5"><a href="/">Topwear</a></h5>
                         <ul>
                            <li><a href="/">T-shirts</a></li>
                            <li><a href="/">Casual Shirts</a></li>
                             <li><a href="/">Formal Shirts</a></li>
                             <li><a href="/">Sweatshirts</a></li>
                              <li><a href="/">Sweaters</a></li>
                             <li><a href="/">Jackets</a></li>
                             <li><a href="/">Blazers & Coats</a></li>
                             <li><a href="/">Suits</a></li>
                            <li><a href="/">Rain Jackets</a></li>
                       
                         </ul>
                         </div>
                         <div  id="d2">  
                          <h5 class="h5"><a href="/">Indian & Festive Wear</a></h5>
                          <ul>
                             <li><a href="/">Kurtas & Kurta Sets</a></li>
                             <li><a href="/">Sherwanis</a></li>
                             <li><a href="/">Nehru Jackets</a></li>
                             <li><a href="/">Dhotis</a></li>
                         </ul>
                      </div>
                
                <div id="d3">
                   <h5 class="h5"><a href="/">Bottom Wear</a></h5>
                   <ul>
                    <li><a href="/">Jeans</a></li>
                    <li><a href="/">Causal Trousers</a></li>
                    <li><a href="/">Formal Trousers</a></li>
                    <li><a href="/">Sports</a></li>
                    <li><a href="/">Track Pants & joggers</a></li>
                   </ul>

                   </div> 
                   <div id="d4">
                   <h5 class="h5"><a href="/"></a>Innerwear & Joggers</h5>
                   <ul>
                    <li><a href="/">Briefs & Trunks</a></li>
                    <li><a href="/">Boxers</a></li>
                    <li><a href="/">Vests</a></li>
                    <li><a href="/">Sleepwear & Loungewear</a></li>
                    <li><a href="/">Thermals</a></li>
                   </ul>
                   <h5 class="h5"><a href="/"></a>Plus Size</h5>

                 </div> 
               

               <div id="d5">
               <h5 class="h5"><a href="/">Footwear</a></h5>
               <ul>
                   <li><a href="/">Casual Shoes</a></li>
                   <li><a href="/">Sports Shoes</a></li>
                   <li><a href="/">Formal Shoes</a></li>
                   <li><a href="/">Sneakers</a></li>
                   <li><a href="/">Sandals & Floaters</a></li>
                   <li><a href="/">Flip Flops</a></li>
                   <li><a href="/">Socks</a></li>
               </ul>

               </div>
               <div id="d6">
               <h5 class="h5"><a href="/">Personal care & Grooming</a></h5>
               <h5 class="h5"><a href="/">Sunglass & Frames</a></h5>
               <h5 class="h5"><a href="/">Watches</a></h5>
           </div>
               
             </div>
          </div>
        
      </div>
  




       <div id="main_div">
       <a id="button"  href="/">WOMENS</a>
       <div id="akash">
         <div id="b">
            <div class="div" id="d1">
                <h5 class="h5"><a href="/">Indian & Fusion wear</a></h5>
                    <ul>
                       <li><a href="/">Kurtas & Suits</a></li>
                       <li><a href="/">Kurtas & Suits</a></li>
                        <li><a href="/">Ethnic Wear</a></li>
                        <li><a href="/">Leggings, Salwars & Churidars</a></li>
                         <li><a href="/">Skirts & Palazzos</a></li>
                        <li><a href="/">Sarees</a></li>
                        <li><a href="/">Dress Materials</a></li>
                        <li><a href="/">Lehenga Cholis</a></li>
                       <li><a href="/">Dupattas & Shawls</a></li>
                    </ul>
                    </div>
                    <div  id="d2">
                     <h5 class="h5"><a href="/">Western wear</a></h5>
                     <ul>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Tops</a></li>
                        <li><a href="/">Tshirts</a></li>
                        <li><a href="/">Jeans</a></li>
                        <li><a href="/">Trousers & Capris</a></li>
                        <li><a href="/">Shorts & Skirts</a></li>
                        <li><a href="/">Co-ords</a></li>
                        <li><a href="/">Playsuits</a></li>
                    </ul>
                 </div>
           <div id="d3">
              <h5 class="h5"><a href="/">Sport & Active wear</a></h5>
              <ul>
               <li><a href="/">Clothing</a></li>
               <li><a href="/">Footwear</a></li>
               <li><a href="/">Sports Accessories</a></li>
               <li><a href="/">Sports Equipment</a></li>
              </ul>
              </div>
              <div id="d4">
              <h5 class="h5"><a href="/"></a>Beauty & Personal care</h5>
              <ul>
               <li><a href="/">Makeup</a></li>
               <li><a href="/">Skincare</a></li>
               <li><a href="/">Premium Beauty</a></li>
               <li><a href="/">Lipsticks</a></li>
               <li><a href="/">Fragrances</a></li>
              </ul>
              <h5 class="h5"><a href="/"></a>Plus Size</h5>
            </div>
          <div id="d5">
          <h5 class="h5"><a href="/">Lingerie & Sleepwear</a></h5>
          <ul>
              <li><a href="/">Bra</a></li>
              <li><a href="/">Briefs</a></li>
              <li><a href="/">Shapewear</a></li>
              <li><a href="/">Sleepwear & Loungewear</a></li>
              <li><a href="/">Swimwear</a></li>
              <li><a href="/">Camisoles & Thermals</a></li>
              <li><a href="/">Socks</a></li>
          </ul>
          </div>
         
        </div>
     </div>
   </div>





    
        <a  id="button"  href="kids.html">KIDS</a>
        <a  id="button"  href="h&l.html">HOME & LIVING</a>
        <a  id="button"  href="beauty.html">BEAUTY</a>
        <a  id="button"  href="studio.html">STUDIO</a>
   </div>



</div>
<!-- parent-box-1 end -->

<div class="parent-box-2">

<div class="div1">
    <input  type="text" name="" id="search" placeholder="Search for products, brands and more">
    
        <span><i class="fa-solid fa-magnifying-glass">&nbsp;</i></span> 
    

</div>

<div id="other_div">
    <div>
 <a href=""><img id="profile" src="data:image/jpeg;base64,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WwLGOGXB7wd/AbszirDRF0qdNQWCKLd3dW6qupUfJbEty9a82ERF7IwREQBERAEREAREQBERAFgaU0XFUR+jmjD27rjFp4tdm09oWeiNJrBmYycWpReDW1FV6f6PpI7vpj6VnuGwe3usLP8AI9hUKmgcxxa9paRmHAtI7wcQvRBCwNI6KhqG2nibJhmRiPuuGI5FQ6lonri8CyWftJVh1bhdJb1qfbsfhzKDRWdpPo2idc08rozweA9vcCLEc7qOVuoFZH6jGSD+G8fJ2yVFlQqR2dxYqGmLKtlUSe6Wrz1eJFEWyn0BUs9emlHb6N5H5rWWFJTPHrMcO9pHzC1tYZnQjUhLXFp8mmdSLtbA45Nce4ErMh0HUvF2U8ru6N9vG1ljASnGP5mlzZrkUmotRKyQ4xiMcZHAfpFz5KR6O6NGjGonJ+GEf8n3v4BbY0Kksl9CBW0vZUl1qif8PW8tXeyt2tNwLYk2AGZJ3AbypboLUKols6Yegj+IfaW7Gf8Aa3cVZOjNBU9OPsYWtd73rP8AzG5W1UqnaYfnZX7z2knNdG3j0eL1vuyXbianQugoaVuzCyxObji933ncshh2LbIilpJLBFZnOVSTnNtt5t5hERZPIREQBERAEREAREQBERAEREAREQBERAEREAREQBcLlEAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k="></a>
   
        <h5><a href="#">Profile</a></h5>
    </div>

    <div>
        <a href="#"><i class="fa-solid fa-heart font"  id="i1"></i></a>
      <h5><a href="#">Whishlist</a></h5>  
    </div>

    <div>
      <a  href="#">  <i class="fa-solid fa-bag-shopping font " id="i1">&nbsp;1</i></a>
        <h5>  <a href="#">Bag</a></h5>
    </div>
</div>

</div>`
}


export {navbar}