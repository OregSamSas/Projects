/// Decode URL parameters
var search = location.search.substring(1)
const Data = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })

/// Start, End
const start = new Date(0).setUTCSeconds(Data.start)
const end = new Date(0).setUTCSeconds(Data.end)

/// Start page, End page
function gotoStartPage(){}
function gotoEndPage(){}

/// Unit
if (Data.unit != null){
    document.getElementById("unitswitch").checked = true
    document.getElementById("clockface").style.display = "none"
    document.getElementById("clockface_alter").style.display = "flex"

    document.getElementById("clock_alter_unit").value = Data.unit
}

/// Language
setLanguage(Data.lan)

/// Toptext
if (Data.top != null){
    document.getElementById("toptext").textContent = Data.top
}