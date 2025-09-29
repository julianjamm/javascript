// Ejercicio 30: Piedra, Papel o Tijera
let jugador = "piedra";
let computadora = "tijera";
let ganador;

switch (true) {
  case (jugador === computadora):
    ganador = "Empate"; break;
  case (jugador === "piedra" && computadora === "tijera"):
  case (jugador === "papel" && computadora === "piedra"):
  case (jugador === "tijera" && computadora === "papel"):
    ganador = "Jugador gana"; break;
  default:
    ganador = "Computadora gana";
}
console.log(ganador);