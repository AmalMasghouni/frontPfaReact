import { Component } from "react";
import EtudiantSer from "../service/EtudiantService/EtudiantSer";
class GererProfil extends Component{
   constructor(props) {
      super(props)

      this.state = {
          id: this.props.match.params.id,
          nom: '',
          prenom: '',
          dtnaissance: '',
          phone:'',
          email:'',
          password:''
      }
      this.changeNomHandler = this.changeNomHandler.bind(this);
      this.changePrenomHandler = this.changePrenomHandler.bind(this);
      this.changeDtnaissanceHandler = this.changeDtnaissanceHandler.bind(this);
      this.changePhoneHandler = this.changePhoneHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
      this.updateProfil = this.updateProfil.bind(this);
  }
  componentDidMount(){
   EtudiantSer.updateProfil(this.state.id).then((res)=>{
      let profil=res.data;
      this.setState({
         nom: profil.nom,
          prenom: profil.prenom,
          dtnaissance: profil.dtnaissance,
          phone:profil.phone,
          email:profil.email,
          password:profil.password

      });
   });
  }
  updateProfil=(e)=>{
  
   let profil={nom: this.state.nom,
      prenom: this.state.prenom,
      dtnaissance: this.state.dtnaissance,
      phone:this.state.phone,
      email:this.state.email,
      password:this.state.password
}
console.log('profil => ' + JSON.stringify(profil));
console.log('id => ' + JSON.stringify(this.state.id));
EtudiantSer.updateProfil(profil,this.state.id).then(res=>{
   console.log("update")
})
  }
  changeNomHandler= (event) => {
   this.setState({nom: event.target.value});
}
changePrenomHandler= (event) => {
   this.setState({prenom: event.target.value});
}
changeDtnaissanceHandler= (event) => {
   this.setState({dtnaissance: event.target.value});
}
changePhoneHandler= (event) => {
   this.setState({phone: event.target.value});
}
changeEmailHandler= (event) => {
   this.setState({email: event.target.value});
}
changePasswordHandler= (event) => {
   this.setState({password: event.target.value});}
  
   render()
   {
      return( <div>
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
      </div>)
   }
   
}
export default GererProfil;
