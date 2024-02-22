const leave = new Date(2023, 2, 6, 0, 0)
const arrive = new Date(2024, 2, 6, 0, 0)

function setAltValue(){
    document.getElementById("clock_alter_value").textContent = String(Math.floor((arrive - Date.now()) / 1000));
}

function refresh(){
    if (document.getElementById("unitswitch").checked){
        setAltValue()
    }
    else{
        var seconds = Math.floor((arrive - Date.now()) / 1000)
        var minutes = Math.floor(seconds/60)
        var hours = Math.floor(minutes/60)
        var days = Math.floor(hours/24)
        document.getElementById("clock_days").textContent = String(days);
        document.getElementById("clock_hours").textContent = String(hours%24);
        document.getElementById("clock_mins").textContent = String(minutes%60);
        document.getElementById("clock_secs").textContent = String(seconds%60);

        document.getElementById("clock_alter_value").textContent = String(Math.floor((arrive - Date.now()) / 1000));
    }
}
refresh()
document.getElementById("bar").style.width = String(Math.floor((1-(arrive - Date.now())/(arrive-leave))*100))+"%"
document.getElementById("bar").textContent = String(Math.floor((1-(arrive - Date.now())/(arrive-leave))*100))+"%"

var intervalId = window.setInterval(function(){
    refresh()
}, 1000);

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
