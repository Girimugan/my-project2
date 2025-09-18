var reqtype;
(function() {
    window.addEventListener('DOMContentLoaded', function() {
        // var test = document.getElementById("ins_tag_box");
        reqtype = location.search.split('req=')[1] ? location.search.split('req=')[1] : 'prod';
        if (typeof JioAds == 'undefined') return console.log('SDK NOT FOUND');
        JioAds.onAdPrepared = function(placementId) {
            console.info('CB: onAdPrepared Ad is ready to be displayed!', placementId);
        }
        JioAds.onAdRefresh = function(placementId) {
            console.log('CB: onAdRefresh', placementId);
        }
        JioAds.onAdRender = function(placementId) {
            console.log('CB: onAdRender', placementId);
            myImp(placementId);
            //myImp();
        }
        JioAds.onAdMediaStart = function(placementId, adinfo) {
            console.log('CB: onAdMediaStart ' + placementId + " Adinfo: " + JSON.stringify(adinfo));
            var placementNode = document.getElementById(placementId);
            var dataCustomization = placementNode.getAttribute("data-customization");
            if (dataCustomization != null && dataCustomization == "get-ad-data") {
                placementNode.setAttribute(
                    "data-element",
                    placementNode.firstElementChild.outerHTML
                );
                var dataObject = JSON.parse(placementNode.getAttribute("data-object"));
                for (var key in dataObject) {
                    var targetElement = placementNode.children[0].querySelectorAll(
                        `[data-native-element=${key}]`
                    );
                    if (targetElement.length) {
                        for (var i = 0; i < targetElement.length; i++) {
                            if (targetElement[i].tagName == "IMG") {
                                targetElement[i].src = dataObject[key];
                            } else if (targetElement[i].tagName == "VIDEO") {
                                targetElement[i].src = dataObject[key];
                            } else if (targetElement[i].tagName == "BUTTON") {
                                targetElement[i].innerText += dataObject[key];
                                targetElement[i].className = "customClick";
                                this.clickElement = "customClick";
                            } else {
                                targetElement[i].innerText += dataObject[key];
                            }
                        }
                    }
                }
                placementNode.children[0].style.display = "block";
            }
        }
        JioAds.onAdChange = function(placementId, adinfo) {
            console.log('CB: onAdChange ' + placementId + " Adinfo: " + JSON.stringify(adinfo));
        }
        JioAds.onAdMediaEnd = function(placementId, reward) {
            console.log('CB: onAdMediaEnd', placementId);
            if (reward) console.log('Rewards Achieved ...............');
        }
        JioAds.onAdClicked = function(placementId, url) {
            console.log('CB: onAdClicked : ', placementId, url);
            //window.location.assign(url);
        }
        JioAds.onAdClosed = function(placementId, isVideoCompleted, reward) {
            console.log('CB: onAdClosed : ' + placementId + " Interstitial Image/ isVideoCompleted: " + isVideoCompleted);
            if (reward) console.log('Rewards Achieved ...............');
            var placementNode = document.getElementById(placementId);
            if (placementNode) {
                placementNode.remove();
            }
        }
        JioAds.onAdSkippable = function(placementId) {
            console.log('CB: onAdSkippable', placementId);
        }
        JioAds.onAdFailedToLoad = function(placementId, options) {
            console.log('CB: onAdFailedToLoad', JSON.stringify(options));
            var placementNode = document.getElementById(placementId);
            //myErrAdspots.push(placementId);
            if (placementNode) {
            	placementNode.parentElement.remove();
                placementNode.remove();
            }
        }
        JioAds.onVMAPReady = function(placementId, VMAPData) {
            console.log('CB: onVMAPReady', VMAPData);
        }
        var conf = {
            endpoint: "jioads", // mercury => stg ,  jioads => dev
            reqType: "prod", //dev, stg, prod, sit
            clkSelf: false,
	    la:"",
	    lo:"",
            //ai: "desktop.com.parent",
            //ifa: 'bc6b78a1-4df0-407e-9a20-88bc64907232',
            //uid: "9886412233",
            logLevel: 1, //debug: 1, log: 2, info: 3, trace: 4, warn: 5, error: 6
            adRequestTimeout: 6000,
            adRenderingTimeout: 5000,
            // identifiers: {
            //     email: "testmail.uid@gmail.com",
            //     mobile: "9876543210",
            // }
        }
        if (document.getElementById("ifa")) {
            var ifa = document.getElementById("ifa").value || "";
            if (ifa.length) conf.ifa = ifa;
        }
        JioAds.setConfiguration(conf);
        /*setTimeout(function() {
            for (var ins = document.getElementsByTagName('ins'), c = 0; c < ins.length; c++) {
                if(ins[c].id.startsWith("pid-")){
                  myInsMap.push({
                      id: ins[c].id,
                      activated: true
                  });
                }
            }
            mySwiper = new Swiper('.swiper-container', {
                slidesPerView: "auto",
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: 0,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: 1,
                },
                observer: !0,
                observeParents: !0,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    init: function() {
                    },
                    afterInit: function() {
                    },
                    slideChange: function() {
                        var myActiveIndex = this.activeIndex;
                        var currentSlide = this.realIndex + 1;
                    }
                }
            });
        }, 2000);*/
    });
})();

function xml2string(node) {
    if (typeof(XMLSerializer) !== 'undefined') {
        var serializer = new XMLSerializer();
        return serializer.serializeToString(node);
    } else if (node.xml) {
        return node.xml;
    }
}

function checkuIdrand(value) {
    var doc = new DOMParser().parseFromString(value, "text/xml");
    var a = doc.firstChild;
    //a.id="uid"+Math.floor(Math.random() * 10000);
    if (a.getAttribute('data-source') == 'msite.com' && detectDTMvsD() != 1) {
        alert('Please select msite from inspect elements in browser');
        return;
    }
    if (a.getAttribute('data-source') == 'desktop.com' && detectDTMvsD() != 2) {
        alert('Please select desktop from inspect elements in browser');
        return;
    }
    return xml2string(a);
}

function myImp(selector) {
    var io = new IntersectionObserver(function(entries) {
        (entries).forEach(function(data) {  });
    }, { threshold: [0, .5, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1] });
    io.observe(document.querySelector(`#${selector}`));
}

function buttonInsertINS(value) {
    if (value) {
        document.getElementById('ins_tag_box').innerHTML = '';
        document.getElementById('ins_tag_box').innerHTML = checkuIdrand(value);
    }
}

function detectDTMvsD() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 1;
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return 1;
    }
    return 2; // 'desktop'
}

function buttonInsertINSCustom(value) {
    if (value) {
        document.getElementById('ins_tag_box').innerHTML = '';
        document.getElementById('ins_tag_box').innerHTML = value;
    }
}

function insertINS() {
    const insTag = document.getElementById('txt_ins_tags').value;
    if (insTag) {
        var conf = {
                reqType: "prod", //dev, stg, prod, sit
            }
            // var ifa = document.getElementById("ifa").value || "";
            // if(ifa.length) {
            //     conf.ifa = ifa;
            //     JioAds.setConfiguration(conf);
            // }
        document.getElementById('instreamContainer').innerHTML = '';
        document.getElementById('ins_tag_box').innerHTML = '';
        document.getElementById('ins_tag_box').innerHTML = insTag;
    }
}


function clearCache() {
    document.getElementById('ins_tag_box').innerHTML = '';
    document.getElementById('txt_ins_tags').value = '';
    console.clear();
    console.log("%c Cleared INS cache", "color:#f00");
    window.location.reload();
}

function clearStorage() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    console.log("%c Cleared storage", "color:#f00");
    window.location.reload();
}