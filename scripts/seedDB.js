const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sounds");

const soundSeed = [

{
    title: "Csound3",
    url: "https://soundcloud.com/user-482742119/csound3"
},
{
    title: "C#Hisound1",
    url: "https://soundcloud.com/user-482742119/chisound1"
},
{
    title: "Bsound2",
    url: "https://soundcloud.com/user-482742119/bsound2"
},
{
    title: "Csound1",
    url: "https://soundcloud.com/user-482742119/csound1"
}
];

db.Sound
.remove({})
.then(()=> db.Sound.collection.insertMany(soundSeed))
.then(data => {
    console.log(data.result.n + " records inserted.");
    process.exit(0);
})
.catch(err =>{
    console.error(err);
    process.exit(1);
});