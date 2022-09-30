import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div class="container-fluid">
        
        
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Contact</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="contact_blog p-5">
              <h4 class="brief">Responsable Ressources Humaines</h4>
                <div class="contact_inner p-5">
                  <div class="left">
                    <h3>Asma Cherif</h3>
                    <p><strong>About: </strong></p>
                    <ul class="list-unstyled">
                    <li><i class="fa fa-envelope-o"></i>
                    <Link to="gmail.com"> : asma.cherif@iliadeconsulting.com</Link></li>
                    <li><i class="fa fa-phone"></i> : num tel</li>
                    </ul>
                  </div>
                 <div class="right">
                    <div class="profile_contacts ">
                      <img class="img-responsive" src="/assets/images/layout_img/msg2.png" alt="#" />
                    </div>
                  </div>
      
                                          
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}
