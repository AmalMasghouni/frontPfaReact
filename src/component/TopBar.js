import React from 'react';
import{Link} from 'react-router-dom';
export default function TopBar() {
  return (
    <div>
        <div class="topbar">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <div class="full">
                        <button type="button" id="sidebarCollapse" class="sidebar_toggle"><i class="fa fa-bars"></i></button>
                      <div class="right_topbar">
                           <div class="icon_info">
                              <ul>
                                  {/**<li><a href="#"><i class="fa fa-bell-o"></i><span class="badge">2</span></a></li>
                                <li><a href="#"><i class="fa fa-question-circle"></i></a></li> */}
                                 <li>
                                    <a href="#"><i class="fa fa-envelope-o"></i><span class="badge"></span></a></li>
                              </ul>
                              <ul class="user_profile_dd">
                                 <li>
                                 <i class="fa fa-user " ></i>
                                 
                                    <a class="dropdown-toggle" data-toggle="dropdown"><span class="name_user">User Name</span></a>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="profile.html">Mon profil</a>
                                       <Link class="dropdown-item" to='gererprofil'>Gérer mon Profil</Link>
                                       <Link class="dropdown-item" to='logout'><span>Se déconnecter</span> <i class="fa fa-sign-out"></i></Link>
                                       
                                       
                                      
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
    </div>
  )
}
