function reservar() {
    let quiere = prompt("¿Quiere reservar una mesa para el almuerzo del domingo? Responder: si/no")
    if (quiere == "si") {
        class Mesa {
            constructor(nombre, celular, comensales) {
                this.nombre = nombre;
                this.celular = celular;
                this.comensales = comensales;
            }
        }
        const mesas = [];
        mesas.push(new Mesa(prompt("Nombre y apellido:"),
            prompt("Celular de contacto:"),
            parseInt(prompt("Número de comensales:"))));
        console.log(mesas);
        for (let i = 1; i < 3; i++) {
            let otra = prompt("Si desea salir presione 0");
            if (otra == 0) {
                i = 2;
            } else {
                const mesas = [];
                mesas.push(new Mesa(prompt("Nombre y apellido:"),
                    prompt("Celular de contacto:"),
                    parseInt(prompt("Número de comensales:"))));
                console.log(mesas);
            }
        }
    } else if (quiere == "no") {
        alert("Ok, nos veremos la próxima");        
    } else {
        alert("No pudimos procesar su respuesta")

    }
}
let resultado=reservar();
console.log(resultado);