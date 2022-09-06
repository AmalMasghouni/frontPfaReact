import React from 'react';
import {Outlet } from 'react-router-dom';
export default function PasserTest() {
  return (
    <div> 
      <div class="container-fluid">
        
        
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>PasserTest</h2>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="row column_title">
            <fieldset>
              <legend><h1>React est un excellent outil pour :</h1></legend>

              <div>
                <input type="radio"  />
                <label ><h6>créer des bases de données.</h6> </label>
              </div>
              <div>
                <input type="radio"  />
                <label ><h6>construire une interface utilisateur à partir de composants réutilisables</h6></label>
              </div>
              <div>
                <input type="radio" ></input>
                <label ><h6>créer un algorithme de machine learning</h6></label>
              </div>
              <div>
                <input type="radio" ></input>
                <label ><h6>créer le design d'une maquette.</h6></label>
              </div>
            </fieldset>
            
          </div>
        </div>
      </div>
    </div>
  )
}
