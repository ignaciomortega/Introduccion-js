const $formSalarios = document.querySelector("#form-ingreso-salarios");
const $botonAgregar = document.querySelector("#agregar-sueldo");
const $botonEliminar = document.querySelector("#quitar-sueldo");
const $botonCalcular = document.querySelector("#boton-calcular");
const $displayResultados = document.querySelector("#display-resultados");

$botonAgregar.onclick = function(){
    $formSalarios.innerHTML+= `<div class="div-salario">
                                <label class="label-sueldo">Ingresar salario anual</label>
                                <input type="number" class="inputs-sueldo"><br>
                                </div>`;
                               

    return false
}

$botonEliminar.onclick = function(){
     

        $formSalarios.removeChild($formSalarios.lastChild);


}

$botonCalcular.onclick = function (){
    const valoresInputs = document.querySelectorAll(".inputs-sueldo");
    const salarios = [];

    for (let i = 0 ; i < valoresInputs.length ; i++){
        salarios.push(valoresInputs[i].value)
    }
    salarios.sort(function(a, b){return a - b});

    calcularYMostrarEstadisticas(salarios);

    return false;
}

function calcularYMostrarEstadisticas(arrayNumeros){
    const MESES_EN_UN_ANIO = 12;
    let menorSalario = arrayNumeros[0];
    let mayorSalario = arrayNumeros.at(-1);
    let totalSalariosAnual = 0;
    let promedioSalariosAnual = 0;
    let promedioSalariosMensual = 0;


    for (let i = 0 ; i < arrayNumeros.length ; i++){
        totalSalariosAnual += Number(arrayNumeros[i]);
    }

    promedioSalariosAnual = Math.round(totalSalariosAnual / arrayNumeros.length);
    promedioSalariosMensual = Math.round(promedioSalariosAnual / MESES_EN_UN_ANIO);

    $displayResultados.textContent = `El mayor salario anual es de $${mayorSalario},y el menor es de $${menorSalario}. El promedio de salarios anual es de $${promedioSalariosAnual},y el mensual de $${promedioSalariosMensual}`;

}

