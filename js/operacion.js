
let fecha=document.getElementById('fecha')

    let fechaActual=new Date()
    
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let mesesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    
    let diaSemana = diasSemana[fechaActual.getDay()]
    let diaNumero = fechaActual.getDate()
    let mes = mesesAnio[fechaActual.getMonth()]
    let anio = fechaActual.getFullYear()
    
    
    let txtfecha=document.createElement('h3');
    txtfecha.textContent= diaSemana+" "+diaNumero+" de "+mes+" del "+anio
    
    
    fecha.appendChild(txtfecha)


function relojHora(){
    let fechaActual=new Date()
    let horas = fechaActual.getHours()
    let minutos = fechaActual.getMinutes()
    let segundos = fechaActual.getSeconds()

    let horaFormato = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos} `

    document.getElementById('hora').textContent = horaFormato
}




setInterval(relojHora, 1000);
window.onload = relojHora;