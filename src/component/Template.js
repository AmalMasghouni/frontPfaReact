import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import {Outlet }from 'react-router-dom';
export default function Template() {
  return (
    <div >

        <div class="dashboard dashboard_1">
            <div class="full_container">
                <div class="inner_container">
                    <SideBar />
                        <div id="content">
                            <TopBar />
                            <div class="midde_cont">
                                <Outlet />
                            </div>
                        </div>
         
                </div>
            </div>
        </div>

      
            
   


          
            
                    
           
              
                        
                        
                        
                             
                           
                            
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                           {/* <div class="col align-self-center">

                        <div class="row align-items-end">
                            <div class="col"></div>
                            <div class="col">
                            </div>
                            <div class="col"></div>
                        </div> */}
                    

                        
               



                  
           

    </div>
   
         
  )
}
