let day = new Date().getDay();
let targetName;

if (day == 1)
{
    
    targetName = 'Monologu'
}
else
{
    targetName = 'おもちゃのダンス'
}

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
