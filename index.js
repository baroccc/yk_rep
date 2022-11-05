//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
//Ejecutar aplicación de express
const app = express()
//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;

//Solicitud al endpoint "/yk"
app.get('/yk',(req,res)=>{
    res.send('ola comostas')
})
//Solicitud al endpoint "/haider147"
app.get('/haider147',(req,res)=>{
    res.send('Quién para un partido de fuchi')
})
//Definir el parametro donde la aplicacion escucha
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
