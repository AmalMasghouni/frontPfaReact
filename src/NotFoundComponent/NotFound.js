import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2>error componenent</h2>
        <div class="full_container">
         <div class="container">
            <div class="center verticle_center full_height">
               <div class="error_page">
                  <div class="center">
                     <div class="error_icon">
                        <img class="img-responsive" src="assets/images/layout_img/error.png" alt="#">
                        </img>
                     </div>
                  </div>
                  
                  <h3>PAGE NOT FOUND !</h3>
                  
                 {/*<div class="center"><a class="main_bt" href="index.html">Go To Home Page</a></div>
                  */} 
                  <div class="center"><button>Go To Home Page</button></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
