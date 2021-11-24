<!DOCTYPE html>
<!-- saved from url=(0031)https://cafe.naver.com/dgresweb -->
<html lang="ko"><head><meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<meta name="robots" content="noindex, nofollow">

<meta http-equiv="X-UA-Compatible" content="requiresActiveX=true">
<title>html5shive.js : 네이버 카페</title>


<link rel="shortcut icon" type="image/x-icon" href="https://cafe.naver.com/favicon.ico?2">
<meta name="referrer" content="always">

<link rel="stylesheet" href="./html5shive_files/line_sticker-1577769455000-9453.css" type="text/css">

<link rel="stylesheet" href="./html5shive_files/comment-1577769455000-17199.css" type="text/css">

<link rel="stylesheet" href="./html5shive_files/cafe_map-1577769455000-14563.css" type="text/css">



    
    
        
    

<style id="cafeCss" type="text/css">
</style>
<link rel="stylesheet" href="./html5shive_files/1080_cafe-1626654089000-225429.css" type="text/css">

<link rel="stylesheet" href="./html5shive_files/1080_skin_white-1588906820000-20365.css" type="text/css">





 <script>
var g_sUserId = "nbje1007";
var g_sGroupId = "false";
var g_sCafeHome = "https://cafe.naver.com/" + "dgresweb";
var g_sClubId = "30483228";
var g_mobileWebLink = "https://m.cafe.naver.com/dgresweb";

var g_sCafeThumbUrl = 'https://cafethumb.pstatic.net';
var g_sUpcafeUrl = 'https://up.cafe.naver.com';
var g_sCafeUrl = "https://cafe.naver.com";
var g_sCafeUrlOnly = "dgresweb";
var g_sCafeImgUrl = 'https://cafe.pstatic.net';
var g_sCafeFileUrl = 'https://cafefiles.pstatic.net';
var g_sItem2Url = 'https://item2.naver.com';
var g_sLoginUrl = "http://nid.naver.com";
var g_sNidHttps = 'https://nid.naver.com';
var g_sCafeSectionUrl = "https://section.cafe.naver.com";
var g_sNdriveHttps = "https://mybox.naver.com";
var g_sKin = "http://kin.naver.com";
var g_sLogOutReturnUrl = "https://nid.naver.com/nidlogin.login?mode=form&svctype=40960&id=nbje1007&url=https://cafe.naver.com/LoginCheck.nhn?m=login";
var g_sCafeTalk = 'https://talk.cafe.naver.com';
var g_sGfmarketDomain = 'http://m.gfmarket.naver.com';
var g_sGfmarketThumbnailDomain = 'https://storep-phinf.pstatic.net';
var g_sPhotoInfraUploadDomain = 'cafe.upphoto.naver.com';
var g_sDThumbUrl = 'https://dthumb-phinf.pstatic.net/?src=';
var g_sNaverStatUiUrl = 'https://cafe.stat.naver.com/cafe';
var g_sBAStatDomain = 'https://scv.band.us';
var g_sApigwUrl = 'https://apis.naver.com';
var g_sCafeHomePcUrl = 'https://section.cafe.naver.com';

var g_sNicknameRegex = /([a-zA-Z0-9ㄱ-힣\_\s]+)/gi;
var g_mainIframeWidth = '860';
</script>

<script type="text/javascript" src="./html5shive_files/jindo.all-1577769455000-90818.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/cssquery-1577769455000-18676.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/common_util-1577769455000-4535.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/widget-1577769455000-2800.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/cafe_common_wide-1587373241000-25473.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/cafe_eventutil-1577769455000-2096.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/autosourcing-1577769455000-8747.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/AjaxRequest-1577769455000-16024.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/clickcr-1577769455000-6201.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/lcslog-1577769455000-26709.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/TabletHandler-1577769455000-2403.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/skipNavigationWebkit-1577769455000-907.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/MainLocalStorage-1582772416000-1920.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/IframeHandler-1577769455000-2279.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/PowerCafeNoticeLayer-1577769455000-1880.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/TownCafeSelectLayer-1608543816000-1461.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/ActiveViewPC-1577769455000-8868.js.다운로드" charset="utf-8"></script>

<script type="text/javascript">
    var nsc = "cafe.mycafe";
	var oCL = new Ju.controlLayer(); // Ju.controlLayer() 클래스를 oCL 전역 변수에 할당함
	var LH = new LH_create();
	window.onload = LH_exec;

	if (false==true) {
		blockMouseRight();
	}
//--------------- Mac Safari bug --------------------------
function controlTagClickEvent(e){
	if(!!$Agent() && $Agent().macSafari ){
	 	var controlTagName = ["a"];
	 	var elTarget = e.element,
	 		sTargetUrl = null;
	 	if(elTarget != null ){
	 		if(elTarget.tagName.toLowerCase() == "a" && elTarget.href+"" != document.location.href+"#"){
	 			elTarget.target="_top";
	 		}
	 		return ;
	 	}
	}
}

(function() {
	if(!!$Agent() && $Agent().macSafari ){
		Event.register(window, "load", function() {
			if($('main-area') != null){
				Event.register($('main-area'), 'click', this.controlTagClickEvent.bindForEvent(this));
			}
		});
	}
})();
//--------------- Mac Safari bug End --------------------------
</script>



<meta name="decorator" content="mycafe_main_for_wide">

<script type="text/javascript">

</script>

<script type="text/javascript">
	LH.add("parentResizeIframe('cafe_main')");
</script>




<script type="text/javascript" async="" src="./html5shive_files/ssp.web.sdk.js.다운로드"></script>
<script>
	
	var unitId = "pc_cafe_wrt";
	
	var divId = "floatingda_content";

	var spwp = spwp || {};
	spwp.cmd = spwp.cmd || [];

	
	spwp.cmd.push(function () {
		spwp.setConfig({
			enablePersistAd: true
		});

		var adUnits = [{
			unitId: unitId,
			divId: divId
		}];

		spwp.addAdUnits(adUnits);
	});


	
	function showHappybeanFloatingBanner() {
		spwp.cmd.push(function () {
			spwp.requestAds({
				adUnitIds: [unitId]
			});
		});

		
		spwp.cmd.push(function () {
			spwp.renderAd(divId);
		});
	}

	
	function hideHappybeanFloatingBanner() {
		document.getElementById(divId).innerHTML = ""
	}
</script>





<script type="text/javascript" src="./html5shive_files/ScriptGroupSSPAdvert-1578547956000-1860.js.다운로드" charset="UTF-8"></script>

<script type="text/javascript">
    var oGroupSSPAdvertReporter = new cafe.GroupSspAdvertReporter();
</script>

<script type="text/javascript">
    function stickyEventHandler(target, topOffset) {
        var scrollTop = jQuery(window).scrollTop();
        var oElement = jQuery(target);

        if (scrollTop >= topOffset) {
            oElement.addClass('type_fixed');
        } else {
            oElement.removeClass('type_fixed');
        }
    }

    function initSticky(target, scrollTop, topOffset) {
        if (scrollTop >= topOffset) {
            stickyEventHandler(target, topOffset);
        }
    }

    function sticky(target) {
        var scrollTop = jQuery(window).scrollTop(),
            topOffset = jQuery(target).offset().top;

        initSticky(target, scrollTop, topOffset);

        jQuery(window).scroll(function () {
            stickyEventHandler(target, topOffset);
        });
    }

    function isPlugFloatingAdvertExposureTimeExpired() {
        var localStorageKey = oMainLocalStorage.PC_PLUG_FLOATING_ADVERT_EXPOSURE_TIME;
        var exposureTimeStr = oMainLocalStorage.getLocalStorage(localStorageKey);

        if (exposureTimeStr == null || typeof exposureTimeStr == "undefined") {
            return true;
        }

        try {
            return Date.parse(exposureTimeStr) - new Date() < 0;
        } catch(e) {
            return true;
        }
    }

    function updatePlugFloatingAdvertExposureTime() {
        var currentDate = new Date();
        var minutes = 60000;
        oMainLocalStorage.setLocalStorage(oMainLocalStorage.PC_PLUG_FLOATING_ADVERT_EXPOSURE_TIME, new Date(currentDate.getTime() + 10 * minutes));
    }

    function clickCloseFloatingAdvert() {
        updatePlugFloatingAdvertExposureTime();
        var elFloatingBannerDiv = parent.document.getElementById('plugFloatingBannerWrapper');
        elFloatingBannerDiv.style.display = 'none';
    }

    var reportFuc = null;

    /**
	 * floatingAdvert를 호출한다. (iframe 내부가 reload될 때마다 호출)
     */
    function callPlugFloatingAdvert() {
        try {
            var cafeId = 30483228;
            var iframeUrl = document.getElementById("cafe_main").contentWindow.location.href.split("?")[0];

            if (cafeId == null || typeof cafeId == "undefined") {
                return;
            }

            if (parent.document.getElementById('plugFloatingBanner') == null) {
                return;
            }

            var elPlugFloatingBannerDiv = document.getElementById("plugFloatingBannerDiv");
            if (reportFuc != null) {
                elPlugFloatingBannerDiv.removeEventListener("click", reportFuc);
                reportFuc = null;
            }

            var bGameDirCafe = false;
            if (bGameDirCafe == false) {
                return;
            }

            if (!isPlugFloatingAdvertExposureTimeExpired()) {
                updatePlugFloatingAdvertExposureTime();
                return;
            }

            var ajax = new Ajax("/PlugFloatingAdvert.nhn?cafeId=" + cafeId + "&iframeUrl=" + iframeUrl + "&uuid=" + getDeviceId(), {
                method: "GET",
                onLoad: function (res) {
                    var oJsonResult = JSON.parse(res.responseText);
                    if (oJsonResult.message.status == 200) {
                        var elFloatingBanner = parent.document.getElementById('plugFloatingBanner');
                        var elFloatingBannerDiv = parent.document.getElementById('plugFloatingBannerWrapper');
                        var elFloatingBannerPvUrl = parent.document.getElementById('plugFloatingBannerPvUrl');
                        var elFloatingBannerCloseButton = parent.document.getElementById('plugFloatingBannerCloseBtn');

                        elFloatingBannerDiv.style.display = 'none';
                        elFloatingBannerPvUrl.value = "";
                        elFloatingBannerCloseButton.style.display = 'none';

                        elFloatingBanner.style.display = 'none';
                        elFloatingBanner.removeAttribute("src");
                        elFloatingBanner.removeAttribute("alt");
                        elFloatingBanner.parentNode.removeAttribute('href');

                        var oAdvert = oJsonResult.message.result;
                        if (typeof oAdvert === "undefined") {
                            return;
                        }

                        if (oAdvert.code === 'NONE' || (oAdvert.code === 'NO_BANNER' && !oAdvert.hasOwnProperty('pvUrl'))) {
                            return;
                        }

                        var hasReportUrl = oAdvert.hasOwnProperty('reportUrlMap');

                        elFloatingBannerPvUrl.value = oAdvert.pvUrl;
                        elFloatingBannerDiv.style.display = 'block';

                        sticky(elFloatingBannerDiv);

                        if (oAdvert.code === 'OK') {
                            elFloatingBannerCloseButton.style.display = 'block';

                            elFloatingBanner.style.display = 'block';
                            elFloatingBanner.src = oAdvert.imageUrl;
                            elFloatingBanner.alt = oAdvert.title;
                            elFloatingBanner.parentNode.href = oAdvert.targetUrl;

							elFloatingBanner.width = oAdvert.width;
							elFloatingBanner.height = oAdvert.height;
                        }

                        naver_corp_da.init("plugFloatingBannerDiv", function() {
                            document.getElementById("plugFloatingBannerPv").src = document.getElementById("plugFloatingBannerPvUrl").value;
                            if (hasReportUrl) {
                                document.getElementById("plugFloatingBannerImp").src = oAdvert.reportUrlMap['IMP'];
                            }
                        });

                        if (hasReportUrl) {
                            var sspClickReportUrl = oAdvert.reportUrlMap['CLICK'];

                            reportFuc = function () {
                                oGroupSSPAdvertReporter._report(sspClickReportUrl);
                            };
                            elPlugFloatingBannerDiv.addEventListener("click", reportFuc, false);
                        }
                    }
                        // 200 아닌 경우는 처리하지 않음*/
                }
            });
        } catch (e) { // jeagleeye로 전송?
        }
    }
</script>

<style id="gnb_style" type="text/css">@charset "UTF-8";
/* NTS UIT Development Office YJH 140717 */
a.gnb_my, .gnb_icon, #gnb .gnb_my_interface, .gnb_my_li .gnb_my_content .gnb_membership, #gnb .gnb_my_membership, #gnb .gnb_ico_num .gnb_ico_new, #gnb .gnb_ico_num .gnb_ico_new .gnb_count, .gnb_lst .ico_arrow, a.gnb_my .filter_mask, .gnb_my_lyr, .gnb_my_li .gnb_my_content .gnb_mask, .gnb_my_li .gnb_my_content .gnb_change, .gnb_my_li .gnb_my_content .gnb_edit_lst li, .gnb_my_li .gnb_my_content .gnb_pay_check em, #gnb .gnb_my_li .gnb_my_community a.gnb_pay span, .gnb_notice_li .gnb_notice_lyr, .gnb_notice_li .svc_list .gnb_ico_mail, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .gnb_error .gnb_ico_error, .gnb_ly_alert .gnb_btn_close i, .gnb_first_visit, .gnb_search_box, .gnb_search_box .gnb_del_txt, .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new, .gnb_svc_more .svc_btnwrp button { background: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v14.png) no-repeat -999px -999px;		background: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v15.png?v=2006) no-repeat -999px -999px; /* background: url(../img/sp_gnb_v15.png) no-repeat -999px -999px; */}
.gnb_favorite_area, .gnb_search_area, .gnb_banner, .gnb_linkwrp{background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr2_v2.png) no-repeat -999px -999px}
#gnb .gnb_my_li .gnb_my_community a, .gnb_notice_li .gnb_notice_all, a.gnb_service_all, .gnb_svc_more .svc_btns{display:block;height:38px;border-top:1px solid #ebebeb;background-color:#f8f8f8;text-align:center;font-weight:bold;text-decoration:none;letter-spacing:-1px;line-height:38px}
#gnb .gnb_my_li .gnb_my_community a:visited, .gnb_notice_li .gnb_notice_all:visited, a.gnb_service_all:visited, .gnb_svc_more .svc_btns:visited{color:#444}
.gnb_login_li, .gnb_my_li, .gnb_notice_li, .mail_li, .gnb_service_li{float:left;margin-right:2px;overflow:visible}
.gnb_login_li a, .gnb_my_li a, .gnb_notice_li a, .mail_li a, .gnb_service_li a{position:relative;z-index:100}
a.gnb_my, .gnb_icon{position:relative}
#gnb{position:relative;z-index:2147483646;font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important;color:#444;font-size:12px;letter-spacing:0 !important;line-height:normal !important;text-align:left !important}
#gnb div, #gnb p, #gnb span, #gnb em, #gnb strong, #gnb h1, #gnb h2, #gnb h3, #gnb h4, #gnb h5, #gnb h6, #gnb ul, #gnb ol, #gnb li, #gnb dl, #gnb dt, #gnb dd, #gnb table, #gnb th, #gnb td, #gnb form, #gnb fieldset, #gnb legend, #gnb input, #gnb textarea, #gnb button, #gnb label{font-family:'나눔고딕',NanumGothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,Sans-serif !important}
#gnb a, #gnb label, #gnb button{cursor:pointer}
#gnb a, #gnb a:visited, #gnb a:active, #gnb a:focus{color:#444}
#gnb a:hover{color:#444;text-decoration:underline}
#gnb input::-ms-clear{display:none}
#gnb em{font-style:normal}
#gnb ul{list-style:none}
#gnb .blind{display:block;overflow:hidden;position:absolute;top:-1000em;left:0;width:1px;height:1px;margin:0;padding:0;font-size:0;line-height:0}
#gnb .gnb_my_membership{padding: 0;display: block;width: 64px;height: 16px;background-position: -296px -359px;margin: 0;}
#gnb .gnb_my_interface{padding:5px;position:absolute;top:12px;right:8px;display:block;width:17px;height:16px;background-position:-90px 5px}
#gnb .gnb_my_interface:hover{background-position:-90px -20px}
#gnb .gnb_pad_lyr{position:absolute}
#gnb .gnb_ico_num{display:block;position:absolute;top:1px;width:40px;text-align:center}
#gnb .gnb_ico_num .gnb_ico_new{height:15px;display:inline-block;background-position:-331px 0;zoom:1}
#gnb .gnb_ico_num .gnb_ico_new .gnb_count{position:relative;top:0;right:-5px;height:15px;margin:0;padding:0 4px 0 1px;display:inline-block;*display:inline;vertical-align:top;background-position:100% 0;text-indent:-2px;font-family:tahoma !important;font-weight:bold;color:#fff;zoom:1}
#gnb .gnb_ico_num .gnb_ico_new .plus{margin:1px -1px 0 2px;font-size:8px;display:inline-block;color:#fff;vertical-align:top}
:root #gnb .gnb_pad_lyr{opacity:1 !important;background:#fff}
.gnb_lst{margin:0;padding:0;zoom:1}
.gnb_lst:after{display:block;clear:both;content:''}
.gnb_lst ul{margin:0;padding:0}
.gnb_lst .ico_arrow{display:none;position:absolute;left:50%;top:27px;width:10px;height:8px;margin-left:-5px;background-position:-175px -10px}
.gnb_lyr_opened .gnb_my_lyr, .gnb_lyr_opened .gnb_service_lyr, .gnb_lyr_opened .gnb_notice_lyr, .gnb_lyr_opened .ico_arrow{display:block !important}
.gnb_login_li{height:23px;padding:5px 7px 0 0}
.gnb_btn_login, .gnb_bg, .gnb_bdr{display:inline-block;width:46px;height:20px;font-size:12px}
.gnb_btn_login{position:relative}
.gnb_bg{background-color: #fff;opacity: 0.05;filter: alpha(opacity=5);}
.gnb_bdr{position:absolute;top: -1px;left: -1px;width: 46px;height: 20px;border: 1px solid #000;opacity: 0.12;filter: alpha(opacity=12);}
.gnb_txt{position:absolute;top:0;left:0;width:45px;height:20px;padding-left:1px;line-height:21px;color:#666;text-align:center}
.gnb_btn_login:hover{text-decoration:none !important}
.gnb_account .gnb_btn_login{width:54px;margin:-1px 0 0 8px;vertical-align:top}
.gnb_account a.gnb_btn_login .gnb_txt {padding-left: 0;}
.gnb_account .gnb_bdr{width:52px}
.gnb_account .gnb_txt{width:53px}
.gnb_my_li{margin-right:7px}
.gnb_my_namebox{padding:2px 9px 0 0;background-repeat:no-repeat;background-position:100% 50%;zoom:1}
.gnb_my_namebox:after{display:block;clear:both;content:''}
a.gnb_my{float:left;display:block;font-size:12px;vertical-align:middle}
a.gnb_my .filter_mask {position: absolute; top: -1px; left: -1px; z-index: 1; width: 28px; height: 28px; background-position: -260px -60px;}
a.gnb_my img{vertical-align:top;border-radius:16px}
a.gnb_my .gnb_name{margin-right:-1px;padding-left:5px;display:inline-block;height:28px;line-height:28px;vertical-align:top;font-size:11px;color:#444}
a.gnb_my:visited{color:#444}
a.gnb_my:hover, a.gnb_my:active, a.gnb_my:visited, a.gnb_my:focus{text-decoration:none !important}
a.gnb_my:hover .gnb_name{text-decoration:underline}
a.gnb_my .ico_arrow{top:25px;margin-left:8px}
.gnb_my_namebox a.gnb_emp{float:left;display:inline-block;height:28px;margin-left:3px;line-height:28px;font-size:11px;color:#777 !important}
.gnb_my_lyr{display:none;position:absolute;top:26px;right:-8px;padding:9px 5px 4px 4px;width:316px;height:155px;background-position:-2px -1310px;z-index:10}
.gnb_my_lyr.gnb_groupid{height:144px;background-position:-2px -1500px}
.gnb_my_lyr.gnb_groupid .gnb_my_content{height:80px}
.gnb_my_lyr.gnb_groupid.gnb_longid1{height:144px;/*background-position:-2px -1664px*/}
.gnb_my_lyr.gnb_groupid.gnb_longid2{height:144px;background-position:-2px -1828px}
.gnb_my_lyr.gnb_longid1{/*width:318px;*/ /*background-position:-2px -1118px;*/}
.gnb_my_lyr.gnb_longid2{width:348px;background-position:-2px -926px}
.gnb_my_li .gnb_my_content{zoom:1;height:91px;padding:15px 0 10px 15px}
.gnb_my_li .gnb_my_content:after{display:block;clear:both;content:''}
.gnb_my_li .gnb_my_content .gnb_img_area{float:left;position:relative;display:block;width:80px;margin: 1px 0 0 1px;}
.gnb_my_li .gnb_my_content .gnb_img_area img{vertical-align:top}
.gnb_my_li .gnb_my_content .gnb_mask{position:absolute;top:0;left:0;display:block;width:80px;height:80px;background-position:-70px -60px}
.gnb_my_li .gnb_my_content .gnb_change{position:absolute;bottom:-2px;left:-2px;display:block;width:28px;height:28px;background-position:-140px 0px}
.gnb_my_li .gnb_my_content .gnb_change:hover{background-position:-140px -30px}
.gnb_my_li .gnb_my_content .gnb_txt_area{float:left;width:210px;margin:0 0 0 10px}
.gnb_longid1 .gnb_my_content .gnb_txt_area{/* width:210px; */}
.gnb_longid2 .gnb_my_content .gnb_txt_area{width:235px}
.gnb_my_li .gnb_my_content .gnb_account{margin-bottom:3px 0 1px;font-size:0}
.gnb_my_li .gnb_my_content .gnb_name{color:#666;font-size:14px}
.gnb_my_li .gnb_my_content .gnb_name a{display:inline-block;vertical-align:top;font-weight:bold;color:#222 !important}
.gnb_my_li .gnb_my_content a.gnb_mail_address{margin-left:1px;font-family:tahoma;color:#666 !important;font-size:12px}
.gnb_my_li .gnb_my_content .gnb_edit_lst{zoom:1;margin-top:7px !important}
.gnb_my_li .gnb_my_content .gnb_edit_lst:after{display:block;clear:both;content:''}
.gnb_my_li .gnb_my_content .gnb_edit_lst li{float:left;padding-left:6px;margin-left:5px;background-position:-290px -25px}
.gnb_my_li .gnb_my_content .gnb_edit_lst li.gnb_info{padding-left:0;margin-left:0;background:none}
.gnb_my_li .gnb_my_content .gnb_edit_lst a{color:#666 !important;letter-spacing:-1px}
.gnb_my_li .gnb_my_content .gnb_membership {display: inline-block;margin-right: 5px;margin-left: 1px;padding-right: 8px;background-position: -287px -403px;}
.gnb_my_li .gnb_my_content .gnb_pay_check{height:16px;margin:7px -4px 0 0 !important}
@media screen and (min-width: 0\0) { .gnb_my_li .gnb_my_content .gnb_pay_check{margin-top:17px} }
.gnb_my_li .gnb_my_content .gnb_pay_check em{display:inline-block;width:16px;height:16px;background-position:-300px -309px;margin:0 4px 0 0;overflow:hidden;font-size:0;line-height:0;vertical-align:top}
.gnb_my_li .gnb_my_content .gnb_pay_check a{font-size:14px;letter-spacing:-1px;line-height:16px;vertical-align:top}
.gnb_my_li .gnb_my_content .gnb_pay_check span{font-weight: bold;}
.gnb_my_li .gnb_my_content .gnb_pay_check strong{font-family:tahoma;letter-spacing:0;vertical-align:top;}
.gnb_my_li .gnb_my_content .gnb_pay_check a, .gnb_my_li .gnb_my_content .gnb_pay_check span, .gnb_my_li .gnb_my_content .gnb_pay_check strong{font-size:12px;color:#222 !important}
#gnb .gnb_my_li .gnb_my_community{clear:both;zoom:1}
#gnb .gnb_my_li .gnb_my_community:after{display:block;clear:both;content:''}
#gnb .gnb_my_li .gnb_my_community a{float:left;width:106px;margin-right: 0;border-right:1px solid #ebebeb}
#gnb .gnb_my_li .gnb_my_community a.gnb_pay{width:102px;border-right:0;line-height:0}
#gnb .gnb_my_li .gnb_my_community a.gnb_pay span{display:inline-block;width:41px;height:16px;background-position:-300px -334px;margin:11px auto 0;font-size:0;line-height:0}
#gnb .gnb_my_li .gnb_my_community a:active, #gnb .gnb_my_li .gnb_my_community a:focus, #gnb .gnb_my_li .gnb_my_community a:visited{text-decoration:none !important}
#gnb .gnb_my_li .gnb_my_community a:hover{text-decoration:underline !important}
#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a{/*width:105px;*/}
#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a.gnb_pay{/* width:106px;*/}
#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a{width:115px}
#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a.gnb_pay{width:116px}
#gnb.gnb_one .gnb_my_community a, #gnb.gnb_one_small .gnb_my_community a{margin-right: 0 !important;}
.gnb_notice_li a.gnb_notice{display:block;width:15px;height:17px;padding:7px 9px 4px;text-decoration:none !important}
.gnb_notice_li a.gnb_notice .gnb_ico_num{left:1px;top:0}
.gnb_notice_li a.gnb_notice .gnb_icon{display:block;width:15px;height:17px;background-position:-3px -60px}
.gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-38px -60px;text-decoration:none !important}
.gnb_notice_li .gnb_notice_lyr{display:none;position:absolute;top:26px;right:-7px;width:297px;height:330px;padding:9px 4px 4px;background-position:-2px -584px;z-index:10;overflow:hidden}
.gnb_notice_li .svc_scroll{height:291px;overflow:scroll;overflow-x:hidden;position:relative;zoom:1}
.gnb_notice_li .svc_panel{width:100%;height:330px;overflow:hidden}
.gnb_notice_li .svc_head{position:relative;height:36px;padding-left:15px;line-height:20px;border-bottom:1px solid #eaeaea;zoom:1}
.gnb_notice_li .svc_head .gnb_tit{color:#6b6d70;margin-right:1px;line-height:36px}
.gnb_notice_li .svc_head .task_right{position:absolute;right:8px;top:8px;font-size:0}
.gnb_notice_li .svc_head .task_right button{height:20px;padding:0 6px;margin-left:4px;border:1px solid #ddd;color:#888;background-color:#fff;font-family:'나눔고딕', NanumGothic;font-size:12px;letter-spacing:-1px;line-height:18px;*line-height:16px;overflow:visible}
.gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_noti .gnb_ico_mail, .gnb_notice_li .svc_blank .svc_msg_box, .gnb_notice_li .svc_blank .gnb_v_guide{display:inline-block;*display:inline;*zoom:1}
.gnb_notice_li .svc_list{margin-top:-1px}
.gnb_notice_li .svc_list li{position:relative;padding:7px 34px 7px 15px;border-top:1px solid #eaeaea;line-height:18px}
.gnb_notice_li .svc_list .gnb_new{background:#ffffd8}
.gnb_notice_li .svc_list .gnb_unread .gnb_subject{color:#444}
.gnb_notice_li .svc_list .gnb_unread .d_cnt{color:#ff630e}
.gnb_notice_li .svc_list .gnb_unread a:hover .gnb_subject, .gnb_notice_li .svc_list .gnb_unread .gnb_unread a:hover .d_cnt{color:#390}
.gnb_notice_li .svc_list .gnb_unread .svc_name{color:#444}
.gnb_notice_li .svc_list a.gnb_list_cover{text-decoration:none !important;display:block;position:relative;zoom:1}
.gnb_notice_li .svc_list a:hover .gnb_subject{text-decoration:underline}
.gnb_notice_li .svc_list .gnb_subject{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;color:#adadad}
.gnb_notice_li .svc_list .d_cnt{font-family:tahoma;font-size:10px}
.gnb_notice_li .svc_list .gnb_info{color:#adadad}
.gnb_notice_li .svc_list .svc_name{margin-right:3px;color:#adadad}
.gnb_notice_li .svc_list .cchr{margin-right:3px}
.gnb_notice_li .svc_list .dona{position:absolute;top:8px;right:34px;text-decoration:underline}
.gnb_notice_li .svc_list .dona a{color:#adadad}
.gnb_notice_li .svc_list .dona a:hover{color:#390}
.gnb_notice_li .svc_list .gnb_ico_mail{width:14px;height:15px;font-size:0;line-height:0;color:#fff;vertical-align:top}
.gnb_notice_li .svc_list .gnb_ico_mail.gnb_yes{background-position:-245px -17px}
.gnb_notice_li .svc_list .gnb_ico_mail.gnb_no{background-position:-245px 4px}
.gnb_notice_li .svc_list .gnb_btn_remove{position:absolute;right:4px;top:50%;z-index:100;margin-top:-13px;padding:10px;line-height:6px;font-size:0;background:none !important;border:0 !important}
.gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i{display:block !important;width:7px;height:7px;font-size:0;line-height:0;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-175px 0}
.gnb_notice_li .svc_blank{position:absolute;top:104px;left:0;width:100%;white-space:nowrap;height:100px;font-size:0;text-align:center}
.gnb_notice_li .svc_blank .svc_msg_box{white-space:normal;font-size:12px;width:100%}
.gnb_notice_li .svc_blank .gnb_tit{display:block;color:#2f3743;font-size:14px;margin:0 0 15px}
.gnb_notice_li .svc_blank .gnb_tit strong{font-weight:normal;color:#390}
.gnb_notice_li .svc_blank .gnb_desc{line-height:19px;color:#2f3743;margin-bottom:7px}
.gnb_notice_li .svc_blank .gnb_desc a, .gnb_notice_li .svc_blank .gnb_link{color:#390;text-decoration:underline}
.gnb_notice_li .svc_blank .gnb_v_guide{vertical-align:middle;height:100%;width:0}
.gnb_notice_li .svc_blank .gnb_link_wrap{text-align:center}
.gnb_notice_li .svc_blank .gnb_link_wrap .gnb_link{display:block;width:40px;margin:0 auto !important;text-align:center}
.gnb_notice_li .svc_loading{background:url(https://ssl.pstatic.net/static/www/2014/loading.gif) no-repeat #fff center center;position:absolute;top:33px;left:0;width:100%;height:245px}
.gnb_notice_li .gnb_error{position:absolute;top:81px;left:2px;width:100%;color:#444;text-align:center}
.gnb_notice_li .gnb_error .gnb_ico_error{display:inline-block;width:57px;height:57px;background-position:-280px -190px}
.gnb_notice_li .gnb_error .gnb_tit{font-size:14px;margin:15px 0 11px}
.gnb_notice_li .gnb_error .gnb_desc{margin-bottom:13px;line-height:18px}
.gnb_notice_li .gnb_error .gnb_link{text-decoration:underline}
.gnb_ly_alert{position:absolute;top:110px;left:13px;background-color:#fff;border:1px solid #b7b9bc;width:260px;padding:34px 0 20px;zoom:1;z-index:100}
.gnb_ly_alert .gnb_msg{text-align:center;line-height:17px;margin-bottom:14px;color:#2f3743}
.gnb_.ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;*overflow:visible}
.gnb_ly_alert .gnb_btns{text-align:center}
.gnb_ly_alert .gnb_btns button{height:27px;line-height:27px;*line-height:22px;font-weight:bold;font-size:12px;padding:0 8px;color:#2f3743;border:1px solid #ddd;background-color:white}
.gnb_ly_alert .gnb_btns button:first-child{margin-right:4px}
.gnb_ly_alert .gnb_btn_close{position:absolute;right:2px;top:0;width:35px;border:0;background:none;cursor:pointer;border-radius:0;padding:10px}
.gnb_ly_alert .gnb_btn_close i{display:block;width:15px;height:15px;font:0/0 a;color:transparent;white-space:nowrap;overflow:hidden;vertical-align:top;background-position:-240px -60px}
.mail_li a.gnb_mail{display:block;width:20px;height:15px;padding:7px 9px 6px;text-decoration:none !important}
.mail_li a.gnb_mail .gnb_icon{display:block;width:20px;height:15px;background-position:0px -95px}
.mail_li a.gnb_mail:hover .gnb_icon{background-position:-35px -95px;text-decoration:none !important}
.mail_li .gnb_ico_num{left:6px;top:0}
.gnb_service_li{margin-right:0}
.gnb_service_li a.gnb_service{display:block;width:16px;height:16px;padding:7px 9px 5px}
.gnb_service_li a.gnb_service .gnb_icon{display:block;width:16px;height:16px;background-position:-2px -130px}
.gnb_service_li a.gnb_service:hover .gnb_icon{background-position:-37px -130px;text-decoration:none !important}
.gnb_service_li .gnb_service_lyr{display:none;position:absolute;top:27px;right:-7px;z-index:10}
.gnb_favorite_search{width:301px;letter-spacing:-1px}
.gnb_response .gnb_favorite_search{display:none}
.gnb_favorite_area{height:93px;padding:8px 4px 0;background-position:0 0}
.gnb_favorite_lstwrp{position:relative;padding:22px 1px 15px 15px;border-bottom:1px solid #ebebeb}
.gnb_favorite_lstwrp .gnb_my_interface{top:3px !important;right:3px !important}
.gnb_first_visit{position:absolute;top:0;left:0;width:293px;height:92px;background-position:0 -310px;z-index:200}
.gnb_first_visit .gnb_close{position:absolute;top:0;right:0;display:block;width:32px;height:32px}
.gnb_favorite_lst{zoom:1}
.gnb_favorite_lst:after{display:block;clear:both;content:''}
.gnb_favorite_lst li{float:left;width:65px;text-align:center;white-space:nowrap}
.gnb_favorite_lst a{display:inline-block;text-align:center;font-weight:bold}
.gnb_favorite_lst .gnb_add a{display:block;test-align:center;}
.gnb_favorite_lst .gnb_add a span.ic_add{display:block;width:36px;height:36px;margin:0 auto 4px;background-image: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
.gnb_favorite_lst .gnb_add a:hover span.ic_add{background-image: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -42px 0px;background-repeat: no-repeat;width: 36px;height: 36px;vertical-align: top;}
.gnb_favorite_lst img{display:block;margin:0 auto 4px;vertical-align:top}
.gnb_search_area{position:relative;z-index:200;padding:18px 4px 17px;background-position:-301px 0;background-repeat:repeat-y}
.gnb_search_box{position:relative;z-index:101;margin:0 12px 16px 0;padding-left:10px;display:block;width:270px;height:35px;background-position:10px -190px}
.gnb_search_box.over{background-position:10px -230px}
.gnb_search_box.fcs{background-position:10px -270px}
.gnb_search_box.fcs input{width:200px;font-size:16px;font-weight:bold;color:#444;outline:0}
.gnb_search_box input{float:left;display:block;width:210px;height:22px;margin-top:6px;padding-left:10px;font-family:'나눔고딕',NamumGothic;letter-spacing:-1px;color:#adadad;font-size:13px;border:0;line-height:22px;background:transparent}
.gnb_search_box .gnb_del_txt{position:absolute;top:8px;right:32px;display:block;width:17px;height:17px;background-position:-190px 0px}
.gnb_search_box .gnb_del_txt:hover{background-position:-190px -20px}
.gnb_search_box .gnb_pop_input{position:absolute;top:34px;left:10px;width:268px;height:170px;*height:172px;border:1px solid #cbc5c5;border-top:0;background:#fff;overflow-x:hidden;overflow-y:scroll;z-index:110}
.gnb_search_box .gnb_pop_lst{padding:4px 0 2px}
.gnb_search_box .gnb_pop_lst a{display:block;padding:6px 0 6px 10px;font-weight:bold}
.gnb_search_box .gnb_pop_lst .on{background-color:#f5f5f5}
.gnb_search_lstwrp{zoom:1;height:118px;padding-left:12px}
.gnb_search_lstwrp:after{display:block;clear:both;content:''}
.gnb_search_lstwrp .gnb_search_lst{float:left;width:69px;border-left:1px solid #eaeaea}
.gnb_search_lstwrp .gnb_search_lst.gnb_first{width:64px;border:0}
.gnb_search_lstwrp li{padding:12px 0 0 8px}
.gnb_search_lstwrp li.gnb_first{font-weight:bold;padding-top:0}
.gnb_search_lstwrp li a{display:inline-block;vertical-align:top}
.gnb_banner{height:47px;margin:0;padding:0 18px;background-position:-301px 0;background-repeat:repeat-y}
.gnb_banner .gnb_service_event{display:inline-block;border-top:1px solid #ebebeb}
.gnb_linkwrp{padding:0 4px 4px;background-position:-602px 0}
a.gnb_service_all:hover, a.gnb_service_all:visited, a.gnb_service_all:active, a.gnb_service_all:focus{text-decoration:none}
.gnb_svc_more{display:none;position:absolute;top:4px;right:303px;width:589px;overflow:hidden;zoom:1;z-index:1000}
.gnb_svc_more:after{display:block;clear:both;content:''}
.gnb_response .gnb_svc_more{right:2px}
.gnb_bg_top{height:6px;background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat}
.gnb_bg_btm{position:relative;height:6px;background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) no-repeat -1282px 0}
.gnb_svc_more .gnb_svc_hd{position:relative;padding:0 18px 2px 23px;letter-spacing:-1px;background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0}
.gnb_svc_more .gnb_svc_hd .gnb_svc_tit{display:block;padding:12px 0 13px;border-bottom:1px solid #ebebeb;font-size:14px;color:#222}
.gnb_svc_more .gnb_svc_hd .link{position:absolute;top:14px;right:19px;font-size:12px;color:#444}
.gnb_svc_more .gnb_svc_hd .link a{color:#444 !important;line-height:16px !important}
.gnb_svc_more .gnb_svc_lstwrp{position:relative;height:283px;overflow:hidden;padding:15px 15px 0 20px;letter-spacing:-1px;background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;zoom:1}
.gnb_svc_more .gnb_svc_lstwrp:after{display:block;clear:both;content:''}
.gnb_svc_more .gnb_svc_lstwrp li{height:15px;margin-bottom:5px;color:#6b6d70;white-space:nowrap;line-height:15px}
.gnb_svc_more .gnb_svc_lstwrp li.gnb_event label{color:#444;font-weight:bold}
.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new{display:inline-block;width:11px;height:11px;background-position:-215px 0px;margin:2px 0 0 4px;font-size:0;line-height:0;vertical-align:top}
@media screen and (min-width: 0\0) { .gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic{margin-top:3px} }
.gnb_svc_more .gnb_svc_lstwrp .gnb_input_check{width:13px;height:13px;margin:2px 3px 0 3px;padding:0;vertical-align:top;-webkit-appearance:checkbox;}
.gnb_svc_more .gnb_svc_lstwrp label{vertical-align:0px}
.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled strong{color:#a8acb0}
.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled li{color:#cbcbcb}
.gnb_svc_more .gnb_svc_lst1{float:left;width:328px;height:280px}
.gnb_svc_more .gnb_svc_lst1 ul{float:left;width:102px;min-height:260px;padding:5px 0 0 10px;border-left:1px solid #eee}
.gnb_svc_more .gnb_svc_lst1 ul.gnb_first{padding-left:0;border:0}
.gnb_svc_more .svc_lst2{float:left;position:relative;width:221px;border:1px solid #eee;background:#fbfbfb;zoom:1}
.gnb_svc_more .svc_lst2:after{display:block;clear:both;content:''}
.gnb_svc_more .svc_spc{float:left;position:relative;width:100px;min-height:254px;padding:9px 0 0 10px}
.gnb_svc_more .svc_spc.gnb_first{border-right:1px solid #eee}
.gnb_svc_more .svc_spc strong{height:20px;color:#2f3743;line-height:16px}
.gnb_svc_more .svc_spc a:visited{color:#2f3743}
.gnb_svc_more .svc_spc ul{padding:8px 0}
.gnb_svc_more .svc_spc li{margin-bottom:0;padding-bottom:5px;color:#848689}
.gnb_svc_more .svc_stroy{width:89px;margin-top:-5px;padding:12px 0 0;border-top:1px solid #eee}
.gnb_svc_more .svc_btns{position:relative;height:33px;overflow:hidden;padding-top:5px;line-height:normal}
.gnb_svc_more .svc_btnwrp{position:relative;*height:39px;background:url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png) repeat-y -641px 0;padding:0 2px 0 4px}
.gnb_svc_more .svc_btnwrp button{display:inline-block;width:60px;height:25px;border:0;vertical-align:top}
.gnb_svc_more .svc_btnwrp .gnb_save{background-position:0 -160px}
.gnb_svc_more .svc_btnwrp .gnb_close{margin-left:1px;background-position:-65px -160px}
.gnb_svc_more .svc_btnwrp .gnb_return{position:absolute;top:5px;left:15px;background-position:-130px -160px}
.gnb_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-155px -120px}
.gnb_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-155px -140px}
.gnb_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-200px -120px}
.gnb_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-200px -140px}
.gnb_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-175px -120px}
.gnb_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-175px -140px}
.gnb_dark .gnb_my_li .gnb_my .gnb_name, .gnb_dark .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -140px}
.gnb_dark .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -120px}
.gnb_dark .mail_li a.gnb_mail .gnb_icon{background-position:-238px -141px}
.gnb_dark .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -121px}
.gnb_dark .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -140px}
.gnb_dark .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -120px}
.gnb_dark_type2 .gnb_my_li .gnb_my .gnb_name, .gnb_dark_type2 .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
.gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon{background-position:-220px -120px}
.gnb_dark_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-220px -140px}
.gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon{background-position:-238px -121px}
.gnb_dark_type2 .mail_li a.gnb_mail:hover .gnb_icon{background-position:-238px -141px}
.gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon{background-position:-261px -120px}
.gnb_dark_type2 .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-261px -140px;}
.gnb_dark .gnb_notice_li a.gnb_notice, .gnb_dark_type2 .gnb_notice_li a.gnb_notice {width: 17px;height: 19px;padding: 6px 8px 3px;}
.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon, .gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon {width: 17px;height: 19px;}
.gnb_dark .mail_li a.gnb_mail, .gnb_dark_type2 .mail_li a.gnb_mail {width: 22px;height: 16px;padding: 7px 8px 4px;}
.gnb_dark .mail_li a.gnb_mail .gnb_icon, .gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon {width: 22px;height: 16px;}
.gnb_dark .gnb_service_li a.gnb_service, .gnb_dark_type2 .gnb_service_li a.gnb_service {width: 18px;height: 18px;padding: 6px 8px 4px;}
.gnb_dark .gnb_service_li .gnb_service .gnb_icon, .gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon {width: 18px;height: 18px;}
#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt{color:#fff}
#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li {height: 28px;}
#gnb.gnb_one .gnb_login_li .gnb_btn_login, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login, #gnb.gnb_one .gnb_login_li .gnb_bg, #gnb.gnb_one_small .gnb_login_li .gnb_bg, #gnb.gnb_one .gnb_login_li .gnb_bdr, #gnb.gnb_one_small .gnb_login_li .gnb_bdr, #gnb.gnb_one .gnb_login_li .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_txt {width: 53px;height: 23px;}
#gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt {top: -1px;width: 53px;height: 23px;line-height: 28px;font-size: 11px;}
#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li, #gnb.gnb_one .gnb_my_li, #gnb.gnb_one_small .gnb_my_li, #gnb.gnb_one .gnb_notice_li, #gnb.gnb_one_small .gnb_notice_li, #gnb.gnb_one .mail_li, #gnb.gnb_one_small .mail_li, #gnb.gnb_one .gnb_service_li, #gnb.gnb_one_small .gnb_service_li{margin-right: 0;margin-left: 0; background: url(https://ssl.pstatic.net/static/common/gnb/bg_one_line.png) repeat-y right 0;}
#gnb.gnb_one .gnb_login_li a, #gnb.gnb_one_small .gnb_login_li a, #gnb.gnb_one .gnb_my_li a, #gnb.gnb_one_small .gnb_my_li a, #gnb.gnb_one .gnb_notice_li a, #gnb.gnb_one_small .gnb_notice_li a, #gnb.gnb_one .mail_li a, #gnb.gnb_one_small .mail_li a, #gnb.gnb_one .gnb_service_li a, #gnb.gnb_one_small .gnb_service_li a {margin-right: 1px;}
#gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_login_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_login_li.hover .gnb_notice, #gnb.gnb_one .gnb_login_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_login_li.hover .gnb_mail, #gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_my_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_my_li.hover .gnb_notice, #gnb.gnb_one .gnb_my_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_my_li.hover .gnb_mail, #gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .mail_li.hover .gnb_notice, #gnb.gnb_one_small .mail_li.hover .gnb_notice, #gnb.gnb_one .mail_li.hover .gnb_mail, #gnb.gnb_one_small .mail_li.hover .gnb_mail, #gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service, #gnb.gnb_one .gnb_service_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_service_li.hover .gnb_notice, #gnb.gnb_one .gnb_service_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_service_li.hover .gnb_mail, #gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service {background: url(https://ssl.pstatic.net/static/common/gnb/bg_one_hover.png) repeat 0 0;}
#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name{margin:0 0 0 1px;}
#gnb.gnb_one .gnb_notice_li a.gnb_notice, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice{width:17px;height:19px}
#gnb.gnb_one .gnb_notice_li a.gnb_notice .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice .gnb_icon{width:17px;height:19px;background-position:-284px -119px}
#gnb.gnb_one .gnb_notice_li a.gnb_notice:hover .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice:hover .gnb_icon{background-position:-284px -119px}
#gnb.gnb_one .mail_li a.gnb_mail, #gnb.gnb_one_small .mail_li a.gnb_mail{width:21px;height:17px}
#gnb.gnb_one .mail_li a.gnb_mail .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail .gnb_icon{width:21px;height:17px;background-position:-302px -120px}
#gnb.gnb_one .mail_li a.gnb_mail:hover .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail:hover .gnb_icon{background-position:-302px -120px}
#gnb.gnb_one .gnb_service_li .gnb_service, #gnb.gnb_one_small .gnb_service_li .gnb_service{width:17px;height:17px}
#gnb.gnb_one .gnb_service_li .gnb_service .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service .gnb_icon{width:17px;height:17px;background-position:-324px -120px}
#gnb.gnb_one .gnb_service_li .gnb_service:hover .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service:hover .gnb_icon{background-position:-324px -120px}
#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr, #gnb.gnb_one_small .gnb_notice_lyr, #gnb.gnb_one .gnb_service_lyr, #gnb.gnb_one_small .gnb_service_lyr {right: 7px;}
#gnb.gnb_one .gnb_ico_num, #gnb.gnb_one_small .gnb_ico_num{width:34px;top:10px;right:3px;left:auto;vertical-align:top}
#gnb.gnb_one .gnb_ico_num .gnb_ico_new, #gnb.gnb_one_small .gnb_ico_num .gnb_ico_new{vertical-align:top;height:13px;background-position:-332px -60px;}
#gnb.gnb_one .gnb_ico_num .gnb_count, #gnb.gnb_one_small .gnb_ico_num .gnb_count {height: 13px;padding: 0 6px 0 2px;background-position: 100% -60px;font-size: 10px;font-weight: normal;}
#gnb.gnb_one .gnb_ico_num .plus, #gnb.gnb_one_small .gnb_ico_num .plus{margin:1px 0 0 2px}
#gnb.gnb_one .ico_arrow{top:48px}
#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr{top:47px}
#gnb.gnb_one .gnb_service_lyr{top:48px;}
#gnb.gnb_one .gnb_login_li{padding:16px 21px 10px 1px;}
#gnb.gnb_one .gnb_my_li{padding:12px 20px 12px 2px}
#gnb.gnb_one .gnb_my_li .ico_arrow{top:34px}
#gnb.gnb_one .gnb_notice_li a.gnb_notice{padding:18px 19px 17px 19px}
#gnb.gnb_one .mail_li a.gnb_mail{padding:19px 17px 18px 17px}
#gnb.gnb_one .gnb_service_li .gnb_service{padding:19px 19px 18px 19px}
#gnb.gnb_one_small .ico_arrow{top:33px}
#gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one_small .gnb_notice_lyr{top:32px}
#gnb.gnb_one_small .gnb_service_lyr{top:33px}
#gnb.gnb_one_small .gnb_login_li{padding:7px 12px 4px 2px}
#gnb.gnb_one_small .gnb_my_li{padding:5px 20px 4px 2px}
#gnb.gnb_one_small .gnb_my_li .ico_arrow{top:27px}
#gnb.gnb_one_small .gnb_notice_li a.gnb_notice{padding:10px 11px 10px 12px}
#gnb.gnb_one_small .mail_li a.gnb_mail{padding:11px 10px 11px 9px}
#gnb.gnb_one_small .gnb_service_li .gnb_service{padding:11px 12px 11px 11px}
#gnb.gnb_one_small .gnb_ico_num{top:5px;right:6px;width:24px}
#gnb.gnb_one_flat .gnb_login_li,
#gnb.gnb_one_flat .gnb_my_li,
#gnb.gnb_one_flat .gnb_notice_li,
#gnb.gnb_one_flat .mail_li,
#gnb.gnb_one_flat .gnb_service_li {border-color: #e0e0e0;}
#gnb.gnb_one_flat .gnb_notice_li.hover,
#gnb.gnb_one_flat .mail_li.hover,
#gnb.gnb_one_flat .gnb_service_li.hover {background-color: rgba(0, 0, 0, 0.04);}
#gnb.gnb_one_flat .gnb_service_li .gnb_service .gnb_icon,
#gnb.gnb_one_flat .gnb_service_li .gnb_service:hover .gnb_icon {background-image: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px -24px;background-repeat: no-repeat; width: 16px;height: 16px;vertical-align: top; margin: 0 1px;}
#gnb.gnb_one_flat .mail_li a.gnb_mail .gnb_icon,
#gnb.gnb_one_flat .mail_li a.gnb_mail:hover .gnb_icon {background-image: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: 0px -42px;background-repeat: no-repeat;width: 20px;height: 16px;vertical-align: top;margin: 0 1px;}
#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice .gnb_icon,
#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice:hover .gnb_icon {background-image: url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);background-position: -84px 0px;background-repeat: no-repeat;width: 16px;height: 18px;vertical-align: top;margin: 0 1px;}
#gnb.gnb_one_flat .gnb_my_li .gnb_my .gnb_name,
#gnb.gnb_one_flat .gnb_login_li .gnb_btn_login .gnb_txt {color: #666;}</style><script src="./html5shive_files/clickcrD.js.다운로드" id="gnb_clickcrD" charset="utf-8"></script><style type="text/css">div.autosourcing-stub {position:absolute;opacity:0}</style></head>
<body class=""><div id="photoviewer" class="photo_view" style="position: absolute; display: none; top: 50px; left: 100px; width: 200px; height: 200px; z-index: 1000; cursor: pointer;">				<div class="view_top" style="cursor: move;">					<h3 style="margin-bottom: -6px;"><img src="./html5shive_files/lg_photoviewer.gif" width="133" height="31" alt="NAVER PHOTO VIEWER"></h3>					<div class="tab_navi" style="display: none;">						<p class="btn_left"><a href="https://cafe.naver.com/dgresweb#" onclick="return false;" style="cursor: pointer;"><img src="./html5shive_files/btn_left.gif" width="31" height="21" alt="이전"></a></p>						<p class="btn_right"><a href="https://cafe.naver.com/dgresweb#" onclick="return false;" style="cursor: pointer;"><img src="./html5shive_files/btn_right.gif" width="32" height="21" alt="다음"></a></p>					</div>					<div class="photo_count" style="display: none;"><strong><span class="current"></span></strong>&nbsp;/&nbsp;<span class="total"></span></div>				</div>				<div class="photo_album">					<p></p>					<a href="https://cafe.naver.com/dgresweb#" title="원본보기" class="btn_original" style="display: none; cursor: pointer;"><img src="./html5shive_files/btn_original2.png" width="80" height="80" alt="원본보기"></a>					<div class="photo_shadow"></div>				</div>								<iframe style="display:block;position:absolute;visibility:hidden;width:0px;height:0px;" src="./html5shive_files/saved_resource.html"></iframe>				<iframe frameborder="0" width="100%" height="100%" marginwidth="0" marginheight="0" scrolling="no" style="filter:alpha(opacity=0);-ms-filter:&#39;alpha(opacity=0)&#39;;position:absolute;top:0;left:0;width:100%;height:100%;display:block;background:transparent;" src="./html5shive_files/saved_resource(1).html"></iframe>			<div class="btn_close" style="z-index:2"><a href="https://cafe.naver.com/dgresweb#" onclick="return false;"><img src="./html5shive_files/btn_close.gif" width="23" height="22" alt="닫기"></a></div></div><link rel="stylesheet" type="text/css" href="./html5shive_files/original_viewer.css">


	
	
	
	
	
	








<div id="u_skip">
	<a href="https://cafe.naver.com/dgresweb#cafe-menu" onclick="var t=document.getElementById(&#39;cafe-menu&#39;);t.tabIndex=-1;t.focus();return false;" class="skip">게시판 목록 바로가기</a>
	<a href="https://cafe.naver.com/dgresweb#main-area" onclick="var t=document.getElementById(&#39;main-area&#39;);t.tabIndex=-1;t.focus();return false;" class="skip">본문 바로가기</a>
	<a id="u_skipToMobileweb" href="https://m.cafe.naver.com/dgresweb/menu/11" class="skip">웹 접근성이 좋은 모바일 웹에서 사용하겠습니까?</a>
</div>



<h1 class="d-none">대구그린웹디반응형</h1>


<div id="cafe-body-skin">
	<div id="cafe-body">
		
		
		

		
		<div id="naver-gnb">
			

			
				




    <a href="http://www.naver.com/" class="link_naver"><img src="./html5shive_files/icon_naver_190423.png" width="52" height="10" alt="NAVER"></a>

<div id="gnb-menu">
    <p class="naver-h" id="naver-h">
        <a href="https://section.cafe.naver.com/">카페홈</a>
        <img src="./html5shive_files/ico-blank.gif" width="1" height="10" alt="" class="tcol-c">
    </p>
    <div id="button_join_cafe" class="join-cafe off">
        <a href="https://cafe.naver.com/dgresweb#">가입카페</a>
        <a href="https://cafe.naver.com/dgresweb#"><img id="joincafeimg" src="./html5shive_files/hidden.gif" width="13" height="13" alt="가입카페" class="btn-join down-gnb"></a>
        <img src="./html5shive_files/ico-blank.gif" width="1" height="10" alt="" class="tcol-c">
    </div>
    <div id="button_mynews_alarm" class="chatting-cafe">
        <a href="https://cafe.naver.com/dgresweb#" class="link_chatting">새글<span class="count"><span class="blind">새로운 글</span>999+</span></a>
        <img src="./html5shive_files/ico-blank.gif" width="1" height="10" alt="" class="tcol-c">
    </div>
    <div id="button_mynews_activity" class="chatting-cafe mynews-cafe off">
        <a href="https://cafe.naver.com/dgresweb#" class="link_chatting">내소식<span id="mynews_activity_count_display" class="count"><span class="blind">새로운 내소식</span>1</span></a>
        <img src="./html5shive_files/ico-blank.gif" width="1" height="10" alt="" class="tcol-c">
    </div>
    <div id="layer_mynews_activity" class="cc_layer_mynews" style="display: none">
        <div class="cc_mynews_header">
            <h2 class="title">내소식</h2>
        </div>

        <div class="cc_mynews_content">
            <div class="cc_mynews_none" style="display: none">
                <strong class="title">내소식이 없습니다.</strong>
                <p class="txt">가입한 카페의 활동 알림과 댓글알림을<br>이곳에서 모아볼 수 있어요.</p>
            </div>

            <div class="cc_mynews_area" style="display: none">
                <span class="blind">최근 30일 이내의 최신순 소식입니다.</span>
                <ul class="cc_mynews_list ">
                    <li id="_mynews_notice_tooltip">
                        <div class="cc_mynews_notice">
                            <p class="notice_txt">
                                알림의 <span class="icon_option"></span> 버튼을 클릭하면, 알림을 설정할 수 있어요.
                            </p>
                            <!-- [D] .btn_close 클릭 시 공지 레이어는 미노출되게 해주세요~ -->
                            <button id="_btn_hide_mynews_notice" type="button" class="btn_close"><span class="blind">공지 닫기</span></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="cc_layer_alert" style="display:none;">
        <strong class="blind">내소식 안내 레이어팝업</strong>
        <div class="cc_alert_content">
            <p class="txt"></p>
        </div>
        <div class="cc_alert_footer">
            <button type="submit" class="cc_alert_btn">확인</button>
        </div>
    </div>

    <div class="chatting-cafe">
        <a href="https://cafe.naver.com/dgresweb#" class="link_chatting" onclick="openCafeTalk();return false;">채팅</a>
        <img src="./html5shive_files/ico-blank.gif" width="1" height="10" alt="" class="tcol-c">
    </div>
    <!-- GNB 템플릿 적용부 -->
    <div id="gnb" class=""><strong class="blind">사용자 링크</strong><ul class="gnb_lst" id="gnb_lst" style="display: block;"><li class="gnb_login_li" id="gnb_login_layer" style="display: none;"><a class="gnb_btn_login" href="https://nid.naver.com/nidlogin.login" id="gnb_login_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그인</span></a></li><li class="gnb_my_li" id="gnb_my_layer" style="display: inline-block;"><div class="gnb_my_namebox" id="gnb_my_namebox" style="background-image: url(&quot;https://ssl.pstatic.net/static/common/gnb/2014/ico_arrow_bl1.gif&quot;);"><a href="javascript:;" class="gnb_my" onclick="gnbUserLayer.clickToggle(); return false;"><img id="gnb_profile_img" src="./html5shive_files/avatar_profile.png" onerror="this.src=&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII=&#39;" width="26" height="26" alt="내 프로필 이미지" style="display: none;"><span id="gnb_profile_filter_mask" class="filter_mask" style="display: none;"></span> <span class="gnb_name" id="gnb_name1">환타</span><em class="blind">내정보 보기</em><span class="ico_arrow"></span></a><a href="https://cafe.naver.com/dgresweb#" class="gnb_emp" id="gnb_emp" style="display: none;">(임직원혜택)</a></div><div class="gnb_my_lyr" id="gnb_my_lyr"><div class="gnb_my_content"><div class="gnb_img_area"><span class="gnb_mask"></span><img src="./html5shive_files/avatar_profile(1).png" onerror="this.src=&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII=&#39;" width="80" height="80" alt="프로필 이미지"><a href="https://nid.naver.com/user2/api/naverProfile.nhn?m=checkIdType" class="gnb_change"><span class="blind">프로필 사진 변경</span></a></div><div class="gnb_txt_area"><p class="gnb_account"><span class="gnb_name" id="gnb_name2"><a class="gnb_nick" href="https://nid.naver.com/user2/api/naverProfile.nhn?m=checkIdType">환타</a>님</span><a class="gnb_btn_login" href="https://nid.naver.com/nidlogin.logout?returl=https://cafe.naver.com/Logout.nhn?alreadyNaverLogout=true" id="gnb_logout_button"><span class="gnb_bg"></span><span class="gnb_bdr"></span><span class="gnb_txt">로그아웃</span></a></p><a href="https://mail.naver.com/" class="gnb_mail_address">nbje1007@naver.com</a><ul class="gnb_edit_lst"><li class="gnb_info"><a href="https://nid.naver.com/user2/help/myInfo.nhn?menu=home">내정보</a></li><li class="gnb_secure" id="gnb_secure_lnk"><a href="https://nid.naver.com/user2/help/myInfo.nhn?m=viewSecurity&amp;menu=security">보안설정</a></li><li class="gnb_cert" id="gnb_cert_lnk"><a href="https://nid.naver.com/user2/eSign/v1/home/land">내인증서</a></li></ul><div class="gnb_pay_check" id="gnb_pay_check"><p class="gnb_membership" style="display: none;" id="gnb_membership"><a href="https://nid.naver.com/membership/my" class="gnb_my_membership"><i class="blind">네이버 멤버쉽</i></a></p><em>N Pay</em><a href="https://pay.naver.com/" id="gnb_pay_point"><span style="display: none">내 페이포인트</span></a></div></div></div><div class="gnb_my_community"><a href="https://blog.naver.com/MyBlog.naver" class="gnb_blog">내 블로그</a><a href="https://section.cafe.naver.com/" class="gnb_cafe">가입한 카페</a><a href="https://pay.naver.com/" class="gnb_pay"><span>N Pay</span></a></div><a href="https://cafe.naver.com/dgresweb#" class="gnb_my_interface" style="display:none"><span class="blind">환경설정</span></a></div><iframe id="gnb_my_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:320px;height:158px;display:none;opacity:0;-ms-filter:alpha(opacity=0)" src="./html5shive_files/saved_resource(2).html"></iframe></li><li class="gnb_notice_li" id="gnb_notice_layer" style="display:none"><a href="javascript:;" class="gnb_notice" onclick="gnbNaverMeLayer.clickToggle(); return false;"><span class="blind">알림</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_me_menu" style="display:none"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_me_count" style="display: inline-block;"></span></span></em><span class="ico_arrow"></span></a><div class="gnb_notice_lyr" id="gnb_notice_lyr"><div class="svc_noti svc_panel"><div class="svc_scroll"><div class="svc_head"><strong class="gnb_tit">전체 알림</strong><div class="task_right"><button onclick="gnbNaverMeLayer.deleteReadList(this, event);" id="gnb_btn_read_noti_del">읽은 알림 삭제</button><button onclick="gnbNaverMeLayer.showDeleteAlert();" id="gnb_btn_all_noti_del">모두 삭제</button></div></div><div class="svc_body" id="gnb_naverme_layer"></div></div><div class="gnb_ly_alert" id="gnb_ly_alert" style="display: none;"><p class="gnb_msg"><strong>알림을 모두 삭제하시겠습니까?</strong></p><div class="gnb_btns"><button id="ly_alert_confirm" onclick="gnbNaverMeLayer.deleteAllList(this, event);">확인</button><button onclick="gnbNaverMeLayer.hideDeleteAlert();">취소</button></div><button class="gnb_btn_close" onclick="gnbNaverMeLayer.hideDeleteAlert();"><i>레이어 닫기</i></button></div><a href="https://noti.naver.com/index.nhn" class="gnb_notice_all">내 알림 전체보기</a></div></div><iframe id="gnb_notice_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="top:34px;right:-4px;width:299px;height:332px;display:none;opacity:0;-ms-filter:alpha(opacity=0)" src="./html5shive_files/saved_resource(3).html"></iframe></li><li class="mail_li" id="gnb_mail_layer" style="display:none"><a href="https://mail.naver.com/" class="gnb_mail"><span class="blind">메일</span><span class="gnb_icon"></span><em class="gnb_ico_num" id="gnb_mail_menu" style="display: block;"><span class="gnb_ico_new"><span class="gnb_count" id="gnb_mail_count" style="display: inline-block;">99<span class="plus">+</span></span></span></em></a></li><li class="gnb_service_li" id="gnb_service_layer" style="display: inline-block;"><a href="javascript:;" class="gnb_service" onclick="gnbMoreLayer.clickToggle(); return false;"><span class="blind">서비스 더보기</span><span class="gnb_icon"></span><span class="ico_arrow"></span></a><div class="gnb_service_lyr" id="gnb_service_lyr"><div class="gnb_favorite_search" id="gnb_favorite_search"><div class="gnb_favorite_area"><div class="gnb_favorite_lstwrp"><div class="gnb_first_visit" style="display:none"><span class="blind">나만의 즐겨찾기를 추가해 보세요!</span><a href="https://cafe.naver.com/dgresweb#" class="gnb_close"><span class="blind">닫기</span></a></div><strong class="blind">즐겨찾는 서비스</strong><ul class="gnb_favorite_lst" id="gnb_favorite_lst"><li class="gnb_add"><a href="https://cafe.naver.com/dgresweb#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="https://cafe.naver.com/dgresweb#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="https://cafe.naver.com/dgresweb#"><span class="ic_add"></span>추가</a></li><li class="gnb_add"><a href="https://cafe.naver.com/dgresweb#"><span class="ic_add"></span>추가</a></li></ul><a href="https://cafe.naver.com/dgresweb#" class="gnb_my_interface" onclick="gnbMoreLayer.clickToggleWhole(); return false;"><span class="blind">즐겨찾기 설정</span></a></div></div><div class="gnb_search_area"><div class="gnb_search_box" onmouseover="gnb_search.mouseOver(this);" onmouseout="gnb_search.mouseOut(this);"><input id="gnb_svc_search_input" type="text" title="서비스 검색" value="더 많은 서비스를 간편하게 시작하세요!" onfocus="gnb_search.clearInput(this);" onblur="gnb_search.resetInput(this);" onkeydown="gnb_search.keyDown(event);" onkeyup="gnb_search.keyUp(event);"><a href="https://cafe.naver.com/dgresweb#" class="gnb_del_txt" id="gnb_del_txt" style="display:none"><span class="blind">삭제</span></a><div class="gnb_pop_input" id="gnb_pop_input" tabindex="0" onfocus="gnb_search.searchPopOnMouse = true; return false;" onfocusout="gnb_search.searchPopOnMouse = false; return false;" onmouseover="gnb_search.searchPopOnMouse = true; return false;" onmouseout="gnb_search.searchPopOnMouse = false; return false;" style="display:none"><ul class="gnb_pop_lst"></ul></div></div><div id="gnb_search_lstwrp" class="gnb_search_lstwrp"><ul class="gnb_search_lst gnb_first"><li class="gnb_first"><a href="https://cafe.naver.com/">카페</a></li><li><a href="https://news.naver.com/">뉴스</a></li><li><a href="https://map.naver.com/">지도</a></li><li><a href="https://sports.news.naver.com/">스포츠</a></li><li><a href="https://game.naver.com/">게임</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://section.blog.naver.com/">블로그</a></li><li><a href="https://post.naver.com/main.nhn">포스트</a></li><li><a href="https://dict.naver.com/">사전</a></li><li><a href="https://kin.naver.com/">지식iN</a></li><li><a href="https://n.weather.naver.com/">날씨</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://mail.naver.com/">메일</a></li><li><a href="https://stock.naver.com/">증권</a></li><li><a href="https://land.naver.com/">부동산</a></li><li><a href="https://vibe.naver.com/today/">VIBE</a></li><li><a href="https://book.naver.com/">책</a></li></ul><ul class="gnb_search_lst"><li class="gnb_first"><a href="https://shopping.naver.com/">쇼핑</a></li><li><a href="https://comic.naver.com/">웹툰</a></li><li><a href="https://movie.naver.com/">영화</a></li><li><a href="https://mybox.naver.com/">MYBOX</a></li><li><a href="https://auto.naver.com/">자동차</a></li></ul></div></div><div class="gnb_banner"><a href="https://campaign.naver.com/npay/rediret/index.nhn" class="gnb_service_event"><img id="gnb_promo" alt="N페이, 이벤트 참여하면 포인트 적립!" width="265" height="47" src="./html5shive_files/promo_npay_200108.png"></a></div><div class="gnb_linkwrp"><a href="https://www.naver.com/more.html" class="gnb_service_all" id="gnb_service_all">전체 서비스 보기</a></div></div><div class="gnb_svc_more" id="gnb_svc_more" style=""><strong class="blind">네이버 주요 서비스</strong><div class="gnb_bg_top"></div><div class="gnb_svc_hd" id="gnb_svc_hd" tabindex="0"><strong class="gnb_svc_tit">바로가기 설정</strong><span class="link"><a href="https://www.naver.com/more.html">전체 서비스 보기</a></span></div><div class="gnb_svc_lstwrp"><div class="gnb_svc_lst1"><ul class="gnb_first"><li><input type="checkbox" id="nsvc_game" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_game">게임</label></li><li><input type="checkbox" id="nsvc_weather" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_weather">날씨</label></li><li><input type="checkbox" id="nsvc_shopping" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_shopping">네이버쇼핑</label></li><li><input type="checkbox" id="nsvc_navercast" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navercast">네이버캐스트</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_naverpay" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_naverpay">네이버페이<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_mybox" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mybox">네이버 MYBOX</label></li><li><input type="checkbox" id="nsvc_news" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_news">뉴스</label></li><li><input type="checkbox" id="nsvc_comic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_comic">만화/웹툰</label></li><li><input type="checkbox" id="nsvc_memo" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_memo">메모</label></li><li><input type="checkbox" id="nsvc_mail" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_mail">메일</label></li><li><input type="checkbox" id="nsvc_music" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_music">뮤직</label></li><li><input type="checkbox" id="nsvc_land" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_land">부동산</label></li><li><input type="checkbox" id="nsvc_bookmark" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_bookmark">북마크</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_blog" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_blog">블로그</label></li><li><input type="checkbox" id="nsvc_dic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dic">사전</label></li><li><input type="checkbox" id="nsvc_software" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_software">소프트웨어</label></li><li><input type="checkbox" id="nsvc_smartboard" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_smartboard">스마트보드</label></li><li><input type="checkbox" id="nsvc_sports" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_sports">스포츠</label></li><li><input type="checkbox" id="nsvc_series" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_series">시리즈</label></li><li><input type="checkbox" id="nsvc_serieson" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_serieson">시리즈on</label></li><li><input type="checkbox" id="nsvc_ya9" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_ya9">야구9단</label></li><li><input type="checkbox" id="nsvc_movie" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_movie">영화</label></li><li><input type="checkbox" id="nsvc_office" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_office">오피스</label></li><li><input type="checkbox" id="nsvc_novel" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_novel">웹소설</label></li><li><input type="checkbox" id="nsvc_auto" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_auto">자동차</label></li><li><input type="checkbox" id="nsvc_contact" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_contact">주소록</label></li></ul><ul class=""><li><input type="checkbox" id="nsvc_finance" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_finance">증권(금융)</label></li><li><input type="checkbox" id="nsvc_map" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_map">지도</label></li><li><input type="checkbox" id="nsvc_kin" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_kin">지식iN</label></li><li><input type="checkbox" id="nsvc_terms" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_terms">지식백과</label></li><li><input type="checkbox" id="nsvc_book" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_book">책</label></li><li><input type="checkbox" id="nsvc_cafe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cafe">카페</label></li><li><input type="checkbox" id="nsvc_calendar" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_calendar">캘린더</label></li><li><input type="checkbox" id="nsvc_navertv" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_navertv">네이버TV</label></li></ul></div><div class="svc_lst2"><div class="svc_spc gnb_first"><strong><a href="https://dict.naver.com/">어학사전</a></strong><ul class=""><li><input type="checkbox" id="nsvc_krdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_krdic">국어사전</label></li><li><input type="checkbox" id="nsvc_endic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_endic">영어/영영사전</label></li><li><input type="checkbox" id="nsvc_hanja" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_hanja">한자사전</label></li><li><input type="checkbox" id="nsvc_jpdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_jpdic">일어사전</label></li><li><input type="checkbox" id="nsvc_cndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_cndic">중국어사전</label></li><li><input type="checkbox" id="nsvc_frdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_frdic">프랑스어사전</label></li><li><input type="checkbox" id="nsvc_dedic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_dedic">독일어사전</label></li><li><input type="checkbox" id="nsvc_rudic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_rudic">러시아어사전</label></li><li><input type="checkbox" id="nsvc_vndic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vndic">베트남어사전</label></li><li><input type="checkbox" id="nsvc_spdic" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_spdic">스페인어사전</label></li><li><input type="checkbox" id="nsvc_papago" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_papago">파파고</label></li></ul></div><div class="svc_spc"><strong>인기/신규서비스</strong><ul class=""><li><input type="checkbox" id="nsvc_grafolio" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_grafolio">그라폴리오</label></li><li><input type="checkbox" id="nsvc_post" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_post">포스트</label></li><li><input type="checkbox" id="nsvc_band" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_band">밴드</label></li><li><input type="checkbox" id="nsvc_line" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_line">라인</label></li><li class="gnb_event"><input type="checkbox" id="nsvc_vibe" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_vibe">VIBE<em class="ic_gnb_new">New</em></label></li><li><input type="checkbox" id="nsvc_pcontents" name="selmenu" class="gnb_input_check" value=""> <label for="nsvc_pcontents">프리미엄콘텐츠</label></li></ul></div></div></div><div class="svc_btnwrp"><div class="svc_btns"><button class="gnb_save" onclick="if(gnbFavorite.addService()){gnbMoreLayer.clickToggleWhole()} return false;"><strong class="blind">확인</strong></button><button class="gnb_close" onclick="gnbFavorite.cancel(); return false;"><span class="blind">취소</span></button><button class="gnb_return" onclick="gnbFavorite.resetService(); return false;"><span class="blind">초기 설정으로 변경</span></button></div></div><div class="gnb_bg_btm"></div></div></div><iframe id="gnb_service_lyr_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:297px;width:585px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)" src="./html5shive_files/saved_resource(4).html"></iframe><iframe id="gnb_svc_more_iframe" title="빈 프레임" class="gnb_pad_lyr" name="padding" width="0" height="0" scrolling="no" frameborder="0" style="display:none;top:34px;right:-4px;width:295px;height:385px;opacity:0;-ms-filter:alpha(opacity=0)" src="./html5shive_files/saved_resource(5).html"></iframe></li></ul>

    </div>
    <!--//GNB 템플릿 적용부 -->

    
    
    <iframe id="join-cafe-iframe" title="가입카페목록" width="280" frameborder="0" scrolling="no" style="overflow:hidden;display:none;" src="./html5shive_files/saved_resource(6).html"></iframe>
</div>


<div id="cafeappInstallIntroLayer" style="display:none;position:absolute;border:1px solid #969696;background:#fff;top:25px;left:676px">
  <div style="width:252px;padding:13px 13px 10px;text-align:center">
    <p style="font-size:12px;line-height:16px;color:#333"><strong><span style="color:#2cae0c">네이버앱 알림</span>으로 <br>카페앱 설치 경로를 전송했습니다.</strong></p>
    <p style="padding:4px 0 7px;font-size:11px;line-height:16px;color:#999;letter-spacing:-1px">네이버앱이 최신버전이 아니거나, <br>로그아웃 상태여서 알림을 못 받으셨다면 <br>문자 전송으로 카페앱을 설치하실 수도 있습니다.</p>
    <div style="padding-top:10px;border-top:1px solid #eeeeec;text-align:center">
      <a href="https://cafe.naver.com/dgresweb#" id="cafeappInstallIntroLayerSmsBtn" style="display:inline-block;overflow:hidden;width:116px;height:23px;margin-right:2px;background:url(https://cafe.pstatic.net/img/section/ly_cafeapp_dnld_140331.png) no-repeat 0 -34px;line-height:100px;vertical-align:top">카페앱 설치 문자 전송</a>
      <a href="https://cafe.naver.com/dgresweb#" id="cafeappInstallIntroLayerCloseBtn" style="display:inline-block;overflow:hidden;width:35px;height:23px;background:url(https://cafe.pstatic.net/img/section/ly_cafeapp_dnld_140331.png) no-repeat 0 -60px;line-height:100px;vertical-align:top">확인</a>
    </div>
  </div>
  <a href="https://cafe.naver.com/dgresweb#" id="cafeappInstallIntroLayerCloseXBtn" style="display:inline-block;overflow:hidden;position:absolute;top:0;right:0;width:30px;height:30px;background:url(https://cafe.pstatic.net/img/section/ly_cafeapp_dnld_140331.png) no-repeat -136px -34px;line-height:100px;vertical-align:top" role="button">레이어 닫기</a>
</div>
<script type="text/javascript">
var cafeappInstallIntroLayer = {
    init : function(pUserLoggedIn) {
        this.cafeappInstallIntroLayer = $('cafeappInstallIntroLayer');
        this.cafeappInstallIntroLayerSmsBtn = $('cafeappInstallIntroLayerSmsBtn');
        this.cafeappInstallIntroLayerCloseBtn = $('cafeappInstallIntroLayerCloseBtn');
        this.cafeappInstallIntroLayerCloseXBtn = $('cafeappInstallIntroLayerCloseXBtn');
        this.userloggedIn = pUserLoggedIn;
        this.bindEvent();
    },
    bindEvent : function() {
        Event.register(this.cafeappInstallIntroLayerSmsBtn, 'click', this.popupSms.bindForEvent(this));
        Event.register(this.cafeappInstallIntroLayerCloseBtn, 'click', this.hideLayer.bindForEvent(this));
        Event.register(this.cafeappInstallIntroLayerCloseXBtn, 'click', this.hideLayer.bindForEvent(this));
    },    
    hideLayer : function(we) {
        oCL.hide(this.cafeappInstallIntroLayer);
        we.stop();
    },    
    popupSms : function(we) {
    	openPopupSendURL();
        oCL.hide(this.cafeappInstallIntroLayer);
        we.stop();
    },
    showLayer : function(event, nTop, nLeft) {
    	
    	if(!this.userloggedIn) {
    		popupLoginPage(document.location);
    		return;
    	}
    	var oAjax = new Ajax('/CafeAppInstallPushAlim.nhn', {method : "POST"});
    	oCL.show(this.cafeappInstallIntroLayer, event, nTop, nLeft);
    	if(event != null) {
    		Event.ready(event).stop();	
    	}
    }
};
cafeappInstallIntroLayer.init(true);
</script>



<script type="text/javascript">
    var MyNewsActivityList = {
        init: function () {
            this.elMyNewsList = document.querySelector(".cc_mynews_list");
            this.elMyNewsContent = document.querySelector(".cc_mynews_content");
            this.elMyNewsArea = document.querySelector(".cc_mynews_area");
            this.elMyNewsAreaNone = document.querySelector(".cc_mynews_none");

            this.elMessageBox = document.querySelector(".cc_layer_alert");
            this.elMessageBoxButton = document.querySelector(".cc_alert_btn");

            this.elNewsNoticeTooltip = this._fetchNewsNoticeTooltipElement();

            this.processingScrollEvent;
            this.lastMouseOverElement;

            this.bHasNewsMessage = false;

            /*
            공지알림의  버튼을 클릭하면 그 카페의 공지알림을 끌 수 있어요.
            위의 문구는 default로 출력되기 때문에,
            해당 데이터 외 다른 데이터가 없다면, 데이터가 아무것도 없다는 뜻 이다.
             */
            this.NO_MORE_MESSAGE = 1;

            this._attachEvent();
        },

        _fetchNewsNoticeTooltipElement: function () {
            return document.querySelector("#_mynews_notice_tooltip");
        },

        _attachEvent: function () {
            Event.register(this.elMyNewsContent, "scroll", this._onScroll.bindForEvent(this));
            Event.register(this.elMyNewsList, "click", this._onClickHideNoticeTooltip.bindForEvent(this, "#_btn_hide_mynews_notice"));
            Event.register(this.elMyNewsList, "click", this._onClickMynewsOption.bindForEvent(this, ".cc_mynews_option_btn"));
            Event.register(this.elMyNewsList, "click", this._onClickMessage.bindForEvent(this, ".cc_mynews_item"));
            Event.register(this.elMyNewsList, "click", this._onClickCafeNoticeOff.bindForEvent(this, ".cc_mynews_option_layer"));
            Event.register(this.elMyNewsList, "click", this._onClickCommentNotiSetting.bindForEvent(this, ".cc_mynews_option_layer"));
            Event.register(this.elMyNewsList, "click", this._onClickRemoveNoti.bindForEvent(this, ".cc_mynews_option_layer"));
            Event.register(this.elMyNewsList, "click", this._onClickCafeInviteReject.bindForEvent(this, ".cc_mynews_option_layer"));

            Event.register(this.elMyNewsList, "mouseover", this._onMouseLeaveMessage.bindForEvent(this, "li"));
            Event.register(this.elMyNewsList, "mouseover", this._onMouseEnterMessage.bindForEvent(this, "li"));
            Event.register(this.elMyNewsList, "mouseleave", this._onMouseLeaveAllMessage.bindForEvent(this, "li"));

            Event.register(this.elMessageBoxButton, "click", this._onClickMessageBoxButton.bindForEvent(this));

        },
        _onScroll: function (e) {
            if (!this.processingScrollEvent && this._isScrollBottom(e)) {

                var elMessageList = this.elMyNewsList.querySelectorAll("li");
                var nLastMessageKey = elMessageList[elMessageList.length - 1].getAttribute("data-messageKey");

                this.requestMyNewsList(nLastMessageKey);
            }
        },

        _isScrollBottom: function (e) {
            return e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight;
        },

        _onClickHideNoticeTooltip: function (e, selector) {
            var target = this._findParentBySelector(e.target, selector);
            if (!target) {
                return;
            }

            oMainLocalStorage.setLocalStorage(oMainLocalStorage.PC_HIDE_MYNEWS_TOOLTIP, "Y");
            this._toggleNewsNoticeTooltip(false);
        },

        _onClickMynewsOption: function (e, selector) {
            var target = this._findParentBySelector(e.target, selector);
            if (!target) {
                return;
            }

            e.target.parentElement.querySelector(".cc_mynews_option_layer").style.display = "block";
        },

        _onClickMessage: function (e, selector) {
            var target = this._findParentBySelector(e.target, selector);
            if (!target) {
                return;
            }

            var sMessageKey = target.parentNode.getAttribute("data-messageKey");
            var sCategoryId = target.parentNode.getAttribute("data-categoryId");
            this.requestMyNewsConfirm(sMessageKey, sCategoryId);

            var category = target.parentNode.getAttribute("data-category");
            var cafeId = target.parentNode.getAttribute("data-cafeId");
            var articleId = target.parentNode.getAttribute("data-articleId");

            this.sendClickNewsActivity({
                category: category,
                cafe_id: cafeId,
                article_id: articleId
            });
            if (target.getAttribute("data-message")) {
                this._appearMessageBox(target.getAttribute("data-message"));
            } else {
                location.href = target.getAttribute("data-url");
            }
        },

        _onMouseEnterMessage: function (e, selector) {
            var target = this._findParentBySelector(e.target, selector);
            if (!target || this.lastMouseOverElement == target) {
                return;
            }

            if (target && target.id == "_btn_hide_mynews_notice") {
                return;
            }

            this.lastMouseOverElement = target;

            var btnMynewsOption = target.querySelector(".cc_mynews_option");
            if (!btnMynewsOption) {
                return;
            }
            btnMynewsOption.style.display = "block";
        },

        _onMouseLeaveMessage: function (e, selector) {
            var target = this._findParentBySelector(e.target, selector);
            if (!this.lastMouseOverElement || this.lastMouseOverElement == target) {
                return;
            }

            var btnMynewsOption = this.lastMouseOverElement.querySelector(".cc_mynews_option");
            if (!btnMynewsOption) {
                return;
            }

            var btnMynewsOptionLayer = this.lastMouseOverElement.querySelector(".cc_mynews_option_layer");
            if (!btnMynewsOptionLayer) {
                return;
            }

            btnMynewsOption.style.display = "none";
            btnMynewsOptionLayer.style.display = "none";
        },

        _onMouseLeaveAllMessage: function (e, selector) {
            var target = e.target.querySelector(selector);
            if (!this.lastMouseOverElement || this.lastMouseOverElement == target) {
                return;
            }

            var btnMynewsOption = this.lastMouseOverElement.querySelector(".cc_mynews_option");
            if (!btnMynewsOption) {
                return;
            }

            var btnMynewsOptionLayer = this.lastMouseOverElement.querySelector(".cc_mynews_option_layer");
            if (!btnMynewsOptionLayer) {
                return;
            }

            btnMynewsOption.style.display = "none";
            btnMynewsOptionLayer.style.display = "none";
            this.lastMouseOverElement = undefined;
        },

        _onClickCafeNoticeOff: function (e, selector) {
            var elCafeNotiOffTab = e.target;

            if (!elCafeNotiOffTab || elCafeNotiOffTab.className.indexOf("_noticeAlarmOff") === -1) {
                return;
            }

            var elTarget = this._findParentBySelector(elCafeNotiOffTab, selector);
            if (!elTarget) {
                return;
            }

            if (!confirm("이 카페의 공지알림을 끄시겠습니까?\n"
                + "카페 앱의 개별 카페 > 알림 설정 메뉴에서 다시 켤 수 있습니다.")) {
                return;
            }

            var liTarget = this._findParentBySelector(elTarget, "li");
            if (!liTarget) {
                return;
            }

            var nCafeId = liTarget.getAttribute("data-cafeId");
            if (!nCafeId) {
                return;
            }

            this._requestNoticeAlarmOff(nCafeId, liTarget);
        },

        _onClickCommentNotiSetting: function (e, selector) {
            var elCommentSettingTab = e.target;

            if (!elCommentSettingTab || elCommentSettingTab.className.indexOf("_commentNotiSetting") === -1) {
                return;
            }

            var elTarget = this._findParentBySelector(elCommentSettingTab, selector);
            if (!elTarget) {
                return;
            }

            var liTarget = this._findParentBySelector(elTarget, "li");
            if (!liTarget) {
                return;
            }

            var nCafeId = liTarget.getAttribute("data-cafeId");
            var sCafeName = liTarget.getAttribute("data-cafeName");
            if (!nCafeId || !sCafeName) {
                return;
            }

            var configurable = this._requestCommentSettingInfo(nCafeId);
            if (!configurable) {
                return;
            }

            var elMyNewsCommentSettingCafeName = document.querySelector("#myNewsCommentSettingCafeName");
            if (!elMyNewsCommentSettingCafeName) {
                return;
            }
            elMyNewsCommentSettingCafeName.innerText = sCafeName;

            var elMyNewsCommentSettingLayer = document.querySelector("#myNewsCommentSettingLayer");
            if (!elMyNewsCommentSettingLayer) {
                return;
            }

            elMyNewsCommentSettingLayer.setAttribute("data-cafeId", nCafeId);

            elMyNewsCommentSettingLayer.style.display = "block";
        },

        _requestCommentSettingInfo: function (nCafeId) {
            var sUrl = "/CommentActivityConfig.nhn";
            var sQueryString = "?cafeId=" + nCafeId;
            var that = this;
            var configurable = false;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'POST',
                async: false,
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status != 200) {
                        that._showAlertMessage(jsonDoc);
                        configurable = false;
                        return;
                    }

                    configurable = true;
                    var bShowAllCmtOption = false;
                    var sCurrentCommentActivityType = jsonDoc.message.result.commentActivity;
                    var aEnableCommentActivityConfigList = jsonDoc.message.result.enableCommentActivityConfigList;


                    document.querySelector("#" + sCurrentCommentActivityType).checked = true;
                    document.querySelector("#currentSettingOption").value = sCurrentCommentActivityType;

                    for (var i = 0, len = aEnableCommentActivityConfigList.length; i < len; i++) {
                        if (aEnableCommentActivityConfigList[i].value.indexOf("ALL") !== -1) {
                            bShowAllCmtOption = true;
                        }
                    }

                    document.querySelector("#cmtSettingAll").style.display = bShowAllCmtOption ? "block" : "none";
                }
            });

            return configurable;
        },
        _onClickRemoveNoti: function (e, selector) {
            var elCommentSettingTab = e.target;

            if (!elCommentSettingTab || elCommentSettingTab.className.indexOf("_removeNoti") === -1) {
                return;
            }

            var elTarget = this._findParentBySelector(elCommentSettingTab, selector);
            if (!elTarget) {
                return;
            }

            var liTarget = this._findParentBySelector(elTarget, "li");
            if (!liTarget) {
                return;
            }

            var sMessageKey = liTarget.getAttribute("data-messageKey");
            var sCategoryId = liTarget.getAttribute("data-categoryId");

            this._requestNotiRemove(sMessageKey, sCategoryId, liTarget);
        },
        _onClickCafeInviteReject: function (e, selector) {
            var elCafeInviteReject = e.target;

            if (!elCafeInviteReject || elCafeInviteReject.className.indexOf("_inviteReject") === -1) {
                return;
            }

            if (!confirm("초대를 거절하시겠습니까?\n" +
                "이 카페 초대는 다시 받을 수 없습니다")) {
                return;
            }

            var elTarget = this._findParentBySelector(elCafeInviteReject, selector);
            if (!elTarget) {
                return;
            }

            var liTarget = this._findParentBySelector(elTarget, "li");
            if (!liTarget) {
                return;
            }

            var nCafeId = liTarget.getAttribute("data-cafeId");
            var sMessageKey = liTarget.getAttribute("data-messageKey");

            this._requestCafeInviteReject(nCafeId, sMessageKey, liTarget);


        },
        _requestNoticeAlarmOff: function (nCafeId, liTarget) {
            var sUrl = "/MyNewsActivityNoticeAlarmOff.nhn";
            var sQueryString = "?cafeId=" + nCafeId;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status == 200) {
                        MyNewsActivityList.elMyNewsList.removeChild(liTarget);
                        MyNewsActivityList._renderMynewsListLayer();
                    }

                }
            });
        },
        _requestNotiRemove: function (sMessageKey, sCategoryId, liTarget) {
            var sUrl = "/MyNewsMessageRemove.nhn";
            var sQueryString = "?messageKey=" + sMessageKey + "&categoryId=" + sCategoryId;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status == 200) {
                        MyNewsActivityList.elMyNewsList.removeChild(liTarget);
                        MyNewsActivityList._renderMynewsListLayer();
                    }

                }
            });
        },
        _requestCafeInviteReject: function (nCafeId, sMessageKey, liTarget) {
            var sUrl = "/MyNewsInvitationReject.nhn";
            var sQueryString = "?cafeId=" + nCafeId + "&messageKey=" + sMessageKey;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status == 200) {
                        MyNewsActivityList.elMyNewsList.removeChild(liTarget);
                        MyNewsActivityList._renderMynewsListLayer();
                    }

                }
            });
        },

        _onClickMessageBoxButton: function () {
            this.elMessageBox.style.display = "none";
        },

        _findParentBySelector: function (el, selector) {
            var existSelector = false;
            var selectorType = selector.indexOf(".") == 0 ? "class" : selector.indexOf("#") == 0 ? "id" : "tag";
            var selectorName = selectorType === "tag" ? selector : selector.substring(1, selector.length);

            while (el !== this && !existSelector) {
                if (!el.tagName) {
                    return;
                }

                if (selectorType == "class") {
                    if (el.className.indexOf(selectorName) != -1) {
                        existSelector = true;
                        continue;
                    }
                } else if (selectorType == "id") {
                    if (el.id == selectorName) {
                        existSelector = true;
                        continue;
                    }

                } else {
                    if (el.tagName.toLowerCase() === selector) {
                        existSelector = true;
                        continue;
                    }
                }
                el = el.parentNode;
            }

            return el;
        },

        _appearMessageBox: function (message) {
            this.elMessageBox.querySelector(".txt").innerText = message;
            this.elMessageBox.style.display = "block";
        },

        _renderMynewsListLayer: function () {
            this.bHasNewsMessage = MyNewsActivityList.elMyNewsList.childElementCount === this.NO_MORE_MESSAGE ? false : true;
            if (this.bHasNewsMessage) {
                this.elMyNewsArea.style.display = "block";
                this.elMyNewsAreaNone.style.display = "none";
                return;
            }
            this.elMyNewsArea.style.display = "none";
            this.elMyNewsAreaNone.style.display = "block";
        },

        _appendMynewsList: function (sStringifyElement) {
            if (!sStringifyElement) return;
            this.elMyNewsList.insertAdjacentHTML("beforeend", sStringifyElement);
            this.elNewsNoticeTooltip = this._fetchNewsNoticeTooltipElement();
        },

        _sendMyNewsListOpenBA: function () {
            oBAStatSender.send([
                {
                    eventType: cafe.BAStatEventType.PC_808_270
                }
            ]);
            // var list = $$(".cc_mynews_area a");
            // for (var i = 0; i < list.length; i++) {
            // 	list[i].addEventListener('click', this.sendClickNewsActivity);
            // }
        },

        _toggleNewsNoticeTooltip: function (bVisible) {
            bVisible ? this.elNewsNoticeTooltip.style.display = "block" : this.elNewsNoticeTooltip.style.display = "none";
        },

        _showAlertMessage: function (jsonDoc) {
            var errorMessage;
            try {
                errorMessage = jsonDoc.message.error.msg;
            } catch (e) {
            }

            if (!!errorMessage && typeof errorMessage === 'string') {
                alert(errorMessage);
                return;
            }
        },

        showNoticeIfAllowed: function () {
            if (oMainLocalStorage.getLocalStorage(oMainLocalStorage.PC_HIDE_MYNEWS_TOOLTIP) == 'Y') {
                this._toggleNewsNoticeTooltip(false);
                return;
            }

            this._toggleNewsNoticeTooltip(true);
        },

        requestMyNewsList: function (messageKey) {
            var sUrl = "/MyNewsActivityListAjax.nhn";
            var sQueryString = messageKey ? "?messageKey=" + messageKey : "";

            this.processingScrollEvent = true;
            var that = this;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (!res || res.status != '200' || !res.responseText) {
                        return;
                    }

                    if (!res.responseText.trim() && !that.bHasNewsMessage) {
                        that._toggleNewsNoticeTooltip.call(that, false);
                    } else {
                        that._appendMynewsList(res.responseText);
                        that._sendMyNewsListOpenBA();
                        that.processingScrollEvent = false;
                    }

                    // 최초 요청 시 display 값을 설정
                    var bFirstRequest = !messageKey;
                    if (bFirstRequest) {
                        that._renderMynewsListLayer();
                    }

                }
            });
        },

        requestMyNewsConfirm: function (sMessageKey, sCategoryId) {
            var sUrl = "/MyNewsActivityConfirmAjax.nhn";
            var sQueryString = "?messageKey=" + sMessageKey + "&categoryId=" + sCategoryId;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status == 200) {
                        // success
                    }

                }
            });
        },

        removeAll: function () {
            if (!this.bHasNewsMessage) {
                return;
            }

            this.elMyNewsList.textContent = '';
            this.elMyNewsList.appendChild(this.elNewsNoticeTooltip);

        },

        sendClickNewsActivity: function (extraOption) {
            oBAStatSender.send([
                {
                    eventType: cafe.BAStatEventType.PC_809_270,
                    extra : extraOption
                }
            ]);
        }
    };

    MyNewsActivityList.init();
</script>



<script type="text/javascript">
    
    var nsc="cafe"; //서비스에서 사용하는 nclick service code.
    var gnb_service="cafe"; //서비스 명 .naver.com 이하 도메인을 기술 ex) sports.news.naver.com => sports.news
    var gnb_logout="https://cafe.naver.com/Logout.nhn?alreadyNaverLogout=true"; //GNB에서 로그아웃 후 redirect 될 URL
    var gnb_template="gnb_euckr"; //사용하고 있는 템플릿 명
    var gnb_brightness=1; // 0: 어두운색 아이콘, 1: 어두운색 아이콘 + 투명도, 2: 밝은색 아이콘 + 투명도, 3: 밝은색 아이콘(pwe 사용권장)
    var gnb_item_hide_option=28; //0(default) : 모두 표시, 1 : 로그인버튼 숨기기, 2 : user 레이어 숨기기, 4: Naver Me 영역 숨기기, 8 : 메일알림영역 숨기기, 16 : 프로필 이미지 숨기기, 32 : 임직원혜택 보이기(숨길 영역의 값을 bit sum 하여 적용)
    
</script>



<script type="text/javascript" src="./html5shive_files/ScriptBAStatLog-1585128038000-108816.js.다운로드" charset="UTF-8"></script>


<script type="text/javascript">
    var LOG_KEY = "CAFE_UUID";

    function uuidv4() {
		var uuid = "", i, random;
		for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i == 8 || i == 12 || i == 16 || i == 20) {
		  uuid += "-"
		}
		uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
		}
		return uuid;
    }

    function getDeviceId() {
    	try {
		  if (!localStorage.getItem(LOG_KEY)) {
			localStorage.setItem(LOG_KEY, uuidv4());
		  }

		  return localStorage.getItem(LOG_KEY);
		} catch (e) {
		  // silent
		  console.error("Can't access localStorage");
		  return "__UNKNOWN__";
		}
    }

    function getReferrerForBA() {
        if (typeof(window.top.articleReadBalog) === "undefined") {
            window.top.articleReadBalog = {
                useIframeReferrer: false
            };
        }
        if (!window.top.articleReadBalog.useIframeReferrer && !!window.top.document.referrer) {
            window.top.articleReadBalog.useIframeReferrer = true;
            return window.top.document.referrer;
        }
        return document.referrer;
    }

    var oBAStatSender = new cafe.BAStatSender({
        oClient : {
            service_id: 'cafe',
            user_key: 'nbje1007',
            os_name: '__UNKNOWN__',
            os_ver: '-1',
            app_ver: '-1',
            country: 'XX',
            language: 'xx',
            device_id: getDeviceId(),
            device_model: '__UNKNOWN__',
            product: 'web',
            client_context: {
                'nnb': 'YQLP6QRBDDHV6' // CafeBaseAction.java
            }
        },
        sEnv: 'real'
    });
</script>

<script type="text/javascript">
    var ToggleCafeGNBLayer = {
        init : function() {
            this.joinCafeModel = {
                button : $("button_join_cafe"),
                layer : $("join-cafe-iframe"),
                toggle : function (bVisible) {
                    bVisible ? this.hide() : this._show();
                },
                _show : function () {
                    this.layer.src = "/MyCafeListGNBView.nhn";
                    Element.show(this.layer);
                    this.button.className = this.button.className.replace("off","on")

					oBAStatSender.send([
						{
							eventType : cafe.BAStatEventType.PC_827_167
						}
					]);
                },
                hide : function () {
                    this.layer.src = "";
                    Element.hide(this.layer);
                    this.button.className = this.button.className.replace("on","off")
                }
            };
            this.activityModel = {
                button: $("button_mynews_activity"),
                layer: $("layer_mynews_activity"),
                elActivityCount: $("mynews_activity_count_display"),
                toggle: function (bVisible) {
                    bVisible ? this.hide() : this._show();
                },
                _show: function () {
                    MyNewsActivityList.showNoticeIfAllowed();
                    MyNewsActivityList.requestMyNewsList();
                    Element.show(this.layer);
                    Element.removeClass(this.button, "off");
                    Element.addClass(this.button, "on");

                    if (this.elActivityCount) {
                        Element.hide(this.elActivityCount);
                    }

					oBAStatSender.send([
						{
							eventType : cafe.BAStatEventType.PC_806_167
						}
					]);
                },
                hide: function () {
                    MyNewsActivityList.removeAll();
                    Element.hide(this.layer);
                    Element.removeClass(this.button, "on");
                    Element.addClass(this.button, "off");
                }
            };

            this.alarmModel = {
                button: $("button_mynews_alarm"),
            };

            this.loginModel = {
                button: null,
                layer: $("layer_login"),
                toggle: function (bVisible) {
                    Element.toggle(this.layer);
                },
                hide: function () {
                    Element.hide(this.layer);
                }
            };

            this.elCurrent = null;

            this.elGnbCurrent = { layer : null};
            this.bClickGnb = false;

            this.attachEvent(true);
        },
        attachEvent : function(bInit) {
            if (bInit) {
                var oThis = this;
                Event.register(this.joinCafeModel.button, "click", this.clickArea.bindForEvent(this, this.joinCafeModel));
                Event.register(this.activityModel.button, "click", this.clickArea.bindForEvent(this, this.activityModel));
                Event.register(this.alarmModel.button, "click", this.clickAlarmButton.bindForEvent(this));

                Event.register(document, "click", this.hide.bindForEvent(this));
                for (var gnFitted = 0; gnFitted < 10; gnFitted++) {
                    if ($('gnb_my_layer') && $('gnb_service_layer')) {
                        setTimeout(function () {
                            Event.register($('gnb_my_layer'), "click", oThis.toggleGnbLayer.bindForEvent(oThis));
                            Event.register($('gnb_service_layer'), "click", oThis.toggleGnbLayer.bindForEvent(oThis));
                        }, 500);
                        break;
                    }
                }
                return ;
            }
            this.elFrame = $("cafe_main");

            if (this.elFrame) {
                this.elFrameLocation = this.elFrame && this.elFrame.contentWindow && this.elFrame.contentWindow.location.toString() || "";
                this.frameEvent(this);
                this.frameEvent();
            }
        },
        toggleGnbLayer : function(oEvent) {
            var el = oEvent && (oEvent.target || oEvent.srcElement);

            if( gnbUserLayer && gnbUserLayer.show ) {
                this.elGnbCurrent = { layer : gnbUserLayer};
                this.bClickGnb = true;
            } else if ( gnbMoreLayer && gnbMoreLayer.show ) {
                this.elGnbCurrent = { layer : gnbMoreLayer};
                this.bClickGnb = true;
            } else {
                this.elGnbCurrent = { layer : null};
                this.bClickGnb = false;
            }
        },
        frameEvent : function(bDetach) {
            var elEditor = this.elFrame && this.elFrame.contentWindow.oEditor;

            Event[bDetach ? "unregister" : "register"](this.elFrame.contentWindow.document, "click",this.hide.bindForEvent(this));

            
            if(elEditor) {
                Event[bDetach ? "unregister" : "register"](elEditor.getDocument(), "click",this.hide.bindForEvent(this));
            }
        },
        clickArea : function(oEvent, selectedModel) {
            var el = oEvent.target || oEvent.srcElement || oEvent.element;

            if(!/(a|img)/i.test(el.tagName)) {
                return;
            }

            this.loginCheck(selectedModel);

            Event.stop(oEvent);

            this.attachEvent();
        },
        loginCheck: function (selectedModel) {
            new Ajax("/LoginCheck.nhn?m=check", {
                method: 'GET',
                onLoad: function (res) {
                    if (!res || res.status != '200' || !res.responseText) {
                        return;
                    }
                    if (res.responseText == "LOGOUT") {
                        ToggleCafeGNBLayer.openLoginPopup();
                    } else {
						ToggleCafeGNBLayer.toggle({selectedModel: selectedModel});
					}
                }
            });
        },
        clickAlarmButton : function(oEvent, selectedModel) {
			oBAStatSender.send([
				{
					eventType : cafe.BAStatEventType.PC_828_167
				}
			]);

            location.href = "https://section.cafe.naver.com/ca-fe/home/feed";
        },
        toggle : function (oEvent) {
            var bVisible = Element.visible(oEvent.selectedModel.layer);
            oEvent.selectedModel.toggle(bVisible);
            this.elCurrent = oEvent.selectedModel;
        },
        hide : function(oEvent) {
            // 내소식 레이어 내부 클릭 시 닫히는 현상 방지
            if (this.elCurrent && this.elCurrent.layer && oEvent.target) {
                // 내소식 레이어 내부일 경우
                if (this.elCurrent.layer.contains(oEvent.target)) {
                    return;
                }

                // 내소식 레이어 > 댓글 설정 레이어일 경우
                var elMyNewsCommentSettingLayer = $("myNewsCommentSettingLayer");
                if (elMyNewsCommentSettingLayer && elMyNewsCommentSettingLayer.contains(oEvent.target)) {
                    return ;
                }
            }

            if(this.elCurrent && this.elCurrent.layer && this.elCurrent.layer.style && this.elCurrent != oEvent.selectedModel) {
                this.elCurrent.hide();
            }

            // 2014년 GNB 레이어 닫기처리
            if(this.elGnbCurrent.layer && (this.elGnbCurrent.layer.myLayerElement || this.elGnbCurrent.layer.moreLayerElement) && !this.bClickGnb) {
                gnbAllLayerClose();
            }
            this.bClickGnb = false;

            // iframe location이 다른 경우에 클릭 이벤트를 재설정한다.
            if(this.elFrameLocation && this.elFrameLocation != this.elFrame.contentWindow.location) {
                this.frameEvent(this);
                this.elFrameLocation = this.elFrame.contentWindow.location.toString();
                this.frameEvent();
            }
        },
        openLoginPopup: function () {
            open_wnd("https://nid.naver.com/nidlogin.login?template=plogin&mode=form&url=https://cafe.naver.com/OpenerRedirect.nhn%3Fopenerurl%3D%252Fdgresweb.cafe", "naver_login", 410, 280);
        }
    };
    getGNB();
    ToggleCafeGNBLayer.init();
</script>





<script type="text/javascript">
    

    function openCafeTalk() {
        true ? openChatHomePopUp(false) : openLoginPopup();

		oBAStatSender.send([
			{
				eventType : cafe.BAStatEventType.PC_858_167

			}
		]);
    }

    /**
     * 채팅홈을 팝업으로 띄운다.
     *
     * cafe-info-action, cafe-gnb.jsp 에서 사용.
     */
    function openChatHomePopUp(bMyCafeChat) {
        var sChatUrl = 'https://talk.cafe.naver.com' + (bMyCafeChat? "/cafes/30483228/channels" : "/channels");
        popupCenter(sChatUrl, 'CafeChatHome', 400, 700);
    }

    function chatting(bMyCafeChat) {
		oBAStatSender.send([
			{
				eventType : cafe.BAStatEventType.PC_1029_167

			}
		]);
        
            
            openChatHomePopUp(bMyCafeChat);
            
            
            
        
    }

    function openLoginPopup() {
        open_wnd("https://nid.naver.com/nidlogin.login?template=plogin&mode=form&url=https://cafe.naver.com/OpenerRedirect.nhn%3Fopenerurl%3D%252Fdgresweb.cafe", "naver_login", 410, 280);
    }
</script>
			
		</div>
		
<div id="myNewsCommentSettingLayer" class="cc_layer_dimmed _stopDefault" data-cafeid="" style="display: none;">
    <div class="layer_wrap">
        <div class="layer_header">
            <h1 class="title">내소식 댓글알림 설정</h1>
        </div>
        <div class="layer_content">
            <div class="content_title">
                <strong id="myNewsCommentSettingCafeName" class="name"></strong>
            </div>
            <div class="setting_check">
                <input type="hidden" id="currentSettingOption" value="">
                <ul class="list">
                    <li id="cmtSettingAll">
                        <div class="radio_box type_green">
                            <input type="radio" id="ALL" name="cmt_alarm" class="blind">
                            <label for="ALL">
                                <strong class="txt">모든 댓글알림 받기</strong>
                                <p class="info">이 카페의 모든 댓글알림을 받습니다.</p>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="radio_box type_green">
                            <input type="radio" id="REL" name="cmt_alarm" class="blind">
                            <label for="REL">
                                <strong class="txt">참여글의 알림 받기</strong>
                                <p class="info">내 글, 내 댓글, 내가 댓글 쓴 글에 대한 댓글<br>알림을 받습니다.</p>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="radio_box type_green">
                            <input type="radio" id="MY" name="cmt_alarm" class="blind">
                            <label for="MY">
                                <strong class="txt">내 글/댓글의 알림 받기</strong>
                                <p class="info">내 글, 내 댓글에 대한 댓글알림을 받습니다.</p>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btn_area">
                <a href="https://cafe.naver.com/dgresweb#" role="button" class="btn _stopDefault" id="newCommentOptionCancel">취소</a>
                <a href="https://cafe.naver.com/dgresweb#" role="button" class="btn point _stopDefault" id="newCommentOptionSave">확인</a>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
    var MyNewsCommentSetting = {
        init: function () {
            this.elDimmedLayer = document.querySelector(".cc_layer_dimmed");
            this.elSaveBtn = document.querySelector("#newCommentOptionSave");
            this.elCancelBtn = document.querySelector("#newCommentOptionCancel");

            this._attachEvent();
        },
        _attachEvent: function () {
            Event.register(this.elSaveBtn, "click", this._onClickNewCommentOptionSave.bindForEvent(this, "#myNewsCommentSettingLayer"));
            Event.register(this.elCancelBtn, "click", this._onClickNewCommentOptionCancel.bindForEvent(this, "#myNewsCommentSettingLayer"));
        },
        _onClickNewCommentOptionSave: function (e, selector) {

            var sCheckedType = document.querySelector("input[name=cmt_alarm]:checked").id;
            var elTarget = document.querySelector(selector);

            var nCafeId = elTarget.getAttribute("data-cafeId");
            if (!nCafeId || nCafeId.trim().length <= 0) {
                return;
            }

            //설정 변화가 없으면 얼럿을 그냥 닫는다.
            var sCurrentSetting = document.querySelector("#currentSettingOption").value;
            if (sCurrentSetting && sCheckedType === sCurrentSetting) {
                this.elDimmedLayer.style.display = "none";
                return;
            }

            this._requestCommentActivityConfig(nCafeId, sCheckedType, this);
        },

        _requestCommentActivityConfig: function (nCafeId, sCheckedType, self) {
            var sUrl = "/CommentActivityConfigUpdate.nhn";
            var sQueryString = "?cafeId=" + nCafeId + "&type=" + sCheckedType;

            var ajax = new Ajax(sUrl + sQueryString, {
                method: 'GET',
                onLoad: function (res) {
                    if (typeof(JSON) == "object" && typeof(JSON.parse) == "function") {
                        var jsonDoc = JSON.parse(res.responseText);
                    }

                    if (jsonDoc.message.status != 200) {
                        return;
                    }
                    switch(sCheckedType) {
                        case "ALL" :
                            alert("지금부터 모든 댓글알림을 받습니다. \n통합, 상품거래, 간편게시판 외의 게시판에서는\n설정에 관계없이 내 글/댓글의 알림만 제공됩니다.");
                            break;
                        case "REL" :
                            alert("지금부터 참여글의 댓글알림을 받습니다. \n통합, 상품거래, 간편게시판 외의 게시판에서는\n설정에 관계없이 내 글/댓글의 알림만 제공됩니다.");
                            break;
                        case "MY" :
                            alert("지금부터 내 글/댓글의 알림을 받습니다.\n기존에 받은 알림은 목록에 유지됩니다.");
                            break;

                    }
                    self.elDimmedLayer.style.display = "none";
                }
            });
        },
        _onClickNewCommentOptionCancel: function () {
            this.elDimmedLayer.style.display = "none";
        }
    };
    MyNewsCommentSetting.init();
</script>

		
		
			
				
				

				
				
					
						





<script type="text/javascript">





// 탑스킨 사이즈 제한
function resizeTopSkin(img) {
    if(1080 * img.height / img.width > 340) {
        img.height = "340";
        img.width = "1080";
    } else {
        img.width = "1080";
    }
}




function updateMoveMenu() {
	if (typeof oMenuMoveUpdater == "undefined") {
		return;
	}
	
	oMenuMoveUpdater.update(null);
}
</script>


	
	

	
	
  <div id="front-img">
  	
  		
			
			
			
				<div id="front-cafe">
					<a href="https://cafe.naver.com/MyCafeIntro.nhn?clubid=30483228">
					<span class="cafe_default">
						<span class="inner_default">
							<strong class="cafe_name">대구그린웹디반응형</strong>
							<p class="cafe_url">https://cafe.naver.com/dgresweb</p>
						</span>
					</span>
					</a>
				</div>
			
			
			
			
  		
		
  		
		
  		
  	
  </div>

					
				
			
		
			
				
				

				
				
					
						





	

<div id="info-search">
	
		
			
		
		
	

</div>
					
				
			
		
			
				
				
					
						
						


<script type="text/javascript" src="./html5shive_files/URLEncodingMap_MS949-1577769455000-97750.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/URLEncoder-1577769455000-2121.js.다운로드"></script>

<script type="text/javascript">
    var searchParentFrame = null;
    function searchBoard() {
        searchParentFrame = document.frmBoardSearch;
        if (searchParentFrame.query.value.split(/[ \t]/g).join("") == "") {
            alert("검색어를 입력하세요.");
            searchParentFrame.query.focus();
            return;
        }

        searchFrmAfter(searchParentFrame);

        return;
    }

    function searchFrmAfter(frm) {
        $("cafe_main").src = "/ArticleSearchList.nhn?search.clubid=30483228&search.searchBy=0&search.query=" + URLEncoder.encode(frm.query.value,"MS949");
    }
</script>

<div id="info-search" class="cafe-search info-search">
    <form name="frmBoardSearch" action="https://cafe.naver.com/dgresweb" onsubmit="return false;" autocomplete="off">
        <input title="카페글 검색어 입력" type="text" class="inp" name="query" style="ime-mode:active" id="topLayerQueryInput" onkeydown="if (event.keyCode == 13) {searchBoard();}">
        <button onclick="searchBoard();return false;" type="button" class="btn">검색</button>
    </form>
</div>


<form name="pwmForm" method="POST" action="https://cafe.naver.com/dgresweb" target="">
    <input type="hidden" name="ugcTypeName" value="">
    <input type="hidden" name="prohibitWords" value="">
</form>
					
				

				
				
			
		
		
		
		<div id="content-area">
			
			<div id="group-area" class="skin-1080 fl">

				
				







<script type="text/javascript" src="./html5shive_files/clickcr-1577769455000-6201.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/favorite_cafe-1577769455000-1385.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/lcslog-1577769455000-26709.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/Tablet-1577769455000-4233.js.다운로드"></script>

<script type="text/javascript" src="./html5shive_files/TabletHandler-1577769455000-2403.js.다운로드" charset="utf-8"></script>

<script type="text/javascript">
//<![CDATA[
var nsc = "cafe.mycafe";
//]]>
</script>

<div class="cafe-info-action" id="cafe-info-action">
	
	
		
			<div id="cafe-info-data">
				<ul class="info-action-tab">
					<li class="tit-bookmark">
						
						
						
						<a class="_rosRestrict" href="https://cafe.naver.com/dgresweb#" title="즐겨찾는 카페 등록" onclick="setupFavoriteCafe(true, true, 30483228);clickcr(this, &#39;cia.fav&#39;, &#39;&#39;, &#39;&#39;, event);return false;"><img src="./html5shive_files/hidden.gif" width="27" height="28" alt="즐겨찾는 카페 등록" class="btn-bookmark-off" id="favoriteCafeInCafeInfo"></a>
					</li>
					<li class="tit-info-on">
						<p class="gm-tcol-t">카페정보</p>
					</li>
					<li class="tit-action">
						<p><a href="https://cafe.naver.com/dgresweb#" class="_rosRestrict" onclick="showMyAction();clickcr(this, &#39;cia.my&#39;, &#39;&#39;, &#39;&#39;, event);return false;">나의활동</a></p>
					</li>
				</ul>
				<div class="box-g">
					<h4 class="d-none">카페정보</h4>
					<div class="ia-info-data" id="ia-info-data">
						<ul>
							<li class="gm-tcol-c">
								<a href="https://cafe.naver.com/MyCafeIntro.nhn?clubid=30483228">
									<img src="./html5shive_files/cafe_thumb_noimg_55.png" width="58" height="58" alt="카페아이콘" onerror="this.onerror=null;this.src=&#39;https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_thumb_noimg_55.png&#39;;">
<span class="border mask_white"></span>
								</a>
								
							</li>
							<li class="gm-tcol-c">
								<em class="ico-manager">매니저</em>
								<a href="https://cafe.naver.com/dgresweb/member/tarolong/article" target="_blank" class="id mlink gm-tcol-c" onclick="clickcr(this, &#39;cia*i.manager&#39;, &#39;&#39;, &#39;&#39;, event);">
									<div class="ellipsis gm-tcol-c"><div class="ellipsis">웹디자인</div></div>
								</a>
								<div class="thm"><a href="https://cafe.naver.com/CafeHistoryView.nhn?clubid=30483228" class="gm-tcol-c" target="cafe_main" onclick="clickcr(this, &#39;cia*i.history&#39;, &#39;&#39;, &#39;&#39;, event); targetCleaner(this);">since 2021.07.02.</a></div>
								<div class="info-view"><a href="https://cafe.naver.com/dgresweb#" onclick="cafeProfile();clickcr(this, &#39;cia*i.intro&#39;, &#39;&#39;, &#39;&#39;, event);return false;" class="u gm-tcol-c">카페소개</a></div>
							</li>
							
						</ul>
					</div>

					<div class="ia-info-data2">
						<ul>
							
								
								
								
									
									<li class="level-info border-sub">
										<a href="https://cafe.naver.com/dgresweb#" class="gm-tcol-c" onclick="cafeRanking();clickcr(this, &#39;cia*i.grade&#39;, &#39;&#39;, &#39;&#39;, event);return false;">
											<strong class="d-none">카페등급</strong>
											<span class="ico_rank rank5"></span><em>씨앗5단계</em>
										</a>

										
										
											




<script type="text/javascript">
checkHideRankingNotice();

function checkHideRankingNotice(){
	var rankCookie = document.cookie;
	var startPoint = rankCookie.indexOf("rankingHidden=");
	if(startPoint != -1){
		var start = startPoint + 14;
		var end = rankCookie.indexOf(";", start);
		if(end == -1) end = rankCookie.length;
		var value = rankCookie.substring(start, end);
		value = decodeURIComponent(value);
		if(value == '30483228') {
			hideRankingNotice();
		}
	}
}

function hideRankingNotice() {
	Element.hide("rankingNotice");
	setHideCookie();
}

function setHideCookie(){
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate()+2);
	document.cookie = "rankingHidden=30483228; expires="+expireDate.toGMTString();
}
	
function goRankingNoticeDetail(linkUrl) {
	window.open(linkUrl, "rankings-introduction", "width=760,height=1010,scrollbars=no,resizable=yes");
}
</script>
										
									</li>
								
							

							<li class="mem-cnt-info" style="cursor:pointer;">
								<strong class="d-none">카페멤버수</strong>
								
									
										<a href="https://cafe.naver.com/dgresweb#" onclick="$(&#39;hiddenOpenMemberInfoLayer&#39;).style.display = &#39;&#39;;">
											<span class="ico"></span>
											<em>21<span class="ico_lock2">비공개</span></em>
										</a>
									
									
								

								
								<div class="ly_info_dsc" style="font-weight:normal;top:14px;left:5px;display:none;" id="hiddenCafeApplyLayer" onmouseover="showCafeApplyLayer();" onmouseout="hideCafeApplyLayer();">
									<div class="cont cont_v1" style="width:60px">
										<p><a href="https://cafe.naver.com/ManageJoinApplication.nhn?search.clubid=30483228" onblur="hideCafeApplyLayer();">가입대기 <span>0</span></a></p>
										<span class="tail" style="left:31px"></span>
									</div>
								</div>

								
								<div class="ly_info_dsc" style="top: 14px; left: 0px; display: none;" id="hiddenOpenMemberInfoLayer">
									<div class="cont cont_v2">
										<p>멤버목록 비공개 카페</p>
										<span class="tail" style="left:6px"></span>
									</div>
									<a href="https://cafe.naver.com/dgresweb#" onclick="$(&#39;hiddenOpenMemberInfoLayer&#39;).style.display = &#39;none&#39;;" class="clse" role="button">닫기</a>
								</div>

								<a href="https://cafe.naver.com/dgresweb#" onclick="inviteMember();clickcr(this, &#39;cia*i.invite&#39;, &#39;&#39;, &#39;&#39;, event);return false;" class="link_invite">초대하기</a>
							</li>
						</ul>
					</div>

					
					<div class="ia-info-data3" id="cafePopularityLog">





<ul class="gm-tcol-c">
<li class="info">
	<span class="tit"><span class="ico_bkmk"></span><strong class="gm-tcol-c"><a href="https://section.cafe.naver.com/notice/read/1000003528/10000000000023814955" class="gm-tcol-c" target="_blank">즐겨찾는 멤버</a></strong></span>
	<em><a href="https://section.cafe.naver.com/notice/read/1000003528/10000000000023814955" class="gm-tcol-c" target="_blank">1</a><span class="gm-tcol-c">명</span></em>
</li>
<li class="info2">
	<span class="tit"><span class="ico_bkmk2"></span><strong class="gm-tcol-c"><a href="https://section.cafe.naver.com/notice/read/1000003528/10000000000023814955" class="gm-tcol-c" target="_blank">게시판 구독수</a></strong></span>
	<em><a href="https://section.cafe.naver.com/notice/read/1000003528/10000000000023814955" class="gm-tcol-c" target="_blank">0</a><span class="gm-tcol-c">회</span></em>
</li>
<li class="info3" id="cafePopularityLog_info3" onmouseover="showAppCafeDescView(true);" onmouseout="showAppCafeDescView(false);">
	<span class="tit"><span class="ico_mbl"></span><strong class="gm-tcol-c">우리카페앱 수</strong></span>
	<em>0<span class="gm-tcol-c">회</span></em>
	<!-- [D] 우리카페앱 수 안내 레이어 --> 
	<div class="ly_info_dsc" style="top: -60px; right: -3px; display: none;" id="appCafeInstallCountDescLayer">
		<div class="cont cont_v3"> 
			<p>모바일에서 우리카페를<br> 바탕화면에 추가한 수 <br> <a href="https://help.naver.com/support/alias/cafe/cafe21.naver" class="more" target="_blank">자세히 보기</a></p>
			<span class="tail2"></span> 
		</div> 
	</div> 
</li>
</ul></div>
				</div>

				
				
				<div class="area_info_box">
					<dl>
						
						<dt class="area_info_term">주제</dt>
						<dd class="area_info_content">
							컴퓨터/통신 &gt; 홈페이지/태그
						</dd>
						
						
					</dl>
				</div>
				

				

				

				<div class="cafe-write-btn">
					

					
						
							<a href="https://cafe.naver.com/dgresweb#" class="_rosRestrict" onclick="writeBoard();clickcr(this, &#39;mnu.write&#39;, &#39;&#39;, &#39;&#39;, event);return false;">카페 글쓰기</a>
						
						
						
					
				</div>

				<div class="ia-info-btn">
					<ul class="ia-info-list">
						<li><a href="https://cafe.naver.com/dgresweb#" onclick="chatting(true);clickcr(this, &#39;cia*i.chat&#39;, &#39;&#39;, &#39;&#39;, event);return false;" class="link_chat _tabletRestrict(채팅)" target="_blank">카페 채팅</a></li>
					</ul>
				</div>
			</div>
		
		
	
	

	
    
        
            <div id="member-action-data" style="display:none">
                <ul class="info-action-tab" role="tablist">
                    <li class="tit-bookmark">
                        
                        
                        
                        <a class="_rosRestrict" href="https://cafe.naver.com/dgresweb#" title="즐겨찾는 카페 등록" onclick="setupFavoriteCafe(true, true, 30483228);clickcr(this, &#39;cia.fav&#39;, &#39;&#39;, &#39;&#39;, event);return false;"><img src="./html5shive_files/hidden.gif" width="27" height="28" alt="즐겨찾는 카페 등록" class="btn-bookmark-off" id="favoriteCafeInMemberInfo"></a>
                    </li>
                    <li class="tit-info" role="presentation">
                        <p role="tab"><a href="https://cafe.naver.com/dgresweb#" onclick="showCafeInfo();clickcr(this, &#39;cia.cafe&#39;, &#39;&#39;, &#39;&#39;, event);return false;">카페정보</a></p>
                    </li>
                    <li class="tit-action-on" role="presentation">
                        <p role="tab" class="gm-tcol-t">나의활동</p>
                    </li>
                </ul>
                <div class="box-g" role="tabpanel">
                    <h4 class="d-none">나의활동</h4>
                    <div id="ia-action-data"></div>
                </div>

                

                <div class="cafe-write-btn">
                    <a href="https://cafe.naver.com/dgresweb#" class="_rosRestrict" onclick="writeBoard();clickcr(this, &#39;mnu.write&#39;, &#39;&#39;, &#39;&#39;, event);return false;">카페 글쓰기</a>
                </div>

                <div class="ia-info-btn">
                    <ul class="ia-info-list">
                        <li><a href="https://cafe.naver.com/dgresweb#" onclick="chatting(true);clickcr(this, &#39;cia*i.chat&#39;, &#39;&#39;, &#39;&#39;, event);return false;" class="link_chat _tabletRestrict(채팅)" target="_blank">카페 채팅</a></li>
                    </ul>
                </div>
            </div>
        
        
    
	
</div>

<script type="text/javascript">
    
	function writeBoard() {
		

		
		var oMenu = oMenuMoveUpdater.current();
		var bSupportTablet = Tablet.editing.JustAlert()
			.check({
				bAccessTabletPC : false,
				bReadOnlyStatus : false,
				bMarketBoard : oMenu.isMarketBoard(),
				bStaffBoard : oMenu.isStaffBoard(),
				bHasArticleForm : oMenu.hasArticleForm(),
				bHasTemplate : oMenu.hasTemplate()
			});

		if (!bSupportTablet) {
			return;
		}
		var boardType = "L";
		if (oMenu.isStaffBoard()) {
			$("cafe_main").src = '/StaffArticleWrite.nhn?clubid=30483228&menuid=' + oMenu.nMenuId + '&boardtype=L&m=write';
		} else if(oMenu.isSimpleBoard() || oMenu.isMemoBoard() || oMenu.isAttendanceBoard() || oMenu.isLevelUpBoard()) {
			var targetUrl = "/ca-fe/cafes/30483228/articles/write?boardType=" + boardType;
			window.open(targetUrl , "_blank");
		} else {
			
				
					var targetUrl = "/ca-fe/cafes/30483228/articles/write?boardType=" + boardType;
					if(oMenu.nMenuId > 0 ) {
						targetUrl = "/ca-fe/cafes/30483228/menus/" + oMenu.nMenuId + "/articles/write?boardType=" + boardType;
					}
					window.open(targetUrl , "_blank");
				
				
			
		}
    }
	var isFolded = false;

    // 카페정보 보기
	function showCafeInfo() {
		showPopularityLog();

		Element.show("cafe-info-data");
		Element.hide("member-action-data");

		try{
			var etc = {};
			etc["sti"] = "cafe_infodata";
			lcs_do(etc);
		}catch(e) {}
	}

	showPopularityLog();

    // 카페 인기도 로그 보기
    function showPopularityLog() {
		var ajax = new Ajax("/CafePopularityLogAjax.nhn?clubid=30483228&id=" + new Date().getTime(), {
				suspend : "false",
				onLoad : cafePopularityLogShipCB
		});

		ajax.request();
    }

	// 카페 인기도 로그 조회 콜백
	function cafePopularityLogShipCB(res) {
		if (res.status == 200) {
			$("cafePopularityLog").innerHTML = res.responseText;
		}
	}

    function showCafeApplyLayer() {
        Element.show($("hiddenCafeApplyLayer"));
    }

    function hideCafeApplyLayer() {
        Element.hide($("hiddenCafeApplyLayer"));
    }

	function showAppCafeDescView(onmouseover) {
		if(onmouseover) {
			$("cafePopularityLog").className = 'ia-info-data3 ly_on';
			$("cafePopularityLog_info3").className = 'info3 ly_on';
			$('appCafeInstallCountDescLayer').style.display = '';
		} else {
			$("cafePopularityLog").className = 'ia-info-data3';
			$("cafePopularityLog_info3").className = 'info3';
			$('appCafeInstallCountDescLayer').style.display = 'none';
		}
	}

	// 나의 활동 보기
	function showMyAction()
	{

  
       var ajax = new Ajax("/MyCafeMyActivityAjax.nhn?clubid=30483228&id="+new Date().getTime(), {
  				suspend : "false",
  				onLoad : cafeMemberShipCB
  		});
  		ajax.request();

		Element.show("member-action-data");
		Element.hide("cafe-info-data");

		try{
			var etc = {};
			etc["sti"] = "cafe_actiondata";
			lcs_do(etc);
		}catch(e) {}

		if(!isFolded){
		}
  
  
  

	}

	// 나의 활동정보 조회 콜백
	function cafeMemberShipCB(res){
		if(res.status==200)
		{
			$("ia-action-data").innerHTML = res.responseText;
		}
	}


	// 카페정보/ 나의 활동영역 접기/펼치기
	function toggleIA()
	{
		if(isFolded)
		{
			$("ia-info-up-img").className = $("ia-info-up-img").className.replace("down","up");
			$("ia-action-down-img").className = $("ia-action-down-img").className.replace("down","up");
			Element.show("ia-info-data");
			
            
            $("ia-info-down-img").className = $("ia-info-down-img").className.replace("down","up");
            $("ia-action-up-img").className = $("ia-action-up-img").className.replace("down","up");
			Element.show("ia-action-data");
			Element.show("myActivityLink");
			
			isFolded = false;
		} else {
			$("ia-info-up-img").className = $("ia-info-up-img").className.replace("up","down");
			$("ia-action-down-img").className = $("ia-action-down-img").className.replace("up","down");
			Element.hide("ia-info-data");
			
            
            $("ia-info-down-img").className = $("ia-info-down-img").className.replace("up","down");
            $("ia-action-up-img").className = $("ia-action-up-img").className.replace("up","down");
			Element.hide("ia-action-data");
			Element.hide("myAppListDIV");
			Element.hide("myActivityLink");
            
			isFolded = true;
		}
	}

	// 카페소개
	function cafeProfile()
	{
	    moveIframePage('/CafeProfileView.nhn?clubid=30483228');
	}

	// 카페 랭킹
	function cafeRanking()
	{
	    moveIframePage('/ca-fe/cafes/30483228/introduction/ranking');
	}

	// 청소년유해매체 카페 공지
	function teenagerHarmfulCafeNotice() {
		window.open('http://terms.naver.com/entry.nhn?docId=72599');
	}

	// 초대
	function inviteMember()
	{
        
        
        
		  moveIframePage('/CafeInviteCheck.nhn?m=check&clubid=30483228');
        
        
        
        
	}

	// 멤버정보 변경
	function cafeMemberInfoEdit(event){
		open_window("/CafeMemberInfo.nhn?clubid=30483228&memberid=nbje1007", "popup", 500, 780, "toolbar=0,menubar=0,scrollbars=yes,resizable=yes");
	}

	// 별명 변경
	function openProfileEdit(){
	    window.open("http://admin.blog.naver.com/AdminMain.nhn?blogId=nbje1007&Redirect=Basicinfo", "profile");
	}

	// 카페 멤버보기
	function showCafeMember()
	{
        
        
			moveIframePage("/CafeMemberViewTab.nhn?defaultSearch.clubid=30483228");
		
		
        
        
        
	}

    /**
	 * 권한없는 게시글 페이지에서 가입할 경우 호출. ArticleReadNotMember.jsp 에서만 접근함.
     * @param sCafeUrl
     * @param nArticleId
     * @returns {boolean}
     */
	function joinCafeFromArticle(nArticleId) {
		oBAStatSender.send([
			{
				eventType : cafe.BAStatEventType.PC_843_166,
                extra : {
				    pending : false
                }
            }
		]);

		$("cafeApply_check").submit();

        saveJoinTargetUrl();

        return false;
	}

    /**
	 * 가입 중 Exception 발생했을 경우 alertAndRunJs 로 호출되는 함수.
	 *
     */
	function retryJoinCafe() {
        $("cafeApply_check").submit();
	}

    /**
	 * 가입 시도 함수.
     * @param redirectUrl
     * @returns {boolean}
     */
	function joinCafe(redirectUrl) {
        var cafeApplycheckForm = $("cafeApply_check");
		oBAStatSender.send([
			{
				eventType : cafe.BAStatEventType.PC_758_167,
				extra : {
					cafe_id : '30483228',
					pending : false
				}
			}
		]);

	    if(typeof redirectUrl != "undefined") {
            cafeApplycheckForm.redirectUrl.value = redirectUrl;
		}

        cafeApplycheckForm.submit();

        saveJoinTargetUrl();

		return false;
	}

    /**
	 * 현재 보고 있는 iframe 내부 URL > 가입 완료 후 이동할 URL로 저장한다.
	 * - 즉시가입/승인 카페 : 보고 있던 iframe 내부 URL
	 * - 비공개 카페 : 카페홈 URL
     */
	function saveJoinTargetUrl() {
        var joinTargetUrl = document.getElementById("cafe_main").contentWindow.location.href;
        if (false) {
            joinTargetUrl = document.getElementById("cafe_main").src;
        }
        oMainLocalStorage.setLocalStorage(oMainLocalStorage.PC_JOIN_TARGET_URL, joinTargetUrl);
	}

    /**
	 * 가입 승인 취소를 요청한다.
     * @param nAppliedDate
     * @param nFrom
     */
    function cancelApply(nAppliedDate, nFrom) {
	    var oBaEventType = cafe.BAStatEventType.PC_758_167; // default 'home'
	    if (nFrom == 'article') {
            oBaEventType = cafe.BAStatEventType.PC_843_166;
		}
		oBAStatSender.send([
			{
				eventType : oBaEventType,
				extra : {
					pending : true
				}
			}
		]);

        if (!confirm('매니저가 승인하면 카페에 가입됩니다.\n가입 신청을 취소하시겠습니까?')) {
            return;
        }

        var ajax = new Ajax("/CafeApplyCancel.nhn?cafeId=30483228&appliedDate=" + nAppliedDate, {
            suspend : "false",
            onLoad : cancelApplyComplete
        });

        ajax.request();
    }

    function cancelApplyComplete(res) {
        if (res.status == 200) {
            alert('가입 신청이 취소되었습니다.')
        } else {
            alert('오류가 발생했습니다.\n다시 시도해주세요.');
		}

        if (false) {
            document.location.href = g_sCafeSectionUrl;
        } else {
            window.location.reload(true);
        }
	}

	// 멤버레벨 정보 팝업
	function viewMyMemberLevel() {
		open_window("/MemberLevelView.nhn?m=mylevelview&clubid=30483228", "mylevelview", 740, 498, "");
	}

</script>

		        
				







<script type="text/javascript" src="./html5shive_files/Menu-1595808448000-4715.js.다운로드"></script>


<script type="text/javascript">
    var oMenus = new Cafe.menu.Menus();
    var oMenuMoveUpdater = new Cafe.menu.MenuMoveUpdater(oMenus);

    
    [0, -10, -1, -2, -3, -15, -20, -4, -5, -25,-7].each(function(nMenuId) {
        var oMenu = new Cafe.menu.Menu({
            nMenuId : nMenuId,
            bBadMenu : false,
            sMenuType : "",
            sBoardType : "L",
            bHasArticleForm : false,
            bHasTemplate : false
        });

        oMenus.add(oMenu);
    });
    

    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 1,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 11,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 18,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 2,
        bBadMenu : false,
        sMenuType : "F",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 12,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 13,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 28,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 29,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 14,
        bBadMenu : false,
        sMenuType : "B",
        sBoardType : "L",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 3,
        bBadMenu : false,
        sMenuType : "F",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 16,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 5,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 6,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 15,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 17,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 4,
        bBadMenu : false,
        sMenuType : "F",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 7,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 21,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 22,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 8,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 20,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 9,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 10,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 19,
        bBadMenu : false,
        sMenuType : "F",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 26,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 27,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 23,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 24,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    
    var oMenu = new Cafe.menu.Menu({
        nMenuId : 25,
        bBadMenu : false,
        sMenuType : "L",
        sBoardType : " ",
        bHasArticleForm : false,
        bHasTemplate : false
    });

    oMenus.add(oMenu);
    

    // 메뉴로 이동
    // 사실상 아래 메소드는 특정 메뉴를 클릭했을 때, 1. 해당 메뉴를 Bold등의 처리를 하고, 2. 동일한 메뉴(스페셜메뉴, 기본메뉴 등에)가 있을 경우, 같이 Bold 처리함
    function goMenu(nMenuId)	{
        // 메뉴이동속도를 빠르게 하기 위해 실제 메뉴이동은 별개로 처리
        setTimeout(function () {
            oMenuMoveUpdater.update(nMenuId);
        }, 1);
    }

	function toggleMenuGroup(gid) {
		var toggleButton = $(gid + "btn");
		if (toggleButton) {
			if (toggleButton.className == "up-btn") {
				toggleButton.className = "down-btn";
			} else {
				toggleButton.className = "up-btn"
			}
		}

		if (!$(gid)) {
			return false;
		}

		if ($(gid).style.display == 'none') {
			Element.show(gid);
		} else {
			Element.hide(gid);
		}

		return false;
	}

    function showGroupNewImage(groupImageId) {
        var welGroupImage = $(groupImageId);
        if (typeof welGroupImage == 'undefined' ||  welGroupImage == null) {
            return;
        }
		$(groupImageId).style.cssText = "display:inline-block !important;";
    }
</script>
<div id="cafe-menu">
	<div class="box-g-t"></div>
	<div class="box-g-m">
		
		
			




	
		<div class="cafe-menu-tit frst">
			<h3><img src="./html5shive_files/hidden.gif" width="12" height="12" class="ico-bookmark" alt="">
				<a href="https://cafe.naver.com/dgresweb#" onclick="toggleFavoriteMenuGroup();clickcr(this, &#39;mnu.favgroup&#39;, &#39;&#39;, &#39;&#39;, event);return false;" title="즐겨찾는 게시판" class="gm-tcol-t">즐겨찾는 게시판</a>
			</h3>
			<p id="favoriteMenuGroupBtn" class="down-btn">
				<a onclick="toggleFavoriteMenuGroup();return false;" href="https://cafe.naver.com/dgresweb#"><img width="13" height="13" alt="열기/닫기" src="./html5shive_files/hidden.gif"></a>
			</p>
		</div>
		<ul id="favoriteMenuGroup" style="display:none" class="cafe-menu-list"></ul>
		<div class="cafe-menu-space" id="gend141"></div>
	
	


<script type="text/javascript">
	function toggleFavoriteMenuGroup() {
		
		if (false) {
			toLoginPage();
			return;
		}
		
		if (false) {
			joinCafe();
			return;
		}
		
		if ($("favoriteMenuGroup").style.display == 'none') {
			
			requestFavoriteCafeMenuList(30483228);
		} else {
			Element.hide("favoriteMenuGroup");
			$("favoriteMenuGroupBtn").className = "down-btn";
		}		
	}
	
	function requestFavoriteCafeMenuList(clubid) {
		var ajax = new Ajax("/FavoriteCafeMenuListViewAjax.nhn", {
	 		method : "POST",
	 		params : {
					"clubId":clubid
	 	        	},
			charset : "euc-kr",
			onLoad : function(res){
				var json = eval( '(' + res.responseText + ')' );
				if (!json.isSuccess) {
					if (json.errorCode == '101') {
						alert(json.errorMsg);
					}
					
					return;
				}
				
				var favoriteCafeMenuList = json.result;
				
				oMenus.addFavoriteMenus(collectFavoriteMenuIds(favoriteCafeMenuList));
				drawFavoriteCafeMenuList(favoriteCafeMenuList);
				openFavoriteCafeMenuGroup();				
			}
		});
	}
	
	function collectFavoriteMenuIds(favoriteCafeMenuList) {
		var results = [];
		
		for (var i = 0, item; item = favoriteCafeMenuList[i]; i++) {
			results.push(item.menuId);
		}
		
		return results;
	}
	
	function openFavoriteCafeMenuGroup() {
		Element.show("favoriteMenuGroup");
		$("favoriteMenuGroupBtn").className = "up-btn";
	}

    
    
		function drawFavoriteCafeMenuList(favoriteCafeMenuList) {
			var favoriteMenuGroup = $("favoriteMenuGroup");
			var html = "";
			if (favoriteCafeMenuList.length == 0) {
				html += "<li><p class=\"bmk_noti gm-tcol-c\">게시판 상단의 <img src=\"https://cafe.pstatic.net/cafe4/hidden.gif\" width=\"12\" height=\"12\" class=\"ico-bookmark2\">아이콘을<br> 클릭하시면 추가됩니다.</p></li>"
				favoriteMenuGroup.innerHTML = html;
				return;
			}

			for (var idx = 0; idx < favoriteCafeMenuList.length ; idx++) {
				var favoriteCafeMenu = favoriteCafeMenuList[idx];
				html += "<li><img src=\"https://cafe.pstatic.net/cafe4/hidden.gif\" width=\"10\" height=\"11\" class=\"" + favoriteCafeMenu.icon + "\" alt=\"\">";

				if (favoriteCafeMenu.badMenuByRestrict) {
                    html += "<a href=\"" + favoriteCafeMenu.menuLink + "\" target=\"cafe_main\" onmouseover='exposeToolTip(this, \"fv\");return false;' onmouseout='closeToolTop(\"fv\");return false;' onclick=\"goFavoriteMenu('" + favoriteCafeMenu.menuId + "');clickcr(this, 'mnu.favlist', '', '" + (idx + 1) + "', event);\" class=\"gm-tcol-c filter-50 display-inblock\" id=\"favoriteMenuLink" + favoriteCafeMenu.menuId + "\">" + favoriteCafeMenu.menuName + "</a>";
                    html += "&nbsp;<img src=\"https://ssl.pstatic.net/static/cafe/cafe_pc/ico_access.png\" width=\"12\" height=\"12\" class=\"ico_access\" alt=\"접근제한게시판\"><div class=\"tip_n_layer\"><div id=\"menu_restirction_tip_fv\" class=\"tip_layer\" style=\"top:21px;left:-10px;display:none;\"><p class=\"t_txt\">이 게시판은 카페 멤버들의<br>접근이 제한되었습니다.</p> </div></div>";
				} else {
					html += "<a href=\"" + favoriteCafeMenu.menuLink + "\" target=\"cafe_main\" onclick=\"goFavoriteMenu('" + favoriteCafeMenu.menuId + "');clickcr(this, 'mnu.favlist', '', '" + (idx + 1) + "', event);\" class=\"gm-tcol-c\" id=\"favoriteMenuLink" + favoriteCafeMenu.menuId + "\">" + favoriteCafeMenu.menuName + "</a>"
				}

				if (favoriteCafeMenu.hasNewArticle) {
					html += "&nbsp;<img src=\"https://ssl.pstatic.net/static/cafe/cafe_pc/ico_new.png\" width=\"12\" height=\"12\" class=\"ico_new\" alt=\"새 게시글\">"
				}
				html += "</li>";
			}

			favoriteMenuGroup.innerHTML = html;
		}
	
	
	

	
	function goFavoriteMenu(nMenuId)	{
	   
	   setTimeout(function () {
		   oMenuMoveUpdater.updateWhenFavoriteMenu(nMenuId);
	   }, 1);
	}

</script>
		

		
		<ul class="cafe-menu-list">
			<li>
				<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt=""><a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;0&#39;);clickcr(this, &#39;mnu.all&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink0">전체글보기</a>
				
					
						<span class="gm-tcol-c total">89</span>
					
					
				
			</li>
			
				
				
				
				
				
			
				
				
				
				
				
			
				
				
				
				
				
			
				
				
				
				
				
			
				
				
				
				
				
			
		</ul>

		
		
		<div class="cafe-menu-space"></div>
		<ul class="cafe-menu-list">
			

			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=1&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;1&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink1">
						공지사항
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=11&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;11&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c b" id="menuLink11">
						유용한 자료
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=18&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;18&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink18">
						과제자료실
					</a>
					
						
							
							<img src="./html5shive_files/ico_new.png" width="12" height="12" class="ico_new" alt="새 게시글"><script type="text/javascript">showGroupNewImage("groupnewimg");</script>
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
			
			</ul>
		<div class="cafe-menu-tit">
			
				
				
					<h3><span class="gm-tcol-t ellipsis" title="수업자료">수업자료</span></h3>
				
			
		</div>
		
		<ul class="cafe-menu-list" id="group2" style="">
		
			
				
			
				
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=12&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;12&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink12">
						HTML
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=13&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;13&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink13">
						CSS
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=28&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;28&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink28">
						Wireframe
					</a>
					
						
							
							<img src="./html5shive_files/ico_new.png" width="12" height="12" class="ico_new" alt="새 게시글"><script type="text/javascript">showGroupNewImage("groupnewimg2");</script>
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=29&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;29&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink29">
						실전사이트 Basic
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
			
				
			
				
				
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-list" alt="">
					<a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=30483228&amp;search.menuid=14&amp;search.boardtype=L" target="cafe_main" onclick="goMenu(&#39;14&#39;);clickcr(this, &#39;mnu.normal&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink14">
						JavaScript
					</a>
					
						
							
							
						
						
					
				</li>
			
			
			
			
				
				

				
			
				
			

			
				
			
			
			</ul>
		<div class="cafe-menu-tit">
			
				
				
					<h3><span class="gm-tcol-t ellipsis" title="자료링크">자료링크</span></h3>
				
			
		</div>
		
		<ul class="cafe-menu-list" id="group3" style="">
		
			
				
			
				
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" target="_blank" onclick="goMenu(&#39;16&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink16">
						normalize.css
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="http://atom.io/" target="_blank" onclick="goMenu(&#39;5&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink5">
						Atom.io
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://caniuse.com/" target="_blank" onclick="goMenu(&#39;6&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink6">
						Caniuse.com
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl" target="_blank" onclick="goMenu(&#39;15&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink15">
						GoFullPage
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="http://www.scootersoftware.com/download.php" target="_blank" onclick="goMenu(&#39;17&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink17">
						Beyond Compare
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
			
			</ul>
		<div class="cafe-menu-tit">
			
				
				
					<h3><span class="gm-tcol-t ellipsis" title="디자인참조사이트">디자인참조사이트</span></h3>
				
			
		</div>
		
		<ul class="cafe-menu-list" id="group4" style="">
		
			
				
			
				
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="http://www.gdweb.co.kr/main/" target="_blank" onclick="goMenu(&#39;7&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink7">
						GDWEB
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.pinterest.co.kr/" target="_blank" onclick="goMenu(&#39;21&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink21">
						pinterest
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://notefolio.net/" target="_blank" onclick="goMenu(&#39;22&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink22">
						notefolio
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.dbcut.com/bbs/index.php" target="_blank" onclick="goMenu(&#39;8&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink8">
						DBCut
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://dribbble.com/" target="_blank" onclick="goMenu(&#39;20&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink20">
						dribbble
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="http://www.hongsidesign.com/main/sub03_work/sub03_01_current_list.jsp" target="_blank" onclick="goMenu(&#39;9&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink9">
						홍시디자인
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.webtro.co.kr/" target="_blank" onclick="goMenu(&#39;10&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink10">
						웹폰트활용예-웹트로
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
			
			</ul>
		<div class="cafe-menu-tit">
			
				
				
					<h3><span class="gm-tcol-t ellipsis" title="취업정보">취업정보</span></h3>
				
			
		</div>
		
		<ul class="cafe-menu-list" id="group19" style="">
		
			
				
			
				
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.jobplanet.co.kr/" target="_blank" onclick="goMenu(&#39;26&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink26">
						잡플래닛
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.wanted.co.kr/" target="_blank" onclick="goMenu(&#39;27&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink27">
						wanted
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.saramin.co.kr/" target="_blank" onclick="goMenu(&#39;23&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink23">
						사람인
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.jobkorea.co.kr/" target="_blank" onclick="goMenu(&#39;24&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink24">
						잡코리아
					</a>

					
				</li>
			
			
				
			
			
			
			
				
				

				
			
				
			

			
				
			
				
			
				
			
				<li>
					
					<img src="./html5shive_files/hidden.gif" width="10" height="11" class="ico-link" alt="">
					<a href="https://www.work.go.kr/" target="_blank" onclick="goMenu(&#39;25&#39;);clickcr(this, &#39;mnu.link&#39;,&#39;&#39;,&#39;&#39;,event);" class="gm-tcol-c" id="menuLink25">
						워크넷
					</a>

					
				</li>
			
			
				
			
			
			
			
		
		
	</ul></div>

	
	<div class="box-g-b"></div>
</div>

	

		<script type="text/javascript">
            function exposeToolTip(tagElement, sMenuId) {
                var elLayer = $("menu_restirction_tip_" + sMenuId );
                elLayer.style.display = "block";
            }

            function closeToolTop(sMenuId) {
                var elLayer = $("menu_restirction_tip_" + sMenuId );
                elLayer.style.display = "none";
            }
		</script>

	
	


				
				<ul class="com">
					
					
						










<li class="box-w">
	<div id="recent-reply">
		<div class="group-tit">
			<h4 class="tcol-t">최근 댓글ㆍ답글</h4>
		</div>
		<ul class="group-list" id="first-reply-page">
			
			
			<li>
				<div class="ball"><img src="./html5shive_files/ico-blank.png" width="3" height="3" alt="" class="tcol-c"></div>
				
					<a href="https://cafe.naver.com/ArticleRead.nhn?clubid=30483228&amp;articleid=73" target="cafe_main" onclick="targetCleaner(this);" class="tcol-c tlink" title="답0/댓1">
						<div class="ellipsis tcol-c">서비스.경험디자인 관찰조사</div>
					</a>
				
				
			</li>
			
		</ul>
		
	</div>
</li>




<script type="text/javascript">
  function toggleFirstReplyList()
  { 
     if($("first-reply-page").style.display=="none")
     {	
	  Element.show("first-reply-page");
	  Element.hide("second-reply-page");
	  Element.show("pre-reply-disable");
	  Element.show("next-reply-useable");
	  Element.hide("pre-reply-useable");
	  Element.hide("next-reply-disable");
	}
  }
  
  function toggleSecondReplyList()
  {  
     if($("second-reply-page").style.display=="none")
     {
	  Element.show("second-reply-page");
  	  Element.hide("first-reply-page");
  	  Element.show("pre-reply-useable");
	  Element.show("next-reply-disable");
	  Element.hide("pre-reply-disable");
	  Element.hide("next-reply-useable");
  	  
	}
  }

</script>
						
						
					


					
						
							<li class="box-w">
								<p id="cafe-secede"><a href="https://cafe.naver.com/CafeSecedeView.nhn?clubid=30483228&amp;from=naver_login" id="a_secede" class="tcol-c _rosRestrict" onclick="popup(this.href,&#39;w_a_secede&#39;,420,220,&#39;no&#39;);return false;">카페탈퇴하기</a></p>
							</li>
						
						
					


				</ul>
				<div class="banner_chatbot">
					<a href="https://talk.naver.com/ct/w4nd8o" class="chatbot"><img src="./html5shive_files/banner_chatbot.png" width="171" height="55" alt="궁금한게 있을 땐 카페 스마트봇"></a>
				</div>
			</div>
			
			
			<div id="main-area" class="skin-1080 fr">
				<input id="gateOpen" type="hidden" value="1">
				<input id="searchviewtype" type="hidden" value="title">
				
				
	      		
				
					
			        
			        
					
						
						
							
							<iframe name="cafe_main" id="cafe_main" title="카페 메인" src="./html5shive_files/MyCafeIntro.html" width="860" height="100%" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allowtransparency="true" allowfullscreen="" style="height: 1855px;"></iframe>
							
							<script type="text/javascript">
                                $("cafe_main").src = "//cafe.naver.com/MyCafeIntro.nhn?clubid=30483228&tc=naver_search";
							</script>
						
					
				
				
				
				





				
			</div>
			


		</div>
		
		
			




    
        <footer class="footer">
            <h2 class="cafe_name">대구그린웹디반응형</h2>
            <a href="https://cafe.naver.com/dgresweb#" class="cafe_link">https://cafe.naver.com/dgresweb</a>
            <h2><a href="https://cafe.naver.com/dgresweb#" class="naver_cafe"><span class="blind">NAVER 카페</span></a></h2>
        </footer>
    
    

		

		
		<div id="floatingda_content" style="z-index:101; position:absolute; top:100px; right:10px;"></div>
	</div>
	
	<a href="https://cafe.naver.com/dgresweb#" class="blind" onfocus="var t=document.getElementById(&#39;u_skip&#39;);t.tabIndex=-1;t.focus();return false" style="visibility:visible">콘텐츠 상단</a>
</div>







<input type="hidden" id="questionct" value="block">
<iframe name="cafe_check" id="cafe_check" width="0" height="0" frameborder="0" title="카페확인" src="./html5shive_files/saved_resource(7).html"></iframe>
<form id="cafeApply_check" action="https://cafe.naver.com/CafeApplyCheck.nhn" method="post" target="cafe_check" style="margin:0;padding:0;">
<input type="hidden" name="clubid" value="30483228">
<input type="hidden" name="email" value="">
<input type="hidden" name="alreadyMemberPopup" value="true">
<input type="hidden" id="redirectwrite" name="redirectwrite" value="">
<input type="hidden" id="redirectUrl" name="redirectUrl" value="">
</form>
<form name="answerSaveFrm" style="display:none;">
</form>
<form name="nicknameSaveFrm">
<input type="hidden" id="cafeTempApplyNickname" name="cafeTempApplyNickname" value="">
</form>





<script type="text/javascript" src="./html5shive_files/nanoajax.min-1577769455000-685.js.다운로드" charset="UTF-8"></script>

<script type="text/javascript">
    
    setMinSize(773, -1);
    setMaxSize(773, -1);

    
    function moveIframePage(url) {
        $("cafe_main").src = url;
    }

    

    
    
</script>


<script type="text/javascript">
    var oPowerCafeNoticeLayer = new PowerCafeNoticeLayer({
        aNotices : [
            {'name' : 'powerCafeNotice', 'show' : false},
            {'name' : 'powerCafeCandidateNotice', 'show' : false}
        ]
    });

    var oTownCafeSelectLayer = new TownCafeSelectLayer({
        aNotices: [
            {'name' : 'townCafeSelect', 'show' : false},
        ]
    });
</script>



<link rel="stylesheet" href="./html5shive_files/ip_layer_2-1577769455000-2931.css" type="text/css">


<script type="text/javascript">
	function openLoginLayer() {
		var loginCheckOk = "https://cafe.naver.com/LoginCheck.nhn?m=login";
		checkFrame.location.replace("https://nid.naver.com/nidlogin.login?mode=form&svctype=40960&id=nbje1007&url="+loginCheckOk);

		
		var layerScrollTop = parent.document.getElementsByTagName('HTML')[0].scrollTop;
        var layerClientHeight = parent.document.getElementsByTagName('HTML')[0].clientHeight;
        var layerPosition = layerScrollTop + (layerClientHeight * 0.5);
        document.getElementById("login_layer").style.top = layerPosition + "px";
        
		document.getElementById("login_layer_bg").style.display = "";
		document.getElementById("login_layer").style.display = "";
    	document.getElementById("login_layer").focus();		
	}

	function closeLoginLayer() {
		document.getElementById("login_layer_bg").style.display = "none";
	    document.getElementById("login_layer").style.display = "none";
	}
</script>
<div id="login_layer_bg" style="z-index:100;display:none;position:absolute;width:100%;height:3800px;top:0px;left:0px;background-color:GRAY;filter:alpha(opacity=20);-moz-opacity:0.2;">
  <iframe id="login_layer_bg_iframe" frameborder="0" style="position:absolute;top:0px;left:0px;width:100%;height:3800px;background-color:GRAY;filter:alpha(opacity=20);-moz-opacity:0.2;" title="로그인영역" src="./html5shive_files/saved_resource(8).html"></iframe>
</div>
<div id="login_layer" class="layerpopup" style="z-index:1001; width:394px; top:400px; left:35%; display:none;">
  <div class="shadow1">
  <div class="shadow1_side">
		<div class="shadow2">
        <div class="shadow2_side">
			<div class="shadow3">
	        <div class="shadow3_side">
               
			<div class="border_type">
				<div class="logbox_wrap">

					<p class="notice">회원님의 안전한 서비스 이용을 위해 <strong>비밀번호를 확인해 주세요.</strong></p>

	           		<p class="notice02" id="layerd_notice01" style="display:none;">IP가 자주 변경되는 네트워크 환경에서 로그인하는 경우 <br><strong>IP보안을 해제</strong> 후 이용하시기 바랍니다.</p>
					<p class="notice02">다시 한번 <strong>비밀번호 확인</strong> 하시면 이용중인 화면으로 돌아가며, 작성 중이던<br>내용을 정상적으로 전송 또는 등록하실 수 있습니다.</p>
	
					<a href="javascript:closeLoginLayer();" class="closelayer" role="button"><img src="./html5shive_files/btn_close(1).gif" alt="닫기" width="15" height="14"></a>
	           		<div class="frame_wrap type03"><iframe id="checkFrame" name="checkFrame" width="350" height="163" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="빈프레임" src="./html5shive_files/saved_resource(9).html"></iframe></div>
	
				</div>
			</div>
			
          	</div>
			</div>
        </div>
		</div>
  </div>
  </div>
</div>


<script type="text/javascript">
	function makeReturnUrl(iframeUrl) {
		iframeUrl = iframeUrl.replace('https://cafe.naver.com', "");
		var returnUrl = "https://cafe.naver.com/dgresweb.cafe?iframe_url=" + URLEncoder.encode(iframeUrl,"MS949");
		returnUrl = URLEncoder.encode(returnUrl,"MS949");
		return returnUrl;
	}

	function openWindow(target) {

		var centerWidth = (window.screen.width - 450) / 2;
	    var centerHeight = (window.screen.height - 500) / 2;

	    window.open(target, '_blank', 'width=440,height=500' + ',left=' + centerWidth + 
		        ',top=' + centerHeight + ',status=no,scrollbars=no,resizable=no,menubar=no,toolbar=no,location=no');	    
	}
	
	function openSigningLayer(target) {
		var frame = document.getElementById('addressAuthFrame');
			
		frame.contentWindow.location.href = target;
	
		
		var layerScrollTop = parent.document.getElementsByTagName('HTML')[0].scrollTop;
		var layerClientHeight = parent.document.getElementsByTagName('HTML')[0].clientHeight;
		
		var layerPosition =  layerScrollTop + (layerClientHeight * 0.2);
                
        document.getElementById("signing_layer").style.top = layerPosition + "px";
        
        document.getElementById("signing_layer_bg").style.display = "";
		document.getElementById("signing_layer").style.display = "";
    	document.getElementById("signing_layer").focus();	
	
	}

	function closeSigningLayer() {
		document.getElementById("signing_layer_bg").style.display = "none";
	    document.getElementById("signing_layer").style.display = "none";
	}
</script>



<script type="text/javascript" src="./html5shive_files/OneToOneChatLauncher-1591250424000-1020.js.다운로드" charset="utf-8"></script>

<script type="text/javascript" src="./html5shive_files/cafe_ui-1578547956000-19251.js.다운로드"></script>






<script type="text/javascript" src="./html5shive_files/ClockWide-1577769455000-183141.js.다운로드" charset="UTF-8"></script>


<script type="text/javascript">
document.domain = "naver.com";

function notiAlert(frmStr)
{
    open_window("", frmStr, 100, 100, "");
    var frm = eval("document." + frmStr);
    frm.target = frmStr;
    try{
        frm.submit();
    }catch(e){}
}









function visit() {


	try{
		var ajax = new Ajax("/MyCafeVisit.nhn", {
			suspend : "true",         
			method : "POST",
			params : { "clubid":30483228,"usingCounter":false,"ceremonyCheckNeeded":false },      
			onLoad : cafeVisitCB
		});
		ajax.request();
	}catch(e){
	}



}
function cafeVisitCB(res) { 
	if(res.status==200) {
		try{ 
	
			var counter = eval('(' + res.responseText + ')');
			
			if(counter == null || counter == 'undefined') {
				return false;
			}
			
		
		
		
				if(counter.visitEventResult != null && counter.visitEventResult.win == 'true') {
					open_window('/CafeEventPop.nhn?clubid=30483228&eventtype=2&eventresult='+counter.visitEventResult.condition+'&eventarticle='+counter.visitEventResult.eventArticleid, 'cafe_event_popup', 330, 250);
				}
				if(counter.ceremonyPassed == 'true') {
					open_window("/CafeCeremonyProcess.nhn?clubid=30483228&m=pass","cafe_ceremony_pass", 450, 200);
				}
		       
		
			if(counter.notiList != null) {
				for (var i = 0; i < counter.notiList.length; i++) {
					if (counter.notiList[i].exposeAll == 'true' || counter.notiList[i].exposeCafe == 'true') {			
						document.notifrm.action = counter.notiList[i].param2;
						document.notifrm.noticode.value = counter.notiList[i].noticode;
						document.notifrm.comment.innerText = counter.notiList[i].message;
						
						notiAlert('notifrm');
					}
				}
			}
		}catch(e){
		}
	} 
} 

LH.add("visit()");

Function.prototype.bind = function(){
    var f = this, a = $A(arguments), object = a.shift();
    return function(){
        f.apply(object, a.concat($A(arguments)));
    }
};

function callAppView(componentid, appId) {
    var ajax = new Ajax("/AppCafeViewAjax.nhn?clubid=30483228&appId="+appId, {
        suspend : "true",
        onLoad : appViewCallBack.bind(window,componentid,appId)
    });
    ajax.request();
}


function appViewCallBack(componentid, appId, res) {
    $(componentid).innerHTML = '';
    $(componentid).innerHTML = res.responseText;

    try{
        parentResizeIframe('cafe_main');
    }catch(e){}
}














LH.add("callMemberNews('visit');");
LH.add("parentResizeIframe('cafe_main')");
</script>



<form name="notifrm" method="post" action="https://cafe.naver.com/dgresweb">
    <input type="hidden" name="clubid" value="30483228">
    <input type="hidden" name="noticode" value="">
    <textarea name="comment" style="display: none;" title="댓글 팝업"></textarea>
</form>
<script type="text/javascript">
    oOneToOneChatLauncher.setIsCafeMember(true);

	function initAutoAndRight() {
		// AjaxUI
		// 자동출처 기능의 사용여부를 두번째 파라미터에 지정합니다.
		AutoSourcing.init( 'post_%id%' , false );

		if (false==true) {
			blockMouseRight();
		}
	}
	LH.add( "initAutoAndRight()" );


    
    if ($Agent().IE) {
        // Ajax.initFlash("/common/flash/ajax.swf");
    }
</script>
<script type="text/javascript">
	// CAFESUS-7781 by laziel
	var goFitter;
	var gnFitted = 0;

	function fitFrame(){
		if(gnFitted < 10){ // 0.5초씩 10회
			parentResizeIframe('cafe_main');
			goFitter = window.setTimeout('fitFrame()', 500);
			gnFitted++;
		} else {
			stopFitFrame();
		}
	}

	function stopFitFrame(){
		if(goFitter){
			Event.unregister(window, 'load', fitFrame);
			window.clearTimeout(goFitter);
			goFitter = gnFitted = null;
		}
	}

	Event.register(window, 'load', fitFrame);
	Event.register(window, 'unload', stopFitFrame);

	var bTablet = false;
	var oTabletHandler = new TabletHandler(bTablet);


var cafenameTitle = "대구그린웹디반응형";
LH.add(changeTitle(cafenameTitle + " : " +  "네이버 카페"));
LH.add(initTopLayerQuery());



</script>




<script type="text/javascript">



	function showDenyNamelessLayer() {
		if(confirm("실명 확인 회원만 가입이 가능합니다. \n 실명확인 페이지로 이동하시겠습니까?")) {
            redirectToCertPage();
		}
	}




function hideDenyNamelessLayer() {
	document.getElementById("denyNamelessLayer").style.display = "none";
}

function redirectToCertPage() {
	toCertPage(encodeURIComponent(document.location.href), encodeURIComponent('https://cafe.naver.com/dgresweb'));
}
</script>
<div id="denyNamelessLayer" class="cafetype_layer2" style="width:356px;top:0px;left:440px;margin:0;display:none;"> 
	<img src="./html5shive_files/ico_layer.gif" width="25" height="24" alt="">
	<h3><span>대구그린웹디반응형</span> 카페는<br>실명 확인 회원만 가입 받고 있습니다.</h3> 
	<p class="layer_txt">카페에 가입 하시려면 실명 확인을 해주세요.</p>
	<div class="btn_box">
		<a href="https://cafe.naver.com/dgresweb#" onclick="hideDenyNamelessLayer(); return false;"><img src="./html5shive_files/btn_clse_lay.gif" width="47" height="26" alt="닫기"></a> <a href="https://cafe.naver.com/dgresweb#" onclick="redirectToCertPage();"><img src="./html5shive_files/btn_cfm_lay.gif" width="105" height="26" alt="실명 확인 하기"></a>
	</div>
	<a href="https://cafe.naver.com/dgresweb#" onclick="hideDenyNamelessLayer(); return false;" class="btn_close" role="button"><img src="./html5shive_files/btn_close_layer3.gif" width="19" height="19" alt="닫기"></a>
	<iframe frameborder="0" scrolling="no" style="width:400px;" title="빈프레임" src="./html5shive_files/saved_resource(10).html"></iframe>
</div>



<script type="text/javascript">
function showGenderUnknownLayer() {
	document.getElementById("genderUnknownLayer").style.display = "block";
}

function hideGenderUnknownLayer() {
	document.getElementById("genderUnknownLayer").style.display = "none";
}

function redirectToCertPage() {
	toCertPage(encodeURIComponent(document.location.href), encodeURIComponent('https://cafe.naver.com/dgresweb'));
}
</script>

<!-- // 성별 설정 안내 레이어 -->
<div id="genderUnknownLayer" class="layer type2 layer_gender_infomation" style="display: none;">
	<div class="header_title">
		<p class="title_text">
			죄송합니다. 이 카페는<br>
			
			
			회원만 가입할 수 있습니다.
		</p>
		<p class="sub_title_text">
			성별 정보 입력을 위해<br>
			본인확인 페이지로 이동하시겠습니까?
		</p>
	</div>
	<div class="btn_wrap">
		<a href="https://cafe.naver.com/dgresweb#" onclick="hideGenderUnknownLayer(); return false;" class="btn_layer btn_cancel" role="button">취소</a>
		<a href="https://cafe.naver.com/dgresweb#" onclick="redirectToCertPage(); return false;" class="btn_layer btn_confirm" role="button">확인</a>
	</div>
</div>

</body></html>