/**
 * Created by LinJe on 2015/11/30.
 */
;(function( $ ) {

    //渲染整个body的动画数据
    jerryAnimate('body').render();

    //共同方法
    $.extend($.fn, {
        'fadeIn': function( settings ) {
            var _this = $(this);
            settings && settings.addClass && _this.addClass(settings.addClass);
            _this.css('opacity', '0').animate({'opacity':1}, settings && settings.time || 500, '', function() {
                settings && settings.callBack && settings.callBack.call(_this);
            });
        },
        'fadeOut': function( settings ) {
            var _this = $(this);
            _this.css('opacity', '1').animate({'opacity':0}, settings && settings.time || 500, '', function() {
                settings.removeClass && _this.removeClass(settings.removeClass);
                settings && settings.callBack && settings.callBack.call(_this);
            });
        }
    });

    //loading处理
    (function() {

        var oBox = $('.loading'),
            oBdo = oBox.find('bdo'),
            oEm = oBox.find('em');

        //选取body 延迟加载
        $('body').lazyLoading()
            .concat([
                '../img/common/page_bg.jpg',
                '../img/common/loading_bg.jpg',
                '../img/page1/bg.jpg'
            ])
            .progress(function(percent) {
                oBdo.text(percent+'%');
                oEm.css('width', percent+'%');
            })
            .callBack(function() {
                oBox.fadeOut({'removeClass':'active'});
                page1Module.show();
            });

    })();


    //音乐处理
    var musicModule = (function() {

        var oMusicIcon = $('.musicIcon'),
            bgMusic = new Audio('../media/bgmusic.mp3'),
            isIos = /iPhone|iPad|iPod/.test(navigator.userAgent);

        bgMusic.loop = 'loop';
        if ( isIos ) {
            oMusicIcon.removeClass('gray');
            bgMusic.play();
        }

        oMusicIcon.on('click', function() {
            var thisIcon = $(this);
            if ( !thisIcon.hasClass('gray') ) {
                thisIcon.addClass('gray');
                bgMusic.pause();
            } else {
                thisIcon.removeClass('gray');
                bgMusic.play();
            }
        });

        return {
            'show': function() {
                oMusicIcon.show();
            },
            'hide': function() {
                oMusicIcon.hide();
            },
            'changePosition': function( sClass ) {
                oMusicIcon.removeClass('status1 status2').addClass(sClass);
            }
        }

    })();


    //第1页
    var page1Module = (function() {

        var oBox = $('.page1'),
            oBtn = oBox.find('.btn');

        //点击按钮，一探究竟
        oBtn.on('click', function() {
            oBox.fadeOut({'removeClass':'active'});
            page2Module.show();
            setTimeout(function() {
                musicModule.changePosition('status1');
            }, 300);
        });

        return {
            'show': function() {
                oBox.fadeIn({'addClass':'active'});
                musicModule.changePosition('status2');
            }
        }

    })();


    //第2页
    var page2Module = (function() {

        var oBox = $('.page2'),
            oScan = oBox.find('.scan'),
            oLayer = oBox.find('.layer'),
            layerFrams = oLayer.find('img'),
            timer = null, index = 0, stopPage = 33, iLen = stopPage, canSwipe = false;

        function playFrams() {
            index ++;
            if ( index == stopPage ) {
                canSwipe = true;
            }
            if ( index < iLen ) {
                layerFrams.removeClass('show').eq(index).addClass('show');
            } else {
                clearInterval(timer);
                if ( index > stopPage ) {
                    page2Module.hide();
                    page3Module.show();
                }
            }
        }

        function resetConfig() {
            timer = null;
            index = 0;
            iLen = stopPage;
            canSwipe = false;
            layerFrams.removeClass('show').eq(0).addClass('show');
            oScan.removeClass().addClass('scan').removeAttr('data-animate');
        }

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });

        oBox.on('swipeUp', function() {
            oScan.attr('data-animate', "{'animation':'slide', 'details':{'startY':'-300px', 'targetY':'1200px', 'duration':3000, 'function':'linear'}}");
            jerryAnimate(oScan).render();
        });
        oBox.on('swipeDown', function() {
            page2Module.hide();
            page1Module.show();
        });

        oLayer.on('swipeUp', function() {
            if ( canSwipe ) {
                canSwipe = false;
                iLen = layerFrams.length;
                clearInterval(timer);
                timer = setInterval(playFrams, 120);
            }
            return false;
        });
        oLayer.on('swipeDown', function() {
            if ( canSwipe ) {
                canSwipe = false;
                $(this).fadeOut({'removeClass':'active', 'callBack':resetConfig});
            }
            return false;
        });

        //监测扫描完毕
        oScan.on('webkitAnimationEnd animationEnd', function() {
            oLayer.fadeIn({'addClass':'active', 'callBack':function() {
                clearInterval(timer);
                timer = setInterval(playFrams, 120);
            }});
        });

        return {
            'hide': function(callBack) {
                oBox.fadeOut({'removeClass':'active', 'callBack':callBack});
            },
            'show': function() {
                resetConfig();
                oLayer.removeClass('active');
                oBox.fadeIn({'addClass':'active'});
            }
        }

    })();

    //第3页
    var page3Module = (function() {

        var oBox = $('.page3'),
            oScroll = oBox.find('.scroll'),
            oLayer = oBox.find('.layer'),
            oBg = oLayer.find('.bg'),
            oBgGray = oBg.find('.gray'),
            oBgMask = oBg.find('.mask'),
            oBgMaskTrpt = oBg.find('.masktrpt'),
            obox1 = oLayer.find('.box1'),
            obox2 = oLayer.find('.box2'),
            obox1Gray = obox1.find('.gray');

        var scrollFrames = new CssSprite({
            'stage'         : oScroll.get(0),
            'commonClass'   : 'scroll',
            'classPrefix'   : 'scroll',
            'frames'        : 4,
            'time'          : 700,
            'waitTime'      : 0,
            'loop'          : 1
        });

        function resetConfig() {
            obox1.removeClass().addClass('box1').attr('data-animate', "{'animation':'slide', 'details':{'startX':'100%'}}");
            obox2.removeClass().addClass('box2').attr('data-animate', "{'animation':'slide', 'details':{'startX':'-100%'}}");
            jerryAnimate(obox1).render();
            jerryAnimate(obox2).render();
            oBgMask.show();
            oBgGray.removeClass('active');
            obox1Gray.fadeIn({'addClass':'active', 'time':0});
            scrollFrames.play();
        }

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });
        oBox.on('swipeUp', function() {
            scrollFrames.stop();
            oLayer.fadeIn({'addClass':'active', 'time':0});
            setTimeout(function() {
                oBgMask.hide();
                oBgMaskTrpt.show();
                oBgGray.addClass('active');
                obox1Gray.fadeOut({'removeClass':'active'});
            }, 1000);
        });
        oBox.on('swipeDown', function() {
            scrollFrames.stop();
            page3Module.hide();
            page2Module.show();
        });

        var box1Timer = null;
        oLayer.on('swipeUp', function() {
            obox1.removeClass().addClass('box1').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'100%'}}");
            obox2.removeClass().addClass('box2').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'-100%'}}");
            jerryAnimate(obox1).render();
            jerryAnimate(obox2).render();
            oBgGray.removeClass('active');
            oBgMask.show();
            obox1Gray.fadeIn({'addClass':'active'});
            clearTimeout(box1Timer);
            box1Timer = setTimeout(function() {
                oBox.fadeOut({'removeClass':'active', 'time':0});
                page4Module.show();
            }, 1000);

            return false;
        });
        oLayer.on('swipeDown', function() {
            $(this).fadeOut({'removeClass':'active'});
            resetConfig();
            return false;
        });

        //监测layer中box动画完毕
        /*obox1.on('webkitAnimationEnd animationEnd', function() {
            oBgMask.hide();
            oBgMaskTrpt.show();
            oBgGray.addClass('active');
            obox1Gray.hide();
        });*/

        return {
            'hide': function() {
                oBox.fadeOut({'removeClass':'active'});
            },
            'show': function() {
                oBox.fadeIn({'addClass':'active'});
                scrollFrames.play();
                oLayer.removeClass('active');
                resetConfig();
            }
        }

    })();


    //第4页
    var page4Module = (function() {

        var oBox = $('.page4'),
            oLayer = oBox.find('.layer'),
            obox1 = oLayer.find('.box1'),
            obox1Gray = obox1.find('.gray'),
            obox1Pic = obox1.find('.pic'),
            obox2 = oLayer.find('.box2'),
            obox2PicBox = obox2.find('.picbox'),
            obox2Pic = obox2.find('.pic'),
            obox3 = oLayer.find('.box3'),
            obox3View = obox3.find('.view'),
            obox3Pic = obox3.find('.pic'),
            obox4 = oLayer.find('.box4');

        function resetConfig() {
            obox1.removeClass().addClass('box1').attr('data-animate', "{'animation':'slide', 'details':{'startX':'-100%', 'duration':500}}");
            obox2.removeClass().addClass('box2').attr('data-animate', "{'animation':'slide', 'details':{'startX':'100%', 'duration':500, 'delay':300}}");
            obox3.removeClass().addClass('box3').attr('data-animate', "{'animation':'slide', 'details':{'startX':'100%', 'duration':500, 'delay':600}}");
            obox4.removeClass().addClass('box4').attr('data-animate', "{'animation':'slide', 'details':{'startX':'-100%', 'duration':500, 'delay':600}}");
            jerryAnimate(obox1).render();
            jerryAnimate(obox2).render();
            jerryAnimate(obox3).render();
            jerryAnimate(obox4).render();
            obox1Gray.removeClass('active');
            obox1Pic.css('opacity', 0);
            obox2PicBox.removeClass('active');
            obox2Pic.css('opacity', 0);
            obox3View.removeClass('active');
            obox3Pic.css('opacity', 0);
        }

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });
        oBox.on('swipeUp', function() {
            oLayer.fadeIn({'addClass':'active', 'time':0});

            obox1Gray.addClass('active');
            obox1Pic.css('opacity', 1);

            setTimeout(function() {
                obox2PicBox.addClass('active');
                obox2Pic.css('opacity', 1);
            }, 300);
            setTimeout(function() {
                obox3View.addClass('active');
                obox3Pic.css('opacity', 1);
            }, 600);
        });
        oBox.on('swipeDown', function() {
            page4Module.hide();
            page3Module.show();
        });

        oLayer.on('swipeUp', function() {
            obox1.removeClass().addClass('box1').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'-100%', 'duration':500}}");
            obox2.removeClass().addClass('box2').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'100%', 'duration':500, 'delay':300}}");
            obox3.removeClass().addClass('box3').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'100%', 'duration':500, 'delay':600}}");
            obox4.removeClass().addClass('box4').attr('data-animate', "{'animation':'slide', 'details':{'targetX':'-100%', 'duration':500, 'delay':600}}");
            jerryAnimate(obox1).render();
            jerryAnimate(obox2).render();
            jerryAnimate(obox3).render();
            jerryAnimate(obox4).render();
            setTimeout(function() {
                oBox.fadeOut({'removeClass':'active'});
                page5Module.show();
            }, 400);
            return false;
        });
        oLayer.on('swipeDown', function() {
            $(this).fadeOut({'removeClass':'active'});
            resetConfig();
            return false;
        });

        /*obox1.one('webkitAnimationEnd animationEnd', function() {
            $(this).addClass('active');
            obox1Pic.css('opacity', 1);
        });
        obox2.one('webkitAnimationEnd animationEnd', function() {
            $(this).addClass('active');
            obox2Pic.css('opacity', 1);
        });
        obox3.one('webkitAnimationEnd animationEnd', function() {
            obox3View.addClass('active');
            obox3Pic.css('opacity', 1);
        });*/

        return {
            'hide': function() {
                oBox.fadeOut({'removeClass':'active'});
            },
            'show': function() {
                resetConfig();
                oLayer.removeClass('active');
                oBox.fadeIn({'addClass':'active'});
            }
        }

    })();


    //第5页
    var page5Module = (function() {

        var oBox = $('.page5'),
            oDl = oBox.find('.square3 dl'),
            oLayer = oBox.find('.layer'),
            layerFrams = oLayer.find('img'),
            timer = null, index = 0, stopPage = 17, iLen = stopPage, canSwipe = false;

        function playFrams() {
            index ++;
            if ( index == stopPage ) {
                canSwipe = true;
            }
            if ( index < iLen ) {
                layerFrams.removeClass('show').eq(index).addClass('show');
            } else {
                clearInterval(timer);
                if ( index > stopPage ) {
                    oBox.fadeOut({'removeClass':'active'});
                    page6Module.show();
                }
            }
        }

        function resetConfig() {
            timer = null;
            index = 0;
            iLen = stopPage;
            canSwipe = false;
            layerFrams.removeClass('show').eq(0).addClass('show');
            oDl.addClass('active');
        }

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });
        oBox.on('swipeUp', function() {
            //oDl.removeClass('active');
            oLayer.fadeIn({'addClass':'active', 'time':0});
            clearInterval(timer);
            timer = setInterval(playFrams, 200);
        });
        oBox.on('swipeDown', function() {
            page5Module.hide();
            page4Module.show();
        });

        oLayer.on('swipeUp', function() {
            if ( canSwipe ) {
                canSwipe = false;
                iLen = layerFrams.length;
                clearInterval(timer);
                timer = setInterval(playFrams, 200);
            }
            return false;
        });
        oLayer.on('swipeDown', function() {
            if ( canSwipe ) {
                canSwipe = false;
                $(this).fadeOut({'removeClass':'active', 'callBack':resetConfig});
            }
            return false;
        });

        return {
            'hide': function() {
                oBox.fadeOut({'removeClass':'active'});
            },
            'show': function() {
                oBox.fadeIn({'addClass':'active'});
                resetConfig();
                oLayer.removeClass('active');
                musicModule.changePosition('status1');
            }
        }

    })();


    //第6页
    var page6Module = (function() {

        var oBox = $('.page6'),
            oBtn = oBox.find('.btn'),
            oLayer = oBox.find('.layer'),
            oContent = oLayer.find('.content'),
            oClose = oLayer.find('.close'),
            oArticle = oContent.find('article'),
            isFirst = true;

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });
        oBox.on('swipeUp', function() {
            oBox.fadeOut({'removeClass':'active'});
            page7Module.show();
        });
        oBox.on('swipeDown', function() {
            page6Module.hide();
            page5Module.show();
        });

        oLayer.on('touchmove', function() {
            return false;
        });

        oClose.on('click', function() {
            oLayer.fadeOut({'removeClass':'active'});
            musicModule.show();
        });

        oBtn.on('click', function() {
            oLayer.fadeIn({'addClass':'active'});
            musicModule.hide();
        });

        return {
            'hide': function() {
                oBox.fadeOut({'removeClass':'active'});
            },
            'show': function() {
                oBox.fadeIn({'addClass':'active'});
                musicModule.changePosition('status2');
                if ( isFirst ) {
                    isFirst = false;
                    oArticle.vScrollbar();
                }
            }
        }

    })();


    //第7页
    var page7Module = (function() {

        var oBox = $('.page7');

        oBox.on('touchmove', function(ev) {
            ev.preventDefault();
        });
        oBox.on('swipeDown', function() {
            page7Module.hide();
            page6Module.show();
        });

        return {
            'hide': function() {
                oBox.fadeOut({'removeClass':'active'});
            },
            'show': function() {
                oBox.fadeIn({'addClass':'active'});
            }
        }

    })();

    //test
    /*$('.loading').hide();
    page4Module.show();*/

})( Zepto );