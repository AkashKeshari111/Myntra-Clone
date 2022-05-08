function sidebar_nav(){
    return `    <div>
    <br>
    <h5 class="xyz">BRAND</h5>
    <br>
    <input type="checkbox" class="check_box" id="Roadster"> <span class="brand_space" value = "Roadster">Roadster</span><br>
    <input type="checkbox" class="check_box" id="Highlander"> <span class="brand_space" value = "HIGHLANDER" >HIGHLANDER</span><br>
    <input type="checkbox" class="check_box" id="ether" > <span class="brand_space" value = "ether"  >ether</span><br>
    <input type="checkbox" class="check_box" id="U.S Polo Assn" > <span class="brand_space" value = "U.S Polo Assn" >U.S Polo Assn</span><br><br><hr>
</div>

<div>
  <br>
  <h5  class="xyz">PRICE</h5>
  <br>
  <input type="checkbox" class="check_box" id="279"> <span class="brand_space">Rs 279 to Rs 499</span><br>
  <input type="checkbox" class="check_box" id="479"> <span class="brand_space" >Rs 479 to Rs 799</span><br>
  <input type="checkbox" class="check_box" id="579"> <span class="brand_space">Rs 579 to Rs 999</span><br><br><hr>
  
</div>

<div>
  <br>
  <h5  class="xyz">COLOR</h5>
  <br>
  <input type="checkbox" class="check_box" id="blue"><button class="btn_sidebar1"></button> <span class="brand_space"><a href="#">Blue</a></span><br>
  <input type="checkbox" class="check_box" id="white" ><button class="btn_sidebar2"></button> <span class="brand_space"><a href="#">White</a></span><br>
  <input type="checkbox" class="check_box" id="blue"><button class="btn_sidebar3"></button> <span class="brand_space"><a href="#">Navy Blue</a></span><br>
  <input type="checkbox" class="check_box" id="black"><button class="btn_sidebar4"></button><span class="brand_space"><a href="#">Black</a></span><br>
  <input type="checkbox" class="check_box" id="green"><button class="btn_sidebar5"></button> <span class="brand_space"><a href="#">Green</a></span><br>
  <input type="checkbox" class="check_box"id="grey"><button class="btn_sidebar6"></button><span class="brand_space"><a href="#">Grey</a></span><br>
  <input type="checkbox" class="check_box"id="red"><button class="btn_sidebar7"></button><span class="brand_space"><a href="#">Red</a></span><br><br><hr>
</div>



<div>
  <br>
  <h5  class="xyz">DISCOUNT RANGE</h5>
  <br>
  <input type="checkbox" class="check_box" id="10"> <span class="brand_space">10% and above</span><br>
  <input type="checkbox" class="check_box" id="20"> <span class="brand_space">20% and above</span><br>
  <input type="checkbox" class="check_box" id="30"> <span class="brand_space">30% and above</span><br>
  <input type="checkbox" class="check_box"id="40"> <span class="brand_space">40% and above</span><br>
  <input type="checkbox" class="check_box" id="50"> <span class="brand_space">50% and above</span><br><br><hr>
</div>



`
}




export {sidebar_nav}