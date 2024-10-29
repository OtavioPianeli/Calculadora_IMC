const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');


    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Você está com peso Normal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Você está com Sobrepeso!';
    } 
    else if (bmi >= 30 && bmi < 35) {
        description = 'Cuidade! Você está com obesidade Moderada';
    } else if (bmi >= 35 && bmi < 40) {
        description = 'Cuidado! Você está com obesidade Severa!';
    } else {
        description = 'Cuidado! Você está com obesidade Morbida!';
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
})