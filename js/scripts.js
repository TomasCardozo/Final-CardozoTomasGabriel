class Prestamo{
    constructor(nombre, apellido, monto, cuotas, interes){
        this.nombre=nombre;
        this.apellido=apellido;
        this.monto=monto;
        this.cuotas=cuotas;
        this.interes=interes;
    }

    estado(monto, ncuotas){
        return status = (((monto*0.03)*(ncuotas))+monto);
    }
}
const prestamoA = [];
let prestamoO = new Prestamo();

function mostrar(prestamoA){
    let sw="";
    
    sw+=`Nombre: ${prestamoA[prestamoA.length - 1].nombre}\n`;
    sw+=`Apellido: ${prestamoA[prestamoA.length - 1].apellido}\n`;
    sw+=`Monto: ${prestamoA[prestamoA.length - 1].monto}\n`;
    sw+=`Cuotas: ${prestamoA[prestamoA.length - 1].cuotas}\n`;
    sw+=`Interes: ${prestamoA[prestamoA.length - 1].interes}\n`;
    alert(sw);
    sw="";
}

let nam = prompt(`Nombre: `);
let sname = prompt(`Apellido: `);
let mon = Number(prompt(`Monto: `));
let cuotas = Number(prompt(`Cantidad de Cuotas:`));
let interes = Number(prestamoO.estado(mon, cuotas));
prestamoA.push(new Prestamo(nam, sname, mon, cuotas, interes));

mostrar(prestamoA);

// luego de mostrarlo impactaria en el html