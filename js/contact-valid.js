var contact_form = document.getElementsByName('contact')[0];
var nameInput = contact_form.children.namedItem('name');
var emailInput = contact_form.children.namedItem('email');
var titleInput = contact_form.children.namedItem('title');
var msgInput = contact_form.children.namedItem('msg');
var submitButton = contact_form.children.namedItem('submit');

function CheckForm()
{
    let nameLength = nameInput.value.length;
    let emailLength = emailInput.value.length;
    let titleLength = titleInput.value.length;
    let msgLength = msgInput.value.length;

    if (nameLength > 0 && emailLength > 0 && titleLength > 0 && msgLength > 0)
    {
        submitButton.removeAttribute("disabled");
        submitButton.setAttribute("enabled", "");
        submitButton.classList = "contact-form-button contact-form-button-enabled";
    }
    else
    {
        submitButton.setAttribute("disabled", "");
        submitButton.removeAttribute("enabled");
        submitButton.classList = "contact-form-button contact-form-button-disabled";
    }
}

CheckForm();

contact_form.addEventListener("keyup", CheckForm, true);
