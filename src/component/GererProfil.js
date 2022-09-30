import React from 'react'

export default function GererProfil() {
  return (
    <div>
        <div class="container-fluid">
        
        
       

        <div class="row">
          <div class="col-md-12">
          <div class="full_container">
         <div class="container">
       <div class="center verticle_center full_height">
          <div class="login_section">
             <div class="logo_login">
                <div class="center">
                   <img width="210" src="/assets/images/logo/logo.png" alt="#" />
                </div>
             </div>
             <div class="login_form">
                <form>
                   <fieldset>
                      <div class="field">
                         <label class="label_field">Nom</label>
                         <input type="text" name="nom" placeholder="Nom" />
                      </div>
                      <div class="field">
                         <label class="label_field">Prénom</label>
                         <input type="text" name="prenom" placeholder="Prénom" />
                      </div>
                      <div class="field">
                         <label class="label_field">Date de naissance</label>
                         <input type="date" name="dtnaissance" placeholder="Date de Naissance" />
                      </div>
                      <div class="field">
                         <label class="label_field">Numéro de téléphone</label>
                         <input type="tel" name="phone" placeholder="numero de telephone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                      </div>
                      <div class="field">
                         <label class="label_field">Adresse Email</label>
                         <input type="email" name="email" placeholder="E-mail" />
                      </div>
                      <div class="field">
                         <label class="label_field">Mot De passe</label>
                         <input type="password" name="password" placeholder="Mot de passe" />
                      </div>
                      <div class="field margin_0">
                        <input class="main_bt" type="submit" />
                      </div>
                      
                   </fieldset>
                </form>
             </div>
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

