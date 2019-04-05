var progressBars = document.getElementsByClassName('about-me-skills-skill-progress');

for (let i = 0; i < progressBars.length; i++)
{
    let progress = progressBars[i].getAttribute("status");
    progressBars[i].innerHTML = '<div class="about-me-skills-skill-progressbar" style="width: ' + progress + '%">' + progress + ' %</div>';
}