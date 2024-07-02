//Importacion del módulo db
const db = require('../db/db');

//METODO PARA OBTENER TODAS LAS CONSULTAS
const getAllConsultas = (req, res) => {

    const sql = 'SELECT * FROM consulta';

    db.query(sql, (err, results) => {
        //ERROR
        if (err) {
            console.log(err);
            return;
        } 
        //RESULTADO EN JSON
        res.json(results);
    });
};

//METODO PARA OBTENER CONSULTAS PARAMETRIZADAS
const getConsultaById = (req, res) => {

    const { id_consulta } = req.params;

    const sql = 'SELECT * FROM consulta WHERE id_consulta = ?';

    db.query(sql, [id_consulta], (err, result) => {
        //ERROR
        if (err) {
            console.log(err);
            return;
        } 
        //RESULTADO EN JSON
        res.json(result);
    });
};

//METODO PARA POSTEAR CONSULTA
const postConsulta = (req, res) => {

    const { nombre, apellido, email, telefono, consulta} = req.body;

    const sql = 'INSERT INTO consulta (nombre, apellido, email, telefono, consulta) VALUES (?, ?, ?, ?, ?)';

    db.query(sql, [nombre, apellido, email, telefono, consulta], (err, result) => {
        //ERROR
        if (err)  {
            console.log(err);
            return;
        } 
        //MENSAJE DE EXITO
        res.json({ message: 'Consulta creada', id_consulta: result.insertId });
    });
};

//METODO PARA MODIFICAR CONSULTA
const updateConsulta = (req, res)=>{

    const {id_consulta} = req.params;

    const {nombre, apellido, email, telefono, consulta} = req.body;
    
    const sql = 'UPDATE consulta SET nombre = ?, apellido = ?, email = ?, telefono = ?, consulta = ? WHERE id_consulta = ?';

    db.query(sql, [nombre, apellido, email, telefono, consulta, id_consulta], (err, result)=>{
        //ERROR
        if (err)  {
            console.log(err);
            return;
        }
        
        //MENSAJE DE EXITO
        res.json({mensaje: "Consulta actualizada"});
    })
}

//METODO PARA BORRAR CONSULTA
const deleteConsulta = (req, res)=>{

    const {id_consulta} = req.params;

    const sql = 'DELETE FROM consulta WHERE id_consulta = ?';

    db.query(sql, [id_consulta], (err, result)=>{
        //ERROR
        if (err)  {
            console.log(err);
            return;
        }
        
        //MENSAJE DE EXITO
        res.json({mensaje: "Consulta borrada con exito"});
    })
}

//EXPORTACION DE LOS MODULOS
module.exports = {
    getAllConsultas,
    getConsultaById,
    postConsulta,
    updateConsulta,
    deleteConsulta
};
