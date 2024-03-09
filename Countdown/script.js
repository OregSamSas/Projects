function roundToDecimal(number, decimals){
    number = Math.floor(number*(10**decimals))/(10**decimals)
    if (String(number).includes('.') == false){
        return String(number) + "." + "0".repeat(decimals)
    }
    else{
        return String(number) + "0".repeat(decimals-(String(number).split('.')[1].length))
    }
}

/// Define the refresh function
function refresh(){
    /// Define base variables
    var left = end - Date.now()
    var seconds = Math.floor(left/1000)
    var minutes = Math.floor(seconds/60)
    var hours = Math.floor(minutes/60)
    var days = Math.floor(hours/24)

    /// Display base variables
    document.getElementById("clock_days").textContent = String(days);
    document.getElementById("clock_hours").textContent = String(hours%24);
    document.getElementById("clock_mins").textContent = String(minutes%60);
    document.getElementById("clock_secs").textContent = String(seconds%60);

    /// Define and display alternative unit
    switch (document.getElementById("clock_alter_unit").value){
        case "miliseconds": 
        document.getElementById("clock_alter_value").textContent = left;
        break

        case "seconds": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000, 0);
        break

        case "minutes": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60, 1);
        break

        case "hours": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60/60, 3);
        break

        case "days": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60/60/24, 4);
        break

        case "weeks": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60/60/24/7, 5);
        break

        case "months": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60/60/24/30, 6);
        break

        case "years": 
        document.getElementById("clock_alter_value").textContent = roundToDecimal(left/1000/60/60/24/356.25, 7);
        break
    }
    
    
    /// Adjust bar
    document.getElementById("bar").style.width = String(Math.floor((1-(end - Date.now())/(end-start))*100))+"%"
    document.getElementById("bar").textContent = String(Math.floor((1-(end - Date.now())/(end-start))*100))+"%"
    
}

/// Initiate refresh
if (Date.now() < start){
    gotoStartPage()
}
else if (Date.now > end){
    gotoEndPage()
}

refresh()
var intervalId = window.setInterval(function(){
    refresh()
}, 1);

/// Switch Handler
function switchOnclickHandler(){
    if (document.getElementById("unitswitch").checked){
        document.getElementById("clockface").style.display = "none"
        document.getElementById("clockface_alter").style.display = "flex"
    }
    else{
        document.getElementById("clockface").style.display = "flex"
        document.getElementById("clockface_alter").style.display = "none"
    }
}