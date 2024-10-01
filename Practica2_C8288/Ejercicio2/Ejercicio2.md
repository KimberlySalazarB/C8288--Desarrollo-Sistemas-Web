```
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
```

Aqui se esta implementando la clase base que es UsuarioBase y las demás clases implementadas con herencia.