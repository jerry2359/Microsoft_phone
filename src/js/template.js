/**
 * Created by LinJe on 2015/11/30.
 * jerryAnimate.js 的模板扩展
 */
;(function( jerryAnimate ) {

    jerryAnimate().extendTemplate({

        //旋转
        'rotate': {
            'defs': {
                'startAngle': 0,
                'targetAngle': 0
            },
            'style': '@-webkit-keyframes #animationClass# {\n\
                            0% {\n\
                                -webkit-transform-origin: center;\n\
                                transform-origin: center;\n\
                                -webkit-transform: rotate(#startAngle#);\n\
                                transform: rotate(#startAngle#);\n\
                            }\n\
                            100% {\n\
                                -webkit-transform-origin: center;\n\
                                transform-origin: center;\n\
                                -webkit-transform: rotate(#targetAngle#);\n\
                                transform: rotate(#targetAngle#);\n\
                            }\n\
                        }\n\
                        @keyframes #animationClass# {\n\
                            0% {\n\
                                -webkit-transform-origin: center;\n\
                                transform-origin: center;\n\
                                -webkit-transform: rotate(#startAngle#);\n\
                                transform: rotate(#startAngle#);\n\
                            }\n\
                            100% {\n\
                                -webkit-transform-origin: center;\n\
                                transform-origin: center;\n\
                                -webkit-transform: rotate(#targetAngle#);\n\
                                transform: rotate(#targetAngle#);\n\
                            }\n\
                        }'
        }

    });

})( jerryAnimate );