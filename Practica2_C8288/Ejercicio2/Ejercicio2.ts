class UsuarioBase{
    constructor(public nombre:string,public correo:string){

    }
    verPermisos():void{
        console.log("Nombre:",this.nombre, "Correo:",this.correo);
    }
}

class Admin extends UsuarioBase{
    gestionarUsuarios():void{
        console.log(`El usuario ${this.nombre} esta siendo gestionado por el admin`)
    }

}

class SuperAdmin extends Admin{
    gestionarSistema():void{
        console.log(`Se esta gestionando el sistema`)
    }
}


class GestorDePermisos <T extends UsuarioBase>(usuario:T):T{

    if(usuario===UsuarioBase){
        return UsuarioBase
    }else if(usuario===Admin){
        return Admin
    }else if(usuario===SuperAdmin){
        return SuperAdmin 
    }
}



const dev= new GestorDePermisos<UsuarioBase>;
