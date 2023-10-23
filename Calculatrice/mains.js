let calcul = '';


function addNumber(number){
  
calcul += number;
document.getElementById('resultat').value = calcul;
    
}

function erase(){

calcul = '';
document.getElementById('resultat').value = '';
}

function addoperator(operator){
    calcul += operator;
document.getElementById('resultat').value = calcul;
}

function result (){
    try {
        const result = eval(calcul);
        document.getElementById('resultat').value = result;
        calcul = String(result);
    } catch (error) {
        document.getElementById(result).value = 'Error';
        calcul = '';

    }
}