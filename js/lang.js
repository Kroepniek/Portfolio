var language = window.navigator.userLanguage || window.navigator.language;

SetLanguage("setLang", language);

function ChangeWeb()
{
    switch (language) {
        case "pl-PL":
            Go(language);
        break;
        case "nl-NL":
            Go(language);
        break;
        case "en-US":
            Go(language);
        break;
        default:
            Go("nl-NL");
        break;
    }
}

function SetLanguage(requestFunction, langg)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            
            ChangeWeb();
        }
    };
    xmlhttp.open("POST", "lang.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("func=" + requestFunction + "&lang=" + langg.substring(0, 2));
}

function Go(web)
{
    let rightWebName = web.substring(0, 2);
    window.location.href = rightWebName + "/index.php";
}