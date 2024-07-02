//IMPORTACION, INSTANCIACION Y CONFIGURACION DEL MODULO mysql2
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306
})

//CONECTAR
connection.connect((err)=>{
    //ERROR
    if(err){
        console.error("Error de conexion: "+err);
        return;
    }

    //MENSAJE DE EXITO
    console.log("Estado de conexion: CONECTADA");

    //SI NO EXISTE LA BASE DE DATOS SE CREA
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS marvel_db';

    connection.query(sqlCreatedb, (err, result)=>{
        //ERROR
        if(err){
            console.error("Error de conexion: "+err);
            return;
        }

        //EXITO
        console.log("Base de datos: CREADA/EXISTENTE");

        connection.changeUser({database:"marvel_db"}, (err)=>{
            //ERROR
            if(err){
                console.error("Error de conexion: "+err);
                return;
            }
            
            //EXITO
            //SI NO EXISTEN LAS TABLAS SE CREAN
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS consulta (
                    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(20) NOT NULL,
                    apellido VARCHAR(20) NOT NULL,
                    email VARCHAR(50) NOT NULL,
                    telefono VARCHAR(50) NOT NULL,
                    consulta VARCHAR(255) NOT NULL
                    
                );
                `; 
                //CREATE TABLE IF NOT EXISTS pais (
                //    id_pais INT AUTO_INCREMENT PRIMARY KEY,
                //    nombre VARCHAR(20) NOT NULL
                //);
            
                //id_pais INT NOT NULL,
                //FOREIGN KEY (id_pais) REFERENCES pais(id_pais)

            connection.query(createTableQuery, (err, result)=>{
                //ERROR
                if(err){
                console.error("Error al crear la tabla: "+err);
                return;
                }

                //EXITO
                console.log("Tabla: CREADA/EXISTENTE");
            });
        });
    });
});

//EXPORTACION DEL MODULO
module.exports = connection;