import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

/// footer page

import {footer} from "../components/footer.js"
   let footDiv = document.querySelector("#footerDiv");
   footDiv.innerHTML = footer();
