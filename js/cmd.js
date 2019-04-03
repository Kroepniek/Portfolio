var cmd = "";
var writenPass = "";
var pass = "";
var status = "false";

function SendRequest(prmtr, value, func)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let response = this.responseText;

            if (response.length > 0)
            {
                if (prmtr == "q")
                {
                    pass = response;
                }
                else if (prmtr == "chck")
                {
                    status = response;
                }
            }

            func();

            status = "false";
        }
    };
    xmlhttp.open("POST", "../getPass.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(prmtr + "=" + value);
}

function DisplayInput()
{
    writenPass = prompt("Write password:");
}

function CheckKeys(e)
{
    if (e.keyCode == 8)
    {
        cmd = cmd.substr(0, cmd.length-1);
    }
    else if (e.keyCode == 13)
    {
        if (cmd == "6568777378")
        {
            SendRequest("chck", "true", function()
            {
                if (status == "false")
                {
                    DisplayInput();
                    SendRequest("q", "true", CheckPass);
                }
            });
        }
        else if (cmd == "69887384")
        {
            SendRequest("adm", "false", function(){console.log("Logged out successfully.");});
        }

        cmd = "";
    }
    else
    {
        cmd += e.keyCode;
    }
}

function CheckPass()
{
    if (pass.length > 0)
    {
        if (writenPass == pass)
        {
            SendRequest("adm", "true", function(){console.log("Logged in successfully.");});
        }
        else
        {
            console.log("Wrong password.");
        }

        pass = "";
    }

    writenPass = "";
}

window.addEventListener('keydown', CheckKeys, false);