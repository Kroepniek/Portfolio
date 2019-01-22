var logout_div = document.getElementById('admin-logout');

function Logout()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "getPass.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("adm=false");

    var curUrl = window.location.href;
    curUrl = (curUrl.includes("admin.php") ? curUrl.substr(0, curUrl.indexOf("admin.php")) : curUrl);
    window.location.href = curUrl + "index.php";
}

logout_div.addEventListener('click', Logout, false);