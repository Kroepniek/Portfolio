var logout_div = document.getElementById('admin-logout');

function Logout()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "../getPass.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("adm=false");

    window.location.href = "index.php";
}