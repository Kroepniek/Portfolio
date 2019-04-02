var projectTimeline = $('#project-timeline');
var projectSliderLangsContent = $('#project-slider-langs-content');
var projectSliderYearsContent = $('#project-slider-years-content');
var projectSlider = $('#project-slider');
var projectSliderBalls = $('#project-slider-balls');
var projectSliderGradient = $('#project-slider-gradient');
var projectSliderProjectPhoto = $('#project-slider-item');
var projectSliderProjectTitle = $('#project-slider-info-title');
var projectSliderProjectDesc = $('#project-slider-info-desc');
var projectSliderProjectShowButton = $('#project-slider-show-button');
var projectSliderProjectShowButtonLink = $('#project-slider-show-button-link');

var availableLangs = new Array();

var projects = new Object();
var currentSliderProjects = new Object();
var currentProjectsYear = '';
var currentProjectSlide = 0;
var typeDisplay = CheckSize();
var lang = "";

var autoSliderInterval;

function isEmpty(obj)
{
    for(var key in obj)
    {
        if(obj.hasOwnProperty(key))
        {
            return false;
        }
    }
    return true;
}

function Init()
{
    CheckAvailableLangs();
    GetLang("getLang");
    GetFromDataBase("getProjects", "");
}

function CheckAvailableLangs()
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
                var fixedResponse = new Array();
                let langPerRow = new Array();

                response.forEach(one_row => {
                    let woord = "";
                    for (let i = 0; i < one_row.length; i++)
                    {
                        if (i == one_row.length - 1)
                        {
                            woord += one_row.charAt(i);
                            langPerRow.push(woord);
                            woord = "";
                        }
                        else if (one_row.charAt(i) != ",")
                        {
                            woord += one_row.charAt(i);
                        }
                        else
                        {
                            langPerRow.push(woord);
                            woord = "";
                        }
                    }
                });

                langPerRow.forEach(oneLang =>
                {
                    if (!fixedResponse.includes(oneLang))
                    {
                        fixedResponse.push(oneLang);
                    }
                });

                availableLangs = fixedResponse;
            }
        }
    };
    xmlhttp.open("POST", "getFromDataBase.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("func=checkLangs");
}

function SetLang(requestFunction, language)
{
    let lng = language.toString().toUpperCase();
    lang = lng;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            if (this.responseText == "error")
            {
                alert("Server error, try later.");
            }
        }
    };
    xmlhttp.open("POST", "getFromDataBase.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("func=" + requestFunction + "&lang=" + lng);
}

function GetLang(requestFunction)
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
                lang = this.responseText;
                SetupLangs();
            }
        }
    };
    xmlhttp.open("POST", "getFromDataBase.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("func=" + requestFunction);
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
            else if (this.responseText == "Nothing")
            {
                console.log("There are no projects found.");
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

function SetupLangs()
{
    projectSliderLangsContent.html('');

    availableLangs.forEach(one_lang =>
    {
        if (one_lang == lang)
        {
            projectSliderLangsContent.append('<li class="project-slider-lang-active" onclick="ChangeLang(\'' + one_lang + '\')">' + one_lang + '</li>');
        }
        else
        {
            projectSliderLangsContent.append('<li onclick="ChangeLang(\'' + one_lang + '\')">' + one_lang + '</li>');
        }
    });
}

function SetupYears()
{
    var count = 0;
    projectSliderYearsContent.html('');

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

                if (typeDisplay == "slider")
                {
                    PreSetupSlider();
                }
                else if (typeDisplay = "blocks")
                {
                    PreSetupBlocks();
                }
            }
            else
            {
                projectSliderYearsContent.append('<span class="project-slider-years-item" onclick="ChangeYear(this, \'' + year + '\')">' + year + '</span>') 
            }

            count++;
        }
    }
}

function ChangeLang(newLang)
{
    projects = new Object();
    currentSliderProjects = new Object();
    currentProjectsYear = '';
    currentProjectSlide = 0;
    SetLang("setLang", newLang);
    Init();
    WindowResized();
    projectSliderYearsContent.html('');
}

function ChangeYear(clickedSpanObject, newYear)
{
    let span = document.getElementById('project-slider-years-content');

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

                if (typeDisplay == "slider")
                {
                    PreSetupSlider();
                }
                else if (typeDisplay = "blocks")
                {
                    FadeOut();
                    setTimeout(() => {
                        projectSlider.html('');
                        PreSetupBlocks();
                    }, 500);
                    
                }
            }
        }
    }
}

//#region 1920 orange

function PreSetupSlider()
{
    if (projectSliderProjectPhoto)
    {
        projectSliderGradient.css("background-color", "#000000");
        projectSliderProjectTitle.css("color", "#000000");
        projectSliderProjectDesc.css("color", "#000000");
        projectSliderProjectShowButton.css("color", "#000000");
        projectSliderProjectShowButton.css("background-color", "#000000");

        setTimeout(() =>
        {
            SetupSlider();
        }, 250);
    }
    else
    {
        SetupSlider();
    }
}

function SetupSlider()
{
    let slider = 
    '<img src="" alt="project" id="project-slider-item">' +
    '<img src="images/slider-gradient.png" alt="gradient" id="project-slider-gradient">' +
    '<div id="project-slider-balls"></div>' +
    '<div id="project-slider-info">' +
    '<h3 id="project-slider-info-title">Title</h3>' +
    '<span id="project-slider-info-desc">Desc</span>' +
    '<a href="" id="project-slider-show-button-link"><div id="project-slider-show-button">Show website</div></a>' +
    '</div>';
    
    projectSlider.html(slider);
    projectSlider.toggleClass('project-slider-small', true);
    projectSlider.toggleClass('project-slider-auto', false);

    projectSliderBalls = $('#project-slider-balls');
    projectSliderGradient = $('#project-slider-gradient');
    projectSliderProjectPhoto = $('#project-slider-item');
    projectSliderProjectTitle = $('#project-slider-info-title');
    projectSliderProjectDesc = $('#project-slider-info-desc');
    projectSliderProjectShowButton = $('#project-slider-show-button');
    projectSliderProjectShowButtonLink = $('#project-slider-show-button-link');
    
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

function PreSetupBlocks()
{
    if ($(".row")[0])
    {
        FadeOut();
        setTimeout(() =>
        {
            SetupBlocks();
        }, 350);
    }
    else
    {
        SetupBlocks();
    }
    
}

function SetupBlocks()
{
    projectSlider.html('<div class="row">');
    projectSlider.toggleClass('project-slider-small', false);
    projectSlider.toggleClass('project-slider-auto', true);
    
    let rows = $(".row");
    let addedBlocks = 0;

    for (let i = 0; i < currentSliderProjects.length; i++)
    {
        let newBlock = '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3"><div class="project-block project-block-opacity-0 project-block-fade-in"><h3 class="project-block-title">' + currentSliderProjects[i]['PROJECT_TITLE'] + '</h3>' +
                    '<span class="project-block-desc">' + currentSliderProjects[i]['PROJECT_DESC_NL'] + '</span><a href="' + currentSliderProjects[i]['PROJECT_URL'] + '" class="project-block-show-button-link">' +
                    '<div class="project-block-show-button">Show website</div></a></div></div>';
        rows.append(newBlock);
        addedBlocks++;
    }
    projectSlider.append('</div>');

    for(let j = 0; j < addedBlocks; j++)
    {
        let nextBlock = rows.children().eq(j).children().eq(0);
        setTimeout(() => {
            nextBlock.removeClass("project-block-opacity-0");
            setTimeout(() => {
                nextBlock.removeClass("project-block-fade-in");
            }, 350 + j * 50);
        }, 350 + j * 50);
    }
}

function FadeOut()
{
    $(".project-block").each(function()
    {
        $(this).addClass("project-block-fade-out");
    });
}

//#endregion

function CheckSize()
{
    if (window.innerWidth > 1600)
    {
        projectSlider.css("display", "block");
        clearInterval(autoSliderInterval);
        autoSliderInterval = setInterval(AutoSlider, 5000);
        return "slider";
    }
    else if (window.innerWidth < 1600)
    {
        clearInterval(autoSliderInterval);
        return "blocks";
    }
}

function WindowResized()
{
    let count = 0;

    for(var prop in projects)
    {
        if(projects.hasOwnProperty(prop))
        {
            count++;
        }
    }

    if (count > 0)
    {
        typeDisplay = CheckSize();
        SetupYears();
    }
}

$(window).resize(WindowResized);

Init();