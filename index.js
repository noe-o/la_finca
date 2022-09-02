


function reservar() {
    for (i = 0; i < 3; i++) {
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
            alert("El nombre de la persona que reserva es: " + mesas[i].nombre + ", el celular es: " + mesas[i].celular + ", la cantidad de comensales es: " + mesas[i].comensales);
            let otra = prompt("¿Desea hacer otra reserva? Responder:si/no");
            if (otra == "no") {
                alert("Ok, nos veremos la próxima");
                i = 2;
            } else if (otra != "no" && otra != "si"){
                alert("No pudimos procesar su respuesta");
                i = 2;
            }
        } else if (quiere == "no") {
            alert("Ok, nos veremos la próxima");
            i = 2;
        } else {
            alert("No pudimos procesar su respuesta");
            i = 2;
        }
    }
}
reservar();

