$(function() {
    var $Server = $('.server');
    var $serverFold = $('.server_fold');
    var $serverUnfold = $('.server_arrow');

    $serverFold.click(function() {
        $serverFold.hide();
        $Server.addClass('unfold');
    });

    $serverUnfold.click(function() {
        $Server.removeClass('unfold');
        $serverFold.show();
    });

    // 窗体宽度小鱼1024像素时不显示客服QQ
    function resizeQQserver() {
        $Server[document.documentElement.clientWidth < 1024 ? 'hide' : 'show']();
    }

    $(window).bind("load resize", function() {
        resizeQQserver();
    });
});
