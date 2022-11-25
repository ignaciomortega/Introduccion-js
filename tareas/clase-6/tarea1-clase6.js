const $botonCantidadFamiliares = document.querySelector("#boton-enviar-integrantes");
const $formulario = document.querySelector("#form-edades");
const $displayEstadisticas = document.querySelector("#estadisticas-finales");
const $botonCalcularEstadisticas = document.querySelector("#boton-calcular-estadisticas");
const $botonReinicio = document.querySelector("#reiniciar");

$botonCantidadFamiliares.onclick = function(){
    const cantidadFamiliares = Number(document.querySelector("#cantidad-integrantes").value);

    if(cantidadFamiliares >= 1 && cantidadFamiliares <= 20 && Number.isInteger(cantidadFamiliares)) {

    for (let i = 0 ; i < cantidadFamiliares ; i++){
            let label = document.createElement("label");
            label.for = `edad-integrante${i+1}`;
            label.textContent = `Edad Integrante ${i+1}`;
            label.className = "label-edad";
            $formulario.insertBefore(label, $botonCalcularEstadisticas);
            let input = document.createElement("input");
            input.type = "number";
            input.id = `edad-integrante${i+1}`;
            input.className = "input-edad";
            $formulario.insertBefore(input, $botonCalcularEstadisticas);
            let saltoLinea = document.createElement("br");
            $formulario.insertBefore(saltoLinea, $botonCalcularEstadisticas);
    }
    
    $botonCalcularEstadisticas.removeAttribute("hidden");
    $botonCantidadFamiliares.setAttribute("disabled","true");
    $botonReinicio.removeAttribute("hidden");
    }

    else {
        alert("Solo podes ingresar una cantidad entre 1 y 20 integrantes!");
    }

    return false
}


function ordenarEdades(nodeListArray){
    const edadesOrdenadas = [];

    for (let i = 0 ; i < nodeListArray.length ; i++){
            edadesOrdenadas.push(nodeListArray[i].value);
    }

    edadesOrdenadas.sort(function(a, b){return a - b});

    return edadesOrdenadas
}

function promediarEdades(arrayNumeros){
    let total = 0;
    for(let i = 0 ; i < arrayNumeros.length ; i++){
        total += Number(arrayNumeros[i]);
    }

    let promedio = total / arrayNumeros.length;

    return promedio
}



$botonCalcularEstadisticas.onclick = function(){
    const nodeListEdades = document.querySelectorAll(".input-edad");
    let edades = ordenarEdades(nodeListEdades);
    let promedio = promediarEdades(edades);

    $displayEstadisticas.textContent = `La mayor edad del grupo familiar es ${edades.at(-1)} años, la menor es de ${edades[0]}, y el promedio es de  ${promedio}`;

    return false
}

$botonReinicio.onclick = function(){
    const inputInicial = document.querySelector("#cantidad-integrantes");
    inputInicial.value = "";

    while($formulario.firstChild){
        $formulario.firstChild.remove();
    }

    $formulario.innerHTML =`        <button type="submit" id="boton-calcular-estadisticas" hidden>Ver estadísticas</button>
    <button typr="submit" id="reiniciar" hidden>Empezar de nuevo</button>`
    $botonCantidadFamiliares.removeAttribute("disabled");
    $displayEstadisticas.textContent ="";

    return false
}
