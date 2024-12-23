/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Notification"],["embedAddefend"],["adBlockDetected"],["navigator.userAgent"],["__eiPb"],["detector"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["InstallTrigger"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["mm"],["googletag"],["stop"],["open"],["ga.length"],["_wm"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["decodeURI"],["AaDetector"],["google_jobrunner"],["popjs.init"],["adblock"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["exoNoExternalUI38djdkjDDJsio96"],["raConf"],["popTimes"],["smrtSB"],["smrtSP"],["Aloader"],["advobj"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["require"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["jwplayer.vast"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["importFAB"],["_0xbeb9"],["popAdsClickCount"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["odabd"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["decodeURIComponent"],["glxopen"],["CatapultTools"],["adbackDebug"],["$pxy822"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["TRM"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["I833"],["Popunder"],["gPartners"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["mdpDeBlocker"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["mdp_deblocker"],["adUnits"],["b2a"],["pbjsChunk"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["adthrive"],["show_ads_gr8_lite"],["disableButtonTimer"],["tie"],["document.write"],["adb_checker"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["eazy_ad_unblocker"],["afScript"],["__brn_private_mode"],["__aaZoneid"],["adc"],["document.body.style.backgroundPosition"],["canRunAds"],["app_vars.please_disable_adblock"],["antiAdBlockerHandler"],["showada"],["checkAdsStatus"],["popUrl"],["adConfig"],["Promise.all"],["block_ads"],["arrvast"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["clickCount"],["popUp"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["bypass_url"],["document.onmousedown"],["SMart1"],["window.open"],["checkAdsBlocked"],["Light.Popup"],["htmls"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["chp_adblock_browser"],["adsbyjuicy"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["__tnt"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adBlockEnabled"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["indexedDB.open"],["checkCookieClick"],["mnpw"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["rccbase_styles"],["adBlockerDetected"],["zfgformats"],["zfgstorage"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["PopURL"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["disableDeveloperTools"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["remove_adblock_html"],["Request"],["fallbackAds"],["lck"],["advanced_ads_ready"],["_conf.pops"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["document.body.innerHTML"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["JuicyPop"],["afStorage"],["_run"],["detectAdblock"],["jQuery.popunder"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["navigator.brave"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["onscroll"],["GeneratorAds"],["__cmpGdprAppliesGlobally"],["player.vroll"],["aab"],["config"],["runad"],["atob"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"],["Keen"],["MONETIZER101.init"],["JadIds"]];

const hostnamesMap = new Map([["tagesspiegel.de",0],["vivud.com",[0,14,27,60]],["gtaall.com",0],["worldsex.com",[0,50]],["jizzbunker.com",[0,135]],["dailymail.co.uk",0],["tech4yougadgets.com",0],["n-tv.de",1],["g9g.eu",2],["platinmods.com",2],["mitly.us",[2,20]],["fotbolltransfers.com",2],["yxzero.xyz",2],["freebitcoin.win",2],["coindice.win",2],["live-tv-channels.org",2],["faucethero.com",[2,27]],["faresgame.com",2],["fc.lc",[2,109]],["freebcc.org",[2,109]],["eio.io",[2,109]],["exee.io",[2,109]],["exe.app",[2,109]],["multifaucet.org",2],["majalahpendidikan.com",2],["jaiefra.com",2],["czxxx.org",2],["sh0rt.cc",2],["fussball.news",2],["orangespotlight.com",2],["ar-atech.blogspot.com",2],["clixwarez.blogspot.com",2],["theandroidpro.com",2],["zeeebatch.blogspot.com",2],["layarkaca21indo.com",2],["iptvspor.com",2],["plugincim.com",2],["fivemturk.com",2],["sosyalbilgiler.net",2],["mega-hentai2.blogspot.com",2],["gun-otaku.blogspot.com",2],["tech5s.co",2],["ez4mods.com",2],["kollhong.com",2],["getmega.net",2],["verteleseriesonline.com",2],["imintweb.com",2],["coinxfaucet.com",2],["eoreuni.com",2],["se-ed.com",2],["comousarzararadio.blogspot.com",2],["popsplit.us",2],["digitalstudiome.com",2],["nightfallnews.com",2],["mypussydischarge.com",[2,27]],["kontrolkalemi.com",2],["arabianbusiness.com",2],["eskiceviri.blogspot.com",2],["dj-figo.com",2],["blasianluvforever.com",2],["wgzimmer.ch",2],["familyrenders.com",2],["daburosubs.com",2],["androidgreek.com",2],["iade.com",2],["smallpocketlibrary.com",2],["hidefninja.com",2],["orangeptc.com",2],["share1223.com",2],["7misr4day.com",2],["aquiyahorajuegos.net",2],["worldofbin.com",2],["googledrivelinks.com",2],["98zero.com",2],["tpaste.io",2],["aranzulla.it",3],["anallievent.com",4],["au-di-tions.com",4],["badgehungry.com",4],["beingmelody.com",4],["bloggingawaydebt.com",4],["casutalaurei.ro",4],["cornerstoneconfessions.com",4],["culture-informatique.net",4],["dearcreatives.com",4],["disneyfashionista.com",4],["divinelifestyle.com",4],["dna.fr",4],["eslauthority.com",4],["estrepublicain.fr",4],["fitting-it-all-in.com",4],["heresyoursavings.com",4],["irresistiblepets.net",4],["julieseatsandtreats.com",4],["justjared.com",4],["lecturisiarome.ro",4],["lemonsqueezyhome.com",4],["libramemoria.com",4],["lovegrowswild.com",4],["magicseaweed.com",4],["measuringflower.com",4],["mjsbigblog.com",4],["mommybunch.com",4],["mustardseedmoney.com",4],["myfunkytravel.com",4],["onetimethrough.com",4],["panlasangpinoymeatrecipes.com",4],["silverpetticoatreview.com",4],["the-military-guide.com",4],["therelaxedhomeschool.com",4],["the2seasons.com",4],["zeroto60times.com",4],["apple-of-my-eye.com",4],["barefeetonthedashboard.com",4],["bargainbriana.com",4],["betterbuttchallenge.com",4],["bike-urious.com",4],["blwideas.com",4],["eartheclipse.com",4],["entertainment-focus.com",4],["fanatik.com.tr",4],["foreverconscious.com",4],["foreversparkly.com",4],["getdatgadget.com",4],["goodnewsnetwork.org",4],["greenarrowtv.com",4],["hbculifestyle.com",4],["heysigmund.com",4],["hodgepodgehippie.com",4],["homestratosphere.com",4],["indesignskills.com",4],["katiescucina.com",4],["knowyourphrase.com",4],["letsworkremotely.com",4],["lizs-early-learning-spot.com",4],["ledauphine.com",4],["leprogres.fr",4],["milliyet.com.tr",4],["pinoyrecipe.net",4],["prepared-housewives.com",4],["recipesforourdailybread.com",4],["redcarpet-fashionawards.com",4],["republicain-lorrain.fr",4],["savespendsplurge.com",4],["savingadvice.com",4],["shutupandgo.travel",4],["spring.org.uk",4],["stevivor.com",4],["tamaratattles.com",4],["tastefullyeclectic.com",4],["theavtimes.com",4],["thechroniclesofhome.com",4],["thisisourbliss.com",4],["tinyqualityhomes.org",4],["turtleboysports.com",4],["ultimateninjablazingx.com",4],["universfreebox.com",4],["utahsweetsavings.com",4],["vgamerz.com",4],["wheatbellyblog.com",4],["yummytummyaarthi.com",4],["ranker.com",[4,18]],["fluentu.com",4],["cdiscount.com",4],["damndelicious.net",4],["simplywhisked.com",4],["timesofindia.com",5],["bild.de",6],["sueddeutsche.de",7],["20min.ch",7],["al.com",7],["alphr.com",7],["autoexpress.co.uk",7],["bikeradar.com",7],["blick.ch",7],["chefkoch.de",7],["cyclingnews.com",[7,365]],["digitalspy.com",7],["democratandchronicle.com",7],["denofgeek.com",7],["esgentside.com",7],["evo.co.uk",7],["exclusivomen.com",7],["ft.com",7],["gala.de",7],["gala.fr",7],["heatworld.com",7],["itpro.co.uk",7],["livingathome.de",7],["masslive.com",7],["maxisciences.com",7],["metabomb.net",7],["mlive.com",7],["motherandbaby.co.uk",7],["motorcyclenews.com",7],["muthead.com",7],["neonmag.fr",7],["newyorkupstate.com",7],["ngin-mobility.com",7],["nj.com",7],["nola.com",7],["ohmirevista.com",7],["oregonlive.com",7],["pennlive.com",7],["programme.tv",7],["programme-tv.net",7],["radiotimes.com",7],["silive.com",7],["simplyvoyage.com",7],["stern.de",7],["syracuse.com",7],["theweek.co.uk",7],["ydr.com",7],["usatoday.com",7],["schoener-wohnen.de",7],["thewestmorlandgazette.co.uk",7],["news-leader.com",7],["closeronline.co.uk",7],["etonline.com",7],["bilan.ch",7],["doodle.com",7],["techradar.com",7],["daily-times.com",7],["wirralglobe.co.uk",7],["annabelle.ch",7],["pcgamer.com",7],["nintendolife.com",7],["gamer.com.tw",8],["skidrowcodexgames.com",9],["22pixx.xyz",[9,64,78]],["durtypass.com",9],["anime-odcinki.pl",9],["gaypornwave.com",[9,39]],["pngit.live",[9,20,28,76]],["gratispaste.com",[9,78]],["animotvslashz.blogspot.com",9],["eltern.de",10],["essen-und-trinken.de",10],["focus.de",10],["eurogamer.de",10],["eurogamer.es",10],["eurogamer.it",10],["eurogamer.net",10],["eurogamer.pt",10],["rockpapershotgun.com",10],["vg247.com",10],["urbia.de",10],["elpasotimes.com",10],["femina.ch",10],["northwalespioneer.co.uk",10],["codeproject.com",11],["cwseed.com",12],["pocketnow.com",13],["7r6.com",[14,24,109]],["reddflix.com",[14,20]],["bostoncommons.net",14],["send.cm",14],["opisanie-kartin.com",14],["painting-planet.com",14],["kropic.com",[14,27]],["mp4mania1.net",14],["livegore.com",14],["down-paradise.com",[14,80]],["kioven.com",14],["ladsnbastands.com",14],["pngio.com",14],["iobit.com",14],["videowood.tv",[14,22,295]],["streampourvous.com",14],["rule34.xxx",15],["realbooru.com",16],["alrincon.com",[16,20,40]],["realgfporn.com",[16,39]],["pornhd.com",[16,59]],["pornhdin.com",[16,20]],["pornomovies.com",[16,27]],["bdsmstreak.com",16],["freepornvideo.sex",16],["teenpornvideo.xxx",16],["yourlust.com",16],["imx.to",16],["mypornstarbook.net",16],["japanesefuck.com",16],["plusone8.com",16],["imgtorrnt.in",[16,50]],["pandamovies.pw",[16,50]],["club-flank.com",16],["streamporn.pw",16],["watchfreexxx.net",[16,39,154,155,156]],["dump.xxx",[16,20]],["fuqer.com",[16,20]],["tmohentai.com",16],["xopenload.me",16],["losporn.org",16],["bravoerotica.com",16],["xasiat.com",[16,75]],["redporno.cz",16],["vintageporntubes.com",16],["xxxvideos247.com",16],["young-pussy.com",16],["kingsofteens.com",16],["24pornvideos.com",16],["2japaneseporn.com",16],["xxxvideor.com",16],["youngleak.com",16],["zhlednito.cz",16],["8teenxxx.com",16],["activevoyeur.com",16],["allschoolboysecrets.com",16],["boobsforfun.com",16],["breedingmoms.com",16],["cockmeter.com",[16,50]],["collegeteentube.com",16],["cumshotlist.com",16],["porn0.tv",16],["ritzysex.com",16],["ritzyporn.com",16],["sexato.com",16],["javbobo.com",[16,65]],["sokobj.com",16],["youlikeboys.com",[16,78]],["needgayporn.com",16],["zetporn.com",16],["keephealth.info",17],["123moviesjr.cc",17],["123moviesd.com",17],["123moviess.se",17],["cloudvideo.tv",17],["googlvideo.com",17],["diasfem.com",[17,80]],["embedsito.com",[17,25,80]],["javcl.me",[17,25,80]],["mavlecteur.com",[17,80]],["playfinder.xyz",[17,25,80,112]],["easyexploits.com",17],["azm.to",17],["anigogo.net",[17,80]],["arslanrocky.xyz",[17,80]],["cloudemb.com",[17,80]],["dlmovies.link",[17,80]],["embedsb.com",[17,80]],["gomovizplay.com",[17,80]],["hlsplayer.xyz",[17,80]],["kinoking.cc",17],["lvturbo.com",17],["oxl.one",[17,80]],["playersb.com",[17,80]],["sbanh.com",[17,80]],["sbasian.pro",17],["sbbrisk.com",[17,80]],["sbchill.com",[17,80]],["sbcloud1.com",[17,80]],["sbembed.com",[17,80]],["sbembed1.com",[17,24,80]],["sbembed2.com",[17,80]],["sbembed3.com",[17,80]],["sbembed4.com",[17,80]],["sbface.com",17],["sbfast.com",[17,80]],["sbfull.com",[17,80,302]],["sbhight.com",[17,80]],["sblanh.com",[17,80]],["sblona.com",17],["sblongvu.com",[17,80]],["sbnet.one",17],["sbplay1.com",[17,80]],["sbrity.com",[17,80]],["sbspeed.com",[17,80]],["sbthe.com",[17,80]],["sbvideo.net",17],["ssbstream.net",[17,80]],["streamsss.net",[17,80]],["subsb.net",[17,80]],["tubesb.com",[17,80]],["vidmovie.xyz",[17,80]],["view345.com",[17,80,302]],["viewsb.com",[17,80]],["watchsb.com",[17,80]],["watchdoctorwhoonline.com",17],["toxicwap.us",17],["yodbox.com",17],["coverapi.store",17],["masahub.net",[17,27]],["lalastreams.me",17],["hblinks.pro",17],["afdah2.com",17],["javuncen.xyz",[17,80]],["kissasia.cc",17],["watchsexandthecity.com",17],["watchpsychonline.net",17],["watchsmallvilleonline.net",17],["ymovies.vip",17],["cl1ca.com",17],["4br.me",17],["fir3.net",17],["thewindowsclub.com",18],["girlsgogames.co.uk",18],["godtube.com",18],["ringsidenews.com",18],["advocate.com",18],["alternet.org",18],["androidcure.com",18],["arobasenet.com",18],["attackofthefanboy.com",18],["bodytr.com",18],["clutchpoints.com",18],["cultofmac.com",18],["currentaffairs.gktoday.in",18],["dailycaller.com",18],["digitalmusicnews.com",18],["dogtime.com",18],["dotesports.com",18],["epicstream.com",18],["fallbrook247.com",18],["feral-heart.com",18],["gamesgames.com",18],["gamerevolution.com",18],["gazettenet.com",18],["insidenova.com",18],["jetztspielen.de",18],["kasvekuvvet.net",18],["leitesculinaria.com",18],["nbcnews.com",18],["notevibes.com",18],["practicalpainmanagement.com",18],["prad.de",18],["progameguides.com",18],["pwinsider.com",18],["realityblurb.com",[18,255]],["ruinmyweek.com",18],["sanangelolive.com",18],["sanfoundry.com",18],["selfhacked.com",18],["siliconera.com",18],["simpleflying.com",18],["son.co.za",18],["sporcle.com",18],["stealthoptional.com",18],["thesportster.com",18],["upi.com",18],["viraliq.com",18],["visualcapitalist.com",18],["wegotthiscovered.com",18],["primagames.com",18],["grubstreet.com",19],["twitchy.com",19],["rule34hentai.net",20],["clik.pw",20],["pornj.com",20],["pornl.com",20],["ah-me.com",20],["1337x.unblock2.xyz",[20,23,55]],["linkrex.net",20],["oke.io",20],["watchmygf.me",20],["pornoreino.com",[20,39]],["shrt10.com",20],["ashemaletube.com",20],["turbobit.net",20],["bestialitysexanimals.com",20],["bestialporn.com",20],["mujeresdesnudas.club",20],["mynakedwife.video",20],["videoszoofiliahd.com",20],["efukt.com",20],["tranny.one",[20,65]],["porndoe.com",[20,39]],["topvideosgay.com",20],["goto.com.np",20],["femdomtb.com",20],["pornvideotop.com",20],["deinesexfilme.com",20],["einfachtitten.com",20],["halloporno.com",20],["herzporno.com",20],["lesbenhd.com",20],["milffabrik.com",20],["porn-monkey.com",20],["porndrake.com",20],["pornhubdeutsch.net",20],["pornoaffe.com",20],["pornodavid.com",20],["pornoente.tv",20],["pornofisch.com",20],["pornofelix.com",20],["pornohammer.com",20],["pornohelm.com",20],["pornoklinge.com",20],["pornotom.com",20],["pornotommy.com",20],["pornovideos-hd.com",20],["pornozebra.com",20],["xhamsterdeutsch.xyz",20],["xnxx-sexfilme.com",20],["tryboobs.com",[20,65]],["hitomi.la",20],["fapality.com",[20,50]],["babesxworld.com",[20,40,50]],["icutlink.com",20],["oncehelp.com",20],["picbaron.com",[20,40]],["mega-p2p.net",20],["shrinkearn.com",20],["twister.porn",20],["bitlk.com",20],["gamovideo.com",20],["urlty.com",20],["peekvids.com",20],["playvids.com",20],["pornflip.com",20],["pornoeggs.com",20],["oko.sh",[20,28]],["turbogvideos.com",20],["xxx-image.com",[20,34,135,180]],["coinlyhub.com",[20,109]],["vidbom.com",20],["zimabdko.com",20],["fullxxxmovies.net",20],["elitegoltv.org",20],["extremotvplay.com",20],["tarjetarojatv.org",20],["pirlotvonline.org",20],["rojadirectaonlinetv.com",20],["semawur.com",20],["adshrink.it",20],["shrink-service.it",[20,362]],["eplsite.uk",[20,28]],["upstream.to",20],["dramakrsubindo.blogspot.com",20],["ex-foary.com",[20,109]],["oceanof-games.com",20],["watchmonkonline.com",20],["iir.ai",[20,109]],["comicxxx.eu",20],["mybestxtube.com",[20,50]],["pornobengala.com",20],["pornicom.com",[20,50]],["xecce.com",20],["teensporn.tv",[20,50]],["pornlift.com",20],["superbgays.com",20],["bt4g.unblocked.to",20],["porncomics.me",20],["orsm.net",20],["moviehaxx.pro",20],["enagato.com",20],["cloutgist.com",20],["youshort.me",20],["shortylink.store",20],["kvador.com",[20,40]],["uploadroot.com",20],["deepfakeporn.net",20],["pkr.pw",[20,109]],["loader.to",20],["namaidani.com",[20,109]],["anime47.com",20],["cutearn.net",[20,109]],["filezipa.com",[20,109]],["theblissempire.com",[20,109]],["bestgamehack.top",20],["hackofgame.com",20],["shorturl.unityassets4free.com",[20,109]],["vevioz.com",[20,109]],["charexempire.com",[20,229]],["vidstreamz.online",20],["crunchyscan.fr",20],["unblocksite.pw",[20,135]],["y2mate.com",20],["androidapks.biz",20],["androidsite.net",20],["animeonlinefree.org",20],["animesite.net",20],["computercrack.com",20],["crackedsoftware.biz",20],["crackfree.org",20],["cracksite.info",20],["downloadapk.info",20],["downloadapps.info",20],["downloadgames.info",20],["downloadmusic.info",20],["downloadsite.org",20],["ebooksite.org",20],["emulatorsite.com",20],["fmovies24.com",20],["freeflix.info",20],["freemoviesu4.com",20],["freesoccer.net",20],["fseries.org",20],["gamefast.org",20],["gamesite.info",20],["gostreamon.net",20],["hindisite.net",20],["isosite.org",20],["macsite.info",20],["mangasite.org",20],["megamovies.org",20],["moviefree2.com",20],["moviesite.app",20],["moviesx.org",20],["musicsite.biz",20],["patchsite.net",20],["pdfsite.net",20],["play1002.com",20],["productkeysite.com",20],["romsite.org",20],["seriesite.net",20],["siteapk.net",20],["siteflix.org",20],["sitegames.net",20],["sitekeys.net",20],["sitepdf.com",20],["sitetorrent.com",20],["softwaresite.net",20],["superapk.org",20],["supermovies.org",20],["tvonlinesports.com",20],["ultramovies.org",20],["warezsite.net",20],["watchmovies2.com",20],["watchmoviesforfree.org",20],["watchsite.net",20],["youapk.net",20],["gload.to",20],["bloggingguidance.com",20],["jockantv.com",20],["receive-sms-online.info",21],["theproxyproxy.com",22],["candid.tube",22],["hotbabes.tv",[22,40]],["purelyceleb.com",22],["piraproxy.app",22],["nosteamgames.ro",22],["pornult.com",[23,75]],["fullhdxxx.com",[23,39]],["koenime.top",23],["lendrive.web.id",23],["nimegami.id",23],["short.pe",[24,28]],["mylust.com",[24,50]],["anysex.com",[24,27,39,50,119]],["luscious.net",24],["cloudgallery.net",[24,28]],["alotporn.com",[24,50]],["imgair.net",24],["imgblaze.net",24],["imgfrost.net",24],["vestimage.site",24],["imgwia.buzz",24],["imgbaex.store",24],["imgbah.online",24],["imgbaie.online",24],["imgbango.store",24],["imgbier.store",24],["imgbimn.store",24],["imgbqw.store",24],["imgbuba.online",24],["imgbwe.store",24],["imgbxs.online",24],["imgcao.store",24],["imgnwe.online",24],["imgqge.store",24],["imgqxb.online",24],["imgteq.online",24],["imgtex.online",24],["imgtuta.online",24],["imgwqr.online",24],["imgwww.store",24],["imgxza.store",24],["imgezx.sbs",24],["imgbcxsb.store",24],["imgbcxs.store",24],["imgbake.cfd",24],["imgmffg.sbs",24],["imgmffgtr.sbs",24],["imgnbg.sbs",24],["imgngc.sbs",24],["imgnmh.cfd",24],["imgqte.sbs",24],["imguthes.sbs",24],["imgwag.cfd",24],["imgwang.cfd",24],["imgwety.sbs",24],["imgxuh.cfd",24],["imgxytw.cfd",24],["imgycgey.sbs",24],["imgyruy.cfd",24],["imgyusa.cfd",24],["imgyyqey.sbs",24],["imgyer.store",24],["imgxhs.store",24],["imgwekr.online",24],["imgwbfh.online",24],["imgwak.online",24],["imgutry.online",24],["imgutiyu.online",24],["imgutbbn.online",24],["imgubfd.online",24],["imgrei.online",24],["imgqec.online",24],["imgpaiou.online",24],["imgpaiki.online",24],["imgmjj.store",24],["imgfa.store",24],["imgbutrt.store",24],["imgbty.store",24],["imgbdl.store",24],["imgngh.sbs",24],["imgbbfg.pics",24],["imgjhrjjr.pics",24],["imgleko.pics",24],["imgluki.pics",24],["imgnffe.pics",24],["imgnnnf.pics",24],["imgrwqz.pics",24],["imgtweqz.pics",24],["imgxzgf.pics",24],["imgyyeryt.pics",24],["picbbc.one",24],["picbbdr.one",24],["picbest.one",24],["picbhrt.one",24],["picnrrt.one",24],["picqqw.one",24],["picqr.one",24],["picqtwe.one",24],["picsjre.one",24],["piczzaq.one",24],["imgqazx.sbs",24],["imgiruyw.online",24],["picnerr.cfd",24],["pichfer.cfd",24],["picbbeq.cfd",24],["picqaxs.cfd",24],["picxxdd.cfd",24],["picqweff.cfd",24],["pickjsn.cfd",24],["piczzxsw.cfd",24],["picbbbde.cfd",24],["picbdd.cfd",24],["imgbahxg.sbs",24],["imgxune.sbs",24],["imgqklw.shop",24],["pixqkhgrt.shop",24],["pixqbngg.shop",24],["pixqwet.shop",24],["pixmos.shop",24],["imgtgd.shop",24],["imgcsxx.shop",24],["imgcssd.shop",24],["imguwjsd.sbs",24],["pictbbf.shop",24],["pixbryexa.sbs",24],["picbqqa.sbs",24],["pixbkghxa.sbs",24],["imgmgf.sbs",24],["picbcxvxa.sbs",24],["imguee.sbs",24],["imgmffmv.sbs",24],["imgbqb.sbs",24],["imgbyrev.sbs",24],["imgbncvnv.sbs",24],["pixtryab.shop",24],["imggune.shop",24],["pictryhab.shop",24],["pixbnab.shop",24],["imgbnwe.shop",24],["imgbbnhi.shop",24],["imgnbii.shop",24],["imghqqbg.shop",24],["imgyhq.shop",24],["pixnbrqwg.sbs",24],["pixnbrqw.sbs",24],["picmsh.sbs",24],["imgpke.sbs",24],["picuenr.sbs",24],["imgolemn.sbs",24],["imgoebn.sbs",24],["picnwqez.sbs",24],["imgjajhe.sbs",24],["pixjnwe.sbs",24],["pixkfjtrkf.shop",24],["pixkfkf.shop",24],["pixdfdjkkr.shop",24],["pixdfdj.shop",24],["picnft.shop",24],["pixrqqz.shop",24],["picngt.shop",24],["picjgfjet.shop",24],["picjbet.shop",24],["imgkkabm.shop",24],["imgxabm.shop",24],["imgthbm.shop",24],["imgmyqbm.shop",24],["imgwwqbm.shop",24],["imgjvmbbm.shop",24],["imgjbxzjv.shop",24],["imgjmgfgm.shop",24],["picxnkjkhdf.sbs",24],["imgxxbdf.sbs",24],["imgnngr.sbs",24],["imgjjtr.sbs",24],["imgqbbds.sbs",24],["imgbvdf.sbs",24],["imgqnnnebrf.sbs",24],["imgnnnvbrf.sbs",24],["pornfd.com",24],["xsanime.com",24],["camclips.tv",24],["ninjashare.to",24],["fembed.com",[25,27,112]],["films5k.com",[25,80]],["javideo.pw",[25,80]],["ujav.me",[25,80]],["shameless.com",[25,64,65]],["javstream.top",[25,80]],["informer.com",26],["igfap.com",27],["sheshaft.com",27],["gotgayporn.com",27],["fetishshrine.com",27],["sleazyneasy.com",27],["vikiporn.com",27],["pornomico.com",[27,72]],["watchhouseonline.net",27],["pornoman.pl",[27,126]],["camseek.tv",27],["xxmovz.com",27],["lewdzone.com",27],["nonktube.com",27],["pussyspot.net",27],["wildpictures.net",27],["nudogram.com",27],["18girlssex.com",27],["modagamers.com",27],["batporno.com",27],["lebahmovie.com",27],["duit.cc",27],["classicpornbest.com",[27,136]],["desihoes.com",[27,50]],["indianpornvideo.org",27],["porn18sex.com",27],["slaughtergays.com",27],["sexiestpicture.com",27],["line25.com",27],["javtiful.com",27],["homemoviestube.com",27],["manytoon.com",27],["thatav.net",27],["hentaifreak.org",27],["xxgasm.com",27],["kfapfakes.com",27],["xsober.com",27],["sexsaoy.com",27],["ashemaletv.com",27],["beurettekeh.com",27],["celibook.com",27],["gourmandix.com",27],["sexetag.com",27],["hd44.net",27],["dirtyfox.net",27],["babestube.com",27],["momvids.com",27],["porndr.com",27],["deviants.com",27],["freehardcore.com",27],["lesbian8.com",[27,294]],["eztv-torrent.net",27],["spicyandventures.com",27],["watchmdh.to",27],["sarapbabe.com",27],["rule34porn.net",27],["fullxxxporn.net",27],["hdvideosporn.com",27],["qqxnxx.com",27],["xnxx-downloader.net",27],["comicspornow.com",27],["mult34.com",27],["viet69.org",27],["xxxvideotube.net",27],["javqis.com",27],["onlyhotleaks.com",27],["35volitantplimsoles5.com",27],["amateurblog.tv",27],["fashionblog.tv",27],["latinblog.tv",27],["silverblog.tv",27],["tokyoblog.tv",27],["xblog.tv",27],["peladas69.com",27],["liveru.sx",27],["protege-torrent.com",27],["freehdinterracialporn.in",27],["titsintops.com",27],["pervclips.com",27],["met.bz",28],["hindimean.com",28],["senmanga.com",28],["ebookdz.com",28],["cda-hd.cc",28],["javstream.com",28],["kurazone.net",28],["turkdown.com",28],["urlgalleries.net",28],["movie4u.live",28],["solarmovie.id",28],["01fmovies.com",28],["babesaround.com",28],["dirtyyoungbitches.com",28],["grabpussy.com",28],["join2babes.com",28],["nightdreambabe.com",28],["novoglam.com",28],["novohot.com",28],["novojoy.com",28],["novoporn.com",28],["novostrong.com",28],["pbabes.com",28],["pussystate.com",28],["redpornblog.com",28],["rossoporn.com",28],["sexynakeds.com",28],["thousandbabes.com",28],["gulf-up.com",28],["vidia.tv",28],["cutpaid.com",[28,109]],["javporn.best",[28,112]],["mixloads.com",28],["ancensored.com",28],["savevideo.tube",28],["files.cx",28],["drivefire.co",28],["porngo.com",28],["arenabg.com",28],["vidload.net",28],["animealtadefinizione.it",28],["lkc21.net",28],["mavanimes.co",28],["onnime.net",28],["noxx.to",28],["supertelevisionhd.com",28],["whitemouseapple.com",28],["autoembed.cc",28],["whisperingauroras.com",28],["loadsamusicsarchives.blogspot.com",28],["xxxfiles.com",28],["deseneledublate.com",28],["hentaicloud.com",[28,272]],["descarga.xyz",28],["familyporn.tv",28],["pornxp.com",[28,65]],["pornxp.org",28],["rawmanga.top",28],["eplayer.click",28],["javside.com",[28,80]],["aniwave.to",28],["gayteam.club",28],["mangaraw.org",28],["mplayer.sbs",28],["flixtormovies.co",28],["watchthat70show.net",28],["cs-fundamentals.com",29],["b2bhint.com",[29,301]],["baikin.net",29],["unsurcoenlasombra.com",29],["pelisplus.online",30],["kisshentai.net",31],["insidemarketing.it",31],["worldaide.fr",31],["asmwall.com",31],["bibme.org",32],["citationmachine.net",[32,33]],["citethisforme.com",33],["easybib.com",33],["1plus1plus1equals1.net",34],["cooksinfo.com",34],["heatherdisarro.com",34],["thesassyslowcooker.com",34],["mp4upload.com",35],["cricstream.me",35],["megacanais.com",35],["sanet.lc",35],["antenasport.online",35],["dudestream.com",35],["embedstreams.me",35],["ilovetoplay.xyz",35],["joyousplay.xyz",35],["sportsurge.net",35],["techcabal.net",35],["volokit2.com",35],["ythd.org",35],["kaas.ro",[35,164]],["livesport24.net",35],["sarugbymag.co.za",38],["ikaza.net",38],["imgadult.com",[39,40]],["imgdrive.net",[39,40]],["imgtaxi.com",[39,40]],["imgwallet.com",[39,40]],["hdpornt.com",39],["4tube.com",39],["pornerbros.com",[39,50]],["pichaloca.com",39],["pornodoido.com",39],["pornwatchers.com",[39,50]],["gotporn.com",39],["picturelol.com",39],["imgspice.com",39],["orgyxxxhub.com",[39,70,71]],["befap.com",39],["alphaporno.com",39],["tubedupe.com",39],["sexykittenporn.com",[39,40]],["letmejerk.com",39],["letmejerk2.com",39],["letmejerk3.com",39],["letmejerk4.com",39],["letmejerk5.com",39],["letmejerk6.com",39],["letmejerk7.com",39],["hdtube.porn",39],["madchensex.com",39],["canalporno.com",39],["dreamamateurs.com",39],["eroxia.com",39],["pornozot.com",39],["camgirlbang.com",39],["casting-porno-tube.com",39],["teensexvideos.me",39],["goshow.tv",39],["hentaigo.com",[40,77]],["lolhentai.net",40],["porntopic.com",40],["cocogals.com",[40,50]],["camwhoreshd.com",40],["consoletarget.com",40],["pussytorrents.org",40],["ftopx.com",[40,64,75]],["8boobs.com",[40,64,65]],["babesinporn.com",[40,50,64,65]],["boobgirlz.com",40],["fooxybabes.com",40],["hotstunners.com",[40,64,65]],["jennylist.xyz",40],["jumboporn.xyz",40],["mainbabes.com",[40,64]],["mysexybabes.com",[40,64]],["nakedbabes.club",[40,64]],["pleasuregirl.net",[40,64,65]],["rabbitsfun.com",[40,64,65]],["sexybabesz.com",[40,64]],["vibraporn.com",40],["zazzybabes.com",40],["zehnporn.com",40],["naughtymachinima.com",40],["imgbaron.com",40],["decorativemodels.com",40],["erowall.com",[40,50]],["freyalist.com",40],["guruofporn.com",40],["jesseporn.xyz",40],["kendralist.com",40],["vipergirls.to",40],["lizardporn.com",40],["wantedbabes.com",[40,50]],["bustybloom.com",[40,65]],["exgirlfriendmarket.com",40],["nakedneighbour.com",40],["asianlbfm.net",40],["schoolgirls-asia.org",40],["pics4you.net",40],["moozpussy.com",40],["zoompussy.com",40],["2adultflashgames.com",40],["123strippoker.com",40],["babepedia.com",40],["boobieblog.com",40],["borwap.xxx",40],["chicpussy.net",40],["gamesofdesire.com",40],["hd-xxx.me",40],["hentaipins.com",[40,289]],["longporn.xyz",40],["picmoney.org",40],["pornhd720p.com",40],["sikwap.xyz",40],["super-games.cz",40],["xxx-videos.org",40],["xxxputas.net",40],["silverpic.com",40],["mysexgames.com",40],["sexgames.xxx",40],["picdollar.com",40],["pornstargold.com",40],["eroticity.net",40],["striptube.net",40],["xcity.org",40],["porncoven.com",40],["imgstar.eu",40],["pics4upload.com",40],["ahegaoporn.net",40],["myporntape.com",40],["luxuretv.com",41],["x-x-x.tube",41],["javboys.com",41],["javball.com",41],["adictox.com",41],["otomi-games.com",41],["redhdtube.xxx",41],["faptube.xyz",41],["rat.xxx",41],["hispasexy.org",[41,220]],["javplay.me",41],["watchimpracticaljokers.com",41],["zerion.cc",41],["javcock.com",41],["leviathanmanga.com",41],["gayfor.us",41],["juegosgratisonline.com.ar",41],["levelupalone.com",41],["pelisplayer.xyz",42],["ncdn22.xyz",42],["netu.ac",42],["realyplayonli.xyz",[42,118]],["alocdn.co",[42,118]],["vidscdns.com",42],["doplay.store",42],["filme720.com",42],["onscreens.me",[42,118,331]],["video.q34r.org",[42,118]],["filmoviplex.com",[42,118]],["movie4night.com",[42,118]],["richhioon.eu",[42,118]],["srt.am",43],["ticonsiglio.com",44],["photos-public-domain.com",46],["civilenggforall.com",46],["hdporn.net",[47,48]],["older-mature.net",48],["telorku.xyz",48],["watch-my-gf.com",49],["watchmyexgf.net",49],["cartoonporno.xxx",49],["mangoporn.net",50],["area51.porn",50],["sexytrunk.com",50],["teensark.com",50],["tubous.com",[50,87]],["toyoheadquarters.com",50],["spycock.com",50],["barfuck.com",50],["multporn.net",50],["besthugecocks.com",50],["daftporn.com",50],["italianoxxx.com",50],["collegehdsex.com",50],["lustylist.com",50],["yumstories.com",50],["18-teen-porn.com",50],["69teentube.com",50],["girlshd.xxx",50],["home-xxx-videos.com",50],["orgasmlist.com",50],["teensextube.xxx",50],["pornyfap.com",50],["nudistube.com",50],["uporno.xxx",50],["ultrateenporn.com",50],["gosexpod.com",50],["al4a.com",50],["grannysex.name",50],["porntb.com",50],["scopateitaliane.it",50],["sexbox.online",50],["teenpornvideo.sex",50],["twatis.com",[50,64]],["flashingjungle.com",50],["fetishburg.com",50],["privateindianmovies.com",50],["soyoungteens.com",50],["gottanut.com",50],["uiporn.com",50],["xcafe.com",50],["gfsvideos.com",50],["home-made-videos.com",50],["tbib.org",50],["sensualgirls.org",50],["ariestube.com",50],["asian-teen-sex.com",50],["18asiantube.com",50],["wholevideos.com",50],["asianporntube69.com",50],["babeswp.com",50],["bangyourwife.com",50],["bdsmslavemovie.com",50],["bdsmwaytube.com",50],["bestmaturewomen.com",50],["classicpornvids.com",50],["pornpaw.com",50],["dawntube.com",50],["desimmshd.com",50],["dirtytubemix.com",50],["plumperstube.com",50],["enormousbabes.net",50],["exclusiveindianporn.com",50],["figtube.com",50],["amateur-twink.com",50],["freeboytwinks.com",50],["freegrannyvids.com",50],["freexmovs.com",50],["freshbbw.com",50],["frostytube.com",50],["fuckhottwink.com",50],["fuckslutsonline.com",50],["gameofporn.com",50],["gayboyshd.com",50],["getitinside.com",[50,107]],["giantshemalecocks.com",50],["erofus.com",50],["hd-tube-porn.com",50],["hardcorehd.xxx",50],["hairytwat.org",50],["iwantmature.com",50],["justababes.com",50],["juicyflaps.com",50],["jenpornuj.cz",50],["javteentube.com",50],["hard-tube-porn.com",50],["klaustube.com",50],["kaboomtube.com",50],["lustyspot.com",50],["lushdiaries.com",50],["lovelynudez.com",[50,132]],["dailyangels.com",50],["ljcam.net",50],["myfreemoms.com",50],["nakenprat.com",50],["oosex.net",[50,65]],["oldgrannylovers.com",50],["ohueli.net",50],["pornuploaded.net",50],["pornstarsadvice.com",50],["bobs-tube.com",50],["pornohaha.com",50],["pornmam.com",50],["pornhegemon.com",50],["pornabcd.com",50],["porn-hd-tube.com",50],["thehentaiworld.com",50],["pantyhosepink.com",50],["queenofmature.com",50],["realvoyeursex.com",50],["realbbwsex.com",50],["rawindianporn.com",50],["onlygoldmovies.com",50],["rainytube.com",50],["stileproject.com",50],["slutdump.com",50],["nastybulb.com",50],["sextube-6.com",50],["porntubegf.com",50],["sassytube.com",50],["smplace.com",50],["maturell.com",50],["nudemilfwomen.com",50],["pornoplum.com",50],["widewifes.com",50],["wowpornlist.xyz",50],["vulgarmilf.com",50],["oldgirlsporn.com",50],["freepornrocks.com",50],["erogen.su",50],["get-to.link",[50,75]],["beegsexxx.com",50],["watchpornx.com",[50,156]],["ytboob.com",50],["saradahentai.com",50],["hentaiarena.com",50],["absolugirl.com",50],["absolutube.com",50],["allafricangirls.net",50],["asianpornphoto.net",50],["freexxxvideos.pro",50],["videosxxxporno.gratis",50],["nude-teen-18.com",50],["xemales.com",50],["szexkepek.net",50],["wife-home-videos.com",50],["sexmadeathome.com",50],["nylondolls.com",50],["milforia.com",50],["onlylesbiantube.com",50],["teensfuck.me",50],["imgprime.com",51],["ondemandkorea.com",52],["bdsmx.tube",53],["mrgay.com",53],["pornxs.com",54],["ifenpaidy.com",55],["dailygeekshow.com",56],["rue89lyon.fr",57],["onlinemschool.com",58],["bigtitsxxxsex.com",60],["zmovs.com",60],["ceesty.com",61],["corneey.com",61],["destyy.com",61],["festyy.com",61],["gestyy.com",61],["lavozdigital.es",61],["tnaflix.com",62],["sunporno.com",[64,65]],["angelgals.com",64],["babesexy.com",64],["hotbabeswanted.com",64],["nakedgirlsroom.com",64],["nudebabes.sexy",[64,65]],["sexybabes.club",64],["sexybabesart.com",64],["favefreeporn.com",64],["onlygayvideo.com",64],["peachytube.com",64],["stepsisterfuck.me",64],["adultdvdparadise.com",65],["freeomovie.info",65],["fullxxxmovies.me",65],["mangoparody.com",65],["mangoporn.co",65],["netflixporno.net",65],["pandamovies.me",65],["playpornfree.xyz",65],["pornkino.cc",65],["pornwatch.ws",65],["watchfreexxx.pw",65],["watchxxxfree.pw",65],["xopenload.pw",65],["xtapes.me",65],["xxxmoviestream.xyz",65],["xxxparodyhd.net",65],["xxxscenes.net",65],["xxxstream.me",65],["youwatchporn.com",65],["nudismteens.com",65],["youx.xxx",65],["asiansex.life",65],["hypnohub.net",65],["oldies.name",65],["xnxxporn.video",65],["xxxdessert.com",65],["xxxshake.com",65],["manhwa18.cc",65],["best18porn.com",65],["bigtitslust.com",[65,294]],["manga18fx.com",65],["sexywomeninlingerie.com",65],["theteensexy.com",65],["xteensex.net",65],["stiflersmoms.com",65],["gifhq.com",65],["amateur-couples.com",65],["teen-hd-sex.com",65],["tube-teen-18.com",65],["xxx-asian-tube.com",65],["pornhost.com",66],["locopelis.com",[67,68,69]],["repelis.net",67],["perfectmomsporn.com",70],["donkparty.com",73],["streamdreams.org",75],["bdsmporn.cc",75],["cocoporn.net",75],["dirtyporn.cc",75],["faperplace.com",75],["freeadultvideos.cc",75],["freepornstream.cc",75],["generalpornmovies.com",75],["kinkyporn.cc",75],["moviesxxx.cc",75],["movstube.net",75],["onlinefetishporn.cc",75],["peetube.cc",75],["pornonline.cc",75],["porntube18.cc",75],["streamextreme.cc",75],["streamporn.cc",75],["videoxxx.cc",75],["watchporn.cc",75],["x24.video",75],["xxx24.vip",75],["xxxonline.cc",75],["xxxonlinefree.com",75],["xxxopenload.com",75],["gonzoporn.cc",75],["onlinexxx.cc",75],["tvporn.cc",75],["allporncomic.com",75],["thepiratebay.org",75],["videosection.com",75],["pornky.com",75],["tubxporn.com",75],["imgcredit.xyz",75],["desixxxtube.org",75],["freeindianporn2.com",75],["kashtanka2.com",75],["kompoz2.com",75],["pakistaniporn2.com",75],["mangahere.onl",[78,176]],["worldfreeware.com",79],["ellibrepensador.com",79],["rexdlfile.com",79],["sfastwish.com",80],["watchjavnow.xyz",80],["juicywest.com",80],["fakyutube.com",80],["mm9842.com",80],["mm9846.com",80],["gaystream.cloud",80],["javmvp.com",80],["watch-jav-english.live",80],["0gogle.com",80],["videobot.stream",80],["iframe2videos.xyz",80],["vidohd.com",80],["kitabmarkaz.xyz",80],["animepl.xyz",80],["faptiti.com",80],["goana.xyz",80],["javplaya.com",80],["xvideostream.net",80],["xxxjaa.xyz",80],["japopav.tv",80],["streamm4u.club",80],["fembed-hd.com",80],["javhdfree.icu",80],["nekolink.site",80],["av4asia.com",80],["suzihaza.com",80],["vcdn-stream.xyz",80],["mycloudzz.com",80],["javpoll.com",80],["javleaked.com",80],["pornhole.club",80],["ffem.club",80],["jvembed.com",80],["megafilmeshdonline.org",80],["jav247.top",80],["nashstream.top",80],["yuistream.xyz",80],["mavavid.com",80],["diampokusy.com",80],["vidmedia.top",80],["moviepl.xyz",80],["superplayxyz.club",80],["viplayer.cc",80],["nsfwzone.xyz",80],["layarkacaxxi.icu",80],["embed-media.com",80],["javpornhd.online",80],["zojav.com",80],["javenglish.me",80],["owodeuwu.xyz",80],["javbigo.xyz",80],["pornhubed.com",80],["playerjavseen.com",80],["javsubbed.xyz",80],["xsub.cc",80],["fembed9hd.com",80],["onscreensvideo.com",80],["baldrfilms.xyz",80],["gaymovies.top",80],["guccihide.com",80],["streamhide.to",80],["vidhidevip.com",80],["cloudrls.com",80],["embedwish.com",80],["fc2stream.tv",80],["javhahaha.us",80],["javlion.xyz",80],["javibe.net",80],["jvideo.xyz",80],["kissmovies.net",80],["streamvid.top",80],["vidgo.top",80],["nudecelebforum.com",81],["pronpic.org",82],["chyoa.com",83],["thisisfutbol.com",84],["pcwelt.de",85],["sixsistersstuff.com",86],["vermangasporno.com",89],["celebjihad.com",89],["dirtyship.com",89],["celebmasta.com",89],["fullporner.com",[89,234]],["lejdd.fr",90],["gamekult.com",90],["bharian.com.my",90],["thememypc.net",91],["cityam.com",92],["inhabitat.com",93],["speedtest.net",95],["livingstondaily.com",95],["goafricaonline.com",96],["poedb.tw",97],["link.tl",98],["lnk.news",99],["lnk.parts",99],["zootube1.com",100],["xxxtubezoo.com",100],["zooredtube.com",100],["videos1002.com",101],["sab.bz",101],["javseen.tv",101],["autobild.de",103],["alimaniac.com",104],["sbs.com.au",105],["1xxx-tube.com",107],["asssex-hd.com",107],["bigcockfreetube.com",107],["bigdickwishes.com",107],["enjoyfuck.com",107],["freemomstube.com",107],["fuckmonstercock.com",107],["gobigtitsporn.com",107],["gofetishsex.com",107],["hard-tubesex.com",107],["hd-analporn.com",107],["hiddencamstube.com",107],["kissmaturestube.com",107],["lesbianfantasyxxx.com",107],["modporntube.com",107],["pornexpanse.com",107],["pornokeep.com",107],["pussytubeebony.com",107],["tubesex.me",107],["vintagesexpass.com",107],["voyeur-pornvideos.com",107],["voyeurspyporn.com",107],["voyeurxxxfree.com",107],["xxxtubenote.com",107],["yummysextubes.com",107],["nakedarab-tube.com",107],["xxxtubepass.com",107],["yestubemature.com",107],["yourhomemadetube.com",107],["yourtranny-sex.com",107],["tubexxxone.com",107],["airsextube.com",107],["asianbabestube.com",107],["bigtitsxxxfree.com",107],["blowjobpornset.com",107],["entertubeporn.com",107],["finexxxvideos.com",107],["freesexvideos24.com",107],["fuckhairygirls.com",107],["gopornindian.com",107],["grandmatube.pro",107],["grannyfucko.com",107],["grannyfuckxxx.com",107],["hiddencamhd.com",107],["hindiporno.pro",107],["indianbestporn.com",107],["japanesemomsex.com",107],["japanxxxass.com",107],["massagefreetube.com",107],["maturepussies.pro",107],["megajapansex.com",107],["new-xxxvideos.com",107],["xxxblowjob.pro",107],["xxxtubegain.com",107],["xxxvideostrue.com",107],["acutetube.net",107],["agedtubeporn.com",107],["agedvideos.com",107],["onlinegrannyporn.com",107],["freebigboobsporn.com",107],["tubeinterracial-porn.com",107],["best-xxxvideos.com",107],["bestanime-xxx.com",107],["blowxxxtube.com",107],["callfuck.com",107],["teenhubxxx.com",107],["tubepornasian.com",107],["xxxtubedot.com",107],["blowjobfucks.com",107],["dirtyasiantube.com",107],["maturewomenfucks.com",107],["pornmaturetube.com",107],["setfucktube.com",107],["tourporno.com",107],["do-xxx.com",107],["dotfreesex.com",107],["dotfreexxx.com",107],["easymilftube.net",107],["electsex.com",107],["fineretroporn.com",107],["freehqtube.com",107],["freshmaturespussy.com",107],["freshsexxvideos.com",107],["fuckedporno.com",107],["gallant-matures.com",107],["hqhardcoreporno.com",107],["girlssexxxx.com",107],["glamourxxx-online.com",107],["vintagepornnew.com",107],["tubevintageporn.com",107],["goxxxvideos.com",107],["grouppornotube.com",107],["hqxxxmovies.com",107],["hqsex-xxx.com",107],["hqamateurtubes.com",107],["hotpussyhubs.com",107],["hdpornteen.com",107],["indecentvideos.com",107],["ifreefuck.com",107],["kittyfuckstube.com",107],["lightxxxtube.com",107],["momstube-porn.com",107],["modelsxxxtube.com",107],["milfpussy-sex.com",107],["nicexxxtube.com",107],["neatpornodot.com",107],["neatfreeporn.com",107],["bigtitsporn-tube.com",107],["tubehqxxx.com",107],["nakedbbw-sex.com",107],["onlineteenhub.com",107],["online-xxxmovies.com",107],["pussyhothub.com",107],["pornxxxplace.com",107],["pornoteensex.com",107],["pornonote.pro",107],["pornoaid.com",107],["pornclipshub.com",107],["whitexxxtube.com",107],["sweetadult-tube.com",107],["sweet-maturewomen.com",107],["sexyoungclips.com",107],["sexymilfsearch.com",107],["sextubedot.com",107],["hqmaxporn.com",107],["sexlargetube.com",107],["sexhardtubes.com",107],["tubepornstock.com",107],["xfuckonline.com",107],["sheamateur.com",108],["cuts-url.com",109],["exe.io",[109,182]],["adsafelink.com",109],["modebaca.com",109],["cutdl.xyz",109],["shurt.pw",[109,286]],["smoner.com",109],["droplink.co",109],["ez4short.com",109],["try2link.com",[109,243]],["jameeltips.us",109],["blog.linksfire.co",109],["recipestutorials.com",109],["shrinkforearn.in",109],["linksly.co",109],["curto.win",109],["imagenesderopaparaperros.com",109],["shortenbuddy.com",109],["apksvip.com",109],["4cash.me",109],["teknomuda.com",109],["savelink.site",109],["samaa-pro.com",109],["miklpro.com",109],["modapk.link",109],["1shorten.com",109],["ccurl.net",109],["linkpoi.me",109],["pewgame.com",109],["crazyblog.in",109],["gtlink.co",109],["rshrt.com",109],["dz-linkk.com",109],["adurly.cc",109],["link.asiaon.top",109],["download.sharenulled.net",109],["beingtek.com",109],["adlinkweb.com",109],["swzz.xyz",109],["cutp.in",109],["gsm-solution.com",110],["ihackedgames.com",111],["dvdporngay.com",111],["software-on.com",111],["kpopjjang.com",[111,181]],["siteunblocked.info",[111,266]],["unblocked.name",[111,266]],["uproxy2.biz",[111,266]],["gomo.to",112],["dlapk4all.com",112],["popmatters.com",113],["planetf1.com",113],["austin.culturemap.com",113],["northern-scot.co.uk",113],["icy-veins.com",114],["bidouillesikea.com",114],["truetrophies.com",115],["alcasthq.com",116],["mzee.com",116],["supforums.com",117],["player.xxxbestsites.com",118],["player.tabooporns.com",118],["wiztube.xyz",118],["megatube.xxx",118],["hot-cartoon.com",118],["wowstream.top",118],["haes.tech",118],["koreanpornmovie.xyz",118],["xxvideoss.net",118],["player.subespanolvip.com",118],["vidcdn.co",[118,237]],["justswallows.net",118],["wilifilm.net",118],["rpdrlatino.live",118],["pbtube.co",118],["streaming-french.net",118],["koreanbj.club",118],["monstream.org",118],["player.hdgay.net",118],["ytms.one",118],["cdngee.com",118],["fshd3.club",118],["hd-streaming.net",118],["streaming-french.org",118],["telenovelas-turcas.com.es",118],["gocurrycracker.com",120],["xcums.com",120],["ihub.live",120],["naturalbd.com",120],["freeuseporn.com",120],["salamanca24horas.com",121],["bollywoodshaadis.com",122],["ngelag.com",123],["huim.com",124],["cambay.tv",127],["caminspector.net",127],["camwhorespy.com",127],["camwhoria.com",127],["camgoddess.tv",127],["zemporn.com",128],["wpgdadatong.com",129],["wikifeet.com",130],["root-top.com",131],["allmomsex.com",132],["allnewindianporn.com",132],["analxxxvideo.com",132],["animalextremesex.com",132],["anime3d.xyz",132],["animefuckmovies.com",132],["animepornfilm.com",132],["animesexbar.com",132],["animesexclip.com",132],["animexxxsex.com",132],["animexxxfilms.com",132],["anysex.club",132],["apetube.asia",132],["asianfuckmovies.com",132],["asianfucktube.com",132],["asianporn.sexy",132],["asiansexcilps.com",132],["beeg.fund",132],["beegvideoz.com",132],["bestasiansex.pro",132],["bravotube.asia",132],["brutalanimalsfuck.com",132],["candyteenporn.com",132],["daddyfuckmovies.com",132],["desifuckonline.com",132],["exclusiveasianporn.com",132],["exteenporn.com",132],["fantasticporn.net",132],["fantasticyoungporn.com",132],["fineasiansex.com",132],["firstasianpussy.com",132],["freeindiansextube.com",132],["freepornasians.com",132],["freerealvideo.com",132],["fuck-beeg.com",132],["fuck-xnxx.com",132],["fuckasian.pro",132],["fuckfuq.com",132],["fuckundies.com",132],["gojapaneseporn.com",132],["golderotica.com",132],["goodyoungsex.com",132],["goyoungporn.com",132],["hardxxxmoms.com",132],["hdvintagetube.com",132],["hentaiporn.me",132],["hentaisexfilms.com",132],["hentaisexuality.com",132],["hot-teens-movies.mobi",132],["hotanimepornvideos.com",132],["hotanimevideos.com",132],["hotasianpussysex.com",132],["hotjapaneseshows.com",132],["hotmaturetube.com",132],["hotmilfs.pro",132],["hotorientalporn.com",132],["hotpornyoung.com",132],["hotxxxjapanese.com",132],["hotxxxpussy.com",132],["indiafree.net",132],["indianpornvideo.online",132],["japanpornclip.com",132],["japanesetube.video",132],["japansex.me",132],["japanesexxxporn.com",132],["japansporno.com",132],["japanxxx.asia",132],["japanxxxworld.com",132],["keezmovies.surf",132],["lingeriefuckvideo.com",132],["liveanimalporn.zooo.club",132],["madhentaitube.com",132],["megahentaitube.com",132],["megajapanesesex.com",132],["megajapantube.com",132],["milfxxxpussy.com",132],["momsextube.pro",132],["momxxxass.com",132],["monkeyanimalporn.com",132],["moviexxx.mobi",132],["newanimeporn.com",132],["newjapanesexxx.com",132],["nicematureporn.com",132],["nudeplayboygirls.com",132],["openxxxporn.com",132],["originalindianporn.com",132],["originalteentube.com",132],["pig-fuck.com",132],["plainasianporn.com",132],["popularasianxxx.com",132],["pornanimetube.com",132],["pornasians.pro",132],["pornhat.asia",132],["pornheed.online",132],["pornjapanesesex.com",132],["pornomovies.asia",132],["pornvintage.tv",132],["primeanimesex.com",132],["realjapansex.com",132],["realmomsex.com",132],["redsexhub.com",132],["retroporn.world",132],["retrosexfilms.com",132],["sex-free-movies.com",132],["sexanimesex.com",132],["sexanimetube.com",132],["sexjapantube.com",132],["sexmomvideos.com",132],["sexteenxxxtube.com",132],["sexxxanimal.com",132],["sexyoungtube.com",132],["sexyvintageporn.com",132],["sopornmovies.com",132],["spicyvintageporn.com",132],["sunporno.club",132],["tabooanime.club",132],["teenextrem.com",132],["teenfucksex.com",132],["teenhost.net",132],["teensexass.com",132],["tnaflix.asia",132],["totalfuckmovies.com",132],["totalmaturefuck.com",132],["txxx.asia",132],["voyeurpornsex.com",132],["warmteensex.com",132],["wetasiancreampie.com",132],["wildhentaitube.com",132],["wowyoungsex.com",132],["xhamster-art.com",132],["xmovie.pro",132],["xnudevideos.com",132],["xnxxjapon.com",132],["xpics.me",132],["xvide.me",132],["xxxanimefuck.com",132],["xxxanimevideos.com",132],["xxxanimemovies.com",132],["xxxhentaimovies.com",132],["xxxhothub.com",132],["xxxjapaneseporntube.com",132],["xxxlargeporn.com",132],["xxxmomz.com",132],["xxxpornmilf.com",132],["xxxpussyclips.com",132],["xxxpussysextube.com",132],["xxxretrofuck.com",132],["xxxsex.pro",132],["xxxsexyjapanese.com",132],["xxxteenyporn.com",132],["xxxvideo.asia",132],["xxxvideos.ink",132],["xxxyoungtv.com",132],["youjizzz.club",132],["youngpussyfuck.com",132],["za.gl",134],["activistpost.com",[135,139]],["ladepeche.fr",136],["jemontremonminou.com",136],["jemontremasextape.com",136],["jemontremabite.com",136],["bitzite.com",[136,180]],["kinoger.ru",137],["moviesapi.club",137],["clasicotas.org",138],["jattmate.com",139],["saveshared.com",139],["simpledownload.net",139],["compucalitv.com",140],["blademaster666.com",141],["hot2k.com",141],["luchoedu.org",141],["lupaste.com",141],["pornovenezolano.com.ve",141],["romnation.net",141],["venezporn.com",141],["hubzter.com",142],["collater.al",142],["nzpocketguide.com",142],["volksstimme.de",144],["phonenumber-lookup.info",145],["maniac.de",146],["cambro.tv",147],["filerio.in",147],["call2friends.com",147],["gigaho.com",147],["trendsderzukunft.de",147],["forum.lolesporte.com",147],["mytoolz.net",147],["haoweichi.com",147],["tcheats.com",148],["tobys.dk",148],["sembunyi.in",149],["anime-jl.net",150],["zplayer.live",151],["fuckdy.com",152],["bdsmporntub.com",152],["femdomporntubes.com",152],["spellchecker.net",153],["nackte.com",156],["highporn.net",156],["blasensex.com",156],["thegatewaypundit.com",157],["your-daily-girl.com",157],["720pxmovies.blogspot.com",158],["penis-bilder.com",159],["boyfriendtv.com",159],["dansmovies.com",159],["shegotass.info",159],["4rkinggame.com",159],["phimmoiaz.cc",159],["papahd.club",159],["papahd1.xyz",159],["mvidoo.com",159],["imgdawgknuttz.com",160],["m4maths.com",161],["poki-gdn.com",161],["megapornfreehd.com",162],["tonpornodujour.com",163],["absentescape.net",164],["forgepattern.net",164],["vidlink.pro",164],["nflscoop.xyz",164],["tunovelaligera.com",165],["dr-farfar.com",165],["nysainfo.pl",165],["c1ne.co",165],["bleachmx.fr",165],["choq.fm",165],["geeksweb.net",165],["usb-antivirus.com",165],["eroticmv.com",165],["allywebsite.com",165],["ktm2day.com",165],["downloadcursos.net",165],["bezpolitickekorektnosti.cz",166],["protopage.com",167],["topito.com",168],["livesport.ws",170],["citynow.it",171],["variety.com",172],["cuatro.com",173],["mitele.es",173],["telecinco.es",173],["serieslandia.com",174],["softwaredescargas.com",174],["anongamez.com",174],["morritastube.xxx",[174,283]],["rawstory.com",175],["post-gazette.com",175],["bilasport.net",177],["yogitimes.com",178],["juba-get.com",179],["percentagecalculator.guru",179],["kuncomic.com",179],["claim.8bit.ca",[180,253]],["lightnovelpdf.com",180],["ta2deem7arbya.com",180],["adsy.pw",180],["playstore.pw",180],["bootyexpo.net",180],["arblinks.xyz",180],["arbweb.info",180],["th3tech.net",180],["cryptonationfaucet.com",180],["solarchaine.com",180],["tokenmix.pro",180],["terafly.me",180],["addtobucketlist.com",180],["alternativa104.net",180],["asumesi.com",180],["ayo24.id",180],["barrier-free.net",180],["berich8.com",180],["bloooog.it",180],["branditechture.agency",180],["chataigpt.org",180],["coinsrev.com",180],["eliobenedetto.it",180],["iamflorianschulze.com",180],["kyoto-kanko.net",180],["limontorrents.com",180],["livenewsof.com",180],["medeberiya1.com",180],["medeberiyax.com",180],["oyundunyasi.net",180],["parrocchiapalata.it",180],["photoshopvideotutorial.com",180],["samovies.net",180],["sulocale.sulopachinews.com",180],["tabering.net",180],["xn--nbkw38mlu2a.com",180],["faucetbravo.fun",180],["vstdrive.in",181],["wealthh.xyz",182],["lonely-mature.com",183],["tubepornclassic.com",184],["the-voice-of-germany.de",185],["adn.com",186],["spokesman.com",187],["news-herald.com",187],["verprogramasonline.com",188],["savealoonie.com",188],["pervertgirlsvideos.com",188],["open3dmodel.com",188],["elmundo.es",189],["expansion.com",189],["marca.com",189],["allusione.org",190],["cyberstumble.com",190],["wickedspot.org",190],["boredbat.com",190],["web.businessuniqueidea.com",190],["questloops.com",190],["venusarchives.com",190],["freemagazines.top",190],["elektrikmen.com",190],["solotrend.net",190],["itsecuritynews.info",190],["thebharatexpressnews.com",190],["inwepo.co",190],["daemon-hentai.com",190],["pornstash.in",190],["toramemoblog.com",190],["7daystodiemods.com",190],["7review.com",190],["asupan.me",190],["avitter.net",190],["bi-girl.net",190],["carryflix.icu",190],["dark5k.com",190],["fairyhorn.cc",190],["gojo2.com",190],["gorecenter.com",190],["huitranslation.com",190],["javhdvideo.org",190],["nakiny.com",190],["nemumemo.com",190],["peppe8o.com",190],["phodoi.vn",190],["savingsomegreen.com",190],["forocoches.com",191],["spinbot.com",192],["androidonepro.com",193],["arcadepunks.com",194],["wohnungsboerse.net",195],["nbareplayhd.com",197],["convert-case.softbaba.com",197],["thepoorcoder.com",197],["techgeek.digital",197],["warps.club",198],["truyenaudiocv.net",198],["kompasiana.com",199],["spectrum.ieee.org",200],["thenation.com",201],["newsonthegotoday.com",202],["sandiegouniontribune.com",203],["fernsehserien.de",203],["femalefirst.co.uk",204],["theregister.co.uk",205],["sportstream.live",206],["blowjobgif.net",207],["erospots.info",208],["pornforrelax.com",209],["macrumors.com",210],["faupto.com",[211,212]],["dogemate.com",212],["napolipiu.com",213],["manpeace.org",214],["faucetwork.space",214],["gaminginfos.com",214],["png.is",[215,216,217]],["nohat.cc",[216,217]],["fuskator.com",218],["scrubson.blogspot.com",219],["khmer7.org",219],["aquariumgays.com",220],["paginadanoticia.com.br",221],["alliptvlinks.com",222],["blog.textpage.xyz",222],["iguarras.com",223],["iputitas.net",223],["fastream.to",223],["freethesaurus.com",226],["thefreedictionary.com",226],["counterstrike-hack.leforum.eu",227],["ajt.xooit.org",227],["ludwig-van.com",228],["standardmedia.co.ke",228],["files.fm",228],["sunci.net",229],["yoykp.com",229],["gamerxyt.com",230],["faqwiki.us",230],["zeeplayer.pages.dev",230],["cookad.net",230],["pmkisanlists.in",230],["shramikcard.in",230],["shareus.io",230],["sportfacts.net",[230,245]],["sportnews.to",230],["drivemoe.com",231],["dsharer.com",231],["looptorrent.org",232],["noicetranslations.blogspot.com",232],["serviceemmc.com",232],["shorttrick.in",232],["sharedisk.me",232],["shrdsk.me",232],["pupupul.site",233],["fansubseries.com.br",233],["stbnetu.xyz",233],["xmateur.com",234],["jadoo.lol",235],["sinensistoon.com",236],["ncdnx3.xyz",237],["usersdrive.com",238],["manoramaonline.com",239],["realmoasis.com",240],["technewsworld.com",241],["aylink.co",244],["gitizle.vip",244],["shtms.co",244],["suaurl.com",[245,246]],["mysports.to",245],["blog24.me",247],["exactpay.online",[247,254]],["soltoshindo.com",247],["crypto4yu.com",247],["laweducationinfo.com",248],["savemoneyinfo.com",248],["worldaffairinfo.com",248],["godstoryinfo.com",248],["successstoryinfo.com",248],["cxissuegk.com",248],["learnmarketinfo.com",248],["bhugolinfo.com",248],["armypowerinfo.com",248],["rsadnetworkinfo.com",248],["rsinsuranceinfo.com",248],["rsfinanceinfo.com",248],["rsgamer.app",248],["rssoftwareinfo.com",248],["rshostinginfo.com",248],["rseducationinfo.com",248],["phonereviewinfo.com",248],["makeincomeinfo.com",248],["gknutshell.com",248],["vichitrainfo.com",248],["workproductivityinfo.com",248],["dopomininfo.com",248],["hostingdetailer.com",248],["fitnesssguide.com",248],["tradingfact4u.com",248],["cryptofactss.com",248],["softwaredetail.com",248],["artoffocas.com",248],["insurancesfact.com",248],["currentrecruitment.com",249],["investorveda.com",249],["techacode.com",250],["azmath.info",250],["downfile.site",250],["downphanmem.com",250],["expertvn.com",250],["memangbau.com",250],["trangchu.news",250],["aztravels.net",250],["techyuth.xyz",251],["claimclicks.com",252],["10convert.com",255],["pleated-jeans.com",255],["obsev.com",255],["wepc.com",255],["gal-dem.com",256],["mymusicreviews.com",257],["thechat.cafe",257],["gaystream.pw",258],["lagacetadesalamanca.es",259],["infocorp.io",260],["addictinggames.com",261],["comparteunclic.com",262],["grab.tc",262],["starbux.io",262],["qashbits.com",262],["upnewsinfo.com",263],["smdailyjournal.com",264],["toolforge.org",265],["getdogecoins.com",267],["malaysiastock.biz",268],["1bit.space",269],["1bitspace.com",269],["ytanime.tv",269],["hyundaitucson.info",270],["pimylifeup.com",271],["camwhorez.video",272],["best-shopme.com",273],["cpomagazine.com",274],["doramasyt.com",275],["monoschinos.com",275],["xxxdan.com",276],["abandonmail.com",277],["hentais.tube",278],["hentaitube.online",278],["hentaidude.com",279],["aegeanews.gr",280],["batterypoweronline.com",280],["brezovycukr.cz",280],["centrocommercialevulcano.com",280],["cieonline.co.uk",280],["commsbusiness.co.uk",280],["dailygrindonline.net",280],["delo.bg",280],["dynastyseries.com",280],["fabmx1.com",280],["fat-bike.com",280],["fmj.co.uk",280],["localemagazine.com",280],["loveourweddingmag.com",280],["metaforespress.gr",280],["myvalley.it",280],["niestatystyczny.pl",280],["primapaginamarsala.it",280],["ringelnatz.net",280],["schoolsweek.co.uk",280],["sikkenscolore.it",280],["sportbet.gr",280],["stadtstudenten.de",280],["stagemilk.com",280],["tautasdziesmas.lv",280],["thetoneking.com",280],["toplickevesti.com",280],["zeroradio.co.uk",280],["miohentai.com",281],["sluttyrat.com",282],["k12reader.com",284],["cachevalleydaily.com",284],["panel.skynode.pro",285],["imag-r.com",285],["atlaq.com",286],["douploads.net",286],["moalm-qudwa.blogspot.com",286],["mcloud.bz",287],["theflixer.tv",287],["vidstream.pro",287],["radionylive.com",288],["radioitalylive.com",288],["radiolovelive.com",288],["radiocountrylive.com",288],["radiosymphony.com",288],["miamibeachradio.com",288],["radiorockon.com",288],["radioitaliacanada.com",288],["radioitalianmusic.com",288],["radioamericalatina.com",288],["radiosantaclaus.com",288],["radionorthpole.com",288],["radionatale.com",288],["pornvideoq.com",290],["gaminggorilla.com",290],["sexuhot.com",290],["rexxx.org",291],["world4.eu",292],["flinsetyadi.com",292],["trytutorial.com",292],["rimworldbase.com",292],["ifreemagazines.com",292],["romaniataramea.com",293],["amateur8.com",294],["freeporn8.com",294],["maturetubehere.com",294],["sortporn.com",294],["textovisia.com",296],["hotcleaner.com",297],["momo-net.com",298],["hardwarezone.com.sg",299],["veryfastdownload.pw",303],["nation.africa",304],["manganelo.tv",305],["hdthevid.online",305],["vidhdthe.online",305],["vermoegen.org",306],["javhub.net",[307,308]],["inhumanity.com",309],["miraculous.to",310],["glotorrents.fr-proxy.com",311],["glotorrents.theproxy.ws",311],["tutele.sx",312],["dirp.me",313],["t18cv.com",314],["codecap.org",315],["integral-calculator.com",316],["derivative-calculator.net",316],["getcopy.link",317],["basic-tutorials.de",318],["ytmp3cut.com",319],["depvailon.com",320],["111.90.150.10",321],["111.90.150.149",321],["111.90.151.26",321],["111.90.159.159",321],["111.90.141.252",321],["mangahentai.xyz",322],["nhentai.io",[323,324]],["erofound.com",325],["erome.com",326],["flaticon.com",327],["zertalious.xyz",[328,343]],["tweakcentral.net",329],["nokiahacking.pl",330],["javct.net",331],["veryfreeporn.com",332],["austiblox.net",333],["linkbin.me",[334,335]],["teachoo.com",337],["maisonbrico.com",338],["vebo1.com",339],["komiklokal.me",340],["seriesmetro.net",341],["kodewebsite.com",344],["qcheng.cc",345],["hygiena.com",346],["netchimp.co.uk",347],["comohoy.com",[348,349]],["cimanow.cc",349],["xgroovy.com",350],["ruyashoujo.com",351],["gktech.uk",352],["x2download.com",353],["familyminded.com",354],["foxvalleyfoodie.com",354],["merriam-webster.com",354],["news.com.au",354],["playstationlifestyle.net",354],["sportsnaut.com",354],["tempumail.com",354],["toledoblade.com",354],["play.diziyou.co",355],["truyen-hentai.com",356],["redd.tube",357],["sendspace.com",358],["leechpremium.net",359],["sfr.fr",360],["ericdraken.com",361],["djs.sk",363],["pythonjobshq.com",364],["sensacine.com",366]]);

const entitiesMap = new Map([["hqq",2],["lookmovie",[2,17]],["shrink",[2,20,109]],["wetteronline",4],["ohmymag",7],["pingit",[9,20,28,76]],["oload",[9,20,27,28]],["streamhoe",[9,20]],["123europix",[13,14,28]],["gamestorrents",14],["gogoanimes",14],["limetorrents",14],["piratebayz",14],["europixhd",[14,28]],["hdeuropix",[14,28]],["topeuropix",[14,28]],["grantorrent",[14,94]],["moviescounter",14],["elixx",[14,78]],["telerium",14],["savelinks",14],["hentaisd",14],["mrpiracy",14],["prostoporno",16],["kissasian",17],["bflix",[17,28,287]],["m4ufree",[17,118]],["0123movies",17],["gomovies",17],["fembed",[17,80]],["mavplay",[17,25,80]],["videobb",[17,25,80,112]],["5movies",17],["123moviesc",17],["fmovies",17],["proxybit",17],["123movieshd",17],["fbgo",[17,80]],["sbchip",[17,80]],["sbflix",[17,80]],["sbplay",[17,80]],["sbplay2",[17,80]],["sbplay3",[17,80]],["sbrulz",[17,80]],["streamsb",[17,80,302]],["ask4movie",17],["1tamilmv",17],["buffstream",17],["tenies-online",17],["m4uhd",17],["hdhub4u",17],["watchseries9",17],["moviesjoy",17],["torrentstatus",17],["yts2",17],["y2mate",17],["alexsports",17],["2embed",17],["seulink",17],["encurtalink",17],["animepahe",[20,36]],["kwik",[20,36]],["1337x.unblocked",20],["1337x.unblockit",[20,23]],["pussyspace",20],["urlcero",20],["shrtfly",[20,63]],["linkshorts",20],["streamcdn",[20,28]],["vinaurl",[20,109]],["komikcast",20],["bolly4u",[20,135]],["tugaflix",20],["hdfriday",20],["123movies",20],["shortearn",[20,28]],["mstream",20],["watch4hd",20],["gdtot",20],["bluemediafiles",20],["dailysport",[20,28]],["btdb",[20,24]],["linksfire",20],["pureshort",[20,109]],["bluemediadownload",[20,27]],["bluemediafile",[20,27]],["bluemedialink",[20,27]],["bluemediastorage",[20,27]],["bluemediaurls",[20,27]],["urlbluemedia",[20,27]],["link1s",[20,109]],["shorttey",[20,109]],["videoplayer",20],["movizland",20],["sitesunblocked",20],["1377x",20],["bcvc",20],["thepiratebay",[22,30]],["tpbay",22],["camwhores",[22,40]],["camwhorestv",[22,40]],["filesamba",22],["theproxy",22],["steamplay",[23,24,25]],["streamp1ay",[24,25]],["topflix",24],["ustream",24],["pixlev",24],["moviessources",24],["sbvideo",[24,80]],["steanplay",25],["stemplay",25],["streanplay",25],["txxx",25],["asianclub",[25,28,80]],["xmoviesforyou",[27,30]],["cuevana3",[27,102]],["vidcloud",[27,80,118]],["pornid",27],["zbporn",[27,125]],["yomovies",27],["nonsensediamond",27],["xclusivejams",27],["sportlemon",27],["sportlemons",27],["sportlemonx",27],["kinox",27],["kinoz",[27,28]],["remaxhd",27],["img4fap",27],["babeporn",27],["babytorrent",27],["123moviesme",27],["xxxhdvideo",27],["mcloud",28],["vizcloud",28],["vizcloud2",28],["ouo",28],["songs",28],["gogoanimetv",28],["daddylive",[28,79]],["pelisplus",28],["streamm4u",28],["inkapelis",28],["ettv",28],["pelix",28],["pnd",28],["0123movie",28],["movies123",28],["piratebay",28],["webbro",28],["javwide",28],["vidhd",28],["mirrorace",28],["thoptv",28],["streamingworld",28],["yesmovies",28],["solarmovie",28],["bdiptv",28],["cinemalibero",28],["pctfenix",[28,141]],["pctnew",[28,141]],["watchgameofthrones",28],["tmearn",[28,109]],["shorten",[28,109,182]],["123animes",[28,112]],["openloadmovies",28],["gdriveplayer",28],["crichd",28],["vipracing",28],["supervideo",28],["vidsrc",[28,80]],["1337x",[28,223]],["a2zapk",28],["ilgeniodellostreaming",28],["superstream",28],["123movies-org",28],["sflix",28],["primetubsub",28],["moviesland",[28,80]],["f2movies",28],["imgmaze",[30,64,75]],["imgtown",[30,64,74,75]],["imgrock",[30,74]],["biqle",34],["otakuindo",34],["x1337x",35],["streameast",35],["vipboxtv",35],["yts",37],["sexvid",[39,169]],["silkengirl",[40,64,65]],["rintor",40],["imgsen",[40,74]],["imgsto",[40,74]],["sxyprn",41],["waaw",[42,118]],["waaaw",[42,118]],["waaw1",[42,118]],["vapley",42],["younetu",42],["player.uwatchfree",[42,118,237]],["123link",[44,45,46]],["7mmtv",48],["pornhat",50],["porno-tour",50],["desivideos",50],["movie4me",55],["imgdew",[64,74,75]],["imgview",[64,74,75]],["pandamovie",65],["speedporn",65],["watchpornfree",65],["imgoutlet",[74,75]],["anitube",75],["movisubmalay",[75,112]],["waploaded",75],["dirtyindianporn",75],["indianpornvideos",75],["kashtanka",75],["onlyindianporn",75],["porno18",75],["xxnx",75],["xxxindianporn",75],["adsrt",76],["stream2watch",78],["peliculas-dvdrip",78],["kinoger",80],["iframejav",80],["mm9844",80],["netxwatch",80],["milfnut",80],["anxcinema",80],["videofilms",80],["prosongs",80],["ncdnstm",80],["filelions",80],["streamwish",80],["bunkr",87],["pouvideo",88],["povvideo",88],["povw1deo",88],["povwideo",88],["powv1deo",88],["powvibeo",88],["powvideo",88],["powvldeo",88],["grantorrent1",94],["subtorrents",[94,106]],["subtorrents1",[94,106]],["megalink",109],["earnload",109],["miniurl",109],["shrinke",109],["shrinkme",109],["earncash",109],["shortzzy",109],["lite-link",109],["adcorto",109],["dogecoin",109],["upfiles",109],["torrentz2eu",112],["afilmywap",112],["okhatrimaza",112],["123anime",112],["gomoviesfree",112],["player.tormalayalamhd",118],["depedlps",120],["videovard",123],["asiansex",132],["japanfuck",132],["japanporn",132],["teensex",132],["vintagetube",132],["xxxmovies",132],["0l23movies",133],["cloudvideotv",136],["movierulzlink",139],["newmovierulz",139],["3hiidude",139],["ispunlock",143],["tpb",143],["vgmlinks",155],["thestreameast",164],["zone-annuaire",165],["rainanime",176],["blurayufr",180],["tutsnode",190],["web2.0calc",196],["readcomiconline",197],["cricfree",223],["sportskart",223],["brainly",224],["dood",225],["movies4u",230],["movies4u3",230],["gplinks",242],["moviehdf",243],["azsoft",250],["bg-gledai",257],["bolly4umovies",286],["123movieshub",287],["animeunity",287],["cima-club",287],["flixhq",287],["hindilinks4u",287],["t7meel",287],["bollyholic",300],["katmoviefix",315],["filemoon",336],["bitporno",342]]);

const exceptionsMap = new Map([["pingit.com",[9,20,28,76]],["pingit.me",[9,20,28,76]]]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', chain);
    const exceptionToken = getExceptionToken();
    const abort = function() {
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const token = getRandomToken();
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { abortOnPropertyRead(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_abortOnPropertyRead();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyRead = cloneInto([
            [ '(', uBOL_abortOnPropertyRead.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyRead);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_abortOnPropertyRead;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
