const descripcion = {demand: true,
    alias: 'd',
    desc:'Descripcion de la tarea por hacer'};

const completado =  {
    alias: 'c',
    default: true,
    desc:'Marca como completado o pendiente la tarea por hacer'
};

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea',    {
        descripcion ,
        completado 
    }
     )
    .command('crear', 'Crear un elemento por hacer', {
        descripcion 
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion  
    }) 
    .help()
    .argv;


module.exports = {
    argv
}