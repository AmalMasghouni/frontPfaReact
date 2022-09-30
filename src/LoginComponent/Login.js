import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Login() {
   const Swal = require('sweetalert2')
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
   {
     username: "amal@gmail.com",
     password: "amalamal"
   },
   {
     username: "ranim@gmail.com",
     password: "ranimranim"
   }
 ];

 const errors = {
   uname: "invalid username",
   pass: "invalid password"
 };
 const handleSubmit = (event) => {
   //Prevent page reload
   event.preventDefault();

   var { uname, pass } = document.forms[0];

   // Find user login info
   const userData = database.find((user) => user.username === uname.value);

   // Compare user info
   if (userData) {
     if (userData.password !== pass.value) {
       // Invalid password
       setErrorMessages({ name: "pass", message: errors.pass });
     } else {
       setIsSubmitted(true);
     }
   } else {
     // Username not found
     setErrorMessages({ name: "uname", message: errors.uname });
   }
 };
 const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderForm = (<div>
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
                     <form onSubmit={handleSubmit}>
                        <fieldset>
                           <div class="field">
                              <label class="label_field">Adresse Email</label>
                              <input type="email" name="uname" placeholder="E-mail" required/>
                              {renderErrorMessage("uname")}
                           </div>
                           <div class="field">
                              <label class="label_field">Mot de passe</label>
                              
                           <input type="password" name="pass" placeholder="Mot de passe" required />
                           {renderErrorMessage("pass")}
                           </div>
                           <div class="field">
                              <label class="label_field hidden">hidden label</label>
                              <label class="form-check-label"><input type="checkbox" class="form-check-input" /> Remember Me</label>
                              <a class="forgot" href="">Mot de passe oublié</a>
                           </div>
                           <div class="field margin_0">
                              <label class="label_field hidden">hidden label</label>
                             
                                <input type="submit" class="main_bt " value="log in" />
                           </div>
                           <div class="field margin_0">
                              
                              <Link to='/register' class="label_field ">Je ne suis pas inscrit</Link>
                              
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>);

   
  return (
   <div className="app">
   <div className="login-form">
     
     {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
   </div>
 </div>
  )
}
