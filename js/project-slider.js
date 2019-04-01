var projectTimeline = $('#project-timeline');
var projectSliderYearsContent = $('#project-slider-years-content');
var projectSlider = $('#project-slider');
var projectSliderBalls = $('#project-slider-balls');
var projectSliderGradient = $('#project-slider-gradient');
var projectSliderProjectPhoto = $('#project-slider-item');
var projectSliderProjectTitle = $('#project-slider-info-title');
var projectSliderProjectDesc = $('#project-slider-info-desc');
var projectSliderProjectShowButton = $('#project-slider-show-button');
var projectSliderProjectShowButtonLink = $('#project-slider-show-button-link');

var projects = new Object();
var currentSliderProjects = new Object();
var currentProjectsYear = '';
var currentProjectSlide = 0;

var autoSliderInterval = setInterval(AutoSlider, 5000);

function Init()
{
    CheckSize();
    GetFromDataBase("getProjects", "");
}

function GetFromDataBase(requestFunction, requestParameters)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            if (this.responseText == "error")
            {
                alert("Server error, try later.");
            }
            else
            {
                var response = JSON.parse(this.responseText);
                var fixedResponse = new Object();

                response.forEach(oneRow => {
                    if (!(oneRow[5].substring(0, 4)) in oneRow)
                    {
                        fixedResponse[oneRow[5].substring(0, 4)] = new Array();
                    }

                    var project = new Array();

                    response.forEach(eachRow => {
                        if (eachRow[5].substring(0, 4) == oneRow[5].substring(0, 4))
                        {
                            project.push({
                                'PROJECT_TITLE' : eachRow[0],
                                'PROJECT_LANG' : eachRow[1],
                                'PROJECT_DESC_NL' : eachRow[2],
                                'PROJECT_DESC_EN' : eachRow[3],
                                'PROJECT_DESC_PL' : eachRow[4],
                                'PROJECT_DATE' : eachRow[5],
                                'PROJECT_IMG' : eachRow[6],
                                'PROJECT_URL' : eachRow[7]
                            });
                        }
                    });

                    fixedResponse[oneRow[5].substring(0, 4)] = project;
                });
                
                projects = fixedResponse;

                if (!isEmpty(projects))
                {
                    currentSliderProjects = projects[0];
                    SetupYears();
                }
                else
                {
                    alert("There are no projects to load.")
                }
            }
        }
    };
    xmlhttp.open("POST", "getFromDataBase.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("func=" + requestFunction + "&" + requestParameters);
}

Object.prototype.isEmpty = function()
{
    for(var key in this)
    {
        if(this.hasOwnProperty(key))
        {
            return false;
        }
    }
    return true;
}

function SetupYears()
{
    var count = 0;

    for (var project in projects)
    {
        if (project != 'isEmpty')
        {
            let year = project;

            if (count == 0)
            {
                projectSliderYearsContent.append('<span class="project-slider-years-item project-slider-years-item-active">' + year + '</span>') 
                currentSliderProjects = projects[project];
                currentProjectsYear = project;
                SetupSlider();
            }
            else
            {
                projectSliderYearsContent.append('<span class="project-slider-years-item" onclick="ChangeYear(this, \'' + year + '\')">' + year + '</span>') 
            }

            count++;
        }
    }
}

function ChangeYear(clickedSpanObject, newYear)
{
    let span = document.getElementById('project-slider-years-content');
    let balls = document.getElementById('project-slider-balls');

    for (let s = 0; s < span.children.length; s++)
    {
        span.children[s].classList = "project-slider-years-item";
        span.children[s].setAttribute("onclick", 'ChangeYear(this, \'' + span.children[s].innerHTML + '\')');
    }

    $(clickedSpanObject).addClass("project-slider-years-item-active");
    $(clickedSpanObject).removeAttr("onclick");

    for (var project in projects)
    {
        if (project != 'isEmpty')
        {
            if (project == newYear)
            {
                currentSliderProjects = projects[project];
                currentProjectsYear = newYear;
                SetupSlider();
            }
        }
    }
}

//#region 1920 orange

function SetupSlider()
{
    projectSliderBalls.html('');
    let balls = document.getElementById('project-slider-balls');

    for (let i = 0; i < currentSliderProjects.length; i++)
    {
        if (i == 0)
        {
            projectSliderBalls.append('<i class="icon-circle project-slider-ball-active"></i>');
            currentProjectSlide = 0;
            ForceChangeSlide(balls.children[0], 0, 250);
        }
        else
        {
            projectSliderBalls.append('<i class="icon-circle project-slider-ball" onclick="ForceChangeSlide(this, ' + i + ', 250)"></i>');
        }
    }
}

function ForceChangeSlide(ball, slideIndex, delay)
{
    if (currentSliderProjects.length >= 1)
    {
        let balls = document.getElementById('project-slider-balls');

        for (let s = 0; s < balls.children.length; s++)
        {
            balls.children[s].classList = "icon-circle project-slider-ball";
            balls.children[s].setAttribute("onclick", 'ForceChangeSlide(this, ' + s + ', 250)');
        }

        $(ball).removeClass("project-slider-ball");
        $(ball).addClass("project-slider-ball-active");
        $(ball).removeAttr("onclick");

        SetSlide(slideIndex, delay);
    }
}

function SetSlide(slideIndex, delay)
{
    currentProjectSlide = slideIndex;

    if (delay >= 1000)
    {
        projectSliderGradient.toggleClass("project-slider-default-delay", true);
        projectSliderProjectTitle.toggleClass("project-slider-default-delay", true);
        projectSliderProjectDesc.toggleClass("project-slider-default-delay", true);
        projectSliderProjectShowButton.toggleClass("project-slider-default-delay", true);
        projectSliderGradient.toggleClass("project-slider-fast-delay", false);
        projectSliderProjectTitle.toggleClass("project-slider-fast-delay", false);
        projectSliderProjectDesc.toggleClass("project-slider-fast-delay", false);
        projectSliderProjectShowButton.toggleClass("project-slider-fast-delay", false);
    }
    else
    {
        projectSliderGradient.toggleClass("project-slider-fast-delay", true);
        projectSliderProjectTitle.toggleClass("project-slider-fast-delay", true);
        projectSliderProjectDesc.toggleClass("project-slider-fast-delay", true);
        projectSliderProjectShowButton.toggleClass("project-slider-fast-delay", true);
        projectSliderGradient.toggleClass("project-slider-default-delay", false);
        projectSliderProjectTitle.toggleClass("project-slider-default-delay", false);
        projectSliderProjectDesc.toggleClass("project-slider-default-delay", false);
        projectSliderProjectShowButton.toggleClass("project-slider-default-delay", false);

        clearInterval(autoSliderInterval);
        autoSliderInterval = setInterval(AutoSlider, 5000);
    }

    projectSliderGradient.css("background-color", "#000000");
    projectSliderProjectTitle.css("color", "#000000");
    projectSliderProjectDesc.css("color", "#000000");
    projectSliderProjectShowButton.css("color", "#000000");
    projectSliderProjectShowButton.css("background-color", "#000000");
    
    setTimeout(() => {
        projectSliderProjectPhoto.attr('src', "images/" + currentSliderProjects[slideIndex]['PROJECT_IMG']);
        projectSliderProjectTitle.html(currentSliderProjects[slideIndex]['PROJECT_TITLE']);
        projectSliderProjectDesc.html(currentSliderProjects[slideIndex]['PROJECT_DESC_NL']);
        projectSliderProjectShowButtonLink.attr('href', currentSliderProjects[slideIndex]['PROJECT_URL'] + "/index.php");

        let descHeight = projectSliderProjectDesc.height();
        projectSliderProjectShowButton.css("top", (descHeight + 112) + "px");

        projectSliderGradient.css("background-color", "transparent");
        projectSliderProjectTitle.css("color", "#FFFFFF");
        projectSliderProjectDesc.css("color", "#FFFFFF");
        projectSliderProjectShowButton.css("color", "#FFFFFF");
        projectSliderProjectShowButton.css("background-color", "#FFA17F");
        projectSliderProjectShowButton.toggleClass("project-slider-fast-delay", true);
    }, delay);
}

function AutoSlider()
{
    let balls = document.getElementById('project-slider-balls');

    let tempCheck = currentProjectSlide;
    currentProjectSlide = currentProjectSlide < currentSliderProjects.length - 1 ? currentProjectSlide + 1 : 0;
    if (currentProjectSlide != tempCheck)
    {
        ForceChangeSlide(balls.children[currentProjectSlide], currentProjectSlide, 1000);
    }
}

//#endregion

//#region <1920 darkorange



//#endregion

function CheckSize()
{
    if (window.innerWidth > 1600)
    {
        projectSlider.css("display", "block");
        clearInterval(autoSliderInterval);
        autoSliderInterval = setInterval(AutoSlider, 5000);
    }
    else if (window.innerWidth < 1600)
    {
        projectSlider.css("display", "none");
        clearInterval(autoSliderInterval);
    }
}

$(window).resize(CheckSize);

Init();