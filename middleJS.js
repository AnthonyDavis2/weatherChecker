//change background image for current day
function changeBG(descrip){ 
    if(descrip.search("rain") != -1 ){
        document.getElementById('body').style.backgroundImage = "url('rain.jpeg')"; 
    }
    else if(descrip.search("cloudy") != -1 || descrip.search("clouds") != -1){
        document.getElementById('body').style.backgroundImage = "url('cloudy.jpg')"; 
    }
    else if (descrip.search("clear") != -1 || descrip.search("sunny") != -1){
        document.getElementById('body').style.backgroundImage = "url('clear.jpeg')"; 
    }
    else if (descrip.search("snow") != -1 ){
        document.getElementById('body').style.backgroundImage = "url('snow.jpeg')"; 
    }
    else if (descrip.search("storm") != -1 ){
        document.getElementById('body').style.backgroundImage = "url('storm.jpeg')"; 
    }
    else if (descrip.search("mist") != -1 || descrip.search("fog") != -1){
        document.getElementById('body').style.backgroundImage = "url('mist.jpg')"; 
    }
    
}

//changing background image for upcoming days
function changeBG2(descrip2,descrip3,descrip4,descrip5) { 
    if(descrip2.search("rain") != -1 ){
        document.getElementById('day2').style.backgroundImage = "url('rain.jpeg')"; 
    }
    else if(descrip2.search("cloudy") != -1 || descrip.search("clouds") != -1){
        document.getElementById('day2').style.backgroundImage = "url('cloudy.jpg')"; 
    }
    else if (descrip2.search("clear") != -1 || descrip.search("sunny") != -1){
        document.getElementById('day2').style.backgroundImage = "url('clear.jpeg')"; 
    }
    else if (descrip2.search("snow") != -1 ){
        document.getElementById('day2').style.backgroundImage = "url('snow.jpeg')"; 
    }
    else if (descrip2.search("storm") != -1 ){
        document.getElementById('day2').style.backgroundImage = "url('storm.jpeg')"; 
    }
    else if (descrip2.search("mist") != -1 || descrip.search("fog") != -1){
        document.getElementById('day2').style.backgroundImage = "url('mist.jpg')"; 
    }
    if(descrip3.search("rain") != -1 ){
        document.getElementById('day3').style.backgroundImage = "url('rain.jpeg')"; 
    }
    else if(descrip3.search("cloudy") != -1 || descrip.search("clouds") != -1){
        document.getElementById('day3').style.backgroundImage = "url('cloudy.jpg')"; 
    }
    else if (descrip3.search("clear") != -1 || descrip.search("sunny") != -1){
        document.getElementById('day3').style.backgroundImage = "url('clear.jpeg')"; 
    }
    else if (descrip3.search("snow") != -1 ){
        document.getElementById('day3').style.backgroundImage = "url('snow.jpeg')"; 
    }
    else if (descrip3.search("storm") != -1 ){
        document.getElementById('day3').style.backgroundImage = "url('storm.jpeg')"; 
    }
    else if (descrip3.search("mist") != -1 || descrip.search("fog") != -1){
        document.getElementById('day3').style.backgroundImage = "url('mist.jpg')"; 
    }
    if(descrip4.search("rain") != -1 ){
        document.getElementById('day4').style.backgroundImage = "url('rain.jpeg')"; 
    }
    else if(descrip4.search("cloudy") != -1 || descrip.search("clouds") != -1){
        document.getElementById('day4').style.backgroundImage = "url('cloudy.jpg')"; 
    }
    else if (descrip4.search("clear") != -1 || descrip.search("sunny") != -1){
        document.getElementById('day4').style.backgroundImage = "url('clear.jpeg')"; 
    }
    else if (descrip4.search("snow") != -1 ){
        document.getElementById('day4').style.backgroundImage = "url('snow.jpeg')"; 
    }
    else if (descrip4.search("storm") != -1 ){
        document.getElementById('day4').style.backgroundImage = "url('storm.jpeg')"; 
    }
    else if (descrip4.search("mist") != -1 || descrip.search("fog") != -1){
        document.getElementById('day4').style.backgroundImage = "url('mist.jpg')"; 
    }
    if(descrip5.search("rain") != -1 ){
        document.getElementById('day5').style.backgroundImage = "url('rain.jpeg')"; 
    }
    else if(descrip5.search("cloudy") != -1 || descrip.search("clouds") != -1){
        document.getElementById('day5').style.backgroundImage = "url('cloudy.jpg')"; 
    }
    else if (descrip5.search("clear") != -1 || descrip.search("sunny") != -1){
        document.getElementById('day5').style.backgroundImage = "url('clear.jpeg')"; 
    }
    else if (descrip5.search("snow") != -1 ){
        document.getElementById('day5').style.backgroundImage = "url('snow.jpeg')"; 
    }
    else if (descrip5.search("storm") != -1 ){
        document.getElementById('day5').style.backgroundImage = "url('storm.jpeg')"; 
    }
    else if (descrip5.search("mist") != -1 || descrip.search("fog") != -1){
        document.getElementById('day5').style.backgroundImage = "url('mist.jpg')"; 
    }
}

//posting current day information
function updateUI(description, temp, tempMax, tempMin){
    var ele = document.getElementById('weather');
    ele.innerHTML = "<h2>Today's Weather</h2><h3>"+description+"</h3><h3>TEMPERATURE: "+temp+"</h3> <h4> LOW: "+tempMin+" HIGH: "+tempMax+"</h4>";
}

//posting upcoming days information
function updateUISide(day2,day2a,day2b,day2c,day2d,day3,day3a,day3b,day3c,day3d,day4,day4a,day4b,day4c,day4d,day5,day5a,day5b,day5c,day5d){ 
    var ele = document.getElementById('day2');
    ele.innerHTML = "<h3>"+day2+"</h3><h4>"+day2a+"</h4><h4>TEMPERATURE: "+day2b+"</h4><h5>LOW: "+day2c+" HIGH: "+day2d+"</h5>"; 
    
    var ele2 = document.getElementById('day3');
    ele2.innerHTML = "<h3>"+day3+"</h3><h4>"+day3a+"</h4><h4>TEMPERATURE: "+day3b+"</h4><h5>LOW: "+day3c+" HIGH: "+day3d+"</h5>"; 
    
    var ele3 = document.getElementById('day4');
    ele3.innerHTML = "<h3>"+day4+"</h3><h4>"+day4a+"</h4><h4>TEMPERATURE: "+day4b+"</h4><h5>LOW: "+day4c+" HIGH: "+day4d+"</h5>"; 
    
    var ele4 = document.getElementById('day5');
    ele4.innerHTML = "<h3>"+day5+"</h3><h4>"+day5a+"</h4><h4>TEMPERATURE: "+day5b+"</h4><h5>LOW: "+day5c+" HIGH: "+day5d+"</h5>"; 
}


//click function for search button
$("#btn").click(function(){ 
    var loca = document.getElementById("input").value;
var addy = "http://api.openweathermap.org/data/2.5/weather?q="+loca+",us&appid=1cce1b75f5f20f5c75077e2e8502dd31";
    
    $.get(addy, function(data, status){
        
//        console.log(JSON.stringify(data,null,3))
//        console.log(data.weather[0].description);
        
        //current temperature
        temp = Math.round((data.main.temp - 273.15) * 9/5+32);
        tempHi = Math.round((data.main.temp_max - 273.15) * 9/5+32);
        tempLo = Math.round((data.main.temp_min - 273.15) * 9/5+32);
        
        //current description
        descrip = data.weather[0].description; 
        
        updateUI(descrip, temp, tempHi, tempLo);
        changeBG(descrip); 
       
    });
});

$("#btn").click(function(){ 
    var loca2 = document.getElementById("input").value;
var addy2 = "https://api.openweathermap.org/data/2.5/forecast?q="+loca2+",us&appid=1cce1b75f5f20f5c75077e2e8502dd31"; 
    
    
    $.get(addy2, function(data, status){
        
//        console.log(JSON.stringify(data,null,3))
        //data for other days
        var day2 = data.list[1].dt_txt; 
            var day2Descrip = data.list[1].weather[0].description;
            var day2Temp = Math.round((data.list[1].main.temp - 273.15) * 9/5+32);
            var day2TempMin = Math.round((data.list[1].main.temp_min - 273.15) * 9/5+32);
            var day2TempMax = Math.round((data.list[1].main.temp_max - 273.15) * 9/5+32);
        var day3 = data.list[9].dt_txt;
            var day3Descrip = data.list[9].weather[0].description;
            var day3Temp = Math.round((data.list[9].main.temp - 273.15) * 9/5+32);
            var day3TempMin = Math.round((data.list[9].main.temp_min - 273.15) * 9/5+32);
            var day3TempMax = Math.round((data.list[9].main.temp_max - 273.15) * 9/5+32);
        var day4 = data.list[17].dt_txt;
            var day4Descrip = data.list[17].weather[0].description;
            var day4Temp = Math.round((data.list[17].main.temp - 273.15) * 9/5+32);
            var day4TempMin = Math.round((data.list[17].main.temp_min - 273.15) * 9/5+32);
            var day4TempMax = Math.round((data.list[17].main.temp_max - 273.15) * 9/5+32);
        var day5 = data.list[25].dt_txt;
            var day5Descrip = data.list[25].weather[0].description;
            var day5Temp = Math.round((data.list[25].main.temp - 273.15) * 9/5+32);
            var day5TempMin = Math.round((data.list[25].main.temp_min - 273.15) * 9/5+32);
            var day5TempMax = Math.round((data.list[25].main.temp_max - 273.15) * 9/5+32);
        
//        debugger;
        updateUISide(day2,day2Descrip,day2Temp,day2TempMin,day2TempMax,day3,day3Descrip,day3Temp,day3TempMin,day3TempMax,day4,day4Descrip,day4Temp,day4TempMin,day4TempMax,day5,day5Descrip,day5Temp,day5TempMin,day5TempMax);
        
        changeBG2(day2Descrip,day3Descrip,day4Descrip,day5Descrip);
    });
});