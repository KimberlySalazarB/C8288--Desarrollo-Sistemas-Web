interface Usuario{
    nombre:string;
    correo:string;
    numero_telefono:string;
    edad:number;
}

interface ResgistroExitoso{
    status:"sucess";
    message:string
}
function validar(usua:Usuario, message:ResgistroExitoso){
    if(usua.nombre!==null){
        
        if (usua.numero_telefono.length<9){
            return message
        }
        return message
    }
}
