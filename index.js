function reservar() {
    let reserva = prompt("¿Desea hacer una reserva? (en caso afirmativo ingrese si)");
    if (reserva == "si") {
        let cantidad = parseInt(prompt("¿Cuántos comensales? (ingrese número)"));

        if (cantidad > 20 || cantidad < 0 || cantidad == "") {
            alert("La cantidad ingresada no es válida");
        } else {
            let nombre = prompt("Ingrese nombre");
            let celular = prompt("Ingrese un celular de contacto");
            let mail = prompt("Ingrese un e-mail");
            let notas = prompt("Notas:");
            console.log("Los comensales son: " + cantidad + ". Y las notas son: " + notas);
            console.log("La reserva se realizó a nombre de: " + nombre + ", celular: " + celular + " y e-mail: " + mail);
            let valorTotal = cantidad * 3400;
            console.log("La reserva tiene un valor total aproximado en efectivo de $" + valorTotal);
            let p10 = valorTotal * 0.1;
            console.log("Debe abonar una seña de: $" + p10 + ". Correspondiente al 10% del valor total de la reserva");

        }
    } else {
        alert("Nos veremos la próxima");
    }
}


for (let i = 0; i < 2; i++) {
    reservar();
}
