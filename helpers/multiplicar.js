const fs = require('fs');

const crearArchivo = (base = 5, listar= false) => {

    const promesa = new Promise((exito, invalido)=>{
        if (Number.isInteger(base)) {
            if (listar) {
                console.log('*************************');
                console.log(`Tabla del ${base}`);
                console.log('*************************');
            }

            let salida ='';
            
            for(let i=1; i<=10; i++){
                salida += `${base} x ${i} = ${5*i}\n`
            };
            
            fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
            
            if (listar) {
                console.log(salida)
            }
            exito( `Tabla-${base}.txt` )


        } else {
            invalido ('Valor invalido, por favor digite un numero')
        }
    });

    return promesa
    
}

module.exports = {
    crearArchivo: crearArchivo
};
