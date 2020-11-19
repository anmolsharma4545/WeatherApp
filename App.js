var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputvalue');
var name = document.querySelector('.location');
var temp = document.querySelector('.temperature-degree');
var desc = document.querySelector('.temperature-description');
var tempSection = document.querySelector('.temperature');
const tempSpan = document.querySelector('.temperature span');


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=109af75160502e51ca09f0df651e0929')

.then(response => response.json())
.then(data => {
   
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    if(tempValue > 150){
        tempValue = tempValue - 220;
        
    }
    
    let celsius = (tempValue -32) * (5/9);
     var nameValue = document.getElementsByClassName('.inputvalue').value;
    name = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    console.log(data);
    
    tempSection.addEventListener('click',function(){
        if(tempSpan.textContent ==="F"){
            tempSpan.textContent = "C";
            temp.textContent = celsius;
        }else
        {
            tempSpan.textContent = "F";
            temp.textContent = tempValue;
        }
    })
    
})

.catch(err => alert("Wrong City Name!"))
})






