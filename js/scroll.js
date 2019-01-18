function Scrolling() 
{
    var scroll_button = document.getElementById('back-to-top');

	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
	{
        scroll_button.style.opacity = "1";
        scroll_button.setAttribute("href", "#container");
    } 
    else 
	{
        scroll_button.style.opacity = "0";
        scroll_button.removeAttribute("href");
	}
}
    
window.onscroll = function() {
    Scrolling();
};