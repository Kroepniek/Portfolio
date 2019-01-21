function WriteName()
{
    var nameDiv = document.getElementById('name');
    var text = nameDiv.innerHTML;
    var writenText = "";

    nameDiv.innerHTML = "";

    var writing = setInterval(function() 
    {
        writenText = writenText.substr(0, writenText.length-1);
        writenText += text.charAt(writenText.length);
        writenText += "_";
        nameDiv.innerHTML = writenText;

        if (writenText.substr(0, writenText.length-1) == text)
        {
            clearInterval(writing);
            setInterval(function()
            {
                var curText = nameDiv.innerHTML;
                var newText = "";
                newText = (curText.charAt(nameDiv.innerHTML.length-1) == "_" ? curText.substr(0, curText.length-1) : curText + "_");
                nameDiv.innerHTML = newText;
            }, 500);
        }
    }, 85);


    
}
    
window.onload = function() {
    WriteName();
};