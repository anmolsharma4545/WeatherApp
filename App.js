var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputvalue');
var name = document.querySelector('.location');
var temp = document.querySelector('.temperature-degree');
var desc = document.querySelector('.temperature-description');
var tempSection = document.querySelector('.temperature');
const tempSpan = document.querySelector('.temperature span');


window.addEventListener('load',function(){
    var lat, lng;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(pos){
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
            
            var api = `http://api.weatherapi.com/v1/current.json?key=0e2b251ef64040efab5185656201811&q=${lat},${lng}`;

            fetch(api).then(
                function(res){
                    return res.json();
                }
            ).then(
              function(data){
                document.querySelector('.temperature-degree').innerHTML =data.current.temp_c + "&deg;" + "C" ;
                document.querySelector('.temperature-degree-fahrenheit').innerHTML =data.current.temp_f + "&deg;" + "F" ;
                document.querySelector('.location').innerHTML = data.location.name + "<br>"  + data.location.region;
                document.querySelector('.temperature-description').innerHTML =  data.current.condition.text;
                document.querySelector('.feelslike').innerHTML =  data.current.feelslike_c;
                document.querySelector('.visibility').innerHTML =  data.current.vis_km;
                document.querySelector('.winds').innerHTML =  data.current.wind_kph;
                document.querySelector('.humidity').innerHTML =  data.current.humidity;
                document.querySelector('.winddir').innerHTML =  data.current.wind_dir;
                document.querySelector('.winddeg').innerHTML =  data.current.wind_degree;
                document.querySelector('.uvindex').innerHTML =  data.current.uv;
                document.querySelector('.dewpoint').innerHTML =  data.current.dewpoint_c;
                document.querySelector('.heatindex').innerHTML =  data.current.heatindex_c;
                document.querySelector('.precip').innerHTML =  data.current.precip_mm;
                document.querySelector('.pressure').innerHTML =  data.current.pressure_in;
                 var img =document.querySelector('.icon');
                 img.src = data.current.condition.icon;


              }
            )
         
        }
    }

});


button.addEventListener('click',function(){
     var api = `http://api.weatherapi.com/v1/current.json?key=0e2b251ef64040efab5185656201811&q=${inputValue.value}&aqi=no`;
            fetch(api).then(
                function(res){
                    return res.json();
                }
            ).then(
                function(data){
                    document.querySelector('.temperature-degree').innerHTML =data.current.temp_c + "&deg;" + "C" ;
                    document.querySelector('.temperature-degree-fahrenheit').innerHTML =data.current.temp_f + "&deg;" + "F" ;
                    document.querySelector('.location').innerHTML = data.location.name + "<br>"  + data.location.region;
                    document.querySelector('.temperature-description').innerHTML =  data.current.condition.text;
                    document.querySelector('.feelslike').innerHTML =  data.current.feelslike_c;
                    document.querySelector('.visibility').innerHTML =  data.current.vis_km;
                    document.querySelector('.winds').innerHTML =  data.current.wind_kph;
                    document.querySelector('.humidity').innerHTML =  data.current.humidity;
                    document.querySelector('.winddir').innerHTML =  data.current.wind_dir;
                    document.querySelector('.winddeg').innerHTML =  data.current.wind_degree;
                    document.querySelector('.uvindex').innerHTML =  data.current.uv;
                    document.querySelector('.dewpoint').innerHTML =  data.current.dewpoint_c;
                    document.querySelector('.heatindex').innerHTML =  data.current.heatindex_c;
                    document.querySelector('.precip').innerHTML =  data.current.precip_mm;
                    document.querySelector('.pressure').innerHTML =  data.current.pressure_in;
                     var img =document.querySelector('.icon');
                     img.src = data.current.condition.icon;
                })
               });






