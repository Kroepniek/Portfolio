/*
    Add class "cms" to an element you want to disable. The element will be removed and stored in a variable as
    an object.

    If you set class cms to multiple elements next to each other, the result of showing can be weird, because
    of that each element is showing up based on it's next sibling. If there is no sibling, element will be
    shown at the end of parent element.

    If you set class cms to an element and to it's parent, you can get an error, because of that there is no parent
    of one of the elements.

    All elements are still available on page through console, so it's not the safest way to hide elements from users. 
*/

var hidden = false;

class cms_element
{
    constructor(p_element, p_elementParent, p_elementNextSibling)
    {
        this.element = p_element;
        this.elementParent = p_elementParent;
        this.elementNextSibling = p_elementNextSibling;
    }
}

var cms_elements = new Array();

function CheckAdminState(php)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let response = this.responseText;

            if (response.length > 0)
            {
                if (response == "true")
                {
                    // Show elements

                    if (hidden)
                    {
                        for (let i = 0; i < cms_elements.length; i++)
                        {
                            if (cms_elements[i].elementNextSibling)
                            {
                                cms_elements[i].elementParent.insertBefore(cms_elements[i].element, cms_elements[i].elementNextSibling);
                            }
                            else
                            {
                                cms_elements[i].elementParent.append(cms_elements[i].element);
                            }
                        }

                        hidden = false;
                    }
                }
                else
                {
                    // Hide elements

                    if (!hidden)
                    {
                        let temp_cms_elements = document.getElementsByClassName('cms');
                        
                        for (let i = 0; i < temp_cms_elements.length; i++)
                        {
                            cms_elements[i] = new cms_element(temp_cms_elements[i], temp_cms_elements[i].parentElement, temp_cms_elements[i].nextElementSibling);
                            temp_cms_elements[i].parentElement.removeChild(temp_cms_elements[i]);
                        }

                        hidden = true;
                    }
                }
            }
        }
    };
    xmlhttp.open("POST", php, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("chck=true");
}