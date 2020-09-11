$(function(){    

    $('.Select .apply').click(function(){
        var checkradio =  $(this).parents('.Select').find('input[name="ClickBtn"]:checked').parent().index();
        // $('.radio-check ul li input[name="radioBtn"]:checked').parent().index();
            // console.log(checkradio);

        if( checkradio >= 0){
            $('.PopUp .PopUp-ctn img').attr("src","img/popup_0"+ checkradio +".png");
            $('.PopUp').fadeIn();
            $('.PopUp .PopUp-ctn .PopUp-close').click(function(){
                $('.PopUp').fadeOut();
            });
        }else if(checkradio < 0){
            alert('2020 삼성 제트 매력포인트를 선택 해 주세요');
            $('.PopUp').hide();
        }
    });
    // 매력포인트 팝업

    var tagBtn = $(".samsung-cont02 > div .HashTag button");
    

    tagBtn.click(function(){
        copyBtnClick();

        $(".text-alert").fadeIn();
            setTimeout(function(){
                $(".text-alert").fadeOut();
            },900);
    });


    

});


function copyBtnClick(){
    var copytxt = $("#copytxt");
    copytxt.select();
    document.execCommand("Copy");
}
// 텍스트 카피