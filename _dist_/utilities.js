
export function queEs(unix){
    let unix_timestamp = unix
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();
    if (hours >= 0 && hours <= 11)
    { 
        var esAm = 'AM';
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }else {
        if (hours >=  12 && hours <= 23){
            var esPm = 'PM';
            var formattedTime = hours + ':' + minutes.substr(-2) ;
            return formattedTime;
        }
    }
}

export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findCountry(array, val) {
    for (let i = 0; i < array.length; i++) {
        const id = array[i];
        console.log('Id de la ciudad' + id);
        if (val == array[i]){
            return true
        }
    }
    return false;
}
export function removeMessage (){
    const parentMessageLista = document.querySelector('#message');
    const parentAlertLista = document.querySelector('#alert');
    if (parentMessageLista.children.length != 0){
        parentMessageLista.removeChild(parentMessageLista.children[0]);
    }else{ 
        if(parentAlertLista.children.length != 0){
            parentAlertLista.removeChild(parentAlertLista.children[0]);
        }
    }    
}

export function createButtonClear(){
    const lista = document.querySelector('#container_principal'); 

    if (lista.children.length == 0){
        // Hacemos que aparezca el button 
        const button = document.createElement('button'); 
        button.type = 'button'; 
        button.innerText = 'Clear'; 
        button.className = 'hola shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded box-border ml-14 h-8 md:h-10';
        const div = document.querySelector('#container_btn_clear');
        div.append(button);
    }
}

export function createMessage(name){
    const div_message = document.querySelector('#message');

    const firstChild = document.createElement('div');
    firstChild.className = 'bg-red-200 border-l-4 border-red-500 text-red-600 p-4 rounded';
    firstChild.type = 'alert'

    const p1 = document.createElement('p');
    p1.className = 'font-bold';
    p1.textContent = 'Be Warned'

    const p2 = document.createElement('p');
    p2.textContent = '"' + name + '"' + ' alredy exist.';

    firstChild.append(p1,p2);

    div_message.append(firstChild)
}

export function createAlert(container){
    const alert = document.querySelector('#alert');
        if (alert.children.length == 0){
            
            // Contenedor completo del alert
        
            const firstChild = document.createElement('div');
            firstChild.className = 'bg-red-200 border-l-4 border-red-500 text-red-600 p-4 rounded';
            firstChild.type = 'alert'

            const p1 = document.createElement('p');
            p1.className = 'font-bold';
            p1.textContent = 'Be Warned'

            const p2 = document.createElement('p');
            p2.textContent = 'Enter accepted data.';

            firstChild.append(p1,p2);
    
            alert.append(firstChild);
        }
}

export function valueInputCity(input) {
    
    if (input.value == '' || input.value == ' ' || input.value == '  '|| input.value == '   '){
        createAlert();
    }else{
        return true;
    }
}


export function insertBeforeNode(newNode) {
    // conseguimoos el contenedor, que tiene a todas las cartas del clima
    const fatherNode = document.querySelector('#container_principal'); 

    // En constramos al primer hijo, antes de este sera donde queremos agregar la proxima carta
    const firstSon = fatherNode.firstChild;

    // Hacemos uso de "insertBefore" para agregar el nuevo nodo antes del primer hijo
    fatherNode.insertBefore(newNode, firstSon); 
}