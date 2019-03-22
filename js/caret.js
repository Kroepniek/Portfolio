function CaretIt()
{
    var nameDiv = [ document.getElementById('projects'), document.getElementById('contact') ];
    
    for (var i = 0; i < nameDiv.length; i++)
    {
        nameDiv[i] = nameDiv[i].getElementsByClassName('section-header');
        nameDiv[i] = nameDiv[i][0].getElementsByTagName('p');
        nameDiv[i] = nameDiv[i][0].children[0];
    }

    setInterval(function()
    {
        for (var i = 0; i < nameDiv.length; i++)
        {
            var curText = nameDiv[i].innerHTML;
            var newText = "";
            newText = (curText.charAt(nameDiv[i].innerHTML.length-1) == "_" ? curText.substr(0, curText.length-1) : curText + "_");
            nameDiv[i].innerHTML = newText;
        }
    }, 500);
}

window.addEventListener('load', CaretIt());