function Load()
{
    var nav_bar = document.getElementById('nav');
    var nav_bar_elements = document.getElementsByClassName('nav-element');
    var href = location.href;

    if (href.charAt(href.length-1) == '/')
	{
        setTimeout(function(){
            nav_bar.classList.add('nav-block');
        }, 1400);
    
        setTimeout(function(){
            nav_bar.classList.add('nav-visible');
        }, 2000);
    
        setTimeout(function(){
            for (var i = 0; i < nav_bar_elements.length; i++)
            {
                nav_bar_elements[i].classList.add('nav-element-visible');
                if (nav_bar_elements[i].getAttribute('status') == "active")
                {
                    nav_bar_elements[i].classList.add('nav-element-active');
                }
            }
        }, 3000);
    } 
    else 
	{
        nav_bar.classList.add('nav-block');
        nav_bar.classList.add('nav-visible');

        for (var i = 0; i < nav_bar_elements.length; i++)
        {
            nav_bar_elements[i].classList.add('nav-element-visible');
            if (nav_bar_elements[i].getAttribute('status') == "active")
            {
               nav_bar_elements[i].classList.add('nav-element-active');
            }
        }
	}
}
    
window.addEventListener('load', Load());