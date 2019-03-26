var tetris_blocks = [ 
    "project_0x0", "project_1x0", "project_2x0", "project_3x0", "project_4x0",
    "project_0x1", "project_1x1", "project_2x1", "project_3x1", "project_4x1",
    "project_0x2", "project_1x2", "project_2x2", "project_3x2", "project_4x2",
    "project_0x3", "project_1x3", "project_2x3", "project_3x3", "project_4x3",
    "project_0x4", "project_1x4", "project_2x4", "project_3x4", "project_4x4",
    "project_0x5", "project_1x5", "project_2x5", "project_3x5", "project_4x5",
    "project_0x6", "project_1x6", "project_2x6", "project_3x6", "project_4x6",
    "project_0x7", "project_1x7", "project_2x7", "project_3x7", "project_4x7"
];

var projects_fields = [ 
    [ "project_0x0", "project_1x0", "project_0x1", "project_1x1" ], //1Q
    [ "project_2x0", "project_3x0", "project_4x0", "project_3x1" ], //2T
    [ "project_2x1", "project_2x2", "project_3x2", "project_3x3" ], //3S
    [ "project_4x1", "project_4x2", "project_4x3", "project_4x4" ], //4I
    [ "project_0x2", "project_1x2", "project_0x3", "project_0x4" ], //5J
    [ "project_1x3", "project_2x3", "project_2x4", "project_2x5" ], //6L
    [ "project_1x4", "project_0x5", "project_1x5", "project_1x6" ], //7T
    [ "project_3x4", "project_3x5", "project_4x5", "project_4x6" ], //8S
    [ "project_0x6", "project_0x7", "project_1x7", "project_2x7" ], //9J
    [ "project_2x6", "project_3x6", "project_3x7", "project_4x7" ]  //10Z
];

class project
{
    constructor(fields, colorclass, buttonclass, titel, web, amount)
    {
        this.Fields = [];
        fields.forEach(field => {
            this.Fields.push(field);
        });
        this.ColorClass = colorclass;
        this.ButtonClass = buttonclass;
        this.Titel = titel;
        this.Website = web;
        this.Amount = amount;
    }
}

var projects = [];

function Init()
{
    projects[0] = new project(projects_fields[0], "project-Q-hover", "project-button-Q", "HTML", "html", 7); //Q
    projects[1] = new project(projects_fields[1], "project-T-hover", "project-button-T", "C#", "csharp", 9); //T
    projects[2] = new project(projects_fields[2], "project-S-hover", "project-button-S", "CSS", "css", 9); //S
    projects[3] = new project(projects_fields[3], "project-I-hover", "project-button-I", "Arduino", "arduino", 7); //I
    projects[4] = new project(projects_fields[4], "project-J-hover", "project-button-J", "SQL", "sql", 7); //J
    projects[5] = new project(projects_fields[5], "project-L-hover", "project-button-L", "JS", "js", 9); //L
    projects[6] = new project(projects_fields[6], "project-T-hover", "project-button-T", "", "", 7); //T
    projects[7] = new project(projects_fields[7], "project-S-hover", "project-button-S", "PHP", "php", 7); //S
    projects[8] = new project(projects_fields[8], "project-J-hover", "project-button-J", "", "", 9); //J
    projects[9] = new project(projects_fields[9], "project-Z-hover", "project-button-Z", "", "", 7); //Z

    projects.forEach(project => {
        SetContent(project.Fields, project.Titel, project.Website, project.Amount);
    });
}

function CheckWhichBlock(tetris_block_ID, hoverState)
{
    var project_ID = 0;
    var project_colorClass = "project-hover";
    var project_buttonClass = "project-button-DEF";
    for (let i = 0; i < projects.length; i++)
    {
        if (projects[i].Fields.includes(tetris_block_ID))
        {
            project_ID = i;
            project_colorClass = projects[i].ColorClass;
            project_buttonClass = projects[i].ButtonClass;
        }
    }
    ChangeHover(projects[project_ID].Fields, hoverState, project_colorClass, project_buttonClass);
}

function SetContent(tetris_block_IDs, titel, web, amount)
{
    document.getElementById(tetris_block_IDs[0]).children[0].classList = "project-text-content";
    document.getElementById(tetris_block_IDs[0]).children[0].innerHTML = titel;

    document.getElementById(tetris_block_IDs[1]).children[0].classList = "project-button-place";
    document.getElementById(tetris_block_IDs[1]).children[0].innerHTML = '<div class="project-button project-button-DEF" onclick="Go(\'' + web + '\')"><p class="project-button-text">Show Projects</p></div>'
    
    document.getElementById(tetris_block_IDs[2]).children[0].classList = "project-sub-text-content";
    document.getElementById(tetris_block_IDs[2]).children[0].innerHTML = amount.toString() + " projects";
    
    document.getElementById(tetris_block_IDs[3]).children[0].classList = "project-sub-text-content";
    document.getElementById(tetris_block_IDs[3]).children[0].innerHTML = "";
}

function ChangeHover(tetris_block_IDs, hoverState, colorclass, buttonclass)
{
    tetris_block_IDs.forEach(tetris_block_ID => {
        let tetris_block = document.getElementById(tetris_block_ID);

        if (tetris_block == document.getElementById(tetris_block_IDs[1]))
        {
            tetris_block.children[0].children[0].classList = hoverState ? "project-button " + buttonclass : "project-button project-button-DEF";
        }

        tetris_block.classList = hoverState ? "project project-hover " + colorclass : "project";
    });
}

function Go(web)
{
    window.location.href = "projects/projects.php?filter=" + web;
}

tetris_blocks.forEach(tetris_block_ID => {
    let tetris_block = document.getElementById(tetris_block_ID);
    tetris_block.addEventListener("mouseover", function(){CheckWhichBlock(tetris_block.id, true);});
    tetris_block.addEventListener("mouseout", function(){CheckWhichBlock(tetris_block.id, false);});
});

window.onload = Init;