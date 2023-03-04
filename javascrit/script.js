window.addEventListener("load", iniciarJuego);

let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;



function iniciarJuego(){
    let seleccionarAtaque = document.getElementById("poder-mascota");
    seleccionarAtaque.style.display = "none";

    let botonInicio = document.getElementById("boton-mascota");
    botonInicio.addEventListener("click", seleccionarMascota);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("boton-reinicio");
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.style.display = "none";
}

function seleccionarMascota(){
    let seleccionarMascota = document.getElementById("mascota");
    seleccionarMascota.style.display = "none";

    let seleccionarAtaque = document.getElementById("poder-mascota");
    seleccionarAtaque.style.display = "block";

    let mascotaHipodoge = document.getElementById("hipodoge");
    let mascotaCapipepo = document.getElementById("capipepo");
    let mascotaRatigueya = document.getElementById("ratigueya");
    let spanMascota = document.getElementById("mascota-jugador");

    if(mascotaHipodoge.checked){
        spanMascota.innerText = "Hipodoge";
    }else if(mascotaCapipepo.checked){
        spanMascota.innerText = "Capipepo";
    }else if(mascotaRatigueya.checked){
        spanMascota.innerText = "Ratigueya";
    }else{
        alert("Elija mascota");
    }

    mascotaEnemido();
    
}

function aleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function mascotaEnemido(){
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let mascotaAleatorio = aleatorio(1,3);

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerText = "Hipodoge";
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerText = "Capipepo";
    }else{
        spanMascotaEnemigo.innerText = "Ratigueya";
    }
}

function combate(){
    let vidasJugador = document.getElementById("vidas-jugador");
    let vidasEnemigo = document.getElementById("vidas-enemigo");

    if(ataqueJugador == ataqueEnemigo){
        crearMensajes("Empate");
    }else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensajes("GANASTES");
        vidaEnemigo--
        vidasEnemigo.innerHTML = vidaEnemigo;
    }else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensajes("GANASTES");
        vidaEnemigo--
        vidasEnemigo.innerHTML = vidaEnemigo;

    }else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensajes("GANASTES");22
        vidaEnemigo--
        vidasEnemigo.innerHTML = vidaEnemigo;
    }else{
        crearMensajes("PERDISTES");
        vidaJugador--
        vidasJugador.innerHTML = vidaJugador;
    }

    revisarVidas();


}

function aleatorioAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego";
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua";
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = "Tierra";
    }

    combate();
}
function ataqueFuego(){
    ataqueJugador = "Fuego";
    aleatorioAtaqueEnemigo();
}
function ataqueAgua(){
    ataqueJugador = "Agua";
    aleatorioAtaqueEnemigo();
}
function ataqueTierra(){
    ataqueJugador = "Tierra";
    aleatorioAtaqueEnemigo();
}

function crearMensajes(resultado){
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", las mascotas del enemigo ataco con " + ataqueEnemigo + "-" + resultado;

    sectionMensajes.appendChild(parrafo);
}

function crearMensajesFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true;
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true;
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true;

    let botonReiniciar = document.getElementById("boton-reinicio");
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.style.display = "block";

}

function revisarVidas(){
    if(vidaEnemigo == 0){
        crearMensajesFinal("Ganaste");
    }else if(vidaJugador == 0){
        crearMensajesFinal("Perdiste");
    }

}

function reiniciarJuego(){
    location.reload();
}
