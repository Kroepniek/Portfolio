var cmd_input_div = document.getElementsByClassName('nav-element-input');
var cmd_input = cmd_input_div[0].getElementsByTagName('input');
var writenPass = "";
var pass = "";

function SendRequest(prmtr, value, func)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            func(this.responseText);
        }
     };
    xmlhttp.open("POST", "getPass.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(prmtr + "=" + value);
}

function setPass(xhttp) 
{
    pass = xhttp;
}

function DisplayInput(state)
{
    switch (state) {
        case true:
            cmd_input_div[0].style.display = "inline-block";
            setTimeout(function(){
                cmd_input[0].style.boxShadow = "0px 0px 10px #000";
                cmd_input[0].focus();
            }, 10);
        break;
        case false:
            cmd_input[0].style.boxShadow = "none";
            setTimeout(function(){cmd_input_div[0].style.display = "none";}, 600);
        break;
    }
}

function CheckKeys(e)
{
    if (e.keyCode == 8)
    {
        writenPass = writenPass.substr(0, writenPass.length-1);
    }
    else if (e.keyCode == 13)
    {
        if (writenPass == "72736869")
        {
            DisplayInput(false);
        }
        else if (writenPass == "6568777378")
        {
            DisplayInput(true);
        }

        writenPass = "";
    }
    else
    {
        writenPass += e.keyCode;
    }
}

function CheckPass(e)
{
    if (e.keyCode == 13)
    {
        if (cmd_input[0].type == "text")
        {
            switch (cmd_input[0].value) {
                case "login":
                    cmd_input[0].type = "password";
                    cmd_input[0].value = "";
                break;
                case "logout":
                    cmd_input[0].type = "text";
                    cmd_input[0].value = "";
                    DisplayInput(false);
                    SendRequest("adm", "false", function(){});
                break;
                case "admin.php":
                    cmd_input[0].type = "text";
                    cmd_input[0].value = "";
                    var curUrl = window.location.href;
                    curUrl = (curUrl.includes("index.php") ? curUrl.substr(0, curUrl.indexOf("index.php")) : curUrl);
                    window.location.href = curUrl + "admin.php";
                break;
            }
        }
        else if (cmd_input[0].type == "password")
        {
            if (cmd_input[0].value == pass)
            {
                SendRequest("adm", "true", function(){});
            }

            cmd_input[0].value = "";
            cmd_input[0].type = "text";
        }
    }
}

SendRequest("q", "true", setPass);

window.addEventListener('keydown', CheckKeys, false);
cmd_input[0].addEventListener('keydown', CheckPass, false);