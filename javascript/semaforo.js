document.addEventListener('DOMContentLoaded', function () {

    let rojo = document.getElementById('rojo')
    let amarillo = document.getElementById('amarillo')
    let verde = document.getElementById('verde')
    let boton = document.getElementById('boton')
    let boton2 = document.getElementById('boton2')
    let boton3 = document.getElementById('boton3')



    // rojo.addEventListener('click', function () {
    //     rojo.classList.toggle('glow')
    //     amarillo.classList.remove('glow')
    //     verde.classList.remove('glow')

    // })
    // amarillo.addEventListener('click', function () {
    //     amarillo.classList.toggle('glow')
    //     rojo.classList.remove('glow')
    //     verde.classList.remove('glow')
    // })

    // verde.addEventListener('click', function () {
    //     verde.classList.toggle('glow')
    //     rojo.classList.remove('glow')
    //     amarillo.classList.remove('glow')
    // }

    // HACER QUE LAS LUCES VAYAN SOLAS

    const intervalo = () => {
        verde.classList.toggle('glow')
        rojo.classList.remove('glow')
        amarillo.classList.remove('glow')



        setInterval(() => {
            rojo.classList.toggle('glow')
            amarillo.classList.remove('glow')
            verde.classList.remove('glow')


            setTimeout(() => {
                amarillo.classList.toggle('glow')
                rojo.classList.remove('glow')
                verde.classList.remove('glow')
            }, 2000)

            setTimeout(() => {
                verde.classList.toggle('glow')
                rojo.classList.remove('glow')
                amarillo.classList.remove('glow')
            }, 4000)



        }, 6000)
    }

    boton.addEventListener('click', intervalo)


    //  CAMBIO DE COLORES DEL SEMAFORO

    boton2.addEventListener('click', function () {
        rojo.style.backgroundColor= "purple"
        rojo.style.border="2px purple solid"
        amarillo.style.backgroundColor = "pink"
        amarillo.style.border="2px pink solid"
        verde.style.backgroundColor ="blue"
        verde.style.border="2px blue solid"

    })

    // VUELTA A LOS BOTONES ORIGINALES
    boton3.addEventListener('click', function () {
        rojo.style.backgroundColor= "red"
        rojo.style.border="2px red solid"
        amarillo.style.backgroundColor = "yellow"
        amarillo.style.border="2px yellow solid"
        verde.style.backgroundColor ="greenyellow"
        verde.style.border="2px greenyellow solid"

    })



































































})
