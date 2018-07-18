var myDate = new Date();
myDate.toLocaleDateString();        //获取当前日期与时间
console.log(myDate.toLocaleDateString());

// 判断有没有到开奖日期
function tab(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if(oDate1.getTime() > oDate2.getTime()){
        console.log('第一个大');
        $('.rule .fr').text('中奖名单');
        $('#background .rule .fr').css('margin-right','14%');
        $(".rule .fr").click(function () {
            window.location.href = "winner_list.html";
        });
    } else {
        console.log('第二个大');
        $(".rule .fr").click(function () {
            $('.tishi').removeClass('hidden');
        });
        $(".tishi .con").click(function () {
            $('.tishi').addClass('hidden');
        });
    }
}
$(".rule .fl").click(function () {
    window.location.href = "rule.html";
});

$(".Rule #close").click(function () {
    window.location.href = "activity.html";
});

tab(new Date(),new Date('2018-7-18 12:00:00'));
console.log(new Date());

//判断页面打开终端
window.onload = function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        $('.img img').addClass('img-responsive');
        $('.Rule .title .close').addClass('img-responsive');
    } else {
        $('.img img').removeClass('img-responsive');
        $('.Rule .title .close').removeClass('img-responsive');
    }
};

/*切换中奖名单*/
$(document).ready(function(){
    var nav =document.getElementById("assets_nav");
    var navlist = nav.children;
    var con = document.getElementById("assets_content");
    var conlist = con.children;
    for (var i= 0;i<navlist.length;i++){
        navlist[i].index = i;
        navlist[i].onclick = function (){
            for (var m = 0;m< conlist.length;m++){
                navlist[m].className = "";
                conlist[m].style.display ="none";
            }
            this.className = "active";
            conlist[this.index].style.display = "block";
        }
    }
});
