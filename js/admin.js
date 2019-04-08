function AddNewProject()
{
    var projectLang = document.getElementById('project-lang').value;
    var projectTitle = document.getElementById('project-title').value;
    var imgeFromPopup = document.getElementById('project-picture');
    var projectUrl = document.getElementById('project-url').value;
    var projectDescNL = document.getElementById('project-desc_nl').value;
    var projectDescEN = document.getElementById('project-desc_en').value;
    var projectDescPL = document.getElementById('project-desc_pl').value;
    var projectDate = document.getElementById('project-date').value;

    if( projectLang.length == 0 ||
        projectTitle.length == 0 ||
        imgeFromPopup.files.length == 0 ||
        projectUrl.length == 0 ||
        projectDescNL.length == 0 ||
        projectDescEN.length == 0 ||
        projectDescPL.length == 0 ||
        projectDate.length == 0)
    {
        console.log('dd');
        return;
    }

    UploadPic(projectLang, projectTitle, projectUrl, projectDescNL, projectDescEN, projectDescPL, projectDate, 'project-picture');
}

function UploadPic(projectlang, projecttitle, projecturl, projectdescnl, projectdescen, projectdescpl, projectdate, pictureElement)
{
    var imgeFromPopup = document.getElementById(pictureElement);

    var formData = new FormData();

    if (!imgeFromPopup.files[0].type.match('image.*'))
    {
        return;
    }

    formData.append('picture', imgeFromPopup.files[0], imgeFromPopup.files[0].name);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../sendPic.php', true);
    xhr.onload = function () 
    {
        if (xhr.status === 200)
        {
            if (this.responseText == "error")
            {
                alert("An error occurred.");
            }
            else if (this.responseText == "ok")
            {
                console.log("Image is successfully uploaded.");

                AddProjectInfoToDB(projectlang, projecttitle, imgeFromPopup.files[0].name, projecturl, projectdescnl, projectdescen, projectdescpl, projectdate);
                
                ResetFields();
            }
        }
        else
        {
            alert("An error occurred.");
        }
    };
    xhr.send(formData);
}

function AddProjectInfoToDB(projectlang, projecttitle, projectimg, projecturl, projectdescnl, projectdescen, projectdescpl, projectdate)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "error")
            {
                alert("Server error, try later.");            
            }
            else
            {
                console.log("New project is successfully added.");
            }
        }
    };
    xmlhttp.open("POST", "../addToDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("l="+projectlang+"&t="+projecttitle+"&dn="+projectdescnl+"&de="+projectdescen+"&dp="+projectdescpl+"&d="+projectdate+"&i="+projectimg+"&u="+projecturl+"&q=addProject");
}

function RemoveProject()
{
    let projectTitle = document.getElementById('project-title-remove').value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "error")
            {
                alert("Server error, try later.");            
            }
            else
            {
                console.log("Project has been removed successfully.");
                document.getElementById('project-title-remove').value = "";
            }
        }
    };
    xmlhttp.open("POST", "../addToDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("title="+projectTitle+"&q=removeProject");
}

function ResetFields()
{
    document.getElementById('project-lang').value = "";
    document.getElementById('project-title').value = "";
    document.getElementById('project-picture').value = "";
    document.getElementById('project-url').value = "";
    document.getElementById('project-desc_nl').value = "";
    document.getElementById('project-desc_en').value = "";
    document.getElementById('project-desc_pl').value = "";
    document.getElementById('project-date').value = "";
}