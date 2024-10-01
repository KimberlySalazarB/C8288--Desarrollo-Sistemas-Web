function procesarSolicitud(tiempo,solicitud,callback){
    let n =0;
    const tiempos=tiempo*1000;
    const pila=[];
    let demora=Math.floor(Math.random()*5)
    while(n<=tiempos){
        n++
        if (n===2){
            let demorasegu=demora*1000
            while(n<=demorasegu){
                n++
            }
        }
    }
    const errores=Math.random()<0.2;
    if (errores){
        callback(new Error(`Solicitud ${solicitud.id} fallo en ${demora} segundo`));
        
    }else if(pila.length<=5){
            const resultado=`Solicitud ${solicitud.id} procesada correctamente en ${tiempo} segundos`
            pila.push(solicitud);
            callback(null,resultado)
        
    }
    
    

}

procesarSolicitud(2,{id:1},(error,reusltado)=>{
    if(error){
        console.error(error.message)
    }else{
        console.log(reusltado)
    }
 
    procesarSolicitud(3,{id:2},(error,reusltado)=>{
        if(error){
            console.error(error.message)
        }else{
            console.log(reusltado)
        }
        
        procesarSolicitud(4,{id:3},(error,reusltado)=>{
            if(error){
                console.error(error.message)
            }else{
                console.log(reusltado)
            }
            procesarSolicitud(5,{id:4},(error,reusltado)=>{
                if(error){
                    console.error(error.message)
                }
                else{
                    console.log(reusltado)
                }
                procesarSolicitud(5,{id:5},(error,reusltado)=>{
                    if(error){
                        console.error(error.message)
                    }
                    else{
                        console.log(reusltado)
                    }
                procesarSolicitud(4,{id:6},(error,reusltado)=>{
                    if(error){
                        console.error(error.message)
                    }else{
                        console.log(reusltado)
                    }
                
                })
            })
        })

    })
 
})
});



function solicitud(){
    return new Promise((resolve,reject)=>{
        
    })
}
