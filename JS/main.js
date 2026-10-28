let partidas_jugadas = 0;
const maquina = "Papel";

do {
    console.log("Bienvenido al juego virtual: Piedra, Papel o Tijera");
    console.log("Recuerda que solo tienes 3 turnos para jugar");
    const jugador = prompt("Escoge entre piedra, papel o tijera");

    if (jugador == "Piedra" || jugador == "piedra") {
        console.log("Perdiste, la maquina escogio " + maquina);
        partidas_jugadas = partidas_jugadas + 1;
        console.log("Has jugado " + partidas_jugadas + " veces");

    } else if (jugador == "Papel" || jugador == "papel") {
        console.log("Empataste, la maquina escogio " + maquina);
        partidas_jugadas = partidas_jugadas + 1;
        console.log("Has jugado " + partidas_jugadas + " veces");
    } else if (jugador == "Tijera" || jugador == "tijera") {
        console.log("Ganaste, la maquina escogio " + maquina);
        partidas_jugadas = partidas_jugadas + 1;
        console.log("Has jugado " + partidas_jugadas + " veces");
    } else {
        console.log("Introduce una respuesta valida");
    }
} while (partidas_jugadas < 3);