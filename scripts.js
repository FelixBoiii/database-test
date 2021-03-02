var key = ':)'
var apiStuff = 'http://api.openweathermap.org/data/2.5/weather?q='
var endUrl = ''
var request = new XMLHttpRequest()
function submitMe(id) {
    
    var cityName = document.getElementById(id).value;
    endUrl = apiStuff+cityName+"&appid="+key+"&units=metric"

    request.open('GET', endUrl, true)
    request.onload = function() {
     var data = JSON.parse(this.response)

     if (request.status >= 200 && request.status < 400) { 
        console.log(data.main.temp)
        /*h1Stuff = document.getElementById("temperature");
        txt = document.createTextNode(data.main.temp);
        h1Stuff.appendChild(txt);*/
        //deze niet gebruiken als hij lit wordt
        document.getElementById("temperature").innerHTML = data.main.temp;

     } else {
       alert('city not found')
     }
    }

    request.send()
}


