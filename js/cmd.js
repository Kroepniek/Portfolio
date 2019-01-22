var cmd_input_div = document.getElementsByClassName('nav-element-input');
var cmd_input = cmd_input_div[0].getElementsByTagName('input');
var writenPass = "";
var pass = "";

function DisplayInput(state)
{
    switch (state) {
        case true:
            cmd_input_div[0].style.display = "inline-block";
            setTimeout(function(){cmd_input[0].style.boxShadow = "0px 0px 10px #000";}, 10);
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
        writenPass = "";
    }
    else
    {
        writenPass += e.keyCode;

        if (writenPass.length == 8)
        {
            if (writenPass == "72736869")
            {
                DisplayInput(false);
                writenPass = "";
            }
        }
        else if (writenPass.length >= 10)
        {
            if (writenPass == "6568777378")
            {
                DisplayInput(true);
            }
            writenPass = "";
        }
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
                    console.log("logged out");
                break;
            }
        }
        else if (cmd_input[0].type == "password")
        {
            if (cmd_input[0].value == pass)
            {
                console.log("logged in");
            }

            cmd_input[0].value = "";
            cmd_input[0].type = "text";
        }
    }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pass = this.responseText;
    }
};
xmlhttp.open("GET", "getPass.php", true);
xmlhttp.send();

window.addEventListener('keydown', CheckKeys, false);
cmd_input[0].addEventListener('keydown', CheckPass, false);