const day = new Date().getDay();
console.log(`Day of the week: ${day}`);

let targetVolume = 0.08;

const targetMusic = {
	0: 'Prologue',
	1: 'main actor',
	2: 'Monologue',
	3: 'Lilac',
	4: 'Little Cry of The Abyss',
	5: 'おもちゃのダンス',
	6: 'おもちゃのダンス'
};

if (day == 4)
{   targetVolume = 0.1;   };

console.log(`Music of the day: ${targetMusic[day]}\nVolume: ${targetVolume * 100}`);
let bgm = new Audio(`/media/bgm/${targetMusic[day]}.mp3`);
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
        title: `Playing ${targetMusic[day]}`,
        trigger: 'manual'
    });
    setTimeout(function() {
        Logo.tooltip('show');
        bgm.play();
        $('.tooltip-inner').addClass('c');
    }, 300);
    console.log(`Playing: ${targetMusic[day]}`);
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
