import axios from "axios";

export default {

    saveSound: function(soundData){
        return axios.post("/api/sounds", soundData);
    }
};