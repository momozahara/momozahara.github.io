let day = new Date().getDay();
let targetName, tagetVolume = 0.2;

if (day == 0)
{   targetName = 'Prologue';   }
else if (day == 1)
{   targetName = 'main actor'; tagetVolume = 0.1;   }
else if (day == 2)
{   targetName = 'Monologue';   }
else if (day == 3)
{   targetName = 'Lilac';   }
else
{   targetName = 'おもちゃのダンス';   }

let bgm = new Audio(`/media/bgm/${targetName}.mp3`);
    bgm.volume = 0.2;
    bgm.loop = true;

let Logo = $('#Logo');

function PlayBGM() {
    Logo.removeClass('pointer');
    Logo.unbind('click');
    Logo.tooltip('dispose');
    Logo.tooltip({
        container: '#Logo',
        placement: 'right',
        title: `Playing ${targetName}`,
        trigger: 'manual'
    });
    setTimeout(function() {
        Logo.tooltip('show');
        bgm.play();
        $('.tooltip-inner').addClass('c');
    }, 300);
};

function LogoTooltip() {
    Logo.tooltip({
        container: '#Logo',
        placement: 'right',
        title: 'Run()',
        trigger: 'manual'
    });
    setTimeout(function() {
        Logo.tooltip('show');
        Logo.addClass('pointer');
        Logo.click(PlayBGM);
    }, 1000);
};

$(document).ready(function() {
    LogoTooltip();
});
