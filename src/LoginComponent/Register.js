import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {
    const Swal = require('sweetalert2')
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [bd, setBd] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "bd"){
         setBd(value);
     }
     if(id === "phone"){
      setPhone(value);
  }

      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }
  const handleSubmit  = () => {
   console.log(firstName,lastName,bd,phone,email,password,confirmPassword);
}
    
  return (
    <div> 
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
                         <input type="text" name="firstName" id='firstName'  onChange = {(e) => handleInputChange(e)} placeholder="Nom" />
                      </div>
                      <div class="field">
                         <label class="label_field">Prénom</label>
                         <input type="text" name="lastName"   onChange = {(e) => handleInputChange(e)} placeholder="Prénom" />
                      </div>
                      <div class="field">
                         <label class="label_field">Date de naissance</label>
                         <input type="date" name="bd"  id='bd'  onChange = {(e) => handleInputChange(e)} placeholder="Date de Naissance" />
                      </div>
                      <div class="field">
                         <label class="label_field">Numéro de téléphone</label>
                         <input type="tel" name="phone" id='phone'  onChange = {(e) => handleInputChange(e)} placeholder="numero de telephone"  />
                      </div>
                      <div class="field">
                         <label class="label_field">Adresse Email</label>
                         <input type="email" name="email" id='email'  onChange = {(e) => handleInputChange(e)} placeholder="E-mail" />
                      </div>
                      <div class="field">
                         <label class="label_field">Mot De passe</label>
                         <input type="password" name="password" id='password'  onChange = {(e) => handleInputChange(e)} placeholder="Mot de passe" />
                      </div>
                      <div class="field">
                         <label class="label_field">Confirmer votre  Mot De passe</label>
                         <input type="password" name="confirmPassword"  id='confirmPassword'  onChange = {(e) => handleInputChange(e)} placeholder="confirmer le mot de passe" />
                      </div>
                      <div class="field margin_0">
                         <label class="label_field hidden">hidden label</label>
                         <button onClick={()=>handleSubmit()} type="submit" class="main_bt">Register</button>
                         
                      </div>
                      
                   </fieldset>
                </form>
             </div>
          </div>
       </div>
      </div>
   </div>

    </div>
  )
}
