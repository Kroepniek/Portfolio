function Load()
{
    var nav_bar = document.getElementById('nav');
    var nav_bar_elements = document.getElementsByClassName('nav-element');
    var href = location.href;

    if (href.charAt(href.length-1) == '/')
	{
        setTimeout(function(){
            nav_bar.style.display = "block";
        }, 1400);
    
        setTimeout(function(){
            nav_bar.style.boxShadow = "0 0 250px #000";
        }, 2000);
    
        setTimeout(function(){
            for (var i = 0; i < 3; i++)
            {
                nav_bar_elements[i].style.textShadow="0 0px 10px #000";
                nav_bar_elements[i].classList.add('nav-element-visible');
            }
        }, 3000);
    } 
    else 
	{
        nav_bar.style.display = "block";
        nav_bar.style.boxShadow = "0 0 250px #000";
        for (var i = 0; i < 3; i++)
        {
            nav_bar_elements[i].style.textShadow="0 0px 10px #000";
            nav_bar_elements[i].classList.add('nav-element-visible');
        }
	}
}
    
window.addEventListener('load', Load());