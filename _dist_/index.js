removeMessage
import { capitalizarPrimeraLetra } from './utilities.js';
import {queEs} from './utilities.js'
import {findCountry} from './utilities.js'
import {removeMessage} from './utilities.js'
import { createButtonClear } from './utilities.js'
import { createMessage } from './utilities.js'
import { createAlert } from './utilities.js'
import { valueInputCity } from './utilities.js'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const keyApi = '&appid=15d8a25476449965ff4e8de707417366&units=metric';
const iconImg = 'http://openweathermap.org/img/wn/';
const todo = 'https://api.openweathermap.org/data/2.5/weather?q=caracas&appid=15d8a25476449965ff4e8de707417366&units=metric'

const appNode = document.querySelector('#container_principal');

function search_City() {

    
    window.fetch(`${baseUrl}${inputValue}${keyApi}`)
    // window.fetch(todo)
    // (2) procesar la respiesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    // (3) JSON -> Data -> Renderizar la informacion en el Browser
    .then(responseJSON => {
        
        // Funcion para crear el button de clear
        // createButtonClear();
        const weatherData = responseJSON;
        const {name, wind, main, weather, clouds, sys, id} = weatherData;
        if (!findCountry(allIds, id)){
            
            // Guardamos el id de los paises, se modo que podamos saber que paises no se puedan repetir
            allIds.push(id);

            // NameCity
            const nameCity = document.createElement('h2');
            nameCity.textContent = name +', '+ sys.country;
            nameCity.className = 'text-5xl '

            // Today
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            const today = document.createElement('p');
            today.textContent = hoy.toDateString();
            today.className = 'text-lg p-2'
            
            // Div
            const div_City_Today = document.createElement('div'); 
            div_City_Today.append(nameCity, today); 
            div_City_Today.className = 'text-center self-center md:text-left '

        // ---------------------------------------------------------
            // Icon, description, degree

            // Icon img
            const iconWeather = document.createElement('img');
            iconWeather.src = `${iconImg}${weather[0].icon}@2x.png`;
            iconWeather.className = 'transform scale-150'

            // Degrees
            const degrees = document.createElement('h3');
            degrees.textContent = Math.trunc(main.temp)+ '°';
            degrees.className = 'text-7xl'
            
            // Description
            const descriptionWeather = document.createElement('p'); 
            descriptionWeather.textContent = capitalizarPrimeraLetra(weather[0].description);

            // Div degree and description
            const div_Degree_Descrption = document.createElement('div');
            div_Degree_Descrption.append(degrees, descriptionWeather)
            div_Degree_Descrption.className = 'text-center self-center md:text-left '
            
            // Div iconWeather and Div degree and description------------------------------------------------------------------->
            const div_Icon_Descrip = document.createElement('div');
            div_Icon_Descrip.append(iconWeather, div_Degree_Descrption);
            div_Icon_Descrip.className = 'flex space-x-8 grid grid-flow-col auto-cols-max w-3/4  place-content-center border-r border-neutral-600'
            

        // ---------------------------------------------------------


            // TempHigh
            const tempHigh = document.createElement('p');
            tempHigh.textContent =  Math.trunc(main.temp_max)+ '°';

            const pH = document.createElement('p');
            pH.textContent = 'High'

            const div_pH = document.createElement('div');
            div_pH.className = 'text-center self-center md:text-left space-y-0.5 mb-5';
            div_pH.append(tempHigh,pH);
            

            //------------------------------------------- 

            // TempLow
            const tempLow = document.createElement('p');
            tempLow.textContent = Math.trunc(main.temp_min)+ '°';;

            const pL = document.createElement('p');
            pL.textContent = 'Low'

            const div_pL = document.createElement('div.hola');
            div_pL.className = 'text-center self-center md:text-left space-y-0.5';
            div_pL.append(tempLow,pL);
            

            //------------------------------------------------------------------------------------------- div

            const div_TempHL = document.createElement('div');
            div_TempHL.className = 'my-auto'
            div_TempHL.append(div_pH,div_pL);


        // ---------------------------------------------------------

            // Wind
            const speed = document.createElement('p');
            speed.textContent = wind.speed + ' mph';

            const pSpeed = document.createElement('p');
            pSpeed.textContent = 'Speed';

            const div_Speed = document.createElement('div');
            div_Speed.className = 'text-center self-center md:text-left space-y-0.5 mb-5';
            div_Speed.append(speed,pSpeed);

            // -------------------------------------------

            // Clouds %
            const cloud = document.createElement('p');
            cloud.textContent = clouds.all + '%';

            const pCloud = document.createElement('p');
            pCloud.textContent = 'Cloud';

            const div_cloud = document.createElement('div');
            div_cloud.className = 'text-center self-center md:text-left space-y-0.5';
            div_cloud.append(cloud,pCloud);

            //------------------------------------------------------------------------------------------- div

            const div_Wind_Cloud = document.createElement('div');
            div_Wind_Cloud.className = 'my-auto'
            div_Wind_Cloud.append(div_Speed, div_cloud);
        

        // ---------------------------------------------------------

        
            // Sunrice
            const sunrice = document.createElement('p');
            sunrice.textContent = queEs(sys.sunrise);

            const pSunrice = document.createElement('p');
            pSunrice.textContent = 'Sunrice';

            const div_Sunrice = document.createElement('div');
            div_Sunrice.className = 'text-center self-center md:text-left space-y-0.5 mb-5';
            div_Sunrice.append(sunrice,pSunrice);

            // ---------------------------------------

            // Sunset
            const sunset = document.createElement('p');
            sunset.textContent = queEs(sys.sunset);

            const pSunset = document.createElement('p');
            pSunset.textContent = 'Sunset';

            const div_Sunset = document.createElement('div');
            div_Sunset.className = 'text-center self-center md:text-left space-y-0.5';
            div_Sunset.append(sunset,pSunset);

            //------------------------------------------------------------------------------------------- div

            const div_Sunrice_Sunset = document.createElement('div');
            div_Sunrice_Sunset.className = 'my-auto'
            div_Sunrice_Sunset.append(div_Sunrice, div_Sunset);

            // ------------------------------------
            // Div con -> High y low, Wind y Cloud, Sunrice y Sunset

            const div_Container = document.createElement('div');
            div_Container.className = 'grid grid-cols-3 ';
            div_Container.append(div_TempHL,div_Wind_Cloud, div_Sunrice_Sunset);

            // ---------------------------------------
            // Agregamos un container para el icono y el div anterior, y lo colocamos como dos columnas
            
            const div_Container2 = document.createElement('div');
            div_Container2.className = 'grid grid-cols-2 ';
            div_Container2.append(div_Icon_Descrip,div_Container);

            // -------Agregaremos todos los div creados anteriormente en una Card 
            const card = document.createElement('div');
            card.className = 'bg-blue-300 h-auto w-11/12 bg-opacity-30 p-10 m-10 rounded-md hover:opacity-80'; 
            card.append(div_City_Today,div_Container2);
            appNode.append(card); 

            // Aca agregamos el boton de clear
            const btnCle = document.querySelector('#clear'); 
            btnCle.className = 'hola shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded box-border ml-14 h-8 md:h-10 '
        }else {
            createMessage(name);
        }
    })//este es es final 

}
let inputValue;
let allIds = [];
const btnSearch = document.querySelector("#btn-city");
btnSearch.addEventListener('click', (event) =>{
    removeMessage();
    const input = document.querySelector('#input-city');
    const aceptado = valueInputCity(input);
    if (aceptado){
        inputValue = input.value;
        search_City();
        input.value = '';
    }
})

// const div_container = document.querySelector('#container_btn_clear');
const btnClear = document.querySelector("#clear");

btnClear.addEventListener('click', (event) => {

    // Aca estamos eliminando todo lo que hay dentro del container principal 
    const div_padre_elimiar = document.querySelector('#container_principal');

    div_padre_elimiar.innerHTML = ''; 

    // Aca estamos escondiendo el btn con el que se limpia la pantalla
    btnClear.className = 'hola shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded box-border ml-14 h-8 md:h-10 hidden'

    // Removemos los mensajes por si las moscas
    removeMessage()

})

// const div_container_input_city = document.querySelector('#container-input');
// const elInput = div_container_input_city.firstChild;
// elInput.addEventListener('keyup', function(e) {
//   var keycode = e.keyCode || e.which;
//   if (keycode == 13) {
//     removeMessage();
//     const input = document.querySelector('#input-city');
//     const aceptado = valueInputCity(input);
//     if (aceptado){
//         inputValue = input.value;
//         search_City();
//         input.value = '';
//     }
//   }
// });