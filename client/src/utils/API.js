import axios from "axios";

export default {
    getSounds: function(){
       return axios.get("/api/sounds"); 
    },
    getSound: function(id){
        return axios.get("/api/sounds" + id);
     },
     deleteSound: function(id){
         return axios.delete("/api/sounds/" + id);
     },
    saveSound: function(soundData){
        return axios.post("/api/sounds", soundData);
    }
};