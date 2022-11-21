const $CANTIDAD_VIDEOS = document.querySelector("#cantidad-videos");
const $BOTON_CANTIDAD_VIDEOS = document.querySelector("#boton-cantidad-videos");
const $INPUTS_DURACION = document.querySelector("#form-duracion-videos");
const $BOTON_CALCULO = document.querySelector("#calcular-total");
const $DURACION_TOTAL = document.querySelector("#duracion-total");


$BOTON_CANTIDAD_VIDEOS.onclick = function(){
    const cantidadClases = Number($CANTIDAD_VIDEOS.value);

    if(cantidadClases > 1 && cantidadClases <= 25){
        agregarInputs(cantidadClases);
    }
    else {
        alert("Cantidad de clases inválida, ingresá una cantidad entre 1 y 25");
    }
}

function agregarInputs(numeroVideos){
    let $FORM_VIDEOS = document.querySelector("#form-duracion-videos");

        for( let i = 1 ; i <= numeroVideos ; i++){
            $FORM_VIDEOS.innerHTML += `<label for="div-video-${i}">Video ${i}</label></br>
            <div id="div-video-${i}" class="video">
            <label for="horas-video${i}">Horas</label>
            <input type="number" id="horas-video${i}"/>
            <label for="minutos-video-${i}">Minutos</label>
            <input type="number" id="minutos-video${i}"/>
            <label for="segundos-video${i}">Segundos</label>
            <input type="number" id="segundos-video${i}"/>
            </br>
            </br>
            </div>`;
        }

}

function sumarHoras(){
    let totalHoras = 0;
    const cantidadVideosDeclarados = document.querySelectorAll(".video");

    for( let j = 1 ; j <= cantidadVideosDeclarados.length ; j++ ){
        let horas = document.querySelector(`#horas-video${j}`);
        totalHoras += Number(horas.value);
    }

    return totalHoras;
}

function sumarMinutos(){
    let totalMinutos = 0;
    const cantidadVideosDeclarados = document.querySelectorAll(".video");

    for( let j = 1 ; j <= cantidadVideosDeclarados.length ; j++ ){
        let minutos = document.querySelector(`#minutos-video${j}`);
        totalMinutos += Number(minutos.value);
    }

    return totalMinutos;
}

function sumarSegundos(){
    let totalSegundos = 0;
    const cantidadVideosDeclarados = document.querySelectorAll(".video");

    for( let j = 1 ; j <= cantidadVideosDeclarados.length ; j++ ){
        let segundos = document.querySelector(`#segundos-video${j}`);
        totalSegundos += Number(segundos.value);
    }

    return totalSegundos;
}

$BOTON_CALCULO.onclick = function (){
    const SEG_X_MIN_MIN_X_HR = 60
    let horas = sumarHoras();
    let minutos = sumarMinutos();
    let segundos = sumarSegundos();

    if (segundos >= SEG_X_MIN_MIN_X_HR){
        minutos += Math.floor(segundos / SEG_X_MIN_MIN_X_HR);
        segundos = (segundos % SEG_X_MIN_MIN_X_HR);
    }

    if (minutos >= SEG_X_MIN_MIN_X_HR){
        horas += Math.floor(minutos / SEG_X_MIN_MIN_X_HR);
        minutos = (minutos % SEG_X_MIN_MIN_X_HR);
    }

    $DURACION_TOTAL.innerText = `La duración total de las clases solicitadas es de ${horas} horas ${minutos} y ${segundos}`;

}




