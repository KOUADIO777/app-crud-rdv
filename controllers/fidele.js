const Fidele = require('../models/fidele');

exports.pageBravo=(req, res)=>{
    res.status(200).render('rdv/pageFelicitation');
}
exports.pageTableau=async (req,res)=>{
    const listeRDV=await Fidele.find() 
    res.status(200).render('rdv/pageTableauRDV',{listeRDV});
}
exports.pageConsult=async (req,res)=>{
    const userRdv=await Fidele.findById({_id: req.params.id})
    res.status(200).render('rdv/pageConsulter',{userRdv});
}
//PAGE EDITER
exports.pageEdit=async(req,res)=>{
    const userRdv=await Fidele.findById({_id:req.params.id})
    res.status(200).render('rdv/pageEditer',{userRdv});

}
//PAGE AJOUTER

exports.pageAjoutRDV = (req, res)=>{
    res.status(200).render('rdv/rdv');
}

exports.addFidele = async (req, res, next)=>{
    const fidele = new Fidele({
        nom: req.body.nom,
        prenoms: req.body.prenoms,
        mouvement: req.body.mouvement,
        fonction: req.body.fonction,
        date: req.body.date,
        heure: req.body.heure,
        mois: req.body.mois,
        avance: req.body.avance,
        restePayer: req.body.restePayer,
        status: req.body.status,
        username: req.body.username,
    });
    

    try {
        const result = await fidele.save()
        console.log('result', result);
        return res.status(201).render('rdv/pageFelicitation')
        
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'La création a échoué !' });
    }
};
//PAGE MODIFIER
exports.updateFidele = async (req, res, next) => {
    
    try {
        const fidele = await Fidele.findById({_id: req.params.id});
        if (!fidele) {
            return res.status(404).json({ message: 'fidele introuvable !' });
        }
        fidele.nom= req.body.nom;
        fidele.prenoms = req.body.prenoms;
        fidele.mouvement = req.body.mouvement;
        fidele.fonction = req.body.fonction;
        fidele.date = req.body.date;
        fidele.heure = req.body.heure;
        fidele.mois = req.body.mois;
        fidele.avance = req.body.avance;
        fidele.restePayer = req.body.restePayer;
        fidele.status = req.body.status;
    

        fidele.username = req.body.username;

        const result = await fidele.save();
        console.log(result);
        res.status(200).render('rdv/updateRdv')

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'La mise à jour a échoué !' });
    }

};
//PAGE SUPPRIMER

exports.deleteFidele = async (req, res, next) => {
   
    try {
        const fidele = await Fidele.findById({_id: req.params.id});
        if (!fidele) {
            return res.status(404).json({ message: 'fidele introuvable !' });
        }
        await Fidele.findByIdAndDelete({_id: req.params.id});
        res.status(200).render("rdv/deleteRdv")

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'L\'effacement a échoué !' });
    }
};

