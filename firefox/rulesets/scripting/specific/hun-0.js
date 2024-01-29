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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[src*=\"/banner/\"]","[id*=\"float\"]","#article_end_popup,\n.banner.boxed","#a1,\n#a2","#onetrust-banner-sdk","#eu-cookie-law,\n#facebook-likebox-8,\n.wpcnt","[class*=\"advert\"]","#facebook-sharebar,\n#webaruhaz-ajanlo,\n.-contentTop,\n.a2blckLayer,\n.ctsGadx,\n.hashtags,\n.wrap,\nTD[id*=\"l_sponsor\"],\n[class*=\"adv_\"]","[class*=\"adtext\"]",".fb-exit-popup-container","#fanback","#permission-bar,\n.fu-container,\n.sample,\n[href*=\"hirdetes\"],\na[href*=\"adf.ly\"],\na[style=\"text-decoration:none;\"],\ntable[bgcolor=\"darkgray\"]",".content-list.content-body > .recommendation-holder,\n.content-text > .recommendation-holder,\n.left-column.col-md-8.col-sm-12 > .recommendation-holder,\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(1),\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(2),\n.top-column.col-xs-12 > .recommendation-holder,\ni > .recommendation-holder:nth-of-type(1),\ni > .recommendation-holder:nth-of-type(2)",".tqWLsnEEqeEw-bg,\n[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.85098); display: block;\"]","[style=\"background: rgb(255, 255, 255); max-width: 720px; z-index: 9999999; opacity: 1; visibility: visible;\"]","[data-zadtype=\"billboard\"],\ndiv.mobileArticleAds","DIV[id*=\"banner\"]","[class*=\"banner\"]","[app=\"tibrr-cookie-consent\"],\n[class^=\"k\"][class*=\"-container\"][class*=\"-2\"][class$=\"-hide\"]",".bpkad","A[href^=\"http://goo.gl\"]","[class*=\"reklam\"]","[id*=\"reklam\"]","[class*=\"pea_cook\"]","[style=\"width:300px;height:250px;\"],\nscript[data-cfasync=\"false\"]","[class*=\"advertisement\"]","[class^=\"ad-\"]","#text-3","#kpopup","#sliding-popup","[id^=\"block-views-block-banners-\"]","[id*=\"banner\"]","[id*=\"etarget\"]","[class^=\"ads\"]","[id^=\"adchange\"]","#alsobox","#cookieinfo","DIV[id*=\"col_2\"]","[id*=\"advertisment\"]","#sutik",".bannergroup","#_iph_cp_popup,\n#cookie-bar,\n#cookie-notice,\n#cookie-window,\n#cookiebar,\n#hirdetes,\n#hirdetesek,\n.cc-banner,\n.cc-banner-wrapper,\n.cc-window,\n.cc_banner,\n.cc_banner-wrapper,\n.cc_window,\n.hird,\n.hirdetesek,\n.leet_product_banner_container,\n[class*=\"overlayBg\"],\nins[id^=\"aswift_\"]",".hirdetes","#cookie-law,\n.banner_middle",".ads_show_ad_title",".banner-wrapper",".banner-container","#overlay_readers_letter,\n#stickyHomePageRecommender,\n#webPushPopup,\n.a-hirstartRecommender,\n.m-donationBottomLine,\n.spklw-post-attr[data-type=\"ad\"],\n.widget-mini-article","[id*=\"-banner-\"]","#text-5,\n#text-6","#galsoreklam,\n#oldalreklam,\n[href=\"https://777blog.hu/reklamblokkolo-kikapcsolasa/\"],\ndiv#rechtangle.widget:nth-of-type(5)",".AdW","#cookieconsent","#cookieBox,\n#cookieBox_bg","#cookies-alert,\n[class^=\"zone_\"]","#g0,\n.az-layer,\n.big_badge,\n.floating-help-wrapper","[class*=\"ads\"]","#ajanlo",".flyout","[style^=\"min-height: 128px; background: url(\\\"https://static.agroinform.hu/static/site/img/hirdetes_up.png\\\") no-repeat center bottom -1px;\"]","#alapjarat_cikk_fekvo_1,\ndiv.header + .clearfix + .clearfix","#block-block-16,\n#block-block-22,\n#block-views-ajanlo-block,\n#sticky_footer",".mailingActionC",".ui-widget-overlay","[aria-describedby=\"cookies-dialog\"]","div.cikk_zona,\ndiv.rightside > iframe",".sidebar1 > div:first-child,\n[id^=\"hird_\"]",".mask,\n.showLink.reveal","[class*=\" adH\"]","#cookie-disclaimer,\n.brandbox",".tamogatoi,\n.wp-caption","#facebookPopUp,\n#facebookPopUpBackground,\n#szechenyi-container,\n.plus-wrapper","#_cikk_jobbhasab_2,\n#_cikk_jobbhasab_3,\n#_fooldali_header_alatti_banner,\n#_fooldali_header_banner,\n#_fooldali_jobbhasab_2,\n#_fooldali_jobbhasab_3,\n#custom_html-18,\n#custom_html-19,\n#custom_html-2,\n#custom_html-20,\n#custom_html-21,\n#custom_html-23,\n#custom_html-26,\n#custom_html-7,\n#custom_html-8","#custom_html-10","[class*=\"Advert\"]","[class*=\"etarget\"],\n[class*=\"szamlatabla\"]","[class*=\"hirdetes\"]","#CybotCookiebotDialog",".ads","#adds","script + ins + h5",".cookie-notice-container","#article-2,\n#block-block-30,\n#block-block-60,\n.region-content-1-1 > div:last-child,\n.region-content-1-1 > div:nth-child(-1n+3),\n.region-content-1-3 > div:nth-child(-1n+2),\n.region-content-1-3 > div:nth-last-child(-1n+5),\n.view-banner-blokkok",".addd,\n.bannpos,\n[aria-label=\"cookieconsent\"]","#cookie","#popupajanlo","#total,\n.category-section.ad,\n.minisite","app-article-subscription-box,\napp-newsletter-modal","main + .ok-prerender","iframe[src=\"https://tunderszepek.baon.hu/tunderszepek-banner\"]",".widget_media_image",".pea_cook_wrapper","[class*=\"adcikk\"]",".tapeta.fixed,\n[data-ai],\nblockquote","[id*=\"sponsor\"]","#karrier,\n.modal,\n.modal-dialog",".modal-backdrop","#footerLogos,\n#pe_confirm,\n#qc-cmp2-ui,\n#underArticleAdvertisement,\n[id*=\"-ad-\"][data-x=\"1\"],\n[id^=\"div-gpt-ad-\"] + [class$=\"widget\"],\n[style=\"width:100%;text-align: center; margin-bottom:15px;\"],\na[href*=\"gemius\"],\nbody > .extraContentSection:nth-of-type(-1n+3)","#articleOfferFlag","#pe_confirm_optin_6,\n#qc-cmp2-container","#ad-cikk1,\n#ad-cikk2,\n#ad-fekvo1,\n#ad-fekvo2,\n#ad-jobb1,\n#ad-jobb2","#pe_confirm_optin_1","#taft,\n.living-earth,\n.meropixel-hide,\n.share,\nDIV[class*=\"_ad\"],\nDIV[class*=\"adv\"],\nDIV[class*=\"blh-billboard-ad\"],\nDIV[id*=\"wAdBox\"],\n[class*=\"follow_promo_figure\"],\n[id*=\"cp_popup\"]","[class*=\"adbox\"]","[id*=\"Banner\"]","DIV[class*=\"etarget\"]","#fbox-background","#lightview1,\n[class*=\"popupBanner\"]","#cookie_policy,\n#lw_bg1,\ndiv[style^=\"height:\"]","#newASZFLayer","#onetrust-consent-sdk,\n.o-banner--hirdetes",".real-estate-wrapper",".cookie__wrapper,\n.subscription-box,\nA[href=\"/jatek\"],\nA[href=\"/nyarimagazin\"],\n[class*=\"__ad\"],\n[class*=\"adContainer\"],\na[target=\"_blank\"][class=\"videa-wrapper\"],\niframe[src*=\"koponyeg.hu\"]",".newsletter-box","#wpgtr_stickyads_textcss_container,\n.extpp-container,\nbody > center:first-child,\nbody > center:first-child + br,\nfont + center","#onesignal-bell-container,\n#onesignal-slidedown-container","#custom_html-11,\n#custom_html-6,\n#media_image-17,\ndiv[style=\"margin-top:20px;\"]","#upprev_box","div.bpkad","#full-desktop,\n#full-mobile,\nheader + div[style^=\"margin:\"]","#cooker_container,\n.banner_main_page_wrapper","#cadre_alert_cookies,\n#pa-push-notification-subscription,\n#sp-right > .sp-column > .sp-module.hidden-mobile,\n.banneritem","[class^=\"adsense\"]",".advert,\n.occsz-banner",".cookie-box-cnt,\n.infobar-cnt","#cookie-policy-content,\n.ad-article-comment,\n.ad-article-end,\n.ad-article-inside,\n.ad-article-inside-automatic,\n.ad-article-under-lead,\n.ad-content-top,\n.ad-header-after > *,\n.ad-header-after-article,\n.share-article","#web-push-popup","[class*=\"-adv\"]","#CookieAcceptLayer,\n#bdism1,\n#cikkajanlo,\n[class*=\"adv-\"]",".art-sidebar1,\n.art-sidebar2","#fadeandscale_background,\n#fadeandscale_wrapper",".enews-article-content .endless-shared-area",".sb-right > div:first-child","#cookie-law-info-bar","#banner_sav","#headerBanner,\n.col-md-4.blog-sidebar:nth-child(even),\n.slidingBanner,\n.tablet-advert,\n.totop,\n.widgetDefault",".billboard","#billboard,\n[class*=\"prbox\"],\n[id^=\"linkbox_article\"]",".region-header.region",".jquery-modal.blocker.current",".cikk-halfpage.t-article-container_sidebar > div:first-child,\n.menu-sponsor_link,\n.rovat-halfpage.t-rovat-container_sidebar > div:first-child,\n.tctk,\n[id*=\"szponzoracio\"],\niframe",".cikk-vegi-ajanlo-reklamok","[id*=\"hirdetes\"]","#interstitial",".adbd-layer","body > section:not(.site-header):not(#toreskar):last-of-type","[class=\"td-a-rec td-a-rec-id-content_top  tdi_62 td_block_template_1\"],\n[class=\"td-a-rec td-a-rec-id-header  tdi_53 td_block_template_1\"]","[id*=\"_ad\"]","[class*=\"ad_\"]","[id*=\"ad_\"]",".detailRightAds,\n.min700height-desktop,\n.rltd_container [id^=\"rltd-ad-\"],\n[class*=\"ad-\"],\n[class^=\"ads \"],\n[id^=\"ad-\"],\n[style=\"min-height: 300px;\"],\na[title=\"Hirdetés\"],\ndiv.wrapAds",".ibb-banner-decor","[id^=\"ad_\"]","div[class*=\"contentBanner\"],\ndiv[style=\"text-align: center; margin-bottom:10px; position: relative;\"]",".sgpb-popup-dialog-main-div-wrapper",".penci-wrap-gprd-law,\n.sgpb-popup-overlay",".rckaexclude",".super","div.cookieLayer,\ndiv.supportModal","IFRAME","#article-recommend-popup,\n.article-page + .b-section,\n.article-page > .b-section,\n.article-reaction-holder + .b-section,\n.cookie-popup,\n.overlay-popup,\n.pull-left .b-section,\n.share.jssocials + .b-section,\n.top-section + .b-section","[class*=\"_adv \"]",".popupunderlay,\n[class*=\"adPlace\"],\n[class^=\"goAdverticum\"]","[class*=\"adzone\"],\ndiv[id*=\"elementor-popup-modal-\"]","#catapult-cookie-bar","#darklayer,\n.views-field-nothing,\n[class*=\"_ad \"],\n[id*=\"_ad-\"]","#femina-shop-ajanlo-slider,\n.doboz_harmados,\n[class*=\"kepeslinkes\"]","DIV[class*=\"reklam\"]",".crp_related,\ndiv[id^=\"forbesad\"],\np + [class*=\"-bekezdes-utan-\"]",".foot-logos.col-md,\n[href=\"https://www.barion.com/hu/vasarlok/arak-vasarloknak/\"],\na[href=\"http://consumer.huawei.com/hu/phones/mate10series/\"]","#accept-container","[class*=\"banners\"],\n[href*=\"hirdetesek\"]",".etarget",".facebook-layer-box","#content-container > div > a:not([class*=\"MailListItem-\"]),\n[class*=\"magnum\"]","[class^=\"container-\"][class*=\"adZone\"]",".grey-popup-layer","#background_ad_top","#right > .xabrew300.box",".partners",".spleft,\n.spright","[class$=\"responsive-300px-600px\"],\na[onclick*=\"/muvelet/hozzaferes/kapcsolodas.php?id=\"],\nbody > style","#thanks > .hlist.nohead,\n.xabrecontainer,\na[onclick*=\"$.ajax\"],\ndiv[class*=\"xabre-responsive\"]:not([class*=\"-980px-139px\"])",".roadblockcont",".act_hun,\n.adt_hun","[id^=\"ibb-\"][class*=\"banner\"]",".leavingPopupLayer","#partnerek","[id^=\"zone\"]",".ad",".box-wrapper > .box-actual-magazine + .box-html","#adryf,\n.rltdwidget,\n[href^=\"https://www.webminute.hu\"],\n[id*=\"aswift\"],\ndiv.reklam_jobbra,\ntd[style=\"width: 10px;\"]:empty","#cookiekezeles","#banner,\nDIV[class*=\"Advert\"]","[class*=\"contentBanner\"]",".accept-cookies","div[id^=\"jqueryFloating\"]","#cookie_bar,\n#infobar","#banner2016kormanyhu,\n[id*=\"banner_1_29_\"]",".catch-click",".banner-widget-container","[class^=\"moove-gdpr-\"]",".Ad,\n[id*=\"Ad_\"]",".Clear,\nDIV[id*=\"AdContainer\"]","#top > .p-0.container","#ajanlo_box_ah,\n#lightwindow_overlay","#player,\n#superbox",".szkozepkis","#kapubanner,\n[id*=\"_ads\"],\n[id^=\"cookieconsent\"]",".box_remote,\n.fbcont2,\n.fbfollow,\n.fbshare,\n.h-sideboard_2,\n.kalkulator","[id*=\"hirdet\"]","#cookiewarnbar","#nyeremenyModal,\n[class=\"modal-backdrop fade show\"],\n[id*=\"popup\"]","DIV[id*=\"Banner\"],\nDIV[id*=\"zone-wallbanner-header\"]","#gyuri1,\n#gyuri2","[class*=\"billboard\"]","#cookieAlertBox,\n.banner_container,\n.banner_widget,\n.sy-box","[class*=\"-ad-container\"]","P[class*=\"banner\"]","[id^=\"advert\"]","DIV[class*=\"banner\"]","DIV[class=\"module noheading\"],\nEMBED","#tetszett","[data-adblockonly]","#cucc,\n#layerbanner","#custom_html-3","#euro-event,\n#sponsors,\n.gdpr-cookie-notice","[class*=\"_ad\"]","#lebegodoboz,\n#szupertorony,\n[id*=\"-reklam\"],\n[id*=\"fancybox\"],\n[id^=\"hirdetes_jobb\"] + div,\n[id^=\"hirdetes_jobb_2\"] + div + div,\n[id^=\"szuperbanner_\"]","[id^=\"hirdetes\"]","#webpushSelctorFormId,\n.adcaption,\n.article-menu.panelgap,\n.article-otherelements-container content,\n.articlebox.clear.sidebar-ajanlat,\n.block-ms-box2,\n.cimlap-ajanlat.elem-1180.cimlap-grid-elem,\n.hosting,\n.hvg_push,\n.jobline-palyakezdo-feed,\n.selectWidget,\n.support-stripe,\n[class*=\"adtype-\"],\n[class=\"articleitem clear smallimage imgleft\"],\n[class=\"site-scarab-bottom open\"]","[class*=\"adsense\"]","[id*=\"-ad-\"]",".parallax_bottom,\n.parallax_top","DIV[class*=\"ad_\"]","#announcement,\n#cikktoolbaradomany,\n#cookiealert,\n#sidebar > table,\n.cikkszovegaction,\n.cikkszovegakcio,\n.kommentadomany,\nDIV[id*=\"hirdetes\"],\nbody > div > a[target=\"_blank\"]","[class*=\"hird-\"],\n[class*=\"hird_\"],\na[data-bs-content*=\"(hirdetés)\"]",".banner",".article-cards-inlist-ad,\n.article-text > p,\n.footer-banner-row,\n.iho-adzone,\n.social-icon","[class*=\" ad\"]",".topAdv",".shopline-box,\n.travelo-box",".cikk-vegi-ajanlo-reklamok-container","[class*=\"ad-container\"]","#ad_null_position,\n#also_bannerek,\n#index_shopline","#ot2015,\n#rightcoltd,\n#site_header","#main div[class*=\"banner\"],\n#sidebar > div[class*=\"banner\"],\ndiv.read div[class*=\"banner\"]",".notification-popup","#_ao-cmp-ui,\ndiv[data-qa=\"oil-Layer\"]","#bottompopup","#leftPoszter-section,\n#salePoszter,\n.home-section-banner,\n.u-hide\\@mobile.flag-wrapper--fill.flag-wrapper.grid-col-lg-1-4.grid-col-md-1-2.grid-col-1.article-list__item","div[class=\"tl-state-root tve-leads-ribbon tve-trigger-hide tve-tl-anim tve-leads-track-ribbon-1 tl-anim-slide_top tve-leads-triggered\"]","#cookie-law-info-again","#joylike,\n[class*=\"Adverticum\"],\n[class^=\"adIn\"],\n[class^=\"adPlace\"]","#cookie_container","[data*=\"banner\"]","#header","#cookieSpan,\ndiv.bottom_sticky_banner","#check-also-box,\n#fejlec-hirdetes,\n[id^=\"cikken-beluli-hirdetes-\"]","#cookie-consent-dialog","#above_article_banner,\n#advertisements,\n#below_content_banner,\n#left_banners,\n#right_banners,\n#social,\n#wide_banners,\n.article_banner,\ndiv.subscribe_module,\ndiv[class=\"fb-like fb_iframe_widget\"]",".cookies-message-container","#cookieAcceptanceContainer","[id*=\"advert\"]","#nap_ajanlata,\n.tamogatott,\n.vippr,\nDIV[id*=\"billboard\"],\nDIV[id*=\"linkbox\"],\n[class*=\"banner-\"],\n[class*=\"offer prbox\"],\n[class*=\"pr--\"],\n[class^=\"pr-\"],\n[class^=\"prbox\"],\ndiv.endless-shared-area",".qc-cmp2-container","#vshu-box,\n.integralt_felso_zona,\n.recommendationzone,\n[id*=\"adsense\"]","div[class*=\"banner\"]",".kapu,\n.mini_slider_div0","[class*=\"Banner\"]","div.accept-cookies","[name*=\"banner\"]",".adbg",".category > #prodstop1,\n.single-post > #prodstop1","#current_promotions_block,\n#skin-left,\n#skin-right,\n.box-general.clearfix,\n.discount.clearfix.nonLpk,\n.fullwidth.current_promotions_block","#beuszoAjanlo,\n#cikkalatti,\n#floating-recommendation,\n#mc-holder,\n#ovasar,\n#pr-box,\n#right-ecom,\n#top,\n.col-visible-xl.r-side.col-xl-4,\n.email-under-article,\n.hird300,\n.kiskepes,\n.magnum,\n.panorama-wrapper,\n.pr-item,\n.spar,\n.szoveges,\n[data-module-name=\"hirlevel\"],\n[data-module-name=\"ingatlanbazar\"],\n[data-module-name=\"koponyeg\"],\n[data-module-name=\"videa\"],\n[id^=\"szponz-\"],\n[size=\"300x600\"],\ndiv[class$=\"widget\"]","#ac",".newsletter-layer,\ndiv.article-recommendation-zones","#accept-cookie","#page-top",".cikkhirdetes,\n.sticky1hirdet","[class*=\"adserver\"]","[class*=\"-ad\"]","#navi_btm + div,\nimg[src^=\"https://logout.hu/muvelet/hozzaferes/kapcsolodas.php\"]",".nobanner,\n[class^=\"banner_\"],\n[id^=\"banner_\"]","#exposeMask","#page_PopupContainer",".goAds,\n.visible-lg.container","#eucookielaw,\n.ad-magnum,\n.ad-verticalfull,\n[class*=\"simpleads\"]","#block-block-12,\n#block-block-19,\ndiv.gdprBoxContainer,\ndiv.promo-bar",".modal[role=\"dialog\"],\napp-facebook-popup,\napp-newsletter-popup","[class*=\"articleBanner\"]","#cboxOverlay,\n#colorbox","#cookie-msg","#floatingBox,\n.ui-floating-message,\n.wsp-wrap,\n[class*=\"tBanner\"]",".banner_row,\n.proposer,\n.read_vs,\n.rightbanner",".cookie-bar,\n.mrc-bnr-plchldr,\n.popup-wrap,\n[class^=\"banner\"]",".sticky",".article-textlinkbox","#ad-image-big,\n#fadeandscale,\n#portfolioEzekIsErdekelhetnek,\n#recipeAndRelateds > h2.noprint,\n#sidebar_ads_box_2,\n.billboard-cikk,\n.hir-fekvo,\nDIV[class=\"billboard fr\"],\nDIV[class=\"fej-elso-sor cf\"],\nDIV[id*=\"-ad-\"],\n[class*=\"ads_box\"]",".allow-cookie-stripe","#app-advice,\n#app-commission,\n.x-marketing",".cim-reklam,\n.widget_text.widget.widget_custom_html",".om-holder","[class*=\"box ajanlo\"],\n[id*=\"ctnet\"]",".adbox","#sticky,\n.b336","[align=\"center\"] > a[href*=\"banner\"],\n[class^=\"ui-dialog\"]",".fb-page-cont,\n.topHorizontalBanner,\n[src^=\"/public/img/efi/\"]","#mobilinstruments,\n#stickyfooter,\n.cikkajanlo,\n.totalcar,\n[id*=\"billboard\"],\na[href^=\"https://bit.ly/\"]","#custom_html-4,\n#primary-sidebar,\n.right","#sidebar",".banner-bottom",".ckwrap,\n.list-item.has-banner","#didyou,\n#wallpaper_left,\n#wallpaper_right,\n.bet365_connect,\n[class*=\"_szponzor_\"]","[class^=\"ad_\"]","[class*=\"adlabel\"],\n[class*=\"leftlogo\"],\n[id*=\"adserver\"]","div#show_news_box,\ndiv.cookie-message","#tab-widget",".m-fbPopup",".m-pcPromoArticlePointsLayer,\n.m-pcPromoFooterLayer,\n.rubAd,\ndiv.m-articleStickySocial,\ndiv.m-breakingLayer","[data-placeholder-caption=\"hirdetés\"]",".noprint,\nDIV[class*=\"ad-container\"]","#cookie-consent",".colorbox-cookiepolicy","#datasheetNavHelp","#slidebox,\n.highlighted-banner","#detect + .wrapper","[class*=\"ad-warning\"],\n[class=\"ad-blocked\"],\n[class=\"p-t-10 ad-blocked\"]",".col-xl-8 + aside.col-xl-4.col-visible-xl,\n.mw-allow-notification-dialog,\nsection.spar","div.facebook-layer-box","[class^=\"ad\"]","#zone-halfpage,\n#zone-roaddblock,\n.centercol.sponsor","#zone-titleheader,\n.slidein.popup.closeablenotification.scripted,\n.zone[data-zoneid]","#cookieconsentbar,\n#subscribepopuppanelalign",".banner-content,\na[href*=\"banner_click\"]","#kutu","#recommend,\n.frame-center,\n[class^=\"f10\"],\n[class^=\"grbox\"]","[class^=\"ads-\"]",".justClassBanner","#cikkertesito-reg-form,\n.banner.clearfix,\n.inner","#pushpushgo-container,\n.ad-container,\n.ads-container,\n.ph-flexi-box-wrap,\n.ui-dialog[aria-describedby=\"newsletter-modal\"],\n.ui-widget-overlay.ui-front,\n[aria-describedby=\"dialog-welcome\"],\n[class*=\"adbreak\"],\n[class*=\"c_banner\"],\n[class*=\"placeholder\"],\n[class=\"ph ph-responsive-wrap\"],\n[data-analytics-value]","#popup",".articleMetadata,\n.container.css-table > div:not(.container),\n.edgebox-widget.show,\n.introjs-helperLayer,\n.introjs-overlay,\n.introjs-tooltip,\n.port-adbd,\n[class*=\"_spon\"],\n[class=\"advert fix-advert\"]","#BlockCikkajanlo,\n#mymodal2,\n.footer--partners,\nDIV[id*=\"adocean\"],\n[data-qa=\"oil-Layer\"],\n[data-qa=\"oil-full\"]",".lead_alatti_txt,\n.mfor_cikk_beuszo,\n.news-page > div[style*=\"background: #FFF900;\"]:first-child","#newsletter_footer,\n#twister-banner,\n.cookie-layer","#fb_like_modal",".popup","#top > div:first-child",".banner__ad","[class*=\"banner \"],\n[id^=\"overlay\"]","[aria-describedby=\"newsletter-modal\"],\n[class*=\"adv--\"]","#wallpaper,\n.wallpaper-link","#psCookieNotification,\ndiv.ad-sm-text",".adblock-confirm,\n.newsletter-modal",".std0,\nIMG[src=\"images/hirdetes.gif\"]","#gdprCookieWrap,\n[class*=\"AdWrap\"],\n[id*=\"AdWrap\"]","#enableCookieDiv","[id*=\"ctnet_ad_\"],\ndiv[class*=\"ad \"]","#fhr-cookie-bar,\n#fragment,\n[class*=\"-ad-\"]","#text-9,\ndiv.sprtrvs-ad,\ndiv.tt-shortcode-1,\ndiv.tt-shortcode-2","#menusimple2 + div,\ndiv[style=\"width:100%;height:14px;text-align:left;font-size:9px;letter-spacing:3px;color:#5F5F5F;border-bottom:1px solid #CCC;margin: 10px 0 5px 0;\"],\nscript[async] + [data-widget-id]","#push-notification,\n.kezdo-kereso,\n[box-name=\"Hirdetés\"],\n[class*=\"Adv\"],\n[class*=\"peelgame\"],\n[class^=\"adact\"],\n[class^=\"adx_\"],\n[id*=\"Advert\"],\n[id*=\"peelgame\"],\ndiv.container.banner-container.left,\ndiv.container.banner-container.right,\ndiv.container.banner-container.wide > *","#google-display","[src*=\"hirdetes_\"]",".cikk-hir,\n[class*=\"googlebox\"],\ndiv[class*=\"adserver\"],\ndiv[id*=\"kirakat\"],\ndiv[id*=\"rightad\"]","[class=\"wp-container wp-top\"]","div.fb_shares",".modal_popup","[src^=\"/uploads/images/banners/\"]",".active.popup-screen,\n.popup-box,\n.stream-item,\n[id^=\"stream-item-\"]",".rightContent + [style]","#cookie-policy-bar,\n#hatterkep,\n#rovatpromo,\n.adslabel,\n[class^=\"ads_\"],\n[class^=\"ads_\"] + .clear,\niframe[class*=\"my-fbrecommend\"]","#ecom_pr,\n.ad-wrap-100,\n.jobb_300","#magnum","[class*=\"google-cikk\"]","[style=\"height: 250px\"]","#app-cookie-policy","div.banner",".kiemelttartalombox_feher","div[id*=\"hirdetes\"]",".border-top.p-4.bg-8.cookie-alert__inner",".spu-bg,\n.spu-box,\n[style=\"margin: 8px 0; clear: both;\"]","[id*=\"_bnr\"]",".sgpb-theme-3-overlay.sgpb-popup-overlay-1402.sgpb-popup-overlay,\nimg[class*=\"sgpb-\"]",".cross-site-programmatic-zones",".cikk-torzs-content-container > .kep_szeles.kep,\n.hasznaltautok-iframe-cikk-torzs,\n.header-tk-ajanlo,\n.joautok-iframe-cikk-torzs,\n.microsite,\n.szelso-jobb-lead_container,\n.totalkarWidget,\n[class*=\"adblokk\"]","#ads,\n[id*=\"adocean\"]",".ooono_promo","div.qc-cmp-ui-container",".adsense","#popunder_featured,\n.banner_box",".leftSide > .bnr,\n.rightSide > .bnr","#blanket,\n#popUpDiv",".hird-cont",".banner-commercial,\n.reklamnagy",".page-rightside-advert,\ndiv[id*=\"advert-container\"]","[class*=\"szovegkozi\"],\n[id*=\"reklam_\"]",".adszoveg,\n[class*=\"ad_container\"],\n[class*=\"guestbox\"],\ndiv[class*=\"microsite\"],\ndiv[id*=\"microsite\"]","#backdrop,\n#best-cars-layer,\n#beta-message-invite,\n.centerHead,\n[class*=\"Etarget\"],\n[class*=\"Hirdetes\"],\n[class*=\"advert \"],\n[class*=\"szponzor\"]","[style^=\"bottom: 0px; left: 0px; position: fixed; width:\"],\ndiv[class*=\"-ad\"],\ndiv[class*=\"hird-\"],\ndiv[class*=\"hirdetes\"],\ndiv[class=\"fej_felett cf\"],\ndiv[id*=\"etarget\"]","#sitemessage",".top-video-container-banner","div[id*=\"Banner\"]","[class^=\"adv\"]","[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.901961); display: block;\"]",".no_banner",".footprint_cookie","[id*=\"_ajanlatunk_\"],\ndiv.floating_share","[id*=\"AdFrame\"]","[class=\"wc_content wc_contentwide\"],\n[id*=\"AdZone\"]","div.penci-wrap-gprd-law,\ndiv.sgpb-popup-dialog-main-div-theme-wrapper-1,\ndiv.sgpb-popup-overlay-42657,\ndiv.sgpb-popup-overlay-42658","[id*=\"sense-\"]","#advert",".logopic2 + .fll,\n.overlay,\n.pupopadbox,\n[class=\"cikkbanner hirdbox mh40 listafriss\"],\n[style=\"margin-left:auto;margin-right:auto;width:980px;text-align:center\"]","#sidebad,\n#spu-main,\n#text-html-widget-6,\n[class*=\"PostAd\"],\n[class=\"e3lan e3lan-top\"],\n[id*=\"-bg\"]",".Cookie--bottom,\ndiv[id^=\"ga_g\"]","[href^=\"https://rosszlanyok.hu/\"]","#adserving-tag-hb,\n#pa_sticky_ad_box_middle_left,\niframe[id^=\"postbid_if_\"]",".hover_bkgr_fricc","#RedUserNotification","#zadost,\n.cookies",".wrapper > .slider",".widget.widget_text",".back","#article > section > div:not(.article_content)","#st-2,\n.cookie-consent,\ndiv[id*=\"banner\"]","#Promolecek,\n.header-1,\n[class*=\"Reklam\"],\ndiv[id*=\"Reklam\"],\ndiv[id*=\"anner\"]",".myftp-widget,\n[id^=\"fancybox-\"],\n[id^=\"myftp\"]"];

const hostnamesMap = new Map([["trollfesz.cc",[0,1]],["privatbankar.hu",[0,345]],["carstyling.com",2],["dictzone.com",3],["eredmenyek.com",4],["gumiszoba.com",5],["hazipatika.com",[6,7,8,9]],["delmagyar.hu",[6,31,74,76,87,136,137]],["kisalfold.hu",[6,16,76,87,136,263,264]],["mindenkilapja.hu",6],["sg.hu",[6,356]],["mobilarena.hu",[8,170,179,181,182,305]],["24.hu",[9,46,47]],["hirkosar.com",10],["hosszupuskasub.com",[10,11]],["humormagazin.com",12],["hungliaonline.com",[13,14]],["vilagunk.hu",[14,406]],["hu.ign.com",15],["ingatlan.com",16],["data.hu",[16,134]],["harmonet.hu",[16,76,205]],["klubradio.hu",16],["portfolio.hu",[16,247,344]],["ingatlanmagazin.com",17],["revizoronline.com",[17,31]],["444.hu",[17,48]],["autopro.hu",[17,78,79]],["bitport.hu",[17,31,94]],["blogstar.hu",[17,107]],["dimo.hu",17],["donna.hu",[17,31]],["epresso.hu",17],["eropolis.hu",17],["es.hu",[17,31,159]],["est.hu",[17,161]],["femina.hu",[17,32,76,166]],["figyelo.hu",[17,103]],["galamus.hu",17],["gondola.hu",[17,31,187]],["gportal.hu",17],["gyoricegregiszter.hu",17],["gyorplusz.hu",[17,133]],["hir6.hu",17],["hirstart.hu",[17,76]],["hrportal.hu",[17,63,224]],["ingatlanok.hu",17],["intima.hu",17],["jogiforum.hu",17],["kalohirek.hu",[17,31,254]],["kamaszpanasz.hu",[17,255,256]],["kapos.hu",17],["kaposvarmost.hu",17],["komment.hu",[17,31,76]],["lifemagazin.hu",[17,31,279]],["lovebox.hu",17],["magyarhirlap.hu",[17,31,179,288]],["mainap.hu",17],["mfor.hu",[17,298]],["mixonline.hu",17],["mmonline.hu",17],["mno.hu",[17,103,104,148,304]],["moly.hu",[17,306]],["napi.hu",[17,31,76,143,309]],["napiszar.hu",17],["nemzetisport.hu",[17,31,152,239,300,314,315]],["nice.hu",[17,317]],["noinetcafe.hu",17],["noplaza.hu",17],["novagyok.hu",[17,31]],["nyest.hu",[17,323]],["origo.hu",[17,31,74,277,329,330]],["partyponty.hu",[17,31]],["prim.hu",17],["retikul.hu",[17,354]],["ricsajok.hu",17],["samsungsport.hu",17],["sporthirado.hu",[17,31]],["szoftverbazis.hu",[17,276,374,375]],["tech.hu",[17,31]],["valasz.hu",17],["vidget.hu",17],["weborvos.hu",[17,227]],["wellnesscafe.hu",[17,104,411]],["kronika.ro",17],["sportoldal.ro",17],["szatmar.ro",[17,427]],["deres.tv",17],["karpathir.com",18],["kekfeny.com",19],["ketkes.com",20],["magyarszo.com",[21,22]],["puruttya.hu",21],["napinemszar.hu",[22,311]],["najlepsie-clanky.com",23],["napiszar.com",24],["napiuzlet.com",25],["nemkutya.com",[26,27]],["joy.hu",[26,253]],["paleomedicina.com",28],["pannonrtv.com",[29,30]],["elemzeskozpont.hu",29],["femcafe.hu",[29,76,127,165]],["pdafanclub.com",31],["bacsmegye.hu",[31,86]],["betegvagyok.hu",31],["bien.hu",[31,44,76,93]],["divany.hu",[31,76,140,141,142,143,144,145]],["duen.hu",31],["egeszsegkalauz.hu",[31,98,101,150,151]],["eletmod.hu",[31,32,76,156,157]],["eron.hu",31],["geeks.hu",31],["hajdupress.hu",[31,76,199]],["hirposta.hu",31],["index.hu",[31,76,141,144,241,242,243,244]],["ipon.hu",[31,250]],["kezilabda.hu",31],["kiskegyed.hu",[31,56,98,151,186,265]],["kreativ.hu",[31,269,270]],["life.hu",[31,74,105,173,275,276,277,278]],["multiplay.hu",31],["pirulapatika.hu",31],["revizoronline.hu",31],["romnet.hu",[31,76,142]],["startlap.hu",[31,231,363]],["stylemagazin.hu",[31,367]],["trademagazin.hu",31],["velvet.hu",[31,76,143,144,241,243,388,399]],["kakukk.ro",31],["svedasztal.com",[32,33]],["autonavigator.hu",[32,74,75,76,77]],["szervuszausztria.hu",[32,33]],["ecoline.hu",[33,147]],["teltlanyok.com",34],["5mp.eu",35],["autobazar.eu",36],["eudomain.eu",37],["netbulvar.eu",38],["tarhely.eu",39],["utajovobe.eu",40],["hu",[41,42]],["liked.hu",[42,280]],["112press.hu",43],["168.hu",[44,45]],["player.hu",[44,341]],["twice.hu",44],["hiros.hu",[46,216]],["5percblog.hu",49],["777blog.hu",50],["888.hu",[51,52]],["ripost.hu",[52,113]],["ado.hu",53],["adoforum.hu",54],["adozona.hu",[55,56]],["eduline.hu",[56,74,147,148,149]],["agrarszektor.hu",[57,58]],["hellovidek.hu",[57,209]],["infostart.hu",[57,247,248]],["penzcentrum.hu",[57,337]],["agroinform.hu",59],["alapjarat.hu",60],["alfahir.hu",61],["alza.hu",62],["americantourister.hu",[63,64]],["raketa.hu",[63,352]],["androgeek.hu",65],["angol-magyar-szotar.hu",66],["aranyoldalak.hu",[67,68]],["telefonkonyv.hu",68],["arukereso.hu",69],["atlatszo.hu",70],["atv.hu",71],["automotor.hu",[72,73]],["budapestkornyeke.hu",[73,116,117,118,119]],["blog.hu",[74,102,103,104,105]],["hasznaltauto.hu",[74,77,206]],["olcsobbat.hu",[74,142,325]],["cegbongeszo.hu",[76,104,122]],["hajokonyha.hu",76],["heol.hu",[76,87]],["hwsw.hu",[76,136,235]],["itmania.hu",[76,156]],["kitekinto.hu",[76,91,142]],["koponyeg.hu",[76,231,266,267]],["ma.hu",[76,156,157,271]],["motorrevu.hu",76],["noitema.hu",76],["onlinecegjegyzek.hu",76],["sonline.hu",[76,87,359]],["storyonline.hu",[76,366]],["szabadfold.hu",[76,368]],["szoljon.hu",[76,87,376]],["totalcar.hu",[76,144,145,241,242,386,387,388]],["travelo.hu",[76,330,390]],["vezess.hu",[76,104,319,400]],["offline.hu",[78,164]],["telekom.hu",[78,378]],["autosjog.hu",[80,81]],["helyitipp.hu",[81,210]],["napjainkportal.hu",81],["autoszektor.hu",82],["azonnali.hu",83],["babanet.hu",[84,85]],["szepsegbroker.hu",[84,342,372]],["bama.hu",87],["baon.hu",[87,89]],["beol.hu",[87,92]],["boon.hu",87],["duol.hu",87],["feol.hu",87],["haon.hu",[87,104,202,203]],["kemma.hu",87],["nool.hu",87],["szon.hu",87],["teol.hu",87],["vaol.hu",87],["veol.hu",87],["zaol.hu",87],["bankmonitor.hu",88],["bebiztositva.hu",[90,91]],["bkv.hu",[95,96]],["mandiner.hu",[96,111,290]],["blikk.hu",[97,98,99]],["glamour.hu",[98,99,151,185,186]],["blikkruzs.blikk.hu",[100,101]],["freemail.hu",[103,172,173,174]],["mon.hu",[104,202]],["metazin.hu",105],["blogspot.hu",106],["tudtade.blogstar.hu",108],["bonuszbrigad.hu",109],["bookline.hu",110],["borsonline.hu",[111,112,113]],["iho.hu",[113,237,238]],["magyarnemzet.hu",[113,289]],["vg.hu",[113,401]],["bpiautosok.hu",[114,115]],["pestisracok.hu",[115,338]],["likenews.hu",[117,118]],["starity.hu",[117,362]],["kekvillogo.hu",[118,119]],["budapestpark.hu",120],["cartourmagazin.hu",121],["ceginformacio.hu",123],["civishir.hu",124],["computerworld.hu",[125,126]],["gamestar.hu",[125,126]],["pcworld.hu",[125,126]],["puliwood.hu",[125,126]],["gsplus.hu",[126,189,190]],["pcwplus.hu",[126,189,190]],["csaladinet.hu",[127,128]],["csongradihirek.hu",129],["csupasport.hu",[130,131]],["mindmegette.hu",[130,299,300]],["cyberpress.hu",[132,133]],["itthonrolhaza.hu",[133,252]],["dehir.hu",135],["demokrata.hu",138],["dijnet.hu",139],["linkcenter.hu",[142,281]],["transindex.ro",[142,239,269,428]],["totalbike.hu",[144,145,386]],["e-cars.hu",146],["magyarnarancs.hu",147],["sportorvos.hu",[148,361]],["egeszsegtukor.hu",152],["vehir.hu",[152,315,398]],["elelmiszer.hu",153],["elemi.hu",[154,155]],["topark.hu",[154,385]],["epiteszforum.hu",158],["gyakorikerdesek.hu",[159,191,192]],["esport1.hu",160],["evamagazin.hu",162],["f1vilag.hu",[163,164]],["forbes.hu",[164,168]],["filmoldal.hu",167],["fototrend.hu",[169,170]],["gamepod.hu",[170,178,179,180,181,182]],["hardverapro.hu",[170,180,181,204]],["itcafe.hu",[170,179,180,181,182]],["logout.hu",[170,179,180,181,182,283]],["prohardver.hu",[170,179,180,181,182,349]],["fovarosi-hirhatar.hu",171],["zene.hu",172],["unilife.hu",[173,276]],["accounts.freemail.hu",175],["fressnapf.hu",176],["gamekapocs.hu",177],["gentleman.hu",183],["gepigeny.hu",184],["gphirek.hu",188],["nepszava.hu",[189,220,316]],["hoxa.hu",[192,223]],["gyaloglo.hu",193],["gyartastrend.hu",[194,195,196]],["pharmaonline.hu",[194,339]],["medicalonline.hu",[195,294]],["gyorihir.hu",197],["gyulaihirlap.hu",198],["hang.hu",[200,201]],["magyarhang.org",201],["hatarido-szamitas.hu",207],["haziallat.hu",208],["hestore.hu",211],["hetek.hu",212],["hirado.hu",213],["hircsarda.hu",214],["hirextra.hu",215],["indavideo.hu",[215,240]],["hirtv.hu",217],["hoc.hu",218],["hogyankell.hu",219],["holtankoljak.hu",[220,221]],["kapcsolat.hu",220],["hotdog.hu",222],["huaweiblog.hu",225],["mlzphoto.hu",[225,302]],["napidroid.hu",[225,310]],["hunbasket.hu",226],["kosarsport.hu",226],["hunhir.hu",227],["hupont.hu",[228,229]],["webbeteg.hu",[229,267,409]],["hvg.hu",[230,231,232]],["tutitippek.hu",231],["vilagszam.hu",[232,405]],["m.hvg.hu",233],["hvo.hu",234],["idokep.hu",236],["ize.hu",237],["napiszex.hu",[237,312,313]],["promotions.hu",[237,350]],["sztarklikk.hu",237],["tvgo.hu",237],["ncore.pro",237],["ilovebalaton.hu",239],["forum.index.hu",245],["infoajka.hu",246],["infobekescsaba.hu",246],["infocegled.hu",246],["infocelldomolk.hu",246],["infodebrecen.hu",246],["infodombovar.hu",246],["infodunaujvaros.hu",246],["infoesztergom.hu",246],["infofehervar.hu",246],["infogyor.hu",246],["infohodmezovasarhely.hu",246],["infokarcag.hu",246],["infokeszthely.hu",246],["infokiskunfelegyhaza.hu",246],["infomiskolc.hu",246],["infomovar.hu",246],["infonograd.hu",246],["infopapa.hu",246],["inforabakoz.hu",246],["infosarvar.hu",246],["infosporon.hu",246],["infoszentendre.hu",246],["infoszigetkoz.hu",246],["infoszombathely.hu",246],["infotamasi.hu",246],["infotatabanya.hu",246],["infoveszprem.hu",246],["infozalaegerszeg.hu",246],["internet-marketing.hu",249],["ite.hu",251],["mozinezo.hu",256],["muhelynet.hu",[256,285]],["kapu.hu",257],["kecskemet365.hu",258],["kektura.hu",259],["keol.hu",260],["kfc.hu",261],["kh.hu",262],["gloria.tv",263],["kossuth.hu",268],["marmalade.hu",269],["nol.hu",[269,322]],["turizmusonline.hu",269],["kulturpart.hu",271],["lakberendezes.hu",272],["leet.hu",273],["libri.hu",274],["ok.hu",278],["reblog.hu",278],["videa.hu",[278,402,403]],["litera.hu",282],["superiorhirek.hu",282],["love.hu",284],["lumenet.hu",[285,286]],["mafab.hu",287],["manus.hu",291],["mavcsoport.hu",292],["sorozataddict.hu",292],["mediacenter.hu",293],["menetrendek.hu",295],["merce.hu",296],["meska.hu",297],["mkbnetbankar.hu",301],["mme.hu",303],["mozishop.hu",303],["mult-kor.hu",307],["myonlineradio.hu",308],["telex.hu",312],["nkmenergia.hu",318],["nlc.hu",[319,320]],["noizz.hu",321],["webforditas.hu",[323,410]],["obi.hu",324],["onroad.hu",326],["onvideo.hu",327],["oprend.hu",328],["otvenentul.hu",331],["hir.ma",[331,416]],["pcforum.hu",[332,333,334]],["prog.hu",[332,334,348]],["pcguru.hu",335],["pecsma.hu",336],["piacesprofit.hu",340],["politaktika.hu",342],["hu.jooble.org",[342,425]],["port.hu",343],["profession.hu",346],["profitline.hu",347],["propeller.hu",[348,351]],["rendszerigeny.hu",353],["rtl.hu",355],["sielok.hu",357],["simple.hu",358],["sorozatwiki.hu",360],["kereso.startlap.hu",364],["stop.hu",365],["szamoldki.hu",369],["szeged.hu",370],["szeged365.hu",371],["szeretlekmagyarorszag.hu",373],["sztaki.hu",375],["telefonguru.hu",377],["terhesferfi.hu",379],["termalfurdo.hu",380],["terminal.hu",381],["thaimatrac.hu",382],["titkokszigete.hu",383],["tlap.hu",384],["traffihunter.hu",389],["turmixvilag.hu",391],["twn.hu",392],["ugytudjuk.hu",393],["usernet.hu",394],["valaszonline.hu",395],["vasarnap.hu",396],["vatera.hu",397],["videaloop.hu",403],["videoklinika.hu",404],["vilagszammagazin.hu",405],["vs.hu",407],["wasabi.hu",408],["widescreen.hu",412],["wikiszotar.hu",413],["feliratok.info",414],["kuruc.info",415],["szekelyfold.ma",417],["filmvilag.me",418],["mozinet.me",419],["online-filmek.me",420],["androbit.net",421],["calculat.org",422],["feliratok.org",423],["hogyan.org",424],["maszol.ro",426],["nepszava.us",429]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
