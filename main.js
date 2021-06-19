function validate(id){
    var child = document.createElement('div')
    child.innerHTML= "<p>ID validado (link para votação): <a href='https://docs.google.com/forms/d/1uFOSucHF124BZJ8uq8wE2nai0VP-fwhXSCH1WxRgvr4'>https://docs.google.com/forms/d/1uFOSucHF124BZJ8uq8wE2nai0VP-fwhXSCH1WxRgvr4</a></p>"
    var valID = [88073,81407,68342,81406,68343,60629,68344,88075,36319,8281,63768,55819,60627,68345,86342,55822,8266,88074,75419,55820,60624,63770,55818,81405]
    var flagE
    for(let i=0; i < valID.length; i++){
        if(id == valID[i]){
            window.location.assign("https://docs.google.com/forms/d/1uFOSucHF124BZJ8uq8wE2nai0VP-fwhXSCH1WxRgvr4")
            flagE=false
            break
        }else{
            flagE=true
        }
    }
    if(flagE)
    alert("Você não tem direito a voto!")
}