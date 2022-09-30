import axios from "axios";

import React, { Component } from 'react';
const etud_url="http://localhost:8089/template/gererprofil";
class EtudiantSer extends Component
{
updateProfil(user,userId){
    return axios.put(etud_url+'/'+userId,user);
}
getUserById(userId){
    return axios.get(etud_url+'/'+userId);
}
}
export default new EtudiantSer;
