$(function () {
    //点击顶部导航栏特效
    $(".music_nav li").click(function () {
        $(this).addClass("headerNav_current").siblings().removeClass("headerNav_current");
    });
    $(".music_nav li:last-child").off("click");
    $(".music_nav li:last-child").mouseenter(function () {
        $(".showMoreBtn span:last-child").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
        $(".showMore").show();
    });
    $(".music_nav li:last-child").mouseleave(function () {
        $(".showMoreBtn span:last-child").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
        $(".showMore").hide();
    });
    //顶部第二个导航栏
    $(".top_nav a").click(function () {
        $(".top_nav a").removeClass("top_nav_current");
        $(this).addClass("top_nav_current");
    });

    //推荐歌单导航栏特效

    $(".songList_header li").click(function () {
        $(".songList_header li").removeClass("songList_current");
        $(this).addClass("songList_current");

    })
    $(".songList_header li:last-child").off("click");
    $(".songList_header li:first-child").off("click");
    //排行榜导航栏点击特效
    $(".songer_header li").click(function () {
        $(".songer_header li>span").removeClass("songer_current");
        $(this).children("span").addClass("songer_current");
    })
    $(".songer_header li:last-child").off("click");
})