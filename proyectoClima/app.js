

//https://openweathermap.org/
window.addEventListener('load', () => { 

let lon;
let lat;

let temperaturaValor = document.getElementById('temperatura-valor');
let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

let ubicacion = document.getElementById('ubicacion');
let  iconoAnimado = document.getElementById('icono-animado');

let vientoVelocidad = document.getElementById('viento-velocidad');

if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(posicion => {

        //console.log(posicion.coords.latitude, posicion.coords.longitude)
        lon = posicion.coords.longitude;
        lat = posicion.coords.latitude;

        // ubicacion actual
       // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=61b195b0fa2ba891ad7660b4256baaaf`

        // ubicacion por ciudad
          const url = `https://api.openweathermap.org/data/2.5/weather?q=Argentina&lang=es&units=metric&appid=61b195b0fa2ba891ad7660b4256baaaf`

         //console.log(url)
         fetch(url)
        .then(respuesta => respuesta.json()) // para que sea respuesta en formato json

        .then(data => {
        //    console.log(data.main.temp) // para ingresar a la temperatura
            let temp = Math.round(data.main.temp) // redondeamos el numero.
            temperaturaValor.textContent = `${temp} °C`;

          //  console.log(data.weather[0].description) // para ingresar a la descripcion
            temperaturaDescripcion.textContent = data.weather[0].description;
            console.log(data.name) // para ingresar al nombre de la ciudad
            ubicacion.textContent = data.name;

         //   console.log(data.wind.speed)  para ingresar la velocidad de viento
            vientoVelocidad.textContent = `${data.wind.speed} km/h`;


            // para ingresar a los iconos estaticos
 /*         console.log(data.weather[0].icon)  
         let iconCode = data.weather[0].icon
         const urlIcon = ` https://openweathermap.org/img/wn/${iconCode}.png` 
        console.log(urlIcon) */


        // PARA ICONOS ANIMADOS
        console.log(data.weather[0].main)
        switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconoAnimado.src='animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src='animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconoAnimado.src='animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src='animated/snowy-6.svg'
                console.log('NIEVE');
              break;                        
            case 'Clear':
                iconoAnimado.src='animated/day.svg'
                console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconoAnimado.src='animated/weather.svg'
                console.log('ATMOSFERA');
                break;  
            case 'Clouds':
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('NUBES');
                break;  
            default:
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('por defecto');
          }



        }
    
    )
        .catch(err => console.log(err))

    })
}


})