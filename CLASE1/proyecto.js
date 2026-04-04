let destinos=[];

const registrarDestino=(destino, fecha,transporte)=>{
    let nuevoViaje={
        destino:destino,
        fecha:fecha,
        transporte:transporte,
        costo:calcularCosto(destino,transporte)
    };
    destinos.push(nuevoViaje);
}
const calcularCosto=(destino,transporte)=>{
    let costoBase=0;
    if(destino==="Paris"){
        costoBase=500;
    }else if(destino==="Londres"){
        costoBase=400;
    }else if(destino==="New York"){ 
        costoBase=600;
    }

    if(transporte==="Avion"){
        costoBase+=200;
    }else if(transporte==="Tren"){
        costoBase+=100;
    }

    return costoBase;
}
const mostrarIterarios=()=>{
    destinos.forEach((destino,index)=>{
        console.log(`Viaje ${index+1}: Destino: ${destino.destino}, Fecha: ${destino.fecha}, Transporte: ${destino.transporte}, Costo: $${destino.costo}`);
    });

}

const iniciarApp=()=>{
    registrarDestino("Paris","2026-12-01","Avion");
    registrarDestino("Londres","2026-11-15","Tren");
    mostrarIterarios();
}
iniciarApp();

