//calculo de IMC indice de masa corporal realizado con if y while

// let peso = 0
// let altura = 0
// let imc = 0


// while (peso == 0 || altura == 0 ) {
//     peso = parseFloat(prompt("ingresa tu peso en Kg"))
//     if (peso > 0) {
//         altura = parseFloat(prompt("ingresa tu altura en metros"))

//         if ( isNaN(altura) ){ 
//            altura = 0
//         }
//     }
//     if (peso > 0 && altura > 0) {
//         imc = (peso / (altura * altura))
//         alert ("tu indice de masa corporal es: " + imc)
//         if(imc < 18.5 ){
//             alert("usted  esta en desnutrición")
//         }
//         if(imc >= 18.5 && imc <= 24.9 ){
//             alert("usted  se encuentra dentro del rango de peso normal o saludable")
//         }
//         if(imc >= 25 && imc <= 29.9 ){
//             alert("usted se encuentra dentro del rango de sobrepeso ")
//         }
//         if(imc >= 30 ){
//             alert("usted se encuentra dentro del rango de obesidad" )
//         }

//     }


// }



//calculo de IMC indice de masa corporal realizado con "if, while, switch"

let peso = 0
let altura = 0
let imc = 0


while (peso == 0 || altura == 0) {
    peso = parseFloat(prompt("ingresa tu peso en Kg"))
    if (peso > 0) {
        altura = parseFloat(prompt("ingresa tu altura en metros"))

        if (isNaN(altura)) {
            altura = 0
        }
    }
    if (peso > 0 && altura > 0) {
        imc = (peso / (altura * altura))
        alert("tu indice de masa corporal es: " + imc)
        switch (true) {
            case (imc < 18.5):
                alert("usted  esta en desnutrición")
                break;
            case (imc >= 18.5 && imc <= 24.9):
                alert("usted  se encuentra dentro del rango de peso normal o saludable")
                break;
            case (imc >= 25 && imc <= 29.9):
                alert("usted se encuentra dentro del rango de sobrepeso ")
                break;
            default:
                alert("usted se encuentra dentro del rango de obesidad")
                break;
        }


    }


}










































