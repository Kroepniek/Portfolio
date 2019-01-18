function WriteName()
{
    var nameDiv = document.getElementById('name');
    var text = nameDiv.innerHTML;
    var writenText = "";

    nameDiv.innerHTML = "";

    for (var i = 0; i < text.length; i++)
    {
        setTimeout(function() {
            //writenText = text.charAt(writenText.length);
            alert(text.charAt(writenText.length));
        }, (300));
    }

    nameDiv.innerHTML = writenText;
    
}
    
window.onload = function() {
    WriteName();
};