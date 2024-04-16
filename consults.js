const conexion = require('./conexion');

const getCampaign=async ()=>{
    const [consult]=await conexion.
    execute('select * from route.name');
    return consult;
};

// metodo para buscar cliente por id
const getCampaignByID = async(id) => {
    const[consult] = await conexion.execute('select * from route where id = ?', [id]);
    return consult;
}

// metodo para insertar nuevos clientes
const insertCampaign = async(id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info) => {
    const[consult] = await conexion.execute(
        'insert into route(id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info) values (?,?,?)', 
        [id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info]);
    return consult;
}


// metodo para actualizar
const updateCampaign = async (id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info) => {
    const myClient = await getCampaignByID(id);

    if (myClient.length === 0){
        return null;
    }
    const [consult] = await conexion.execute('UPDATE route SET name=?, details=?, begin_date=?, end_date=?, type=?, objetive=?, budget=?, status=?, metrics=?, name_boss=?, relevant_info=? where id=?;',
    [id, name, details, begin_date, end_date, type, objetive, budget, status, metrics, name_boss, relevant_info]);
    return consult;
}


// metodo para eliminar un cliente
const deleteCampaign = async (id) => {
    const [consult] = await conexion.execute('DELETE FROM route where id=?', [id]);
    return consult;
}

module.exports = { getCampaign, getCampaignByID, insertCampaign, deleteCampaign, updateCampaign}