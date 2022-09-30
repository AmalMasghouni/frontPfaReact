import { Component } from "react";

class PasserTest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'Écrivez un programme Java pour afficher la somme de deux nombres:'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return( <div class="container-fluid">
        
        
    <div class="row column_title">
      <div class="col-md-12">
        <div class="page_title">
          <h2>Passer le Test</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
      <div class="login_form">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
          
              
              
              
              
              
              
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="page_title">Ecrivez votre solution</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"  value={this.state.value} onChange={this.handleChange} rows="3"></textarea>
              </div>
            <input class="main_bt" type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>


      </div>
    </div>
  </div>  
    
    
    
    )
  }
}
export default PasserTest;

