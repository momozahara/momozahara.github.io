let day = new Date().getDay();
console.log(`Day of the week: ${day}`);

let targetName, targetVolume = 0.08;

if (day == 0)
{   targetName = 'Prologue';   }
else if (day == 1)
{   targetName = 'main actor';   }
else if (day == 2)
{   targetName = 'Monologue';   }
else if (day == 3)
{   targetName = 'Lilac';   }
else if (day == 4)
{   targetName = 'Little Cry of The Abyss'; targetVolume = 0.1;   }
else
{   targetName = 'おもちゃのダンス';   }

console.log(`Music of the day: ${targetName}\nVolume: ${targetVolume * 100}`);
let bgm = new Audio(`/media/bgm/${targetName}.mp3`);
    bgm.volume = targetVolume;
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
    console.log(`Playing: ${targetName}`);
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
