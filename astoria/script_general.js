(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"borderSize":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player519","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"overflow":"hidden","minWidth":20,"contentOpaque":false,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"backgroundPreloadEnabled":true,"downloadEnabled":false,"scrollBarWidth":10,"minHeight":20,"desktopMipmappingEnabled":false,"mouseWheelEnabled":true,"start":"this.init()","paddingTop":0,"class":"Player","defaultVRPointer":"laser","horizontalAlign":"left","paddingBottom":0,"mobileMipmappingEnabled":false,"backgroundOpacity":1,"gap":10,"verticalAlign":"top","propagateClick":false,"backgroundColor":["#FFFFFF"],"layout":"absolute","children":["this.MainViewer"],"id":"rootPlayer","width":"100%","scrollBarMargin":2,"definitions": [{"hoverFactor":0,"initialPosition":{"hfov":87,"yaw":92.43,"pitch":-10.3,"class":"RotationalCameraPosition"},"automaticZoomSpeed":10,"class":"RotationalCamera","automaticRotationSpeed":10,"id":"media_98314F52_92EA_92A3_41DE_66279BF3B200_camera","manualZoomSpeed":1,"manualRotationSpeed":1800},{"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","viewerArea":"this.MainViewer","zoomEnabled":true,"surfaceSelectionEnabled":false},{"duration":5000,"label":trans('album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_0.label'),"class":"Photo","image":{"levels":[{"url":"media/album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"height":259,"id":"album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_0","thumbnailUrl":"media/album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_0_t.png","data":{"label":"aboutjon"},"width":1024},{"viewerArea":"this.MainViewer","id":"MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayer"},{"loop":false,"playList":"this.album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_AlbumPlayList","label":trans('album_9D7F9BE3_92EA_B161_41C0_37CAFB420075.label'),"data":{"label":"Photo Album aboutjon"},"class":"PhotoAlbum","id":"album_9D7F9BE3_92EA_B161_41C0_37CAFB420075","thumbnailUrl":"media/album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_t.png"},{"id":"mainPlayList","items":[{"media":"this.media_98314F52_92EA_92A3_41DE_66279BF3B200","camera":"this.media_98314F52_92EA_92A3_41DE_66279BF3B200_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"media":"this.album_9D7F9BE3_92EA_B161_41C0_37CAFB420075","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"duration":5000,"label":trans('photo_8155F64D_931E_B2A0_41E0_3BEBDF5A6EA8.label'),"class":"Photo","image":{"levels":[{"url":"media/photo_8155F64D_931E_B2A0_41E0_3BEBDF5A6EA8.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"height":270,"id":"photo_8155F64D_931E_B2A0_41E0_3BEBDF5A6EA8","thumbnailUrl":"media/photo_8155F64D_931E_B2A0_41E0_3BEBDF5A6EA8_t.png","data":{"label":"greekstreets"},"width":574},{"paddingRight":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderColor":"#767676","progressBackgroundOpacity":1,"vrPointerColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipOpacity":1,"toolTipShadowSpread":0,"toolTipShadowHorizontalLength":0,"toolTipBackgroundColor":"#F6F6F6","transitionDuration":500,"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarBorderColor":"#FFFFFF","progressBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesShadow":false,"subtitlesOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBorderColor":"#000000","subtitlesPaddingTop":5,"subtitlesGap":0,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipFontStyle":"normal","playbackBarHeadShadow":true,"toolTipTextShadowOpacity":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"subtitlesBackgroundColor":"#000000","toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"propagateClick":false,"playbackBarHeadOpacity":1,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBarOpacity":1,"playbackBarProgressOpacity":1,"transitionMode":"blending","toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"playbackBarOpacity":1,"toolTipFontSize":"1.11vmin","doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","borderSize":0,"subtitlesFontColor":"#FFFFFF","progressBottom":0,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"toolTipPaddingRight":6,"progressBorderRadius":0,"toolTipBorderSize":1,"toolTipFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarBottom":5,"translationTransitionDuration":1000,"progressHeight":10,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"progressLeft":0,"playbackBarHeight":10,"surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"playbackBarHeadBackgroundColorDirection":"vertical","paddingTop":0,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333333","paddingBottom":0,"playbackBarProgressBorderSize":0,"subtitlesFontSize":"3vmin","surfaceReticleOpacity":0.6,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundColorDirection":"vertical","progressOpacity":1,"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","progressRight":0,"playbackBarRight":0,"width":"100%","toolTipFontColor":"#606060","playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipDisplayTime":600,"subtitlesPaddingBottom":5,"progressBarBackgroundColorDirection":"vertical","id":"MainViewer","subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"firstTransitionDuration":0,"toolTipHorizontalAlign":"center","playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"paddingLeft":0,"progressBarBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"borderRadius":0,"subtitlesFontFamily":"Arial","shadow":false,"progressBarBorderSize":0,"toolTipBorderRadius":3,"surfaceReticleSelectionOpacity":1,"data":{"name":"Main Viewer"},"minHeight":50,"progressBarBorderRadius":0,"subtitlesTextDecoration":"none","minWidth":100,"height":"100%","class":"ViewerArea"},{"loop":true,"video":[{"width":1920,"framerate":29.97,"type":"video/mp4","height":1080,"class":"Video360Resource","bitrate":4428,"posterURL":"media/media_98314F52_92EA_92A3_41DE_66279BF3B200_poster.jpg","url":"media/media_98314F52_92EA_92A3_41DE_66279BF3B200.mp4"}],"hfovMax":87,"hfovMin":1,"vfov":180,"hfov":360,"id":"media_98314F52_92EA_92A3_41DE_66279BF3B200","pitch":0,"label":trans('media_98314F52_92EA_92A3_41DE_66279BF3B200.label'),"data":{"label":"360 Video - Vehicular Test"},"overlays":["this.overlay_9C262402_92FA_96A3_41DA_C9C9CD0B30DD","this.overlay_837CA019_92EE_AEA1_41DC_6B377D89C573","this.Cap_825153C2_931A_B1A3_41DD_D1831B1488FD","this.Cap_82CF11EC_931A_9167_4190_A19C3DB6EE88","this.overlay_82576239_932D_92E1_41C2_195C23C7E0A0"],"thumbnailUrl":"media/media_98314F52_92EA_92A3_41DE_66279BF3B200_t.jpg","partial":false,"class":"Video360"},{"id":"album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_AlbumPlayList","items":[{"media":"this.album_9D7F9BE3_92EA_B161_41C0_37CAFB420075_0","camera":{"targetPosition":{"x":0.5,"zoomFactor":1.1,"y":0.57,"class":"PhotoCameraPosition"},"initialPosition":{"x":0.5,"zoomFactor":1,"y":0.5,"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","scaleMode":"fit_outside","duration":5000,"easing":"linear"},"class":"PhotoPlayListItem"},{"media":"this.photo_8155F64D_931E_B2A0_41E0_3BEBDF5A6EA8","camera":{"targetPosition":{"x":0.35,"zoomFactor":1.1,"y":0.4,"class":"PhotoCameraPosition"},"initialPosition":{"x":0.5,"zoomFactor":1,"y":0.5,"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","scaleMode":"fit_outside","duration":5000,"easing":"linear"},"class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"areas":["this.HotspotPanoramaOverlayArea_9DD40441_92FA_96A1_41E0_97BFB06FD002"],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_9C262402_92FA_96A3_41DA_C9C9CD0B30DD","items":[{"hfov":4.14,"distance":50,"yaw":99.61,"verticalAlign":"middle","horizontalAlign":"center","playbackPositions":[{"hfov":4.14,"yaw":99.61,"rotationX":0,"vfov":3.5,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":0,"pitch":-33.25,"rotationY":0}],"pitch":-33.25,"image":"this.res_82AFA499_92FD_97A1_41CC_7EAA1C3835F8","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":3.5,"data":{"label":"Image"}}],"enabledInCardboard":true,"maps":[]},{"id":"overlay_837CA019_92EE_AEA1_41DC_6B377D89C573","enabledInCardboard":true,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_829740B4_92EE_AFE7_41D5_D6881E5014BA"],"maps":[],"rollOverDisplay":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":8.7,"distance":50,"yaw":99.54,"verticalAlign":"middle","horizontalAlign":"center","playbackPositions":[{"hfov":8.7,"yaw":99.54,"rotationX":0,"vfov":7.84,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":0,"pitch":-30.63,"rotationY":0}],"pitch":-30.63,"image":"this.res_80F965D1_92EF_71A1_41D4_9BAB18C98F33","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":7.84,"data":{"label":"aboutjon"}}],"data":{"label":"aboutjon"}},{"hfov":45,"distance":50,"inertia":false,"useHandCursor":false,"angle":0,"image":"this.res_81078298_931A_B3AF_41A7_98451985150A","rotate":false,"class":"TripodCapPanoramaOverlay","id":"Cap_825153C2_931A_B1A3_41DD_D1831B1488FD"},{"hfov":45,"distance":50,"inertia":false,"useHandCursor":false,"angle":180,"image":"this.res_81078298_931A_B3AF_41A7_98451985150A","rotate":false,"class":"CeilingCapPanoramaOverlay","id":"Cap_82CF11EC_931A_9167_4190_A19C3DB6EE88"},{"items":[{"hfov":7.05,"distance":50,"yaw":80.98,"pitch":18.74,"data":{"label":"immaccon"},"horizontalAlign":"center","playbackPositions":[{"hfov":4.08,"yaw":90.86,"rotationX":0,"vfov":1.06,"opacity":0,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":0,"pitch":6.72,"rotationY":0},{"hfov":4.08,"yaw":90.86,"rotationX":0,"vfov":1.06,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":1.99,"pitch":6.72,"rotationY":0},{"hfov":4.08,"yaw":90.86,"rotationX":0,"vfov":1.06,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":5.03,"pitch":6.72,"rotationY":0},{"hfov":7.05,"yaw":89.15,"rotationX":0,"vfov":2.1,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":7.85,"pitch":7.99,"rotationY":0},{"hfov":7.05,"yaw":87.71,"rotationX":0,"vfov":2.1,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":10.46,"pitch":10.25,"rotationY":0},{"hfov":7.05,"yaw":85.03,"rotationX":0,"vfov":2.1,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":13.61,"pitch":11.53,"rotationY":0},{"hfov":7.05,"yaw":82.96,"rotationX":0,"vfov":2.1,"opacity":1,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":15.96,"pitch":16.02,"rotationY":0},{"hfov":7.05,"yaw":80.98,"rotationX":0,"vfov":2.1,"opacity":0,"class":"PanoramaOverlayPlaybackPosition","roll":0,"timestamp":18.33,"pitch":18.74,"rotationY":0}],"image":"this.res_8219B1B2_932F_71E3_41CD_95CD914A7121","opacity":0,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":2.1}],"data":{"label":"immaccon"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_82576239_932D_92E1_41C2_195C23C7E0A0","areas":["this.HotspotPanoramaOverlayArea_83E5A2E9_932D_9361_41D5_AD96EF750B59"],"enabledInCardboard":true,"maps":[]},{"id":"HotspotPanoramaOverlayArea_9DD40441_92FA_96A1_41E0_97BFB06FD002","click":"this.openLink(this.translate('LinkBehaviour_9D488EB9_92FA_B3E1_41D6_E0798941126F.source'), '_blank')","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"class":"ImageResource","id":"res_82AFA499_92FD_97A1_41CC_7EAA1C3835F8","levels":[{"width":31,"class":"ImageResourceLevel","height":26,"url":"media/res_82AFA499_92FD_97A1_41CC_7EAA1C3835F8_0.png"}]},{"id":"HotspotPanoramaOverlayArea_829740B4_92EE_AFE7_41D5_D6881E5014BA","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"class":"ImageResource","id":"res_80F965D1_92EF_71A1_41D4_9BAB18C98F33","levels":[{"width":65,"class":"ImageResourceLevel","height":16,"url":"media/res_80F965D1_92EF_71A1_41D4_9BAB18C98F33_0.png"}]},{"class":"ImageResource","id":"res_81078298_931A_B3AF_41A7_98451985150A","levels":[{"width":843,"class":"ImageResourceLevel","height":843,"url":"media/res_81078298_931A_B3AF_41A7_98451985150A_0.png"}]},{"class":"ImageResource","id":"res_8219B1B2_932F_71E3_41CD_95CD914A7121","levels":[{"width":53,"class":"ImageResourceLevel","height":13,"url":"media/res_8219B1B2_932F_71E3_41CD_95CD914A7121_0.png"}]},{"id":"HotspotPanoramaOverlayArea_83E5A2E9_932D_9361_41D5_AD96EF750B59","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"toolTipHorizontalAlign":"center","scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setValue":TDV.Tour.Script.setValue,"showWindow":TDV.Tour.Script.showWindow,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"init":TDV.Tour.Script.init,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizFinish":TDV.Tour.Script.quizFinish,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"downloadFile":TDV.Tour.Script.downloadFile,"unregisterKey":TDV.Tour.Script.unregisterKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playAudioList":TDV.Tour.Script.playAudioList,"registerKey":TDV.Tour.Script.registerKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initQuiz":TDV.Tour.Script.initQuiz,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setLocale":TDV.Tour.Script.setLocale,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"clone":TDV.Tour.Script.clone,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"translate":TDV.Tour.Script.translate,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumePlayers":TDV.Tour.Script.resumePlayers},"scrollBarVisible":"rollOver","shadow":false,"paddingLeft":0,"vrPolyfillScale":0.75,"borderRadius":0,"mediaActivationMode":"window","height":"100%","backgroundColorDirection":"vertical","scrollBarColor":"#000000","paddingRight":0};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Tue Jan 25 2022