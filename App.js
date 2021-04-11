var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputvalue');
var name = document.querySelector('.location');
var temp = document.querySelector('.temperature-degree');
var desc = document.querySelector('.temperature-description');
var tempSection = document.querySelector('.temperature');
const tempSpan = document.querySelector('.temperature span');


button.addEventListener('click',function(){
     var api = `http://api.weatherapi.com/v1/current.json?key=0e2b251ef64040efab5185656201811&q=${inputValue.value}&aqi=no`;
            console.log(api);
            console.log(inputValue.value);

            fetch(api).then(
                function(res){
                    return res.json();
                }
            ).then(
                function(data){
                   
                    document.querySelector('.temperature-degree').innerHTML =data.current.temp_c + "&deg;" + "C" ;
                    document.querySelector('.location').innerHTML = data.location.name + "<br>"  + data.location.region;
                    document.querySelector('.temperature-description').innerHTML =  data.current.condition.text;
                     var img =document.querySelector('.icon');
                     img.src = data.current.condition.icon;
                     console.log(img.src);
                     console.log("All Okay!")
                
                })
               });






