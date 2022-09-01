import React from 'react';
import {Link} from 'react-router-dom';
export default function SideBar() {
  return (
    <div>
         <nav id="sidebar">
               <div class="sidebar_blog_1">
                  <div class="sidebar-header">
                     <div class="logo_section">
                       
                           <Link to='score'><img class="logo_icon img-responsive" src="/assets/images/logo/logo_icon.png" alt="#" /></Link>
                          
                     </div>
                  </div>
                  <div class="sidebar_user_info">
                     <div class="icon_setting"></div>
                     <div class="user_profle_side">
                        {/*<div class="user_img"><img class="img-responsive" src="/assets/images/layout_img/user_img.jpg" alt="#" /></div>*/}
                        <div class="user_info">
                           <h6>User Name </h6>
                           <p><span class="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sidebar_blog_2">

               <i class="fa fa-user " ></i> <span> Candidat </span> 
                  
                  <ul class="list-unstyled components">
                  <li>
                     <Link to='passertest' ><i class="fa fa-clock-o orange_color"></i><span>Passer le test</span></Link>
                    {/* <a href="widgets.html"> </a>*/}</li>
                  <li>
                     <Link to='score'><i class="fa fa-bar-chart-o green_color"></i> <span>Voir le score</span></Link>
                     </li>
                     <li>
                        <Link to='contact'><i class="fa fa-paper-plane red_color"></i> <span>Contact</span></Link>
                        
                     </li>
                     <li>
                        <Link to='localisation'><i class="fa fa-map purple_color2"></i> <span>Localisation</span></Link>
                     </li>
                     
                     <li>
                        <Link to='gererprofil'><i class="fa fa-cog yellow_color"></i> <span>Gérer le profil </span></Link>
                        </li>
                     <li class="active">
                        <Link to='logout'><i class="fa fa-power-off"></i> <span>Se déconnecter</span></Link>
                     </li>
                    
                   
                  </ul>
               </div>
            </nav>
    </div>
  )
}
