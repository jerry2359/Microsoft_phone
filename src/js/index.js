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

    })();


    //第2页
    (function() {

        var oBox = $('.page2'),
            oScan = oBox.find('.scan'),
            oLayer = oBox.find('.layer'),
            layerFrams = oLayer.find('img'),
            timer = null, index = 0, iLen = layerFrams.length;

        function playFrams() {
            timer = setInterval(function() {
                index ++;
                if ( index < iLen ) {
                    layerFrams.removeClass('show').eq(index).addClass('show');
                } else {
                    clearInterval(timer);
                }
            }, 60);
        }

        //监测扫描完毕
        oScan.one('webkitAnimationEnd animationEnd', function() {
            oLayer.fadeIn({'addClass':'active', 'callBack':playFrams});
        });

    })();


})( Zepto );