function handle() {
    alert('Отправлено!');
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);

function handlee() {
    let inputs = document.querySelectorAll("input");
}

function handleee() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}