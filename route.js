const {Router} = require('express');
const consults = require('../consults');
const router = Router();

// ruta para listar all names > get
router.get('/',async (req, res)=>{
    const consult = await consults.getCampaign();
    return res.status(200).json(consult);
})


// ruta para acceder al detalle de un cliente
// router.get('/:id', async (req, res) => {
//     const {id} = req.params;
//     const consult = await consults.getClienteByID(id);

//     if(consults.length === 0){
//         return res.status(400).json({message: "client not found"});
//     }
//     return res.status(200).json(consult);
// });

// ruta para creacion campaña / debe incluir todo de la tabla > post
router.post('/', async (req, res) => {
    const {id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info} = req.body;
    const consult = await consults.insertCampaign(id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info);
    return res.status(200).json(consult);
});


// ruta para edicion campaña / incluir todo de la tabla > put 
router.put('/:id', async (req, res) => {
    const {id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info} = req.body;
    const consult = await consults.updateCampaign(id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info);

    if(consult === null){
        return res.status(400).json({message: 'Campaign not found'})
    }
    return res.status(200).json({message: 'Campaign updated successfully'})
});


// ruta para eliminar campaña > delete
router.delete('/:id', async (req, res) => {
    const {id} = req.body;
    const consult = await consults.deleteCampaign(id);

    if (consult === null){
        return res.status(400).json({message: 'Campaign not found'});
    }
    return res.status(200).json({message: 'Campaign successfully deleted'})
});


module.exports = router;



