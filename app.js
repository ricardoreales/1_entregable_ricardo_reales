

let peso = 0
let altura = 0
let imc = 0


while (peso == 0 || altura == 0 ) {
    peso = parseFloat(prompt("ingresa tu peso en Kg"))
    if (peso > 0) {
        altura = parseFloat(prompt("ingresa tu altura en metros"))
        
        if ( isNaN(altura) ){ 
           altura = 0
        }
    }
    if (peso > 0 && altura > 0) {
        imc = (peso / (altura * altura))
        alert ("tu indice de masa corporal es: " + imc)
        if(imc < 18.5 ){
            alert("usted  esta en desnutrición")
        }
        if(imc >= 18.5 && imc <= 24.9 ){
            alert("usted  se encuentra dentro del rango de peso normal o saludable")
        }
        if(imc >= 25 && imc <= 29.9 ){
            alert("usted se encuentra dentro del rango de sobrepeso ")
        }
        if(imc >= 30 ){
            alert("usted se encuentra dentro del rango de obesidad" )
        }

    }
    

}










































