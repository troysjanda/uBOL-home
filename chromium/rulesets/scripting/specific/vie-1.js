/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".underplayer_btn","#overlay","#xs-addd0","#footer_fixed_ads","#top_oddd","a[rel=\"nofollow\"]",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner",".v4j-header > center","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper","#hide_float_right",".preload","div[style^=\"position: fixed; bottom: 0px;\"]","#popup_banner_beta",".w1e48c4420b7073bc11916c6c1de226bb","#f186fb23a33995d91ce3c2212189178c8","#quang-cao",".toogle-ads",".ads-container","#player + div[id]",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".ai-viewport-1",".float-ck-center-lt","#mp-preload-popup-overlay,\n.separator",".v4j-header > a[target=\"_blank\"]","#wap_bottombanner",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ads-menu,\n.adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".offer__btn","#ab_ctl",".banner-top",".float-ck1,\n.module_ahlaejaba","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".no-auto-popup,\n.qc-adskeeper",".jw-logo",".catfish-ck",".t_logo","#qc_clgt",".advertisement",".gnarty-offads","#fbox-background","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#ds_top,\n.hidden-md.right.col-3","#BaoMoi_HalfPage,\n[id=\"__next\"] > div:has(#BaoMoi_Masthead)",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".container > div[style^=\"height: 228px\"]",".list-dat-cuoc","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".footer-banner",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".widget.widget_text","a[target=\"_blank\"][rel=\"nofollow\"]",".banner-preload",".block-bookmaker.block.most-view","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside","a[rel=\"nofollow sponsored\"]",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".jw-icon[aria-label=\"ĐẶT CƯỢC UY TÍN\"]","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed","#layerLogo",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense","#sideAdsLeft,\n#sideAdsRight,\n.banner-bot-mobile,\n.banner-top-mobile,\n.catfishLoader","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])",".dwpb-action,\n.fixtop","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator","#myModal,\ndiv[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress",".movie-banner","#div-ub-metruyencv_net,\n#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\n.tpm-unit,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".fixed_bottom",".adv_phim","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container",".my-banner",".pcs-modal","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#backgroundPopupp,\n#popupContact","#popup_fi","#adsTopInPageBanner,\n.adsContainer","#popup","#itro_opaco","#catfish","#ads_preload,\n.show.ads-sticky",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".adpia_banner",".popUpBannerBox","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH",".player-vast-blocker","#sponsor-balloon",".box_option","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless","#itro_popup",".sticky-footer",".preload-banner",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox",".code-block-4","#scriptDiv",".adsbygoogle",".add-logo-ads",".pc-catfixx",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget",".banner",".wppopups-whole","#ad_info_top",".footer-info","#topbanner","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2",".navbar-ex8-collapse","[class*=\"_banner\"]","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish",".happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar-mobile",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".bannerads","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate",".banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".Float_ads,\n.container_top[style=\"line-height:0;\"]",".code-block-8.code-block,\n.ez-video-wrap",".ad-image,\n.click-ads,\n.close-button,\ndiv.mrb10","#antiblocker,\n#antiblocker_underplayer","#custom_html-2,\n#custom_html-4,\n.widget_custom_html.widget.widget_text",".box_odds","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay",".modal-backdrop.show","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top",".fade.show",".ibs-bet","div[class*=\"size-\"]","#m-bet",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".qx_135","#wap_bottombannerr,\n.grid-match[style]","#iklan-atas-wrapper",".body_wrapper1",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]",".a--d-wrapper","div.container:nth-of-type(5)",".sponsor-balloon","#ad-floating-right,\n.ad-floating-left","#menubentrai,\n.gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget",".oddsCompany","#right_float,\n[id$=\"float_banner\"]",".link-gold,\n[id^=\"banner\"]","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]",".cp-modal-popup-container,\n.simple-banner","#btn-skip,\n.css-10i5wak,\n.css-15ay2jw,\n.css-15ruvq5,\n.css-1hw7nre,\n.css-1tua4lq,\n.css-8oy100,\n.css-d3rbv3,\n.css-e1zul9,\n.css-iol86l,\n.vjs-banner-btn",".parent.special",".partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#ad_global_below_navbar",".ads-nlp",".b-player",".kqbackground.vien ~ a[target=\"_blank\"]",".baloon,\n.col-sm-10.kqcenter","#sticker",".info-footer:nth-child(4)",".ads-wrapper",".mobile-catfix",".single-box,\n[href^=\"//dooloust.net/\"]","#mp-adbk,\n#mp-adx-b32",".mp-adz",".banner_top","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","lixi88-ads-left,\nmb_catfish_1xbet,\npreload-11bet,\nsobet-ads-right","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nmobile-catfix",".ads_popup",".pc-catfix","#pm_quangcao",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".ad-script,\n.elementor-widget-container > .widget_custom_html",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai","#_AM_POPUP_FRAME","#ad_balloon",".mct_-bet-bot,\n.mmo,\n.mmo-inner",".btn-odds",".show.fade",".fixed-bottom,\n.popup-banners",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit",".sbAdv",".btn-bet-top,\n.item-betnow",".box-host","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".marquee-container",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container",".company","div[id^=\"dnn_\"]",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar","#container-ads","li.special.parent","#catfish_content","#pc-preload-modal,\n.quang-cao",".hd-tube-desktop,\n.hd-tube-mobile",".show.modal",".v4j-watch-1.v4j-content,\nbody > div[class]","#idAdLink",".adLogoPlayer",".PanelScroller.Notices",".expand-static-banner,\n.static-banner",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".sub-menu.d-none.d-lg-flex",".ad-botton,\n.topbanner",".homePageAds","[id^=\"Balloon_\"]",".btn-betnow,\n.ft-box,\ndiv.vebo-sp.container:nth-of-type(7)","#mang",".sticky_bottom",".quangcaomobile","#bar_float_r,\n.quangcaomb",".footer-fixed-br-container","#custom_html-42",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".bg-black.w-full.items-center > .relative.px-2.flex","#AgeModal","#divExoLayerWrapper,\n.sdzhead","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#video_player ~ div[id]",".catfix","#top-banner-pc","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)","#match-child-1",".match-detail__offer",".menu-cuoc-8xbet","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]","[href^=\"https://www.toprevenuegate.com/q7rbxxz1v\"]",".banner-bottom-append-custom,\n.button-in-player-box,\n.footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#tut4ktream_idAdLink",".v4j-header.v4j-content","#bnc1","#bnc0",".xx-ads",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-top-nha-cai",".grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#mobileCatfishz,\n.code-block","#header-ads,\n.catfish-img",".container > .row > center","#qc-kpgame","#ad-container,\n.uniad-player + div[style]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAbove,\n.module3",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#banner-add-lixi88,\n.banner-home",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".sidebar > div[style]","div[id^=\"adsbg\"]","#widget-12",".banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot","#adm-slot-7299",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".ads_660x90,\n[class^=\"ads_\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#closeAds","#hide_catfish","#adx,\n.catfish-bottom,\n.catfish-top,\ndiv.banner-catfish-bottom",".danh-sach-phia-duoi","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".a-header,\n.apu,\n.header"];

const hostnamesMap = new Map([["*",0],["subnhanh.ac",[1,2,3]],["biphim.biz",[1,2,5,6]],["tructiepdabong5.co",[2,31,32,33]],["protruyen2.fun",[2,16,187]],["subnhanh.men",[2,3]],["subnhanhvl.net",[2,3]],["phim.vkoolv.net",[2,11,40,265]],["tutientruyen3.xyz",[2,16]],["dongchill.co",[3,4]],["bichill.biz",4],["coiphim18.com",[4,26,39,68]],["dongphim3s.com",[4,78]],["abtruyen.com",[6,38]],["phimmoi4s.com",[6,136]],["xem.tructiepnba.com",[6,154]],["xemtivi4k.com",[6,183]],["damconuong.net",[6,149]],["ketqua9.net",[6,227,228]],["truyenchu.com.vn",[6,354]],["nghean24h.vn",6],["vidian.wiki",[6,419]],["vbfast.xyz",6],["phim18vn.biz",7],["phim18hd.me",7],["phim18hd.top",7],["javhay.cam",8],["247phim.cc",[9,10,11]],["anivn.club",[9,19]],["boctem.com",9],["phimdinhcao.com",[9,128,129,130,131]],["phimhoathinh3d.com",[9,126]],["phimlongtieng.net",[9,128,129,130,131,133]],["vkooll.net",[9,11,235]],["vuaphimmoi2.net",[9,11]],["motchillz.org",[9,10,39]],["hoathinhtq.tv",[9,126]],["motchill.uk",[9,126]],["vungtv.us",[9,11,269]],["xemphimchill.xyz",[9,10,126,131]],["hotphim.cc",10],["ephoto360.com",[10,82]],["thiepmung.com",10],["ophimhd.vip",[10,235,326]],["phimmoi.win",[10,222,269,420]],["rphang.co",[11,30]],["dailyphimz.com",11],["kenhgamelau.com",11],["listnhacai1.com",[11,104]],["phim18vipb.com",11],["phimplay24h.com",[11,138]],["vn2.sexphim1.com",[11,145]],["phimhay.mobi",[11,26,208,209]],["gunnylau360.net",11],["gunnymienphi.net",11],["mythethao.net",[11,236]],["thiendia2.net",[11,254]],["vuonhoalan.net",[11,268]],["sieudamtv.one",[11,124,272]],["checkgaigoi.site",11],["phim33.tv",[11,310]],["phimno4.xyz",[11,423]],["biphims.cc",12],["biphims.co",12],["tuoinung.cc",13],["vn3.yeusex.cc",14],["huphimtv.com",[14,47,94]],["vn.sexviet1.net",14],["animehay.city",15],["chillhaynet.click",16],["soikeoz.co",[16,23]],["phimtho.net",16],["phimmoinay.tv",[16,114,164]],["hd.viet69.click",[17,18]],["sex.heovl.io",[17,18]],["sexvietz.co",18],["javhd.tech",[18,296]],["heovktgame.club",20],["ketqua247vn.club",21],["keoso.co",[21,23,24]],["quat2vn.club",22],["abysscdn.com",[22,39]],["freeplayervideo.com",[22,39]],["player-cdn.com",[22,39]],["geoip.redirect-ads.com",[22,39]],["bongda365.news",23],["mephimtv.co",25],["phevkl.co",[26,27]],["cliphotvn123.com",26],["gvnvh18.com",26],["hh3dhay.com",[26,89]],["phimtn.com",26],["topsexviet69.com",26],["xem8z.com",[26,182]],["phimhay.in",26],["mobiblog.me",26],["phimvuihd.org",26],["cliphot69.run",[26,291]],["phimtuoitho.tv",[26,312]],["phimsexhay669.co",28],["phimsexvietsub.co",29],["avvietsub.com",[29,50]],["nhentaivn.com",[29,121,122]],["tvhayhd.com",29],["bongdainfoz.net",[29,215]],["phym18.net",[29,121,243]],["veboz.net",[29,60,251,258,259,260,261,262,263]],["conservatoriopaganini.org",[29,194,196,258,259,260,262,263,280,281]],["90phutzz.tv",[29,258,260,262,302,303,304,305]],["xoilac98.tv",[29,33,258,260,262,263,281,303,304,305,319,320]],["xoilaczzv.tv",[29,251,304,305,309,320,321]],["xoivo2.online",[32,167,277]],["vailonxx.co",34],["vlxxhot.com",[34,173]],["123nhadatviet.com",35],["123nhadatviet.net",35],["tuoitre.vn",[35,404]],["tuoitrenews.vn",35],["4rkinggame.com",36],["live.7mvn2.com",37],["tctruyen.com",38],["tctruyen.net",38],["api.anime3s.com",[39,41]],["watch.ezyproxy.com",[39,83]],["p.thoctv.com",[39,148]],["ssplay.net",[39,248]],["play.vnupload.net",39],["xoilac14.org",[39,196,197,198,199,285]],["tructiep.rakhoi14.tv",[39,58,59,60,313]],["bitvtom1000.xyz",39],["ahaphimz.com",40],["vphims.net",40],["phimvietsub.pro",[41,287]],["subnhanh.xyz",[41,45,235,287]],["anime47.com",[42,43]],["doctruyen3qup.com",43],["www.toptruyenvi.info",43],["animetvn3.com",[44,45,46]],["animet.net",[44,45,212]],["appvn.com",47],["doctailieu.com",47],["javtopxx.com",[47,96]],["linkerpt.com",[47,103]],["tinnhac.com",47],["ghienphim11.net",[47,155,221,222,223]],["ophimhdvn3.net",[47,232,238,239]],["soikeo365.net",[47,247]],["vieclam123.net",47],["xemphimviet1.net",[47,155,223,270]],["cungthi.online",[47,147]],["antt.vn",47],["bongda24h.vn",47],["kienthuc.net.vn",[47,379]],["nghenhinvietnam.vn",47],["nhadautu.vn",47],["saostar.vn",[47,388]],["vlxx.xxx",[47,64,108,421]],["asianbookie.com",48],["asideway.com",49],["baomoi.com",51],["m.baomoi.com",52],["baonga.com",53],["blogtruyenvn.com",54],["bluphim.com",55],["bongda12h365.com",56],["thethao12h.me",[56,206]],["bongdalu6.com",57],["tructiep1.cakhia12.com",[58,59,60,61]],["tructiep.cakhia14.com",[58,59,60,61]],["tructiep2.caheo11.live",[58,59,60,61]],["hoatieu.vn",[58,142,174,370]],["mitoms.tv",[60,251,263,308,309]],["canhrau.com",62],["topthuthuat.com",62],["chatboxn.com",63],["chillphim2.com",[64,65]],["zuiphim2.com",[64,65]],["chouc.com",66],["clbgamesvn.com",67],["congthucvatly.com",[69,70]],["phuongtrinhhoahoc.com",[70,141]],["phimhaytv.info",70],["contuhoc.com",71],["www5.cbox.ws",71],["cryptoviet.com",72],["cunghocvui.com",73],["dexuat.com",74],["diadiem.com",75],["ww1.ditnhauvietnam.com",76],["phim.javhdvip.net",76],["doisongphapluat.com",77],["dubaotiente.com",[79,80]],["bongda.com.vn",[80,341]],["giadinhonline.vn",[80,356]],["taichinhdoanhnghiep.net.vn",[80,155]],["nongnghiep.vn",[80,356]],["vietnamnet.vn",[80,409]],["ebookbkmt.com",81],["fsharetv.com",84],["fullcliphot.com",[85,86]],["livetv4.mannhan1.live",[85,200]],["forum.gocmod.com",[87,88]],["www.tiengnhatdongian.com",88],["hoahoc247.com",90],["hoidap247.com",91],["homedy.com",92],["hotruyen.com",93],["javtiful.com",95],["lacaigi.com",97],["laptrinhcanban.com",[98,99]],["yhocdata.com",[99,186]],["lichngaytot.com",100],["lichvannien365.com",101],["link1s.com",102],["lmssplus.com",105],["loigiaihay.com",106],["luotphimtv1.com",107],["webphim2.com",[107,180]],["cdnwp.icu",107],["luotphim1.net",107],["luotphim2.net",107],["luotphimtv1.net",107],["luotphimtv.vip",107],["mehoathinh3.com",[108,109]],["phimmoi2.com",[108,109,134,135]],["phim1080.in",108],["vuighe2.com",[109,177,178]],["mephimtv.com",110],["metruyencv.com",111],["metruyencv.info",111],["metruyencv.net",111],["mmo4me.com",112],["baodauthau.vn",[112,333]],["mphim14.com",[113,114]],["muabanraovat.com",115],["muaxegiatot.com",116],["www.nettruyenclub.com",117],["nhattruyenmax.com",117],["nhattruyenup.com",117],["nettruyenx.com",118],["tin2.news25link.com",119],["nhaccuatui.com",120],["bongda21h.me",[121,203]],["ophimhay.com",[123,124]],["phim202.com",125],["phimbocn.com",126],["truyenhentaivn.com",[126,156]],["hoathinh4k.net",[126,225]],["motchilliv.net",126],["hhtqvietsub.top",[126,135,190,301]],["hh3d.tv",126],["hhninja1.tv",126],["hhtqnet.tv",[126,190]],["animeweb.vip",[126,159]],["hhtq1.vip",[126,159,190,323]],["hhtrungquoc.vip",[126,159]],["phimcuon.com",127],["phimdinhcao.net",[128,129,130,131]],["truyentuanopm.com",[130,160]],["tenovi.net",[130,249]],["phimhaymoii.com",132],["phimlongtieng.com",133],["hhchina.vip",[135,211,301]],["phimnhua.com",137],["phimyeuthichz.com",[139,140]],["truyensextv.com",139],["lxmanga.net",[139,231]],["truyensextv.org",139],["chillphimmoiz.org",[140,279]],["quantrimang.com",[142,143,144]],["vndoc.com",[144,174]],["khoahoc.tv",144],["download.com.vn",144],["download.vn",[144,182,359]],["gamevui.vn",144],["meta.vn",144],["sieutamphim.com",146],["tailieungon.com",147],["tailieuvang.com",147],["giavang.net",147],["romgoc.net",147],["thongtintruyen.com",[149,150]],["animevietsub.io",[149,191]],["thuthuatjb.com",151],["thuthuattienich.com",152],["toithuthuat.com",153],["truyengihotnay.com",155],["truyengihotqua.com",155],["tenmientruyengi.net",155],["thichxemphim1.net",[155,253]],["truyengihotqua.net",155],["truyengihotvay.net",155],["megalink.vip",155],["baoxaydung.com.vn",155],["oj.husc.edu.vn",155],["tienphong.vn",[155,333,397,398]],["toquoc.vn",155],["truyenqqvn.com",157],["truyensieuhay.com",[158,159]],["xemtv.tvhayhd.com",161],["tvso1.com",162],["bongdaso66.net",[162,216]],["blog.abit.vn",[162,194,252,329]],["tvzinghd.com",[163,164]],["vailonxx.com",165],["vaoroi365.com",[166,167]],["vatlypt.com",168],["vesotantai.com",169],["vietcetera.com",170],["vietgiaitri.com",171],["vietjack.com",172],["vsc32.com",175],["vtruyen.com",176],["xem1080.com",178],["webhoctienganh.com",179],["webtretho.com",181],["xosodaiphat.com",184],["yeah1.com",185],["hayghe.info",188],["motphim1.info",[189,190]],["maclife.io",192],["tapchibitcoin.io",193],["live3.90phut10.live",[194,195,196,197,198,199]],["live3.thapcam2.net",[194,199,250,251,252]],["noitu.online",[194,274]],["live.vebo4.net",[196,197,198,199,256,257]],["live2.vebo4.net",[196,197,198,199,256,257]],["mn.mediastation.live",201],["hentaivn.lol",202],["www.gaingon18.me",204],["ngaytho.me",205],["chat.vebotv.me",207],["mephimnhe1.net",[208,232]],["3dchill.net",[210,211]],["bantincongnghe.net",213],["blogkiienthuc.net",214],["chodansinh.net",217],["chotlo247.net",218],["gamenoobz.net",219],["xem1.gavang1.net",220],["gockhuat.net",224],["vn.javbabe.net",226],["ketqua3.net",227],["laptrinhvb.net",229],["linkneverdie.net",230],["phimgichill.net",[232,239,241]],["mitub.net",233],["motchilli.net",[234,235]],["motphimtvi.net",[234,235]],["phimmoichillm.net",[235,242]],["www.o-study.net",237],["phimbo88vn.net",240],["phetruyen.vip",240],["vn.phym18.net",244],["qthang.net",245],["sachmoi.net",246],["zophim.net",248],["tracnghiem.net",255],["live5.xoilac14.org",257],["vietmoz.net",264],["vnexpress.net",266],["vtipster.net",267],["xemphimhdc.net",269],["phimbathu.one",271],["sex.heovl.online",273],["javhd.shop",273],["sex.vlxx.studio",273],["sexsub.online",275],["tut4ktream.online",276],["btcvn.org",278],["doctruyenchufull.org",282],["traderviet.org",283],["xemtivingon.org",284],["keonhacai5.vip",[284,324]],["nhacsong.pro",286],["sexdacbiets.pro",288],["phim.sexmup69.pro",288],["sex.xemphimhay.pro",288],["tuoi69z.pro",289],["viet69.red",290],["sieukhung.site",292],["bestx.stream",293],["filemoon.sx",294],["ws-client.gavang.tech",295],["sex.phe.to",297],["cliphotvn.2tenz.top",[298,299]],["hls.playerfb.xyz",299],["phim.heo69.top",300],["buomtv.tv",306],["hhhkungfu.tv",307],["phimdacap.tv",311],["sexhay2024.tv",314],["tuoi69.tv",315],["vieclam.tv",[316,317]],["xskt.com.vn",317],["vlxyz.tv",318],["gocphimvn.vip",322],["khiphach.vip",325],["2banh.vn",327],["2game.vn",328],["afamily.vn",330],["sport5.vn",330],["m.afamily.vn",331],["autodaily.vn",332],["xehay.vn",[332,416]],["cafebiz.vn",334],["cafef.vn",335],["ttvn.toquoc.vn",335],["careerlink.vn",336],["chap.vn",337],["24h.com.vn",338],["autopro.com.vn",339],["baohaugiang.com.vn",340],["congan.com.vn",342],["daklak24h.com.vn",343],["dantri.com.vn",344],["game4v.com.vn",345],["nld.com.vn",346],["tamlinh247.com.vn",347],["tapchikientruc.com.vn",348],["thanhtra.com.vn",349],["thoidai.com.vn",350],["petrotimes.vn",350],["www.thuocbietduoc.com.vn",351],["thuongtruong.com.vn",352],["thuysanvietnam.com.vn",353],["voh.com.vn",355],["congluan.vn",356],["congly.vn",357],["thitruongtaichinhtiente.vn",[357,396]],["danviet.vn",358],["kienthucykhoa.edu.vn",360],["eva.vn",361],["fshare.vn",362],["game24h.vn",363],["game8.vn",364],["gameio.vn",365],["gamek.vn",366],["soha.vn",366],["genk.vn",367],["vnews.gov.vn",368],["gplay.vn",369],["hoc24.vn",371],["hosocongty.vn",372],["kenh14.vn",373],["kinhtedothi.vn",374],["minhngoc.net.vn",374],["vn-z.vn",374],["lazi.vn",375],["lucloi.vn",376],["muare.vn",377],["myeva.vn",378],["phunumoi.net.vn",380],["nhipcaudautu.vn",380],["nhacdj.vn",381],["nhatrangclub.vn",382],["olug.vn",383],["phapluatplus.vn",384],["qdnd.vn",385],["reatimes.vn",386],["rung.vn",387],["sharecode.vn",389],["softonic.vn",390],["m.soha.vn",391],["techrum.vn",392],["thanhnien.vn",393],["thethao247.vn",394],["thethaovanhoa.vn",395],["tinnhanhchungkhoan.vn",398],["tiin.vn",399],["timdaily.vn",400],["tinhte.vn",401],["tintucvietnam.vn",402],["truyenfull.vn",403],["tuyengiao.vn",405],["tvphapluat.vn",406],["v4u.vn",407],["vietfones.vn",408],["vietq.vn",410],["viettelstore.vn",411],["voz.vn",412],["vtc.vn",413],["vungoctuan.vn",414],["webthethao.vn",415],["yellowpages.vn",417],["znews.vn",418],["pl-rk.livefb.xyz",422],["plvb.xyz",424],["truyen18.xyz",425]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
