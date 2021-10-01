const bgm = new Audio('/media/bgm/おもちゃのダンス.mp3');
    bgm.volume = 0.2;
    bgm.loop = true;

const Logo = $('#Logo');

function PlayBGM() {
    Logo.removeClass('pointer');
    Logo.unbind('click');
    Logo.tooltip('dispose');
    Logo.tooltip({
        container: '#Logo',
        placement: 'right',
        title: 'Playing おもちゃのダンス',
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
