const mongoose= require('mongoose');
const fideleSchema= mongoose.Schema(
{
    nom:{type:String},
    prenoms:{type:String},
    mouvement:{type:String},
    fonction:{type:String},
    date:{type:String},
    heure:{type:String},
    mois:{type:String},
    avance:{type:String},
    restePayer:{type:String},
    status:{type:String},
    username:{type:String},
 



},
{
    timestamps:true
}

);
module.exports= mongoose.model('Fidele',fideleSchema);