(function() {
    'use strict';

    //////////////////////////////////////////////////////////////////////////////////////
    // EasterEgg directive definition
    //////////////////////////////////////////////////////////////////////////////////////
    var StExtraDirective = function($rootScope){
        var self = this;

        var directive = {
            restrict: 'E',
            template: '<div id="bart" ng-click="ctrl.clear()" ng-show="ctrl.character==\'bart\'"> <div class="head"> <div class="no-border body hair hair1"></div><div class="no-border body hair hair2"></div><div class="no-border body hair hair3"></div><div class="no-border body hair hair4"></div><div class="no-border body hair hair5"></div><div class="no-border body hair hair6"></div><div class="no-border body hair hair7"></div><div class="no-border body hair hair8"></div><div class="no-border body hair hair9"></div><div class="body mouth-lip2"></div><div class="no-border body head-left1"></div><div class="no-border body head-left2"></div><div class="no-border body head-left3"></div><div class="no-border body head-left4"></div><div class="no-border body head-left5"></div><div class="no-border body head-left6"></div><div class="no-border body head-left7"></div><div class="body eyelid"></div><div class="no-border body mouth"></div><div class="body mouth-lip"></div><div class="no-border body head-right2"></div><div class="no-border body head-right1"></div><div class="no-border body head-right3"></div><div class="body ear"> <div class="no-border inner1"></div><div class="no-border inner2"></div><div class="no-border body clip"></div></div><div class="right-eye"> <div class="no-border right-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="no-border body nose"></div><div class="body nose-tip"></div><div class="left-eye"> <div class="no-border left-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="no-border mouth-smile"></div></div></div><div id="lisa" ng-click="ctrl.clear()" ng-show="ctrl.character==\'lisa\'"> <div class="head"> <div class="no-border body head-main"></div><div class="no-border body head-main2"></div><div class="no-border body head-main3"></div><div class="no-border hair9"></div><div class="no-border hair10"></div><div class="body hair hair1"></div><div class="body hair hair2"></div><div class="body hair hair3"></div><div class="body hair hair4"></div><div class="body hair hair5"></div><div class="body hair hair6"></div><div class="body hair hair7"></div><div class="body hair hair8"></div><div class="body mouth-lip2"></div><div class="body mouth-lip"></div><div class="no-border body neck"></div><div class="no-border body mouth"></div><div class="no-border body neck2"></div><div class="no-border body neck3"></div><div class="no-border mouth-smile"></div><div class="body ear"> <div class="no-border inner1"></div><div class="no-border inner2"></div><div class="no-border body clip"></div></div><div class="no-border eyelash1 eyelash"></div><div class="no-border eyelash2 eyelash"></div><div class="no-border eyelash3 eyelash"></div><div class="no-border eyelash4 eyelash"></div><div class="no-border eyelash5 eyelash"></div><div class="no-border eyelash6 eyelash"></div><div class="no-border eyelash7 eyelash"></div><div class="no-border eyelash8 eyelash"></div><div class="right-eye"> <div class="no-border right-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="no-border body nose"></div><div class="body nose-tip"></div><div class="left-eye"> <div class="no-border left-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="necklace necklace1"></div><div class="necklace necklace2"></div><div class="necklace necklace3"></div><div class="necklace necklace5"></div><div class="necklace necklace4"></div></div></div><div id="marge" ng-click="ctrl.clear()" ng-show="ctrl.character==\'marge\'"> <div class="head"> <div class="no-border body head-main"></div><div class="body mouth-lip2"></div><div class="body mouth-lip"></div><div class="no-border body neck"></div><div class="no-border body mouth"></div><div class="no-border body neck2"></div><div class="no-border body neck3"></div><div class="no-border mouth-smile"></div><div class="hair hair1 hair-circle"></div><div class="hair hair2 hair-circle"></div><div class="hair hair3 hair-circle"></div><div class="hair hair4 hair-circle"></div><div class="hair hair5 hair-circle"></div><div class="hair hair6 hair-circle"></div><div class="hair hair7 hair-circle"></div><div class="hair hair8 hair-circle"></div><div class="hair hair9 hair-circle"></div><div class="hair hair10 hair-circle"></div><div class="hair hair11 hair-circle"></div><div class="hair hair12 hair-circle"></div><div class="hair hair13 hair-circle"></div><div class="hair hair14 hair-circle"></div><div class="hair hair15 hair-circle"></div><div class="hair hair16 hair-circle"></div><div class="hair hair17 hair-circle"></div><div class="hair hair18 hair-circle"></div><div class="hair hair19 hair-circle"></div><div class="hair hair20 hair-circle"></div><div class="hair hair21 hair-circle"></div><div class="hair hair22 hair-circle"></div><div class="hair hair23 hair-circle"></div><div class="hair hair24 hair-circle"></div><div class="hair hair25 hair-circle"></div><div class="hair hair26 hair-circle"></div><div class="hair hair27 hair-circle"></div><div class="hair hair28 hair-circle"></div><div class="hair hair29 hair-circle"></div><div class="hair hair30 hair-circle"></div><div class="no-border hair hair-main"></div><div class="no-border hair hair-main2"></div><div class="no-border hair hair-main3"></div><div class="no-border hair hair-main4"></div><div class="no-border hair hair-main5"></div><div class="no-border hair hair-main6"></div><div class="no-border hair hair-main7 hair-circle"></div><div class="body ear"> <div class="no-border inner1"></div><div class="no-border inner2"></div><div class="no-border body clip"></div></div><div class="no-border eyelash1 eyelash"></div><div class="no-border eyelash2 eyelash"></div><div class="no-border eyelash3 eyelash"></div><div class="no-border eyelash4 eyelash"></div><div class="no-border eyelash5 eyelash"></div><div class="no-border eyelash6 eyelash"></div><div class="no-border eyelash7 eyelash"></div><div class="no-border eyelash8 eyelash"></div><div class="right-eye"> <div class="no-border right-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="no-border body nose"></div><div class="body nose-tip"></div><div class="left-eye"> <div class="no-border left-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div></div></div><div id="homer" ng-click="ctrl.clear()" ng-show="ctrl.character==\'homer\'"> <div class="head"> <div class="hair1"></div><div class="hair2"></div><div class="body head-top"></div><div class="no-border body head-main"></div><div class="no-border m1"></div><div class="no-border m2"></div><div class="no-border m3"></div><div class="no-border m4"></div><div class="no-border neck1"></div><div class="body neck2"></div><div class="body ear"> <div class="no-border inner1"></div><div class="no-border inner2"></div><div class="no-border body clip"></div></div><div class="mouth"> <div class="mouth5"></div><div class="mouth2"></div><div class="mouth1"></div><div class="mouth7"></div><div class="no-border mouth3"></div><div class="no-border mouth4"></div><div class="no-border mouth6"></div><div class="no-border mouth8"></div></div><div class="right-eye"> <div class="no-border right-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div><div class="body nose"></div><div class="body nose-tip"></div><div class="left-eye"> <div class="no-border left-eye-pupil"></div><div class="no-border body eyelid-top"></div><div class="no-border body eyelid-bottom"></div></div></div></div>', s
            scope: {},
            link: linkFunc
        };

        function linkFunc(scope, el, attr) {
            scope.ctrl = scope;

            scope.character = null;

            $rootScope.$on('stCharacter', function(event, character){
                scope.character = character;
            });

            scope.clear = function() {
                scope.character = null;
            };
        }

        return directive;
    };

    StExtraDirective.prototype.$inject = [ '$rootScope' ];

    //////////////////////////////////////////////////////////////////////////////////////
    // Register directive
    //////////////////////////////////////////////////////////////////////////////////////
    angular.module('st-extra', [])
        /**
         * EasterEgg directive
         * Usage: Available characters: lisa, homer, marge, bart
         * <st-extra character="'homer'"> </st-extra>
         */
        .directive('stExtra', StExtraDirective)
    ;

})();
