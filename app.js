//grabbing all the elements;
let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')


//using fetch api
button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=405e66f7a5aad491acfd71299d6d97a7')
    .then(res => res.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        //push data into dom
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
console.log(data);
    })



    .catch(err => alert('Wrong city name!'))
})